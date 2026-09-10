import React from 'react';
import { Topic } from '../types';
import { ChevronRight, Crown } from 'lucide-react';
import { FavoriteButton } from './FavoriteButton';

export interface TopicCardProps {
  topic: Topic;
  index: number;
  onClick: (topic: Topic) => void;
}

export const TopicCard: React.FC<TopicCardProps> = ({ topic, index, onClick }) => {
  const isTopic0 = topic.id === '0';
  const badgeLabel = isTopic0 ? '0' : String(index);

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => onClick(topic)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick(topic);
        }
      }}
      className={`w-full bg-surface-container rounded-2xl p-3 sm:p-4 shadow-md3-sm text-left active:scale-[0.98] hover:shadow-md transition-all flex items-center gap-4 cursor-pointer border ${
        isTopic0 
          ? 'border-primary/40 bg-gradient-to-r from-primary/5 via-surface-container to-surface-container hover:border-primary ring-1 ring-primary/20' 
          : 'border-transparent hover:border-primary/20'
      }`}
    >
      {/* Image thumbnail */}
      <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 shrink-0 rounded-2xl overflow-hidden bg-surface-container-high shadow-sm border border-surface-container-high/40">
        <img 
          src={topic.image} 
          alt={topic.title}
          className="w-full h-full object-cover"
        />
        {/* Favorite button overlay */}
        <div className="absolute top-1 left-1 z-10">
          <FavoriteButton
            item={{
              id: topic.id,
              section: 'sprechen',
              title: topic.title,
              subtitle: isTopic0 ? '19 Wortschatz-Themen' : 'Sprechen Thema'
            }}
          />
        </div>
        <div className={`absolute top-1 right-1 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shadow-sm ${
          isTopic0 
            ? 'bg-primary text-white' 
            : 'bg-white/90 backdrop-blur-sm text-primary'
        }`}>
          {badgeLabel}
        </div>
      </div>
      
      {/* Content */}
      <div className="flex-1 min-w-0 py-1">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="font-fredoka text-base sm:text-lg font-medium text-on-surface leading-tight truncate">
            {topic.title}
          </h3>
          {isTopic0 && (
            <span className="shrink-0 hidden sm:inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-primary/10 text-primary uppercase tracking-wider">
              <Crown size={12} />
              Wortschatz
            </span>
          )}
        </div>
        <p className="text-on-surface-variant text-xs sm:text-sm">
          {isTopic0 ? '19 Themen • Bildbeschreibung • Satzmuster' : 'Bildbeschreibung & Situation'}
        </p>
      </div>

      {/* Action icon */}
      <div className={`w-9 h-9 sm:w-10 sm:h-10 shrink-0 rounded-full flex items-center justify-center transition-all ${
        isTopic0 
          ? 'text-primary bg-primary/10' 
          : 'text-on-surface-variant bg-surface-container-high/50'
      }`}>
        <ChevronRight size={20} />
      </div>
    </div>
  );
};
