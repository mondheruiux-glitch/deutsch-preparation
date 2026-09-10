import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import { supabase } from '../lib/supabase';

export const AuthCallbackPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if URL has hash params or code
    const handleAuthCallback = async () => {
      try {
        const hash = window.location.hash.substring(1);
        const search = window.location.search.substring(1);
        const params = new URLSearchParams(hash || search);

        const accessToken = params.get('access_token');
        const refreshToken = params.get('refresh_token');
        const code = params.get('code');
        const type = params.get('type');

        if (accessToken && refreshToken) {
          const { error } = await supabase.auth.setSession({
            access_token: accessToken,
            refresh_token: refreshToken,
          });

          if (error) {
            console.error('Error setting session:', error);
            window.location.replace('/login');
            return;
          }

          if (type === 'recovery') {
            window.location.replace('/reset-password');
            return;
          }
        } else if (code) {
          const { error } = await supabase.auth.exchangeCodeForSession(code);
          if (error) {
            console.error('Error exchanging code:', error);
            window.location.replace('/login');
            return;
          }
          if (type === 'recovery') {
            window.location.replace('/reset-password');
            return;
          }
        } else {
          // Check if session was already detected in URL by Supabase client
          const { data: { session } } = await supabase.auth.getSession();
          if (!session) {
            window.location.replace('/login');
            return;
          }
        }

        // Clean redirect to home with fresh state and clean URL
        window.location.replace('/');
      } catch (err) {
        console.error('Auth callback error:', err);
        window.location.replace('/login');
      }
    };

    handleAuthCallback();
  }, [navigate]);

  return (
    <div className="min-h-screen bg-[#F8F9FA] flex flex-col items-center justify-center p-4">
      <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 flex flex-col items-center text-center max-w-sm w-full">
        <div className="w-14 h-14 bg-primary-container text-primary rounded-2xl flex items-center justify-center mb-4">
          <Loader2 size={28} className="animate-spin" />
        </div>
        <h2 className="font-fredoka text-xl font-bold text-on-surface mb-2">
          Authentifizierung läuft...
        </h2>
        <p className="text-xs text-on-surface-variant font-dm-sans">
          Sie werden in Kürze zu Ihrer Lernumgebung weitergeleitet.
        </p>
      </div>
    </div>
  );
};
