const fs = require('fs');
let data = fs.readFileSync('src/components/BildWortschatzView.tsx', 'utf8');

// Update Props
data = data.replace(
  `interface BildWortschatzViewProps {
  selectedTopic: BildWortschatzTopic | null;
  onSelectTopic: (topic: BildWortschatzTopic | null) => void;
}`,
  `interface BildWortschatzViewProps {
  selectedTopic: BildWortschatzTopic | null;
  onSelectTopic: (topic: BildWortschatzTopic | null) => void;
  onClose?: () => void;
}`
);

data = data.replace(
  `export function BildWortschatzView({ selectedTopic, onSelectTopic }: BildWortschatzViewProps) {`,
  `export function BildWortschatzView({ selectedTopic, onSelectTopic, onClose }: BildWortschatzViewProps) {`
);

// Add Back Button and fix h-full issue by setting a wrapping container
data = data.replace(
  `return (
    <div className="w-full h-full relative bg-black flex flex-col overflow-hidden">`,
  `return (
    <div className="w-full h-full relative bg-black flex flex-col overflow-hidden">
      {onClose && (
        <div className="absolute top-0 left-0 w-full p-4 pt-safe z-50 flex justify-between items-center pointer-events-none">
          <button 
            onClick={onClose}
            className="w-10 h-10 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20 shadow-lg active:scale-95 transition-transform pointer-events-auto"
          >
            <ArrowLeft size={24} />
          </button>
        </div>
      )}`
);

// We need to import ArrowLeft if it's not imported. Let's check imports.
if (!data.includes('ArrowLeft')) {
  data = data.replace(`import { BookOpen, Volume2, PlayCircle, X, ChevronRight } from 'lucide-react';`, `import { BookOpen, Volume2, PlayCircle, X, ChevronRight, ArrowLeft } from 'lucide-react';`);
}

// Fix padding bottom in the bottom sheet to pb-40
data = data.replace(`className="flex-1 overflow-y-auto p-4 pb-safe pb-24"`, `className="flex-1 overflow-y-auto p-4 pb-safe pb-48"`);

// Fix h-[85%] to max-h-[90%] height to allow full scrolling
data = data.replace(`className="w-full h-[85%] bg-surface rounded-t-3xl shadow-2xl relative pointer-events-auto flex flex-col overflow-hidden animate-slide-up"`, `className="w-full h-[90%] bg-surface rounded-t-3xl shadow-2xl relative pointer-events-auto flex flex-col overflow-hidden animate-slide-up"`);

fs.writeFileSync('src/components/BildWortschatzView.tsx', data);
