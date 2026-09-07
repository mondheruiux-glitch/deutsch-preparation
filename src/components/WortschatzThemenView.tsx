import React, { useState, useMemo } from 'react';
import { 
  ArrowLeft, Volume2, Search, Users, Home, ShoppingCart, 
  Apple, Utensils, Shirt, TreePine, Plane, Train, 
  Building2, BookOpen, Briefcase, Activity, Palette, 
  Maximize2, Compass, Sparkles, MessageSquareText, Crown,
  CheckCircle2, HelpCircle, RotateCcw, X, Mic
} from 'lucide-react';
import { wortschatzCategories, WortschatzCategory, WortschatzItem } from '../data/wortschatzThemen';
import { playGermanAudio } from '../utils/audio';

interface WortschatzThemenViewProps {
  onBack: () => void;
}

const ICON_MAP: Record<string, React.ReactNode> = {
  Users: <Users size={20} />,
  Home: <Home size={20} />,
  ShoppingCart: <ShoppingCart size={20} />,
  Apple: <Apple size={20} />,
  Utensils: <Utensils size={20} />,
  Shirt: <Shirt size={20} />,
  TreePine: <TreePine size={20} />,
  Plane: <Plane size={20} />,
  Train: <Train size={20} />,
  Building2: <Building2 size={20} />,
  BookOpen: <BookOpen size={20} />,
  Briefcase: <Briefcase size={20} />,
  Activity: <Activity size={20} />,
  Palette: <Palette size={20} />,
  Maximize2: <Maximize2 size={20} />,
  Compass: <Compass size={20} />,
  Sparkles: <Sparkles size={20} />,
  MessageSquareText: <MessageSquareText size={20} />,
  Crown: <Crown size={20} />
};

