import { SchreibenTheme } from '../types';

export const schreibenThemes: SchreibenTheme[] = [
  {
    id: '1',
    title: 'Kino',
    icon: 'Film',
    situation: '📩 Text\n\nHallo,\nich möchte am Wochenende ins Kino gehen. Hast du Zeit? Möchtest du mitkommen?\n\nWann hast du Zeit? Welchen Film möchtest du sehen? Wo treffen wir uns?\n\nLiebe Grüße\nAnna',
    questions: [
      { de: 'Wann hast du Zeit?', en: 'When do you have time?' },
      { de: 'Welchen Film möchtest du sehen?', en: 'Which film would you like to see?' },
      { de: 'Wo treffen wir uns?', en: 'Where do we meet?' }
    ],
    vocabulary: [
      { de: 'das Kino', en: 'cinema' },
      { de: 'der Film', en: 'film / movie' },
      { de: 'der Actionfilm', en: 'action film' },
      { de: 'treffen', en: 'to meet' },
      { de: 'mitkommen', en: 'to come along' }
    ],
    usefulSentences: [
      { de: 'Ich habe am Samstag oder Sonntag Zeit.', en: 'I have time on Saturday or Sunday.' },
      { de: 'Ich möchte einen Actionfilm oder einen Komödienfilm sehen.', en: 'I would like to see an action film or a comedy.' },
      { de: 'Wir treffen uns am Kino um 18 Uhr.', en: 'We meet at the cinema at 6 PM.' }
    ],
    modelAnswer: {
      de: 'Liebe Anna,\n\nja, ich komme sehr gern mit. Ich habe am Samstag oder Sonntag Zeit. Ich möchte einen Actionfilm oder einen Komödienfilm sehen. Wir treffen uns am Kino um 18 Uhr.\n\nLiebe Grüße\nMondher',
      en: 'Dear Anna,\n\nYes, I would really like to come. I have time on Saturday or Sunday. I would like to see an action film or a comedy. We meet at the cinema at 6 PM.\n\nBest wishes,\nMondher'
    }
  },
  {
    id: '2',
    title: 'Geburtstag',
    icon: 'Cake',
    situation: '📩 Text\n\nHallo,\nich habe am Samstag Geburtstag. Ich möchte eine kleine Party machen. Möchtest du kommen?\n\nWann kommst du? Was möchtest du essen? Wie kommst du zu mir?\n\nLiebe Grüße\nMichael',
    questions: [
      { de: 'Wann kommst du?', en: 'When are you coming?' },
      { de: 'Was möchtest du essen?', en: 'What would you like to eat?' },
      { de: 'Wie kommst du zu mir?', en: 'How are you getting to my place?' }
    ],
    vocabulary: [
      { de: 'der Geburtstag', en: 'birthday' },
      { de: 'die Party', en: 'party' },
      { de: 'die Pizza', en: 'pizza' },
      { de: 'der Bus', en: 'bus' },
      { de: 'kommen', en: 'to come' }
    ],
    usefulSentences: [
      { de: 'Ich komme am Samstag um 18 Uhr oder um 19 Uhr.', en: 'I am coming on Saturday at 6 or 7 PM.' },
      { de: 'Ich möchte Pizza oder Pasta essen.', en: 'I would like to eat pizza or pasta.' },
      { de: 'Ich komme mit dem Bus oder mit der U-Bahn.', en: 'I am coming by bus or by metro.' }
    ],
    modelAnswer: {
      de: 'Lieber Michael,\n\ndanke für die Einladung! Ich komme am Samstag um 18 Uhr oder um 19 Uhr. Ich möchte Pizza oder Pasta essen. Ich komme mit dem Bus oder mit der U-Bahn.\n\nLiebe Grüße\nMondher',
      en: 'Dear Michael,\n\nThank you for the invitation! I am coming on Saturday at 6 or 7 PM. I would like to eat pizza or pasta. I am coming by bus or by metro.\n\nBest wishes,\nMondher'
    }
  },
  {
    id: '3',
    title: 'Kaffee',
    icon: 'Coffee',
    situation: '📩 Text\n\nHallo,\nich möchte am Sonntag mit dir einen Kaffee trinken. Hast du Zeit?\n\nWann hast du Zeit? Wo möchtest du Kaffee trinken? Kommst du allein?\n\nLiebe Grüße\nSara',
    questions: [
      { de: 'Wann hast du Zeit?', en: 'When do you have time?' },
      { de: 'Wo möchtest du Kaffee trinken?', en: 'Where would you like to drink coffee?' },
      { de: 'Kommst du allein?', en: 'Are you coming alone?' }
    ],
    vocabulary: [
      { de: 'der Kaffee', en: 'coffee' },
      { de: 'das Café', en: 'café' },
      { de: 'allein', en: 'alone' },
      { de: 'der Bruder', en: 'brother' },
      { de: 'trinken', en: 'to drink' }
    ],
    usefulSentences: [
      { de: 'Ich habe am Sonntag oder am Montag Zeit.', en: 'I have time on Sunday or Monday.' },
      { de: 'Ich möchte im Café am Bahnhof Kaffee trinken.', en: 'I would like to drink coffee at the café at the station.' },
      { de: 'Nein, mein Bruder oder meine Schwester kommt auch.', en: 'No, my brother or sister is coming too.' }
    ],
    modelAnswer: {
      de: 'Liebe Sara,\n\nja, sehr gern! Ich habe am Sonntag oder am Montag Zeit. Ich möchte im Café am Bahnhof Kaffee trinken. Nein, ich komme nicht allein — mein Bruder kommt auch.\n\nLiebe Grüße\nMondher',
      en: 'Dear Sara,\n\nYes, with pleasure! I have time on Sunday or Monday. I would like to drink coffee at the café at the station. No, I am not coming alone — my brother is coming too.\n\nBest wishes,\nMondher'
    }
  },
  {
    id: '4',
    title: 'Sport',
    icon: 'Dumbbell',
    situation: '📩 Text\n\nHallo,\nich möchte am Samstag Sport machen. Möchtest du mitkommen?\n\nWelchen Sport möchtest du machen? Wann hast du Zeit? Wo treffen wir uns?\n\nLiebe Grüße\nTom',
    questions: [
      { de: 'Welchen Sport möchtest du machen?', en: 'Which sport would you like to do?' },
      { de: 'Wann hast du Zeit?', en: 'When do you have time?' },
      { de: 'Wo treffen wir uns?', en: 'Where do we meet?' }
    ],
    vocabulary: [
      { de: 'der Sport', en: 'sport' },
      { de: 'Fußball spielen', en: 'to play football' },
      { de: 'der Park', en: 'park' },
      { de: 'Nachmittag', en: 'afternoon' },
      { de: 'mitkommen', en: 'to come along' }
    ],
    usefulSentences: [
      { de: 'Ich möchte Fußball oder Tennis spielen.', en: 'I would like to play football or tennis.' },
      { de: 'Ich habe am Samstagnachmittag oder am Sonntagmorgen Zeit.', en: 'I have time on Saturday afternoon or Sunday morning.' },
      { de: 'Wir treffen uns im Park oder am Sportplatz.', en: 'We meet in the park or at the sports field.' }
    ],
    modelAnswer: {
      de: 'Lieber Tom,\n\nja, ich komme gern mit! Ich möchte Fußball oder Tennis spielen. Ich habe am Samstagnachmittag oder am Sonntagmorgen Zeit. Wir treffen uns im Park oder am Sportplatz.\n\nLiebe Grüße\nMondher',
      en: 'Dear Tom,\n\nYes, I would love to come! I would like to play football or tennis. I have time on Saturday afternoon or Sunday morning. We meet in the park or at the sports field.\n\nBest wishes,\nMondher'
    }
  },
  {
    id: '5',
    title: 'Picknick',
    icon: 'Sun',
    situation: '📩 Text\n\nHallo,\ndas Wetter ist schön. Ich möchte ein Picknick machen. Kommst du mit?\n\nWann hast du Zeit? Was bringst du mit? Wo machen wir das Picknick?\n\nLiebe Grüße\nLena',
    questions: [
      { de: 'Wann hast du Zeit?', en: 'When do you have time?' },
      { de: 'Was bringst du mit?', en: 'What are you bringing?' },
      { de: 'Wo machen wir das Picknick?', en: 'Where are we having the picnic?' }
    ],
    vocabulary: [
      { de: 'das Picknick', en: 'picnic' },
      { de: 'das Wetter', en: 'weather' },
      { de: 'schön', en: 'beautiful / nice' },
      { de: 'der Saft', en: 'juice' },
      { de: 'das Brot', en: 'bread' }
    ],
    usefulSentences: [
      { de: 'Ich habe am Sonntag oder am Samstag Zeit.', en: 'I have time on Sunday or Saturday.' },
      { de: 'Ich bringe Brot, Obst und Saft mit.', en: 'I am bringing bread, fruit and juice.' },
      { de: 'Wir machen das Picknick im Park oder im Wald.', en: 'We are having the picnic in the park or in the forest.' }
    ],
    modelAnswer: {
      de: 'Liebe Lena,\n\nja, das ist eine gute Idee! Ich habe am Sonntag oder am Samstag Zeit. Ich bringe Brot, Obst und Saft mit. Wir machen das Picknick im Park oder im Wald.\n\nLiebe Grüße\nMondher',
      en: 'Dear Lena,\n\nYes, that is a good idea! I have time on Sunday or Saturday. I am bringing bread, fruit and juice. We are having the picnic in the park or in the forest.\n\nBest wishes,\nMondher'
    }
  },
  {
    id: '6',
    title: 'Neue Wohnung',
    icon: 'Home',
    situation: '📩 Text\n\nHallo,\nich habe eine neue Wohnung. Ich möchte eine kleine Party machen. Möchtest du kommen?\n\nWann kommst du? Was möchtest du essen? Wie kommst du zu mir?\n\nLiebe Grüße\nKlaus',
    questions: [
      { de: 'Wann kommst du?', en: 'When are you coming?' },
      { de: 'Was möchtest du essen?', en: 'What would you like to eat?' },
      { de: 'Wie kommst du zu mir?', en: 'How are you getting to my place?' }
    ],
    vocabulary: [
      { de: 'die Wohnung', en: 'apartment' },
      { de: 'der Kuchen', en: 'cake' },
      { de: 'das Auto', en: 'car' },
      { de: 'gern', en: 'gladly / with pleasure' },
      { de: 'kommen', en: 'to come' }
    ],
    usefulSentences: [
      { de: 'Ich komme am Samstag um 18 Uhr oder um 19 Uhr.', en: 'I am coming on Saturday at 6 or 7 PM.' },
      { de: 'Ich möchte Kuchen oder Salat essen.', en: 'I would like to eat cake or salad.' },
      { de: 'Ich komme mit dem Auto oder mit dem Bus.', en: 'I am coming by car or by bus.' }
    ],
    modelAnswer: {
      de: 'Lieber Klaus,\n\ndas ist wunderbar! Ich komme sehr gern. Ich komme am Samstag um 18 Uhr oder um 19 Uhr. Ich möchte Kuchen oder Salat essen. Ich komme mit dem Auto oder mit dem Bus.\n\nLiebe Grüße\nMondher',
      en: 'Dear Klaus,\n\nThat is wonderful! I would love to come. I am coming on Saturday at 6 or 7 PM. I would like to eat cake or salad. I am coming by car or by bus.\n\nBest wishes,\nMondher'
    }
  },
  {
    id: '7',
    title: 'Reise',
    icon: 'Plane',
    situation: '📩 Text\n\nHallo,\nwir machen im Sommer eine Reise. Möchtest du mitkommen?\n\nWohin reisen wir? Wie reisen wir? Was nimmst du mit?\n\nLiebe Grüße\nPeter',
    questions: [
      { de: 'Wohin reisen wir?', en: 'Where are we traveling to?' },
      { de: 'Wie reisen wir?', en: 'How are we traveling?' },
      { de: 'Was nimmst du mit?', en: 'What are you taking with you?' }
    ],
    vocabulary: [
      { de: 'die Reise', en: 'trip / journey' },
      { de: 'Wien', en: 'Vienna' },
      { de: 'der Zug', en: 'train' },
      { de: 'der Koffer', en: 'suitcase' },
      { de: 'mitnehmen', en: 'to take along' }
    ],
    usefulSentences: [
      { de: 'Wir reisen nach Wien oder nach München.', en: 'We are traveling to Vienna or Munich.' },
      { de: 'Wir fahren mit dem Zug oder mit dem Bus.', en: 'We are going by train or by bus.' },
      { de: 'Ich nehme einen Koffer und meine Jacke mit.', en: 'I am taking a suitcase and my jacket with me.' }
    ],
    modelAnswer: {
      de: 'Lieber Peter,\n\nja, ich komme sehr gern mit! Wir reisen nach Wien oder nach München. Wir fahren mit dem Zug oder mit dem Bus. Ich nehme einen Koffer und meine Jacke mit.\n\nLiebe Grüße\nMondher',
      en: 'Dear Peter,\n\nYes, I would love to come! We are traveling to Vienna or Munich. We are going by train or by bus. I am taking a suitcase and my jacket with me.\n\nBest wishes,\nMondher'
    }
  },
  {
    id: '8',
    title: 'Einkaufen',
    icon: 'ShoppingCart',
    situation: '📩 Text\n\nHallo,\nwir gehen am Samstag einkaufen. Möchtest du mitkommen?\n\nWas kaufen wir? Wo treffen wir uns? Wie kommen wir dahin?\n\nLiebe Grüße\nMaria',
    questions: [
      { de: 'Was kaufen wir?', en: 'What are we buying?' },
      { de: 'Wo treffen wir uns?', en: 'Where do we meet?' },
      { de: 'Wie kommen wir dahin?', en: 'How do we get there?' }
    ],
    vocabulary: [
      { de: 'einkaufen', en: 'to shop' },
      { de: 'der Supermarkt', en: 'supermarket' },
      { de: 'das Obst', en: 'fruit' },
      { de: 'die Straßenbahn', en: 'tram' },
      { de: 'dahin', en: 'there' }
    ],
    usefulSentences: [
      { de: 'Wir kaufen Obst, Gemüse und Brot.', en: 'We are buying fruit, vegetables and bread.' },
      { de: 'Wir treffen uns vor dem Supermarkt oder am Bahnhof.', en: 'We meet in front of the supermarket or at the station.' },
      { de: 'Wir fahren mit der Straßenbahn oder mit dem Bus.', en: 'We are going by tram or by bus.' }
    ],
    modelAnswer: {
      de: 'Liebe Maria,\n\nja, ich komme gern mit! Wir kaufen Obst, Gemüse und Brot. Wir treffen uns vor dem Supermarkt oder am Bahnhof. Wir fahren mit der Straßenbahn oder mit dem Bus.\n\nLiebe Grüße\nMondher',
      en: 'Dear Maria,\n\nYes, I would love to come! We are buying fruit, vegetables and bread. We meet in front of the supermarket or at the station. We are going by tram or by bus.\n\nBest wishes,\nMondher'
    }
  },
  {
    id: '9',
    title: 'Restaurant',
    icon: 'Utensils',
    situation: '📩 Text\n\nHallo,\nwir gehen am Freitag ins Restaurant. Möchtest du mitkommen?\n\nWelches Restaurant? Um wie viel Uhr? Was möchtest du essen?\n\nLiebe Grüße\nJulia',
    questions: [
      { de: 'Welches Restaurant?', en: 'Which restaurant?' },
      { de: 'Um wie viel Uhr?', en: 'At what time?' },
      { de: 'Was möchtest du essen?', en: 'What would you like to eat?' }
    ],
    vocabulary: [
      { de: 'das Restaurant', en: 'restaurant' },
      { de: 'die Pizzeria', en: 'pizzeria' },
      { de: 'um 20 Uhr', en: 'at 8 PM' },
      { de: 'die Pizza', en: 'pizza' },
      { de: 'essen', en: 'to eat' }
    ],
    usefulSentences: [
      { de: 'Wir gehen in die Pizzeria oder in das chinesische Restaurant.', en: 'We are going to the pizzeria or the Chinese restaurant.' },
      { de: 'Wir treffen uns um 19 Uhr oder um 20 Uhr.', en: 'We meet at 7 or 8 PM.' },
      { de: 'Ich möchte Pizza oder Pasta essen.', en: 'I would like to eat pizza or pasta.' }
    ],
    modelAnswer: {
      de: 'Liebe Julia,\n\nja, gern! Wir gehen in die Pizzeria oder in das chinesische Restaurant. Wir treffen uns um 19 Uhr oder um 20 Uhr. Ich möchte Pizza oder Pasta essen.\n\nLiebe Grüße\nMondher',
      en: 'Dear Julia,\n\nYes, with pleasure! We are going to the pizzeria or the Chinese restaurant. We meet at 7 or 8 PM. I would like to eat pizza or pasta.\n\nBest wishes,\nMondher'
    }
  },
  {
    id: '10',
    title: 'Ausflug',
    icon: 'TreePine',
    situation: '📩 Text\n\nHallo,\nwir machen am Sonntag einen Ausflug. Möchtest du mitkommen?\n\nWohin fahren wir? Wie fahren wir? Was machen wir dort?\n\nLiebe Grüße\nKarl',
    questions: [
      { de: 'Wohin fahren wir?', en: 'Where are we going?' },
      { de: 'Wie fahren wir?', en: 'How are we getting there?' },
      { de: 'Was machen wir dort?', en: 'What are we doing there?' }
    ],
    vocabulary: [
      { de: 'der Ausflug', en: 'excursion / trip' },
      { de: 'der Wald', en: 'forest' },
      { de: 'das Auto', en: 'car' },
      { de: 'spazieren gehen', en: 'to go for a walk' },
      { de: 'das Picknick', en: 'picnic' }
    ],
    usefulSentences: [
      { de: 'Wir fahren in den Wald oder in den Park.', en: 'We are going to the forest or to the park.' },
      { de: 'Wir fahren mit dem Auto oder mit dem Zug.', en: 'We are going by car or by train.' },
      { de: 'Wir gehen spazieren und machen ein Picknick.', en: 'We go for a walk and have a picnic.' }
    ],
    modelAnswer: {
      de: 'Lieber Karl,\n\nja, ich komme sehr gern mit! Wir fahren in den Wald oder in den Park. Wir fahren mit dem Auto oder mit dem Zug. Wir gehen spazieren und machen ein Picknick.\n\nLiebe Grüße\nMondher',
      en: 'Dear Karl,\n\nYes, I would really like to come! We are going to the forest or to the park. We are going by car or by train. We go for a walk and have a picnic.\n\nBest wishes,\nMondher'
    }
  },
  {
    id: '11',
    title: 'Lernen',
    icon: 'BookOpen',
    situation: '📩 Text\n\nHallo,\nwir haben morgen eine Prüfung. Möchtest du mit mir lernen?\n\nWann hast du Zeit? Wo lernen wir? Was lernst du?\n\nLiebe Grüße\nAnna',
    questions: [
      { de: 'Wann hast du Zeit?', en: 'When do you have time?' },
      { de: 'Wo lernen wir?', en: 'Where do we study?' },
      { de: 'Was lernst du?', en: 'What are you studying?' }
    ],
    vocabulary: [
      { de: 'die Prüfung', en: 'exam / test' },
      { de: 'lernen', en: 'to study / learn' },
      { de: 'die Bibliothek', en: 'library' },
      { de: 'Deutsch', en: 'German' },
      { de: 'heute Abend', en: 'this evening' }
    ],
    usefulSentences: [
      { de: 'Ich habe heute Abend oder morgen früh Zeit.', en: 'I have time this evening or tomorrow morning.' },
      { de: 'Wir lernen in der Bibliothek oder bei mir zu Hause.', en: 'We study in the library or at my home.' },
      { de: 'Ich lerne Deutsch und Grammatik.', en: 'I am studying German and grammar.' }
    ],
    modelAnswer: {
      de: 'Liebe Anna,\n\nja, gern! Ich habe heute Abend oder morgen früh Zeit. Wir lernen in der Bibliothek oder bei mir zu Hause. Ich lerne Deutsch und Grammatik.\n\nLiebe Grüße\nMondher',
      en: 'Dear Anna,\n\nYes, with pleasure! I have time this evening or tomorrow morning. We study in the library or at my home. I am studying German and grammar.\n\nBest wishes,\nMondher'
    }
  },
  {
    id: '12',
    title: 'Krank — Deutschkurs',
    icon: 'GraduationCap',
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
      { de: 'leider', en: 'unfortunately' }
    ],
    usefulSentences: [
      { de: 'Ich kann morgen leider nicht in den Deutschkurs kommen.', en: 'Unfortunately, I cannot come to the German course tomorrow.' },
      { de: 'Ich bin krank und ich habe Fieber.', en: 'I am sick and I have a fever.' },
      { de: 'Wie sind die Hausaufgaben für morgen?', en: 'What is the homework for tomorrow?' },
      { de: 'Ich komme am Montag oder am Dienstag wieder.', en: 'I am coming back on Monday or Tuesday.' }
    ],
    modelAnswer: {
      de: 'Guten Tag Frau Müller,\n\nich kann morgen leider nicht in den Deutschkurs kommen. Ich bin krank und ich habe Fieber. Wie sind die Hausaufgaben für morgen? Ich komme am Montag oder am Dienstag wieder.\n\nMit freundlichen Grüßen\nMondher',
      en: 'Dear Mrs Müller,\n\nUnfortunately, I cannot come to the German course tomorrow. I am sick and I have a fever. What is the homework for tomorrow? I am coming back on Monday or Tuesday.\n\nYours sincerely,\nMondher'
    }
  },
  {
    id: '13',
    title: 'Berlin-Reise',
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
      { de: 'zwei Tage bleiben', en: 'to stay for two days' }
    ],
    usefulSentences: [
      { de: 'Ich komme am Samstag um 10:00 Uhr oder um 11:00 Uhr.', en: 'I am arriving on Saturday at 10:00 or 11:00.' },
      { de: 'Ich möchte zwei Tage oder drei Tage bleiben.', en: 'I want to stay for two or three days.' },
      { de: 'Ich bringe meinen Bruder oder meine Schwester mit.', en: 'I am bringing my brother or sister with me.' }
    ],
    modelAnswer: {
      de: 'Liebe Rafaela,\n\ndanke für deine Nachricht! Ich komme am Samstag um 10:00 Uhr oder um 11:00 Uhr. Ich möchte zwei Tage oder drei Tage bleiben. Ich bringe meinen Bruder oder meine Schwester mit.\n\nViele Grüße\nMondher',
      en: 'Dear Rafaela,\n\nThank you for your message! I am arriving on Saturday at 10:00 or 11:00. I want to stay for two or three days. I am bringing my brother or sister with me.\n\nBest regards,\nMondher'
    }
  },
  {
    id: '14',
    title: 'Hotel',
    icon: 'Hotel',
    situation: '📋 Das ausgefüllte Formular:\n\n• Nachname: Torres (schon ausgefüllt)\n• Vorname: Ricardo\n• Geburtsdatum: 26.11.1979\n• Urlaubsland: Schweiz\n• Monat: September\n• Zimmer: ☑ Doppelzimmer (für zwei Personen)\n• Frühstück: ☑ Ja\n• Anreise mit: Zug (oder Bahn)\n• Sport: ☑ Wandern und ☑ Schwimmen\n• Bezahlung: ☑ Kreditkarte',
    questions: [
      { de: 'Warum bucht er ein Doppelzimmer?', en: 'Why does he book a double room?' },
      { de: 'Wie reist die Familie an?', en: 'How does the family travel?' },
      { de: 'Welche Sportarten möchten sie machen?', en: 'Which sports do they want to do?' }
    ],
    vocabulary: [
      { de: 'das Doppelzimmer', en: 'double room (for 2 people)' },
      { de: 'das Frühstück', en: 'breakfast' },
      { de: 'die Anreise', en: 'arrival / travel method' },
      { de: 'die Kreditkarte', en: 'credit card' },
      { de: 'wandern', en: 'to hike' }
    ],
    usefulSentences: [
      { de: 'Er reist mit seiner Freundin. Das sind zwei Personen, also ein Doppelzimmer.', en: 'He travels with his girlfriend. That is two people, so a double room.' },
      { de: 'Sie fahren mit dem Zug oder mit der Bahn.', en: 'They travel by train or by rail.' },
      { de: 'Sie möchten wandern und schwimmen.', en: 'They want to hike and swim.' }
    ],
    modelAnswer: {
      de: '1. Warum bucht er ein Doppelzimmer?\n→ Er reist mit seiner Freundin. Das sind zwei Personen, also ein Doppelzimmer.\n\n2. Wie reist die Familie an?\n→ Sie fahren mit dem Zug oder mit der Bahn.\n\n3. Welche Sportarten möchten sie machen?\n→ Sie möchten wandern und schwimmen.',
      en: '1. Why does he book a double room?\n→ He travels with his girlfriend. That is two people, so a double room.\n\n2. How does the family travel?\n→ They travel by train or by rail.\n\n3. Which sports do they want to do?\n→ They want to hike and swim.'
    }
  }
];
