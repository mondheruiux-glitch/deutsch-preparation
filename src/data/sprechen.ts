import { Topic } from '../types';

export interface TopicPair {
  de: string;
  en: string;
  isAnswer?: boolean;
}

export interface TopicDefinition {
  id: string;
  title: string;
  icon: string;
  image: string;
  bildbeschreibung: TopicPair[];
  situation: TopicPair[];
  vocabulary: TopicPair[];
}

export const sprechenTopics: Topic[] = [
  {
    id: '0',
    title: 'Wortschatz Themen — ÖSD A1 Sprechen',
    icon: 'Crown',
    image: '/images/schreiben/topic0_wortschatz.jpg',
    bildbeschreibung: [
      { de: "19 Wortschatz-Themen für die A1-Prüfung: Menschen, Zuhause, Einkaufen, Obst & Gemüse, Kleidung, Reisen, Verkehrsmittel, Stadt, Schule, Arbeit, Arzt und Farben.", en: "19 vocabulary topics for the A1 exam: People, Home, Shopping, Fruit & Veg, Clothes, Travel, Transport, City, School, Work, Doctor and Colors." },
      { de: "Wichtige Satzmuster für die Bildbeschreibung: Auf dem Bild sehe ich ..., Links / Rechts steht ..., Im Hintergrund sehe ich ...", en: "Important sentence patterns for picture description: In the picture I see ..., Left / Right stands ..., In the background I see ..." },
      { de: "Vermutungen formulieren: Ich glaube, dass ..., Vielleicht ..., Ich denke, dass ...", en: "Formulating hypotheses: I believe that ..., Maybe ..., I think that ..." }
    ],
    situation: [
      { de: "Welche Wörter sind am wichtigsten für die Bildbeschreibung?", en: "Which words are most important for picture description?" },
      { de: "→ Personen, Positionen (links, rechts, im Hintergrund) und Aktionen (sitzen, stehen, arbeiten).", en: "→ People, positions (left, right, in the background) and actions (sitting, standing, working).", isAnswer: true }
    ],
    vocabulary: [
      { de: "der Mann / die Frau / das Kind", en: "man / woman / child" },
      { de: "das Haus / die Wohnung", en: "house / apartment" },
      { de: "der Supermarkt / das Geschäft", en: "supermarket / shop" },
      { de: "links / rechts / in der Mitte", en: "left / right / in the middle" },
      { de: "stehen / sitzen / arbeiten", en: "to stand / sit / work" }
    ]
  },

  {
    id: '13',
    title: 'Sich vorstellen — About yourself',
    icon: 'User',
    image: '/images/schreiben/topic13_sich_vorstellen.png',
    bildbeschreibung: [
      { de: "1. Begrüßung: Guten Tag. Ich möchte mich vorstellen.", en: "Greeting: Good day. I would like to introduce myself." },
      { de: "2. Name: Ich heiße Mondher. (Oder: Mein Name ist Ahmed.)", en: "Name: My name is Mondher. (Or: My name is Ahmed.)" },
      { de: "3. Alter: Ich bin 30 Jahre alt.", en: "Age: I am 30 years old." },
      { de: "4. Herkunft: Ich komme aus Tunesien. (Oder: aus Deutschland, Bosnien, Italien.)", en: "Origin: I come from Tunisia. (Or: from Germany, Bosnia, Italy.)" },
      { de: "5. Wohnort: Ich wohne in Tunis. (Oder: Ich lebe in Berlin / Hannover.)", en: "Residence: I live in Tunis. (Or: I live in Berlin / Hannover.)" },
      { de: "6. Familie: Ich bin verheiratet. Ich habe zwei Kinder und einen Bruder.", en: "Family: I am married. I have two children and a brother." },
      { de: "7. Beruf: Ich arbeite als Designer. (Oder: Ich bin Student / Lehrer / Krankenpfleger.)", en: "Profession: I work as a designer. (Or: I am a student / teacher / nurse.)" },
      { de: "8. Sprachen: Ich spreche Arabisch, Englisch und ein bisschen Deutsch.", en: "Languages: I speak Arabic, English, and a little German." },
      { de: "9. Hobbys: In meiner Freizeit höre ich gern Musik, spiele Fußball und treffe meine Freunde.", en: "Hobbies: In my free time I like listening to music, playing soccer, and meeting friends." },
      { de: "10. Wohnsituation: Ich wohne in einer Wohnung / in einem Haus. Meine Wohnung ist klein, aber schön.", en: "Living situation: I live in an apartment / in a house. My apartment is small but nice." },
      { de: "11. Deutsch lernen: Ich lerne Deutsch, weil ich in Deutschland leben und arbeiten möchte.", en: "Learning German: I am learning German because I would like to live and work in Germany." },
      { de: "12. Ende: Vielen Dank!", en: "Ending: Thank you very much!" }
    ],
    situation: [
      { de: "Wie heißen Sie?", en: "What is your name?" },
      { de: "→ Ich heiße Ahmed. / Mein Name ist Ahmed.", en: "→ My name is Ahmed.", isAnswer: true },
      { de: "Wie alt sind Sie?", en: "How old are you?" },
      { de: "→ Ich bin 30 Jahre alt.", en: "→ I am 30 years old.", isAnswer: true },
      { de: "Woher kommen Sie?", en: "Where do you come from?" },
      { de: "→ Ich komme aus Tunesien.", en: "→ I come from Tunisia.", isAnswer: true },
      { de: "Wo wohnen Sie?", en: "Where do you live?" },
      { de: "→ Ich wohne in Tunis. / Ich wohne in einer Wohnung.", en: "→ I live in Tunis. / I live in an apartment.", isAnswer: true },
      { de: "Sind Sie verheiratet? Haben Sie Kinder?", en: "Are you married? Do you have children?" },
      { de: "→ Ja, ich bin verheiratet und ich habe zwei Kinder.", en: "→ Yes, I am married and I have two children.", isAnswer: true },
      { de: "Was sind Sie von Beruf? / Was machen Sie beruflich?", en: "What is your profession? / What do you do for a living?" },
      { de: "→ Ich bin Designer. / Ich arbeite als Designer.", en: "→ I am a designer. / I work as a designer.", isAnswer: true },
      { de: "Welche Sprachen sprechen Sie?", en: "Which languages do you speak?" },
      { de: "→ Ich spreche Arabisch, Englisch und ein bisschen Deutsch.", en: "→ I speak Arabic, English, and a little German.", isAnswer: true },
      { de: "Was machen Sie gern in Ihrer Freizeit?", en: "What do you like to do in your free time?" },
      { de: "→ In meiner Freizeit höre ich gern Musik und treffe meine Freunde.", en: "→ In my free time I like listening to music and meeting my friends.", isAnswer: true },
      { de: "Warum lernen Sie Deutsch?", en: "Why are you learning German?" },
      { de: "→ Ich lerne Deutsch, weil ich in Deutschland arbeiten und leben möchte.", en: "→ I am learning German because I would like to work and live in Germany.", isAnswer: true }
    ],
    vocabulary: [
      { de: "heißen", en: "to be called / named" },
      { de: "das Alter", en: "the age" },
      { de: "die Herkunft", en: "the origin / background" },
      { de: "der Wohnort", en: "the place of residence" },
      { de: "die Familie", en: "the family" },
      { de: "verheiratet", en: "married" },
      { de: "das Kind (Plural: die Kinder)", en: "the child (children)" },
      { de: "der Beruf", en: "the job / profession" },
      { de: "arbeiten als", en: "to work as" },
      { de: "die Sprache (Plural: die Sprachen)", en: "the language (languages)" },
      { de: "das Hobby (Plural: die Hobbys)", en: "the hobby (hobbies)" },
      { de: "die Freizeit", en: "the free time / leisure" },
      { de: "die Wohnung / das Haus", en: "the apartment / the house" },
      { de: "Deutsch lernen", en: "to learn German" }
    ]
  },
  {
    id: '14',
    title: 'Die Buchhandlung — The Bookstore',
    icon: 'BookOpen',
    image: '/images/schreiben/topic14_buchhandlung.png',
    bildbeschreibung: [
      { de: "Auf dem Bild sehe ich einen Mann und eine Frau.", en: "In the picture I see a man and a woman." },
      { de: "Sie sind in einem Buchladen.", en: "They are in a bookstore." },
      { de: "Im Hintergrund sind viele Bücher.", en: "In the background there are many books." },
      { de: "Der Mann trägt ein blaues Hemd.", en: "The man is wearing a blue shirt." },
      { de: "Die Frau trägt eine gelbe Bluse.", en: "The woman is wearing a yellow blouse." },
      { de: "Der Mann hat ein Buch.", en: "The man has a book." },
      { de: "Die Frau hilft dem Mann.", en: "The woman is helping the man." },
      { de: "Die Frau arbeitet hier. Sie ist Verkäuferin.", en: "The woman works here. She is a saleswoman." },
      { de: "Der Mann lacht. Die Frau lacht auch.", en: "The man is laughing. The woman is laughing too." },
      { de: "Sie sind glücklich.", en: "They are happy." }
    ],
    situation: [
      {
            "de": "Was sehen Sie?",
            "en": "What do you see?"
      },
      {
            "de": "→ Auf dem Bild sehe ich zwei Personen: einen Mann und eine Frau.",
            "en": "→ In the picture I see two people: a man and a woman.",
            "isAnswer": true
      },
      {
            "de": "Wo sind diese Personen?",
            "en": "Where are these people?"
      },
      {
            "de": "→ Sie sind in einer Buchhandlung.",
            "en": "→ They are in a bookstore.",
            "isAnswer": true
      },
      {
            "de": "Was machen diese Personen?",
            "en": "What are these people doing?"
      },
      {
            "de": "→ Sie sprechen und lachen. Der Mann kauft ein Buch.",
            "en": "→ They are talking and laughing. The man is buying a book.",
            "isAnswer": true
      }
],
    vocabulary: [
      { de: "die Buchhandlung", en: "the bookstore" },
      { de: "die Bibliothek", en: "the library" },
      { de: "das Buch (Plural: die Bücher)", en: "the book (books)" },
      { de: "das Regal", en: "the shelf" },
      { de: "die Kasse", en: "the checkout / cash register" },
      { de: "die Verkäuferin", en: "the saleswoman" },
      { de: "der Kunde", en: "the customer (male)" },
      { de: "bezahlen", en: "to pay" },
      { de: "lachen", en: "to laugh" },
      { de: "kaufen", en: "to buy" }
    ]
  },
  {
    id: '15',
    title: 'Das Schuhgeschäft — The Shoe Store',
    icon: 'ShoppingBag',
    image: '/images/schreiben/topic15_schuhgeschaeft.png',
    bildbeschreibung: [
      { de: "Auf dem Bild sehe ich einen Kunden und eine Verkäuferin.", en: "In the picture I see a customer and a saleswoman." },
      { de: "Der Mann ist der Kunde.", en: "The man is the customer." },
      { de: "Die Frau ist die Verkäuferin.", en: "The woman is the saleswoman." },
      { de: "Sie sind in einem Schuhgeschäft.", en: "They are in a shoe store." },
      { de: "Der Mann sitzt auf einem roten Stuhl.", en: "The man is sitting on a red chair." },
      { de: "Die Frau steht.", en: "The woman is standing." },
      { de: "Sie hat einen Schuh in der Hand.", en: "She has a shoe in her hand." },
      { de: "Ich sehe viele Schuhe auf dem Boden.", en: "I see many shoes on the floor." },
      { de: "Die Kleidung von dem Mann ist schwarz.", en: "The man's clothes are black." },
      { de: "Die Kleidung von der Frau ist auch schwarz.", en: "The woman's clothes are also black." },
      { de: "Sie sprechen zusammen.", en: "They are talking together." },
      { de: "Sie sind freundlich.", en: "They are friendly." },
      { de: "Ich glaube, der Mann möchte Schuhe kaufen.", en: "I think the man would like to buy shoes." }
    ],
    situation: [
      {
            "de": "Was sehen Sie?",
            "en": "What do you see?"
      },
      {
            "de": "→ Auf dem Bild sehe ich einen Mann und eine Frau.",
            "en": "→ In the picture I see a man and a woman.",
            "isAnswer": true
      },
      {
            "de": "Wo sind diese Personen?",
            "en": "Where are these people?"
      },
      {
            "de": "→ Sie sind in einem Schuhgeschäft.",
            "en": "→ They are in a shoe store.",
            "isAnswer": true
      },
      {
            "de": "Was machen diese Personen?",
            "en": "What are these people doing?"
      },
      {
            "de": "→ Der Mann probiert Schuhe an. Die Frau hilft ihm.",
            "en": "→ The man is trying on shoes. The woman is helping him.",
            "isAnswer": true
      }
],
    vocabulary: [
      { de: "das Schuhgeschäft", en: "the shoe store" },
      { de: "der Schuh (Plural: die Schuhe)", en: "the shoe (shoes)" },
      { de: "der Stuhl / der Sessel", en: "the chair / armchair" },
      { de: "die Verkäuferin", en: "the saleswoman" },
      { de: "der Karton / die Box", en: "the box / cardboard box" },
      { de: "anprobieren", en: "to try on (clothes/shoes)" },
      { de: "sitzen", en: "to sit" },
      { de: "helfen", en: "to help" },
      { de: "zeigen", en: "to show" },
      { de: "die Mütze", en: "the cap / beanie" }
    ]
  },
  {
    id: '16',
    title: 'Die Autowerkstatt — Car Repair Shop',
    icon: 'Wrench',
    image: '/images/schreiben/topic16_autowerkstatt.png',
    bildbeschreibung: [
      { de: "Auf dem Bild sehe ich einen Mann und eine Frau.", en: "In the picture I see a man and a woman." },
      { de: "Der Mann ist ein Mechaniker.", en: "The man is a mechanic." },
      { de: "Die Frau ist die Kundin.", en: "The woman is the customer." },
      { de: "Sie sind in einer Autowerkstatt.", en: "They are in a car repair shop." },
      { de: "In der Mitte steht ein rotes Auto.", en: "In the middle stands a red car." },
      { de: "Die Motorhaube ist offen.", en: "The hood is open." },
      { de: "Das Auto ist kaputt.", en: "The car is broken." },
      { de: "Der Mann hat ein Papier in der Hand.", en: "The man has a piece of paper in his hand." },
      { de: "Die Frau hat eine rote Tasche.", en: "The woman has a red bag." },
      { de: "Sie sprechen zusammen.", en: "They are talking together." },
      { de: "Sie lachen und sind freundlich.", en: "They are laughing and are friendly." },
      { de: "Ich glaube, die Frau möchte das Auto reparieren.", en: "I think the woman would like to repair the car." }
    ],
    situation: [
      {
            "de": "Was sehen Sie?",
            "en": "What do you see?"
      },
      {
            "de": "→ Auf dem Bild sehe ich einen Mann, eine Frau und ein rotes Auto.",
            "en": "→ In the picture I see a man, a woman, and a red car.",
            "isAnswer": true
      },
      {
            "de": "Wo sind diese Personen?",
            "en": "Where are these people?"
      },
      {
            "de": "→ Sie sind in einer Autowerkstatt.",
            "en": "→ They are in a car repair shop.",
            "isAnswer": true
      },
      {
            "de": "Was machen diese Personen?",
            "en": "What are these people doing?"
      },
      {
            "de": "→ Sie sprechen über das rote Auto. Das Auto ist kaputt.",
            "en": "→ They are talking about the red car. The car is broken.",
            "isAnswer": true
      }
],
    vocabulary: [
      { de: "die Autowerkstatt", en: "the car repair shop" },
      { de: "das Auto", en: "the car" },
      { de: "der Mechaniker", en: "the mechanic" },
      { de: "die Kundin", en: "the customer (female)" },
      { de: "reparieren", en: "to repair / to fix" },
      { de: "kaputt", en: "broken" },
      { de: "die Motorhaube", en: "the car hood" },
      { de: "offen", en: "open" },
      { de: "tragen", en: "to wear" },
      { de: "halten", en: "to hold" }
    ]
  },
  {
    id: '17',
    title: 'Die Hotelrezeption — Hotel Reception',
    icon: 'Building',
    image: '/images/schreiben/topic17_hotelrezeption.jpg',
    bildbeschreibung: [
      { de: "Auf dem Bild sehe ich einen Mann und eine Frau.", en: "In the picture I see a man and a woman." },
      { de: "Der Mann arbeitet hier. Er ist Rezeptionist.", en: "The man works here. He is a receptionist." },
      { de: "Die Frau ist ein Gast.", en: "The woman is a guest." },
      { de: "Sie sind in einem Hotel.", en: "They are in a hotel." },
      { de: "Der Mann steht hinter der Rezeption.", en: "The man is standing behind the reception." },
      { de: "Die Frau steht vor dem Tisch.", en: "The woman is standing in front of the table." },
      { de: "Die Frau hat einen Koffer.", en: "The woman has a suitcase." },
      { de: "Der Mann gibt der Frau eine Karte (oder: einen Schlüssel).", en: "The man gives the woman a card (or: a key)." },
      { de: "Die Kleidung von dem Mann ist ein Anzug.", en: "The man's clothing is a suit." },
      { de: "Die Kleidung von der Frau ist ein Kostüm.", en: "The woman's clothing is a business suit." },
      { de: "Sie sprechen zusammen.", en: "They are talking together." },
      { de: "Sie lachen und sind freundlich.", en: "They are laughing and are friendly." },
      { de: "Ich glaube, die Frau möchte ein Zimmer buchen.", en: "I think the woman would like to book a room." }
    ],
    situation: [
      {
            "de": "Was sehen Sie?",
            "en": "What do you see?"
      },
      {
            "de": "→ Auf dem Bild sehe ich zwei Personen an einer Rezeption.",
            "en": "→ In the picture I see two people at a reception.",
            "isAnswer": true
      },
      {
            "de": "Wo sind diese Personen?",
            "en": "Where are these people?"
      },
      {
            "de": "→ Sie sind im Hotel.",
            "en": "→ They are in the hotel.",
            "isAnswer": true
      },
      {
            "de": "Was machen diese Personen?",
            "en": "What are these people doing?"
      },
      {
            "de": "→ Sie sprechen. Die Frau bucht ein Zimmer.",
            "en": "→ They are talking. The woman is booking a room.",
            "isAnswer": true
      }
],
    vocabulary: [
      { de: "die Hotelrezeption", en: "the hotel reception" },
      { de: "gut angezogen", en: "well-dressed" },
      { de: "der Koffer", en: "the suitcase" },
      { de: "die Handtasche", en: "the handbag" },
      { de: "der Gast / der Kunde", en: "the guest / the customer" },
      { de: "der Mitarbeiter", en: "the employee" },
      { de: "ein Zimmer reservieren / buchen", en: "to reserve / book a room" },
      { de: "mit Frühstück", en: "with breakfast" },
      { de: "eine Woche", en: "one week" },
      { de: "bar bezahlen", en: "to pay in cash" },
      { de: "mit Kreditkarte bezahlen", en: "to pay by credit card" }
    ]
  },
  {
    id: '18',
    title: 'Die Arztpraxis — At the Doctor',
    icon: 'Activity',
    image: '/images/schreiben/topic18_arzt.png',
    bildbeschreibung: [
      {
            "de": "Auf dem Bild sehe ich zwei Personen: einen Mann und eine Frau.",
            "en": "In the picture I see two people: a man and a woman."
      },
      {
            "de": "Sie sind in einer Arztpraxis.",
            "en": "They are in a doctor's office."
      },
      {
            "de": "Links sitzt ein Arzt.",
            "en": "On the left sits a doctor."
      },
      {
            "de": "Rechts sitzt eine Frau. Sie ist krank.",
            "en": "On the right sits a woman. She is sick."
      },
      {
            "de": "Die Frau hat Kopfschmerzen.",
            "en": "The woman has a headache."
      },
      {
            "de": "Der Arzt hört zu und hilft der Frau.",
            "en": "The doctor listens and helps the woman."
      },
      {
            "de": "Im Hintergrund sehe ich ein Fenster.",
            "en": "In the background I see a window."
      },
      {
            "de": "Ich glaube, die Frau braucht ein Medikament.",
            "en": "I think the woman needs medication."
      }
],
    situation: [
      {
            "de": "Was sehen Sie?",
            "en": "What do you see?"
      },
      {
            "de": "→ Auf dem Bild sehe ich einen Arzt und eine Patientin.",
            "en": "→ In the picture I see a doctor and a patient.",
            "isAnswer": true
      },
      {
            "de": "Wo sind diese Personen?",
            "en": "Where are these people?"
      },
      {
            "de": "→ Sie sind in einer Arztpraxis.",
            "en": "→ They are in a doctor's office.",
            "isAnswer": true
      },
      {
            "de": "Was machen diese Personen?",
            "en": "What are these people doing?"
      },
      {
            "de": "→ Der Arzt spricht mit der Frau. Die Frau ist krank.",
            "en": "→ The doctor is talking with the woman. The woman is sick.",
            "isAnswer": true
      }
],
    vocabulary: [
      { de: "der Arzt", en: "the doctor (male)" },
      { de: "die Patientin", en: "the patient (female)" },
      { de: "die Arztpraxis", en: "the doctor's office" },
      { de: "krank", en: "sick / ill" },
      { de: "die Schmerzen", en: "the pain / aches" },
      { de: "die Kopfschmerzen", en: "the headache" },
      { de: "die Bauchschmerzen", en: "the stomachache" },
      { de: "der Kittel", en: "the lab coat" },
      { de: "das Stethoskop", en: "the stethoscope" },
      { de: "zuhören", en: "to listen (to someone)" }
    ]
  },
  {
    id: '19',
    title: 'Fernsehen im Wohnzimmer — Watching TV',
    icon: 'Tv',
    image: '/images/schreiben/topic19_fernsehen.png',
    bildbeschreibung: [
      { de: "Auf dem Bild sehe ich einen Mann und eine Frau.", en: "In the picture I see a man and a woman." },
      { de: "Sie sind alt.", en: "They are old." },
      { de: "Sie sind zu Hause im Wohnzimmer.", en: "They are at home in the living room." },
      { de: "Sie sitzen auf dem Sofa.", en: "They are sitting on the sofa." },
      { de: "Sie sehen fern.", en: "They are watching television." },
      { de: "An der Wand hängt ein großer Fernseher.", en: "A large television hangs on the wall." },
      { de: "Im Fernsehen sehe ich eine Kochshow mit zwei Personen.", en: "On television I see a cooking show with two people." },
      { de: "Das Wohnzimmer hat weiße Möbel.", en: "The living room has white furniture." },
      { de: "Ich sehe ein Regal und einen Teppich.", en: "I see a shelf and a rug." },
      { de: "Die Frau hat eine Fernbedienung in der Hand.", en: "The woman has a remote control in her hand." },
      { de: "Die Personen sind ruhig.", en: "The people are calm." },
      { de: "Ich glaube, die Frau möchte eine Kochshow sehen.", en: "I think the woman would like to watch a cooking show." }
    ],
    situation: [
      { de: "Was sehen Sie?", en: "What do you see?" },
      { de: "→ Auf dem Bild sehe ich ein Wohnzimmer und einen Fernseher.", en: "→ In the picture I see a living room and a television.", isAnswer: true },
      { de: "Wie viele Personen sehen Sie?", en: "How many people do you see?" },
      { de: "→ Ich sehe zwei Personen: einen Mann und eine Frau.", en: "→ I see two people: a man and a woman.", isAnswer: true },
      { de: "Wo sind diese Personen?", en: "Where are these people?" },
      { de: "→ Sie sind zu Hause im Wohnzimmer. Sie sitzen auf dem Sofa.", en: "→ They are at home in the living room. They are sitting on the sofa.", isAnswer: true },
      { de: "Was machen diese Personen?", en: "What are these people doing?" },
      { de: "→ Sie sehen fern. Sie schauen eine Kochshow.", en: "→ They are watching TV. They are watching a cooking show.", isAnswer: true }
    ],
    vocabulary: [
      { de: "das Wohnzimmer", en: "the living room" },
      { de: "der Fernseher", en: "the television / TV set" },
      { de: "fernsehen", en: "to watch TV" },
      { de: "die Kochshow / Kochsendung", en: "the cooking show" },
      { de: "das Sofa / die Couch", en: "the sofa / couch" },
      { de: "sitzen", en: "to sit" },
      { de: "die Fernbedienung", en: "the remote control" },
      { de: "das Regal", en: "the shelf" },
      { de: "der Teppich", en: "the carpet / rug" },
      { de: "zu Hause", en: "at home" },
      { de: "entspannen", en: "to relax" }
    ]
  },
  {
    id: '20',
    title: 'Kleidung / Reinigung — Shopping & Cleaners',
    icon: 'ShoppingBag',
    image: '/images/schreiben/topic20_reinigung.png',
    bildbeschreibung: [
      { de: "Auf dem Bild sehe ich zwei Frauen.", en: "In the picture I see two women." },
      { de: "Sie sind in einem Kleidergeschäft (oder: einer Reinigung).", en: "They are in a clothing store (or: a dry cleaner)." },
      { de: "Die Frau links trägt eine weiße Bluse.", en: "The woman on the left is wearing a white blouse." },
      { de: "Die Frau rechts trägt einen gelben Pullover.", en: "The woman on the right is wearing a yellow sweater." },
      { de: "Die Frau rechts hält ein blaues Kleid in der Hand.", en: "The woman on the right holds a blue dress in her hand." },
      { de: "Im Hintergrund sehe ich viele Kleider.", en: "In the background I see many clothes." },
      { de: "Sie sprechen zusammen.", en: "They are talking together." },
      { de: "Die Frauen lachen und sind freundlich.", en: "The women are laughing and are friendly." },
      { de: "Ich glaube, die Frau möchte das Kleid kaufen.", en: "I think the woman would like to buy the dress." }
    ],
    situation: [
      { de: "Was sehen Sie?", en: "What do you see?" },
      { de: "→ Auf dem Bild sehe ich Kleidung und ein blaues Kleid.", en: "→ In the picture I see clothes and a blue dress.", isAnswer: true },
      { de: "Wie viele Personen sehen Sie?", en: "How many people do you see?" },
      { de: "→ Ich sehe zwei Personen. Das sind zwei Frauen.", en: "→ I see two people. They are two women.", isAnswer: true },
      { de: "Wo sind diese Personen?", en: "Where are these people?" },
      { de: "→ Sie sind in einem Geschäft oder in einer Reinigung.", en: "→ They are in a shop or at a dry cleaner's.", isAnswer: true },
      { de: "Was machen diese Personen?", en: "What are these people doing?" },
      { de: "→ Sie kaufen Kleidung. Sie sprechen und lachen.", en: "→ They are buying clothes. They are speaking and laughing.", isAnswer: true }
    ],
    vocabulary: [
      { de: "die Kleidung", en: "the clothes" },
      { de: "das Kleid", en: "the dress" },
      { de: "blau", en: "blue" },
      { de: "die Reinigung", en: "the dry cleaner's" },
      { de: "das Geschäft / der Laden", en: "the shop / store" },
      { de: "die Frauen", en: "the women" },
      { de: "kaufen", en: "to buy" },
      { de: "lachen", en: "to laugh" },
      { de: "sprechen", en: "to speak" },
      { de: "der Kleiderbügel", en: "the clothes hanger" }
    ]
  },
  {
    id: '21',
    title: 'Der Umzug — Moving House',
    icon: 'Package',
    image: '/images/schreiben/topic21_umzug.png',
    bildbeschreibung: [
      { de: "Auf dem Bild sehe ich einen Mann und eine Frau.", en: "In the picture I see a man and a woman." },
      { de: "Sie sind zu Hause.", en: "They are at home." },
      { de: "Der Mann trägt ein kariertes Hemd und eine blaue Hose.", en: "The man is wearing a plaid shirt and blue trousers." },
      { de: "Die Frau trägt eine rosa Bluse und eine weiße Hose.", en: "The woman is wearing a pink blouse and white trousers." },
      { de: "Sie packen viele Kartons (oder: Kisten).", en: "They are packing many cardboard boxes (or: crates)." },
      { de: "Der Mann trägt einen Karton.", en: "The man is carrying a box." },
      { de: "Die Frau sitzt auf dem Boden.", en: "The woman is sitting on the floor." },
      { de: "Auf dem Boden liegt auch ein Teppich.", en: "A rug is also lying on the floor." },
      { de: "Die Personen lachen und sind glücklich.", en: "The people are laughing and are happy." },
      { de: "Ich glaube, die Personen möchten umziehen.", en: "I think the people would like to move house." }
    ],
    situation: [
      { de: "Was sehen Sie?", en: "What do you see?" },
      { de: "→ Auf dem Bild sehe ich viele Kartons und einen Teppich.", en: "→ In the picture I see many boxes and a carpet.", isAnswer: true },
      { de: "Wie viele Personen sehen Sie?", en: "How many people do you see?" },
      { de: "→ Ich sehe zwei Personen: einen Mann und eine Frau.", en: "→ I see two people: a man and a woman.", isAnswer: true },
      { de: "Wo sind diese Personen?", en: "Where are these people?" },
      { de: "→ Sie sind in einer neuen Wohnung.", en: "→ They are in a new apartment.", isAnswer: true },
      { de: "Was machen diese Personen?", en: "What are these people doing?" },
      { de: "→ Sie machen einen Umzug. Sie packen die Sachen aus.", en: "→ They are moving. They are unpacking the things.", isAnswer: true }
    ],
    vocabulary: [
      { de: "der Umzug", en: "the relocation / move" },
      { de: "die neue Wohnung", en: "the new apartment" },
      { de: "der Karton / die Umzugskiste", en: "the box / moving box" },
      { de: "der Teppich", en: "the carpet / rug" },
      { de: "auspacken", en: "to unpack" },
      { de: "einpacken", en: "to pack" },
      { de: "tragen", en: "to carry" },
      { de: "umziehen", en: "to move house" },
      { de: "helfen", en: "to help" }
    ]
  },
  {
    id: '22',
    title: 'Grillen im Garten — Barbecue',
    icon: 'Flame',
    image: '/images/schreiben/topic22_grillen.png',
    bildbeschreibung: [
      { de: "Auf dem Bild sehe ich einen Mann und eine Frau.", en: "In the picture I see a man and a woman." },
      { de: "Sie sind draußen im Garten.", en: "They are outside in the garden." },
      { de: "Der Mann ist älter. Er trägt eine Schürze.", en: "The man is older. He is wearing an apron." },
      { de: "Die Frau trägt ein blaues Kleid mit Blumen.", en: "The woman is wearing a blue floral dress." },
      { de: "Der Mann steht an einem Grill.", en: "The man is standing at a barbecue grill." },
      { de: "Er grillt Fleisch.", en: "He is grilling meat." },
      { de: "Die Frau hält einen Teller in der Hand.", en: "The woman is holding a plate in her hand." },
      { de: "Im Hintergrund sehe ich grüne Bäume.", en: "In the background I see green trees." },
      { de: "Die Personen lachen und sind glücklich.", en: "The people are laughing and are happy." },
      { de: "Ich glaube, die Personen möchten zusammen essen.", en: "I think the people would like to eat together." }
    ],
    situation: [
      { de: "Was sehen Sie?", en: "What do you see?" },
      { de: "→ Auf dem Bild sehe ich einen Grill und Essen.", en: "→ In the picture I see a grill and food.", isAnswer: true },
      { de: "Wie viele Personen sehen Sie?", en: "How many people do you see?" },
      { de: "→ Ich sehe zwei Personen im Vordergrund: einen Mann und eine Frau.", en: "→ I see two people in the foreground: a man and a woman.", isAnswer: true },
      { de: "Wo sind diese Personen?", en: "Where are these people?" },
      { de: "→ Sie sind draußen im Garten.", en: "→ They are outside in the garden.", isAnswer: true },
      { de: "Was machen diese Personen?", en: "What are these people doing?" },
      { de: "→ Sie grillen Fleisch und machen eine Party.", en: "→ They are grilling meat and having a party.", isAnswer: true }
    ],
    vocabulary: [
      { de: "der Grill", en: "the grill / barbecue" },
      { de: "grillen", en: "to grill / barbecue" },
      { de: "das Fleisch", en: "the meat" },
      { de: "die Wurst (Plural: die Würstchen)", en: "the sausage (sausages)" },
      { de: "der Garten", en: "the garden" },
      { de: "draußen", en: "outside / outdoors" },
      { de: "die Schürze", en: "the apron" },
      { de: "der Teller", en: "the plate" },
      { de: "die Grillparty", en: "the barbecue party" },
      { de: "das Wetter", en: "the weather" }
    ]
  },
  {
    id: '23',
    title: 'Im Restaurant — At the Restaurant',
    icon: 'Utensils',
    image: '/images/schreiben/topic23_restaurant.jpg',
    bildbeschreibung: [
      { de: "Auf dem Bild sehe ich einen Mann und zwei Frauen.", en: "In the picture I see a man and two women." },
      { de: "Sie sind in einem Restaurant.", en: "They are in a restaurant." },
      { de: "Eine Frau arbeitet hier. Sie ist die Kellnerin.", en: "One woman works here. She is the waitress." },
      { de: "Der Mann und die andere Frau sind Gäste.", en: "The man and the other woman are guests." },
      { de: "Die Kellnerin hat Papier und einen Stift.", en: "The waitress has paper and a pen." },
      { de: "Ein Gast hat eine Speisekarte in der Hand.", en: "A guest has a menu in their hand." },
      { de: "Auf dem Tisch steht Essen.", en: "There is food on the table." },
      { de: "Sie sprechen zusammen.", en: "They are talking together." },
      { de: "Alle Personen lachen. Sie sind glücklich.", en: "All the people are laughing. They are happy." },
      { de: "Ich glaube, der Gast möchte Essen bestellen.", en: "I think the guest would like to order food." }
    ],
    situation: [
      { de: "Was sehen Sie?", en: "What do you see?" },
      { de: "→ Auf dem Bild sehe ich eine Kellnerin, zwei Gäste, eine Speisekarte, zwei Teller Salat und zwei Gläser Bier.", en: "→ In the picture I see a waitress, two guests, a menu, two plates of salad, and two glasses of beer.", isAnswer: true },
      { de: "Wie viele Personen sehen Sie?", en: "How many people do you see?" },
      { de: "→ Ich sehe drei Personen.", en: "→ I see three people.", isAnswer: true },
      { de: "Wo sind diese Personen?", en: "Where are these people?" },
      { de: "→ Sie sind im Restaurant.", en: "→ They are in a restaurant.", isAnswer: true },
      { de: "Was machen diese Personen?", en: "What are these people doing?" },
      { de: "→ Ich glaube, die Gäste möchten etwas zu essen bestellen.", en: "→ I think the guests want to order something to eat.", isAnswer: true }
    ],
    vocabulary: [
      { de: "das Restaurant", en: "the restaurant" },
      { de: "die Kellnerin", en: "the waitress" },
      { de: "der Kellner", en: "the waiter" },
      { de: "der Gast (Plural: die Gäste)", en: "the guest (guests)" },
      { de: "die Speisekarte", en: "the menu" },
      { de: "der Salat", en: "the salad" },
      { de: "das Glas Bier", en: "the glass of beer" },
      { de: "der Tisch", en: "the table" },
      { de: "bestellen", en: "to order" },
      { de: "essen", en: "to eat" },
      { de: "trinken", en: "to drink" },
      { de: "bezahlen", en: "to pay" }
    ]
  },

  {
    id: '8',
    title: 'Essen und Trinken — Food and Drinks',
    icon: 'Coffee',
    image: '/images/schreiben/topic8_essen_trinken.jpg',
    bildbeschreibung: [
      { de: "Auf dem Bild sehe ich eine Familie.", en: "In the picture I see a family." },
      { de: "Das sind ein Mann, eine Frau und ein Kind.", en: "These are a man, a woman and a child." },
      { de: "Sie sind zu Hause in der Küche.", en: "They are at home in the kitchen." },
      { de: "Sie sitzen an einem großen Tisch.", en: "They are sitting at a large table." },
      { de: "Auf dem Tisch steht viel Essen.", en: "There is a lot of food on the table." },
      { de: "Ich sehe Reis, Fleisch, Salat und Obst.", en: "I see rice, meat, salad and fruit." },
      { de: "Das Kind hat einen Löffel in der Hand.", en: "The child has a spoon in their hand." },
      { de: "Die Frau hält einen Teller.", en: "The woman is holding a plate." },
      { de: "Alle Personen lachen und sind glücklich.", en: "All people are laughing and are happy." },
      { de: "Ich glaube, sie essen zu Mittag.", en: "I think they are eating lunch." }
    ],
    situation: [
      {
            "de": "Was sehen Sie?",
            "en": "What do you see?"
      },
      {
            "de": "→ Auf dem Bild sehe ich einen Teller mit Reis und Fleisch.",
            "en": "→ In the picture I see a plate with rice and meat.",
            "isAnswer": true
      },
      {
            "de": "Was gibt es zu trinken?",
            "en": "What is there to drink?"
      },
      {
            "de": "→ Es gibt eine Tasse Kaffee und ein Glas Wasser.",
            "en": "→ There is a cup of coffee and a glass of water.",
            "isAnswer": true
      },
      {
            "de": "Welches Besteck liegt auf dem Tisch?",
            "en": "Which cutlery is lying on the table?"
      },
      {
            "de": "→ Auf dem Tisch liegen eine Gabel und ein Löffel.",
            "en": "→ On the table lie a fork and a spoon.",
            "isAnswer": true
      }
],
    vocabulary: [
      { de: 'das Essen', en: 'the food / the meal' },
      { de: 'der Teller', en: 'the plate' },
      { de: 'der Reis', en: 'the rice' },
      { de: 'das Hähnchen', en: 'the chicken' },
      { de: 'das Obst', en: 'the fruit' },
      { de: 'die Schale', en: 'the bowl' },
      { de: 'die Tasse Kaffee', en: 'the cup of coffee' },
      { de: 'das Glas Wasser', en: 'the glass of water' },
      { de: 'die Zitrone', en: 'the lemon' },
      { de: 'der Tisch', en: 'the table' },
      { de: 'die Gabel', en: 'the fork' },
      { de: 'der Löffel', en: 'the spoon' }
    ]
  },
  {
    id: '9',
    title: 'Einkaufen — Shopping',
    icon: 'ShoppingCart',
    image: '/images/schreiben/topic9_einkaufen.jpg',
    bildbeschreibung: [
      { de: "Auf dem Bild sehe ich zwei Frauen.", en: "In the picture I see two women." },
      { de: "Sie sind in einem Supermarkt.", en: "They are in a supermarket." },
      { de: "Eine Frau arbeitet hier. Sie ist die Verkäuferin.", en: "One woman works here. She is the cashier / saleswoman." },
      { de: "Die andere Frau ist die Kundin.", en: "The other woman is the customer." },
      { de: "Die Kundin gibt der Verkäuferin Geld.", en: "The customer gives money to the cashier." },
      { de: "Ich sehe viele Lebensmittel und Schuhe auf dem Band.", en: "I see a lot of groceries and shoes on the conveyor belt." },
      { de: "Die Kundin hat eine rote Tasche.", en: "The customer has a red bag." },
      { de: "Im Hintergrund sind viele andere Menschen.", en: "In the background there are many other people." },
      { de: "Die Frauen lachen. Sie sind freundlich.", en: "The women are laughing. They are friendly." },
      { de: "Ich glaube, die Kundin möchte in bar bezahlen.", en: "I think the customer wants to pay in cash." }
    ],
    situation: [
      {
            "de": "Was sehen Sie?",
            "en": "What do you see?"
      },
      {
            "de": "→ Auf dem Bild sehe ich eine Kundin und eine Kassiererin im Supermarkt.",
            "en": "→ In the picture I see a customer and a cashier in the supermarket.",
            "isAnswer": true
      },
      {
            "de": "Wo sind diese Personen?",
            "en": "Where are these people?"
      },
      {
            "de": "→ Sie sind im Supermarkt an der Kasse.",
            "en": "→ They are in the supermarket at the checkout.",
            "isAnswer": true
      },
      {
            "de": "Was macht die Kundin?",
            "en": "What is the customer doing?"
      },
      {
            "de": "→ Sie kauft Obst und Gemüse und bezahlt bar.",
            "en": "→ She buys fruit and vegetables and pays cash.",
            "isAnswer": true
      }
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
  },
  {
    id: '10',
    title: 'Freizeit — Free Time',
    icon: 'Gamepad2',
    image: '/images/schreiben/topic10_freizeit.jpg',
    bildbeschreibung: [
      { de: "Auf dem Bild sehe ich viele Menschen.", en: "In the picture I see many people." },
      { de: "Sie sind Freunde.", en: "They are friends." },
      { de: "Sie sind draußen im Garten.", en: "They are outside in the garden." },
      { de: "Die Sonne scheint.", en: "The sun is shining." },
      { de: "Eine Frau liest ein Buch.", en: "A woman is reading a book." },
      { de: "Zwei Männer sitzen auf dem Gras.", en: "Two men are sitting on the grass." },
      { de: "Sie trinken Bier.", en: "They are drinking beer." },
      { de: "Auf dem Boden liegt ein Fußball.", en: "A football is lying on the ground." },
      { de: "Auf dem Tisch liegt eine Kinokarte.", en: "A cinema ticket is lying on the table." },
      { de: "Alle Personen lachen. Sie sind glücklich.", en: "All people are laughing. They are happy." },
      { de: "Ich glaube, die Freunde möchten zusammen essen.", en: "I think the friends want to eat together." }
    ],
    situation: [
      {
            "de": "Was sehen Sie?",
            "en": "What do you see?"
      },
      {
            "de": "→ Auf dem Bild sehe ich viele Freunde draußen im Garten.",
            "en": "→ In the picture I see many friends outside in the garden.",
            "isAnswer": true
      },
      {
            "de": "Was macht die Frau vorne?",
            "en": "What is the woman in front doing?"
      },
      {
            "de": "→ Sie liegt auf einer Decke und liest ein Buch.",
            "en": "→ She lies on a blanket and reads a book.",
            "isAnswer": true
      },
      {
            "de": "Was machen die Männer?",
            "en": "What are the men doing?"
      },
      {
            "de": "→ Sie sitzen auf dem Gras, sprechen und trinken Bier.",
            "en": "→ They are sitting on the grass, talking, and drinking beer.",
            "isAnswer": true
      }
],
    vocabulary: [
      { de: 'die Freizeit', en: 'the free time / leisure' },
      { de: 'die Freunde', en: 'the friends' },
      { de: 'der Garten', en: 'the garden' },
      { de: 'die Decke', en: 'the blanket' },
      { de: 'ein Buch lesen', en: 'to read a book' },
      { de: 'lachen', en: 'to laugh' },
      { de: 'das Bier', en: 'the beer' },
      { de: 'der Rasen / das Gras', en: 'the lawn / the grass' },
      { de: 'der Fußball', en: 'the soccer ball' },
      { de: 'im Hintergrund', en: 'in the background' }
    ]
  },
  {
    id: '5',
    title: 'Familie & Urlaub — Family & Vacation',
    icon: 'Plane',
    image: '/images/schreiben/topic5_family.jpg',
    bildbeschreibung: [
      { de: "Auf dem Bild sehe ich eine Familie.", en: "In the picture I see a family." },
      { de: "Das sind der Vater, die Mutter und drei Kinder.", en: "These are the father, the mother and three children." },
      { de: "Sie sind am Flughafen.", en: "They are at the airport." },
      { de: "Der Vater trägt eine blaue Hose und ein dunkelblaues T-Shirt.", en: "The father is wearing blue trousers and a dark blue T-shirt." },
      { de: "Die Mutter trägt eine blaue Hose und eine Bluse.", en: "The mother is wearing blue trousers and a blouse." },
      { de: "Alle Personen haben Koffer und Taschen.", en: "All persons have suitcases and bags." },
      { de: "Ein Junge hat einen roten Koffer mit einem Dinosaurier.", en: "A boy has a red suitcase with a dinosaur." },
      { de: "Im Hintergrund sehe ich ein Flugzeug.", en: "In the background I see an airplane." },
      { de: "Alle Personen lachen. Sie sind sehr glücklich.", en: "All people are laughing. They are very happy." },
      { de: "Ich glaube, die Familie möchte in den Urlaub fliegen.", en: "I think the family would like to fly on vacation." }
    ],
    situation: [
      {
            "de": "Was sehen Sie?",
            "en": "What do you see?"
      },
      {
            "de": "→ Auf dem Bild sehe ich eine Familie mit drei Kindern.",
            "en": "→ In the picture I see a family with three children.",
            "isAnswer": true
      },
      {
            "de": "Wo sind diese Personen?",
            "en": "Where are these people?"
      },
      {
            "de": "→ Sie sind am Flughafen vor dem Flugsteig.",
            "en": "→ They are at the airport in front of the gate.",
            "isAnswer": true
      },
      {
            "de": "Was machen diese Personen?",
            "en": "What are these people doing?"
      },
      {
            "de": "→ Sie warten auf das Flugzeug und reisen in den Urlaub.",
            "en": "→ They are waiting for the plane and traveling on vacation.",
            "isAnswer": true
      }
],
    vocabulary: [
      { de: 'der Flughafen', en: 'the airport' },
      { de: 'die Familie', en: 'the family' },
      { de: 'der Urlaub / die Reise', en: 'the vacation / the trip' },
      { de: 'glücklich', en: 'happy' },
      { de: 'der Koffer', en: 'the suitcase' },
      { de: 'der Rucksack', en: 'the backpack' },
      { de: 'das Gepäck', en: 'the luggage' },
      { de: 'das Gate / der Flugsteig', en: 'the gate' },
      { de: 'der Monitor / der Bildschirm', en: 'the monitor / screen' },
      { de: 'fliegen', en: 'to fly' }
    ]
  },
  {
    id: '6',
    title: 'Bahnhof & Reise — Train Station & Travel',
    icon: 'Train',
    image: '/images/schreiben/topic6_bahnhof.jpg',
    bildbeschreibung: [
      { de: "Auf dem Bild sehe ich viele Menschen.", en: "In the picture I see many people." },
      { de: "Im Vordergrund steht eine Familie mit zwei Kindern.", en: "In the foreground stands a family with two children." },
      { de: "Sie sind an einem Bahnhof.", en: "They are at a train station." },
      { de: "Am Gleis steht ein großer roter Zug.", en: "A large red train stands on the track." },
      { de: "Der Zug fährt nach Frankfurt.", en: "The train is going to Frankfurt." },
      { de: "Die Personen haben viele Koffer und Rucksäcke.", en: "The people have many suitcases and backpacks." },
      { de: "Ein Koffer ist blau, ein Koffer ist rot.", en: "One suitcase is blue, one suitcase is red." },
      { de: "Im Hintergrund sehe ich andere Fahrgäste und eine große Uhr.", en: "In the background I see other passengers and a large clock." },
      { de: "Alle Personen lachen. Sie sind glücklich.", en: "All people are laughing. They are happy." },
      { de: "Ich glaube, die Familie möchte mit dem Zug fahren.", en: "I think the family wants to travel by train." }
    ],
    situation: [
      {
            "de": "Was sehen Sie?",
            "en": "What do you see?"
      },
      {
            "de": "→ Auf dem Bild sehe ich einen Bahnhof, einen roten Zug und eine Familie.",
            "en": "→ In the picture I see a train station, a red train, and a family.",
            "isAnswer": true
      },
      {
            "de": "Wo sind diese Personen?",
            "en": "Where are these people?"
      },
      {
            "de": "→ Sie sind am Bahnhof auf dem Bahnsteig.",
            "en": "→ They are at the train station on the platform.",
            "isAnswer": true
      },
      {
            "de": "Was machen diese Personen?",
            "en": "What are these people doing?"
      },
      {
            "de": "→ Sie haben Koffer und warten auf den Zug.",
            "en": "→ They have suitcases and are waiting for the train.",
            "isAnswer": true
      }
],
    vocabulary: [
      { de: 'der Bahnhof', en: 'the train station' },
      { de: 'der Zug / die Bahn', en: 'the train' },
      { de: 'das Gleis / der Bahnsteig', en: 'the platform / track' },
      { de: 'der Koffer', en: 'the suitcase' },
      { de: 'die Familie', en: 'the family' },
      { de: 'reisen / fahren', en: 'to travel / to drive (or ride)' },
      { de: 'die Anzeige / der Bildschirm', en: 'the display / screen' },
      { de: 'rot', en: 'red' },
      { de: 'blau', en: 'blue' }
    ]
  },
  {
    id: '2',
    title: 'Bekleidungsgeschäft — Clothing Store',
    icon: 'Shirt',
    image: '/images/schreiben/topic2_clothes.jpg',
    bildbeschreibung: [
      { de: "Auf dem Bild sehe ich drei Personen.", en: "In the picture I see three people." },
      { de: "Sie sind in einem Kleidergeschäft.", en: "They are in a clothing store." },
      { de: "Die Frau rechts arbeitet hier. Sie ist die Verkäuferin.", en: "The woman on the right works here. She is the saleswoman." },
      { de: "Die andere Frau ist eine Kundin.", en: "The other woman is a customer." },
      { de: "Der Mann ist ein Kunde.", en: "The man is a customer." },
      { de: "Der Mann hält eine grüne Jacke in der Hand.", en: "The man holds a green jacket in his hand." },
      { de: "Die Verkäuferin hat ein Klemmbrett und einen Kleiderbügel.", en: "The saleswoman has a clipboard and a clothes hanger." },
      { de: "Im Hintergrund sehe ich viele Jacken und Schaufensterpuppen.", en: "In the background I see many jackets and mannequins." },
      { de: "Sie sprechen zusammen.", en: "They are talking together." },
      { de: "Die Personen lachen und sind freundlich.", en: "The people are laughing and are friendly." },
      { de: "Ich glaube, die Kundin möchte die Jacke für den Mann kaufen.", en: "I think the customer wants to buy the jacket for the man." }
    ],
    situation: [
      {
            "de": "Was sehen Sie?",
            "en": "What do you see?"
      },
      {
            "de": "→ Auf dem Bild sehe ich einen Mann, eine Frau und Kleidung.",
            "en": "→ In the picture I see a man, a woman, and clothes.",
            "isAnswer": true
      },
      {
            "de": "Wo sind die Personen?",
            "en": "Where are the people?"
      },
      {
            "de": "→ Sie sind in einem Bekleidungsgeschäft.",
            "en": "→ They are in a clothing store.",
            "isAnswer": true
      },
      {
            "de": "Was machen die Personen?",
            "en": "What are the people doing?"
      },
      {
            "de": "→ Sie sprechen und lachen. Die Frau kauft Kleidung.",
            "en": "→ They are talking and laughing. The woman is buying clothes.",
            "isAnswer": true
      }
],
    vocabulary: [
      { de: 'das Bekleidungsgeschäft / der Modeladen', en: 'the clothing store' },
      { de: 'die Kleidung', en: 'the clothes' },
      { de: 'einkaufen / shoppen', en: 'to shop / to go shopping' },
      { de: 'die Jacke', en: 'the jacket' },
      { de: 'der Pullover', en: 'the sweater' },
      { de: 'das Hemd', en: 'the shirt' },
      { de: 'die Hose', en: 'the pants' },
      { de: 'der Kleiderbügel', en: 'the clothes hanger' },
      { de: 'grün', en: 'green' },
      { de: 'gelb', en: 'yellow' }
    ]
  },
  {
    id: '1',
    title: 'Möbelgeschäft — Furniture Store',
    icon: 'Sofa',
    image: '/images/schreiben/topic1_furniture.jpg',
    bildbeschreibung: [
      { de: "Auf dem Bild sehe ich einen Mann und zwei Frauen.", en: "In the picture I see a man and two women." },
      { de: "Sie sind in einem Möbelgeschäft.", en: "They are in a furniture store." },
      { de: "Eine Frau arbeitet hier. Sie ist die Verkäuferin.", en: "One woman works here. She is the saleswoman." },
      { de: "Der Mann und die andere Frau sind Kunden.", en: "The man and the other woman are customers." },
      { de: "Die Verkäuferin hat ein Tablet in der Hand.", en: "The saleswoman has a tablet in her hand." },
      { de: "Sie zeigt ein graues Sofa.", en: "She points to a gray sofa." },
      { de: "Links sehe ich einen großen Holztisch und Stühle.", en: "On the left I see a large wooden table and chairs." },
      { de: "Sie sprechen zusammen.", en: "They are talking together." },
      { de: "Alle Personen lachen. Sie sind freundlich.", en: "All people are laughing. They are friendly." },
      { de: "Ich glaube, die Kunden möchten das Sofa kaufen.", en: "I think the customers want to buy the sofa." }
    ],
    situation: [
      {
            "de": "Was sehen Sie?",
            "en": "What do you see?"
      },
      {
            "de": "→ Auf dem Bild sehe ich drei Personen und ein Sofa.",
            "en": "→ In the picture I see three people and a sofa.",
            "isAnswer": true
      },
      {
            "de": "Wo sind die Personen?",
            "en": "Where are the people?"
      },
      {
            "de": "→ Sie sind in einem Möbelgeschäft.",
            "en": "→ They are in a furniture store.",
            "isAnswer": true
      },
      {
            "de": "Was machen die Personen?",
            "en": "What are the people doing?"
      },
      {
            "de": "→ Sie sprechen über das Sofa. Die Kunden möchten einkaufen.",
            "en": "→ They are talking about the sofa. The customers want to shop.",
            "isAnswer": true
      }
],
    vocabulary: [
      { de: 'das Möbelgeschäft / das Möbelhaus', en: 'the furniture store' },
      { de: 'die Möbel', en: 'the furniture' },
      { de: 'die Verkäuferin', en: 'the saleswoman' },
      { de: 'das Paar', en: 'the couple' },
      { de: 'das Sofa / die Couch', en: 'the sofa / couch' },
      { de: 'der Tisch', en: 'the table' },
      { de: 'der Stuhl', en: 'the chair' },
      { de: 'der Schrank', en: 'the cupboard / closet' },
      { de: 'zeigen auf', en: 'to point at' },
      { de: 'beraten', en: 'to advise / help' }
    ]
  },
  {
    id: '3',
    title: 'Auto & Geschenk — Car & Gift',
    icon: 'Car',
    image: '/images/schreiben/topic3_car.jpg',
    bildbeschreibung: [
      { de: "Auf dem Bild sehe ich zwei Frauen.", en: "In the picture I see two women." },
      { de: "Das sind eine Mutter und eine Tochter.", en: "These are a mother and a daughter." },
      { de: "Sie sind vor einem Haus.", en: "They are in front of a house." },
      { de: "Dort steht ein rotes Auto.", en: "A red car is parked there." },
      { de: "Die Mutter gibt der Tochter den Schlüssel.", en: "The mother gives the key to the daughter." },
      { de: "Das Auto ist ein Geschenk.", en: "The car is a gift." },
      { de: "Die Frauen lachen. Sie sind sehr glücklich.", en: "The women are laughing. They are very happy." },
      { de: "Ich glaube, das Auto ist für die Tochter.", en: "I think the car is for the daughter." }
    ],
    situation: [
      {
            "de": "Was sehen Sie?",
            "en": "What do you see?"
      },
      {
            "de": "→ Auf dem Bild sehe ich eine Mutter, ihre Tochter und ein rotes Auto.",
            "en": "→ In the picture I see a mother, her daughter, and a red car.",
            "isAnswer": true
      },
      {
            "de": "Wo sind diese Personen?",
            "en": "Where are these people?"
      },
      {
            "de": "→ Sie stehen vor einem Haus.",
            "en": "→ They are standing in front of a house.",
            "isAnswer": true
      },
      {
            "de": "Was machen diese Personen?",
            "en": "What are these people doing?"
      },
      {
            "de": "→ Die Mutter gibt der Tochter einen Schlüssel. Sie freuen sich.",
            "en": "→ The mother gives the daughter a key. They are happy.",
            "isAnswer": true
      }
],
    vocabulary: [
      { de: 'das Auto', en: 'the car' },
      { de: 'die Mutter', en: 'the mother' },
      { de: 'die Tochter', en: 'the daughter' },
      { de: 'der Autoschlüssel', en: 'the car key' },
      { de: 'geben', en: 'to give' },
      { de: 'sich freuen / glücklich', en: 'to be happy / happy' },
      { de: 'das Haus', en: 'the house' },
      { de: 'rot', en: 'red' },
      { de: 'grün', en: 'green' },
      { de: 'blau', en: 'blue' }
    ]
  },
  {
    id: '4',
    title: 'Wandern & Natur — Hiking & Nature',
    icon: 'Mountain',
    image: '/images/schreiben/topic4_hiking.jpg',
    bildbeschreibung: [
      { de: "Auf dem Bild sehe ich zwei Frauen.", en: "In the picture I see two women." },
      { de: "Sie sind in den Bergen.", en: "They are in the mountains." },
      { de: "Die Sonne scheint.", en: "The sun is shining." },
      { de: "Ich sehe viel Schnee.", en: "I see a lot of snow." },
      { de: "Die Frauen gehen zu Fuß.", en: "The women are walking on foot." },
      { de: "Sie haben große Rucksäcke.", en: "They have large backpacks." },
      { de: "Eine Frau trägt eine rote Jacke.", en: "One woman is wearing a red jacket." },
      { de: "Die andere Frau trägt eine blaue Jacke.", en: "The other woman is wearing a blue jacket." },
      { de: "Die Frauen lachen. Sie sind glücklich.", en: "The women are laughing. They are happy." },
      { de: "Ich glaube, sie möchten wandern.", en: "I think they would like to hike." }
    ],
    situation: [
      {
            "de": "Was sehen Sie?",
            "en": "What do you see?"
      },
      {
            "de": "→ Auf dem Bild sehe ich zwei Frauen in den Bergen.",
            "en": "→ In the picture I see two women in the mountains.",
            "isAnswer": true
      },
      {
            "de": "Wo sind diese Personen?",
            "en": "Where are these people?"
      },
      {
            "de": "→ Sie sind in den Bergen in der Natur.",
            "en": "→ They are in the mountains in nature.",
            "isAnswer": true
      },
      {
            "de": "Was machen diese Personen?",
            "en": "What are these people doing?"
      },
      {
            "de": "→ Sie wandern und tragen Rucksäcke.",
            "en": "→ They are hiking and carrying backpacks.",
            "isAnswer": true
      }
],
    vocabulary: [
      { de: 'wandern', en: 'to hike' },
      { de: 'die Berge', en: 'the mountains' },
      { de: 'der Schnee', en: 'the snow' },
      { de: 'der Rucksack', en: 'the backpack' },
      { de: 'die Jacke', en: 'the jacket' },
      { de: 'die Mütze', en: 'the beanie / hat' },
      { de: 'der Wanderweg', en: 'the hiking trail' },
      { de: 'die Natur', en: 'the nature' },
      { de: 'kalt', en: 'cold' },
      { de: 'rot', en: 'red' },
      { de: 'blau', en: 'blue' }
    ]
  },
  {
    id: '7',
    title: 'Kleidung kaufen — Buying Clothes',
    icon: 'ShoppingBag',
    image: '/images/schreiben/topic7_blue_dress.jpg',
    bildbeschreibung: [
      { de: "Auf dem Bild sehe ich zwei Frauen.", en: "In the picture I see two women." },
      { de: "Sie sind in einem Kleidergeschäft (oder: einem Laden).", en: "They are in a clothing store (or: a shop)." },
      { de: "Die linke Frau trägt einen weißen Pullover.", en: "The woman on the left is wearing a white sweater." },
      { de: "Die rechte Frau trägt eine Jeansjacke (oder: blaue Jacke).", en: "The woman on the right is wearing a denim jacket (or: blue jacket)." },
      { de: "Die linke Frau hält ein blaues Kleid in der Hand.", en: "The woman on the left holds a blue dress in her hand." },
      { de: "Im Hintergrund hängen viele Kleider und Taschen.", en: "In the background hang many dresses and bags." },
      { de: "Die Frauen sprechen zusammen.", en: "The women are talking together." },
      { de: "Sie lachen laut. Sie sind sehr glücklich.", en: "They laugh out loud. They are very happy." },
      { de: "Ich glaube, die Frauen möchten das Kleid kaufen.", en: "I think the women would like to buy the dress." }
    ],
    situation: [
      {
            "de": "Was sehen Sie?",
            "en": "What do you see?"
      },
      {
            "de": "→ Auf dem Bild sehe ich zwei Frauen und ein blaues Kleid.",
            "en": "→ In the picture I see two women and a blue dress.",
            "isAnswer": true
      },
      {
            "de": "Wo sind diese Personen?",
            "en": "Where are these people?"
      },
      {
            "de": "→ Sie sind in einem Modegeschäft.",
            "en": "→ They are in a fashion store.",
            "isAnswer": true
      },
      {
            "de": "Was machen diese Personen?",
            "en": "What are these people doing?"
      },
      {
            "de": "→ Sie sprechen, lachen und kaufen Kleidung.",
            "en": "→ They are talking, laughing, and buying clothes.",
            "isAnswer": true
      }
],
    vocabulary: [
      { de: 'die Freundinnen', en: 'the friends (female)' },
      { de: 'das Bekleidungsgeschäft / der Modeladen', en: 'the clothing store' },
      { de: 'shoppen / einkaufen', en: 'to shop / to go shopping' },
      { de: 'das Kleid', en: 'the dress' },
      { de: 'blau', en: 'blue' },
      { de: 'lachen', en: 'to laugh' },
      { de: 'glücklich / fröhlich', en: 'happy / cheerful' },
      { de: 'der Pullover', en: 'the sweater' },
      { de: 'die Jeansjacke', en: 'the denim jacket' },
      { de: 'der Kleiderbügel', en: 'the clothes hanger' }
    ]
  },
  {
    id: '11',
    title: 'Wohnen — Living',
    icon: 'Home',
    image: '/images/schreiben/topic11_wohnen.jpg',
    bildbeschreibung: [
      { de: "Auf dem Bild sehe ich ein Wohnzimmer.", en: "In the picture I see a living room." },
      { de: "Es gibt keine Personen im Zimmer.", en: "There are no people in the room." },
      { de: "Links steht ein großes, graues Sofa.", en: "On the left stands a large gray sofa." },
      { de: "Auf dem Sofa liegt eine gelbe Decke.", en: "On the sofa lies a yellow blanket." },
      { de: "In der Mitte steht ein kleiner Tisch.", en: "In the middle stands a small table." },
      { de: "Auf dem Tisch steht eine Tasse.", en: "On the table stands a cup." },
      { de: "Rechts steht eine grüne Pflanze auf einem Hocker.", en: "On the right stands a green plant on a stool." },
      { de: "Im Hintergrund ist ein großes Fenster.", en: "In the background is a large window." },
      { de: "Der Boden ist aus Holz.", en: "The floor is made of wood." },
      { de: "Das Zimmer ist hell und sauber.", en: "The room is bright and clean." },
      { de: "Ich glaube, die Wohnung ist sehr gemütlich.", en: "I think the apartment is very cozy." }
    ],
    situation: [
      {
            "de": "Welches Zimmer sehen Sie?",
            "en": "Which room do you see?"
      },
      {
            "de": "→ Auf dem Bild sehe ich ein Wohnzimmer.",
            "en": "→ In the picture I see a living room.",
            "isAnswer": true
      },
      {
            "de": "Welche Möbel stehen im Zimmer?",
            "en": "Which furniture is in the room?"
      },
      {
            "de": "→ Im Zimmer stehen ein Sofa, ein Tisch und ein Regal.",
            "en": "→ In the room are a sofa, a table, and a shelf.",
            "isAnswer": true
      },
      {
            "de": "Was steht im Regal?",
            "en": "What is on the shelf?"
      },
      {
            "de": "→ Im Regal stehen viele Bücher.",
            "en": "→ On the shelf are many books.",
            "isAnswer": true
      }
],
    vocabulary: [
      { de: 'das Wohnzimmer', en: 'the living room' },
      { de: 'gemütlich', en: 'cozy' },
      { de: 'das Fenster', en: 'the window' },
      { de: 'das Sofa / die Couch', en: 'the sofa' },
      { de: 'das Kissen', en: 'the pillow / cushion' },
      { de: 'der Tisch', en: 'the table' },
      { de: 'das Regal', en: 'the shelf' },
      { de: 'das Buch', en: 'the book' },
      { de: 'die Pflanze', en: 'the plant' },
      { de: 'die Lampe', en: 'the lamp' }
    ]
  },
  {
    id: '12',
    title: 'Arbeit und Schule — Work & School',
    icon: 'Briefcase',
    image: '/images/schreiben/topic12_arbeit.jpg',
    bildbeschreibung: [
      { de: "Auf dem Bild sehe ich viele Personen.", en: "In the picture I see many people." },
      { de: "Sie sind in einer Bibliothek (oder: einer Universität).", en: "They are in a library (or: a university)." },
      { de: "Im Vordergrund sitzt eine Frau an einem Tisch.", en: "In the foreground a woman is sitting at a table." },
      { de: "Sie trägt einen orangen Pullover und eine Brille.", en: "She is wearing an orange sweater and glasses." },
      { de: "Sie arbeitet mit einem Laptop.", en: "She is working with a laptop." },
      { de: "Auf dem Tisch liegt ein Buch.", en: "A book is lying on the table." },
      { de: "Im Hintergrund stehen vier Personen.", en: "In the background four people are standing." },
      { de: "Sie sprechen zusammen und lachen.", en: "They are talking together and laughing." },
      { de: "Links sehe ich viele Bücher und Regale.", en: "On the left I see many books and shelves." },
      { de: "Rechts ist ein großes Fenster.", en: "On the right is a large window." },
      { de: "Alle Personen sind freundlich.", en: "All people are friendly." },
      { de: "Ich glaube, die Frau lernt für die Schule.", en: "I think the woman is studying for school." }
    ],
    situation: [
      {
            "de": "Was sehen Sie?",
            "en": "What do you see?"
      },
      {
            "de": "→ Auf dem Bild sehe ich eine Frau am Tisch in einer Bibliothek.",
            "en": "→ In the picture I see a woman at a table in a library.",
            "isAnswer": true
      },
      {
            "de": "Was macht die Frau?",
            "en": "What is the woman doing?"
      },
      {
            "de": "→ Sie sitzt am Tisch und lernt an ihrem Laptop.",
            "en": "→ She sits at the table and studies on her laptop.",
            "isAnswer": true
      },
      {
            "de": "Was machen die Personen im Hintergrund?",
            "en": "What are the people in the background doing?"
      },
      {
            "de": "→ Sie stehen am Fenster, sprechen und trinken Kaffee.",
            "en": "→ They are standing by the window, talking, and drinking coffee.",
            "isAnswer": true
      }
],
    vocabulary: [
      { de: 'die Universität / die Uni', en: 'the university' },
      { de: 'der Student / die Studentin', en: 'the student' },
      { de: 'lernen', en: 'to study / to learn' },
      { de: 'arbeiten', en: 'to work' },
      { de: 'der Laptop / der Computer', en: 'the laptop / computer' },
      { de: 'die Brille', en: 'the glasses' },
      { de: 'das Fenster', en: 'the window' },
      { de: 'die Pause', en: 'the break' },
      { de: 'sprechen / reden', en: 'to talk / to speak' },
      { de: 'lachen', en: 'to laugh' },
      { de: 'die Tasse Kaffee', en: 'the cup of coffee' },
      { de: 'die Bibliothek / die Bücherei', en: 'the library' }
    ]
  }
];
