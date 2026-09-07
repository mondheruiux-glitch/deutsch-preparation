const fs = require('fs');
let data = fs.readFileSync('src/components/TopicDetailView.tsx', 'utf8');

// Fix titles weight
data = data.replace(/font-fredoka text-2xl font-bold/g, 'font-fredoka text-2xl font-medium');
data = data.replace(/font-fredoka text-xl font-semibold/g, 'font-fredoka text-xl font-medium');

// Fix Mehr Wörter UI
const oldVocab = `<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {topic.vocabulary.map((word, idx) => (
                      <div key={idx} className="bg-surface-container p-3 rounded-xl shadow-md3-sm flex items-center justify-between border border-surface-container-high">
                        <span className="text-on-surface font-medium">{word.de}</span>
                        <span className="text-on-surface-variant text-sm">{word.en}</span>
                      </div>
                    ))}
                  </div>`;

const newVocab = `<div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {topic.vocabulary.map((word, idx) => (
                      <div key={idx} className="bg-surface-container p-3 rounded-2xl shadow-[0_4px_0_0_#E8EAED] border-2 border-surface-container-high flex flex-col items-center justify-center text-center">
                        <span className="text-on-surface font-medium text-[15px] leading-tight mb-1">{word.de}</span>
                        <span className="text-on-surface-variant text-xs">{word.en}</span>
                      </div>
                    ))}
                  </div>`;

data = data.replace(oldVocab, newVocab);

fs.writeFileSync('src/components/TopicDetailView.tsx', data);
console.log('UI Fixed');
