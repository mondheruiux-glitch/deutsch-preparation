import React, { useState, useRef, useEffect } from 'react';
import { BildWortschatzTopic } from '../types';
import { bildWortschatzTopics } from '../data/bildWortschatz';
import { ArrowLeft, ChevronDown, Brain, BookOpen, X, Volume2, PlayCircle, MessageCircle } from 'lucide-react';
import { playGermanAudio, stopGermanAudio } from '../utils/audio';
import { FavoriteButton } from './FavoriteButton';

interface BildWortschatzViewProps {
  selectedTopic: BildWortschatzTopic | null;
  onSelectTopic: (topic: BildWortschatzTopic | null) => void;
  onClose?: () => void;
}

const getArticleColor = (germanWord: string) => {
  if (germanWord.startsWith("der ")) return "border-blue-500 bg-blue-50 text-blue-900";
  if (germanWord.startsWith("die ") && !germanWord.includes("(Pl.)") && !germanWord.includes("Plural")) return "border-red-500 bg-red-50 text-red-900";
  if (germanWord.startsWith("das ")) return "border-green-500 bg-green-50 text-green-900";
  if (germanWord.includes("(Pl.)") || germanWord.includes("Plural") || germanWord.startsWith("die ")) return "border-yellow-500 bg-yellow-50 text-yellow-900";
  return "border-outline-variant bg-surface-container";
};

