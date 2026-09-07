import React, { useState, useEffect, useRef } from 'react';
import { LesenTest, OesdTask } from '../types';
import { lesenTests } from '../data/lesen';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ChevronLeft, ChevronRight, CheckCircle2, XCircle } from 'lucide-react';

const AdBox = ({ children, badgeText }: { children: React.ReactNode, badgeText?: string }) => (
  <div className="relative bg-white border border-gray-200 rounded shadow-md p-5 ml-4 mt-2 mb-2">
    {badgeText && (
      <div className="absolute top-1/2 -left-4 -translate-y-1/2 bg-white border border-gray-300 text-gray-500 w-8 h-8 flex items-center justify-center text-sm font-bold shadow-sm">
        {badgeText}
      </div>
    )}
    <div className="text-gray-800 font-sans text-sm md:text-base whitespace-pre-wrap leading-relaxed">
      {children}
    </div>
  </div>
);

const XBox = ({ label, selected, onClick, correctState }: { label: string, selected: boolean, onClick?: () => void, correctState?: 'correct' | 'incorrect' | null }) => {
  let borderColor = 'border-gray-400';
  let textColor = 'text-gray-700';
  let crossColor = 'text-black';
  
  if (correctState === 'correct') {
    borderColor = 'border-green-600 bg-green-50';
    textColor = 'text-green-700';
    crossColor = 'text-green-700';
  } else if (correctState === 'incorrect') {
    borderColor = 'border-red-600 bg-red-50';
    textColor = 'text-red-700';
    crossColor = 'text-red-700';
  }

  return (
    <button 
      onClick={onClick} 
      disabled={!onClick}
      className={`w-16 h-10 bg-white border ${borderColor} flex items-center justify-center relative active:bg-gray-50 transition-colors`}
    >
      <span className={`${textColor} font-medium text-sm z-0`}>{label}</span>
      {selected && (
         <svg className={`absolute inset-0 w-full h-full ${crossColor} z-10 opacity-70`} viewBox="0 0 100 100" preserveAspectRatio="none">
           <line x1="10" y1="10" x2="90" y2="90" stroke="currentColor" strokeWidth="3" />
           <line x1="90" y1="10" x2="10" y2="90" stroke="currentColor" strokeWidth="3" />
         </svg>
      )}
    </button>
  );
};

// Helper: build a namespaced answer key to avoid ID collisions across tasks
const answerKey = (taskId: string, itemId: string) => `${taskId}::${itemId}`;

