import { LesenTest } from '../types';

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
          { id: 'A', content: 'Sekretärin/Sekretär gesucht\nInternationale Firma sucht Sekretärin/Sekretär mit Berufserfahrung (Vollzeit)\nAufgaben: telefonische Kundenbetreuung, organisatorische Tätigkeiten\nBewerbungen an: info@personalvermittlung-holzer.de' },
          { id: 'B', content: 'Fitnesscenter Olymp\nUnser Angebot:\n- 120 Geräte für Kraft- und Fitnesstraining\n- Rückengymnastik\n- Beratung durch geprüfte Trainer\ntäglich 10–22 Uhr' },
          { id: 'C', content: 'Buchhandlung Steiner\nBücher zum halben Preis\n- Richtig telefonieren\n- Gesund essen im Büro\n- 100 Jahre Sportfotografie\nAngebot gültig bis Ende Mai' },
          { id: 'D', content: 'Die ganze Welt um wenig Geld!\nGünstige Auslandsanrufe ab 1,9 Cent/Minute\nweltweitanrufen.de bietet Ihnen die besten Tarife für Anrufe in Mobilnetze und ins ausländische Festnetz.' },
          { id: 'E', content: 'Sie suchen jemanden, der Ihre Wäsche wäscht und bügelt?\nSie brauchen jemanden, der beim Saubermachen hilft?\nRufen Sie uns an: 0150 123 456' },
          { id: 'F', content: 'Feinkost Klement\nIn unserem Delikatessengeschäft bieten wir Ihnen:\n- kalte Platten für Ihre Feier\n- Salate und Brötchen\n- warme Speisen auf Bestellung' }
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
            text: 'Schönes-Wochenende-Ticket\n- gültig ab Samstag 0 Uhr bis Montag 3 Uhr für Reisen in Deutschland\n- für Gruppen bis zu fünf Personen und für Einzelreisende\n\nPreis: 39 Euro im Internet, 41 Euro im Reisezentrum an Ihrem Bahnhof',
            questions: [
              { id: 'q1', number: 6, text: 'Kann man am Freitagabend mit dem Ticket fahren?', answer: 'NEIN', explanation: 'Das Ticket ist erst ab Samstag 0 Uhr gültig.' },
              { id: 'q2', number: 7, text: 'Kostet das Ticket beim Kauf am Bahnhof mehr?', answer: 'JA', explanation: 'Im Internet kostet es 39 Euro, am Bahnhof 41 Euro.' }
            ]
          },
          {
            id: 'item2',
            text: 'Lesen im Park\nIm Sommer gibt es in Grazer Parks wieder Bücherkisten mit vielen Kinderbüchern – zum Lesen vor Ort oder zum Mit-nach-Hause-Nehmen. Weitere Aktivitäten: Bastel- und Malgruppen; Papier und Stifte haben wir für dich.',
            questions: [
              { id: 'q3', number: 8, text: 'Darf man die Bücher nur im Park lesen?', answer: 'NEIN', explanation: 'Man darf sie auch "Mit-nach-Hause-Nehmen".' },
              { id: 'q4', number: 9, text: 'Müssen die Kinder Papier und Stifte mitbringen?', answer: 'NEIN', explanation: 'Im Text steht: "Papier und Stifte haben wir für dich".' }
            ]
          },
          {
            id: 'item3',
            text: '3-Zimmer-Wohnung\nNeu renovierte Wohnung (63 m²) ab 1. August zu vermieten. Gesamtmiete: CHF 1.200,--\nSie haben noch Fragen? Schreiben Sie eine E-Mail an: info@immobilien-heiss.ch\nTermine zur Wohnungsbesichtigung: 15. Juli, 11.00 Uhr | 18. Juli, 15.00 Uhr',
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
          { id: 'A', content: 'Sprachschule Lingua\nLernen Sie Sprachen mit Muttersprachlern!\n- Spanisch, Englisch, Französisch\n- Neue Abendkurse ab Montag\n- Kleine Gruppen, faire Preise!' },
          { id: 'B', content: 'Restaurant Zum Bären\nGut und günstig essen!\nUnser Spezial-Angebot am Freitag:\nPizza nach Wahl + 1 Getränk\nfür nur 9,90 Euro.\nWir freuen uns auf Sie!' },
          { id: 'C', content: 'Zweirad Meier\nGroßer Flohmarkt am Samstag!\nWir verkaufen gebrauchte Kinderfahrräder, Helme und Zubehör zu tollen Preisen.\nSamstag, 9-14 Uhr.' },
          { id: 'D', content: 'Computerhilfe 24/7\nIhr PC streikt? Das Internet geht nicht?\nWir reparieren schnell, professionell und günstig direkt bei Ihnen zu Hause.\nRufen Sie an!' },
          { id: 'E', content: 'Apotheke am Markt\nIhre Gesundheit ist uns wichtig!\nDiese Woche haben wir Nachtdienst:\n24 Stunden für Sie da.\nAuch an Wochenenden geöffnet.' },
          { id: 'F', content: 'Tierarztpraxis Dr. Schmidt\nProfessionelle Hilfe für Hunde, Katzen und andere Kleintiere.\nGeöffnet:\nMo-Fr: 8-12 und 14-18 Uhr\nNotfälle bitte telefonisch anmelden!' }
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
            text: 'Achtung Fahrgäste!\nWegen Bauarbeiten fahren am Wochenende keine Züge von Gleis 3.\nBitte nutzen Sie die Busse vor dem Bahnhof (Schienenersatzverkehr).\nDie Busse fahren alle 20 Minuten ab 6 Uhr morgens.',
            questions: [
              { id: 'q1', number: 6, text: 'Fahren die Züge am Wochenende wie immer?', answer: 'NEIN', explanation: 'Wegen Bauarbeiten fahren keine Züge von Gleis 3, sondern Busse.' },
              { id: 'q2', number: 7, text: 'Fahren die Busse vor dem Bahnhof ab?', answer: 'JA', explanation: 'Im Text steht: "nutzen Sie die Busse vor dem Bahnhof".' }
            ]
          },
          {
            id: 'item2',
            text: 'Liebe Mieterinnen und Mieter,\nam kommenden Mittwoch zwischen 8:00 und 14:00 Uhr wird in unserem Haus das Wasser abgestellt.\nBitte waschen Sie in dieser Zeit keine Wäsche.\nDer Hausmeister',
            questions: [
              { id: 'q3', number: 8, text: 'Gibt es am Mittwoch um 15 Uhr wieder Wasser?', answer: 'JA', explanation: 'Das Wasser ist nur bis 14:00 Uhr abgestellt.' },
              { id: 'q4', number: 9, text: 'Darf man am Mittwochvormittag Wäsche waschen?', answer: 'NEIN', explanation: 'Während das Wasser abgestellt ist (8-14 Uhr), darf man keine Wäsche waschen.' }
            ]
          },
          {
            id: 'item3',
            text: 'Stadtmuseum: Ausstellung "Alte Technik"\nGeöffnet Dienstag bis Sonntag, 10-18 Uhr.\nMontags geschlossen.\nEintritt: Erwachsene 8 Euro, Kinder bis 14 Jahre frei.\nJeden Freitag freier Eintritt für alle!',
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
  },
  {
    id: 'lesen-test-4',
    title: 'ÖSD A1 Lesen – Modelltest 4',
    difficulty: 'A1',
    timeLimitInMinutes: 25,
    tasks: [
      {
        id: 't4-task1',
        type: 'matching',
        title: 'AUFGABE 1',
        instruction: 'Situation: Sie suchen verschiedene Dinge in der Zeitung. Finden Sie zu jeder Situation 1 - 5 die passende Anzeige A - F. Achtung: Eine Anzeige ist zu viel.',
        situations: [
          { id: 's1', number: 1, text: 'Sie möchten am Sonntag mit Ihrer Familie frühstücken.' },
          { id: 's2', number: 2, text: 'Ihr Sohn braucht neue Schuhe.' },
          { id: 's3', number: 3, text: 'Sie möchten Ihre Freundin zum Geburtstag anrufen.' },
          { id: 's4', number: 4, text: 'Sie brauchen einen Termin beim Arzt.' },
          { id: 's5', number: 5, text: 'Sie möchten am Wochenende schwimmen.' }
        ],
        options: [
          { id: 'A', content: 'Kinder-Schuhhaus\n\nGroße Auswahl an Schuhen für Kinder.\nMontag–Samstag 09:00–18:00 Uhr.' },
          { id: 'B', content: 'Café Morgen\n\nFrühstück jeden Sonntag von 08:00–13:00 Uhr.\nKaffee, Brot, Eier und Kuchen.' },
          { id: 'C', content: 'Telefon-Shop\n\nGünstig telefonieren!\nAuslandsgespräche in viele Länder.' },
          { id: 'D', content: 'Arztpraxis Dr. Klein\n\nTermine telefonisch: 0711 456789.\nMontag–Freitag 08:00–17:00 Uhr.' },
          { id: 'E', content: 'Hallenbad\n\nSamstag und Sonntag geöffnet.\nSamstag: 08:00–19:00 Uhr\nSonntag: 09:00–17:00 Uhr.' },
          { id: 'F', content: 'Reisebüro\n\nBahnreisen und Flugreisen.\nTickets für Deutschland und Europa.' }
        ],
        answers: { s1: 'B', s2: 'A', s3: 'C', s4: 'D', s5: 'E' },
        explanations: {
          s1: 'Anzeige B (Café Morgen) bietet Frühstück jeden Sonntag an.',
          s2: 'Anzeige A (Kinder-Schuhhaus) bietet Schuhe für Kinder.',
          s3: 'Anzeige C (Telefon-Shop) bietet günstiges Telefonieren ins Ausland.',
          s4: 'Anzeige D (Arztpraxis Dr. Klein) vergibt Termine beim Arzt.',
          s5: 'Anzeige E (Hallenbad) ist am Wochenende zum Schwimmen geöffnet.'
        }
      },
      {
        id: 't4-task2',
        type: 'yes_no',
        title: 'AUFGABE 2',
        instruction: 'Situation: Sie lesen einen Informationstext. Antworten Sie auf die Fragen mit JA oder NEIN.',
        items: [
          {
            id: 'item1',
            text: 'STADTBIBLIOTHEK\n\nMontag: geschlossen\nDienstag–Freitag: 10:00–18:00 Uhr\nSamstag: 10:00–14:00 Uhr\n\nBücher können kostenlos ausgeliehen werden.\nFür Kinder gibt es jeden Mittwoch um 16:00 Uhr eine Vorlesestunde.',
            questions: [
              { id: 'q6', number: 6, text: 'Die Bibliothek ist am Montag geöffnet.', answer: 'NEIN', explanation: 'Am Montag ist die Bibliothek geschlossen.' },
              { id: 'q7', number: 7, text: 'Am Samstag kann man um 13 Uhr Bücher ausleihen.', answer: 'JA', explanation: 'Samstag ist von 10:00 bis 14:00 Uhr geöffnet.' },
              { id: 'q8', number: 8, text: 'Kinder können am Mittwoch Geschichten hören.', answer: 'JA', explanation: 'Jeden Mittwoch um 16:00 Uhr gibt es eine Vorlesestunde.' },
              { id: 'q9', number: 9, text: 'Die Bücher kosten Geld.', answer: 'NEIN', explanation: 'Bücher können kostenlos ausgeliehen werden.' },
              { id: 'q10', number: 10, text: 'Die Vorlesestunde beginnt um 18 Uhr.', answer: 'NEIN', explanation: 'Die Vorlesestunde beginnt um 16:00 Uhr.' }
            ]
          }
        ]
      },
      {
        id: 't4-task3',
        type: 'matching',
        title: 'AUFGABE 3',
        instruction: 'Situation: Welches Schild passt zu welcher Aussage? Wählen Sie die passende Bildnummer (1 - 6).',
        situations: [
          { id: 's11', number: 11, text: 'Hier dürfen Sie nicht rauchen.' },
          { id: 's12', number: 12, text: 'Bitte lassen Sie Ihren Hund draußen.' },
          { id: 's13', number: 13, text: 'Hier können Sie Ihr Auto parken.' },
          { id: 's14', number: 14, text: 'Wo kann ich zur Toilette gehen?' },
          { id: 's15', number: 15, text: 'Hier ist der Ausgang.' }
        ],
        options: [
          { id: '1', isSign: true, content: '🚭' },
          { id: '2', isSign: true, content: '🅿️' },
          { id: '3', isSign: true, content: '🚫🐕' },
          { id: '4', isSign: true, content: '🚻' },
          { id: '5', isSign: true, content: '📷' },
          { id: '6', isSign: true, content: '🚪' }
        ],
        answers: { s11: '1', s12: '3', s13: '2', s14: '4', s15: '6' },
        explanations: {
          s11: 'Bild 1 (🚭) bedeutet: Rauchen verboten.',
          s12: 'Bild 3 (🚫🐕) bedeutet: Hunde verboten.',
          s13: 'Bild 2 (🅿️) bedeutet: Parkplatz.',
          s14: 'Bild 4 (🚻) bedeutet: Toilette.',
          s15: 'Bild 6 (🚪) bedeutet: Ausgang.'
        }
      }
    ]
  },
  {
    id: 'lesen-test-5',
    title: 'ÖSD A1 Lesen – Modelltest 5',
    difficulty: 'A1',
    timeLimitInMinutes: 25,
    tasks: [
      {
        id: 't5-task1',
        type: 'matching',
        title: 'AUFGABE 1',
        instruction: 'Situation: Sie suchen verschiedene Angebote. Finden Sie zu jeder Situation 1 - 5 die passende Anzeige A - F. Achtung: Eine Anzeige ist zu viel.',
        situations: [
          { id: 's1', number: 1, text: 'Sie möchten am Abend einen Film sehen.' },
          { id: 's2', number: 2, text: 'Sie haben Hunger und möchten etwas essen.' },
          { id: 's3', number: 3, text: 'Sie möchten Deutsch lernen.' },
          { id: 's4', number: 4, text: 'Ihr Fahrrad ist kaputt.' },
          { id: 's5', number: 5, text: 'Sie suchen eine Wohnung.' }
        ],
        options: [
          { id: 'A', content: 'Sprachschule Aktiv\n\nDeutsch A1\nMontag und Mittwoch\n18:00–20:00 Uhr.' },
          { id: 'B', content: 'Fahrrad-Service\n\nFahrrad kaputt?\nWir reparieren Fahrräder.\nMontag–Samstag.' },
          { id: 'C', content: 'Kino Central\n\nHeute Abend:\n18:30 — Komödie\n20:45 — Actionfilm' },
          { id: 'D', content: 'Restaurant Bella\n\nPizza, Pasta und Salate.\nTäglich 11:30–22:00 Uhr.' },
          { id: 'E', content: 'Wohnungen Müller\n\n2- und 3-Zimmer-Wohnungen\nInformationen per E-Mail.' },
          { id: 'F', content: 'Supermarkt\n\nObst, Gemüse, Getränke und Brot.' }
        ],
        answers: { s1: 'C', s2: 'D', s3: 'A', s4: 'B', s5: 'E' },
        explanations: {
          s1: 'Anzeige C (Kino Central) zeigt Filme am Abend.',
          s2: 'Anzeige D (Restaurant Bella) bietet Pizza, Pasta und Salate zum Essen.',
          s3: 'Anzeige A (Sprachschule Aktiv) bietet Deutschkurse A1.',
          s4: 'Anzeige B (Fahrrad-Service) repariert Fahrräder.',
          s5: 'Anzeige E (Wohnungen Müller) vermietet 2- und 3-Zimmer-Wohnungen.'
        }
      },
      {
        id: 't5-task2',
        type: 'yes_no',
        title: 'AUFGABE 2',
        instruction: 'Situation: Sie lesen einen Informationstext am Bahnhof. Antworten Sie mit JA oder NEIN.',
        items: [
          {
            id: 'item1',
            text: '🚆 BAHNHOF INFORMATION\n\nDer Zug nach Berlin fährt heute um 14:25 Uhr von Gleis 3.\n\nDer Zug nach Hamburg fährt um 15:10 Uhr von Gleis 5.\n\nFahrkarten können Sie am Schalter oder am Automaten kaufen.',
            questions: [
              { id: 'q6', number: 6, text: 'Der Zug nach Berlin fährt um 14:25 Uhr.', answer: 'JA', explanation: 'Im Text steht: Zug nach Berlin fährt um 14:25 Uhr.' },
              { id: 'q7', number: 7, text: 'Der Berlin-Zug fährt von Gleis 5.', answer: 'NEIN', explanation: 'Der Berlin-Zug fährt von Gleis 3, Gleis 5 ist für Hamburg.' },
              { id: 'q8', number: 8, text: 'Der Zug nach Hamburg fährt um 15:10 Uhr.', answer: 'JA', explanation: 'Im Text steht: Zug nach Hamburg fährt um 15:10 Uhr.' },
              { id: 'q9', number: 9, text: 'Man kann Fahrkarten nur am Schalter kaufen.', answer: 'NEIN', explanation: 'Man kann sie auch am Automaten kaufen.' },
              { id: 'q10', number: 10, text: 'Der Zug nach Hamburg fährt später als der Zug nach Berlin.', answer: 'JA', explanation: '15:10 Uhr ist später als 14:25 Uhr.' }
            ]
          }
        ]
      },
      {
        id: 't5-task3',
        type: 'matching',
        title: 'AUFGABE 3',
        instruction: 'Situation: Wo hören oder lesen Sie diese kurzen Texte? Wählen Sie den passenden Ort A - E.',
        situations: [
          { id: 's11', number: 11, text: '„Heute gibt es Äpfel für 1,50 Euro pro Kilo.“' },
          { id: 's12', number: 12, text: '„Bitte warten Sie hier auf den Bus.“' },
          { id: 's13', number: 13, text: '„Bitte bringen Sie Ihre Gesundheitskarte mit.“' },
          { id: 's14', number: 14, text: '„Kaffee und Kuchen heute nur 5 Euro.“' },
          { id: 's15', number: 15, text: '„Bücher können Sie hier ausleihen.“' }
        ],
        options: [
          { id: 'A', content: '🏥 Arzt' },
          { id: 'B', content: '🛒 Supermarkt' },
          { id: 'C', content: '📚 Bibliothek' },
          { id: 'D', content: '☕ Café' },
          { id: 'E', content: '🚌 Bushaltestelle' }
        ],
        answers: { s11: 'B', s12: 'E', s13: 'A', s14: 'D', s15: 'C' },
        explanations: {
          s11: 'Äpfel kaufen gehört zum Supermarkt (B).',
          s12: 'Auf den Bus warten gehört zur Bushaltestelle (E).',
          s13: 'Gesundheitskarte mitbringen gehört zum Arzt (A).',
          s14: 'Kaffee und Kuchen gehört zum Café (D).',
          s15: 'Bücher ausleihen gehört zur Bibliothek (C).'
        }
      }
    ]
  },
  {
    id: 'lesen-test-6',
    title: 'ÖSD A1 Lesen – Modelltest 6',
    difficulty: 'A1',
    timeLimitInMinutes: 25,
    tasks: [
      {
        id: 't6-task1',
        type: 'matching',
        title: 'AUFGABE 1',
        instruction: 'Situation: Sie suchen verschiedene Dienstleistungen. Finden Sie zu jeder Situation 1 - 5 die passende Anzeige A - F. Achtung: Eine Anzeige ist zu viel.',
        situations: [
          { id: 's1', number: 1, text: 'Sie möchten morgen einen Freund besuchen. Sie brauchen ein Zugticket.' },
          { id: 's2', number: 2, text: 'Sie möchten für Ihre Frau einen Blumenstrauß kaufen.' },
          { id: 's3', number: 3, text: 'Ihr Kind ist krank.' },
          { id: 's4', number: 4, text: 'Sie möchten am Wochenende Tennis spielen.' },
          { id: 's5', number: 5, text: 'Sie möchten ein gebrauchtes Auto kaufen.' }
        ],
        options: [
          { id: 'A', content: 'Blumenhaus Rose\n\nBlumen für jeden Anlass.\nMo–Sa: 08:00–19:00 Uhr.' },
          { id: 'B', content: 'Tennisclub Grün\n\nTennisplätze am Samstag und Sonntag geöffnet.\nAnmeldung erforderlich.' },
          { id: 'C', content: 'Auto Markt\n\nGebrauchte Autos.\nGroße Auswahl.\nSamstag 09:00–16:00 Uhr.' },
          { id: 'D', content: 'Kinderarzt\n\nPraxis für Kinder.\nMontag–Freitag: 08:00–17:00 Uhr.' },
          { id: 'E', content: 'Deutsche Bahn\n\nZugtickets online und am Bahnhof.\nReisen in Deutschland und Europa.' },
          { id: 'F', content: 'Möbelhaus\n\nBetten, Tische, Stühle und Schränke.' }
        ],
        answers: { s1: 'E', s2: 'A', s3: 'D', s4: 'B', s5: 'C' },
        explanations: {
          s1: 'Anzeige E (Deutsche Bahn) bietet Zugtickets.',
          s2: 'Anzeige A (Blumenhaus Rose) verkauft Blumensträuße.',
          s3: 'Anzeige D (Kinderarzt) ist eine Praxis für kranke Kinder.',
          s4: 'Anzeige B (Tennisclub Grün) hat am Wochenende geöffnete Tennisplätze.',
          s5: 'Anzeige C (Auto Markt) bietet gebrauchte Autos an.'
        }
      },
      {
        id: 't6-task2',
        type: 'yes_no',
        title: 'AUFGABE 2',
        instruction: 'Situation: Sie lesen die Informationstafel eines Sportzentrums. Antworten Sie mit JA oder NEIN.',
        items: [
          {
            id: 'item1',
            text: '🏃 SPORTZENTRUM WEST\n\nMontag–Freitag: 07:00–22:00 Uhr\nSamstag: 09:00–18:00 Uhr\nSonntag: geschlossen\n\nFitness: 30 € pro Monat\nSchwimmen: 20 € pro Monat\nTennis: 25 € pro Monat\n\nKinder unter 12 Jahren dürfen nicht allein ins Schwimmbad.',
            questions: [
              { id: 'q6', number: 6, text: 'Das Sportzentrum ist am Sonntag geöffnet.', answer: 'NEIN', explanation: 'Am Sonntag ist das Sportzentrum geschlossen.' },
              { id: 'q7', number: 7, text: 'Am Samstag kann man um 17 Uhr Tennis spielen.', answer: 'JA', explanation: 'Samstag ist von 09:00 bis 18:00 Uhr geöffnet.' },
              { id: 'q8', number: 8, text: 'Fitness kostet 30 Euro pro Monat.', answer: 'JA', explanation: 'Fitness: 30 € pro Monat.' },
              { id: 'q9', number: 9, text: 'Kinder unter 12 Jahren dürfen allein schwimmen.', answer: 'NEIN', explanation: 'Kinder unter 12 Jahren dürfen nicht allein ins Schwimmbad.' },
              { id: 'q10', number: 10, text: 'Am Montag kann man um 21 Uhr Sport machen.', answer: 'JA', explanation: 'Montag bis Freitag ist bis 22:00 Uhr geöffnet.' }
            ]
          }
        ]
      },
      {
        id: 't6-task3',
        type: 'multiple_choice',
        title: 'AUFGABE 3',
        instruction: 'Situation: Sie lesen 5 kurze Nachrichten. Wählen Sie zu jeder Frage die richtige Antwort A, B oder C.',
        items: [
          {
            id: 'mc1',
            text: 'Hallo Tom,\nich komme heute nicht um 17 Uhr.\nIch komme erst um 18 Uhr.\nBis später!\nAnna',
            questionNumber: 11,
            question: 'Wann kommt Anna?',
            options: [
              { id: 'A', text: '16 Uhr' },
              { id: 'B', text: '17 Uhr' },
              { id: 'C', text: '18 Uhr' }
            ],
            answer: 'C',
            explanation: 'Anna schreibt: "Ich komme erst um 18 Uhr."'
          },
          {
            id: 'mc2',
            text: 'Liebe Sara,\nkannst du bitte Milch und Brot kaufen?\nWir haben keine Milch mehr.',
            questionNumber: 12,
            question: 'Was soll Sara kaufen?',
            options: [
              { id: 'A', text: 'Milch und Brot' },
              { id: 'B', text: 'Käse und Brot' },
              { id: 'C', text: 'Milch und Käse' }
            ],
            answer: 'A',
            explanation: 'Im Text steht: "kannst du bitte Milch und Brot kaufen?"'
          },
          {
            id: 'mc3',
            text: 'Achtung!\nDer Supermarkt ist heute geschlossen.\nMorgen öffnen wir wieder um 8 Uhr.',
            questionNumber: 13,
            question: 'Wann öffnet der Supermarkt wieder?',
            options: [
              { id: 'A', text: 'Heute um 8 Uhr' },
              { id: 'B', text: 'Morgen um 8 Uhr' },
              { id: 'C', text: 'Morgen um 10 Uhr' }
            ],
            answer: 'B',
            explanation: 'Im Text steht: "Morgen öffnen wir wieder um 8 Uhr."'
          },
          {
            id: 'mc4',
            text: 'Hallo Paul,\nder Deutschkurs beginnt morgen um 18:30 Uhr.\nBitte bring dein Buch mit.',
            questionNumber: 14,
            question: 'Was soll Paul mitbringen?',
            options: [
              { id: 'A', text: 'Einen Stift' },
              { id: 'B', text: 'Ein Buch' },
              { id: 'C', text: 'Einen Computer' }
            ],
            answer: 'B',
            explanation: 'Im Text steht: "Bitte bring dein Buch mit."'
          },
          {
            id: 'mc5',
            text: 'Liebe Maria,\nich habe am Samstag Geburtstag.\nMeine Party beginnt um 19 Uhr.',
            questionNumber: 15,
            question: 'Wann beginnt die Party?',
            options: [
              { id: 'A', text: 'Freitag um 19 Uhr' },
              { id: 'B', text: 'Samstag um 18 Uhr' },
              { id: 'C', text: 'Samstag um 19 Uhr' }
            ],
            answer: 'C',
            explanation: 'Im Text steht: "ich habe am Samstag Geburtstag. Meine Party beginnt um 19 Uhr."'
          }
        ]
      }
    ]
  },
  {
    id: 'lesen-test-7',
    title: 'ÖSD A1 Lesen – Modelltest 7',
    difficulty: 'A1',
    timeLimitInMinutes: 25,
    tasks: [
      {
        id: 't7-task1',
        type: 'matching',
        title: 'AUFGABE 1',
        instruction: 'Situation: Sie suchen verschiedene Angebote. Finden Sie zu jeder Situation 1 - 5 die passende Anzeige A - F. Achtung: Eine Anzeige ist zu viel.',
        situations: [
          { id: 's1', number: 1, text: 'Sie möchten morgen früh zum Arzt gehen.' },
          { id: 's2', number: 2, text: 'Sie möchten am Samstag mit Ihrer Familie essen gehen.' },
          { id: 's3', number: 3, text: 'Sie brauchen ein Geschenk für ein kleines Kind.' },
          { id: 's4', number: 4, text: 'Sie möchten im Sommer nach Italien reisen.' },
          { id: 's5', number: 5, text: 'Sie suchen einen Deutschkurs am Abend.' }
        ],
        options: [
          { id: 'A', content: 'Sprachzentrum\n\nDeutsch A1/A2\nDienstag und Donnerstag\n19:00–21:00 Uhr.' },
          { id: 'B', content: 'Reisebüro Europa\n\nReisen nach Italien, Spanien und Frankreich.\nFlug und Hotel buchbar.' },
          { id: 'C', content: 'Restaurant Adler\n\nSamstag und Sonntag geöffnet.\nMittagessen: 12:00–15:00 Uhr\nAbendessen: 18:00–22:00 Uhr.' },
          { id: 'D', content: 'Kinderwelt\n\nSpielzeug und Geschenke für Kinder.\nMontag–Samstag: 09:00–19:00 Uhr.' },
          { id: 'E', content: 'Hausarzt Dr. Weber\n\nMontag–Freitag: 07:30–12:00 Uhr\nDienstag zusätzlich: 15:00–18:00 Uhr.' },
          { id: 'F', content: 'Modehaus\n\nDamen- und Herrenbekleidung.\nGroße Auswahl an Schuhen.' }
        ],
        answers: { s1: 'E', s2: 'C', s3: 'D', s4: 'B', s5: 'A' },
        explanations: {
          s1: 'Anzeige E (Hausarzt Dr. Weber) ist morgens ab 07:30 Uhr geöffnet.',
          s2: 'Anzeige C (Restaurant Adler) ist am Samstag zum Mittag- und Abendessen geöffnet.',
          s3: 'Anzeige D (Kinderwelt) hat Geschenke und Spielzeug für Kinder.',
          s4: 'Anzeige B (Reisebüro Europa) bietet Reisen nach Italien an.',
          s5: 'Anzeige A (Sprachzentrum) bietet Abendkurse von 19:00–21:00 Uhr.'
        }
      },
      {
        id: 't7-task2',
        type: 'yes_no',
        title: 'AUFGABE 2',
        instruction: 'Situation: Sie lesen Hotel-Informationen. Antworten Sie mit JA oder NEIN.',
        items: [
          {
            id: 'item1',
            text: '🏨 HOTEL SONNE\n\nEinzelzimmer: 70 € pro Nacht\nDoppelzimmer: 100 € pro Nacht\n\nFrühstück: 10 € pro Person\n\nCheck-in: ab 14:00 Uhr\nCheck-out: bis 11:00 Uhr\n\nKostenloses WLAN in allen Zimmern.\n\nHaustiere sind nicht erlaubt.',
            questions: [
              { id: 'q6', number: 6, text: 'Ein Einzelzimmer kostet 70 Euro.', answer: 'JA', explanation: 'Einzelzimmer kostet 70 € pro Nacht.' },
              { id: 'q7', number: 7, text: 'Das Frühstück kostet 10 Euro pro Person.', answer: 'JA', explanation: 'Frühstück: 10 € pro Person.' },
              { id: 'q8', number: 8, text: 'Man kann schon um 12 Uhr einchecken.', answer: 'NEIN', explanation: 'Check-in ist erst ab 14:00 Uhr möglich.' },
              { id: 'q9', number: 9, text: 'Das Hotel hat kostenloses WLAN.', answer: 'JA', explanation: 'Kostenloses WLAN in allen Zimmern.' },
              { id: 'q10', number: 10, text: 'Hunde und Katzen dürfen im Hotel wohnen.', answer: 'NEIN', explanation: 'Haustiere sind nicht erlaubt.' }
            ]
          }
        ]
      },
      {
        id: 't7-task3',
        type: 'multiple_choice',
        title: 'AUFGABE 3',
        instruction: 'Situation: Lesen Sie die Anzeigen und wählen Sie die richtige Antwort A, B oder C.',
        items: [
          {
            id: 'mc1',
            text: 'Apotheke am Markt\nMontag–Freitag: 08:00–19:00 Uhr\nSamstag: 09:00–13:00 Uhr\nSonntag geschlossen.',
            questionNumber: 11,
            question: 'Wann ist die Apotheke am Samstag geöffnet?',
            options: [
              { id: 'A', text: '08:00–19:00' },
              { id: 'B', text: '09:00–13:00' },
              { id: 'C', text: '13:00–19:00' }
            ],
            answer: 'B',
            explanation: 'Am Samstag ist die Apotheke von 09:00–13:00 geöffnet.'
          },
          {
            id: 'mc2',
            text: 'Kino Star\nFilm „Sommer“: 17:30 Uhr\nFilm „Berlin“: 20:00 Uhr',
            questionNumber: 12,
            question: 'Wann beginnt der Film „Berlin“?',
            options: [
              { id: 'A', text: '17:30 Uhr' },
              { id: 'B', text: '19:00 Uhr' },
              { id: 'C', text: '20:00 Uhr' }
            ],
            answer: 'C',
            explanation: 'Film „Berlin“ beginnt um 20:00 Uhr.'
          },
          {
            id: 'mc3',
            text: 'Bäckerei Klein\nHeute: Brot 2 €, Brötchen 0,50 €, Kuchen 3 €.',
            questionNumber: 13,
            question: 'Was kostet der Kuchen?',
            options: [
              { id: 'A', text: '0,50 €' },
              { id: 'B', text: '2 €' },
              { id: 'C', text: '3 €' }
            ],
            answer: 'C',
            explanation: 'Im Text steht: "Kuchen 3 €".'
          },
          {
            id: 'mc4',
            text: 'Schwimmkurs für Kinder\nSamstag 10:00–11:00 Uhr\nAnmeldung bis Freitag.',
            questionNumber: 14,
            question: 'Wann ist der Schwimmkurs?',
            options: [
              { id: 'A', text: 'Freitag um 10 Uhr' },
              { id: 'B', text: 'Samstag um 10 Uhr' },
              { id: 'C', text: 'Samstag um 11 Uhr' }
            ],
            answer: 'B',
            explanation: 'Der Kurs findet Samstag von 10:00–11:00 Uhr statt.'
          },
          {
            id: 'mc5',
            text: 'Deutschprüfung A1\nPrüfung: Montag, 20. Oktober\nBeginn: 09:00 Uhr\nBitte kommen Sie 30 Minuten früher.',
            questionNumber: 15,
            question: 'Wann soll der Teilnehmer kommen?',
            options: [
              { id: 'A', text: '08:00 Uhr' },
              { id: 'B', text: '08:30 Uhr' },
              { id: 'C', text: '09:30 Uhr' }
            ],
            answer: 'B',
            explanation: 'Beginn ist um 09:00 Uhr, 30 Minuten früher bedeutet 08:30 Uhr.'
          }
        ]
      }
    ]
  },
  {
    id: 'lesen-test-3',
    title: 'ÖSD A1 Lesen – Modelltest 3',
    difficulty: 'A1',
    timeLimitInMinutes: 25,
    tasks: [
      {
        id: 't3-task1',
        type: 'matching',
        title: 'AUFGABE 1',
        instruction: 'Lesen Sie die Situationen. Finden Sie zu jeder Situation 1–5 die passende Anzeige A–F. Achtung: Eine Anzeige ist zu viel.',
        situations: [
          { id: 's1', number: 1, text: 'Sie möchten am Samstag mit dem Zug nach München fahren.' },
          { id: 's2', number: 2, text: 'Ihre Tochter hat Geburtstag. Sie möchten ein Geschenk kaufen.' },
          { id: 's3', number: 3, text: 'Sie haben Zahnschmerzen und brauchen einen Arzt.' },
          { id: 's4', number: 4, text: 'Sie möchten am Abend mit Freunden etwas essen.' },
          { id: 's5', number: 5, text: 'Sie möchten Deutsch lernen. Sie können nur am Wochenende.' }
        ],
        options: [
          { id: 'A', content: 'Sprachschule Deutsch Plus\nDeutsch A1 und A2.\nKurse Montag bis Freitag am Abend.' },
          { id: 'B', content: 'Restaurant La Piazza\nPizza, Pasta und Salate.\nFreitag und Samstag bis 23 Uhr geöffnet.' },
          { id: 'C', content: 'Reisezentrum\nZugtickets nach München, Berlin und Hamburg.\nTickets online oder am Bahnhof.' },
          { id: 'D', content: 'Kinderwelt\nSpielzeug und Geschenke für Kinder.\nSamstag 09:00–18:00 Uhr.' },
          { id: 'E', content: 'Zahnarzt Dr. Berger\nZahnarztpraxis.\nMontag–Freitag 08:00–17:00 Uhr.\nTermine: 0345 67890.' },
          { id: 'F', content: 'Wochenendkurs Deutsch\nDeutsch A1 am Samstag und Sonntag.\n10:00–13:00 Uhr.' }
        ],
        answers: { s1: 'C', s2: 'D', s3: 'E', s4: 'B', s5: 'F' },
        explanations: {
          s1: 'Anzeige C (Reisezentrum) bietet Zugtickets nach München an.',
          s2: 'Anzeige D (Kinderwelt) verkauft Spielzeug und Geschenke für Kinder.',
          s3: 'Anzeige E (Zahnarzt Dr. Berger) ist eine Zahnarztpraxis.',
          s4: 'Anzeige B (Restaurant La Piazza) ist am Abend geöffnet (bis 23 Uhr).',
          s5: 'Anzeige F (Wochenendkurs Deutsch) bietet Kurse am Samstag und Sonntag an. Anzeige A ist nur Montag–Freitag.'
        }
      },
      {
        id: 't3-task2',
        type: 'yes_no',
        title: 'AUFGABE 2',
        instruction: 'Lesen Sie den Text und entscheiden Sie: Sind die Aussagen richtig (JA) oder falsch (NEIN)?',
        items: [
          {
            id: 'item1',
            text: 'SCHWIMMBAD STADTMITTE\n\nMontag geschlossen.\nDienstag–Freitag: 08:00–20:00 Uhr\nSamstag: 09:00–18:00 Uhr\nSonntag: 10:00–16:00 Uhr\n\nErwachsene: 5 Euro\nKinder: 3 Euro\nKinder unter 6 Jahren haben keinen Eintritt.\n\nAm Samstag gibt es einen Schwimmkurs für Kinder um 10:00 Uhr.',
            questions: [
              { id: 'q1', number: 6, text: 'Das Schwimmbad ist am Montag geöffnet.', answer: 'NEIN', explanation: 'Im Text steht: "Montag geschlossen." — Das Schwimmbad ist am Montag zu.' },
              { id: 'q2', number: 7, text: 'Am Samstag kann man um 17 Uhr schwimmen.', answer: 'JA', explanation: 'Am Samstag ist das Schwimmbad von 09:00–18:00 Uhr geöffnet. 17 Uhr liegt innerhalb dieser Zeit.' },
              { id: 'q3', number: 8, text: 'Eine erwachsene Person bezahlt 5 Euro.', answer: 'JA', explanation: 'Der Eintritt für Erwachsene beträgt laut Text 5 Euro.' },
              { id: 'q4', number: 9, text: 'Kinder unter 6 Jahren müssen 3 Euro bezahlen.', answer: 'NEIN', explanation: 'Der Text sagt: "Kinder unter 6 Jahren haben keinen Eintritt." — Sie zahlen nichts.' },
              { id: 'q5', number: 10, text: 'Der Schwimmkurs für Kinder ist am Samstag um 10 Uhr.', answer: 'JA', explanation: 'Der Text bestätigt: "Am Samstag gibt es einen Schwimmkurs für Kinder um 10:00 Uhr."' }
            ]
          }
        ]
      },
      {
        id: 't3-task3',
        type: 'multiple_choice',
        title: 'AUFGABE 3',
        instruction: 'Lesen Sie die Informationen und wählen Sie die richtige Antwort (A, B oder C).',
        items: [
          {
            id: 'mc1',
            text: 'Bäckerei Müller\nMontag–Freitag: 06:30–18:00 Uhr\nSamstag: 07:00–13:00 Uhr\nSonntag: geschlossen.\n\nHeute ist Samstag.',
            questionNumber: 11,
            question: 'Wann kann man heute Brot kaufen?',
            options: [
              { id: 'A', text: '06:30 Uhr' },
              { id: 'B', text: '07:00 Uhr' },
              { id: 'C', text: '18:00 Uhr' }
            ],
            answer: 'B',
            explanation: 'Heute ist Samstag. Am Samstag öffnet die Bäckerei um 07:00 Uhr. 06:30 und 18:00 Uhr gelten nur Montag–Freitag.'
          },
          {
            id: 'mc2',
            text: 'SMS\n\nHallo Anna,\nich komme heute später. Der Bus hat Verspätung.\nIch bin um 19:30 Uhr bei dir.\nLiebe Grüße, Tom',
            questionNumber: 12,
            question: 'Wann kommt Tom?',
            options: [
              { id: 'A', text: '18:30 Uhr' },
              { id: 'B', text: '19:00 Uhr' },
              { id: 'C', text: '19:30 Uhr' }
            ],
            answer: 'C',
            explanation: 'Tom schreibt in der SMS: "Ich bin um 19:30 Uhr bei dir." — Die Antwort ist C.'
          },
          {
            id: 'mc3',
            text: 'Deutsch A1\n\nDer Kurs beginnt am Montag um 18:00 Uhr.\nAm Dienstag gibt es keinen Kurs.\nAm Mittwoch beginnt der Kurs um 18:00 Uhr.',
            questionNumber: 13,
            question: 'Wann ist der nächste Kurs nach Montag?',
            options: [
              { id: 'A', text: 'Dienstag' },
              { id: 'B', text: 'Mittwoch' },
              { id: 'C', text: 'Donnerstag' }
            ],
            answer: 'B',
            explanation: 'Am Dienstag gibt es keinen Kurs. Der nächste Kurs nach Montag ist daher am Mittwoch.'
          },
          {
            id: 'mc4',
            text: 'Im Supermarkt\n\nÄpfel: 2 €\nBananen: 1,50 €\nOrangen: 3 €\nMilch: 1 €',
            questionNumber: 14,
            question: 'Was kostet die Milch?',
            options: [
              { id: 'A', text: '1 €' },
              { id: 'B', text: '1,50 €' },
              { id: 'C', text: '2 €' }
            ],
            answer: 'A',
            explanation: 'Laut der Preisliste kostet Milch 1 €. 1,50 € sind die Bananen, 2 € die Äpfel.'
          },
          {
            id: 'mc5',
            text: 'Arztpraxis\n\nFrau Müller hat am Donnerstag einen Termin.\nDer Termin ist um 10:30 Uhr.\nBitte kommen Sie 15 Minuten früher.',
            questionNumber: 15,
            question: 'Wann soll Frau Müller beim Arzt sein?',
            options: [
              { id: 'A', text: '10:00 Uhr' },
              { id: 'B', text: '10:15 Uhr' },
              { id: 'C', text: '10:30 Uhr' }
            ],
            answer: 'B',
            explanation: 'Der Termin ist um 10:30 Uhr, aber sie soll 15 Minuten früher kommen: 10:30 − 15 Minuten = 10:15 Uhr.'
          }
        ]
      }
    ]
  }
];
