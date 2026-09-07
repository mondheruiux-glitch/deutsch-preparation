import React, { useState } from 'react';
import { 
  X, 
  HelpCircle, 
  CheckCircle2, 
  AlertTriangle, 
  Repeat, 
  Lightbulb, 
  BookOpen, 
  Volume2,
  Table
} from 'lucide-react';
import { playGermanAudio } from '../utils/audio';

interface SchreibenTipsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const wFragenGuide = [
  {
    word: 'Wann?',
    meaning: 'When?',
    example: 'Wann kommen Sie?',
    response: 'Wir kommen am Samstag / um 18:00 Uhr.',
    category: 'Zeit'
  },
  {
    word: 'Wohin?',
    meaning: 'Where to? (Movement)',
    example: 'Wohin fahren wir?',
    response: 'Wir fahren nach Berlin / in den Park.',
    category: 'Richtung'
  },
  {
    word: 'Wo?',
    meaning: 'Where? (Location)',
    example: 'Wo treffen wir uns?',
    response: 'Wir treffen uns am Bahnhof / im Café.',
    category: 'Ort'
  },
  {
    word: 'Wie?',
    meaning: 'How?',
    example: 'Wie reisen wir?',
    response: 'Wir fahren mit dem Auto / Zug / Bus.',
    category: 'Art & Weise'
  },
  {
    word: 'Wer?',
    meaning: 'Who?',
    example: 'Wer kommt mit?',
    response: 'Mein Freund / Meine Schwester kommt mit.',
    category: 'Person'
  },
  {
    word: 'Was?',
    meaning: 'What?',
    example: 'Was machen wir?',
    response: 'Wir spielen Fußball / essen Pizza.',
    category: 'Sache / Aktivität'
  },
  {
    word: 'Warum?',
    meaning: 'Why?',
    example: 'Warum schreiben Sie?',
    response: 'Ich kann nicht kommen, weil ich krank bin.',
    category: 'Grund'
  }
];

const verbFlippers = [
  {
    title: '1. Reisen / Fahren',
    meaning: 'To travel / drive',
    icon: '🚗',
    question: 'Wohin reisen wir? / Wie fahren wir?',
    answer: 'Wir reisen nach... / Wir fahren mit dem...'
  },
  {
    title: '2. Bringen / Mitnehmen',
    meaning: 'To bring / take along',
    icon: '🎒',
    question: 'Was bringen Sie mit? / Was nimmst du mit?',
    answer: 'Ich bringe Salat mit. / Ich nehme Geld mit.'
  },
  {
    title: '3. Treffen',
    meaning: 'To meet',
    icon: '🤝',
    question: 'Wo treffen wir uns?',
    answer: 'Wir treffen uns am...'
  }
];

