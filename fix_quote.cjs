const fs = require('fs');
let data = fs.readFileSync('src/data/sprechen.ts', 'utf8');
data = data.replace(
  `{ de: 'Welche Farbe hat der Pullover von der Frau?', en: 'What color is the woman's sweater?' },`,
  `{ de: 'Welche Farbe hat der Pullover von der Frau?', en: "What color is the woman's sweater?" },`
);
fs.writeFileSync('src/data/sprechen.ts', data);
