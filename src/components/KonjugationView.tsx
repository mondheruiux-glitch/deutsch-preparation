import React, { useState } from 'react';
import { konjugationLessons } from '../data/konjugation';
import { ArrowLeft, CheckCircle2, ChevronRight } from 'lucide-react';

export function KonjugationView() {
  const [selectedLessonId, setSelectedLessonId] = useState<string | null>(null);

  const selectedLesson = konjugationLessons.find(l => l.id === selectedLessonId);

  if (selectedLesson) {
    return (
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-4 sm:py-6 pb-24 md:pb-12 min-h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <button 
            onClick={() => setSelectedLessonId(null)}
            className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white border border-surface-container-high text-on-surface shadow-sm hover:bg-surface-container transition-all active:scale-95 cursor-pointer font-medium text-sm"
          >
            <ArrowLeft size={18} />
            <span>Zurück zur Übersicht</span>
          </button>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-primary-container text-primary">
            Lektion {selectedLesson.number}
          </span>
        </div>
        
        {/* Content */}
        <div className="bg-surface rounded-2xl sm:rounded-3xl space-y-6">
          <div className="flex items-center gap-4 mb-6">
            <span className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center text-3xl shadow-sm shrink-0 ${selectedLesson.color}`}>
              {selectedLesson.icon}
            </span>
            <div>
              <span className="text-xs font-bold text-primary uppercase tracking-wider">A1 Grammatik</span>
              <h1 className="font-fredoka text-2xl sm:text-3xl md:text-4xl font-medium text-on-surface leading-tight">
                {selectedLesson.title}
              </h1>
            </div>
          </div>
          
          <div className="font-nunito text-base sm:text-lg text-on-surface space-y-6 overflow-x-auto">
            {selectedLesson.content}
          </div>
          
          {/* Finish Button */}
          <div className="pt-8 pb-12 flex justify-center border-t border-surface-container-high mt-8">
            <button
              onClick={() => setSelectedLessonId(null)}
              className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-3.5 rounded-full active:scale-95 transition-all flex items-center gap-2 shadow-md3-md text-base cursor-pointer"
            >
              <CheckCircle2 size={22} />
              Lektion abschließen
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 pb-24 md:pb-12 min-h-full flex flex-col">
      <div className="mb-6 sm:mb-8">
        <h1 className="font-fredoka text-2xl sm:text-3xl md:text-4xl font-medium text-on-surface mb-2 tracking-tight">
          Konjugation
        </h1>
        <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed max-w-2xl font-medium">
          🇩🇪 German A1 — Verb Conjugation Course & Grammatik-Regeln
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {konjugationLessons.map((lesson) => (
          <button
            key={lesson.id}
            onClick={() => setSelectedLessonId(lesson.id)}
            className="w-full bg-surface-container hover:bg-surface-container-high/60 hover:shadow-md border border-transparent hover:border-primary/20 transition-all rounded-3xl p-4 sm:p-5 flex items-center gap-4 text-left shadow-md3-sm cursor-pointer active:scale-[0.98]"
          >
            <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center text-2xl shrink-0 shadow-sm ${lesson.color}`}>
              {lesson.icon}
            </div>
            <div className="flex-1 min-w-0 text-left">
              <p className="text-xs font-bold text-primary mb-1 uppercase tracking-wider">Lektion {lesson.number}</p>
              <h3 className="font-fredoka text-lg sm:text-xl font-medium text-on-surface leading-tight truncate">
                {lesson.title}
              </h3>
            </div>
            <div className="w-8 h-8 rounded-full bg-surface flex items-center justify-center text-on-surface-variant shrink-0">
              <ChevronRight size={20} />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
