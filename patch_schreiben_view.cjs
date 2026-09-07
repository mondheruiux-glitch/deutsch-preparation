const fs = require('fs');
const file = 'src/components/SchreibenThemeDetail.tsx';
let content = fs.readFileSync(file, 'utf8');

const oldStr = `        {/* Model Answer Toggle */}
        <div className="flex justify-center mt-4">
          <button
            onClick={() => setShowModel(!showModel)}
            className={\`px-6 py-3 rounded-full font-medium active:scale-95 transition-all flex items-center gap-2 \${
              showModel 
                ? 'bg-surface-container border border-surface-container-high text-on-surface' 
                : 'bg-primary text-white shadow-md3-md'
            }\`}
          >
            <Eye size={20} />
            {showModel ? 'Antwort ausblenden' : 'Lösung anzeigen'}
          </button>
        </div>`;

const newStr = `        {/* Model Answer Toggle */}
        {!showModel ? (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowModel(true)}
              className="bg-primary text-white font-medium px-8 py-4 rounded-full text-base active:scale-95 transition-transform flex items-center gap-3 shadow-md3-md"
            >
              <MessageCircle size={24} />
              Antworten anzeigen
            </button>
          </div>
        ) : (
          <div className="flex justify-center mt-4 mb-2">
            <button
              onClick={() => setShowModel(false)}
              className="bg-surface-container border border-surface-container-high text-on-surface px-6 py-3 rounded-full font-medium active:scale-95 transition-all flex items-center gap-2"
            >
              <Eye size={20} />
              Antwort ausblenden
            </button>
          </div>
        )}`;

if (content.includes('Lösung anzeigen')) {
  content = content.replace(oldStr, newStr);
  fs.writeFileSync(file, content);
  console.log('patched view');
} else {
  console.log('not found');
}
