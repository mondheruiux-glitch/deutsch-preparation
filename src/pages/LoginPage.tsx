import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, AlertCircle, Loader2 } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { AuthLayout } from '../components/auth/AuthLayout';

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { user, signInWithPassword, signInWithOAuth, isConfigured, isSecretKeyConfigured } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOAuthLoading, setIsOAuthLoading] = useState(false);

  useEffect(() => {
    if (user) {
      navigate('/', { replace: true });
    }
  }, [user, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSecretKeyConfigured) {
      setErrorMsg('Geheimer Schlüssel (sb_secret_...) in .env gefunden. Bitte durch den öffentlichen Anon-Schlüssel ersetzen.');
      return;
    }
    if (!email.trim() || !password) {
      setErrorMsg('Bitte geben Sie Ihre E-Mail-Adresse und Ihr Passwort ein.');
      return;
    }

    if (!isConfigured) {
      setErrorMsg('Supabase ist noch nicht konfiguriert. Bitte tragen Sie Ihren anon key in .env ein.');
      return;
    }

    try {
      setIsSubmitting(true);
      setErrorMsg(null);
      const { error } = await signInWithPassword(email.trim(), password);
      if (error) {
        if (error.message.toLowerCase().includes('invalid login credentials')) {
          setErrorMsg('Ungültige Anmeldedaten. Bitte überprüfen Sie E-Mail und Passwort.');
        } else if (error.message.toLowerCase().includes('email not confirmed')) {
          setErrorMsg('Bitte bestätigen Sie zuerst Ihre E-Mail-Adresse.');
        } else {
          setErrorMsg(error.message);
        }
      } else {
        navigate('/');
      }
    } catch (err: any) {
      setErrorMsg(err.message || 'Ein Fehler ist aufgetreten.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGoogleSignIn = async () => {
    if (isSecretKeyConfigured) {
      setErrorMsg('Geheimer Schlüssel (sb_secret_...) erkannt. Bitte ersetzen Sie ihn in .env durch den öffentlichen Anon-Schlüssel.');
      return;
    }
    if (!isConfigured) {
      setErrorMsg('Supabase ist noch nicht konfiguriert. Bitte tragen Sie Ihren anon key in .env ein.');
      return;
    }

    try {
      setIsOAuthLoading(true);
      setErrorMsg(null);
      await signInWithOAuth('google');
    } catch (err: any) {
      setErrorMsg(err.message || 'Google Login fehlgeschlagen.');
      setIsOAuthLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Willkommen zurück"
      subtitle="Melden Sie sich an, um Ihren Lernfortschritt zu speichern"
    >
      {isSecretKeyConfigured ? (
        <div className="mb-5 p-3.5 bg-red-50 border border-red-200 rounded-2xl flex items-start gap-2.5 text-red-800 text-xs leading-relaxed">
          <AlertCircle size={16} className="shrink-0 mt-0.5 text-red-600" />
          <div>
            <strong className="font-semibold block mb-0.5 text-red-900">Geheimer Supabase Schlüssel erkannt!</strong>
            In Ihrer <code className="bg-red-100 px-1 py-0.5 rounded font-mono text-red-900">.env</code> ist ein geheimer Schlüssel (<code className="bg-red-100 px-1 py-0.5 rounded font-mono text-red-900">sb_secret_...</code>) eingetragen. Im Browser darf nur der <strong>öffentliche Anon Key</strong> (<code className="bg-red-100 px-1 py-0.5 rounded font-mono text-red-900">anon public</code> / <code className="bg-red-100 px-1 py-0.5 rounded font-mono text-red-900">sb_publishable_...</code>) verwendet werden.
          </div>
        </div>
      ) : !isConfigured ? (
        <div className="mb-5 p-3.5 bg-amber-50 border border-amber-200 rounded-2xl flex items-start gap-2.5 text-amber-800 text-xs leading-relaxed">
          <AlertCircle size={16} className="shrink-0 mt-0.5 text-amber-600" />
          <div>
            <strong className="font-semibold block mb-0.5">Supabase Verbindung ausstehend</strong>
            Bitte tragen Sie Ihren <code className="bg-amber-100 px-1 py-0.5 rounded font-mono">VITE_SUPABASE_ANON_KEY</code> in der Datei <code className="bg-amber-100 px-1 py-0.5 rounded font-mono">.env</code> ein.
          </div>
        </div>
      ) : null}

      {errorMsg && (
        <div className="mb-5 p-3.5 bg-red-50 border border-red-200 rounded-2xl flex items-start gap-2.5 text-red-700 text-xs">
          <AlertCircle size={16} className="shrink-0 mt-0.5 text-red-600" />
          <span>{errorMsg}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-semibold text-on-surface-variant mb-1.5 uppercase tracking-wider">
            E-Mail
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

        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="block text-xs font-semibold text-on-surface-variant uppercase tracking-wider">
              Passwort
            </label>
            <Link
              to="/forgot-password"
              className="text-xs text-primary hover:underline font-medium"
            >
              Passwort vergessen?
            </Link>
          </div>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <Lock size={18} />
            </div>
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="••••••••"
              className="w-full pl-10 pr-11 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-on-surface placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 transition-colors"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
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
              <span>Anmelden...</span>
            </>
          ) : (
            <span>Anmelden</span>
          )}
        </button>
      </form>

      {/* Divider */}
      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-slate-200" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-white px-3 text-slate-400 font-medium">Oder</span>
        </div>
      </div>

      {/* Google OAuth Button */}
      <button
        type="button"
        onClick={handleGoogleSignIn}
        disabled={isOAuthLoading}
        className="w-full py-2.5 px-4 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-700 shadow-sm transition-all flex items-center justify-center gap-3 active:scale-[0.99] cursor-pointer disabled:opacity-60"
      >
        {isOAuthLoading ? (
          <Loader2 size={18} className="animate-spin text-primary" />
        ) : (
          <svg className="w-4 h-4" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
            />
          </svg>
        )}
        <span>Mit Google anmelden</span>
      </button>

      {/* Switch to Signup */}
      <div className="mt-6 text-center text-sm text-on-surface-variant">
        Noch kein Konto?{' '}
        <Link to="/signup" className="text-primary font-semibold hover:underline">
          Jetzt registrieren
        </Link>
      </div>
    </AuthLayout>
  );
};
