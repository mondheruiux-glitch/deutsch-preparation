import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, User, Mail, Calendar, ShieldCheck, LogOut, Loader2, KeyRound } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';

interface UserProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const UserProfileModal: React.FC<UserProfileModalProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const { user, signOut, resetPasswordForEmail } = useAuth();

  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [resetSent, setResetSent] = useState(false);
  const [isSendingReset, setIsSendingReset] = useState(false);

  if (!isOpen || !user) return null;

  const fullName = user.user_metadata?.full_name || user.email?.split('@')[0] || 'Lernende/r';
  const email = user.email || '';
  const provider = user.app_metadata?.provider || 'E-Mail';
  const createdDate = user.created_at
    ? new Date(user.created_at).toLocaleDateString('de-DE', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : '';

  const handleSignOut = async () => {
    try {
      setIsLoggingOut(true);
      await signOut();
      onClose();
      navigate('/');
    } catch (err) {
      console.error('Logout error:', err);
    } finally {
      setIsLoggingOut(false);
    }
  };

  const handleSendReset = async () => {
    if (!email) return;
    try {
      setIsSendingReset(true);
      await resetPasswordForEmail(email);
      setResetSent(true);
    } catch (err) {
      console.error('Password reset email error:', err);
    } finally {
      setIsSendingReset(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-fade-in">
      <div 
        className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-100 overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center transition-colors cursor-pointer"
        >
          <X size={18} />
        </button>

        {/* User Avatar & Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-primary text-white font-fredoka font-bold text-2xl flex items-center justify-center shadow-md shadow-primary/20 shrink-0">
            {fullName.charAt(0).toUpperCase()}
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="font-fredoka text-xl font-bold text-on-surface truncate">
              {fullName}
            </h3>
            <span className="inline-flex items-center gap-1.5 text-xs text-slate-500 font-dm-sans">
              <ShieldCheck size={14} className="text-emerald-500" />
              <span>Verifiziert ({provider})</span>
            </span>
          </div>
        </div>

        {/* Account Info Details */}
        <div className="space-y-3 bg-slate-50 rounded-2xl p-4 mb-6 border border-slate-100">
          <div className="flex items-center gap-3 text-sm text-slate-700">
            <Mail size={16} className="text-slate-400 shrink-0" />
            <span className="truncate">{email}</span>
          </div>

          {createdDate && (
            <div className="flex items-center gap-3 text-sm text-slate-700">
              <Calendar size={16} className="text-slate-400 shrink-0" />
              <span>Mitglied seit {createdDate}</span>
            </div>
          )}
        </div>

        {/* Password Reset Section (for email logins) */}
        {provider === 'email' && (
          <div className="mb-6">
            {resetSent ? (
              <p className="text-xs text-emerald-600 bg-emerald-50 border border-emerald-200 rounded-xl p-2.5 text-center font-medium">
                ✓ Passwort-Reset-Link wurde an Ihre E-Mail gesendet!
              </p>
            ) : (
              <button
                type="button"
                onClick={handleSendReset}
                disabled={isSendingReset}
                className="w-full py-2 px-3 text-xs font-medium text-slate-600 hover:text-primary hover:bg-slate-50 border border-slate-200 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                {isSendingReset ? (
                  <Loader2 size={14} className="animate-spin text-primary" />
                ) : (
                  <KeyRound size={14} />
                )}
                <span>Passwort zurücksetzen per E-Mail</span>
              </button>
            )}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium text-sm rounded-xl transition-all cursor-pointer"
          >
            Schließen
          </button>
          <button
            type="button"
            onClick={handleSignOut}
            disabled={isLoggingOut}
            className="flex-1 py-2.5 px-4 bg-red-50 hover:bg-red-100 text-red-600 font-medium text-sm rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
          >
            {isLoggingOut ? (
              <Loader2 size={16} className="animate-spin" />
            ) : (
              <LogOut size={16} />
            )}
            <span>Abmelden</span>
          </button>
        </div>
      </div>
    </div>
  );
};
