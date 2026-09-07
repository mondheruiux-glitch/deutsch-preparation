import { App, URLOpenListenerEvent } from '@capacitor/app';
import { Browser } from '@capacitor/browser';
import { Capacitor } from '@capacitor/core';
import { supabase } from './supabase';

export function setupCapacitorDeepLinks(navigate: (path: string) => void) {
  if (!Capacitor.isNativePlatform()) return () => {};

  const listenerPromise = App.addListener('appUrlOpen', async (data: URLOpenListenerEvent) => {
    try {
      // Close in-app browser if open
      await Browser.close().catch(() => {});

      const rawUrl = data.url;
      if (!rawUrl) return;

      // Handle custom scheme com.mondher.a1deutsch://...
      const urlObj = new URL(rawUrl.replace('com.mondher.a1deutsch:/', 'https://app.local/'));
      const hash = urlObj.hash.substring(1);
      const search = urlObj.search.substring(1);
      const params = new URLSearchParams(hash || search);

      const accessToken = params.get('access_token');
      const refreshToken = params.get('refresh_token');
      const authCode = params.get('code');
      const type = params.get('type');

      if (accessToken && refreshToken) {
        await supabase.auth.setSession({
          access_token: accessToken,
          refresh_token: refreshToken,
        });

        if (type === 'recovery' || urlObj.pathname.includes('reset-password')) {
          navigate('/reset-password');
        } else {
          navigate('/');
        }
      } else if (authCode) {
        await supabase.auth.exchangeCodeForSession(authCode);
        if (type === 'recovery' || urlObj.pathname.includes('reset-password')) {
          navigate('/reset-password');
        } else {
          navigate('/');
        }
      }
    } catch (err) {
      console.error('Error handling deep link URL:', err);
    }
  });

  return () => {
    listenerPromise.then(handle => handle.remove()).catch(() => {});
  };
}
