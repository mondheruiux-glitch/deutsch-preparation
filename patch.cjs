const fs = require('fs');
const file = 'src/components/BildWortschatzView.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  'const [showDetails, setShowDetails] = useState<BildWortschatzTopic | null>(null);',
  'const [showDetails, setShowDetails] = useState<BildWortschatzTopic | null>(null);\n  const [fullScreenImage, setFullScreenImage] = useState<string | null>(null);'
);

content = content.replace(
  'className="w-full h-full object-cover"',
  'className="w-full h-full object-cover cursor-pointer"\n              onClick={() => setFullScreenImage(topic.image)}'
);

content = content.replace(
  '          </div>\n        </div>\n      )}\n    </div>\n  );\n}',
  `          </div>
        </div>
      )}

      {/* Full Screen Image Modal */}
      {fullScreenImage && (
        <div className="absolute inset-0 z-[100] bg-black flex flex-col">
          <div className="flex justify-end p-4 pt-safe absolute top-0 right-0 z-10 w-full bg-gradient-to-b from-black/60 to-transparent pointer-events-none">
            <button
              onClick={() => setFullScreenImage(null)}
              className="bg-black/50 p-2 rounded-full text-white backdrop-blur-md active:scale-95 transition-transform pointer-events-auto"
            >
              <X size={24} />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto w-full h-full pb-safe">
            <img
              src={fullScreenImage}
              alt="Full size view"
              className="w-full min-h-full h-auto object-contain block"
            />
          </div>
        </div>
      )}
    </div>
  );
}`
);

fs.writeFileSync(file, content);
console.log('Patched successfully');