export function BildWortschatzView({ selectedTopic, onSelectTopic, onClose }: BildWortschatzViewProps) {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDetails, setShowDetails] = useState<BildWortschatzTopic | null>(null);
  const [fullScreenImage, setFullScreenImage] = useState<string | null>(null);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const isScrollingRef = useRef(false);

  const scrollToSlide = (index: number) => {
    if (index < 0 || index >= bildWortschatzTopics.length) return;
    setActiveSlideIndex(index);
    setShowDropdown(false);
    if (containerRef.current) {
      const slideHeight = containerRef.current.clientHeight;
      containerRef.current.scrollTo({
        top: index * slideHeight,
        behavior: 'smooth'
      });
    }
  };

  // Scroll to selectedTopic if passed in
  useEffect(() => {
    if (selectedTopic) {
      const idx = bildWortschatzTopics.findIndex(t => t.id === selectedTopic.id);
      if (idx !== -1) {
        scrollToSlide(idx);
      }
    }
  }, [selectedTopic]);

  const handleScroll = () => {
    if (containerRef.current) {
      const slideHeight = containerRef.current.clientHeight;
      if (slideHeight > 0) {
        const scrollPosition = containerRef.current.scrollTop;
        const newIndex = Math.round(scrollPosition / slideHeight);
        if (newIndex !== activeSlideIndex && newIndex >= 0 && newIndex < bildWortschatzTopics.length) {
          setActiveSlideIndex(newIndex);
        }
      }
    }
  };

  // Keyboard navigation for tablet / desktop (ArrowUp / ArrowDown / PageUp / PageDown / Space)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (showDetails || fullScreenImage) return;
      if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault();
        scrollToSlide(Math.min(bildWortschatzTopics.length - 1, activeSlideIndex + 1));
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        scrollToSlide(Math.max(0, activeSlideIndex - 1));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeSlideIndex, showDetails, fullScreenImage]);

  // Wheel listener for 1-by-1 step on mouse / trackpad
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      if (showDetails || fullScreenImage) return;
      if (Math.abs(e.deltaY) > 30) {
        if (isScrollingRef.current) return;
        isScrollingRef.current = true;
        if (e.deltaY > 0) {
          scrollToSlide(Math.min(bildWortschatzTopics.length - 1, activeSlideIndex + 1));
        } else {
          scrollToSlide(Math.max(0, activeSlideIndex - 1));
        }
        setTimeout(() => {
          isScrollingRef.current = false;
        }, 600);
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: true });
    return () => container.removeEventListener('wheel', handleWheel);
  }, [activeSlideIndex, showDetails, fullScreenImage]);

  const currentTopic = bildWortschatzTopics[activeSlideIndex];

  return (
    <div className="relative w-full h-full bg-black overflow-hidden flex flex-col font-nunito select-none">
      <style>{`
        @keyframes slideUp {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
        .animate-slide-up {
          animation: slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
      
      {/* Top Bar / Theme Dropdown */}
      <div className="absolute top-0 left-0 right-0 z-40 p-3 sm:p-4 pt-safe flex items-center justify-between pointer-events-none bg-gradient-to-b from-black/80 via-black/40 to-transparent">
        <div className="w-16" />

        <button 
          onClick={() => setShowDropdown(!showDropdown)}
          className="pointer-events-auto flex items-center gap-2 text-white font-fredoka text-base sm:text-lg bg-black/60 hover:bg-black/80 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full backdrop-blur-md active:scale-95 transition-all shadow-lg border border-white/20 cursor-pointer"
        >
          <span className="text-xl sm:text-2xl">{currentTopic?.icon}</span>
          <span className="truncate max-w-[180px] sm:max-w-xs">{currentTopic?.title}</span>
          <ChevronDown size={18} className={`transition-transform ${showDropdown ? 'rotate-180' : ''}`} />
        </button>

        {/* Counter Badge (e.g. 1 / 16) */}
        <div className="pointer-events-auto bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full text-white/90 text-xs sm:text-sm font-mono font-bold border border-white/20 shadow-md">
          {activeSlideIndex + 1} / {bildWortschatzTopics.length}
        </div>
      </div>

      {/* Theme Dropdown Menu */}
      {showDropdown && (
        <div className="absolute top-[72px] sm:top-[80px] left-4 right-4 sm:left-auto sm:right-auto sm:w-[420px] sm:left-1/2 sm:-translate-x-1/2 z-50 max-h-[65vh] overflow-y-auto bg-surface/95 backdrop-blur-xl rounded-3xl shadow-2xl flex flex-col p-2 border border-white/20">
          <div className="flex justify-between items-center p-3 mb-1 border-b border-outline-variant/30">
            <h3 className="font-fredoka text-lg font-medium text-on-surface">Thema wählen ({bildWortschatzTopics.length})</h3>
            <button onClick={() => setShowDropdown(false)} className="text-on-surface-variant p-1 bg-surface-container rounded-full cursor-pointer hover:bg-surface-container-high transition-colors">
              <X size={18} />
            </button>
          </div>
          <div className="space-y-1">
            {bildWortschatzTopics.map((topic, index) => (
              <button
                key={topic.id}
                onClick={() => scrollToSlide(index)}
                className={`w-full flex items-center gap-3 p-3 rounded-2xl text-left transition-colors cursor-pointer ${activeSlideIndex === index ? 'bg-primary-container text-primary font-bold' : 'text-on-surface hover:bg-surface-container'}`}
              >
                <span className="text-xl w-9 h-9 flex items-center justify-center bg-surface shadow-xs rounded-xl shrink-0">{topic.icon}</span>
                <span className="font-fredoka text-base flex-1 truncate">{topic.title}</span>
                {activeSlideIndex === index && <span className="text-xs text-primary font-bold">Aktiv</span>}
              </button>
            ))}
          </div>
        </div>
      )}
      
      {/* TikTok Style 1-by-1 Vertical Scroll Container */}
      <div 
        ref={containerRef}
        onScroll={handleScroll}
        className="w-full h-full overflow-y-scroll snap-y snap-mandatory scroll-smooth"
        style={{ 
          scrollbarWidth: 'none', 
          msOverflowStyle: 'none',
          scrollSnapType: 'y mandatory',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        {bildWortschatzTopics.map((topic) => (
          <div 
            key={topic.id} 
            className="w-full h-full min-h-full max-h-full snap-start snap-always relative overflow-hidden flex items-center justify-center shrink-0 select-none bg-black"
            style={{ 
              height: '100%', 
              scrollSnapAlign: 'start', 
              scrollSnapStop: 'always' 
            }}
          >
            {/* Ambient Background Blur to eliminate any void */}
            <img 
              src={topic.image} 
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover blur-3xl opacity-35 scale-110 pointer-events-none"
            />

            {/* Main Photo - Fits completely in tablet landscape so the whole photo is visible */}
            <img 
              src={topic.image} 
              alt={topic.title}
              className="relative w-full h-full max-w-full max-h-full object-cover landscape:object-contain sm:object-contain cursor-pointer select-none drop-shadow-2xl z-10 transition-all"
              onClick={() => setFullScreenImage(topic.image)} 
            />
            
            {/* Subtle Gradient Overlays for readable text without covering the photo */}
            <div className="absolute inset-x-0 bottom-0 h-44 sm:h-52 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none z-20" />
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/60 to-transparent pointer-events-none z-20" />

            {/* Content overlaid on image with subtle backdrop for landscape clarity */}
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-8 right-24 sm:right-32 z-30 flex flex-col gap-1 pointer-events-none max-w-xl">
              <div className="bg-black/40 sm:bg-black/30 backdrop-blur-md p-3 sm:p-4 rounded-2xl border border-white/15 inline-block shadow-lg">
                <h2 className="text-white font-fredoka text-xl sm:text-2xl md:text-4xl drop-shadow-xl leading-tight">
                  {topic.title}
                </h2>
                <p className="text-white/90 font-nunito text-sm sm:text-lg drop-shadow-md font-medium mt-0.5">
                  {topic.englishTitle}
                </p>
              </div>
            </div>
            
            {/* Action Buttons Side (TikTok style) */}
            <div className="absolute bottom-5 sm:bottom-8 right-4 sm:right-8 z-30 flex flex-col gap-4 items-center">
              {/* Favorite Button */}
              <div className="flex flex-col items-center gap-1 group">
                <FavoriteButton
                  item={{
                    id: String(topic.id),
                    section: 'bilder',
                    title: topic.title,
                    icon: topic.icon,
                    subtitle: topic.englishTitle
                  }}
                  iconSize={26}
                  className="!w-14 !h-14 sm:!w-16 sm:!h-16 !bg-white/25 hover:!bg-white/40 backdrop-blur-md !text-white border border-white/30 shadow-xl"
                />
                <span className="text-white text-xs font-bold font-nunito drop-shadow-md tracking-wider uppercase">Favorit</span>
              </div>

              <button 
                onClick={() => setShowDetails(topic)} 
                className="flex flex-col items-center gap-1 group cursor-pointer"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/25 hover:bg-white/40 backdrop-blur-md rounded-full flex flex-col items-center justify-center text-white p-2 group-active:scale-90 transition-all border border-white/30 shadow-xl">
                  <BookOpen size={28} />
                </div>
                <span className="text-white text-xs font-bold font-nunito drop-shadow-md tracking-wider uppercase">Lernen</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop/Tablet 1-by-1 Flipper Controls (Right Center) */}
      <div className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 z-40 flex-col gap-3 pointer-events-none">
        <button
          onClick={() => scrollToSlide(Math.max(0, activeSlideIndex - 1))}
          disabled={activeSlideIndex === 0}
          className="pointer-events-auto w-11 h-11 rounded-full bg-black/60 hover:bg-black/85 text-white backdrop-blur-md flex items-center justify-center disabled:opacity-20 transition-all active:scale-95 shadow-lg border border-white/20 cursor-pointer"
          title="Vorheriges Thema (Pfeil nach oben)"
        >
          <ChevronDown size={22} className="rotate-180" />
        </button>
        <button
          onClick={() => scrollToSlide(Math.min(bildWortschatzTopics.length - 1, activeSlideIndex + 1))}
          disabled={activeSlideIndex === bildWortschatzTopics.length - 1}
          className="pointer-events-auto w-11 h-11 rounded-full bg-black/60 hover:bg-black/85 text-white backdrop-blur-md flex items-center justify-center disabled:opacity-20 transition-all active:scale-95 shadow-lg border border-white/20 cursor-pointer"
          title="Nächstes Thema (Pfeil nach unten)"
        >
          <ChevronDown size={22} />
        </button>
      </div>

      {/* Details Overlay (Bottom Sheet on Mobile, Centered Modal on Desktop/Tablet) */}
      {showDetails && (
        <div className="absolute inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6 pointer-events-none">
          <div className="absolute inset-0 bg-black/70 pointer-events-auto transition-opacity backdrop-blur-xs" onClick={() => setShowDetails(null)} />
          <div className="w-full sm:max-w-2xl h-[90%] sm:h-[85vh] bg-surface rounded-t-3xl sm:rounded-3xl shadow-2xl relative pointer-events-auto flex flex-col overflow-hidden animate-slide-up border border-white/20">
            <div className="w-full flex justify-center pt-3 pb-2 bg-surface shrink-0 sm:hidden">
              <div className="w-12 h-1.5 bg-outline-variant rounded-full" />
            </div>
            <div className="absolute top-4 right-4 z-10">
              <button onClick={() => setShowDetails(null)} className="w-8 h-8 bg-surface-container rounded-full flex items-center justify-center text-on-surface-variant active:scale-95">
                <X size={20} />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4 pb-safe pb-48">
              <div className="flex items-center justify-between gap-3 mb-6 pr-8">
                <div className="flex items-center gap-3">
                  <span className="text-4xl bg-surface-container p-3 rounded-2xl shadow-sm shrink-0">{showDetails.icon}</span>
                  <div>
                    <h2 className="font-fredoka text-2xl font-medium text-on-surface leading-tight">{showDetails.title}</h2>
                    <p className="text-on-surface-variant">{showDetails.englishTitle}</p>
                  </div>
                </div>
                <FavoriteButton
                  item={{
                    id: String(showDetails.id),
                    section: 'bilder',
                    title: showDetails.title,
                    icon: showDetails.icon,
                    subtitle: showDetails.englishTitle
                  }}
                  variant="inline"
                />
              </div>

              {/* Vocabulary List */}
              <div className="mb-6">
                <h3 className="font-fredoka text-xl font-medium text-on-surface mb-3 flex items-center gap-2">
                  👀 Was sehe ich?
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {showDetails.vocabulary.map((vocab, idx) => (
                    <div 
                      key={idx}
                      className={`p-3 rounded-2xl border ${getArticleColor(vocab.german)} flex flex-col gap-1 shadow-sm active:scale-95 transition-transform cursor-pointer`}
                    >
                      <div className="flex justify-between items-start">
                        <span className="font-fredoka text-lg font-medium leading-tight">{vocab.german}</span>
                        <button
                          className="text-current opacity-60 hover:opacity-100 active:scale-90 shrink-0 transition-transform"
                          onClick={(e) => { e.stopPropagation(); playGermanAudio(vocab.german, 0.8); }}
                          title="Anhören"
                        >
                          <Volume2 size={16} />
                        </button>
                      </div>
                      <span className="text-sm opacity-80">{vocab.english}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sentences */}
              <div className="bg-surface-container p-4 rounded-3xl mb-6">
                <h3 className="font-fredoka text-xl font-medium text-on-surface mb-3 flex items-center gap-2">
                  🗣️ Sätze
                </h3>
                <div className="flex flex-col gap-3">
                  {showDetails.sentences.map((sentence, idx) => (
                    <div key={idx} className="bg-surface p-4 rounded-2xl shadow-sm border border-outline-variant/30 flex items-start gap-3">
                      <button
                        className="text-primary mt-1 shrink-0 active:scale-90 transition-transform"
                        onClick={() => playGermanAudio(sentence.german, 0.8)}
                        title="Satz anhören"
                      >
                        <PlayCircle size={20} />
                      </button>
                      <div>
                        <p className="font-medium text-on-surface text-lg mb-1 leading-snug">{sentence.german}</p>
                        <p className="text-on-surface-variant text-sm">{sentence.english}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* A1 Bildbeschreibung (sentence by sentence with audio) — shown if bildbeschreibung exists */}
              {showDetails.bildbeschreibung && showDetails.bildbeschreibung.length > 0 ? (
                <div className="mb-6">
                  <h3 className="font-fredoka text-xl font-medium text-on-surface mb-3 flex items-center gap-2">
                    📖 Bildbeschreibung
                  </h3>
                  <div className="flex flex-col gap-2">
                    {showDetails.bildbeschreibung.map((item, idx) => (
                      <div key={idx} className="bg-surface border border-outline-variant/30 p-3 rounded-2xl shadow-sm flex items-start gap-3">
                        <button
                          className="text-primary mt-1 shrink-0 active:scale-90 transition-transform"
                          onClick={() => playGermanAudio(item.de, 0.8)}
                          title="Satz anhören"
                        >
                          <PlayCircle size={20} />
                        </button>
                        <div>
                          <p className="font-medium text-on-surface text-base leading-snug">{item.de}</p>
                          <p className="text-on-surface-variant text-sm mt-0.5 italic">{item.en}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button
                    className="mt-3 flex items-center gap-2 text-primary font-bold text-sm bg-surface-container px-4 py-2 rounded-full active:scale-95 transition-transform"
                    onClick={() => playGermanAudio(showDetails.bildbeschreibung!.map(b => b.de).join(' '), 0.8)}
                    title="Alles vorlesen"
                  >
                    <Volume2 size={16} /> Alles vorlesen
                  </button>
                </div>
              ) : (
                /* Fallback: plain description */
                <div className="mb-6">
                  <h3 className="font-fredoka text-xl font-medium text-on-surface mb-3 flex items-center gap-2">
                    📝 Beschreibung
                  </h3>
                  <div className="bg-secondary-container p-5 rounded-3xl">
                    <div className="bg-surface p-4 rounded-2xl shadow-sm border border-outline-variant/30">
                      <p className="text-sm font-bold text-primary mb-2">Beispiel:</p>
                      <div className="space-y-2">
                        {showDetails.description.map((desc, idx) => (
                          <p key={idx} className="text-on-surface font-medium text-lg leading-relaxed">
                            {desc}
                          </p>
                        ))}
                      </div>
                      <button
                        className="mt-4 flex items-center gap-2 text-primary font-bold text-sm bg-surface-container px-4 py-2 rounded-full active:scale-95 transition-transform"
                        onClick={() => playGermanAudio(showDetails.description.join(' '), 0.8)}
                        title="Beschreibung vorlesen"
                      >
                        <Volume2 size={16} /> Vorlesen
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Fragen & Antworten — shown if fragen exists */}
              {showDetails.fragen && showDetails.fragen.length > 0 && (
                <div className="mb-6">
                  <h3 className="font-fredoka text-xl font-medium text-on-surface mb-3 flex items-center gap-2">
                    <MessageCircle size={20} className="text-primary" /> Fragen & Antworten
                  </h3>
                  <div className="flex flex-col gap-3">
                    {showDetails.fragen.map((item, idx) => (
                      <div key={idx} className="bg-surface border border-outline-variant/30 rounded-2xl overflow-hidden shadow-sm">
                        {/* Question */}
                        <div className="bg-primary-container px-4 py-3 flex items-start gap-3">
                          <button
                            className="text-primary mt-0.5 shrink-0 active:scale-90 transition-transform"
                            onClick={() => playGermanAudio(item.question, 0.8)}
                          >
                            <PlayCircle size={18} />
                          </button>
                          <div>
                            <p className="font-bold text-primary text-base leading-snug">{item.question}</p>
                            {item.questionEn && <p className="text-primary/70 text-xs mt-0.5 italic">{item.questionEn}</p>}
                          </div>
                        </div>
                        {/* Answer */}
                        <div className="px-4 py-3 flex items-start gap-3">
                          <button
                            className="text-secondary mt-0.5 shrink-0 active:scale-90 transition-transform"
                            onClick={() => playGermanAudio(item.answer, 0.8)}
                          >
                            <PlayCircle size={18} />
                          </button>
                          <div>
                            <p className="text-on-surface font-medium text-base leading-snug">{item.answer}</p>
                            {item.answerEn && <p className="text-on-surface-variant text-xs mt-0.5 italic">{item.answerEn}</p>}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      )}

      {/* Full Screen Image Modal */}
      {fullScreenImage && (
        <div className="absolute inset-0 z-[100] bg-black flex flex-col">
          <div className="flex justify-end p-4 pt-safe absolute top-0 right-0 z-10 w-full bg-gradient-to-b from-black/60 to-transparent pointer-events-none">
            <button
              onClick={() => setFullScreenImage(null)}
              className="bg-black/50 p-2 rounded-full text-white backdrop-blur-md active:scale-95 transition-transform pointer-events-auto"
            >
              <X size={24} />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto w-full h-full pb-safe">
            <img
              src={fullScreenImage}
              alt="Full size view"
              className="w-full min-h-full h-auto object-contain block"
            />
          </div>
        </div>
      )}
    </div>
  );
}
