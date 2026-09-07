import { SchreibenTheme } from '../types';

export const schreibenThemes: SchreibenTheme[] = [
  {
    id: '1',
    title: 'Ausflug',
    icon: 'TreePine',
    situation: 'Hallo, unsere Kursgruppe endet am nächsten Montag und wir möchten gern zusammen einen kleinen Ausflug machen, vielleicht in den Park oder in den Wald. Möchtest du gerne mitkommen?\n\nWir werden viel unternehmen und machen auch ein kleines Picknick. Du kannst auch jemanden von deiner Familie oder Freunde mitbringen.\n\nSchreib mir bitte:',
    questions: [
      { de: 'Um wie viel Uhr hast du am nächsten Montag Zeit?', en: 'At what time do you have time next Monday?' },
      { de: 'Was können wir noch auf dem Ausflug machen?', en: 'What else can we do on the trip?' },
      { de: 'Wen bringst du mit?', en: 'Who are you bringing?' }
    ],
    vocabulary: [
      { de: 'der Ausflug', en: 'excursion / trip' },
      { de: 'das Picknick', en: 'picnic' },
      { de: 'der Wald', en: 'forest' },
      { de: 'spazieren gehen', en: 'to go for a walk' },
      { de: 'mitbringen', en: 'to bring along' }
    ],
    usefulSentences: [
      { de: 'Ich habe am Montag um 10 Uhr Zeit.', en: 'I have time on Monday at 10 o\'clock.' },
      { de: 'Wir können spazieren gehen.', en: 'We can go for a walk.' },
      { de: 'Ich bringe meine Schwester mit.', en: 'I am bringing my sister.' },
      { de: 'Ich warte auf deine Antwort.', en: 'I am waiting for your reply.' }
    ],
    modelAnswer: {
      de: 'Liebe Maya,\n\nich komme sehr gern mit. Ich habe am Montag um 10 Uhr Zeit. Wir können spazieren gehen. Ich bringe meine Schwester mit.\n\nIch warte auf deine Antwort.\n\nLiebe Grüße\nMondher',
      en: 'Dear Maya,\n\nI would really like to come. I have time on Monday at 10 o\'clock. We can go for a walk. I am bringing my sister.\n\nI am waiting for your reply.\n\nBest wishes,\nMondher'
    }
  },
  {
    id: '2',
    title: 'Geburtstag',
    icon: 'Cake',
    situation: 'Du hast am Wochenende Geburtstag und möchtest eine kleine Party machen. Du möchtest einen Freund einladen.\n\nSchreib eine Nachricht:',
    questions: [
      { de: 'Wann ist die Party?', en: 'When is the party?' },
      { de: 'Wo ist die Party?', en: 'Where is the party?' },
      { de: 'Was bringst du mit?', en: 'What are you bringing?' },
      { de: 'Wer kommt?', en: 'Who is coming?' }
    ],
    vocabulary: [
      { de: 'der Geburtstag', en: 'birthday' },
      { de: 'die Party', en: 'party' },
      { de: 'feiern', en: 'to celebrate' },
      { de: 'einladen', en: 'to invite' },
      { de: 'der Kuchen', en: 'cake' }
    ],
    usefulSentences: [
      { de: 'Die Party ist am Samstag.', en: 'The party is on Saturday.' },
      { de: 'Wir feiern im Park.', en: 'We are celebrating in the park.' },
      { de: 'Ich bringe Kuchen mit.', en: 'I am bringing cake.' },
      { de: 'Meine Schwester kommt auch.', en: 'My sister is coming too.' },
      { de: 'Ich warte auf deine Antwort.', en: 'I am waiting for your reply.' }
    ],
    modelAnswer: {
      de: 'Lieber Paul,\n\nich lade dich zu meinem Geburtstag ein. Die Party ist am Samstag. Wir feiern im Park. Ich bringe Kuchen und Getränke mit. Meine Schwester kommt auch.\n\nIch warte auf deine Antwort.\n\nLiebe Grüße\nMondher',
      en: 'Dear Paul,\n\nI invite you to my birthday. The party is on Saturday. We are celebrating in the park. I am bringing cake and drinks. My sister is coming too.\n\nI am waiting for your reply.\n\nBest wishes,\nMondher'
    }
  },
  {
    id: '3',
    title: 'Einladung',
    icon: 'PartyPopper',
    situation: 'Ein Freund hat dich zu einer Party eingeladen. Du möchtest kommen und schreibst eine Antwort.\n\nSchreib ihm bitte:',
    questions: [
      { de: 'Wann kommst du?', en: 'When are you coming?' },
      { de: 'Wo treffen wir uns?', en: 'Where do we meet?' },
      { de: 'Was machen wir?', en: 'What are we doing?' },
      { de: 'Wer kommt mit?', en: 'Who is coming with you?' }
    ],
    vocabulary: [
      { de: 'die Einladung', en: 'invitation' },
      { de: 'die Musik', en: 'music' },
      { de: 'tanzen', en: 'to dance' },
      { de: 'treffen', en: 'to meet' },
      { de: 'kommen', en: 'to come' }
    ],
    usefulSentences: [
      { de: 'Ich komme am Freitag um 20 Uhr.', en: 'I am coming on Friday at 8 PM.' },
      { de: 'Wir treffen uns bei dir zu Hause.', en: 'We meet at your house.' },
      { de: 'Wir können Musik hören und tanzen.', en: 'We can listen to music and dance.' },
      { de: 'Mein Bruder kommt auch.', en: 'My brother is coming too.' },
      { de: 'Ich warte auf deine Antwort.', en: 'I am waiting for your reply.' }
    ],
    modelAnswer: {
      de: 'Lieber Tom,\n\ndanke für deine Einladung. Ich komme sehr gern mit. Ich komme am Freitag um 20 Uhr. Wir treffen uns bei dir zu Hause. Wir können Musik hören und tanzen. Mein Bruder kommt auch mit.\n\nIch warte auf deine Antwort.\n\nLiebe Grüße\nMondher',
      en: 'Dear Tom,\n\nThank you for your invitation. I would really like to come. I am coming on Friday at 8 PM. We will meet at your house. We can listen to music and dance. My brother is coming too.\n\nI am waiting for your reply.\n\nBest wishes,\nMondher'
    }
  },
  {
    id: '4',
    title: 'Einkaufen',
    icon: 'ShoppingCart',
    situation: 'Du möchtest am Wochenende mit einer Freundin einkaufen gehen. Du brauchst neue Kleidung und Essen.\n\nSchreib eine Nachricht:',
    questions: [
      { de: 'Was kaufen wir?', en: 'What are we buying?' },
      { de: 'Wann gehen wir einkaufen?', en: 'When are we going shopping?' },
      { de: 'Wo treffen wir uns?', en: 'Where do we meet?' },
      { de: 'Was brauchst du?', en: 'What do you need?' }
    ],
    vocabulary: [
      { de: 'einkaufen', en: 'to shop' },
      { de: 'der Supermarkt', en: 'supermarket' },
      { de: 'die Kleidung', en: 'clothes' },
      { de: 'brauchen', en: 'to need' },
      { de: 'das Brot', en: 'bread' }
    ],
    usefulSentences: [
      { de: 'Wir können Obst und Brot kaufen.', en: 'We can buy fruit and bread.' },
      { de: 'Wir gehen am Samstag einkaufen.', en: 'We are going shopping on Saturday.' },
      { de: 'Wir treffen uns vor dem Supermarkt.', en: 'We meet in front of the supermarket.' },
      { de: 'Ich brauche eine neue Jacke.', en: 'I need a new jacket.' },
      { de: 'Ich warte auf deine Antwort.', en: 'I am waiting for your reply.' }
    ],
    modelAnswer: {
      de: 'Liebe Anna,\n\nwir gehen einkaufen. Wir können Obst und Brot kaufen. Wir gehen am Samstag einkaufen. Wir treffen uns vor dem Supermarkt. Ich brauche auch eine neue Jacke.\n\nIch warte auf deine Antwort.\n\nLiebe Grüße\nMondher',
      en: 'Dear Anna,\n\nWe are going shopping. We can buy fruit and bread. We are going shopping on Saturday. We meet in front of the supermarket. I also need a new jacket.\n\nI am waiting for your reply.\n\nBest wishes,\nMondher'
    }
  },
  {
    id: '5',
    title: 'Reise',
    icon: 'Plane',
    situation: 'Du planst eine Reise mit deinem Freund. Ihr wollt am Wochenende zusammen wegfahren.\n\nSchreib eine Nachricht:',
    questions: [
      { de: 'Wann reisen wir?', en: 'When are we traveling?' },
      { de: 'Wohin reisen wir?', en: 'Where are we traveling to?' },
      { de: 'Wie reisen wir?', en: 'How are we traveling?' },
      { de: 'Was nimmst du mit?', en: 'What are you taking with you?' }
    ],
    vocabulary: [
      { de: 'die Reise', en: 'trip / journey' },
      { de: 'der Koffer', en: 'suitcase' },
      { de: 'der Zug', en: 'train' },
      { de: 'das Geld', en: 'money' },
      { de: 'mitnehmen', en: 'to take along' }
    ],
    usefulSentences: [
      { de: 'Wir reisen am Samstag.', en: 'We are traveling on Saturday.' },
      { de: 'Wir reisen nach Berlin.', en: 'We are traveling to Berlin.' },
      { de: 'Wir fahren mit dem Zug.', en: 'We are going by train.' },
      { de: 'Ich nehme meinen Koffer und Geld mit.', en: 'I am taking my suitcase and money with me.' },
      { de: 'Ich warte auf deine Antwort.', en: 'I am waiting for your reply.' }
    ],
    modelAnswer: {
      de: 'Lieber Max,\n\nwir machen eine Reise. Wir reisen am Samstag. Wir reisen nach Berlin. Wir fahren mit dem Zug. Ich nehme meinen Koffer und Geld mit.\n\nIch warte auf deine Antwort.\n\nLiebe Grüße\nMondher',
      en: 'Dear Max,\n\nWe are making a trip. We are traveling on Saturday. We are traveling to Berlin. We are going by train. I am taking my suitcase and money with me.\n\nI am waiting for your reply.\n\nBest wishes,\nMondher'
    }
  },
  {
    id: '6',
    title: 'Restaurant',
    icon: 'Utensils',
    situation: 'Du möchtest am Abend mit einer Kollegin essen gehen. Du schreibst ihr eine E-Mail.\n\nSchreib bitte:',
    questions: [
      { de: 'Wann treffen wir uns?', en: 'When do we meet?' },
      { de: 'Wo essen wir?', en: 'Where are we eating?' },
      { de: 'Was möchtest du essen?', en: 'What would you like to eat?' },
      { de: 'Was möchtest du trinken?', en: 'What would you like to drink?' }
    ],
    vocabulary: [
      { de: 'das Restaurant', en: 'restaurant' },
      { de: 'das Abendessen', en: 'dinner' },
      { de: 'essen', en: 'to eat' },
      { de: 'trinken', en: 'to drink' },
      { de: 'das Wasser', en: 'water' }
    ],
    usefulSentences: [
      { de: 'Wir treffen uns um 19 Uhr.', en: 'We meet at 7 PM.' },
      { de: 'Wir essen in der Pizzeria.', en: 'We are eating in the pizzeria.' },
      { de: 'Ich möchte Pizza essen.', en: 'I would like to eat pizza.' },
      { de: 'Ich möchte Wasser trinken.', en: 'I would like to drink water.' },
      { de: 'Ich warte auf deine Antwort.', en: 'I am waiting for your reply.' }
    ],
    modelAnswer: {
      de: 'Liebe Lisa,\n\nwir gehen ins Restaurant. Wir treffen uns um 19 Uhr. Wir essen in der Pizzeria. Ich möchte Pizza essen. Ich möchte Wasser trinken.\n\nIch warte auf deine Antwort.\n\nLiebe Grüße\nMondher',
      en: 'Dear Lisa,\n\nWe are going to the restaurant. We meet at 7 PM. We are eating in the pizzeria. I would like to eat pizza. I would like to drink water.\n\nI am waiting for your reply.\n\nBest wishes,\nMondher'
    }
  },
  {
    id: '7',
    title: 'Picknick',
    icon: 'Sun',
    situation: 'Das Wetter ist sehr schön. Du möchtest mit einem Freund ein Picknick machen.\n\nSchreib ihm eine Nachricht:',
    questions: [
      { de: 'Wann machen wir das Picknick?', en: 'When are we having the picnic?' },
      { de: 'Wo machen wir das Picknick?', en: 'Where are we having the picnic?' },
      { de: 'Was bringst du mit?', en: 'What are you bringing?' },
      { de: 'Was können wir machen?', en: 'What can we do?' }
    ],
    vocabulary: [
      { de: 'das Wetter', en: 'weather' },
      { de: 'schön', en: 'beautiful / nice' },
      { de: 'der Saft', en: 'juice' },
      { de: 'die Äpfel', en: 'apples' },
      { de: 'spielen', en: 'to play' }
    ],
    usefulSentences: [
      { de: 'Wir machen das am Sonntag.', en: 'We are doing that on Sunday.' },
      { de: 'Wir treffen uns im Park.', en: 'We meet in the park.' },
      { de: 'Ich bringe Äpfel und Saft mit.', en: 'I am bringing apples and juice.' },
      { de: 'Wir können Fußball spielen.', en: 'We can play football.' },
      { de: 'Ich warte auf deine Antwort.', en: 'I am waiting for your reply.' }
    ],
    modelAnswer: {
      de: 'Lieber Ali,\n\ndas Wetter ist schön. Wir machen ein Picknick. Wir machen das am Sonntag. Wir treffen uns im Park. Ich bringe Äpfel und Saft mit. Wir können Fußball spielen.\n\nIch warte auf deine Antwort.\n\nLiebe Grüße\nMondher',
      en: 'Dear Ali,\n\nThe weather is nice. We are having a picnic. We are doing that on Sunday. We meet in the park. I am bringing apples and juice. We can play football.\n\nI am waiting for your reply.\n\nBest wishes,\nMondher'
    }
  },
  {
    id: '8',
    title: 'Neue Wohnung',
    icon: 'Home',
    situation: 'Dein Freund zieht am Wochenende in eine neue Wohnung um. Er braucht Hilfe beim Tragen.\n\nSchreib ihm eine Antwort:',
    questions: [
      { de: 'Wann kannst du kommen?', en: 'When can you come?' },
      { de: 'Kannst du helfen?', en: 'Can you help?' },
      { de: 'Was bringst du mit?', en: 'What are you bringing?' },
      { de: 'Wie transportieren wir die Sachen?', en: 'How are we transporting the things?' }
    ],
    vocabulary: [
      { de: 'umziehen', en: 'to move (house)' },
      { de: 'die Wohnung', en: 'apartment' },
      { de: 'helfen', en: 'to help' },
      { de: 'transportieren', en: 'to transport' },
      { de: 'die Sachen', en: 'things / stuff' }
    ],
    usefulSentences: [
      { de: 'Ich komme am Samstag um 10 Uhr.', en: 'I am coming on Saturday at 10 o\'clock.' },
      { de: 'Ja, ich kann sehr gern helfen.', en: 'Yes, I can gladly help.' },
      { de: 'Ich bringe mein Auto mit.', en: 'I am bringing my car.' },
      { de: 'Wir transportieren die Sachen mit dem Auto.', en: 'We transport the things with the car.' },
      { de: 'Ich warte auf deine Antwort.', en: 'I am waiting for your reply.' }
    ],
    modelAnswer: {
      de: 'Lieber Ben,\n\nich helfe dir gern. Ich komme am Samstag um 10 Uhr. Ja, ich kann helfen. Ich bringe mein Auto mit. Wir transportieren die Sachen mit meinem Auto.\n\nIch warte auf deine Antwort.\n\nViele Grüße\nMondher',
      en: 'Dear Ben,\n\nI gladly help you. I am coming on Saturday at 10 o\'clock. Yes, I can help. I am bringing my car. We transport the things with my car.\n\nI am waiting for your reply.\n\nBest regards,\nMondher'
    }
  },
  {
    id: '9',
    title: 'Freizeit',
    icon: 'Gamepad2',
    situation: 'Deine Freundin fragt, was ihr am Wochenende machen wollt.\n\nSchreib ihr eine E-Mail:',
    questions: [
      { de: 'Wann hast du Zeit?', en: 'When do you have time?' },
      { de: 'Was möchtest du machen?', en: 'What would you like to do?' },
      { de: 'Wo treffen wir uns?', en: 'Where do we meet?' },
      { de: 'Wer kommt mit?', en: 'Who is coming along?' }
    ],
    vocabulary: [
      { de: 'die Freizeit', en: 'free time' },
      { de: 'das Wochenende', en: 'weekend' },
      { de: 'das Kino', en: 'cinema' },
      { de: 'möchten', en: 'would like to' },
      { de: 'Zeit haben', en: 'to have time' }
    ],
    usefulSentences: [
      { de: 'Ich habe am Samstag Zeit.', en: 'I have time on Saturday.' },
      { de: 'Wir können ins Kino gehen.', en: 'We can go to the cinema.' },
      { de: 'Wir treffen uns am Bahnhof.', en: 'We meet at the train station.' },
      { de: 'Mein Bruder kommt auch mit.', en: 'My brother is coming along too.' },
      { de: 'Ich warte auf deine Antwort.', en: 'I am waiting for your reply.' }
    ],
    modelAnswer: {
      de: 'Liebe Sara,\n\nich habe am Samstag Zeit. Wir können ins Kino gehen. Wir treffen uns am Bahnhof. Mein Bruder kommt auch mit.\n\nIch warte auf deine Antwort.\n\nLiebe Grüße\nMondher',
      en: 'Dear Sara,\n\nI have time on Saturday. We can go to the cinema. We meet at the train station. My brother is coming along too.\n\nI am waiting for your reply.\n\nBest wishes,\nMondher'
    }
  },
  {
    id: '10',
    title: 'Termin',
    icon: 'Calendar',
    situation: 'Du musst dich mit einer Kollegin treffen, um für den Deutschkurs zu lernen.\n\nSchreib ihr eine Nachricht:',
    questions: [
      { de: 'Wann hast du Zeit?', en: 'When do you have time?' },
      { de: 'Um wie viel Uhr?', en: 'At what time?' },
      { de: 'Wo treffen wir uns?', en: 'Where do we meet?' },
      { de: 'Wie kommen wir dorthin?', en: 'How do we get there?' }
    ],
    vocabulary: [
      { de: 'der Termin', en: 'appointment' },
      { de: 'lernen', en: 'to learn / study' },
      { de: 'der Bus', en: 'bus' },
      { de: 'fahren', en: 'to drive / go by' },
      { de: 'dorthin', en: 'there (direction)' }
    ],
    usefulSentences: [
      { de: 'Ich habe am Montag Zeit.', en: 'I have time on Monday.' },
      { de: 'Ich habe um 15 Uhr Zeit.', en: 'I have time at 3 PM.' },
      { de: 'Wir treffen uns am Bahnhof.', en: 'We meet at the train station.' },
      { de: 'Wir fahren mit dem Bus dorthin.', en: 'We go there by bus.' },
      { de: 'Ich warte auf deine Antwort.', en: 'I am waiting for your reply.' }
    ],
    modelAnswer: {
      de: 'Liebe Emma,\n\nich habe am Montag Zeit. Ich habe um 15 Uhr Zeit. Wir treffen uns am Bahnhof. Wir fahren mit dem Bus dorthin.\n\nIch warte auf deine Antwort.\n\nLiebe Grüße\nMondher',
      en: 'Dear Emma,\n\nI have time on Monday. I have time at 3 PM. We meet at the train station. We go there by bus.\n\nI am waiting for your reply.\n\nBest wishes,\nMondher'
    }
  },
  {
    id: '11',
    title: 'Deutschkurs',
    icon: 'GraduationCap',
    situation: 'Sie möchten an einer Sprachschule Deutsch lernen und schreiben eine E-Mail an die Schule.\n\nSchreiben Sie eine Nachricht:',
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
      { de: 'Wie teuer ist das?', en: 'How expensive is that?' },
      { de: 'Ich warte auf Ihre Antwort.', en: 'I am waiting for your reply.' }
    ],
    modelAnswer: {
      de: 'Sehr geehrte Damen und Herren,\n\nich möchte Deutsch lernen.\nWann beginnt der Deutschkurs?\nWie viel kostet der Kurs?\n\nWie kann ich mich anmelden?\n\nIch warte auf Ihre Antwort.\n\nVielen Dank.\n\nMit freundlichen Grüßen\nMondher',
      en: 'Dear Sir or Madam,\n\nI would like to learn German.\nWhen does the German course begin?\nHow much does the course cost?\n\nHow can I register?\n\nI am waiting for your reply.\n\nThank you very much.\n\nYours sincerely,\nMondher'
    }
  },
  {
    id: '12',
    title: 'Berlin-Reise (E-Mail)',
    icon: 'Mail',
    situation: '📋 Die Situation\n\nDeine Freundin Rafaela hat dich nach deinen Plänen für den Besuch in Berlin gefragt. Schreib ihr eine E-Mail.',
    questions: [
      { de: 'An welchem Tag und um wie viel Uhr kommst du?', en: 'On which day and at what time are you coming?' },
      { de: 'Wie lange möchtest du bleiben?', en: 'How long do you want to stay?' },
      { de: 'Wen bringst du mit?', en: 'Who are you bringing with you?' }
    ],
    vocabulary: [
      { de: 'ankommen', en: 'to arrive' },
      { de: 'bleiben', en: 'to stay' },
      { de: 'mitbringen', en: 'to bring along' },
      { de: 'der Tag', en: 'the day' },
      { de: 'die Uhrzeit / um ... Uhr', en: 'the time / at ... o\'clock' },
      { de: 'die Schwester', en: 'the sister' },
      { de: 'der Bruder', en: 'the brother' },
      { de: 'viele Grüße', en: 'best regards / many greetings' },
      { de: 'zwei Tage bleiben', en: 'to stay for two days' }
    ],
    usefulSentences: [
      { de: 'Ich komme am Samstag um 10:00 Uhr.', en: 'I am arriving on Saturday at 10:00.' },
      { de: 'Ich möchte zwei Tage bleiben.', en: 'I want to stay for two days.' },
      { de: 'Ich bringe meinen Bruder mit.', en: 'I am bringing my brother with me.' },
      { de: 'Ich warte auf deine Antwort.', en: 'I am waiting for your reply.' }
    ],
    modelAnswer: {
      de: 'Liebe Rafaela,\n\nIch komme am Samstag um 10:00 Uhr. Ich möchte zwei Tage bleiben. Ich bringe meinen Bruder mit.\n\nIch warte auf deine Antwort.\n\nViele Grüße\nMondher',
      en: 'Dear Rafaela,\n\nI am arriving on Saturday at 10:00. I want to stay for two days. I am bringing my brother with me.\n\nI am waiting for your reply.\n\nBest regards,\nMondher'
    }
  },
  {
    id: '13',
    title: 'Urlaubsformular (Hotel)',
    icon: 'ClipboardList',
    situation: '📖 Das ausgefüllte Formular:\n\n• Nachname: Torres (schon ausgefüllt)\n• Vorname: Ricardo\n• Geburtsdatum: 26.11.1979\n• Urlaubsland: Schweiz\n• Monat: September\n• Zimmer: ☑ Doppelzimmer (für zwei Personen)\n• Frühstück: ☑ Ja\n• Anreise mit: Zug (oder Bahn)\n• Sport: ☑ Wandern und ☑ Schwimmen\n• Bezahlung: ☑ Kreditkarte',
    questions: [
      { de: 'Warum bucht er ein Doppelzimmer?', en: 'Why does he book a double room?' },
      { de: 'Wie reist die Familie an?', en: 'How does the family travel?' },
      { de: 'Welche Sportarten möchten sie machen?', en: 'Which sports do they want to do?' }
    ],
    vocabulary: [
      { de: 'der Vorname', en: 'the first name' },
      { de: 'der Nachname', en: 'the last name / surname' },
      { de: 'das Geburtsdatum', en: 'the date of birth' },
      { de: 'das Urlaubsland', en: 'the vacation country' },
      { de: 'das Doppelzimmer', en: 'the double room (for 2 people)' },
      { de: 'das Einzelzimmer', en: 'the single room (for 1 person)' },
      { de: 'das Frühstück', en: 'the breakfast' },
      { de: 'die Anreise', en: 'the arrival / travel method' },
      { de: 'die Kreditkarte', en: 'the credit card' }
    ],
    usefulSentences: [
      { de: 'Er reist mit seiner Freundin. Das sind zwei Personen.', en: 'He travels with his girlfriend. That is two people.' },
      { de: 'Sie fahren mit dem Zug.', en: 'They travel by train.' },
      { de: 'Sie möchten wandern und schwimmen.', en: 'They want to hike and swim.' }
    ],
    modelAnswer: {
      de: '1. Warum bucht er ein Doppelzimmer?\n→ Er reist mit seiner Freundin. Das sind zwei Personen.\n\n2. Wie reist die Familie an?\n→ Sie fahren mit dem Zug.\n\n3. Welche Sportarten möchten sie machen?\n→ Sie möchten wandern und schwimmen.',
      en: '1. Why does he book a double room?\n→ He travels with his girlfriend. That is two people.\n\n2. How does the family travel?\n→ They travel by train.\n\n3. Which sports do they want to do?\n→ They want to hike and swim.'
    }
  },
  {
    id: '14',
    title: 'Krank — E-Mail an Frau Müller',
    icon: 'Mail',
    situation: '📋 Die Situation\n\nDu bist krank und kannst morgen nicht in den Deutschkurs kommen. Schreib eine E-Mail an deine Lehrerin, Frau Müller.',
    questions: [
      { de: 'Warum kannst du morgen nicht kommen?', en: 'Why can\'t you come tomorrow?' },
      { de: 'Was möchtest du von Frau Müller wissen?', en: 'What do you want to know from Frau Müller?' },
      { de: 'Wann kommst du wieder?', en: 'When are you coming back?' }
    ],
    vocabulary: [
      { de: 'krank sein', en: 'to be sick / ill' },
      { de: 'die Hausaufgaben', en: 'the homework' },
      { de: 'wieder kommen', en: 'to come back' },
      { de: 'die Lehrerin', en: 'the (female) teacher' },
      { de: 'der Deutschkurs', en: 'the German course' },
      { de: 'leider', en: 'unfortunately' },
      { de: 'Wie sind die Hausaufgaben?', en: 'What is the homework?' },
      { de: 'Mit freundlichen Grüßen', en: 'Yours sincerely / Kind regards' }
    ],
    usefulSentences: [
      { de: 'Ich kann morgen nicht in den Deutschkurs kommen.', en: 'I cannot come to the German course tomorrow.' },
      { de: 'Ich bin krank.', en: 'I am sick.' },
      { de: 'Wie sind die Hausaufgaben?', en: 'What is the homework?' },
      { de: 'Ich komme am Montag wieder.', en: 'I am coming back on Monday.' },
      { de: 'Ich warte auf Ihre Antwort.', en: 'I am waiting for your reply.' }
    ],
    modelAnswer: {
      de: 'Guten Tag Frau Müller,\n\nich kann morgen nicht in den Deutschkurs kommen. Ich bin krank. Wie sind die Hausaufgaben? Ich komme am Montag wieder.\n\nIch warte auf Ihre Antwort.\n\nMit freundlichen Grüßen\nMondher',
      en: 'Dear Mrs Müller,\n\nI cannot come to the German course tomorrow. I am sick. What is the homework? I am coming back on Monday.\n\nI am waiting for your reply.\n\nYours sincerely,\nMondher'
    }
  }
];
