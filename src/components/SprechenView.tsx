import React from 'react';
import { TopicCard } from './TopicCard';
import { TopicDetailView } from './TopicDetailView';
import { WortschatzThemenView } from './WortschatzThemenView';
import { sprechenTopics } from '../data/sprechen';
import { Topic } from '../types';

interface SprechenViewProps {
  selectedTopic: Topic | null;
  onSelectTopic: (topic: Topic | null) => void;
}

export function SprechenView({ selectedTopic, onSelectTopic }: SprechenViewProps) {
  if (selectedTopic) {
    if (selectedTopic.id === '0') {
      return <WortschatzThemenView onBack={() => onSelectTopic(null)} />;
    }
    return <TopicDetailView topic={selectedTopic} onBack={() => onSelectTopic(null)} />;
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 pb-24 md:pb-12 min-h-full flex flex-col">
      <div className="mb-6 sm:mb-8">
        <h1 className="font-fredoka text-2xl sm:text-3xl md:text-4xl font-medium text-on-surface mb-2 tracking-tight">
          Sprechen
        </h1>
        <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed max-w-2xl">
          Teil 1 & 2: Bildbeschreibung, Wortschatz-Themen und Alltagssituationen. Wähle ein Thema zum Üben.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {sprechenTopics.map((topic, index) => (
          <TopicCard 
            key={topic.id} 
            topic={topic} 
            index={index}
            onClick={onSelectTopic} 
          />
        ))}
      </div>
    </div>
  );
}
