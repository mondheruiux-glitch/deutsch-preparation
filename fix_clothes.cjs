const fs = require('fs');
let content = fs.readFileSync('src/data/sprechen.ts', 'utf-8');

const updates = [
  { id: '8', bb: `      { de: 'Ein Mann sitzt am Tisch. Er trägt ein blaues Hemd.', en: 'A man is sitting at the table. He is wearing a blue shirt.' }` },
  { id: '9', bb: `      { de: 'Die Person trägt einen roten Pullover und eine blaue Jeans.', en: 'The person is wearing a red sweater and blue jeans.' }` },
  { id: '10', bb: `      { de: 'Ein Freund trägt ein gelbes T-Shirt und eine schwarze Hose.', en: 'One friend is wearing a yellow T-shirt and black trousers.' }` },
  { id: '5', bb: `      { de: 'Der Vater trägt ein grünes Hemd und die Mutter trägt eine weiße Bluse.', en: 'The father is wearing a green shirt and the mother is wearing a white blouse.' }` },
  { id: '6', bb: `      { de: 'Die Mutter trägt einen grauen Mantel und einen schwarzen Schal.', en: 'The mother is wearing a grey coat and a black scarf.' }` },
  { id: '2', bb: `      { de: 'Der Mann trägt eine schwarze Jacke und die Frau trägt einen weißen Pullover.', en: 'The man is wearing a black jacket and the woman is wearing a white sweater.' }` },
  { id: '1', bb: `      { de: 'Die Verkäuferin trägt einen blauen Anzug und ein weißes Hemd.', en: 'The saleswoman is wearing a blue suit and a white shirt.' }` },
  { id: '3', bb: `      { de: 'Die Tochter trägt einen blauen Pullover und die Mutter trägt eine braune Jacke.', en: 'The daughter is wearing a blue sweater and the mother is wearing a brown jacket.' }` },
  { id: '4', bb: `      { de: 'Sie tragen dicke, rote und blaue Winterjacken und braune Schuhe.', en: 'They are wearing thick, red and blue winter jackets and brown shoes.' }` },
  { id: '7', bb: `      { de: 'Eine Frau trägt einen gelben Pullover und die andere Frau trägt ein schwarzes T-Shirt.', en: 'One woman is wearing a yellow sweater and the other woman is wearing a black T-shirt.' }` },
  { id: '11', bb: `      { de: 'Eine Frau sitzt auf dem Sofa. Sie trägt ein graues T-Shirt.', en: 'A woman is sitting on the sofa. She is wearing a grey T-shirt.' }` },
  { id: '12', bb: `      { de: 'Die Person am Computer trägt ein weißes Hemd und eine Brille.', en: 'The person at the computer is wearing a white shirt and glasses.' }` }
];

for (const update of updates) {
  const removeTarget = update.bb + ',';
  // Escape regex properly
  const escapedTarget = removeTarget.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  const lineToRemoveRegex = new RegExp(`[ \\t]*${escapedTarget}\\n`);
  
  if (lineToRemoveRegex.test(content)) {
    content = content.replace(lineToRemoveRegex, '');
    
    // Now insert it at the bottom of the bildbeschreibung array
    const insertRegex = new RegExp(`(id: '${update.id}'[\\s\\S]*?bildbeschreibung: \\[[\\s\\S]*?)(\\n[ \\t]*\\],[ \\t]*\\n[ \\t]*situation: \\[\n)`);
    content = content.replace(insertRegex, (match, p1, p2) => {
      p1 = p1.trimEnd();
      if (p1.endsWith('}')) {
        p1 += ',';
      }
      return p1 + '\n' + update.bb + p2;
    });
  }
}

fs.writeFileSync('src/data/sprechen.ts', content);
console.log('Fixed order!');
