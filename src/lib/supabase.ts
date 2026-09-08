import { createClient } from '@supabase/supabase-js';
import { Capacitor } from '@capacitor/core';
import { Browser } from '@capacitor/browser';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://fhgqinnfoothziltwivl.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Detect if a secret key (service_role or sb_secret_...) was mistakenly used
export const isSecretKeyConfigured = Boolean(
  supabaseAnonKey && (
    supabaseAnonKey.startsWith('sb_secret_') || 
    supabaseAnonKey.startsWith('service_role')
  )
);

export const isConfigured = Boolean(
  supabaseAnonKey && 
  supabaseAnonKey !== 'your-supabase-anon-key-here' &&
  !isSecretKeyConfigured
);

// Never pass a secret key to the browser client - it causes "Forbidden use of secret API key in browser"
const safeKey = (!isSecretKeyConfigured && supabaseAnonKey) ? supabaseAnonKey : 'dummy-anon-key';

export const supabase = createClient(supabaseUrl, safeKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  },
});

export const getRedirectUrl = (path: string = '/auth/callback'): string => {
  if (Capacitor.isNativePlatform()) {
    // Custom URL scheme for mobile app
    return `com.mondher.a1deutsch:/${path.startsWith('/') ? path : '/' + path}`;
  }
  return `${window.location.origin}${path.startsWith('/') ? path : '/' + path}`;
};

/**
 * Initiates OAuth login, supporting both standard Web redirect
 * and Capacitor mobile In-App Browser redirect.
 */
export async function signInWithProvider(provider: 'google' | 'apple') {
  const redirectTo = getRedirectUrl('/auth/callback');

  if (Capacitor.isNativePlatform()) {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo,
        skipBrowserRedirect: true,
      },
    });

    if (error) throw error;
    if (data?.url) {
      await Browser.open({ url: data.url, windowName: '_self' });
    }
    return data;
  }

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo,
    },
  });

  if (error) throw error;
  return data;
}
