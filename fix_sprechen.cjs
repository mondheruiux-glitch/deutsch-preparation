const fs = require('fs');
let data = fs.readFileSync('src/components/SprechenView.tsx', 'utf8');

data = `import { useState } from 'react';
import { BildWortschatzView } from './BildWortschatzView';
import { BildWortschatzTopic } from '../types';
import { Image as ImageIcon } from 'lucide-react';\n` + data;

data = data.replace(
  `export function SprechenView({ selectedTopic, onSelectTopic }: SprechenViewProps) {`,
  `export function SprechenView({ selectedTopic, onSelectTopic }: SprechenViewProps) {
  const [showBilder, setShowBilder] = useState(false);
  const [selectedBildTopic, setSelectedBildTopic] = useState<BildWortschatzTopic | null>(null);

  if (showBilder) {
    return (
      <div className="absolute inset-0 z-50 bg-black flex flex-col">
        <BildWortschatzView 
          selectedTopic={selectedBildTopic}
          onSelectTopic={setSelectedBildTopic}
          onClose={() => setShowBilder(false)}
        />
      </div>
    );
  }`
);

data = data.replace(
  `      <div className="flex flex-col gap-1">`,
  `      {/* Floating Action Button for Bilder */}
      <button
        onClick={() => setShowBilder(true)}
        className="fixed bottom-20 right-6 w-14 h-14 bg-primary text-white rounded-2xl shadow-[0_8px_16px_rgba(0,0,0,0.2)] flex items-center justify-center active:scale-95 transition-transform z-40 border-2 border-white/20"
      >
        <ImageIcon size={28} />
      </button>
      <div className="flex flex-col gap-1">`
);

fs.writeFileSync('src/components/SprechenView.tsx', data);
