import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Mic, Square, AlertCircle, CheckCircle2 } from 'lucide-react';
import { Capacitor } from '@capacitor/core';
import { SpeechRecognition } from '@capacitor-community/speech-recognition';

interface VoiceTextInputProps {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  id?: string;
}

// Remove consecutive duplicate words (Android STT glitch)
const deduplicateText = (text: string) =>
  text.replace(/\b([a-zA-ZäöüÄÖÜß]+)(?:\s+\1)+\b/gi, '$1');

const combineTexts = (t1: string, t2: string) => {
  if (!t1) return t2;
  if (!t2) return t1;
  return t1.endsWith(' ') ? t1 + t2 : t1 + ' ' + t2;
};

// ─── NATIVE (Android / iOS via Capacitor plugin) ─────────────────────────────

function useNativeRecognition(
  value: string,
  onChangeRef: React.MutableRefObject<(v: string) => void>
) {
  const [isRecording, setIsRecording] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const baseRef = useRef('');
  const isRecordingRef = useRef(false);

  const start = useCallback(async () => {
    try {
      setError(null);
      // Request permission
      const perm = await SpeechRecognition.requestPermissions();
      if (perm.speechRecognition !== 'granted') {
        setError('Mikrofon-Berechtigung verweigert. Bitte in Android-Einstellungen > Apps > A1 Deutsch > Berechtigungen aktivieren.');
        return;
      }

      baseRef.current = value;
      isRecordingRef.current = true;
      setIsRecording(true);

      // Listen for partial results
      await SpeechRecognition.addListener('partialResults', (data: any) => {
        const matches: string[] = data.matches ?? [];
        if (matches.length > 0) {
          const interim = deduplicateText(matches[0]);
          const combined = combineTexts(baseRef.current, interim);
          onChangeRef.current(combined);
        }
      });

      await SpeechRecognition.start({
        language: 'de-DE',
        maxResults: 1,
        partialResults: true,
        popup: false,
      });
    } catch (e: any) {
      console.error('Native STT start error:', e);
      setError('Spracherkennung konnte nicht gestartet werden.');
      setIsRecording(false);
      isRecordingRef.current = false;
    }
  }, [value, onChangeRef]);

  const stop = useCallback(async () => {
    try {
      isRecordingRef.current = false;
      setIsRecording(false);
      await SpeechRecognition.stop();
      await SpeechRecognition.removeAllListeners();
    } catch (e) {
      console.warn('Native STT stop error:', e);
    }
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (isRecordingRef.current) {
        SpeechRecognition.stop().catch(() => {});
        SpeechRecognition.removeAllListeners().catch(() => {});
      }
    };
  }, []);

  return { isRecording, error, start, stop };
}

// ─── WEB (PC / Browser via Web Speech API) ──────────────────────────────────

function useWebRecognition(
  value: string,
  onChangeRef: React.MutableRefObject<(v: string) => void>
) {
  const [isRecording, setIsRecording] = useState(false);
  const [interimText, setInterimText] = useState('');
  const [error, setError] = useState<string | null>(null);

  const recognitionRef = useRef<any>(null);
  const initialValueRef = useRef('');
  const sessionFinalRef = useRef('');
  const shouldBeRecordingRef = useRef(false);

  useEffect(() => {
    const SR =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;
    if (!SR) {
      setError('Spracherkennung nicht unterstützt.');
      return;
    }
    const recognition = new SR();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'de-DE';
    recognition.maxAlternatives = 1;

    recognition.onstart = () => { setIsRecording(true); setError(null); };

    recognition.onresult = (event: any) => {
      let fin = '';
      let interim = '';
      for (let i = 0; i < event.results.length; i++) {
        const t = event.results[i][0].transcript;
        if (event.results[i].isFinal) fin += t + ' ';
        else interim += t;
      }
      fin = deduplicateText(fin.trim());
      interim = deduplicateText(interim);
      sessionFinalRef.current = fin;
      setInterimText(interim);
      onChangeRef.current(combineTexts(initialValueRef.current, fin));
    };

    recognition.onerror = (event: any) => {
      const err = event.error;
      if (err === 'not-allowed' || err === 'service-not-allowed') {
        setError('Mikrofon-Berechtigung verweigert.');
        shouldBeRecordingRef.current = false;
        setIsRecording(false);
      } else if (err === 'network') {
        setError('Netzwerkfehler – Internetverbindung prüfen.');
        shouldBeRecordingRef.current = false;
        setIsRecording(false);
      } else if (err === 'audio-capture') {
        setError('Mikrofon nicht verfügbar.');
        shouldBeRecordingRef.current = false;
        setIsRecording(false);
      } else if (err !== 'no-speech') {
        console.warn('STT:', err);
      }
    };

    recognition.onend = () => {
      if (sessionFinalRef.current) {
        initialValueRef.current = combineTexts(initialValueRef.current, sessionFinalRef.current);
        sessionFinalRef.current = '';
      }
      setInterimText('');
      if (shouldBeRecordingRef.current) {
        try { recognition.start(); } catch (_) {
          setIsRecording(false);
          shouldBeRecordingRef.current = false;
        }
      } else {
        setIsRecording(false);
      }
    };

    recognitionRef.current = recognition;
    return () => {
      shouldBeRecordingRef.current = false;
      try { recognition.abort(); } catch (_) {}
    };
  }, []); // created once

  const start = useCallback(() => {
    if (!recognitionRef.current) return;
    setError(null);
    initialValueRef.current = value;
    sessionFinalRef.current = '';
    shouldBeRecordingRef.current = true;
    try {
      recognitionRef.current.start();
    } catch (e: any) {
      if (!String(e).includes('already started')) console.error(e);
    }
  }, [value]);

  const stop = useCallback(() => {
    if (!recognitionRef.current) return;
    shouldBeRecordingRef.current = false;
    try { recognitionRef.current.stop(); } catch (_) {}
  }, []);

  return { isRecording, interimText, error, start, stop };
}

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────

