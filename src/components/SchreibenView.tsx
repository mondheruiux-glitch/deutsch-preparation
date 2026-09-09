import React, { useState } from 'react';
import { SchreibenTheme } from '../types';
import { schreibenThemes } from '../data/schreiben';
import { SchreibenThemeDetail } from './SchreibenThemeDetail';
import { SchreibenTipsModal } from './SchreibenTipsModal';
import * as Icons from 'lucide-react';
import { BookOpen, Info, CheckCircle2 } from 'lucide-react';
import { FavoriteButton } from './FavoriteButton';

interface SchreibenViewProps {
  selectedTheme: SchreibenTheme | null;
  onSelectTheme: (theme: SchreibenTheme | null) => void;
}

export function SchreibenView({ selectedTheme, onSelectTheme }: SchreibenViewProps) {
  const [showRules, setShowRules] = useState(false);

  if (selectedTheme) {
    return <SchreibenThemeDetail theme={selectedTheme} onBack={() => onSelectTheme(null)} />;
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 pb-24 md:pb-12 min-h-full flex flex-col">
      <div className="mb-6 sm:mb-8">
        <h1 className="font-fredoka text-2xl sm:text-3xl md:text-4xl font-medium text-on-surface mb-2 tracking-tight">
          Schreiben
        </h1>
        <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed max-w-2xl">
          Kurze Nachrichten, Briefe und E-Mails schreiben für die A1 Prüfung.
        </p>
      </div>

      {/* Rules Banner */}
      <div 
        onClick={() => setShowRules(true)}
        className="mb-8 bg-gradient-to-r from-primary-container to-secondary-container/40 rounded-3xl p-5 sm:p-6 flex items-center justify-between cursor-pointer hover:shadow-md active:scale-[0.99] transition-all border border-primary/10"
      >
        <div>
          <span className="inline-block px-2.5 py-0.5 rounded-full bg-primary text-white text-[11px] font-bold uppercase tracking-wider mb-2">
            Prüfungstipp
          </span>
          <h3 className="font-fredoka text-lg sm:text-xl font-medium text-on-primary-container mb-1">
            Wichtige Regeln & Aufbau-Formel
          </h3>
          <p className="text-on-primary-container/80 text-sm">
            Klicke hier für Tipps zur Grußformel, Satzstellung & Punktabzug vermeiden
          </p>
        </div>
        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/50 backdrop-blur-sm rounded-2xl flex items-center justify-center text-primary shrink-0 shadow-sm ml-4">
          <BookOpen size={26} />
        </div>
      </div>

      <div className="mb-4 flex items-center gap-2">
        <h2 className="font-fredoka text-xl font-medium text-on-surface">Themen</h2>
        <span className="bg-surface-container-high text-on-surface-variant text-xs px-2.5 py-1 rounded-full font-bold">
          {schreibenThemes.length}
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {schreibenThemes.map((theme, index) => {
          const IconComponent = (Icons as any)[theme.icon] || Icons.FileText;
          return (
            <div
              key={theme.id}
              role="button"
              tabIndex={0}
              onClick={() => onSelectTheme(theme)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectTheme(theme);
                }
              }}
              className="w-full bg-surface-container hover:bg-surface-container-high/60 hover:shadow-md border border-transparent hover:border-primary/20 transition-all rounded-3xl p-4 sm:p-5 flex items-center gap-4 text-left shadow-md3-sm cursor-pointer active:scale-[0.98]"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-surface rounded-2xl flex items-center justify-center shrink-0 shadow-sm text-primary">
                <IconComponent size={26} strokeWidth={2} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold text-primary mb-1 uppercase tracking-wider">
                  Thema {index + 1}
                </p>
                <h3 className="font-fredoka text-lg sm:text-xl font-medium text-on-surface truncate">
                  {theme.title}
                </h3>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <FavoriteButton
                  item={{
                    id: theme.id,
                    section: 'schreiben',
                    title: theme.title,
                    subtitle: `Thema ${index + 1}`
                  }}
                />
                <div className="w-8 h-8 rounded-full bg-surface flex items-center justify-center text-on-surface-variant shrink-0">
                  <Icons.ChevronRight size={20} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Rules Modal */}
      <SchreibenTipsModal isOpen={showRules} onClose={() => setShowRules(false)} />
    </div>
  );
}
