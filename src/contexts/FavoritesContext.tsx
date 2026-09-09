import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

export type FavoriteSection = 'sprechen' | 'schreiben' | 'lesen' | 'bilder' | 'konjugation';

export interface Favorite {
  id: string;
  section: FavoriteSection;
  title: string;
  icon?: string;
  subtitle?: string;
}

interface FavoritesContextValue {
  favorites: Favorite[];
  isFavorite: (id: string, section: FavoriteSection) => boolean;
  toggleFavorite: (item: Favorite) => void;
  clearFavorites: () => void;
}

const FavoritesContext = createContext<FavoritesContextValue | null>(null);

const STORAGE_KEY = 'a1_favorites';

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<Favorite[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
    } catch {}
  }, [favorites]);

  const isFavorite = useCallback(
    (id: string, section: FavoriteSection) =>
      favorites.some((f) => f.id === id && f.section === section),
    [favorites]
  );

  const toggleFavorite = useCallback((item: Favorite) => {
    setFavorites((prev) => {
      const exists = prev.some((f) => f.id === item.id && f.section === item.section);
      if (exists) {
        return prev.filter((f) => !(f.id === item.id && f.section === item.section));
      }
      return [...prev, item];
    });
  }, []);

  const clearFavorites = useCallback(() => setFavorites([]), []);

  return (
    <FavoritesContext.Provider value={{ favorites, isFavorite, toggleFavorite, clearFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites(): FavoritesContextValue {
  const ctx = useContext(FavoritesContext);
  if (!ctx) throw new Error('useFavorites must be used within FavoritesProvider');
  return ctx;
}
