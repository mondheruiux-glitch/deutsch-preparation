const fs = require('fs');

const data = `import React, { useState, useEffect } from 'react';
import { LesenTest, OesdTask } from '../types';
import { lesenTests } from '../data/lesen';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';

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
      className={\`w-16 h-10 bg-white border \${borderColor} flex items-center justify-center relative active:bg-gray-50 transition-colors\`}
    >
      <span className={\`\${textColor} font-medium text-sm z-0\`}>{label}</span>
      {selected && (
         <svg className={\`absolute inset-0 w-full h-full \${crossColor} z-10 opacity-70\`} viewBox="0 0 100 100" preserveAspectRatio="none">
           <line x1="10" y1="10" x2="90" y2="90" stroke="currentColor" strokeWidth="3" />
           <line x1="90" y1="10" x2="10" y2="90" stroke="currentColor" strokeWidth="3" />
         </svg>
      )}
    </button>
  );
};

export const LesenView: React.FC = () => {
  const [viewState, setViewState] = useState<'list' | 'test' | 'result' | 'review'>('list');
  const [activeTest, setActiveTest] = useState<LesenTest | null>(null);
  
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    if (viewState === 'test' && activeTest) {
       setTimeLeft(activeTest.timeLimitInMinutes * 60);
       setCurrentTaskIndex(0);
       setAnswers({});
    }
  }, [viewState, activeTest]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (viewState === 'test' && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(interval);
            setViewState('result');
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
    return \`\${m.toString().padStart(2, '0')}:\${s.toString().padStart(2, '0')}\`;
  };

  const handleSelectAnswer = (id: string, answer: string) => {
    setAnswers(prev => ({ ...prev, [id]: answer }));
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

  const getScoreInfo = () => {
    if (!activeTest) return { score: 0, total: 0 };
    let score = 0;
    let total = 0;
    activeTest.tasks.forEach(task => {
      if (task.type === 'matching') {
        total += task.situations.length;
        task.situations.forEach(sit => {
          if (answers[sit.id] === task.answers[sit.id]) score++;
        });
      } else if (task.type === 'yes_no') {
        task.items.forEach(item => {
          total += item.questions.length;
          item.questions.forEach(q => {
            if (answers[q.id] === q.answer) score++;
          });
        });
      }
    });
    return { score, total };
  };

  const renderList = () => (
    <div className="flex flex-col h-full bg-[#f4eff0]">
      <div className="bg-[#1a3b70] text-white px-6 py-6 shadow-md shrink-0">
        <h1 className="text-3xl font-bold font-sans">Lesen</h1>
        <p className="mt-2 text-blue-100 opacity-90 text-sm md:text-base">Wähle einen Modelltest, um zu starten.</p>
      </div>
      <div className="flex-1 overflow-y-auto p-4">
        {lesenTests.map(test => (
          <motion.button
            key={test.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              setActiveTest(test);
              setViewState('test');
            }}
            className="w-full text-left bg-white p-5 rounded-xl shadow-sm border border-gray-200 mb-4 flex items-center justify-between"
          >
            <div>
              <h3 className="font-bold text-[#1a3b70] text-lg">{test.title}</h3>
              <p className="text-gray-500 text-sm mt-1">{test.tasks.length} Aufgaben • {test.timeLimitInMinutes} Min.</p>
            </div>
            <div className="text-[#1a3b70]">
              <ChevronRight size={24} />
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );

  const renderTest = () => {
    if (!activeTest) return null;
    const task = activeTest.tasks[currentTaskIndex];

    return (
      <div className="flex flex-col h-full bg-[#f4f4f4]">
        {/* Top Header with Timer */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#f5f5f5] shrink-0 border-b border-gray-300">
           <button onClick={() => setViewState('list')} className="text-[#1a3b70]"><ArrowLeft size={24}/></button>
           <h2 className="text-lg md:text-xl text-gray-800 font-sans tracking-wide font-bold">Learn German</h2>
           <div className="bg-black text-white px-2 py-1 rounded font-mono text-base md:text-lg font-bold shadow-sm flex items-center">
              {formatTime(timeLeft)}
           </div>
        </div>

        {/* Aufgabe Navigation Bar */}
        <div className="bg-[#00a0d2] text-white flex justify-between items-center px-4 py-3 shrink-0">
          <button onClick={handlePrevTask} className={\`p-1 rounded hover:bg-white/10 transition-colors \${currentTaskIndex === 0 ? 'opacity-30' : ''}\`} disabled={currentTaskIndex===0}>
             <ChevronLeft size={28} />
          </button>
          <span className="font-bold text-lg md:text-xl tracking-wider uppercase">{task.title}</span>
          <button onClick={handleNextTask} className={\`p-1 rounded hover:bg-white/10 transition-colors \${currentTaskIndex === activeTest.tasks.length-1 ? 'opacity-30' : ''}\`} disabled={currentTaskIndex === activeTest.tasks.length-1}>
             <ChevronRight size={28} />
          </button>
        </div>

        {/* Instruction Bar */}
        <div className="bg-[#eaf7fb] px-4 py-4 border-b border-[#00a0d2]/20 text-gray-800 text-sm md:text-base font-medium leading-relaxed shrink-0 shadow-sm">
          {task.instruction}
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto">
          {task.type === 'matching' && (
            <div className="flex flex-col">
              {/* Ads horizontal scroll */}
              <div className="flex overflow-x-auto gap-4 p-4 pb-4 snap-x bg-gray-50 border-b border-gray-200">
                {task.options.map(opt => (
                  <div key={opt.id} className="snap-center shrink-0 w-[85vw] max-w-[320px]">
                     <AdBox badgeText={opt.id}>
                       {opt.isSign ? <span className="text-6xl text-center block w-full py-4">{opt.content}</span> : opt.content}
                     </AdBox>
                  </div>
                ))}
              </div>
              
              {/* Situations */}
              <div className="p-4 space-y-6 bg-white">
                {task.situations.map(sit => (
                  <div key={sit.id} className="flex flex-col gap-3 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                     <div className="flex gap-3 items-start">
                        <span className="font-bold text-gray-500 mt-0.5">{sit.number}</span>
                        <p className="text-gray-800 leading-snug">{sit.text}</p>
                     </div>
                     <div className="flex flex-wrap gap-2 pl-6">
                        {task.options.map(opt => (
                          <button
                             key={opt.id}
                             onClick={() => handleSelectAnswer(sit.id, opt.id)}
                             className={\`w-10 h-10 rounded font-bold border transition-colors \${answers[sit.id] === opt.id ? 'bg-[#00a0d2] text-white border-[#00a0d2]' : 'bg-gray-50 text-gray-600 border-gray-300 hover:bg-gray-100'}\`}
                          >
                            {opt.id}
                          </button>
                        ))}
                     </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {task.type === 'yes_no' && (
            <div className="p-4 space-y-8 bg-white h-full">
              {task.items.map((item, idx) => (
                <div key={idx} className="flex flex-col gap-6 bg-white p-4 rounded shadow-sm border border-gray-200">
                   <div className="w-full">
                     <AdBox>{item.text}</AdBox>
                   </div>
                   <div className="flex flex-col gap-4 bg-[#eaf7fb] p-4 rounded border border-[#00a0d2]/10">
                     {item.questions.map(q => (
                       <div key={q.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#00a0d2]/20 pb-4 last:border-0 last:pb-0">
                          <div className="flex gap-3">
                             <span className="font-bold text-gray-600 mt-0.5">{q.number}</span>
                             <p className="text-gray-800 text-sm leading-snug">{q.text}</p>
                          </div>
                          <div className="flex justify-end gap-3 shrink-0">
                             <XBox label="Ja" selected={answers[q.id] === 'JA'} onClick={() => handleSelectAnswer(q.id, 'JA')} />
                             <XBox label="Nein" selected={answers[q.id] === 'NEIN'} onClick={() => handleSelectAnswer(q.id, 'NEIN')} />
                          </div>
                       </div>
                     ))}
                   </div>
                </div>
              ))}
            </div>
          )}

          {currentTaskIndex === activeTest.tasks.length - 1 && (
            <div className="p-6 bg-gray-50 border-t border-gray-200">
              <button 
                onClick={() => setViewState('result')} 
                className="w-full bg-[#1a3b70] text-white py-4 rounded font-bold text-lg shadow-md active:scale-95 transition-transform"
              >
                TEST BEENDEN
              </button>
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderResult = () => {
    const { score, total } = getScoreInfo();
    const passed = (score / total) >= 0.6;
    
    return (
      <div className="flex flex-col h-full bg-[#f4eff0]">
        <div className="bg-[#1a3b70] text-white px-6 py-4 shadow-md flex items-center shrink-0">
          <button onClick={() => setViewState('list')} className="mr-4"><ArrowLeft /></button>
          <h1 className="text-xl font-bold font-sans">Ergebnis</h1>
        </div>
        
        <div className="flex-1 overflow-y-auto p-6 flex flex-col items-center justify-center">
          <div className="bg-white p-8 rounded-2xl shadow-sm text-center max-w-md w-full border border-gray-200">
            <h2 className="text-2xl font-bold text-[#1a3b70] mb-6">Test abgeschlossen!</h2>
            
            <div className="relative w-48 h-48 mx-auto mb-6">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#E5E7EB" strokeWidth="3" />
                <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke={passed ? "#00a0d2" : "#EF4444"} strokeWidth="3" strokeDasharray={\`\${(score/total)*100}, 100\`} />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl font-bold text-[#1a3b70]">{score}</span>
                <span className="text-gray-500 font-medium">von {total}</span>
              </div>
            </div>
            
            <p className={\`text-lg font-bold mb-8 \${passed ? 'text-[#00a0d2]' : 'text-red-500'}\`}>
              {passed ? 'Bestanden!' : 'Nicht bestanden!'} (Mind. 60%)
            </p>

            <button 
              onClick={() => setViewState('review')}
              className="w-full bg-[#1a3b70] text-white py-4 rounded-xl font-bold text-lg mb-4 shadow-sm"
            >
              LÖSUNGEN ANSEHEN
            </button>
            <button 
              onClick={() => setViewState('list')}
              className="w-full bg-white text-[#1a3b70] border border-[#1a3b70] py-4 rounded-xl font-bold text-lg"
            >
              ZURÜCK ZUR ÜBERSICHT
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderReview = () => {
    if (!activeTest) return null;
    return (
      <div className="flex flex-col h-full bg-[#f4f4f4]">
        <div className="bg-[#1a3b70] text-white px-4 py-3 shadow-md flex items-center shrink-0">
          <button onClick={() => setViewState('result')} className="mr-4"><ArrowLeft /></button>
          <h1 className="text-xl font-bold font-sans">Lösungen</h1>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4">
          {activeTest.tasks.map((task) => (
            <div key={task.id} className="mb-8">
              <div className="bg-[#00a0d2] text-white px-4 py-3 font-bold mb-4 rounded shadow-sm text-lg uppercase tracking-wider">
                 {task.title}
              </div>
              
              {task.type === 'matching' && task.situations.map(sit => {
                 const isCorrect = answers[sit.id] === task.answers[sit.id];
                 return (
                   <div key={sit.id} className={\`p-4 mb-4 border-l-4 rounded bg-white shadow-sm \${isCorrect ? 'border-green-500' : 'border-red-500'}\`}>
                      <div className="flex gap-3 mb-3">
                        <span className="font-bold text-gray-500">{sit.number}</span>
                        <p className="text-gray-800 leading-snug">{sit.text}</p>
                      </div>
                      <div className="flex gap-4 items-center bg-gray-50 p-3 rounded mt-2">
                        <div className="text-sm text-gray-500 font-bold uppercase w-32">Deine Antwort:</div>
                        <div className={\`w-8 h-8 flex items-center justify-center font-bold rounded \${isCorrect ? 'bg-green-600 text-white' : 'bg-red-600 text-white'}\`}>
                          {answers[sit.id] || '-'}
                        </div>
                      </div>
                      {!isCorrect && (
                        <div className="flex gap-4 items-center bg-green-50 p-3 rounded mt-2">
                          <div className="text-sm text-green-700 font-bold uppercase w-32">Richtig:</div>
                          <div className="w-8 h-8 flex items-center justify-center font-bold rounded bg-green-600 text-white">
                            {task.answers[sit.id]}
                          </div>
                        </div>
                      )}
                      <div className="mt-4 text-sm text-gray-700 bg-blue-50 p-3 rounded border border-blue-100">
                         <span className="font-bold text-[#1a3b70] block mb-1">Erklärung:</span>
                         {task.explanations[sit.id]}
                      </div>
                   </div>
                 );
              })}

              {task.type === 'yes_no' && task.items.map(item => (
                 item.questions.map(q => {
                   const isCorrect = answers[q.id] === q.answer;
                   return (
                     <div key={q.id} className={\`p-4 mb-4 border-l-4 rounded bg-white shadow-sm \${isCorrect ? 'border-green-500' : 'border-red-500'}\`}>
                        <div className="flex gap-3 mb-3">
                          <span className="font-bold text-gray-500">{q.number}</span>
                          <p className="text-gray-800 leading-snug">{q.text}</p>
                        </div>
                        <div className="flex gap-4 items-center mt-4">
                           <XBox label="Ja" selected={answers[q.id] === 'JA' || q.answer === 'JA'} correctState={q.answer === 'JA' ? 'correct' : (answers[q.id] === 'JA' ? 'incorrect' : null)} />
                           <XBox label="Nein" selected={answers[q.id] === 'NEIN' || q.answer === 'NEIN'} correctState={q.answer === 'NEIN' ? 'correct' : (answers[q.id] === 'NEIN' ? 'incorrect' : null)} />
                        </div>
                        <div className="mt-4 text-sm text-gray-700 bg-blue-50 p-3 rounded border border-blue-100">
                           <span className="font-bold text-[#1a3b70] block mb-1">Erklärung:</span>
                           {q.explanation}
                        </div>
                     </div>
                   );
                 })
              ))}
            </div>
          ))}
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
        {viewState === 'result' && renderResult()}
        {viewState === 'review' && renderReview()}
      </motion.div>
    </AnimatePresence>
  );
};

export default LesenView;
`
fs.writeFileSync('src/components/LesenView.tsx', data);
