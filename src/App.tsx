import React, { useState } from 'react';
import { MessageSquare, PenTool, BookOpen, Image as ImageIcon, Sparkles } from 'lucide-react';
import { SprechenView } from './components/SprechenView';
import { SchreibenView } from './components/SchreibenView';
import { LesenView } from './components/LesenView';
import { BildWortschatzView } from './components/BildWortschatzView';
import { KonjugationView } from './components/KonjugationView';
import { Topic, SchreibenTheme, BildWortschatzTopic } from './types';

type Tab = 'sprechen' | 'schreiben' | 'lesen' | 'bilder' | 'konjugation';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('sprechen');
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [selectedTheme, setSelectedTheme] = useState<SchreibenTheme | null>(null);
  const [selectedBildTopic, setSelectedBildTopic] = useState<BildWortschatzTopic | null>(null);

  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab);
    setSelectedTopic(null);
    setSelectedTheme(null);
    setSelectedBildTopic(null);
  };

  const navItems: { id: Tab; label: string; icon: React.ReactNode }[] = [
    { id: 'sprechen', label: 'Sprechen', icon: <MessageSquare size={20} /> },
    { id: 'schreiben', label: 'Schreiben', icon: <PenTool size={20} /> },
    { id: 'lesen', label: 'Lesen', icon: <BookOpen size={20} /> },
    { id: 'bilder', label: 'Wortschatz', icon: <ImageIcon size={20} /> },
    { id: 'konjugation', label: 'Verben', icon: <Sparkles size={20} /> },
  ];

  return (
    <div className={`bg-[#F8F9FA] text-on-surface flex flex-col antialiased ${
      activeTab === 'bilder' ? 'h-[100dvh] overflow-hidden' : 'min-h-screen'
    }`}>
      {/* Top Navigation Bar - Responsive Header (Desktop & Tablet) */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-surface-container-high shadow-sm shrink-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Brand Logo & Title */}
          <div 
            className="flex items-center gap-3 cursor-pointer select-none"
            onClick={() => handleTabChange('sprechen')}
            title="A1 Deutsch — Startseite"
          >
            <div className="w-10 h-10 rounded-xl bg-surface-container-high/70 border border-primary/15 p-1 flex items-center justify-center shadow-sm overflow-hidden shrink-0 transition-transform active:scale-95">
              <img 
                src="/logo/logo.svg" 
                alt="A1 Deutsch Logo" 
                className="w-full h-full object-contain" 
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-fredoka text-xl font-bold tracking-tight text-on-surface">
                  A1 Deutsch
                </span>
                <span className="hidden sm:inline-block text-[11px] font-bold px-2 py-0.5 rounded-full bg-primary-container text-primary uppercase tracking-wider">
                  ÖSD / Goethe
                </span>
              </div>
              <p className="text-xs text-on-surface-variant hidden sm:block">
                Sprechen, Schreiben, Lesen & Grammatik
              </p>
            </div>
          </div>

          {/* Desktop / Tablet Nav Tabs */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleTabChange(item.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-primary text-white shadow-sm'
                      : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </header>

      {/* Main Content Area - Full Responsive Shell */}
      <main className={`flex-1 flex flex-col w-full min-h-0 relative ${
        activeTab === 'bilder' ? 'h-full overflow-hidden max-md:pb-[66px]' : ''
      }`}>
        {activeTab === 'sprechen' && (
          <SprechenView 
            selectedTopic={selectedTopic} 
            onSelectTopic={setSelectedTopic} 
          />
        )}

        {activeTab === 'schreiben' && (
          <SchreibenView 
            selectedTheme={selectedTheme} 
            onSelectTheme={setSelectedTheme} 
          />
        )}

        {activeTab === 'lesen' && (
          <LesenView />
        )}

        {activeTab === 'bilder' && (
          <BildWortschatzView 
            selectedTopic={selectedBildTopic} 
            onSelectTopic={setSelectedBildTopic} 
          />
        )}

        {activeTab === 'konjugation' && (
          <KonjugationView />
        )}
      </main>

      {/* Mobile Bottom Navigation Bar (< md screens) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-surface-container-high pb-safe pt-1.5 px-2 flex justify-around items-center z-40 shadow-lg">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleTabChange(item.id)}
              className={`flex flex-col items-center gap-1 py-1.5 px-3 rounded-xl min-w-[56px] transition-colors ${
                isActive 
                  ? 'text-primary font-bold' 
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              <div className={`p-1 rounded-full transition-colors ${isActive ? 'bg-primary-container text-primary' : ''}`}>
                {item.icon}
              </div>
              <span className="text-[11px] leading-tight">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
