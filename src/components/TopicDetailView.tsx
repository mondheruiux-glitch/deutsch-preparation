import React, { useState } from 'react';
import { Topic } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, CheckCircle2, MessageCircle, Eye, Volume2 } from 'lucide-react';
import { VoiceTextInput } from './VoiceTextInput';
import { playGermanAudio } from '../utils/audio';
import { FavoriteButton } from './FavoriteButton';

interface TopicDetailViewProps {
  topic: Topic;
  onBack: () => void;
}

export function TopicDetailView({ topic, onBack }: TopicDetailViewProps) {
  const [showAnswers, setShowAnswers] = useState(false);
  
  const [bildbeschreibungInput, setBildbeschreibungInput] = useState('');
  const [situationInputs, setSituationInputs] = useState<Record<number, string>>({});

  const handleSituationInputChange = (index: number, val: string) => {
    setSituationInputs(prev => ({ ...prev, [index]: val }));
  };

  const situationPairs = topic.situation.reduce((acc, curr, idx, src) => {
    if (!curr.isAnswer) {
      const nextItem = src[idx + 1];
      const answer = nextItem?.isAnswer ? nextItem : null;
      acc.push({ question: curr, answer, originalIndex: idx });
    }
    return acc;
  }, [] as any[]);

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-4 sm:py-6 pb-24 md:pb-12">
      {/* Top Bar with Back Button */}
      <div className="flex items-center justify-between mb-4">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white border border-surface-container-high text-on-surface shadow-sm hover:bg-surface-container transition-all active:scale-95 cursor-pointer font-medium text-sm"
        >
          <ArrowLeft size={18} />
          <span>Zurück zur Übersicht</span>
        </button>
        <div className="flex items-center gap-2">
          <FavoriteButton
            item={{
              id: topic.id,
              section: 'sprechen',
              title: topic.title,
              subtitle: 'Sprechen Thema'
            }}
            variant="inline"
          />
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-primary-container text-primary">
            A1 Sprechen
          </span>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative w-full h-56 sm:h-72 md:h-96 rounded-2xl sm:rounded-3xl overflow-hidden bg-surface-container-high shadow-md mb-6">
        <img 
          src={topic.image} 
          alt={topic.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
          <div>
            <h1 className="font-fredoka text-2xl sm:text-3xl md:text-4xl font-medium text-white mb-1 drop-shadow-sm">
              {topic.title}
            </h1>
            <p className="text-white/90 text-sm sm:text-base flex items-center gap-2 drop-shadow-sm">
              🎙️ Sprechen oder ✍️ Schreiben — Bildbeschreibung & Alltagssituation
            </p>
          </div>
        </div>
      </div>

      <div className="bg-surface rounded-2xl sm:rounded-3xl">
        <div className="space-y-8">
            <section>
              <h3 className="font-fredoka text-xl font-medium text-on-surface mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-primary-container text-primary flex items-center justify-center text-sm">1</span>
                Bildbeschreibung
              </h3>
              
              <div className="mb-4 space-y-3">
                <p className="text-on-surface font-medium">Was sehen Sie auf dem Bild?</p>
                <VoiceTextInput 
                  value={bildbeschreibungInput} 
                  onChange={setBildbeschreibungInput} 
                  id="bildbeschreibung"
                />
              </div>

              <AnimatePresence>
                {showAnswers && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden">
                    <div className="bg-surface-container rounded-2xl p-4 shadow-md3-sm space-y-4 border border-surface-container-high mt-4">
                      <h4 className="font-bold text-on-surface-variant text-sm uppercase tracking-wider mb-2">Musterantwort</h4>
                        {topic.bildbeschreibung.map((phrase, idx) => (
                          <div key={idx} className="flex gap-3 items-start">
                            <div className="text-success mt-1 shrink-0"><CheckCircle2 size={18} /></div>
                            <div className="flex-1">
                              <p className="text-on-surface text-base font-medium leading-snug">{phrase.de}</p>
                              <p className="text-on-surface-variant text-sm mt-1">{phrase.en}</p>
                            </div>
                            <button
                              onClick={() => playGermanAudio(phrase.de, 0.8)}
                              className="text-primary shrink-0 mt-0.5 opacity-70 hover:opacity-100 active:scale-90 transition-transform"
                              title="Anhören"
                            >
                              <Volume2 size={18} />
                            </button>
                          </div>
                        ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </section>

            <section>
              <h3 className="font-fredoka text-xl font-medium text-on-surface mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-primary-container text-primary flex items-center justify-center text-sm">2</span>
                Situation & Fragen
              </h3>
              
              <div className="space-y-8">
                {situationPairs.map((pair, idx) => (
                  <div key={idx} className="space-y-3">
                    <div className="bg-primary-container/40 p-4 rounded-xl border border-primary-container">
                      <div className="flex items-start gap-2">
                        <div className="flex-1">
                          <p className="text-lg font-medium text-on-surface">{pair.question.de}</p>
                          {showAnswers && pair.question.en && (
                            <p className="text-on-surface-variant text-sm mt-1 animate-fadeIn">{pair.question.en}</p>
                          )}
                        </div>
                        <button
                          onClick={() => playGermanAudio(pair.question.de, 0.8)}
                          className="text-primary shrink-0 mt-1 opacity-70 hover:opacity-100 active:scale-90 transition-transform"
                          title="Frage anhören"
                        >
                          <Volume2 size={18} />
                        </button>
                      </div>
                    </div>
                    
                    <VoiceTextInput 
                      value={situationInputs[idx] || ''} 
                      onChange={(val) => handleSituationInputChange(idx, val)} 
                      id={`situation-${idx}`}
                    />

                    <AnimatePresence>
                      {showAnswers && pair.answer && (
                        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden">
                          <div className="bg-success-container/30 p-4 rounded-xl border border-success-container ml-4 mt-3">
                            <h4 className="font-bold text-success text-sm uppercase tracking-wider mb-2 flex items-center gap-1"><CheckCircle2 size={16}/> Musterantwort</h4>
                            <div className="flex items-start gap-2">
                              <div className="flex-1">
                                <p className="text-base font-medium text-on-surface">{pair.answer.de}</p>
                                <p className="text-on-surface-variant text-sm mt-1">{pair.answer.en}</p>
                              </div>
                              <button
                                onClick={() => playGermanAudio(pair.answer.de, 0.8)}
                                className="text-success shrink-0 mt-0.5 opacity-70 hover:opacity-100 active:scale-90 transition-transform"
                                title="Antwort anhören"
                              >
                                <Volume2 size={18} />
                              </button>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </section>

            <div className="flex justify-center pt-4">
              <button
                onClick={() => setShowAnswers(!showAnswers)}
                className={`font-medium px-8 py-4 rounded-full text-base active:scale-95 transition-transform flex items-center gap-3 shadow-md3-md ${showAnswers ? 'bg-surface-container-high text-on-surface' : 'bg-primary text-white'}`}
              >
                {showAnswers ? <Eye size={24} className="opacity-50" /> : <MessageCircle size={24} />}
                {showAnswers ? 'Musterantworten ausblenden' : 'Musterantworten anzeigen'}
              </button>
            </div>

            <AnimatePresence>
              {showAnswers && (
                <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="pt-4">
                  <h3 className="font-fredoka text-xl font-medium text-on-surface mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-primary-container text-primary flex items-center justify-center text-sm">3</span>
                    Mehr Wörter
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {topic.vocabulary.map((word, idx) => (
                        <div
                          key={idx}
                          className="bg-surface-container p-3 rounded-2xl shadow-[0_4px_0_0_#E8EAED] border-2 border-surface-container-high flex flex-col items-center justify-center text-center gap-1 cursor-pointer active:scale-95 transition-transform"
                          onClick={() => playGermanAudio(word.de, 0.8)}
                          title="Anhören"
                        >
                          <div className="flex items-center gap-1">
                            <span className="text-on-surface font-medium text-[15px] leading-tight">{word.de}</span>
                            <Volume2 size={13} className="text-primary opacity-60 shrink-0" />
                          </div>
                          <span className="text-on-surface-variant text-xs">{word.en}</span>
                        </div>
                      ))}
                  </div>
                </motion.section>
              )}
            </AnimatePresence>

            <div className="pt-8 pb-12 flex justify-center border-t border-surface-container-high mt-8">
              <button
                onClick={onBack}
                className="bg-surface-container border border-surface-container-high text-on-surface font-bold px-8 py-4 rounded-full active:bg-surface-container-high transition-colors flex items-center gap-2 shadow-md3-sm"
              >
                <CheckCircle2 size={24} className="text-success" />
                Thema abschließen
              </button>
            </div>

          </div>
        </div>
      </div>
  );
}
