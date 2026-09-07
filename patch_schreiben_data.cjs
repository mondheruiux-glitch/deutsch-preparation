const fs = require('fs');
const file = 'src/data/schreiben.ts';
let content = fs.readFileSync(file, 'utf8');

const newTopic = `  {
    id: '11',
    title: 'Deutschkurs',
    icon: 'GraduationCap',
    situation: 'Sie möchten an einer Sprachschule Deutsch lernen und schreiben eine E-Mail an die Schule.\\n\\nSchreiben Sie eine Nachricht:',
    questions: [
      { de: 'Wann beginnt der Deutschkurs?', en: 'When does the German course begin?' },
      { de: 'Wie viel kostet der Kurs?', en: 'How much does the course cost?' },
      { de: 'Wie kann ich mich anmelden?', en: 'How can I register?' }
    ],
    vocabulary: [
      { de: 'die Sprachschule', en: 'language school' },
      { de: 'der Deutschkurs', en: 'German course' },
      { de: 'anmelden', en: 'to register' },
      { de: 'kosten', en: 'to cost' },
      { de: 'beginnen', en: 'to begin' }
    ],
    usefulSentences: [
      { de: 'Ich möchte Deutsch lernen.', en: 'I want to learn German.' },
      { de: 'Wann beginnt der nächste Kurs?', en: 'When does the next course start?' },
      { de: 'Wie teuer ist das?', en: 'How expensive is that?' }
    ],
    modelAnswer: {
      de: 'Guten Tag,\\n\\nich möchte Deutsch lernen.\\nWann beginnt der Deutschkurs?\\nWie viel kostet der Kurs?\\n\\nWie kann ich mich anmelden?\\n\\nVielen Dank.\\n\\nViele Grüße\\nMondher',
      en: 'Good day,\\n\\nI would like to learn German.\\nWhen does the German course begin?\\nHow much does the course cost?\\n\\nHow can I register?\\n\\nThank you very much.\\n\\nBest regards,\\nMondher'
    }
  }
`;

content = content.replace('];', `,\n${newTopic}\n];`);
fs.writeFileSync(file, content);
console.log('patched');
