import { Topic } from '../types';
import img1 from '../assets/images/topic1_furniture_1788358820181.jpg';
import img2 from '../assets/images/topic2_clothes_1788358835429.jpg';
import img3 from '../assets/images/topic3_car_1788358851097.jpg';
import img4 from '../assets/images/topic4_hiking_1788358865080.jpg';
import img5 from '../assets/images/topic5_family_1788358882183.jpg';
import img6 from '../assets/images/topic6_bahnhof_1788511638708.jpg';
import img7 from '../assets/images/topic7_blue_dress_1788358912340.jpg';
import img8 from '../assets/images/topic8_essen_trinken_1788359070095.jpg';
import img9 from '../assets/images/topic9_einkaufen_1788359089142.jpg';
import img10 from '../assets/images/topic10_freizeit_1788359109414.jpg';
import img11 from '../assets/images/topic11_wohnen_1788512042210.jpg';
import img12 from '../assets/images/topic12_arbeit_1788359145759.jpg';
import img13 from '../assets/images/topic13_sich_vorstellen.png';
import img14 from '../assets/images/topic14_buchhandlung.png';
import img15 from '../assets/images/topic15_schuhgeschaeft.png';
import img16 from '../assets/images/topic16_autowerkstatt.png';
import img17 from '../assets/images/topic17_hotelrezeption.jpg';
import img18 from '../assets/images/topic18_arzt.png';
import img19 from '../assets/images/topic19_fernsehen.png';
import img20 from '../assets/images/topic20_reinigung.png';
import img21 from '../assets/images/topic21_umzug.png';
import img22 from '../assets/images/topic22_grillen.png';
import img0 from '../assets/images/topic0_wortschatz.jpg';

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
    image: img0,
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
    image: img13,
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
    image: img14,
    bildbeschreibung: [
      {
            "de": "Auf dem Bild sehe ich einen Mann und eine Frau.",
            "en": "In the picture I see a man and a woman."
      },
      {
            "de": "Sie sind in einer Buchhandlung.",
            "en": "They are in a bookstore."
      },
      {
            "de": "Links sehe ich einen Mann. Er ist Kunde.",
            "en": "On the left I see a man. He is a customer."
      },
      {
            "de": "Rechts sehe ich eine Frau. Sie ist Verkäuferin.",
            "en": "On the right I see a woman. She is a saleswoman."
      },
      {
            "de": "Der Mann trägt ein Hemd.",
            "en": "The man is wearing a shirt."
      },
      {
            "de": "Im Hintergrund sehe ich viele Bücher in Regalen.",
            "en": "In the background I see many books on shelves."
      },
      {
            "de": "Sie sprechen und lachen.",
            "en": "They are talking and laughing."
      },
      {
            "de": "Ich glaube, der Mann möchte ein Buch kaufen.",
            "en": "I think the man wants to buy a book."
      }
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
    image: img15,
    bildbeschreibung: [
      {
            "de": "Auf dem Bild sehe ich einen Mann und eine Frau.",
            "en": "In the picture I see a man and a woman."
      },
      {
            "de": "Sie sind in einem Schuhgeschäft.",
            "en": "They are in a shoe store."
      },
      {
            "de": "Links sitzt ein Mann auf einem Stuhl.",
            "en": "On the left a man is sitting on a chair."
      },
      {
            "de": "Rechts steht eine Frau.",
            "en": "On the right stands a woman."
      },
      {
            "de": "In der Mitte sehe ich Schuhe.",
            "en": "In the middle I see shoes."
      },
      {
            "de": "Die Frau zeigt dem Mann einen Schuh.",
            "en": "The woman shows the man a shoe."
      },
      {
            "de": "Im Hintergrund sehe ich viele Schuhe im Regal.",
            "en": "In the background I see many shoes on the shelf."
      },
      {
            "de": "Ich glaube, der Mann möchte Schuhe kaufen.",
            "en": "I think the man wants to buy shoes."
      }
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
    image: img16,
    bildbeschreibung: [
      {
            "de": "Auf dem Bild sehe ich einen Mann und eine Frau.",
            "en": "In the picture I see a man and a woman."
      },
      {
            "de": "Sie sind in einer Autowerkstatt.",
            "en": "They are in a car repair shop."
      },
      {
            "de": "In der Mitte steht ein rotes Auto.",
            "en": "In the middle stands a red car."
      },
      {
            "de": "Das Auto ist kaputt.",
            "en": "The car is broken."
      },
      {
            "de": "Links steht ein Mann. Er ist Mechaniker.",
            "en": "On the left stands a man. He is a mechanic."
      },
      {
            "de": "Rechts steht eine Frau.",
            "en": "On the right stands a woman."
      },
      {
            "de": "Sie sprechen über das Auto.",
            "en": "They are talking about the car."
      },
      {
            "de": "Ich glaube, der Mann repariert das Auto.",
            "en": "I think the man repairs the car."
      }
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
    image: img17,
    bildbeschreibung: [
      {
            "de": "Auf dem Bild sehe ich zwei Personen: einen Mann und eine Frau.",
            "en": "In the picture I see two people: a man and a woman."
      },
      {
            "de": "Sie sind an der Hotelrezeption.",
            "en": "They are at the hotel reception."
      },
      {
            "de": "Links steht ein Mann. Er arbeitet im Hotel.",
            "en": "On the left stands a man. He works at the hotel."
      },
      {
            "de": "Rechts steht eine Frau mit einem Koffer.",
            "en": "On the right stands a woman with a suitcase."
      },
      {
            "de": "Die Personen sprechen und lächeln.",
            "en": "The people are talking and smiling."
      },
      {
            "de": "Der Mann hilft der Frau.",
            "en": "The man helps the woman."
      },
      {
            "de": "Ich glaube, die Frau möchte ein Zimmer buchen.",
            "en": "I think the woman wants to book a room."
      }
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
    image: img18,
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
    image: img19,
    bildbeschreibung: [
      { de: "Auf dem Bild sehe ich ein Wohnzimmer und einen Fernseher.", en: "In the picture I see a living room and a television." },
      { de: "Ich sehe zwei Personen: einen Mann und eine Frau.", en: "I see two people: a man and a woman." },
      { de: "Sie sind zu Hause im Wohnzimmer.", en: "They are at home in the living room." },
      { de: "Sie sitzen auf dem Sofa.", en: "They are sitting on the sofa." },
      { de: "Der Mann hält eine Fernbedienung in der Hand.", en: "The man is holding a remote control in his hand." },
      { de: "Sie sehen fern und schauen eine Kochshow.", en: "They are watching TV and watching a cooking show." },
      { de: "An der Wand hängt ein moderner Fernseher.", en: "On the wall hangs a modern television." },
      { de: "Im Hintergrund steht ein weißes Regal mit Büchern und Schachteln.", en: "In the background stands a white shelf with books and boxes." },
      { de: "Auf dem Boden liegt ein heller Teppich.", en: "On the floor lies a light carpet." },
      { de: "Ich glaube, die beiden Personen entspannen sich zu Hause.", en: "I think the two people are relaxing at home." }
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
    image: img20,
    bildbeschreibung: [
      { de: "Auf dem Bild sehe ich Kleidung und ein blaues Kleid.", en: "In the picture I see clothes and a blue dress." },
      { de: "Ich sehe zwei Personen. Das sind zwei Frauen.", en: "I see two people. They are two women." },
      { de: "Sie sind in einem Geschäft oder in einer Reinigung.", en: "They are in a shop or at a dry cleaner's." },
      { de: "Links steht eine Frau im weißen Hemd und hält ein blaues Kleid.", en: "On the left stands a woman in a white shirt holding a blue dress." },
      { de: "Rechts steht eine Frau mit einem gelben Pullover.", en: "On the right stands a woman with a yellow sweater." },
      { de: "Sie kaufen Kleidung. Sie sprechen und lachen.", en: "They are buying clothes. They are speaking and laughing." },
      { de: "Im Hintergrund hängen viele Kleider in Plastikschutzhüllen.", en: "In the background hang many clothes in plastic garment covers." },
      { de: "Die beiden Frauen sind sehr fröhlich und glücklich.", en: "Both women are very cheerful and happy." },
      { de: "Ich glaube, die Kundin holt ihr schönes Kleid ab.", en: "I think the customer is picking up her beautiful dress." }
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
    image: img21,
    bildbeschreibung: [
      { de: "Auf dem Bild sehe ich viele Kartons und einen Teppich.", en: "In the picture I see many boxes and a carpet." },
      { de: "Ich sehe zwei Personen: einen Mann und eine Frau.", en: "I see two people: a man and a woman." },
      { de: "Sie sind in einer neuen Wohnung.", en: "They are in a new apartment." },
      { de: "Links steht der Mann und trägt einen großen Umzugskarton.", en: "On the left the man stands and carries a large moving box." },
      { de: "Rechts sitzt die Frau auf dem Boden und packt Sachen aus.", en: "On the right the woman sits on the floor and unpacks things." },
      { de: "Sie machen einen Umzug. Sie packen die Sachen aus.", en: "They are moving. They are unpacking the things." },
      { de: "Im Vordergrund liegt ein aufgerollter Teppich.", en: "In the foreground lies a rolled-up carpet." },
      { de: "Im Raum stehen viele gestapelte Pappkartons und eine Pflanze.", en: "In the room there are many stacked cardboard boxes and a plant." },
      { de: "Die beiden Personen lächeln und freuen sich auf die neue Wohnung.", en: "Both people are smiling and looking forward to the new apartment." }
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
    image: img22,
    bildbeschreibung: [
      { de: "Auf dem Bild sehe ich einen Grill und Essen.", en: "In the picture I see a grill and food." },
      { de: "Ich sehe zwei Personen im Vordergrund: einen Mann und eine Frau.", en: "I see two people in the foreground: a man and a woman." },
      { de: "Sie sind draußen im Garten.", en: "They are outside in the garden." },
      { de: "Der Mann trägt eine Schürze und steht am Grill.", en: "The man is wearing an apron and standing at the grill." },
      { de: "Die Frau hält einen weißen Teller mit Essen.", en: "The woman is holding a white plate with food." },
      { de: "Sie grillen Fleisch und machen eine Party.", en: "They are grilling meat and having a party." },
      { de: "Das Wetter ist sehr schön und sonnig.", en: "The weather is very nice and sunny." },
      { de: "Im Hintergrund sitzen weitere Freunde am Tisch.", en: "In the background more friends are sitting at the table." },
      { de: "Alle Personen haben Spaß und genießen den Sommertag.", en: "All people are having fun and enjoying the summer day." }
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
    id: '8',
    title: 'Essen und Trinken — Food and Drinks',
    icon: 'Coffee',
    image: img8,
    bildbeschreibung: [
      {
            "de": "Auf dem Bild sehe ich Essen und Trinken auf einem Tisch.",
            "en": "In the picture I see food and drinks on a table."
      },
      {
            "de": "In der Mitte steht ein weißer Teller mit Reis und Hähnchen.",
            "en": "In the middle stands a white plate with rice and chicken."
      },
      {
            "de": "Links steht eine Tasse Kaffee.",
            "en": "On the left stands a cup of coffee."
      },
      {
            "de": "Rechts sehe ich Obst: Melone und Kiwi.",
            "en": "On the right I see fruit: melon and kiwi."
      },
      {
            "de": "Oben rechts steht ein Glas Wasser.",
            "en": "At the top right stands a glass of water."
      },
      {
            "de": "Neben dem Teller liegen eine Gabel und ein Löffel.",
            "en": "Next to the plate lie a fork and a spoon."
      },
      {
            "de": "Das Essen sieht sehr lecker und frisch aus.",
            "en": "The food looks very delicious and fresh."
      },
      {
            "de": "Ich glaube, das ist ein gesundes Mittagessen.",
            "en": "I think this is a healthy lunch."
      }
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
    image: img9,
    bildbeschreibung: [
      {
            "de": "Auf dem Bild sehe ich zwei Frauen im Supermarkt.",
            "en": "In the picture I see two women in the supermarket."
      },
      {
            "de": "Links steht eine Kundin und kauft ein.",
            "en": "On the left stands a customer and shops."
      },
      {
            "de": "Rechts sitzt eine Kassiererin an der Kasse.",
            "en": "On the right sits a cashier at the checkout."
      },
      {
            "de": "Auf dem Kassenband sehe ich Obst und Gemüse.",
            "en": "On the conveyor belt I see fruit and vegetables."
      },
      {
            "de": "Die Kundin bezahlt mit Geld.",
            "en": "The customer pays with money."
      },
      {
            "de": "Die Frauen sprechen und lachen freundlich.",
            "en": "The women talk and laugh friendly."
      },
      {
            "de": "Ich glaube, die Kundin kauft Essen für heute Abend.",
            "en": "I think the customer is buying food for tonight."
      }
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
    image: img10,
    bildbeschreibung: [
      {
            "de": "Auf dem Bild sehe ich Freunde im Garten.",
            "en": "In the picture I see friends in the garden."
      },
      {
            "de": "Das Wetter ist sehr schön und die Sonne scheint.",
            "en": "The weather is very nice and the sun is shining."
      },
      {
            "de": "Vorne liegt eine Frau auf einer Decke und liest ein Buch.",
            "en": "In front a woman lies on a blanket and reads a book."
      },
      {
            "de": "Zwei Männer sitzen auf dem Gras und trinken Bier.",
            "en": "Two men are sitting on the grass and drinking beer."
      },
      {
            "de": "Auf dem Boden liegt ein Fußball.",
            "en": "On the ground lies a soccer ball."
      },
      {
            "de": "Im Hintergrund sitzen Freunde an einem Tisch.",
            "en": "In the background friends are sitting at a table."
      },
      {
            "de": "Sie sprechen und lachen.",
            "en": "They are talking and laughing."
      },
      {
            "de": "Ich glaube, sie haben Wochenende und entspannen sich.",
            "en": "I think it is the weekend and they are relaxing."
      }
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
    image: img5,
    bildbeschreibung: [
      {
            "de": "Auf dem Bild sehe ich eine Familie am Flughafen.",
            "en": "In the picture I see a family at the airport."
      },
      {
            "de": "Ich sehe fünf Personen: die Eltern und drei Kinder.",
            "en": "I see five people: the parents and three children."
      },
      {
            "de": "Sie stehen vor Gate 24.",
            "en": "They are standing in front of gate 24."
      },
      {
            "de": "Sie haben Koffer und Taschen dabei.",
            "en": "They have suitcases and bags with them."
      },
      {
            "de": "Ein Koffer ist rot.",
            "en": "One suitcase is red."
      },
      {
            "de": "Alle Personen lachen und freuen sich.",
            "en": "All people are laughing and happy."
      },
      {
            "de": "Im Hintergrund sehe ich Bildschirme.",
            "en": "In the background I see screens."
      },
      {
            "de": "Ich glaube, die Familie fliegt in den Urlaub.",
            "en": "I think the family is flying on vacation."
      }
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
    image: img6,
    bildbeschreibung: [
      {
            "de": "Auf dem Bild sehe ich einen Bahnhof.",
            "en": "In the picture I see a train station."
      },
      {
            "de": "Am Gleis steht ein roter Zug.",
            "en": "At the track stands a red train."
      },
      {
            "de": "Auf dem Bahnsteig steht eine Familie.",
            "en": "On the platform stands a family."
      },
      {
            "de": "Sie haben Koffer dabei.",
            "en": "They have suitcases with them."
      },
      {
            "de": "Ein Koffer ist rot und ein Koffer ist blau.",
            "en": "One suitcase is red and one suitcase is blue."
      },
      {
            "de": "Die Personen warten auf den Zug.",
            "en": "The people are waiting for the train."
      },
      {
            "de": "Der Zug fährt nach Frankfurt.",
            "en": "The train goes to Frankfurt."
      },
      {
            "de": "Ich glaube, die Familie macht eine Reise.",
            "en": "I think the family is going on a trip."
      }
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
    image: img2,
    bildbeschreibung: [
      {
            "de": "Auf dem Bild sehe ich einen Mann und eine Frau.",
            "en": "In the picture I see a man and a woman."
      },
      {
            "de": "Sie sind in einem Geschäft für Kleidung.",
            "en": "They are in a clothing store."
      },
      {
            "de": "Links steht ein Mann mit einem blauen Hemd.",
            "en": "On the left stands a man with a blue shirt."
      },
      {
            "de": "Rechts steht eine Frau mit einem gelben Pullover.",
            "en": "On the right stands a woman with a yellow sweater."
      },
      {
            "de": "Die Frau hat eine grüne Jacke in der Hand.",
            "en": "The woman has a green jacket in her hand."
      },
      {
            "de": "Sie sprechen und lachen.",
            "en": "They are talking and laughing."
      },
      {
            "de": "Im Hintergrund hängen viele Kleider.",
            "en": "In the background hang many clothes."
      },
      {
            "de": "Ich glaube, die Frau möchte die Jacke kaufen.",
            "en": "I think the woman wants to buy the jacket."
      }
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
    image: img1,
    bildbeschreibung: [
      {
            "de": "Auf dem Bild sehe ich ein Möbelgeschäft.",
            "en": "In the picture I see a furniture store."
      },
      {
            "de": "Ich sehe drei Personen: einen Mann und zwei Frauen.",
            "en": "I see three people: a man and two women."
      },
      {
            "de": "In der Mitte steht ein graues Sofa.",
            "en": "In the middle stands a gray sofa."
      },
      {
            "de": "Rechts steht eine Verkäuferin. Sie arbeitet hier.",
            "en": "On the right stands a saleswoman. She works here."
      },
      {
            "de": "Links stehen ein Mann und eine Frau.",
            "en": "On the left stand a man and a woman."
      },
      {
            "de": "Sie sprechen über das Sofa.",
            "en": "They are talking about the sofa."
      },
      {
            "de": "Im Hintergrund sehe ich einen Tisch und Stühle.",
            "en": "In the background I see a table and chairs."
      },
      {
            "de": "Ich glaube, sie möchten ein Sofa kaufen.",
            "en": "I think they want to buy a sofa."
      }
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
    image: img3,
    bildbeschreibung: [
      {
            "de": "Auf dem Bild sehe ich zwei Frauen vor einem Haus.",
            "en": "In the picture I see two women in front of a house."
      },
      {
            "de": "Das sind eine Mutter und ihre Tochter.",
            "en": "Those are a mother and her daughter."
      },
      {
            "de": "Im Hintergrund steht ein rotes Auto.",
            "en": "In the background stands a red car."
      },
      {
            "de": "Links steht die Mutter mit einer blauen Jacke.",
            "en": "On the left stands the mother with a blue jacket."
      },
      {
            "de": "Rechts steht die Tochter mit einem grünen Pullover.",
            "en": "On the right stands the daughter with a green sweater."
      },
      {
            "de": "Die Mutter gibt der Tochter einen Autoschlüssel.",
            "en": "The mother gives the daughter a car key."
      },
      {
            "de": "Sie lachen und freuen sich.",
            "en": "They are laughing and happy."
      },
      {
            "de": "Ich glaube, das rote Auto ist ein Geschenk.",
            "en": "I think the red car is a gift."
      }
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
    image: img4,
    bildbeschreibung: [
      {
            "de": "Auf dem Bild sehe ich zwei Frauen in den Bergen.",
            "en": "In the picture I see two women in the mountains."
      },
      {
            "de": "Sie sind draußen in der Natur.",
            "en": "They are outside in nature."
      },
      {
            "de": "Links sehe ich eine Frau mit einer roten Jacke.",
            "en": "On the left I see a woman with a red jacket."
      },
      {
            "de": "Rechts sehe ich eine Frau mit einer blauen Jacke.",
            "en": "On the right I see a woman with a blue jacket."
      },
      {
            "de": "Beide Frauen tragen einen Rucksack.",
            "en": "Both women carry a backpack."
      },
      {
            "de": "Im Hintergrund sehe ich Berge mit Schnee.",
            "en": "In the background I see mountains with snow."
      },
      {
            "de": "Sie gehen und sprechen zusammen.",
            "en": "They are walking and talking together."
      },
      {
            "de": "Ich glaube, das Wetter ist sehr schön.",
            "en": "I think the weather is very nice."
      }
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
    image: img7,
    bildbeschreibung: [
      {
            "de": "Auf dem Bild sehe ich zwei Frauen in einem Geschäft.",
            "en": "In the picture I see two women in a shop."
      },
      {
            "de": "Sie schauen Kleidung an.",
            "en": "They are looking at clothes."
      },
      {
            "de": "Links sehe ich eine Frau mit einem hellen Pullover.",
            "en": "On the left I see a woman with a light sweater."
      },
      {
            "de": "Sie hält ein blaues Kleid in der Hand.",
            "en": "She holds a blue dress in her hand."
      },
      {
            "de": "Rechts sehe ich eine Frau mit einer Jacke.",
            "en": "On the right I see a woman with a jacket."
      },
      {
            "de": "Sie lachen und sprechen zusammen.",
            "en": "They are laughing and talking together."
      },
      {
            "de": "Im Hintergrund sehe ich viele Kleider.",
            "en": "In the background I see many clothes."
      },
      {
            "de": "Ich glaube, die Frau möchte das blaue Kleid kaufen.",
            "en": "I think the woman wants to buy the blue dress."
      }
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
    image: img11,
    bildbeschreibung: [
      {
            "de": "Auf dem Bild sehe ich ein helles Wohnzimmer.",
            "en": "In the picture I see a bright living room."
      },
      {
            "de": "In der Mitte sehe ich ein großes Fenster.",
            "en": "In the middle I see a big window."
      },
      {
            "de": "Links steht ein graues Sofa mit Kissen.",
            "en": "On the left stands a gray sofa with pillows."
      },
      {
            "de": "Vor dem Sofa steht ein kleiner Tisch.",
            "en": "In front of the sofa stands a small table."
      },
      {
            "de": "Rechts sehe ich ein weißes Regal mit Büchern.",
            "en": "On the right I see a white shelf with books."
      },
      {
            "de": "Auf einem Hocker steht eine grüne Pflanze.",
            "en": "On a stool stands a green plant."
      },
      {
            "de": "Das Zimmer ist sauber und schön.",
            "en": "The room is clean and nice."
      },
      {
            "de": "Ich glaube, das Wohnzimmer ist sehr gemütlich.",
            "en": "I think the living room is very cozy."
      }
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
    image: img12,
    bildbeschreibung: [
      {
            "de": "Auf dem Bild sehe ich eine Bibliothek.",
            "en": "In the picture I see a library."
      },
      {
            "de": "Vorne sitzt eine junge Frau an einem Tisch.",
            "en": "In front sits a young woman at a table."
      },
      {
            "de": "Sie trägt eine Brille.",
            "en": "She wears glasses."
      },
      {
            "de": "Sie arbeitet an einem Laptop.",
            "en": "She works on a laptop."
      },
      {
            "de": "Auf dem Tisch stehen eine Tasse und eine Flasche.",
            "en": "On the table are a cup and a bottle."
      },
      {
            "de": "Im Hintergrund stehen vier Personen am Fenster.",
            "en": "In the background four people stand by the window."
      },
      {
            "de": "An der Wand sehe ich Regale mit vielen Büchern.",
            "en": "On the wall I see shelves with many books."
      },
      {
            "de": "Ich glaube, sie lernen für eine Prüfung.",
            "en": "I think they are studying for an exam."
      }
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
