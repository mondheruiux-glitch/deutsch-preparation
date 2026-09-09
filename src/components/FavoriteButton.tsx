import React from 'react';
import { Heart } from 'lucide-react';
import { useFavorites } from '../contexts/FavoritesContext';
import type { Favorite } from '../contexts/FavoritesContext';

interface FavoriteButtonProps {
  item: Favorite;
  /** 'overlay' = circular button (for cards/slides), 'inline' = labelled button */
  variant?: 'overlay' | 'inline';
  /** Extra class names for styling or positioning */
  className?: string;
  /** Custom icon size */
  iconSize?: number;
  /** Optional custom labels */
  activeLabel?: string;
  inactiveLabel?: string;
}

export function FavoriteButton({ 
  item, 
  variant = 'overlay', 
  className = '',
  iconSize,
  activeLabel = 'Gespeichert',
  inactiveLabel = 'Favorit'
}: FavoriteButtonProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const active = isFavorite(item.id, item.section);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // prevent parent card / button click
    toggleFavorite(item);
  };

  if (variant === 'inline') {
    return (
      <button
        type="button"
        onClick={handleClick}
        title={active ? 'Aus Favoriten entfernen' : 'Zu Favoriten hinzufügen'}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all active:scale-95 cursor-pointer border ${
          active
            ? 'bg-red-50 border-red-200 text-red-500 hover:bg-red-100'
            : 'bg-surface-container-high border-transparent text-on-surface-variant hover:text-red-400 hover:border-red-200 hover:bg-red-50'
        } ${className}`}
      >
        <Heart 
          size={iconSize || 14} 
          fill={active ? 'currentColor' : 'none'} 
          className={active ? 'text-red-500' : ''} 
        />
        <span>{active ? activeLabel : inactiveLabel}</span>
      </button>
    );
  }

  // Overlay variant: circular button
  return (
    <button
      type="button"
      onClick={handleClick}
      title={active ? 'Aus Favoriten entfernen' : 'Zu Favoriten hinzufügen'}
      className={`w-8 h-8 rounded-full flex items-center justify-center transition-all active:scale-90 cursor-pointer shadow-sm ${
        active
          ? 'bg-red-500 text-white shadow-red-200'
          : 'bg-white/90 backdrop-blur-sm text-on-surface-variant hover:text-red-500 hover:bg-white'
      } ${className}`}
    >
      <Heart 
        size={iconSize || 16} 
        fill={active ? 'currentColor' : 'none'} 
        strokeWidth={active ? 0 : 2} 
      />
    </button>
  );
}