const isNative = Capacitor.isNativePlatform();

export function VoiceTextInput({
  value,
  onChange,
  placeholder = 'Deine Antwort (Tippen oder sprechen)...',
  id,
}: VoiceTextInputProps) {
  // Stable ref so hooks below don't re-create on every render
  const onChangeRef = useRef(onChange);
  useEffect(() => { onChangeRef.current = onChange; }, [onChange]);

  // Always call both hooks (rules of hooks) but only USE the active one
  const native = useNativeRecognition(value, onChangeRef);
  const web = useWebRecognition(value, onChangeRef);

  const isRecording = isNative ? native.isRecording : web.isRecording;
  const error = isNative ? native.error : web.error;
  const interimText = isNative ? '' : web.interimText;

  const toggleRecording = useCallback(() => {
    if (isRecording) {
      isNative ? native.stop() : web.stop();
    } else {
      isNative ? native.start() : web.start();
    }
  }, [isRecording, native, web]);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };

  const displayValue = isRecording && interimText
    ? combineTexts(value, interimText)
    : value;

  return (
    <div className="w-full flex flex-col gap-2 relative">
      <div
        className={`relative border-2 rounded-2xl transition-all ${
          isRecording
            ? 'border-red-500 shadow-[0_0_0_3px_rgba(239,68,68,0.15)]'
            : 'border-surface-container-high focus-within:border-primary'
        } bg-surface-container`}
      >
        <textarea
          id={id}
          value={displayValue}
          onChange={handleTextChange}
          placeholder={placeholder}
          rows={4}
          className="w-full min-h-[120px] p-4 pb-14 bg-transparent resize-none outline-none text-on-surface font-medium leading-relaxed"
        />

        <div className="absolute bottom-2 right-2 left-2 flex items-center justify-between pointer-events-none">
          <div className="flex-1 min-w-0">
            {error && (
              <span className="text-xs text-red-700 bg-red-100 border border-red-200 px-2 py-1 rounded-lg ml-2 inline-flex items-center gap-1 max-w-full truncate">
                <AlertCircle size={13} className="shrink-0" />
                {error}
              </span>
            )}
            {isRecording && !error && (
              <span className="text-xs text-red-600 font-bold animate-pulse ml-2 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-600 inline-block animate-ping shrink-0" />
                Aufnahme läuft…
              </span>
            )}
            {!isRecording && !error && value && (
              <span className="text-xs text-success ml-2 flex items-center gap-1">
                <CheckCircle2 size={13} className="shrink-0" />
                Gespeichert
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={toggleRecording}
            className={`pointer-events-auto w-11 h-11 sm:w-12 sm:h-12 rounded-full transition-all shadow-md active:scale-90 flex items-center justify-center shrink-0 cursor-pointer ${
              isRecording
                ? 'bg-red-500 text-white hover:bg-red-600'
                : 'bg-primary text-white hover:bg-primary/90'
            }`}
            title={isRecording ? 'Aufnahme stoppen' : 'Sprechen (Mikrofon)'}
          >
            {isRecording ? (
              <Square size={18} className="fill-current" />
            ) : (
              <Mic size={22} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
