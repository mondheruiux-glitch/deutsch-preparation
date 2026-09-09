import React, { useState } from 'react';
import { SchreibenTheme } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  Edit3, 
  MessageCircle, 
  Mail, 
  Volume2, 
  Copy, 
  Check, 
  Sparkles, 
  RotateCcw,
  Eye,
  EyeOff,
  Lightbulb
} from 'lucide-react';
import { playGermanAudio } from '../utils/audio';
import { SchreibenTipsModal } from './SchreibenTipsModal';
import { FavoriteButton } from './FavoriteButton';

interface SchreibenThemeDetailProps {
  theme: SchreibenTheme;
  onBack: () => void;
}

export function SchreibenThemeDetail({ theme, onBack }: SchreibenThemeDetailProps) {
  const [userText, setUserText] = useState('');
  const [showAnswer, setShowAnswer] = useState(false);
  const [showTips, setShowTips] = useState(false);
  const [showVocab, setShowVocab] = useState(false);
  const [showSentences, setShowSentences] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showEnglish, setShowEnglish] = useState(true);

  const handleCopy = () => {
    navigator.clipboard.writeText(theme.modelAnswer.de);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-6 pb-24 md:pb-12 min-h-full flex flex-col">
      {/* Header Bar */}
      <div className="flex items-center justify-between mb-6">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white border border-surface-container-high text-on-surface shadow-sm hover:bg-surface-container transition-all active:scale-95 cursor-pointer font-medium text-sm"
        >
          <ArrowLeft size={18} />
          <span>Zurück zur Themenliste</span>
        </button>
        <div className="flex items-center gap-2">
          <FavoriteButton
            item={{
              id: theme.id,
              section: 'schreiben',
              title: theme.title,
              subtitle: 'Schreiben Thema'
            }}
            variant="inline"
          />
          <button
            onClick={() => setShowTips(true)}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-amber-500/15 text-amber-900 border border-amber-500/30 hover:bg-amber-500/25 transition-all active:scale-95 cursor-pointer font-bold text-xs shadow-xs"
            title="Prüfungstipps & W-Fragen öffnen"
          >
            <Lightbulb size={16} className="text-amber-600" />
            <span>Prüfungstipps</span>
          </button>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-primary-container text-primary">
            A1 Schreiben
          </span>
        </div>
      </div>

      <div className="mb-4">
        <h1 className="font-fredoka text-2xl sm:text-3xl font-medium text-on-surface">
          {theme.title}
        </h1>
        <p className="text-on-surface-variant text-sm mt-1">
          Lies die Situation sorgfältig durch und verfasse eine Antwort auf alle 3 Leitpunkte.
        </p>
      </div>

      {/* Responsive 2-Column Grid on Desktop / Stacking on Mobile */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
        
        {/* Left Column: Situation & Prompts & Helpers */}
        <div className="space-y-6">
          {/* Situation / Task */}
          <section>
            <h3 className="font-fredoka text-lg font-medium text-on-surface mb-3 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-primary-container text-primary flex items-center justify-center text-sm"><MessageCircle size={16} /></span>
              Situation & Leitpunkte
            </h3>
            <div className="bg-surface-container rounded-2xl p-5 shadow-md3-sm border border-surface-container-high">
              <p className="text-on-surface text-base whitespace-pre-wrap leading-relaxed font-medium">
                {theme.situation}
              </p>
              <div className="mt-5 pt-4 border-t border-surface-container-highest space-y-3">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-xs font-bold text-primary uppercase tracking-wider">Beantworte diese 3 Punkte:</p>
                  {!showAnswer && (
                    <span className="text-[11px] text-on-surface-variant font-medium bg-surface px-2 py-0.5 rounded-full border border-surface-container-high">
                      Übersetzungen bei Musterantwort
                    </span>
                  )}
                </div>
                {theme.questions.map((q, idx) => (
                  <div key={idx} className="flex gap-3 items-start bg-surface p-3 rounded-xl border border-surface-container-high">
                    <span className="w-6 h-6 rounded-full bg-primary-container text-primary flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <div>
                      <p className="text-on-surface font-medium text-sm sm:text-base">{q.de}</p>
                      {showAnswer && q.en && (
                        <p className="text-on-surface-variant text-xs mt-0.5 animate-fadeIn">{q.en}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Helper Expanders */}
          <div className="space-y-3">
            {/* Useful Sentences */}
            <div className="bg-surface-container rounded-2xl overflow-hidden shadow-md3-sm border border-surface-container-high">
              <button 
                onClick={() => setShowSentences(!showSentences)}
                className="w-full px-5 py-4 flex items-center justify-between bg-surface-container hover:bg-surface-container-high transition-colors cursor-pointer"
              >
                <span className="font-medium text-sm sm:text-base text-on-surface flex items-center gap-2">
                  📝 Nützliche Mustersätze (Templates)
                </span>
                {showSentences ? <ChevronUp size={20} className="text-primary" /> : <ChevronDown size={20} className="text-on-surface-variant" />}
              </button>
              <AnimatePresence>
                {showSentences && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 pt-0 space-y-2 border-t border-surface-container-high">
                      {theme.usefulSentences.map((s, i) => (
                        <div key={i} className="bg-surface p-3 rounded-xl border border-surface-container-high">
                          <p className="text-on-surface font-medium text-sm">{s.de}</p>
                          {showAnswer && s.en && (
                            <p className="text-on-surface-variant text-xs mt-0.5 animate-fadeIn">{s.en}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Vocabulary */}
            <div className="bg-surface-container rounded-2xl overflow-hidden shadow-md3-sm border border-surface-container-high">
              <button 
                onClick={() => setShowVocab(!showVocab)}
                className="w-full px-5 py-4 flex items-center justify-between bg-surface-container hover:bg-surface-container-high transition-colors cursor-pointer"
              >
                <span className="font-medium text-sm sm:text-base text-on-surface flex items-center gap-2">
                  💡 Hilfreicher Wortschatz
                </span>
                {showVocab ? <ChevronUp size={20} className="text-primary" /> : <ChevronDown size={20} className="text-on-surface-variant" />}
              </button>
              <AnimatePresence>
                {showVocab && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 pt-0 grid grid-cols-1 sm:grid-cols-2 gap-2 border-t border-surface-container-high">
                      {theme.vocabulary.map((v, i) => (
                        <div key={i} className="flex justify-between items-center bg-surface p-2.5 px-3 rounded-xl border border-surface-container-high">
                          <span className="text-on-surface font-medium text-sm">{v.de}</span>
                          {showAnswer && v.en && (
                            <span className="text-on-surface-variant text-xs animate-fadeIn">{v.en}</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Right Column: User Writing Area & Model Answer */}
        <div className="space-y-6">
          <section>
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-fredoka text-lg font-medium text-on-surface flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-primary-container text-primary flex items-center justify-center text-sm"><Edit3 size={16} /></span>
                Deine Antwort
              </h3>
              <div className="flex items-center gap-3">
                <span className="text-xs text-on-surface-variant font-medium">
                  {userText.trim().split(/\s+/).filter(Boolean).length} Wörter (Ziel: ca. 30 Wörter)
                </span>
                {userText && (
                  <button
                    onClick={() => setUserText('')}
                    className="text-xs text-on-surface-variant hover:text-error flex items-center gap-1 cursor-pointer transition-colors"
                    title="Text löschen"
                  >
                    <RotateCcw size={13} /> Text leeren
                  </button>
                )}
              </div>
            </div>
            <div className="relative">
              <textarea
                className="w-full bg-white text-on-surface placeholder:text-on-surface-variant rounded-2xl p-4 sm:p-5 min-h-[180px] sm:min-h-[200px] border-2 border-surface-container-high focus:border-primary focus:outline-none transition-colors shadow-sm resize-none text-base leading-relaxed"
                placeholder="Liebe Maria, / Lieber Tom,&#10;&#10;vielen Dank für deine E-Mail...&#10;&#10;Liebe Grüße&#10;[Dein Name]"
                value={userText}
                onChange={(e) => setUserText(e.target.value)}
              />
            </div>
          </section>

          {/* Toggle Button — Answer only appears when pressed */}
          <div className="flex justify-center pt-1">
            {!showAnswer ? (
              <button
                onClick={() => setShowAnswer(true)}
                className="bg-primary hover:bg-primary/90 text-white font-medium px-8 py-3.5 rounded-full text-sm sm:text-base active:scale-95 transition-all flex items-center gap-2.5 shadow-md3-md cursor-pointer"
              >
                <Eye size={19} />
                <span>Musterantwort anzeigen</span>
              </button>
            ) : (
              <button
                onClick={() => setShowAnswer(false)}
                className="bg-white border border-surface-container-high text-on-surface hover:bg-surface-container px-6 py-2.5 rounded-full text-sm font-medium active:scale-95 transition-all flex items-center gap-2 shadow-sm cursor-pointer"
              >
                <EyeOff size={18} />
                <span>Musterantwort ausblenden</span>
              </button>
            )}
          </div>

          {/* Model Answer E-Mail Card — Only appears when showAnswer is true */}
          <AnimatePresence>
            {showAnswer && (
              <motion.section
                initial={{ opacity: 0, y: 10, height: 0 }}
                animate={{ opacity: 1, y: 0, height: 'auto' }}
                exit={{ opacity: 0, y: 10, height: 0 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden bg-gradient-to-br from-success-container/40 via-success-container/20 to-surface-container border-2 border-success/30 rounded-2xl p-4 sm:p-5 shadow-sm space-y-4"
              >
                {/* Header with Title & Action Buttons */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-success/20">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-success text-white flex items-center justify-center shadow-xs">
                      <Mail size={19} />
                    </div>
                    <div>
                      <h4 className="font-fredoka text-success font-medium text-base sm:text-lg flex items-center gap-1.5 leading-tight">
                        <span>Antwort-E-Mail</span>
                        <span className="text-xs font-normal font-sans text-success/80">(Musterantwort)</span>
                      </h4>
                      <p className="text-xs text-on-surface-variant">ÖSD / Goethe A1 — ca. 30 Wörter</p>
                    </div>
                  </div>

                  {/* Action Toolbar */}
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    {/* Audio Button */}
                    <button
                      onClick={() => playGermanAudio(theme.modelAnswer.de, 0.8)}
                      className="px-3 py-1.5 rounded-xl bg-white border border-success/30 text-success hover:bg-success hover:text-white transition-all active:scale-95 shadow-xs cursor-pointer flex items-center gap-1.5 text-xs font-semibold"
                      title="Antwort-E-Mail auf Deutsch anhören"
                    >
                      <Volume2 size={16} />
                      <span>Vorlesen</span>
                    </button>

                    {/* Apply to Textarea Button */}
                    <button
                      onClick={() => setUserText(theme.modelAnswer.de)}
                      className="px-3 py-1.5 rounded-xl bg-white border border-primary/30 text-primary hover:bg-primary hover:text-white transition-all active:scale-95 shadow-xs cursor-pointer flex items-center gap-1.5 text-xs font-semibold"
                      title="Diese E-Mail in 'Deine Antwort' übernehmen"
                    >
                      <Sparkles size={16} />
                      <span>In Textfeld</span>
                    </button>

                    {/* Copy Button */}
                    <button
                      onClick={handleCopy}
                      className="px-3 py-1.5 rounded-xl bg-white border border-surface-container-high text-on-surface hover:bg-surface-container transition-all active:scale-95 shadow-xs cursor-pointer flex items-center gap-1.5 text-xs font-semibold"
                      title="E-Mail kopieren"
                    >
                      {copied ? <Check size={16} className="text-success" /> : <Copy size={16} />}
                      <span>{copied ? 'Kopiert!' : 'Kopieren'}</span>
                    </button>
                  </div>
                </div>

                {/* German Email Content */}
                <div className="bg-white rounded-xl p-4 sm:p-5 border border-success/25 shadow-xs">
                  <div className="flex items-center justify-between text-xs font-bold text-success uppercase tracking-wider mb-2.5">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 size={15} /> Offizielle E-Mail-Antwort (Deutsch)
                    </span>
                  </div>
                  <p className="text-on-surface text-base sm:text-lg whitespace-pre-wrap font-medium leading-relaxed font-sans">
                    {theme.modelAnswer.de}
                  </p>
                </div>

                {/* English Translation */}
                {theme.modelAnswer.en && (
                  <div className="bg-surface/80 rounded-xl p-3 sm:p-4 border border-outline-variant/30">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                        English Translation
                      </span>
                      <button
                        onClick={() => setShowEnglish(!showEnglish)}
                        className="text-xs text-primary font-medium hover:underline cursor-pointer"
                      >
                        {showEnglish ? 'Ausblenden' : 'Anzeigen'}
                      </button>
                    </div>
                    {showEnglish && (
                      <p className="text-on-surface-variant text-sm whitespace-pre-wrap leading-relaxed italic">
                        {theme.modelAnswer.en}
                      </p>
                    )}
                  </div>
                )}
              </motion.section>
            )}
          </AnimatePresence>
        </div>

      </div>

      {/* Prüfungstipps Modal */}
      <SchreibenTipsModal isOpen={showTips} onClose={() => setShowTips(false)} />
    </div>
  );
}