export function WortschatzThemenView({ onBack }: WortschatzThemenViewProps) {
  const [selectedCategoryId, setSelectedCategoryId] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeTab, setActiveTab] = useState<'themen' | 'bausteine' | 'quiz'>('themen');
  const [playingWord, setPlayingWord] = useState<string | null>(null);

  // Quiz state
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [answered, setAnswered] = useState(false);

  const selectedCategory = useMemo(() => {
    return wortschatzCategories.find(c => c.id === selectedCategoryId) || wortschatzCategories[0];
  }, [selectedCategoryId]);

  // Handle audio play with visual feedback
  const handlePlay = (text: string) => {
    setPlayingWord(text);
    playGermanAudio(text).finally(() => {
      setPlayingWord(null);
    });
  };

  // Filter items if searching
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return null;
    const q = searchQuery.toLowerCase().trim();
    const matches: { item: WortschatzItem; categoryTitle: string }[] = [];

    wortschatzCategories.forEach(cat => {
      cat.items.forEach(item => {
        if (item.de.toLowerCase().includes(q) || item.en.toLowerCase().includes(q)) {
          matches.push({ item, categoryTitle: cat.title });
        }
      });
    });
    return matches;
  }, [searchQuery]);

  // Quiz items pool (nouns with der/die/das)
  const quizQuestions = useMemo(() => {
    const nouns: { word: string; correct: string; full: string; en: string }[] = [];
    wortschatzCategories.forEach(cat => {
      cat.items.forEach(i => {
        if (i.article === 'der' || i.article === 'die' || i.article === 'das') {
          const parts = i.de.split(' ');
          if (parts.length >= 2) {
            const art = parts[0];
            const noun = parts.slice(1).join(' ');
            nouns.push({ word: noun, correct: art, full: i.de, en: i.en });
          }
        }
      });
    });
    return nouns.slice(0, 30);
  }, []);

  const currentQuestion = quizQuestions[quizIndex % quizQuestions.length];

  const handleQuizAnswer = (chosen: string) => {
    if (answered) return;
    setSelectedAnswer(chosen);
    setAnswered(true);
    if (chosen === currentQuestion.correct) {
      setQuizScore(s => s + 1);
      handlePlay(currentQuestion.full);
    }
  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    setAnswered(false);
    setQuizIndex(i => i + 1);
  };

  const resetQuiz = () => {
    setQuizIndex(0);
    setQuizScore(0);
    setSelectedAnswer(null);
    setAnswered(false);
  };

  const getArticleBadge = (article?: string) => {
    switch (article) {
      case 'der':
        return <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 border border-blue-200">der</span>;
      case 'die':
        return <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-rose-100 text-rose-800 border border-rose-200">die</span>;
      case 'das':
        return <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">das</span>;
      case 'plural':
        return <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-purple-100 text-purple-800 border border-purple-200">Plural</span>;
      case 'verb':
        return <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-200">Verb</span>;
      case 'adj':
        return <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-800 border border-indigo-200">Adjektiv</span>;
      case 'prep':
        return <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-teal-100 text-teal-800 border border-teal-200">Position</span>;
      default:
        return null;
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 pb-28 md:pb-16 min-h-full flex flex-col">
      {/* Top Bar with Back Button */}
      <div className="flex items-center justify-between gap-4 mb-6">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white border border-surface-container-high text-on-surface shadow-sm hover:bg-surface-container transition-all active:scale-95 cursor-pointer font-medium text-sm"
        >
          <ArrowLeft size={18} />
          <span>Zurück zu Sprechen</span>
        </button>
        <span className="text-xs font-bold px-3 py-1 rounded-full bg-primary/10 text-primary uppercase tracking-wider flex items-center gap-1.5 border border-primary/20">
          <Crown size={14} />
          Thema 0 • ÖSD A1 Wortschatz
        </span>
      </div>

      {/* Hero Header Banner */}
      <div className="relative rounded-3xl bg-gradient-to-r from-primary/95 via-primary to-primary-container p-6 sm:p-8 text-white shadow-md mb-6 overflow-hidden">
        <div className="relative z-10 max-w-3xl">
          <h1 className="font-fredoka text-2xl sm:text-3xl md:text-4xl font-bold mb-2 tracking-tight">
            🇩🇪 ÖSD A1 Sprechen — Wortschatz Themen
          </h1>
          <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-4">
            Die 19 wichtigsten Themenbereiche, typische Satzmuster für die Bildbeschreibung und alle A1-Vokabeln mit langsamer Aussprache (0.8x) & Quiz-Trainer.
          </p>

          {/* Mode Switcher */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <button
              onClick={() => { setActiveTab('themen'); setSearchQuery(''); }}
              className={`px-4 py-2 rounded-xl font-medium text-sm transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'themen' 
                  ? 'bg-white text-primary shadow-sm font-semibold' 
                  : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'
              }`}
            >
              <BookOpen size={16} />
              <span>19 Themenbereiche</span>
            </button>
            <button
              onClick={() => { setActiveTab('bausteine'); setSearchQuery(''); }}
              className={`px-4 py-2 rounded-xl font-medium text-sm transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'bausteine' 
                  ? 'bg-white text-primary shadow-sm font-semibold' 
                  : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'
              }`}
            >
              <MessageSquareText size={16} />
              <span>Satzmuster & Bild-Sätze</span>
            </button>
            <button
              onClick={() => { setActiveTab('quiz'); setSearchQuery(''); }}
              className={`px-4 py-2 rounded-xl font-medium text-sm transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'quiz' 
                  ? 'bg-white text-primary shadow-sm font-semibold' 
                  : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'
              }`}
            >
              <HelpCircle size={16} />
              <span>Artikel-Quiz (Trainer)</span>
            </button>
          </div>
        </div>

        {/* Decorative background glow */}
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-white/10 blur-3xl pointer-events-none" />
      </div>

      {/* Global Word Search Bar */}
      <div className="relative mb-6">
        <div className="relative flex items-center">
          <Search size={18} className="absolute left-4 text-on-surface-variant pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Wort oder Übersetzung suchen (z. B. Koffer, Rezeption, Arzt, links)..."
            className="w-full pl-11 pr-10 py-3 rounded-2xl bg-white border border-surface-container-high focus:border-primary shadow-sm outline-none text-on-surface text-sm transition-all"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="absolute right-3 text-on-surface-variant hover:text-on-surface p-1"
            >
              <X size={16} />
            </button>
          )}
        </div>
      </div>

      {/* SEARCH RESULTS VIEW */}
      {searchResults !== null ? (
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-on-surface">
              Suchergebnisse ({searchResults.length})
            </h2>
            <button
              onClick={() => setSearchQuery('')}
              className="text-xs text-primary font-medium hover:underline"
            >
              Suche zurücksetzen
            </button>
          </div>

          {searchResults.length === 0 ? (
            <div className="bg-white rounded-2xl p-8 text-center text-on-surface-variant border border-surface-container-high">
              <p>Keine passenden Wörter gefunden für „{searchQuery}“.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {searchResults.map((res, i) => (
                <div 
                  key={i}
                  className="bg-white rounded-2xl p-3.5 border border-surface-container-high shadow-sm hover:shadow transition-all flex items-center justify-between gap-3"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      {getArticleBadge(res.item.article)}
                      <span className="text-[11px] text-on-surface-variant truncate">
                        {res.categoryTitle}
                      </span>
                    </div>
                    <p className="font-semibold text-on-surface text-base truncate">
                      {res.item.de}
                    </p>
                    <p className="text-xs text-on-surface-variant truncate">
                      {res.item.en}
                    </p>
                  </div>
                  <button
                    onClick={() => handlePlay(res.item.de)}
                    className={`w-9 h-9 rounded-full shrink-0 flex items-center justify-center transition-all ${
                      playingWord === res.item.de
                        ? 'bg-primary text-white animate-pulse'
                        : 'bg-primary/10 text-primary hover:bg-primary hover:text-white'
                    }`}
                    title="Anhören (0.8x)"
                  >
                    <Volume2 size={16} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : activeTab === 'themen' ? (
        /* 19 THEMEN VIEW */
        <div className="flex flex-col gap-6">
          {/* Horizontal Category Selector Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
            {wortschatzCategories.map((cat) => {
              const isSelected = cat.id === selectedCategoryId;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategoryId(cat.id)}
                  className={`flex items-center gap-2 px-3.5 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold shrink-0 transition-all cursor-pointer border ${
                    isSelected
                      ? 'bg-primary text-white border-primary shadow-sm'
                      : 'bg-white text-on-surface-variant border-surface-container-high hover:bg-surface-container hover:text-on-surface'
                  }`}
                >
                  <span className="shrink-0">{ICON_MAP[cat.icon] || <BookOpen size={18} />}</span>
                  <span>{cat.id}. {cat.title.split('—')[0].trim()}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-surface-container text-on-surface-variant'
                  }`}>
                    {cat.items.length}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Selected Category Details */}
          <div className="bg-white rounded-3xl p-5 sm:p-6 border border-surface-container-high shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-4 border-b border-surface-container-high">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  {ICON_MAP[selectedCategory.icon] || <BookOpen size={24} />}
                </div>
                <div>
                  <h2 className="font-fredoka text-xl sm:text-2xl font-bold text-on-surface">
                    {selectedCategory.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-on-surface-variant font-medium">
                    {selectedCategory.subtitle} • {selectedCategory.items.length} Vokabeln
                  </p>
                </div>
              </div>

              {/* Play All button */}
              <button
                onClick={() => {
                  const allWords = selectedCategory.items.slice(0, 8).map(i => i.de).join('. ');
                  handlePlay(allWords);
                }}
                className="self-start sm:self-auto flex items-center gap-2 px-3 py-1.5 rounded-xl bg-primary/10 hover:bg-primary text-primary hover:text-white transition-all text-xs font-semibold"
              >
                <Volume2 size={15} />
                <span>Wörter vorlesen</span>
              </button>
            </div>

            {/* Exam Tip Banner */}
            {selectedCategory.tip && (
              <div className="mb-5 p-3.5 sm:p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm flex items-start gap-3">
                <span className="text-lg">💡</span>
                <p className="leading-relaxed">
                  <strong>Prüfungstipp:</strong> {selectedCategory.tip}
                </p>
              </div>
            )}

            {/* Example Sentences with Audio */}
            {selectedCategory.sentences && selectedCategory.sentences.length > 0 && (
              <div className="mb-6 bg-surface-container/50 rounded-2xl p-4 border border-surface-container-high">
                <h3 className="text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-2.5 flex items-center gap-1.5">
                  <MessageSquareText size={14} className="text-primary" />
                  Wichtige Bildbeschreibung-Sätze
                </h3>
                <div className="flex flex-col gap-2">
                  {selectedCategory.sentences.map((sentence, idx) => (
                    <div 
                      key={idx}
                      className="flex items-center justify-between gap-3 p-2.5 rounded-xl bg-white border border-surface-container-high text-xs sm:text-sm"
                    >
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-on-surface">
                          {sentence.de}
                        </p>
                        <p className="text-on-surface-variant text-xs">
                          {sentence.en}
                        </p>
                      </div>
                      <button
                        onClick={() => handlePlay(sentence.de)}
                        className="w-8 h-8 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white flex items-center justify-center shrink-0 transition-all"
                        title="Satz anhören"
                      >
                        <Volume2 size={15} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Vocabulary Grid */}
            <h3 className="text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-3 flex items-center justify-between">
              <span>Vokabeln ({selectedCategory.items.length})</span>
              <span className="text-[11px] font-normal text-on-surface-variant">Tippe auf 🔊 zum Anhören</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {selectedCategory.items.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3 sm:p-3.5 rounded-2xl bg-surface-container/30 hover:bg-surface-container/70 border border-surface-container-high transition-all flex items-center justify-between gap-3"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 mb-1">
                      {getArticleBadge(item.article)}
                    </div>
                    <p className="font-semibold text-on-surface text-sm sm:text-base leading-tight truncate">
                      {item.de}
                    </p>
                    <p className="text-xs text-on-surface-variant leading-tight truncate mt-0.5">
                      {item.en}
                    </p>
                  </div>

                  <button
                    onClick={() => handlePlay(item.de)}
                    className={`w-9 h-9 rounded-full shrink-0 flex items-center justify-center transition-all ${
                      playingWord === item.de
                        ? 'bg-primary text-white animate-pulse'
                        : 'bg-primary/10 text-primary hover:bg-primary hover:text-white active:scale-90'
                    }`}
                    title="Anhören (0.8x)"
                  >
                    <Volume2 size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : activeTab === 'bausteine' ? (
        /* SATZMUSTER (SECTION 18) */
        <div className="flex flex-col gap-6">
          <div className="bg-white rounded-3xl p-6 border border-surface-container-high shadow-sm">
            <h2 className="font-fredoka text-xl sm:text-2xl font-bold text-on-surface mb-2">
              🧠 Die 5 wichtigsten Bild-Satzmuster (ÖSD A1)
            </h2>
            <p className="text-sm text-on-surface-variant mb-6">
              Lerne diese Satzmuster auswendig! Mit diesen Bausteinen kannst du jedes Bild in der A1-Prüfung fließend und sicher beschreiben.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Baustein 1: Start */}
              <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-800">1. Der Anfang (Start)</span>
                  <span className="text-xs text-blue-700 font-medium">Einleitung</span>
                </div>
                <div className="flex flex-col gap-2">
                  {[
                    { de: 'Auf dem Bild sehe ich ...', en: 'In the picture I see ...' },
                    { de: 'Ich sehe einen Mann und eine Frau.', en: 'I see a man and a woman.' },
                    { de: 'Auf dem Bild sind zwei Personen.', en: 'In the picture there are two people.' }
                  ].map((s, i) => (
                    <div key={i} className="flex items-center justify-between bg-white p-2.5 rounded-xl border border-blue-100 text-xs sm:text-sm">
                      <div>
                        <p className="font-semibold text-on-surface">{s.de}</p>
                        <p className="text-on-surface-variant text-[11px]">{s.en}</p>
                      </div>
                      <button onClick={() => handlePlay(s.de)} className="p-1.5 rounded-lg bg-blue-100 text-blue-700 hover:bg-blue-200 shrink-0">
                        <Volume2 size={15} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Baustein 2: Personen */}
              <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-rose-800">2. Personen & Rollen</span>
                  <span className="text-xs text-rose-700 font-medium">Wer ist da?</span>
                </div>
                <div className="flex flex-col gap-2">
                  {[
                    { de: 'Der Mann ist der Kunde / Verkäufer.', en: 'The man is the customer / salesman.' },
                    { de: 'Die Frau ist der Gast an der Rezeption.', en: 'The woman is the guest at reception.' },
                    { de: 'Das Kind spielt draußen.', en: 'The child is playing outside.' }
                  ].map((s, i) => (
                    <div key={i} className="flex items-center justify-between bg-white p-2.5 rounded-xl border border-rose-100 text-xs sm:text-sm">
                      <div>
                        <p className="font-semibold text-on-surface">{s.de}</p>
                        <p className="text-on-surface-variant text-[11px]">{s.en}</p>
                      </div>
                      <button onClick={() => handlePlay(s.de)} className="p-1.5 rounded-lg bg-rose-100 text-rose-700 hover:bg-rose-200 shrink-0">
                        <Volume2 size={15} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Baustein 3: Positionen */}
              <div className="p-4 rounded-2xl bg-teal-50/70 border border-teal-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-teal-800">3. Wo ist was? (Position)</span>
                  <span className="text-xs text-teal-700 font-medium">Links, rechts, Mitte</span>
                </div>
                <div className="flex flex-col gap-2">
                  {[
                    { de: 'Links sehe ich einen Tisch.', en: 'On the left I see a table.' },
                    { de: 'In der Mitte steht ein Auto.', en: 'In the middle stands a car.' },
                    { de: 'Im Hintergrund sehe ich viele Bäume.', en: 'In the background I see many trees.' },
                    { de: 'Auf dem Tisch steht ein Teller.', en: 'On the table stands a plate.' }
                  ].map((s, i) => (
                    <div key={i} className="flex items-center justify-between bg-white p-2.5 rounded-xl border border-teal-100 text-xs sm:text-sm">
                      <div>
                        <p className="font-semibold text-on-surface">{s.de}</p>
                        <p className="text-on-surface-variant text-[11px]">{s.en}</p>
                      </div>
                      <button onClick={() => handlePlay(s.de)} className="p-1.5 rounded-lg bg-teal-100 text-teal-700 hover:bg-teal-200 shrink-0">
                        <Volume2 size={15} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Baustein 4: Aktionen */}
              <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-800">4. Was machen die Personen?</span>
                  <span className="text-xs text-amber-700 font-medium">Aktionen & Verben</span>
                </div>
                <div className="flex flex-col gap-2">
                  {[
                    { de: 'Der Mann arbeitet und telefoniert.', en: 'The man works and is on the phone.' },
                    { de: 'Die Frau bezahlt an der Kasse.', en: 'The woman pays at the checkout.' },
                    { de: 'Die Leute warten auf den Zug.', en: 'The people are waiting for the train.' }
                  ].map((s, i) => (
                    <div key={i} className="flex items-center justify-between bg-white p-2.5 rounded-xl border border-amber-100 text-xs sm:text-sm">
                      <div>
                        <p className="font-semibold text-on-surface">{s.de}</p>
                        <p className="text-on-surface-variant text-[11px]">{s.en}</p>
                      </div>
                      <button onClick={() => handlePlay(s.de)} className="p-1.5 rounded-lg bg-amber-100 text-amber-700 hover:bg-amber-200 shrink-0">
                        <Volume2 size={15} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Baustein 5: Vermutung */}
              <div className="p-4 rounded-2xl bg-purple-50/70 border border-purple-200 md:col-span-2">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-purple-800">5. Vermutung (Unsicherheit)</span>
                  <span className="text-xs text-purple-700 font-medium font-semibold">Sehr beliebt bei Prüfern!</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    { de: 'Ich glaube, dass sie im Hotel sind.', en: 'I think that they are in a hotel.' },
                    { de: 'Vielleicht ist das eine Buchhandlung.', en: 'Maybe this is a bookstore.' },
                    { de: 'Ich denke, der Mann ist der Chef.', en: 'I think the man is the boss.' },
                    { de: 'Das Wetter ist wahrscheinlich sonnig.', en: 'The weather is probably sunny.' }
                  ].map((s, i) => (
                    <div key={i} className="flex items-center justify-between bg-white p-2.5 rounded-xl border border-purple-100 text-xs sm:text-sm">
                      <div>
                        <p className="font-semibold text-on-surface">{s.de}</p>
                        <p className="text-on-surface-variant text-[11px]">{s.en}</p>
                      </div>
                      <button onClick={() => handlePlay(s.de)} className="p-1.5 rounded-lg bg-purple-100 text-purple-700 hover:bg-purple-200 shrink-0">
                        <Volume2 size={15} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* QUIZ MODE */
        <div className="flex flex-col gap-6 max-w-2xl mx-auto w-full">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-surface-container-high shadow-sm text-center">
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                Frage {quizIndex + 1} von {quizQuestions.length}
              </span>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                  Punkte: {quizScore}
                </span>
                <button
                  onClick={resetQuiz}
                  className="p-1.5 rounded-xl hover:bg-surface-container text-on-surface-variant hover:text-on-surface"
                  title="Quiz neu starten"
                >
                  <RotateCcw size={16} />
                </button>
              </div>
            </div>

            <p className="text-xs text-on-surface-variant font-medium mb-1">
              Welcher Artikel ist richtig?
            </p>
            <h2 className="font-fredoka text-3xl sm:text-4xl font-bold text-on-surface mb-2">
              ____ {currentQuestion.word}
            </h2>
            <p className="text-sm text-on-surface-variant mb-8">
              Bedeutung: <span className="font-medium text-on-surface">{currentQuestion.en}</span>
            </p>

            {/* Answer Options */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              {['der', 'die', 'das'].map((article) => {
                const isSelected = selectedAnswer === article;
                const isCorrect = article === currentQuestion.correct;
                let btnStyle = 'bg-surface-container/50 hover:bg-surface-container border-surface-container-high text-on-surface';

                if (answered) {
                  if (isCorrect) {
                    btnStyle = 'bg-emerald-500 text-white border-emerald-600 shadow-sm';
                  } else if (isSelected) {
                    btnStyle = 'bg-rose-500 text-white border-rose-600';
                  } else {
                    btnStyle = 'opacity-40 bg-surface-container border-surface-container-high text-on-surface';
                  }
                }

                return (
                  <button
                    key={article}
                    onClick={() => handleQuizAnswer(article)}
                    disabled={answered}
                    className={`py-4 rounded-2xl font-fredoka text-xl font-bold border-2 transition-all active:scale-95 cursor-pointer ${btnStyle}`}
                  >
                    {article}
                  </button>
                );
              })}
            </div>

            {/* Feedback & Next Button */}
            {answered && (
              <div className="flex flex-col items-center gap-4 pt-2">
                <div className="flex items-center gap-2">
                  {selectedAnswer === currentQuestion.correct ? (
                    <span className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200">
                      <CheckCircle2 size={16} /> Richtig! ({currentQuestion.full})
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-sm font-bold text-rose-700 bg-rose-50 px-3 py-1.5 rounded-xl border border-rose-200">
                      Richtig ist: {currentQuestion.full}
                    </span>
                  )}
                  <button
                    onClick={() => handlePlay(currentQuestion.full)}
                    className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white"
                  >
                    <Volume2 size={16} />
                  </button>
                </div>

                <button
                  onClick={handleNextQuestion}
                  className="px-6 py-2.5 rounded-xl bg-primary text-white font-semibold text-sm shadow-md hover:bg-primary/90 transition-all cursor-pointer"
                >
                  Nächste Frage →
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