export function SchreibenTipsModal({ isOpen, onClose }: SchreibenTipsModalProps) {
  const [activeTab, setActiveTab] = useState<'w-fragen' | 'flippers' | 'rules' | 'formel'>('w-fragen');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-2 sm:p-4 md:p-6 overflow-y-auto">
      <div className="w-full sm:max-w-3xl bg-surface sm:rounded-3xl shadow-2xl flex flex-col max-h-[92vh] overflow-hidden border border-white/20">
        
        {/* Header */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-4 bg-surface-container-high shrink-0 border-b border-surface-container-highest">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-primary text-white flex items-center justify-center shadow-xs">
              <BookOpen size={20} />
            </div>
            <div>
              <h2 className="font-fredoka text-lg sm:text-xl font-medium text-on-surface">
                Schreiben — Prüfungstipps
              </h2>
              <p className="text-xs text-on-surface-variant">ÖSD & Goethe A1 Schreiben Guide</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-on-surface shadow-sm active:scale-95 hover:bg-surface-container transition-all cursor-pointer"
            title="Schließen"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-surface-container-highest bg-surface-container px-3 sm:px-6 gap-1 overflow-x-auto shrink-0 scrollbar-none py-1.5">
          <button
            onClick={() => setActiveTab('w-fragen')}
            className={`px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all shrink-0 flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'w-fragen' 
                ? 'bg-primary text-white shadow-xs' 
                : 'text-on-surface-variant hover:bg-surface hover:text-on-surface'
            }`}
          >
            <HelpCircle size={16} />
            <span>W-Fragen Guide</span>
          </button>

          <button
            onClick={() => setActiveTab('flippers')}
            className={`px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all shrink-0 flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'flippers' 
                ? 'bg-primary text-white shadow-xs' 
                : 'text-on-surface-variant hover:bg-surface hover:text-on-surface'
            }`}
          >
            <Repeat size={16} />
            <span>Golden Verb Flippers</span>
          </button>

          <button
            onClick={() => setActiveTab('rules')}
            className={`px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all shrink-0 flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'rules' 
                ? 'bg-primary text-white shadow-xs' 
                : 'text-on-surface-variant hover:bg-surface hover:text-on-surface'
            }`}
          >
            <Lightbulb size={16} />
            <span>3 Golden Rules</span>
          </button>

          <button
            onClick={() => setActiveTab('formel')}
            className={`px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all shrink-0 flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'formel' 
                ? 'bg-primary text-white shadow-xs' 
                : 'text-on-surface-variant hover:bg-surface hover:text-on-surface'
            }`}
          >
            <Table size={16} />
            <span>30-Wörter Formel</span>
          </button>
        </div>

        {/* Tab Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          
          {/* TAB 1: W-Fragen Guide */}
          {activeTab === 'w-fragen' && (
            <div className="space-y-4">
              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-4">
                <h3 className="font-fredoka text-base sm:text-lg text-primary flex items-center gap-2 mb-1">
                  <span>📋 The Ultimate A1 "W-Fragen" Response Guide</span>
                </h3>
                <p className="text-xs sm:text-sm text-on-surface-variant">
                  In the exam prompts, you will always be asked questions with these question words. Learn how to immediately form your response:
                </p>
              </div>

              <div className="flex flex-col gap-3">
                {wFragenGuide.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="bg-surface-container rounded-2xl p-4 border border-surface-container-high hover:border-primary/30 transition-all shadow-xs"
                  >
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-fredoka text-lg sm:text-xl font-bold text-primary bg-primary-container/80 px-2.5 py-0.5 rounded-xl">
                          {item.word}
                        </span>
                        <span className="text-xs sm:text-sm font-semibold text-on-surface-variant">
                          = {item.meaning}
                        </span>
                      </div>
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-surface text-on-surface-variant border border-surface-container-high">
                        {item.category}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-3 pt-2.5 border-t border-surface-container-highest">
                      {/* Prompt Question */}
                      <div className="bg-surface p-3 rounded-xl border border-surface-container-high">
                        <div className="text-[11px] font-bold text-primary/80 uppercase tracking-wider mb-1">
                          Example from Prompt:
                        </div>
                        <div className="flex items-start justify-between gap-2">
                          <p className="text-sm font-medium text-on-surface italic">
                            "{item.example}"
                          </p>
                          <button 
                            onClick={() => playGermanAudio(item.example, 0.8)}
                            className="text-primary hover:text-primary/70 shrink-0 p-1 cursor-pointer active:scale-90 transition-transform"
                            title="Anhören"
                          >
                            <Volume2 size={16} />
                          </button>
                        </div>
                      </div>

                      {/* Response Structure */}
                      <div className="bg-success-container/30 p-3 rounded-xl border border-success/20">
                        <div className="text-[11px] font-bold text-success uppercase tracking-wider mb-1 flex items-center gap-1">
                          <CheckCircle2 size={13} /> How to respond (Easy A1):
                        </div>
                        <div className="flex items-start justify-between gap-2">
                          <p className="text-sm font-medium text-on-surface">
                            {item.response}
                          </p>
                          <button 
                            onClick={() => playGermanAudio(item.response, 0.8)}
                            className="text-success hover:text-success/70 shrink-0 p-1 cursor-pointer active:scale-90 transition-transform"
                            title="Anhören"
                          >
                            <Volume2 size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: Golden Verb Flippers */}
          {activeTab === 'flippers' && (
            <div className="space-y-4">
              <div className="bg-secondary-container/50 border border-secondary/20 rounded-2xl p-4">
                <h3 className="font-fredoka text-base sm:text-lg text-on-secondary-container flex items-center gap-2 mb-1">
                  <span>🛠️ Cheat Sheet: The "Golden Verb Flippers"</span>
                </h3>
                <p className="text-xs sm:text-sm text-on-surface-variant">
                  When you see these common verbs in the question, you can immediately reuse them in your answer by changing the pronoun!
                </p>
              </div>

              <div className="space-y-3">
                {verbFlippers.map((flipper, idx) => (
                  <div 
                    key={idx}
                    className="bg-surface-container rounded-2xl p-4 sm:p-5 border border-surface-container-high shadow-xs"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl">{flipper.icon}</span>
                      <div>
                        <h4 className="font-fredoka text-base sm:text-lg text-on-surface font-medium">
                          {flipper.title}
                        </h4>
                        <p className="text-xs text-on-surface-variant italic">{flipper.meaning}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="bg-surface p-3.5 rounded-xl border border-surface-container-high">
                        <div className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider mb-1">
                          ❓ Question in Prompt:
                        </div>
                        <div className="flex items-start justify-between gap-2">
                          <p className="text-sm font-medium text-on-surface">
                            {flipper.question}
                          </p>
                          <button 
                            onClick={() => playGermanAudio(flipper.question, 0.8)}
                            className="text-primary hover:text-primary/70 shrink-0 p-1 cursor-pointer active:scale-90 transition-transform"
                            title="Anhören"
                          >
                            <Volume2 size={16} />
                          </button>
                        </div>
                      </div>

                      <div className="bg-success-container/30 p-3.5 rounded-xl border border-success/30">
                        <div className="text-[11px] font-bold text-success uppercase tracking-wider mb-1 flex items-center gap-1">
                          <CheckCircle2 size={13} /> 💬 Your Answer:
                        </div>
                        <div className="flex items-start justify-between gap-2">
                          <p className="text-sm font-bold text-on-surface">
                            {flipper.answer}
                          </p>
                          <button 
                            onClick={() => playGermanAudio(flipper.answer, 0.8)}
                            className="text-success hover:text-success/70 shrink-0 p-1 cursor-pointer active:scale-90 transition-transform"
                            title="Anhören"
                          >
                            <Volume2 size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: 3 Golden Rules */}
          {activeTab === 'rules' && (
            <div className="space-y-4">
              <div className="bg-amber-500/10 border border-amber-500/20 rounded-2xl p-4">
                <h3 className="font-fredoka text-base sm:text-lg text-amber-900 flex items-center gap-2 mb-1">
                  <span>💡 3 Golden Rules for the Exam Writing Section</span>
                </h3>
                <p className="text-xs sm:text-sm text-on-surface-variant">
                  Remember these 3 rules to protect your score and avoid common mistakes:
                </p>
              </div>

              {/* Rule 1 */}
              <div className="bg-surface-container rounded-2xl p-5 border border-surface-container-high space-y-3">
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-full bg-primary text-white font-bold flex items-center justify-center text-xs">
                    1
                  </span>
                  <h4 className="font-fredoka text-base sm:text-lg text-on-surface font-medium">
                    Rule 1: Lowercase after Greeting
                  </h4>
                </div>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Always put a <strong>comma</strong> after the greeting, and start the next sentence with a <strong>small letter</strong>!
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm pt-1">
                  <div className="p-3 bg-success-container/30 border border-success/30 rounded-xl">
                    <p className="font-bold text-success text-xs uppercase mb-1">✅ Richtig (Correct):</p>
                    <p className="font-medium text-on-surface">Lieber Max<strong>, w</strong>ir machen einen Ausflug...</p>
                  </div>
                  <div className="p-3 bg-error-container/30 border border-error/30 rounded-xl">
                    <p className="font-bold text-error text-xs uppercase mb-1">❌ Falsch (Wrong):</p>
                    <p className="font-medium text-on-surface line-through text-on-surface-variant">Lieber Max<strong>, W</strong>ir machen einen Ausflug...</p>
                  </div>
                </div>

                {/* Formal vs Informal Greeting */}
                <div className="mt-3 p-3 bg-primary-container/30 border border-primary/20 rounded-xl space-y-2">
                  <p className="text-xs font-bold text-primary uppercase tracking-wider flex items-center gap-1">🎓 Formal vs. Informal — Wann benutze ich was?</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                    <div className="bg-surface p-2.5 rounded-xl border border-surface-container-high">
                      <p className="text-[11px] font-bold text-on-surface-variant uppercase mb-1">📬 Formal (Firma / Institution)</p>
                      <p className="font-bold text-on-surface">Sehr geehrte Damen und Herren,</p>
                      <p className="text-xs text-on-surface-variant mt-1">→ Deutschkurs, Hotel, Büro, Schule</p>
                    </div>
                    <div className="bg-surface p-2.5 rounded-xl border border-surface-container-high">
                      <p className="text-[11px] font-bold text-on-surface-variant uppercase mb-1">💌 Informal (Freund / Familie)</p>
                      <p className="font-bold text-on-surface">Liebe Maria, / Lieber Tom,</p>
                      <p className="text-xs text-on-surface-variant mt-1">→ Freunde, Bekannte, Familie</p>
                    </div>
                  </div>
                  <p className="text-xs text-on-surface-variant">
                    Formal sign-off: <strong>Mit freundlichen Grüßen</strong> &nbsp;|&nbsp; Informal sign-off: <strong>Viele Grüße / Liebe Grüße</strong>
                  </p>
                </div>
              </div>

              {/* Rule 2 */}
              <div className="bg-surface-container rounded-2xl p-5 border border-surface-container-high space-y-3">
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-full bg-primary text-white font-bold flex items-center justify-center text-xs">
                    2
                  </span>
                  <h4 className="font-fredoka text-base sm:text-lg text-on-surface font-medium">
                    Rule 2: Keep it Subject-Verb-Object
                  </h4>
                </div>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Do not try to make long, complex sentences. Stick to: <strong>Person + Action + Extra Info</strong>.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm pt-1">
                  <div className="p-3 bg-success-container/30 border border-success/30 rounded-xl">
                    <p className="font-bold text-success text-xs uppercase mb-1">✅ Good & Safe (Volle Punkte):</p>
                    <p className="font-medium text-on-surface">Ich komme am Samstag.</p>
                  </div>
                  <div className="p-3 bg-error-container/30 border border-error/30 rounded-xl">
                    <p className="font-bold text-error text-xs uppercase mb-1">⚠️ Risky (Too complicated):</p>
                    <p className="font-medium text-on-surface text-on-surface-variant">Weil ich Zeit habe, werde ich am Samstag zu dir kommen.</p>
                  </div>
                </div>
              </div>

              {/* Rule 3 */}
              <div className="bg-surface-container rounded-2xl p-5 border border-surface-container-high space-y-3">
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-full bg-primary text-white font-bold flex items-center justify-center text-xs">
                    3
                  </span>
                  <h4 className="font-fredoka text-base sm:text-lg text-on-surface font-medium">
                    Rule 3: Answer EVERY point
                  </h4>
                </div>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  The examiner counts the bullet points. Even if your German isn't perfect, you get points just for <strong>answering all 3 or 4 prompts</strong>! Never leave a point unaddressed.
                </p>
                <div className="p-3 bg-primary-container/40 border border-primary/20 rounded-xl flex items-start gap-2.5">
                  <AlertTriangle size={18} className="text-primary shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-on-surface">
                    <strong>Tipp:</strong> 1 Satz pro Leitpunkt genügt völlig. 3 Leitpunkte = 3 Sätze + Anrede + Gruß = perfekte A1 E-Mail!
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: 30-Wörter Formel & Aufbau */}
          {activeTab === 'formel' && (
            <div className="space-y-4">
              <div className="bg-surface-container rounded-2xl p-5 border border-surface-container-high space-y-4">
                <h4 className="font-fredoka text-lg text-primary font-medium">
                  Die Standard A1-Aufbauformel (ca. 30 Wörter)
                </h4>

                <div>
                  <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">
                    1. Anrede (Greeting)
                  </p>
                  <p className="text-base font-medium text-on-surface bg-surface p-2.5 rounded-xl border border-surface-container-high">
                    <span className="block"><span className="text-xs font-bold text-primary uppercase mr-1">Formal:</span>Sehr geehrte Damen und Herren, <span className="text-xs text-on-surface-variant">(Firma, Schule, Institut)</span></span>
                    <span className="block mt-1"><span className="text-xs font-bold text-on-surface-variant uppercase mr-1">Informal:</span>Liebe Maria, <span className="text-xs text-on-surface-variant">(für Frauen)</span> / Lieber Tom, <span className="text-xs text-on-surface-variant">(für Männer)</span></span>
                  </p>
                </div>

                <div>
                  <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">
                    2. Die 3 Leitpunkte beantworten
                  </p>
                  <div className="p-3 bg-surface rounded-xl border border-surface-container-high space-y-1.5 text-sm">
                    <p className="text-on-surface">1. Vielen Dank für deine Einladung.</p>
                    <p className="text-on-surface">2. Ich komme sehr gerne mit.</p>
                    <p className="text-on-surface">3. Ich bringe einen Kuchen mit.</p>
                  </div>
                </div>

                <div>
                  <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">
                    3. Schlusssatz (Closing sentence)
                  </p>
                  <p className="text-base font-medium text-on-surface bg-surface p-2.5 rounded-xl border border-surface-container-high">
                    <span className="block"><span className="text-xs font-bold text-primary uppercase mr-1">Informal:</span>Ich warte auf deine Antwort.</span>
                    <span className="block mt-1"><span className="text-xs font-bold text-on-surface-variant uppercase mr-1">Formal:</span>Ich warte auf Ihre Antwort.</span>
                  </p>
                </div>

                <div>
                  <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">
                    4. Grußformel & Name (Sign-off)
                  </p>
                  <p className="text-base font-medium text-on-surface bg-surface p-2.5 rounded-xl border border-surface-container-high">
                    Liebe Grüße / Viele Grüße / Mit freundlichen Grüßen<br/>
                    <span className="text-on-surface-variant text-sm">[Dein Name]</span>
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-4 bg-surface-container-high border-t border-surface-container-highest flex items-center justify-between">
          <span className="text-xs text-on-surface-variant">ÖSD / Goethe Zertifikat A1</span>
          <button 
            onClick={onClose}
            className="px-6 py-2 bg-primary text-white rounded-xl font-medium text-sm hover:bg-primary/90 transition-colors cursor-pointer shadow-xs"
          >
            Verstanden
          </button>
        </div>

      </div>
    </div>
  );
}