export const LesenView: React.FC = () => {
  const [viewState, setViewState] = useState<'list' | 'test' | 'review'>('list');
  const [activeTest, setActiveTest] = useState<LesenTest | null>(null);
  
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
  const [reviewTaskIndex, setReviewTaskIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  
  const [timeLeft, setTimeLeft] = useState(0);
  const timerRunning = useRef(false);

  useEffect(() => {
    if (viewState === 'test' && activeTest) {
       setTimeLeft(activeTest.timeLimitInMinutes * 60);
       setCurrentTaskIndex(0);
       setAnswers({});
       timerRunning.current = true;
    }
  }, [viewState, activeTest]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (viewState === 'test' && timerRunning.current && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(interval);
            timerRunning.current = false;
            setReviewTaskIndex(0);
            setViewState('review');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [viewState, timeLeft]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleSelectAnswer = (taskId: string, itemId: string, answer: string) => {
    const key = answerKey(taskId, itemId);
    setAnswers(prev => {
      if (prev[key] === answer) {
        const next = { ...prev };
        delete next[key];
        return next;
      }
      return { ...prev, [key]: answer };
    });
  };

  const handleSubmit = () => {
    timerRunning.current = false;
    setTimeLeft(0);
    setReviewTaskIndex(0);
    setViewState('review');
  };

  const handleNextTask = () => {
    if (activeTest && currentTaskIndex < activeTest.tasks.length - 1) {
      setCurrentTaskIndex(prev => prev + 1);
    }
  };

  const handlePrevTask = () => {
    if (currentTaskIndex > 0) {
      setCurrentTaskIndex(prev => prev - 1);
    }
  };

  // Compute score for a single task
  const getTaskScore = (task: OesdTask) => {
    let correct = 0;
    let total = 0;
    if (task.type === 'matching') {
      total = task.situations.length;
      task.situations.forEach(sit => {
        if (answers[answerKey(task.id, sit.id)] === task.answers[sit.id]) correct++;
      });
    } else if (task.type === 'yes_no') {
      task.items.forEach(item => {
        item.questions.forEach(q => {
          total++;
          if (answers[answerKey(task.id, q.id)] === q.answer) correct++;
        });
      });
    } else if (task.type === 'multiple_choice') {
      total = task.items.length;
      task.items.forEach(item => {
        if (answers[answerKey(task.id, item.id)] === item.answer) correct++;
      });
    }
    return { correct, total, wrong: total - correct };
  };

  const getTotalScore = () => {
    if (!activeTest) return { correct: 0, total: 0 };
    let correct = 0;
    let total = 0;
    activeTest.tasks.forEach(task => {
      const s = getTaskScore(task);
      correct += s.correct;
      total += s.total;
    });
    return { correct, total };
  };

  // ─── LIST VIEW ───────────────────────────────────────────────────────────────
  const renderList = () => (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 pb-24 md:pb-12 min-h-full flex flex-col">
      <div className="mb-6 sm:mb-8">
        <h1 className="font-fredoka text-2xl sm:text-3xl md:text-4xl font-medium text-on-surface mb-2 tracking-tight">
          ÖSD A1 Lesen
        </h1>
        <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed max-w-2xl">
          Offizielle Modelltests mit Situationen, Anzeigen, Ja/Nein-Aufgaben und Multiple-Choice.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {lesenTests.map(test => (
          <motion.button
            key={test.id}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            onClick={() => {
              setActiveTest(test);
              setViewState('test');
            }}
            className="w-full text-left bg-white p-5 sm:p-6 rounded-3xl shadow-sm hover:shadow-md border border-gray-200 transition-all flex items-center justify-between cursor-pointer"
          >
            <div>
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-blue-50 text-primary text-xs font-bold mb-2">
                Modelltest
              </span>
              <h3 className="font-fredoka text-lg sm:text-xl font-bold text-[#1a3b70]">{test.title}</h3>
              <p className="text-gray-500 text-xs sm:text-sm mt-1">{test.tasks.length} Aufgaben • {test.timeLimitInMinutes} Minuten</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-[#1a3b70] shrink-0">
              <ChevronRight size={22} />
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );

  // ─── TEST VIEW ────────────────────────────────────────────────────────────────
  const renderTest = () => {
    if (!activeTest) return null;
    const task = activeTest.tasks[currentTaskIndex];
    const isLastTask = currentTaskIndex === activeTest.tasks.length - 1;

    // Used ad IDs within the CURRENT task only (for opacity dimming)
    const usedAdIds = new Set(
      task.type === 'matching'
        ? task.situations.map(sit => answers[answerKey(task.id, sit.id)]).filter(Boolean)
        : []
    );

    return (
      <div className="flex flex-col h-full bg-[#f4f4f4] min-h-0">
        {/* Top Header with Timer */}
        <div className="bg-white border-b border-gray-200 shadow-xs px-4 sm:px-6 py-3 shrink-0">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <button 
              onClick={() => setViewState('list')} 
              className="flex items-center gap-2 text-[#1a3b70] font-medium text-sm hover:bg-gray-100 px-3 py-1.5 rounded-xl transition-colors cursor-pointer"
            >
              <ArrowLeft size={20} />
              <span className="hidden sm:inline">Tests Übersicht</span>
            </button>
            <div className="flex items-center gap-2">
              <span className="font-bold text-gray-800 text-sm sm:text-base">{activeTest.title}</span>
              <span className="text-xs text-gray-500 hidden md:inline">({currentTaskIndex + 1}/{activeTest.tasks.length})</span>
            </div>
            <div className={`px-3 py-1 rounded-lg font-mono text-sm sm:text-base font-bold shadow-sm flex items-center gap-1.5 ${timeLeft <= 60 ? 'bg-red-600 animate-pulse' : 'bg-black'} text-white`}>
              <span className={`w-2 h-2 rounded-full ${timeLeft <= 60 ? 'bg-white' : 'bg-green-400 animate-pulse'}`}></span>
              {formatTime(timeLeft)}
            </div>
          </div>
        </div>

        {/* Aufgabe Navigation Bar */}
        <div className="bg-[#00a0d2] text-white shrink-0">
          <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 py-2.5">
            <button 
              onClick={handlePrevTask} 
              className={`p-1.5 rounded-xl hover:bg-white/10 transition-colors flex items-center gap-1 text-sm font-medium cursor-pointer ${currentTaskIndex === 0 ? 'opacity-30 pointer-events-none' : ''}`} 
              disabled={currentTaskIndex === 0}
            >
              <ChevronLeft size={24} />
              <span className="hidden sm:inline">Zurück</span>
            </button>
            <span className="font-bold text-base sm:text-lg md:text-xl tracking-wider uppercase">{task.title}</span>
            <button 
              onClick={handleNextTask} 
              className={`p-1.5 rounded-xl hover:bg-white/10 transition-colors flex items-center gap-1 text-sm font-medium cursor-pointer ${isLastTask ? 'opacity-30 pointer-events-none' : ''}`} 
              disabled={isLastTask}
            >
              <span className="hidden sm:inline">Weiter</span>
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Instruction Bar */}
        <div className="bg-[#eaf7fb] border-b border-[#00a0d2]/20 text-gray-800 text-sm sm:text-base font-medium leading-relaxed shrink-0 shadow-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
            {task.instruction}
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto pb-24 md:pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">

            {/* ── MATCHING TASK ── */}
            {task.type === 'matching' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                {/* Ads Section */}
                <div className="lg:col-span-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-gray-800 text-base flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-[#00a0d2] text-white flex items-center justify-center text-xs">A</span>
                      Anzeigen (Advertisements)
                    </h3>
                    <span className="text-xs text-gray-500 lg:hidden">← Wischen zum Lesen →</span>
                  </div>

                  {/* Desktop grid */}
                  <div className="hidden lg:grid grid-cols-2 gap-4">
                    {task.options.map(opt => (
                      <div
                        key={opt.id}
                        className={`w-full transition-opacity duration-300 ${usedAdIds.has(opt.id) ? 'opacity-30' : 'opacity-100'}`}
                      >
                        <AdBox badgeText={opt.id}>
                          {opt.isSign ? <span className="text-5xl text-center block w-full py-4">{opt.content}</span> : opt.content}
                        </AdBox>
                      </div>
                    ))}
                  </div>

                  {/* Mobile snap scroll */}
                  <div className="lg:hidden flex overflow-x-auto gap-4 pb-4 snap-x -mx-4 px-4">
                    {task.options.map(opt => (
                      <div
                        key={opt.id}
                        className={`snap-center shrink-0 w-[80vw] max-w-[300px] transition-opacity duration-300 ${usedAdIds.has(opt.id) ? 'opacity-30' : 'opacity-100'}`}
                      >
                        <AdBox badgeText={opt.id}>
                          {opt.isSign ? <span className="text-5xl text-center block w-full py-4">{opt.content}</span> : opt.content}
                        </AdBox>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Situations */}
                <div className="lg:col-span-6 bg-white p-5 sm:p-6 rounded-2xl shadow-sm border border-gray-200 space-y-5">
                  <h3 className="font-bold text-gray-800 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#1a3b70] text-white flex items-center justify-center text-xs">1</span>
                    Situationen — Welche Anzeige passt?
                  </h3>
                  <div className="divide-y divide-gray-100">
                    {task.situations.map(sit => (
                      <div key={sit.id} className="py-4 first:pt-0 last:pb-0 space-y-3">
                        <div className="flex gap-3 items-start">
                          <span className="w-6 h-6 rounded-full bg-gray-100 font-bold text-gray-700 text-xs flex items-center justify-center shrink-0 mt-0.5">
                            {sit.number}
                          </span>
                          <p className="text-gray-800 text-sm sm:text-base leading-snug font-medium">{sit.text}</p>
                        </div>
                        <div className="flex flex-wrap gap-2 pl-9">
                          {task.options.map(opt => (
                            <button
                              key={opt.id}
                              onClick={() => handleSelectAnswer(task.id, sit.id, opt.id)}
                              className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl font-bold text-sm border transition-all cursor-pointer ${
                                answers[answerKey(task.id, sit.id)] === opt.id 
                                  ? 'bg-[#00a0d2] text-white border-[#00a0d2] shadow-sm scale-105' 
                                  : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                              }`}
                            >
                              {opt.id}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ── YES/NO TASK ── */}
            {task.type === 'yes_no' && (
              <div className="space-y-6">
                {task.items.map((item, idx) => (
                  <div key={idx} className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-white p-5 sm:p-6 rounded-2xl shadow-sm border border-gray-200 items-start">
                    <div className="lg:col-span-6 w-full">
                      <AdBox>{item.text}</AdBox>
                    </div>
                    <div className="lg:col-span-6 flex flex-col gap-4 bg-[#eaf7fb]/60 p-4 sm:p-5 rounded-2xl border border-[#00a0d2]/15">
                      <h4 className="text-xs font-bold text-[#00a0d2] uppercase tracking-wider">Aufgaben zum Text</h4>
                      {item.questions.map(q => (
                        <div key={q.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#00a0d2]/15 pb-4 last:border-0 last:pb-0">
                          <div className="flex gap-2.5">
                            <span className="font-bold text-gray-600 mt-0.5 text-sm">{q.number}.</span>
                            <p className="text-gray-800 text-sm sm:text-base leading-snug font-medium">{q.text}</p>
                          </div>
                          <div className="flex justify-end gap-2.5 shrink-0 pl-6 sm:pl-0">
                            <XBox label="Ja" selected={answers[answerKey(task.id, q.id)] === 'JA'} onClick={() => handleSelectAnswer(task.id, q.id, 'JA')} />
                            <XBox label="Nein" selected={answers[answerKey(task.id, q.id)] === 'NEIN'} onClick={() => handleSelectAnswer(task.id, q.id, 'NEIN')} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* ── MULTIPLE CHOICE TASK ── */}
            {task.type === 'multiple_choice' && (
              <div className="space-y-6">
                {task.items.map((item) => (
                  <div key={item.id} className="p-5 sm:p-6 bg-white rounded-2xl shadow-sm border border-gray-200">
                    <div className={`grid grid-cols-1 ${item.text ? 'lg:grid-cols-2 gap-6' : ''} items-start`}>
                      {item.text && (
                        <div className="w-full mb-4 lg:mb-0">
                          <AdBox>
                            <div className="whitespace-pre-wrap leading-relaxed">{item.text}</div>
                          </AdBox>
                        </div>
                      )}
                      <div className="space-y-4">
                        <div className="flex gap-3 items-start">
                          <span className="w-6 h-6 rounded-full bg-primary-container text-primary font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                            {item.questionNumber}
                          </span>
                          <p className="font-bold text-gray-800 text-base sm:text-lg leading-snug">{item.question}</p>
                        </div>
                        <div className="space-y-2.5 pl-9">
                          {item.options.map(opt => (
                            <button
                              key={opt.id}
                              onClick={() => handleSelectAnswer(task.id, item.id, opt.id)}
                              className={`w-full text-left p-3.5 rounded-xl border flex items-center gap-3 transition-all cursor-pointer ${
                                answers[answerKey(task.id, item.id)] === opt.id
                                  ? 'bg-[#00a0d2]/10 border-[#00a0d2] text-gray-900 font-medium shadow-xs'
                                  : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100'
                              }`}
                            >
                              <span className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shrink-0 transition-colors ${
                                answers[answerKey(task.id, item.id)] === opt.id
                                  ? 'bg-[#00a0d2] text-white'
                                  : 'bg-white border border-gray-300 text-gray-600'
                              }`}>
                                {opt.id}
                              </span>
                              <span className="text-sm sm:text-base leading-snug">{opt.text}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* ── SUBMIT BUTTON (last task only) ── */}
            {isLastTask && (
              <div className="mt-8 p-6 bg-white rounded-2xl shadow-sm border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="font-bold text-gray-800 text-base">Alle Aufgaben bearbeitet?</h4>
                  <p className="text-sm text-gray-500">Klicke auf "Test abgeben" — die Lösungen werden Aufgabe für Aufgabe angezeigt.</p>
                </div>
                <button 
                  onClick={handleSubmit} 
                  className="w-full sm:w-auto px-8 py-3.5 bg-[#1a3b70] hover:bg-[#15305c] text-white rounded-xl font-bold text-base shadow-md active:scale-95 transition-all cursor-pointer"
                >
                  TEST ABGEBEN
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  // ─── REVIEW VIEW (task by task) ───────────────────────────────────────────────
  const renderReview = () => {
    if (!activeTest) return null;
    const task = activeTest.tasks[reviewTaskIndex];
    const { correct, total, wrong } = getTaskScore(task);
    const { correct: totalCorrect, total: grandTotal } = getTotalScore();
    const isLastReviewTask = reviewTaskIndex === activeTest.tasks.length - 1;

    return (
      <div className="flex flex-col h-full bg-[#f4f4f4] min-h-0">
        {/* Review Header */}
        <div className="bg-white border-b border-gray-200 shadow-xs px-4 sm:px-6 py-3 shrink-0">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <button 
              onClick={() => setViewState('list')} 
              className="flex items-center gap-2 text-[#1a3b70] font-medium text-sm hover:bg-gray-100 px-3 py-1.5 rounded-xl transition-colors cursor-pointer"
            >
              <ArrowLeft size={20} />
              <span className="hidden sm:inline">Übersicht</span>
            </button>
            <span className="font-bold text-gray-800 text-sm sm:text-base">Lösungen — {activeTest.title}</span>
            {/* Total score badge */}
            <div className="flex items-center gap-1.5 bg-[#1a3b70] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
              <span>{totalCorrect}/{grandTotal}</span>
              <span className="hidden sm:inline">Punkte</span>
            </div>
          </div>
        </div>

        {/* Task Nav Bar */}
        <div className="bg-[#00a0d2] text-white shrink-0">
          <div className="max-w-4xl mx-auto flex justify-between items-center px-4 sm:px-6 py-2.5">
            <button 
              onClick={() => setReviewTaskIndex(prev => Math.max(0, prev - 1))}
              className={`p-1.5 rounded-xl hover:bg-white/10 transition-colors flex items-center gap-1 text-sm font-medium cursor-pointer ${reviewTaskIndex === 0 ? 'opacity-30 pointer-events-none' : ''}`}
              disabled={reviewTaskIndex === 0}
            >
              <ChevronLeft size={24} />
              <span className="hidden sm:inline">Zurück</span>
            </button>
            <div className="flex flex-col items-center">
              <span className="font-bold text-base sm:text-lg md:text-xl tracking-wider uppercase">{task.title} — Lösungen</span>
            </div>
            {!isLastReviewTask ? (
              <button 
                onClick={() => setReviewTaskIndex(prev => prev + 1)}
                className="p-1.5 rounded-xl hover:bg-white/10 transition-colors flex items-center gap-1 text-sm font-medium cursor-pointer"
              >
                <span className="hidden sm:inline">Weiter</span>
                <ChevronRight size={24} />
              </button>
            ) : (
              <div className="w-16" />
            )}
          </div>
        </div>

        {/* Per-task Score Badge */}
        <div className="bg-white border-b border-gray-200 px-4 sm:px-6 py-3 shrink-0">
          <div className="max-w-4xl mx-auto flex items-center gap-3 flex-wrap">
            <div className="flex items-center gap-1.5 bg-green-100 text-green-800 text-sm font-bold px-3 py-1.5 rounded-full">
              <CheckCircle2 size={15} />
              <span>{correct} Richtig</span>
            </div>
            <div className="flex items-center gap-1.5 bg-red-100 text-red-800 text-sm font-bold px-3 py-1.5 rounded-full">
              <XCircle size={15} />
              <span>{wrong} Falsch</span>
            </div>
            <div className="text-sm text-gray-500 font-medium">
              {total} Fragen in dieser Aufgabe
            </div>
          </div>
        </div>

        {/* Review Content */}
        <div className="flex-1 overflow-y-auto pb-24 md:pb-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 space-y-4">

            {/* ── MATCHING REVIEW ── */}
            {task.type === 'matching' && task.situations.map(sit => {
              const myAnswer = answers[answerKey(task.id, sit.id)];
              const rightAnswer = task.answers[sit.id];
              const isCorrect = myAnswer === rightAnswer;
              return (
                <div key={sit.id} className={`p-4 sm:p-5 border-l-4 rounded-2xl bg-white border border-gray-200 shadow-xs ${isCorrect ? 'border-l-green-500' : 'border-l-red-500'}`}>
                  <div className="flex gap-3 mb-3 items-start">
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${isCorrect ? 'bg-green-500' : 'bg-red-500'} text-white`}>
                      {isCorrect ? <CheckCircle2 size={14} /> : <XCircle size={14} />}
                    </span>
                    <p className="text-gray-800 leading-snug font-medium text-sm sm:text-base">{sit.number}. {sit.text}</p>
                  </div>
                  <div className="flex flex-wrap gap-3 items-center bg-gray-50 p-3 rounded-xl border border-gray-200 text-sm mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-500 font-bold uppercase text-xs">Deine Antwort:</span>
                      <span className={`w-8 h-8 flex items-center justify-center font-bold rounded-lg text-sm ${isCorrect ? 'bg-green-600 text-white' : 'bg-red-500 text-white'}`}>
                        {myAnswer || '–'}
                      </span>
                    </div>
                    {!isCorrect && (
                      <div className="flex items-center gap-2 ml-auto">
                        <span className="text-green-700 font-bold uppercase text-xs">Richtig:</span>
                        <span className="w-8 h-8 flex items-center justify-center font-bold rounded-lg bg-green-600 text-white text-sm">
                          {rightAnswer}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-700 bg-blue-50/80 p-3 rounded-xl border border-blue-100">
                    <span className="font-bold text-[#1a3b70] block mb-1">Erklärung:</span>
                    {task.explanations[sit.id]}
                  </div>
                </div>
              );
            })}

            {/* ── YES/NO REVIEW ── */}
            {task.type === 'yes_no' && task.items.map(item =>
              item.questions.map(q => {
                const myAnswer = answers[answerKey(task.id, q.id)];
                const isCorrect = myAnswer === q.answer;
                return (
                  <div key={q.id} className={`p-4 sm:p-5 border-l-4 rounded-2xl bg-white border border-gray-200 shadow-xs ${isCorrect ? 'border-l-green-500' : 'border-l-red-500'}`}>
                    <div className="flex gap-3 mb-3 items-start">
                      <span className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${isCorrect ? 'bg-green-500' : 'bg-red-500'} text-white`}>
                        {isCorrect ? <CheckCircle2 size={14} /> : <XCircle size={14} />}
                      </span>
                      <p className="text-gray-800 leading-snug font-medium text-sm sm:text-base">{q.number}. {q.text}</p>
                    </div>
                    <div className="flex gap-3 items-center bg-gray-50 p-3 rounded-xl border border-gray-200 mb-3">
                      <span className="text-xs font-bold text-gray-500 uppercase">Auswahl:</span>
                      <XBox label="Ja" selected={myAnswer === 'JA' || q.answer === 'JA'} correctState={q.answer === 'JA' ? 'correct' : (myAnswer === 'JA' ? 'incorrect' : null)} />
                      <XBox label="Nein" selected={myAnswer === 'NEIN' || q.answer === 'NEIN'} correctState={q.answer === 'NEIN' ? 'correct' : (myAnswer === 'NEIN' ? 'incorrect' : null)} />
                    </div>
                    <div className="text-xs sm:text-sm text-gray-700 bg-blue-50/80 p-3 rounded-xl border border-blue-100">
                      <span className="font-bold text-[#1a3b70] block mb-1">Erklärung:</span>
                      {q.explanation}
                    </div>
                  </div>
                );
              })
            )}

            {/* ── MULTIPLE CHOICE REVIEW ── */}
            {task.type === 'multiple_choice' && task.items.map(item => {
              const myAnswer = answers[answerKey(task.id, item.id)];
              const isCorrect = myAnswer === item.answer;
              return (
                <div key={item.id} className={`p-4 sm:p-5 border-l-4 rounded-2xl bg-white border border-gray-200 shadow-xs ${isCorrect ? 'border-l-green-500' : 'border-l-red-500'}`}>
                  {item.text && (
                    <div className="bg-gray-50 p-3 rounded-xl text-sm text-gray-700 mb-3 whitespace-pre-wrap leading-relaxed border border-gray-200">
                      {item.text}
                    </div>
                  )}
                  <div className="flex gap-2 font-bold text-gray-800 mb-3 text-sm sm:text-base items-start">
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${isCorrect ? 'bg-green-500' : 'bg-red-500'} text-white`}>
                      {isCorrect ? <CheckCircle2 size={14} /> : <XCircle size={14} />}
                    </span>
                    <p>{item.questionNumber}. {item.question}</p>
                  </div>
                  <div className="space-y-2 mb-3">
                    {item.options.map(opt => (
                      <div
                        key={opt.id}
                        className={`p-2.5 rounded-xl text-sm flex items-center gap-2 ${
                          opt.id === item.answer
                            ? 'bg-green-50 border border-green-300 font-semibold text-green-900'
                            : myAnswer === opt.id
                            ? 'bg-red-50 border border-red-300 text-red-900'
                            : 'text-gray-600 bg-white border border-gray-200'
                        }`}
                      >
                        <span className="font-bold">{opt.id}.</span>
                        <span>{opt.text}</span>
                        {opt.id === item.answer && <span className="text-green-700 font-bold ml-auto text-xs">✓ Richtig</span>}
                        {myAnswer === opt.id && opt.id !== item.answer && <span className="text-red-600 font-bold ml-auto text-xs">✗ Deine Wahl</span>}
                      </div>
                    ))}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-700 bg-blue-50/80 p-3 rounded-xl border border-blue-100">
                    <span className="font-bold text-[#1a3b70] block mb-1">Erklärung:</span>
                    {item.explanation}
                  </div>
                </div>
              );
            })}

            {/* ── NEXT TASK / FINISH BUTTON ── */}
            <div className="pt-2">
              {!isLastReviewTask ? (
                <button
                  onClick={() => setReviewTaskIndex(prev => prev + 1)}
                  className="w-full py-4 bg-[#00a0d2] hover:bg-[#0090be] text-white rounded-2xl font-bold text-base shadow-sm transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  Weiter zu {activeTest.tasks[reviewTaskIndex + 1].title}
                  <ChevronRight size={20} />
                </button>
              ) : (
                <div className="space-y-3">
                  {/* Final score card */}
                  <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-xs text-center">
                    <p className="text-sm text-gray-500 mb-2">Gesamtergebnis</p>
                    <div className="text-4xl font-bold font-fredoka text-[#1a3b70] mb-1">{totalCorrect} / {grandTotal}</div>
                    <div className={`inline-block px-4 py-1 rounded-full text-sm font-bold mt-1 ${(totalCorrect / grandTotal) >= 0.6 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      {(totalCorrect / grandTotal) >= 0.6 ? '✅ BESTANDEN' : '❌ NICHT BESTANDEN'} (Mind. 60%)
                    </div>
                  </div>
                  <button
                    onClick={() => setViewState('list')}
                    className="w-full py-4 bg-[#1a3b70] hover:bg-[#15305c] text-white rounded-2xl font-bold text-base shadow-sm transition-colors cursor-pointer"
                  >
                    Zurück zur Testübersicht
                  </button>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    );
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={viewState}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.2 }}
        className="h-full"
      >
        {viewState === 'list' && renderList()}
        {viewState === 'test' && renderTest()}
        {viewState === 'review' && renderReview()}
      </motion.div>
    </AnimatePresence>
  );
};

export default LesenView;
