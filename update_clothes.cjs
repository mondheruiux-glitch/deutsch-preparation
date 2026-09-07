const fs = require('fs');
let content = fs.readFileSync('src/data/sprechen.ts', 'utf-8');

const updates = [
  {
    id: '8',
    bb: `      { de: 'Ein Mann sitzt am Tisch. Er trägt ein blaues Hemd.', en: 'A man is sitting at the table. He is wearing a blue shirt.' },`,
    voc: `      { de: 'das Hemd', en: 'shirt' },\n      { de: 'blau', en: 'blue' },`
  },
  {
    id: '9',
    bb: `      { de: 'Die Person trägt einen roten Pullover und eine blaue Jeans.', en: 'The person is wearing a red sweater and blue jeans.' },`,
    voc: `      { de: 'der Pullover', en: 'sweater' },\n      { de: 'die Jeans', en: 'jeans' },\n      { de: 'rot', en: 'red' },`
  },
  {
    id: '10',
    bb: `      { de: 'Ein Freund trägt ein gelbes T-Shirt und eine schwarze Hose.', en: 'One friend is wearing a yellow T-shirt and black trousers.' },`,
    voc: `      { de: 'gelb', en: 'yellow' },\n      { de: 'die Hose', en: 'trousers' },\n      { de: 'schwarz', en: 'black' },`
  },
  {
    id: '5',
    bb: `      { de: 'Der Vater trägt ein grünes Hemd und die Mutter trägt eine weiße Bluse.', en: 'The father is wearing a green shirt and the mother is wearing a white blouse.' },`,
    voc: `      { de: 'grün', en: 'green' },\n      { de: 'die Bluse', en: 'blouse' },\n      { de: 'weiß', en: 'white' },`
  },
  {
    id: '6',
    bb: `      { de: 'Die Mutter trägt einen grauen Mantel und einen schwarzen Schal.', en: 'The mother is wearing a grey coat and a black scarf.' },`,
    voc: `      { de: 'grau', en: 'grey' },\n      { de: 'der Mantel', en: 'coat' },\n      { de: 'der Schal', en: 'scarf' },\n      { de: 'schwarz', en: 'black' },`
  },
  {
    id: '2',
    bb: `      { de: 'Der Mann trägt eine schwarze Jacke und die Frau trägt einen weißen Pullover.', en: 'The man is wearing a black jacket and the woman is wearing a white sweater.' },`,
    voc: `      { de: 'der Pullover', en: 'sweater' },`
  },
  {
    id: '1',
    bb: `      { de: 'Die Verkäuferin trägt einen blauen Anzug und ein weißes Hemd.', en: 'The saleswoman is wearing a blue suit and a white shirt.' },`,
    voc: `      { de: 'der Anzug', en: 'suit' },\n      { de: 'weiß', en: 'white' },\n      { de: 'blau', en: 'blue' },`
  },
  {
    id: '3',
    bb: `      { de: 'Die Tochter trägt einen blauen Pullover und die Mutter trägt eine braune Jacke.', en: 'The daughter is wearing a blue sweater and the mother is wearing a brown jacket.' },`,
    voc: `      { de: 'braun', en: 'brown' },\n      { de: 'der Pullover', en: 'sweater' },\n      { de: 'blau', en: 'blue' },`
  },
  {
    id: '4',
    bb: `      { de: 'Sie tragen dicke, rote und blaue Winterjacken und braune Schuhe.', en: 'They are wearing thick, red and blue winter jackets and brown shoes.' },`,
    voc: `      { de: 'die Winterjacke', en: 'winter jacket' },\n      { de: 'braun', en: 'brown' },\n      { de: 'rot', en: 'red' },\n      { de: 'blau', en: 'blue' },`
  },
  {
    id: '7',
    bb: `      { de: 'Eine Frau trägt einen gelben Pullover und die andere Frau trägt ein schwarzes T-Shirt.', en: 'One woman is wearing a yellow sweater and the other woman is wearing a black T-shirt.' },`,
    voc: `      { de: 'gelb', en: 'yellow' },\n      { de: 'schwarz', en: 'black' },\n      { de: 'der Pullover', en: 'sweater' },`
  },
  {
    id: '11',
    bb: `      { de: 'Eine Frau sitzt auf dem Sofa. Sie trägt ein graues T-Shirt.', en: 'A woman is sitting on the sofa. She is wearing a grey T-shirt.' },`,
    voc: `      { de: 'grau', en: 'grey' },\n      { de: 'das T-Shirt', en: 'T-shirt' },`
  },
  {
    id: '12',
    bb: `      { de: 'Die Person am Computer trägt ein weißes Hemd und eine Brille.', en: 'The person at the computer is wearing a white shirt and glasses.' },`,
    voc: `      { de: 'die Brille', en: 'glasses' },\n      { de: 'weiß', en: 'white' },\n      { de: 'das Hemd', en: 'shirt' },`
  }
];

for (const update of updates) {
  const idPattern = new RegExp(`id: '${update.id}'[\\s\\S]*?bildbeschreibung: \\[\n`);
  content = content.replace(idPattern, (match) => {
    return match + update.bb + '\n';
  });

  const vocabPattern = new RegExp(`id: '${update.id}'[\\s\\S]*?vocabulary: \\[\n`);
  content = content.replace(vocabPattern, (match) => {
    return match + update.voc + '\n';
  });
}

fs.writeFileSync('src/data/sprechen.ts', content);
console.log('Updates applied!');
