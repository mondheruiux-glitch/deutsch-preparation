// Utility for German Audio playback using Google TTS with slow 0.8x rate and Web Speech API fallback

let currentAudio: HTMLAudioElement | null = null;

export const stopGermanAudio = () => {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentAudio = null;
  }
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    try {
      window.speechSynthesis.cancel();
    } catch (e) {
      // ignore
    }
  }
};

export const playGermanAudio = (text: string, rate: number = 0.8): Promise<void> => {
  return new Promise((resolve) => {
    if (!text || !text.trim()) {
      resolve();
      return;
    }

    stopGermanAudio();

    const cleanText = text.trim();

    // 1. Try Google Translate TTS (free Google voice)
    if (cleanText.length <= 200) {
      try {
        const url = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(cleanText)}&tl=de&client=tw-ob`;
        const audio = new Audio(url);
        audio.playbackRate = rate; // 0.8x slow speed requested
        currentAudio = audio;

        audio.onended = () => {
          currentAudio = null;
          resolve();
        };

        audio.onerror = () => {
          // If Google TTS network request fails, fallback to SpeechSynthesis
          currentAudio = null;
          fallbackSpeechSynthesis(cleanText, rate, resolve);
        };

        const playPromise = audio.play();
        if (playPromise !== undefined) {
          playPromise.catch((err) => {
            console.warn('Google TTS audio playback failed, falling back to Web Speech:', err);
            fallbackSpeechSynthesis(cleanText, rate, resolve);
          });
        }
        return;
      } catch (e) {
        console.warn('Error initiating Google TTS, using fallback:', e);
      }
    }

    // 2. Fallback to Web Speech Synthesis with Google voice and rate = 0.8
    fallbackSpeechSynthesis(cleanText, rate, resolve);
  });
};

const fallbackSpeechSynthesis = (text: string, rate: number = 0.8, onDone?: () => void) => {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    if (onDone) onDone();
    return;
  }

  try {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'de-DE';
    utterance.rate = rate; // 0.8x slow speed

    const setVoiceAndSpeak = () => {
      const voices = window.speechSynthesis.getVoices();
      const googleVoice = voices.find(
        (v) => v.lang.startsWith('de') && (v.name.toLowerCase().includes('google') || v.name.toLowerCase().includes('deutsch'))
      );
      const deVoice = googleVoice || voices.find((v) => v.lang.startsWith('de'));
      if (deVoice) {
        utterance.voice = deVoice;
      }

      utterance.onend = () => {
        if (onDone) onDone();
      };
      utterance.onerror = () => {
        if (onDone) onDone();
      };

      window.speechSynthesis.speak(utterance);
    };

    if (window.speechSynthesis.getVoices().length === 0) {
      window.speechSynthesis.onvoiceschanged = () => {
        setVoiceAndSpeak();
      };
    } else {
      setVoiceAndSpeak();
    }
  } catch (e) {
    console.error('Speech synthesis error:', e);
    if (onDone) onDone();
  }
};
