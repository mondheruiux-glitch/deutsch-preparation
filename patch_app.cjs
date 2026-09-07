const fs = require('fs');
const file = 'src/App.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  "import { BildWortschatzView } from './components/BildWortschatzView';",
  "import { BildWortschatzView } from './components/BildWortschatzView';\nimport { LesenView } from './components/LesenView';"
);

content = content.replace(
  "{activeTab === 'bilder' && (",
  "{activeTab === 'lesen' && (\n            <LesenView />\n          )}\n          {activeTab === 'bilder' && ("
);

content = content.replace(
  "activeTab !== 'sprechen' && activeTab !== 'schreiben' && activeTab !== 'bilder' && (",
  "activeTab !== 'sprechen' && activeTab !== 'schreiben' && activeTab !== 'bilder' && activeTab !== 'lesen' && ("
);

fs.writeFileSync(file, content);
console.log('patched app.tsx');
