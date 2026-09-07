import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, AlertCircle, CheckCircle2, Loader2, ArrowLeft } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { AuthLayout } from '../components/auth/AuthLayout';

export const ForgotPasswordPage: React.FC = () => {
  const { resetPasswordForEmail, isConfigured } = useAuth();

  const [email, setEmail] = useState('');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      setErrorMsg('Bitte geben Sie Ihre E-Mail-Adresse ein.');
      return;
    }

    if (!isConfigured) {
      setErrorMsg('Supabase ist noch nicht konfiguriert. Bitte tragen Sie Ihren anon key in .env ein.');
      return;
    }

    try {
      setIsSubmitting(true);
      setErrorMsg(null);
      const { error } = await resetPasswordForEmail(email.trim());
      if (error) {
        setErrorMsg(error.message);
      } else {
        setSentSuccess(true);
      }
    } catch (err: any) {
      setErrorMsg(err.message || 'Anfrage fehlgeschlagen.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (sentSuccess) {
    return (
      <AuthLayout
        title="E-Mail versendet"
        subtitle="Überprüfen Sie Ihren Posteingang"
      >
        <div className="text-center py-4">
          <div className="w-16 h-16 bg-blue-100 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 size={32} />
          </div>
          <p className="text-sm text-slate-600 mb-6 leading-relaxed">
            Wir haben eine Anleitung zum Zurücksetzen des Passworts an <strong>{email}</strong> gesendet.
          </p>
          <Link
            to="/login"
            className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-primary hover:bg-[#0842A0] text-white font-medium rounded-xl shadow-sm transition-all"
          >
            <ArrowLeft size={16} />
            <span>Zurück zur Anmeldung</span>
          </Link>
        </div>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout
      title="Passwort vergessen?"
      subtitle="Geben Sie Ihre E-Mail ein, um Ihr Passwort zurückzusetzen"
    >
      {errorMsg && (
        <div className="mb-5 p-3.5 bg-red-50 border border-red-200 rounded-2xl flex items-start gap-2.5 text-red-700 text-xs">
          <AlertCircle size={16} className="shrink-0 mt-0.5 text-red-600" />
          <span>{errorMsg}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-semibold text-on-surface-variant mb-1.5 uppercase tracking-wider">
            Ihre registrierte E-Mail
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <Mail size={18} />
            </div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="ihre.email@example.com"
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-on-surface placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full mt-2 py-3 px-4 bg-primary hover:bg-[#0842A0] text-white font-medium rounded-xl shadow-sm hover:shadow transition-all flex items-center justify-center gap-2 active:scale-[0.99] disabled:opacity-60 cursor-pointer disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              <span>Senden...</span>
            </>
          ) : (
            <span>Reset-Link anfordern</span>
          )}
        </button>

        <div className="pt-3 text-center">
          <Link
            to="/login"
            className="inline-flex items-center gap-1.5 text-xs text-on-surface-variant hover:text-primary font-medium transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Zurück zur Anmeldung</span>
          </Link>
        </div>
      </form>
    </AuthLayout>
  );
};
