import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children, title, subtitle }) => {
  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#1F1F1F] flex flex-col justify-center items-center p-4 sm:p-6 antialiased relative">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-60" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-primary-container/80 rounded-full blur-3xl opacity-50" />
      </div>

      {/* Back to Home Button */}
      <div className="w-full max-w-md mb-4 flex items-center justify-between z-10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-on-surface-variant hover:text-primary transition-colors py-2 px-3 rounded-xl hover:bg-white/70"
        >
          <ArrowLeft size={18} />
          <span>Zurück zur Startseite</span>
        </Link>
      </div>

      {/* Main Card */}
      <div className="w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-200/50 border border-slate-100 z-10">
        {/* Brand Header */}
        <div className="flex flex-col items-center text-center mb-6">
          <Link to="/" className="flex items-center gap-2.5 mb-3 group">
            <div className="w-12 h-12 rounded-2xl bg-surface-container-high/80 border border-primary/20 p-2 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
              <img src="/logo/logo.svg" alt="A1 Deutsch" className="w-full h-full object-contain" />
            </div>
            <div className="text-left">
              <span className="font-fredoka text-2xl font-bold text-on-surface tracking-tight block">
                A1 Deutsch
              </span>
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-primary-container text-primary uppercase tracking-wider">
                ÖSD / Goethe
              </span>
            </div>
          </Link>

          <h1 className="font-fredoka text-2xl sm:text-3xl font-bold text-on-surface mt-2">
            {title}
          </h1>
          {subtitle && (
            <p className="text-sm text-on-surface-variant mt-1.5 font-dm-sans">
              {subtitle}
            </p>
          )}
        </div>

        {children}
      </div>

      {/* Footer copyright */}
      <div className="mt-8 text-center text-xs text-on-surface-variant z-10 font-dm-sans">
        A1 Deutsch Prüfungsvorbereitung • Sicher & Datenschutzkonform
      </div>
    </div>
  );
};
