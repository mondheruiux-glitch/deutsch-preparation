const fs = require('fs');

const data = `import { LesenTest } from '../types';

export const lesenTests: LesenTest[] = [
  {
    id: 'lesen-test-1',
    title: 'ÖSD A1 Lesen – Modelltest 1',
    difficulty: 'A1',
    timeLimitInMinutes: 25,
    tasks: [
      {
        id: 't1-task1',
        type: 'matching',
        title: 'AUFGABE 1',
        instruction: 'Situation: Sie suchen verschiedene Dinge in der Zeitung. Finden Sie zu jeder Situation 1 - 5 die passende Anzeige A - F. Achtung: Eine Anzeige ist zu viel.',
        situations: [
          { id: 's1', number: 1, text: 'Sie haben viele Freunde in anderen Ländern und möchten billig mit ihnen telefonieren.' },
          { id: 's2', number: 2, text: 'Sie sollen für ein Fest etwas zum Essen mitbringen. Sie haben keine Zeit zum Kochen.' },
          { id: 's3', number: 3, text: 'Sie suchen einen Job. Sie wollen in einem Büro arbeiten.' },
          { id: 's4', number: 4, text: 'Sie haben eine große Wohnung. Sie brauchen Hilfe bei der Hausarbeit.' },
          { id: 's5', number: 5, text: 'Sie arbeiten viel am Computer. In Ihrer Freizeit möchten Sie Sport machen.' }
        ],
        options: [
          { id: 'A', content: 'Sekretärin/Sekretär gesucht\\nInternationale Firma sucht Sekretärin/Sekretär mit Berufserfahrung (Vollzeit)\\nAufgaben: telefonische Kundenbetreuung, organisatorische Tätigkeiten\\nBewerbungen an: info@personalvermittlung-holzer.de' },
          { id: 'B', content: 'Fitnesscenter Olymp\\nUnser Angebot:\\n- 120 Geräte für Kraft- und Fitnesstraining\\n- Rückengymnastik\\n- Beratung durch geprüfte Trainer\\ntäglich 10–22 Uhr' },
          { id: 'C', content: 'Buchhandlung Steiner\\nBücher zum halben Preis\\n- Richtig telefonieren\\n- Gesund essen im Büro\\n- 100 Jahre Sportfotografie\\nAngebot gültig bis Ende Mai' },
          { id: 'D', content: 'Die ganze Welt um wenig Geld!\\nGünstige Auslandsanrufe ab 1,9 Cent/Minute\\nweltweitanrufen.de bietet Ihnen die besten Tarife für Anrufe in Mobilnetze und ins ausländische Festnetz.' },
          { id: 'E', content: 'Sie suchen jemanden, der Ihre Wäsche wäscht und bügelt?\\nSie brauchen jemanden, der beim Saubermachen hilft?\\nRufen Sie uns an: 0150 123 456' },
          { id: 'F', content: 'Feinkost Klement\\nIn unserem Delikatessengeschäft bieten wir Ihnen:\\n- kalte Platten für Ihre Feier\\n- Salate und Brötchen\\n- warme Speisen auf Bestellung' }
        ],
        answers: { s1: 'D', s2: 'F', s3: 'A', s4: 'E', s5: 'B' },
        explanations: {
          s1: 'Anzeige D bietet günstige Auslandsanrufe an.',
          s2: 'Anzeige F bietet kalte Platten und Speisen für Feiern an.',
          s3: 'Anzeige A sucht eine Sekretärin / einen Sekretär (Bürojob).',
          s4: 'Anzeige E bietet Hilfe beim Saubermachen und Waschen an.',
          s5: 'Anzeige B ist ein Fitnesscenter für Sport.'
        }
      },
      {
        id: 't1-task2',
        type: 'yes_no',
        title: 'AUFGABE 2',
        instruction: 'Situation: Sie lesen drei Anzeigen. Dazu gibt es je 2 Fragen. Antworten Sie mit JA oder NEIN.',
        items: [
          {
            id: 'item1',
            text: 'Schönes-Wochenende-Ticket\\n- gültig ab Samstag 0 Uhr bis Montag 3 Uhr für Reisen in Deutschland\\n- für Gruppen bis zu fünf Personen und für Einzelreisende\\n\\nPreis: 39 Euro im Internet, 41 Euro im Reisezentrum an Ihrem Bahnhof',
            questions: [
              { id: 'q1', number: 6, text: 'Kann man am Freitagabend mit dem Ticket fahren?', answer: 'NEIN', explanation: 'Das Ticket ist erst ab Samstag 0 Uhr gültig.' },
              { id: 'q2', number: 7, text: 'Kostet das Ticket beim Kauf am Bahnhof mehr?', answer: 'JA', explanation: 'Im Internet kostet es 39 Euro, am Bahnhof 41 Euro.' }
            ]
          },
          {
            id: 'item2',
            text: 'Lesen im Park\\nIm Sommer gibt es in Grazer Parks wieder Bücherkisten mit vielen Kinderbüchern – zum Lesen vor Ort oder zum Mit-nach-Hause-Nehmen. Weitere Aktivitäten: Bastel- und Malgruppen; Papier und Stifte haben wir für dich.',
            questions: [
              { id: 'q3', number: 8, text: 'Darf man die Bücher nur im Park lesen?', answer: 'NEIN', explanation: 'Man darf sie auch "Mit-nach-Hause-Nehmen".' },
              { id: 'q4', number: 9, text: 'Müssen die Kinder Papier und Stifte mitbringen?', answer: 'NEIN', explanation: 'Im Text steht: "Papier und Stifte haben wir für dich".' }
            ]
          },
          {
            id: 'item3',
            text: '3-Zimmer-Wohnung\\nNeu renovierte Wohnung (63 m²) ab 1. August zu vermieten. Gesamtmiete: CHF 1.200,--\\nSie haben noch Fragen? Schreiben Sie eine E-Mail an: info@immobilien-heiss.ch\\nTermine zur Wohnungsbesichtigung: 15. Juli, 11.00 Uhr | 18. Juli, 15.00 Uhr',
            questions: [
              { id: 'q5', number: 10, text: 'Kann man telefonisch Informationen bekommen?', answer: 'NEIN', explanation: 'Man soll eine E-Mail schreiben, keine Telefonnummer angegeben.' },
              { id: 'q6', number: 11, text: 'Kann man die Wohnung am Vormittag sehen?', answer: 'JA', explanation: 'Am 15. Juli ist ein Termin um 11:00 Uhr (Vormittag).' }
            ]
          }
        ]
      },
      {
        id: 't1-task3',
        type: 'matching',
        title: 'AUFGABE 3',
        instruction: 'Situation: Sie lesen hier 5 kurze Texte. Welches Bild passt zu welchem Text? Achtung: Ein Bild ist zu viel.',
        situations: [
          { id: 's1', number: 12, text: 'Bitte beachten Sie, dass in diesem Teil des Parks Hunde verboten sind. Für Hunde steht der hintere Teil des Parks zur Verfügung. Danke für Ihr Verständnis!' },
          { id: 's2', number: 13, text: 'Liebe Bibliotheksbesucherinnen und -besucher! Sie finden unsere Computer mit Internetzugang im Raum 4. Bei Fragen hilft Ihnen gerne unser Bibliothekspersonal.' },
          { id: 's3', number: 14, text: 'Liebe Kollegen, bitte haltet den Aufenthaltsraum sauber. Alle Abfälle bitte in den Mülleimer! Vielen Dank für euer Verständnis!' },
          { id: 's4', number: 15, text: 'Frischer Kaffee und Kuchen! Genießen Sie in unserer Cafeteria täglich von 14 bis 17 Uhr frische Backwaren.' },
          { id: 's5', number: 16, text: 'Achtung: Das Parken vor dieser Ausfahrt ist Tag und Nacht verboten. Widerrechtlich geparkte Fahrzeuge werden kostenpflichtig abgeschleppt.' }
        ],
        options: [
          { id: 'A', isSign: true, content: '🚯' },
          { id: 'B', isSign: true, content: '☕' },
          { id: 'C', isSign: true, content: '🚳' },
          { id: 'D', isSign: true, content: '💻' },
          { id: 'E', isSign: true, content: '🚭' },
          { id: 'F', isSign: true, content: '🚫🐕' }
        ],
        answers: { s1: 'F', s2: 'D', s3: 'A', s4: 'B', s5: 'C' },
        explanations: {
          s1: 'Bild F (Hunde verboten) passt zum Text "Hunde verboten".',
          s2: 'Bild D (Computer) passt zum Text "Computer mit Internetzugang".',
          s3: 'Bild A (Mülleimer) passt zum Text "Abfälle bitte in den Mülleimer".',
          s4: 'Bild B (Kaffee) passt zum Text "Frischer Kaffee und Kuchen".',
          s5: 'Bild C (Parken verboten - symbolisch) passt zum Text "Parken verboten".'
        }
      }
    ]
  },
  {
    id: 'lesen-test-2',
    title: 'ÖSD A1 Lesen – Modelltest 2',
    difficulty: 'A1',
    timeLimitInMinutes: 25,
    tasks: [
      {
        id: 't2-task1',
        type: 'matching',
        title: 'AUFGABE 1',
        instruction: 'Situation: Sie suchen verschiedene Dinge in der Zeitung. Finden Sie zu jeder Situation 1 - 5 die passende Anzeige A - F. Achtung: Eine Anzeige ist zu viel.',
        situations: [
          { id: 's1', number: 1, text: 'Sie möchten billig ein Fahrrad für Ihr Kind kaufen.' },
          { id: 's2', number: 2, text: 'Sie haben Fieber und brauchen in der Nacht dringend Medikamente.' },
          { id: 's3', number: 3, text: 'Sie reisen nach Südamerika und möchten vorher die Sprache lernen.' },
          { id: 's4', number: 4, text: 'Ihre Katze ist sehr krank. Sie suchen ärztliche Hilfe.' },
          { id: 's5', number: 5, text: 'Sie möchten am Freitagabend mit Freunden günstig essen gehen.' }
        ],
        options: [
          { id: 'A', content: 'Sprachschule Lingua\\nLernen Sie Sprachen mit Muttersprachlern!\\n- Spanisch, Englisch, Französisch\\n- Neue Abendkurse ab Montag\\n- Kleine Gruppen, faire Preise!' },
          { id: 'B', content: 'Restaurant Zum Bären\\nGut und günstig essen!\\nUnser Spezial-Angebot am Freitag:\\nPizza nach Wahl + 1 Getränk\\nfür nur 9,90 Euro.\\nWir freuen uns auf Sie!' },
          { id: 'C', content: 'Zweirad Meier\\nGroßer Flohmarkt am Samstag!\\nWir verkaufen gebrauchte Kinderfahrräder, Helme und Zubehör zu tollen Preisen.\\nSamstag, 9-14 Uhr.' },
          { id: 'D', content: 'Computerhilfe 24/7\\nIhr PC streikt? Das Internet geht nicht?\\nWir reparieren schnell, professionell und günstig direkt bei Ihnen zu Hause.\\nRufen Sie an!' },
          { id: 'E', content: 'Apotheke am Markt\\nIhre Gesundheit ist uns wichtig!\\nDiese Woche haben wir Nachtdienst:\\n24 Stunden für Sie da.\\nAuch an Wochenenden geöffnet.' },
          { id: 'F', content: 'Tierarztpraxis Dr. Schmidt\\nProfessionelle Hilfe für Hunde, Katzen und andere Kleintiere.\\nGeöffnet:\\nMo-Fr: 8-12 und 14-18 Uhr\\nNotfälle bitte telefonisch anmelden!' }
        ],
        answers: { s1: 'C', s2: 'E', s3: 'A', s4: 'F', s5: 'B' },
        explanations: {
          s1: 'Anzeige C bietet einen Flohmarkt für gebrauchte Kinderfahrräder.',
          s2: 'Anzeige E ist eine Apotheke mit Nachtdienst.',
          s3: 'Anzeige A ist eine Sprachschule, die Spanischkurse anbietet.',
          s4: 'Anzeige F ist eine Tierarztpraxis für Katzen und andere Tiere.',
          s5: 'Anzeige B bietet am Freitag Pizza und Getränke für 9,90 Euro an.'
        }
      },
      {
        id: 't2-task2',
        type: 'yes_no',
        title: 'AUFGABE 2',
        instruction: 'Situation: Sie lesen drei kurze Texte. Dazu gibt es je 2 Fragen. Antworten Sie mit JA oder NEIN.',
        items: [
          {
            id: 'item1',
            text: 'Achtung Fahrgäste!\\nWegen Bauarbeiten fahren am Wochenende keine Züge von Gleis 3.\\nBitte nutzen Sie die Busse vor dem Bahnhof (Schienenersatzverkehr).\\nDie Busse fahren alle 20 Minuten ab 6 Uhr morgens.',
            questions: [
              { id: 'q1', number: 6, text: 'Fahren die Züge am Wochenende wie immer?', answer: 'NEIN', explanation: 'Wegen Bauarbeiten fahren keine Züge von Gleis 3, sondern Busse.' },
              { id: 'q2', number: 7, text: 'Fahren die Busse vor dem Bahnhof ab?', answer: 'JA', explanation: 'Im Text steht: "nutzen Sie die Busse vor dem Bahnhof".' }
            ]
          },
          {
            id: 'item2',
            text: 'Liebe Mieterinnen und Mieter,\\nam kommenden Mittwoch zwischen 8:00 und 14:00 Uhr wird in unserem Haus das Wasser abgestellt.\\nBitte waschen Sie in dieser Zeit keine Wäsche.\\nDer Hausmeister',
            questions: [
              { id: 'q3', number: 8, text: 'Gibt es am Mittwoch um 15 Uhr wieder Wasser?', answer: 'JA', explanation: 'Das Wasser ist nur bis 14:00 Uhr abgestellt.' },
              { id: 'q4', number: 9, text: 'Darf man am Mittwochvormittag Wäsche waschen?', answer: 'NEIN', explanation: 'Während das Wasser abgestellt ist (8-14 Uhr), darf man keine Wäsche waschen.' }
            ]
          },
          {
            id: 'item3',
            text: 'Stadtmuseum: Ausstellung "Alte Technik"\\nGeöffnet Dienstag bis Sonntag, 10-18 Uhr.\\nMontags geschlossen.\\nEintritt: Erwachsene 8 Euro, Kinder bis 14 Jahre frei.\\nJeden Freitag freier Eintritt für alle!',
            questions: [
              { id: 'q5', number: 10, text: 'Ist das Museum am Montag geöffnet?', answer: 'NEIN', explanation: 'Im Text steht: "Montags geschlossen".' },
              { id: 'q6', number: 11, text: 'Müssen Kinder für die Ausstellung bezahlen?', answer: 'NEIN', explanation: 'Im Text steht: "Kinder bis 14 Jahre frei".' }
            ]
          }
        ]
      },
      {
        id: 't2-task3',
        type: 'matching',
        title: 'AUFGABE 3',
        instruction: 'Situation: Sie lesen hier 5 kurze Texte. Welches Bild passt zu welchem Text? Achtung: Ein Bild ist zu viel.',
        situations: [
          { id: 's1', number: 12, text: 'Sie sind am Flughafen gelandet und suchen Ihre Koffer.' },
          { id: 's2', number: 13, text: 'Sie brauchen Bargeld, um sich ein Zugticket zu kaufen.' },
          { id: 's3', number: 14, text: 'Sie suchen im Einkaufszentrum dringend eine Toilette.' },
          { id: 's4', number: 15, text: 'Sie wollen Ihr Auto parken, aber hier ist es absolut verboten.' },
          { id: 's5', number: 16, text: 'Sie haben großen Durst und möchten sich etwas zu trinken kaufen.' }
        ],
        options: [
          { id: 'A', isSign: true, content: '🚻' },
          { id: 'B', isSign: true, content: '🧳' },
          { id: 'C', isSign: true, content: '🚭' },
          { id: 'D', isSign: true, content: '🚫🅿️' },
          { id: 'E', isSign: true, content: '🏧' },
          { id: 'F', isSign: true, content: '🥤' }
        ],
        answers: { s1: 'B', s2: 'E', s3: 'A', s4: 'D', s5: 'F' },
        explanations: {
          s1: 'Das Koffer-Symbol (🧳) steht für die Gepäckausgabe am Flughafen.',
          s2: 'Das Bankomat-Symbol (🏧) zeigt, wo man Geld abheben kann.',
          s3: 'Das Toiletten-Symbol (🚻) zeigt den Weg zu den WCs.',
          s4: 'Das Parken-Verboten-Symbol (🚫🅿️) bedeutet, dass man hier nicht parken darf.',
          s5: 'Das Getränke-Symbol (🥤) zeigt, wo man etwas trinken kann.'
        }
      }
    ]
  }
];
`;
fs.writeFileSync('src/data/lesen.ts', data);
