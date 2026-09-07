const fs = require('fs');

let content = fs.readFileSync('src/data/sprechen.ts', 'utf8');

const replacement = `  {
    id: '9',
    title: 'Einkaufen — Shopping',
    icon: 'ShoppingCart',
    image: img9,
    bildbeschreibung: [
      { de: 'Das ist ein Supermarkt.', en: 'This is a supermarket.' },
      { de: 'Eine Frau kauft ein.', en: 'A woman is shopping.' },
      { de: 'Die Kundin: Sie ist links.', en: 'The customer: She is on the left.' },
      { de: 'Sie lächelt.', en: 'She smiles.' },
      { de: 'Sie gibt Geld.', en: 'She gives money.' },
      { de: 'Die Kassiererin: Sie ist rechts.', en: 'The cashier: She is on the right.' },
      { de: 'Sie trägt Blau.', en: 'She wears blue.' },
      { de: 'Sie nimmt das Geld.', en: 'She takes the money.' },
      { de: 'Das Geld: Die Frauen bezahlen bar.', en: 'The money: The women pay in cash.' },
      { de: 'Die Lebensmittel: Es gibt eine Ananas, Gemüse und Milch.', en: 'The groceries: There is a pineapple, vegetables, and milk.' },
      { de: 'Die Kasse: Hier bezahlt man.', en: 'The checkout: This is where you pay.' }
    ],
    situation: [
      { de: 'Wo ist die Frau?', en: 'Where is the woman?' },
      { de: '→ Sie ist im Supermarkt.', en: '→ She is in the supermarket.', isAnswer: true },
      { de: 'Was macht die Frau?', en: 'What is the woman doing?' },
      { de: '→ Sie kauft ein und bezahlt.', en: '→ She is shopping and paying.', isAnswer: true },
      { de: 'Wie bezahlt sie?', en: 'How does she pay?' },
      { de: '→ Sie bezahlt bar mit Geld.', en: '→ She pays in cash with money.', isAnswer: true },
      { de: 'Was kauft sie?', en: 'What is she buying?' },
      { de: '→ Sie kauft Lebensmittel, zum Beispiel eine Ananas.', en: '→ She is buying groceries, for example a pineapple.', isAnswer: true }
    ],
    vocabulary: [
      { de: 'der Supermarkt', en: 'the supermarket' },
      { de: 'einkaufen', en: 'to shop / to go shopping' },
      { de: 'die Kundin', en: 'the customer (female)' },
      { de: 'die Kassiererin', en: 'the cashier (female)' },
      { de: 'das Geld', en: 'the money' },
      { de: 'bar bezahlen', en: 'to pay in cash' },
      { de: 'die Kasse', en: 'the checkout / cash register' },
      { de: 'die Lebensmittel', en: 'the groceries / food' }
    ]
  },`;

// We'll use regex to replace the block for id: '9'
const regex = /\{\s*id:\s*'9'[\s\S]*?(?=\s*\{\s*id:\s*'10')/m;
content = content.replace(regex, replacement + '\n');

fs.writeFileSync('src/data/sprechen.ts', content);
console.log('Updated topic 9!');
