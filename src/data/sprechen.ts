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
      { de: "Auf dem Bild sehe ich einen Mann und eine Frau.", en: "In the picture I see a man and a woman." },
      { de: "Sie sind in einer Buchhandlung.", en: "They are in a bookstore." },
      { de: "Links sehe ich einen Kunden.", en: "On the left I see a customer." },
      { de: "Rechts sehe ich eine Verkäuferin.", en: "On the right I see a saleswoman." },
      { de: "Der Mann trägt ein blaues Hemd.", en: "The man is wearing a blue shirt." },
      { de: "Die Verkäuferin trägt eine gelbe Jacke.", en: "The saleswoman is wearing a yellow jacket." },
      { de: "Im Hintergrund sehe ich viele Bücher in den Regalen.", en: "In the background I see many books on the shelves." },
      { de: "Die beiden Personen sind glücklich.", en: "Both people are happy." },
      { de: "Sie lachen.", en: "They are laughing." },
      { de: "Ich glaube, der Kunde möchte ein Buch kaufen.", en: "I think the customer wants to buy a book." }
    ],
    situation: [
      { de: "Wie viele Personen sehen Sie?", en: "How many people do you see?" },
      { de: "→ Ich sehe zwei Personen: einen Mann und eine Frau.", en: "→ I see two people: a man and a woman.", isAnswer: true },
      { de: "Wo sind diese Personen?", en: "Where are these people?" },
      { de: "→ Sie sind in einer Buchhandlung oder einer Bibliothek.", en: "→ They are in a bookstore or a library.", isAnswer: true },
      { de: "Was machen diese Personen?", en: "What are these people doing?" },
      { de: "→ Der Mann kauft ein Buch und spricht mit der Verkäuferin.", en: "→ The man is buying a book and talking to the saleswoman.", isAnswer: true }
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
      { de: "Auf dem Bild sehe ich einen Mann und eine Frau.", en: "In the picture I see a man and a woman." },
      { de: "Sie sind in einem Schuhgeschäft.", en: "They are in a shoe store." },
      { de: "Links sitzt ein Mann auf einem roten Stuhl.", en: "On the left sits a man on a red chair." },
      { de: "Er ist der Kunde und schaut sich Schuhe an.", en: "He is the customer and looks at shoes." },
      { de: "Rechts steht eine Verkäuferin und zeigt ihm einen Schuh.", en: "On the right stands a saleswoman and shows him a shoe." },
      { de: "Der Mann hat eine Mütze auf dem Kopf.", en: "The man has a cap on his head." },
      { de: "Die Frau trägt eine schwarze Hose und ein schwarzes Oberteil.", en: "The woman is wearing black pants and a black top." },
      { de: "Auf dem Boden liegen Kartons und Schuhe.", en: "On the floor there are boxes and shoes." },
      { de: "Im Hintergrund sehe ich viele Schuhe in Regalen.", en: "In the background I see many shoes on shelves." },
      { de: "Ich glaube, der Mann möchte neue Schuhe kaufen.", en: "I think the customer wants to buy new shoes." }
    ],
    situation: [
      { de: "Wie viele Personen sehen Sie?", en: "How many people do you see?" },
      { de: "→ Ich sehe zwei Personen: einen Mann und eine Frau.", en: "→ I see two people: a man and a woman.", isAnswer: true },
      { de: "Wo sind diese Personen?", en: "Where are these people?" },
      { de: "→ Sie sind in einem Schuhgeschäft.", en: "→ They are in a shoe store.", isAnswer: true },
      { de: "Was machen diese Personen?", en: "What are these people doing?" },
      { de: "→ Der Mann probiert Schuhe an und die Verkäuferin hilft ihm.", en: "→ The man is trying on shoes and the saleswoman is helping him.", isAnswer: true }
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
      { de: "Auf dem Bild sehe ich einen Mann und eine Frau.", en: "In the picture I see a man and a woman." },
      { de: "Sie sind in einer Autowerkstatt.", en: "They are in a car repair shop." },
      { de: "In der Mitte steht ein rotes Auto.", en: "In the middle stands a red car." },
      { de: "Die Motorhaube vom Auto ist offen.", en: "The hood of the car is open." },
      { de: "Links steht der Mechaniker mit einer schwarzen Latzhose.", en: "On the left stands the mechanic with black overalls." },
      { de: "Er hält Dokumente in der Hand.", en: "He holds documents in his hand." },
      { de: "Rechts steht die Kundin mit einer blauen Jeansjacke.", en: "On the right stands the female customer with a blue denim jacket." },
      { de: "Die beiden Personen sprechen über das Auto.", en: "Both people are talking about the car." },
      { de: "Das rote Auto ist kaputt.", en: "The red car is broken." },
      { de: "Ich glaube, der Mechaniker repariert das Auto.", en: "I think the mechanic repairs the car." }
    ],
    situation: [
      { de: "Wie viele Personen sehen Sie?", en: "How many people do you see?" },
      { de: "→ Ich sehe zwei Personen: einen Mann und eine Frau.", en: "→ I see two people: a man and a woman.", isAnswer: true },
      { de: "Wo sind diese Personen?", en: "Where are these people?" },
      { de: "→ Sie sind in einer Autowerkstatt.", en: "→ They are in a car repair shop.", isAnswer: true },
      { de: "Was machen diese Personen?", en: "What are these people doing?" },
      { de: "→ Sie sprechen über das rote Auto. Das Auto ist kaputt.", en: "→ They are talking about the red car. The car is broken.", isAnswer: true }
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
      { de: "Auf dem Bild sehe ich zwei Personen.", en: "In the picture I see two people." },
      { de: "Sie sind an einer Hotelrezeption.", en: "They are at a hotel reception." },
      { de: "Links steht ein Mann hinter der Rezeption.", en: "On the left stands a man behind the reception." },
      { de: "Er ist der Mitarbeiter im Hotel.", en: "He is the employee at the hotel." },
      { de: "Rechts steht eine Frau mit einem Koffer.", en: "On the right stands a woman with a suitcase." },
      { de: "Sie ist der Gast.", en: "She is the guest." },
      { de: "Beide Personen sind gut angezogen.", en: "Both people are well-dressed." },
      { de: "Der Mann gibt der Frau eine Zimmerkarte.", en: "The man gives the woman a room card." },
      { de: "Die beiden Personen lächeln und sind freundlich.", en: "Both people are smiling and friendly." },
      { de: "Ich glaube, die Frau möchte ein Zimmer für eine Woche buchen.", en: "I think the woman wants to book a room for one week." }
    ],
    situation: [
      { de: "Wer arbeitet im Hotel?", en: "Who works in the hotel?" },
      { de: "→ Der Mann ist der Mitarbeiter und arbeitet im Hotel.", en: "→ The man is the employee and works in the hotel.", isAnswer: true },
      { de: "Was möchte die Frau machen?", en: "What does the woman want to do?" },
      { de: "→ Sie möchte ein Hotelzimmer reservieren.", en: "→ She wants to reserve a hotel room.", isAnswer: true },
      { de: "Wie lange möchte sie bleiben?", en: "How long does she want to stay?" },
      { de: "→ Sie möchte eine Woche bleiben.", en: "→ She wants to stay for one week.", isAnswer: true },
      { de: "Möchte sie Frühstück haben?", en: "Does she want to have breakfast?" },
      { de: "→ Ja, sie möchte ein Zimmer mit Frühstück.", en: "→ Yes, she wants a room with breakfast.", isAnswer: true }
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
      { de: "Auf dem Bild sehe ich zwei Personen.", en: "In the picture I see two people." },
      { de: "Links sitzt ein Arzt und rechts sitzt eine Patientin.", en: "On the left sits a doctor and on the right sits a patient." },
      { de: "Sie sind in einer Arztpraxis oder in einem Krankenhaus.", en: "They are in a doctor's office or in a hospital." },
      { de: "Der Arzt trägt einen weißen Kittel und ein Stethoskop.", en: "The doctor is wearing a white coat and a stethoscope." },
      { de: "Die Frau hat Schmerzen.", en: "The woman is in pain." },
      { de: "Sie hält ihren Kopf und ihren Bauch.", en: "She is holding her head and her stomach." },
      { de: "Sie hat Kopfschmerzen und Bauchschmerzen.", en: "She has a headache and a stomachache." },
      { de: "Der Arzt schaut die Frau an und hört zu.", en: "The doctor looks at the woman and listens." },
      { de: "Im Hintergrund sehe ich ein Fenster und Plakate an der Wand.", en: "In the background I see a window and posters on the wall." },
      { de: "Ich glaube, die Frau ist krank und braucht ein Medikament.", en: "I think the woman is sick and needs medication." }
    ],
    situation: [
      { de: "Wer ist auf dem Bild zu sehen?", en: "Who can be seen in the picture?" },
      { de: "→ Ich sehe einen Arzt und eine kranke Patientin.", en: "→ I see a doctor and a sick patient.", isAnswer: true },
      { de: "Wo befinden sich die Personen?", en: "Where are the people located?" },
      { de: "→ Sie sind in einer Arztpraxis.", en: "→ They are in a doctor's office.", isAnswer: true },
      { de: "Welche Probleme oder Symptome hat die Frau?", en: "What problems or symptoms does the woman have?" },
      { de: "→ Sie hat Kopfschmerzen und Bauchschmerzen. Sie fühlt sich nicht gut.", en: "→ She has a headache and a stomachache. She does not feel well.", isAnswer: true },
      { de: "Was macht der Arzt von Beruf?", en: "What is the doctor's profession?" },
      { de: "→ Er ist Arzt oder Mediziner.", en: "→ He is a doctor or a medical professional.", isAnswer: true }
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
      { de: "Auf dem Bild sehe ich ein leckeres Essen auf einem Holztisch.", en: "In the picture I see a delicious meal on a wooden table." },
      { de: "In der Mitte steht ein weißer Teller mit Reis und Hähnchen.", en: "In the middle stands a white plate with rice and chicken." },
      { de: "Rechts steht eine Schale mit frischem Obst.", en: "On the right stands a bowl with fresh fruit." },
      { de: "In der Schale sehe ich Melone, Weintrauben und Kiwi.", en: "In the bowl I see melon, grapes, and kiwi." },
      { de: "Links steht eine Tasse mit heißem Kaffee.", en: "On the left stands a cup with hot coffee." },
      { de: "Oben rechts sehe ich ein Glas Wasser mit Zitrone.", en: "At the top right I see a glass of water with lemon." },
      { de: "Neben dem Teller liegen eine Gabel und ein Löffel.", en: "Next to the plate lie a fork and a spoon." },
      { de: "Alles sieht sehr frisch und gesund aus.", en: "Everything looks very fresh and healthy." },
      { de: "Ich glaube, das ist ein Mittagessen.", en: "I think this is lunch." }
    ],
    situation: [
      { de: 'Was liegt auf dem Teller?', en: 'What is on the plate?' },
      { de: '→ Auf dem Teller ist Reis mit Hähnchen.', en: '→ On the plate is rice with chicken.', isAnswer: true },
      { de: 'Welches Obst liegt in der Schale?', en: 'Which fruit is in the bowl?' },
      { de: '→ In der Schale liegen Melone, Weintrauben und Kiwi.', en: '→ In the bowl are melon, grapes, and kiwi.', isAnswer: true },
      { de: 'Was trinkt man hier?', en: 'What do you drink here?' },
      { de: '→ Man trinkt Kaffee und Wasser mit Zitrone.', en: '→ You drink coffee and water with lemon.', isAnswer: true },
      { de: 'Welches Besteck sieht man?', en: 'Which cutlery do you see?' },
      { de: '→ Man sieht eine Gabel und einen Löffel.', en: '→ You see a fork and a spoon.', isAnswer: true }
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
      { de: "Auf dem Bild sehe ich zwei Frauen im Supermarkt.", en: "In the picture I see two women in the supermarket." },
      { de: "Links steht die Kundin und kauft Lebensmittel ein.", en: "On the left stands the customer and buys groceries." },
      { de: "Rechts sitzt die Kassiererin an der Kasse.", en: "On the right sits the cashier at the checkout." },
      { de: "Die Kassiererin trägt blaue Arbeitskleidung.", en: "The cashier is wearing blue work clothes." },
      { de: "Auf dem Kassenband liegen Obst, Gemüse und eine Ananas.", en: "On the conveyor belt lie fruit, vegetables, and a pineapple." },
      { de: "Die Kundin gibt der Kassiererin Geld.", en: "The customer gives the cashier money." },
      { de: "Sie bezahlt ihre Einkäufe bar.", en: "She pays for her purchases in cash." },
      { de: "Die beiden Frauen lächeln freundlich.", en: "Both women smile friendly." },
      { de: "Ich glaube, die Kundin kocht heute Abend ein gesundes Essen.", en: "I think the customer is cooking a healthy meal tonight." }
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
  },
  {
    id: '10',
    title: 'Freizeit — Free Time',
    icon: 'Gamepad2',
    image: img10,
    bildbeschreibung: [
      { de: "Auf dem Bild sehe ich eine Gruppe von Freunden in einem Garten.", en: "In the picture I see a group of friends in a garden." },
      { de: "Das Wetter ist schön und die Sonne scheint.", en: "The weather is beautiful and the sun is shining." },
      { de: "Im Vordergrund liegt eine Frau auf einer Decke.", en: "In the foreground a woman is lying on a blanket." },
      { de: "Sie hat eine Sonnenbrille und liest ein Buch.", en: "She has sunglasses and is reading a book." },
      { de: "Neben ihr sitzen zwei Männer auf dem grünen Rasen.", en: "Next to her two men are sitting on the green lawn." },
      { de: "Sie trinken Bier aus Flaschen und unterhalten sich.", en: "They are drinking beer from bottles and talking." },
      { de: "Auf dem Gras liegt auch ein Fußball.", en: "On the grass there is also a soccer ball." },
      { de: "Im Hintergrund sitzen weitere Freunde an einem Tisch.", en: "In the background more friends are sitting at a table." },
      { de: "Alle Personen sind entspannt und glücklich.", en: "All people are relaxed and happy." },
      { de: "Ich glaube, sie haben am Wochenende viel Spaß zusammen.", en: "I think they are having a lot of fun together at the weekend." }
    ],
    situation: [
      { de: 'Wo sind die Personen?', en: 'Where are the people?' },
      { de: '→ Sie sind zusammen in einem Garten.', en: '→ They are together in a garden.', isAnswer: true },
      { de: 'Was macht die Frau im Vordergrund?', en: 'What is the woman in the foreground doing?' },
      { de: '→ Sie liegt auf einer Decke und liest ein Buch.', en: '→ She is lying on a blanket and reading a book.', isAnswer: true },
      { de: 'Was trinken die Männer?', en: 'What are the men drinking?' },
      { de: '→ Sie trinken Bier aus Flaschen und Gläsern.', en: '→ They are drinking beer from bottles and glasses.', isAnswer: true },
      { de: 'Welcher Sportartikel liegt auf dem Rasen?', en: 'Which sports item is lying on the lawn?' },
      { de: '→ Ein Fußball liegt auf dem Rasen.', en: '→ A soccer ball is lying on the lawn.', isAnswer: true }
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
      { de: "Auf dem Bild sehe ich eine Familie am Flughafen.", en: "In the picture I see a family at the airport." },
      { de: "Man sieht die Eltern und drei Kinder.", en: "You see the parents and three children." },
      { de: "Die Familie steht vor dem Flugsteig Gate 24.", en: "The family is standing in front of gate 24." },
      { de: "Im Hintergrund sehe ich Bildschirme mit Flügen.", en: "In the background I see screens with flights." },
      { de: "Die Personen haben Koffer und Rucksäcke dabei.", en: "The people have suitcases and backpacks with them." },
      { de: "Ein Koffer im Vordergrund ist rot.", en: "One suitcase in the foreground is red." },
      { de: "Alle Personen lachen und freuen sich sehr.", en: "All people are laughing and very happy." },
      { de: "Sie sind bequem für die Reise angezogen.", en: "They are comfortably dressed for the trip." },
      { de: "Ich glaube, die Familie fliegt jetzt in den Urlaub.", en: "I think the family is flying on vacation now." }
    ],
    situation: [
      { de: 'Wo ist die Familie?', en: 'Where is the family?' },
      { de: '→ Die Familie ist am Flughafen.', en: '→ The family is at the airport.', isAnswer: true },
      { de: 'Wie viele Kinder hat die Familie?', en: 'How many children does the family have?' },
      { de: '→ Die Familie hat drei Kinder: ein Mädchen und zwei Jungen.', en: '→ The family has three children: one girl and two boys.', isAnswer: true },
      { de: 'Was hat die Familie dabei?', en: 'What does the family have with them?' },
      { de: '→ Sie haben Koffer und Rucksäcke für die Reise.', en: '→ They have suitcases and backpacks for the trip.', isAnswer: true },
      { de: 'Welche Nummer hat das Flugsteig (Gate)?', en: 'What number is the gate?' },
      { de: '→ Das ist Gate Nummer 24.', en: '→ That is gate number 24.', isAnswer: true }
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
      { de: "Auf dem Bild sehe ich einen Bahnhof.", en: "In the picture I see a train station." },
      { de: "Am Gleis 7 steht ein großer, roter Zug.", en: "At track 7 stands a big, red train." },
      { de: "Auf der blauen Anzeige steht das Ziel Frankfurt.", en: "On the blue display is the destination Frankfurt." },
      { de: "Auf dem Bahnsteig steht eine Familie mit Kindern.", en: "On the platform stands a family with children." },
      { de: "Sie haben mehrere Koffer dabei.", en: "They have several suitcases with them." },
      { de: "Ein Koffer ist rot und ein Koffer ist blau.", en: "One suitcase is red and one suitcase is blue." },
      { de: "Die Personen schauen auf den Zug und lächeln.", en: "The people look at the train and smile." },
      { de: "Ich glaube, die Familie fährt mit dem Zug nach Frankfurt.", en: "I think the family is traveling by train to Frankfurt." },
      { de: "Vielleicht besuchen sie ihre Verwandten.", en: "Maybe they are visiting their relatives." }
    ],
    situation: [
      { de: 'Wo steht die Familie?', en: 'Where is the family standing?' },
      { de: '→ Die Familie steht auf dem Bahnsteig am Bahnhof.', en: '→ The family is standing on the platform at the train station.', isAnswer: true },
      { de: 'Welche Farbe hat der Zug?', en: 'What color is the train?' },
      { de: '→ Der Zug ist rot.', en: '→ The train is red.', isAnswer: true },
      { de: 'Wohin fährt der Zug?', en: 'Where is the train going?' },
      { de: '→ Der Zug fährt nach Frankfurt Hauptbahnhof.', en: '→ The train is going to Frankfurt central station.', isAnswer: true },
      { de: 'An welchem Gleis steht der Zug?', en: 'At which platform is the train standing?' },
      { de: '→ Der Zug steht an Gleis 7.', en: '→ The train is standing at platform 7.', isAnswer: true }
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
      { de: "Auf dem Bild sehe ich einen Mann und eine Frau.", en: "In the picture I see a man and a woman." },
      { de: "Sie sind in einem Bekleidungsgeschäft.", en: "They are in a clothing store." },
      { de: "Die Frau trägt einen gelben Pullover.", en: "The woman is wearing a yellow sweater." },
      { de: "Sie hält eine grüne Jacke auf einem Kleiderbügel.", en: "She is holding a green jacket on a clothes hanger." },
      { de: "Links steht der Mann mit einem blauen Hemd.", en: "On the left stands the man with a blue shirt." },
      { de: "Er schaut die Jacke an und spricht mit der Frau.", en: "He looks at the jacket and talks with the woman." },
      { de: "Im Hintergrund hängen viele Hosen und Hemden.", en: "In the background hang many trousers and shirts." },
      { de: "Die beiden Personen lächeln und wirken sehr sympathisch.", en: "Both people smile and seem very pleasant." },
      { de: "Ich glaube, die Frau möchte die grüne Jacke anprobieren und kaufen.", en: "I think the woman wants to try on and buy the green jacket." }
    ],
    situation: [
      { de: 'Wo sind der Mann und die Frau?', en: 'Where are the man and the woman?' },
      { de: '→ Sie sind in einem Modegeschäft.', en: '→ They are in a clothing store.', isAnswer: true },
      { de: 'Was sucht die Frau aus?', en: 'What is the woman picking out?' },
      { de: '→ Sie sucht eine grüne Jacke aus.', en: '→ She is picking out a green jacket.', isAnswer: true },
      { de: 'Welche Farbe hat der Pullover von der Frau?', en: "What color is the woman's sweater?" },
      { de: '→ Ihr Pullover ist gelb.', en: '→ Her sweater is yellow.', isAnswer: true },
      { de: 'Was sieht man im Hintergrund?', en: 'What do you see in the background?' },
      { de: '→ Man sieht viele andere Kleider an Regalen.', en: '→ You see many other clothes on racks.', isAnswer: true }
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
      { de: "Auf dem Bild sehe ich drei Personen in einem Möbelgeschäft.", en: "In the picture I see three people in a furniture store." },
      { de: "Rechts steht eine Verkäuferin mit einem grünen T-Shirt.", en: "On the right stands a saleswoman with a green t-shirt." },
      { de: "Sie hält ein Tablet in der Hand und berät die Kunden.", en: "She holds a tablet in her hand and advises the customers." },
      { de: "Links stehen ein Mann und eine Frau.", en: "On the left stand a man and a woman." },
      { de: "Der Mann trägt ein dunkles Sakko und die Frau einen hellen Mantel.", en: "The man is wearing a dark jacket and the woman a light coat." },
      { de: "In der Mitte steht ein gemütliches, graues Sofa.", en: "In the middle stands a cozy, gray sofa." },
      { de: "Im Hintergrund sehe ich einen Holztisch, Stühle und Lampen.", en: "In the background I see a wooden table, chairs, and lamps." },
      { de: "Die Kunden hören der Verkäuferin aufmerksam zu.", en: "The customers listen attentively to the saleswoman." },
      { de: "Ich glaube, das Paar möchte ein neues Sofa für ihr Wohnzimmer kaufen.", en: "I think the couple wants to buy a new sofa for their living room." }
    ],
    situation: [
      { de: 'Wo sind die Personen?', en: 'Where are the people?' },
      { de: '→ Sie sind in einem Möbelgeschäft.', en: '→ They are in a furniture store.', isAnswer: true },
      { de: 'Was macht die Verkäuferin?', en: 'What is the saleswoman doing?' },
      { de: '→ Sie berät das Paar und zeigt auf ein Sofa.', en: '→ She is advising the couple and pointing to a sofa.', isAnswer: true },
      { de: 'Was hat die Verkäuferin in der Hand?', en: 'What does the saleswoman have in her hand?' },
      { de: '→ Sie hat ein Tablet in der Hand.', en: '→ She has a tablet in her hand.', isAnswer: true },
      { de: 'Welche Möbel sieht man auf dem Bild?', en: 'Which furniture do you see in the picture?' },
      { de: '→ Man sieht ein Sofa, einen Tisch, Stühle und Schränke.', en: '→ You see a sofa, a table, chairs, and cupboards.', isAnswer: true }
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
      { de: "Auf dem Bild sehe ich zwei Frauen vor einem Haus.", en: "In the picture I see two women in front of a house." },
      { de: "Die ältere Frau ist die Mutter und die jüngere ist ihre Tochter.", en: "The older woman is the mother and the younger is her daughter." },
      { de: "Im Hintergrund steht ein großes, glänzendes, rotes Auto.", en: "In the background stands a big, shiny, red car." },
      { de: "Die Mutter trägt eine blaue Jacke.", en: "The mother is wearing a blue jacket." },
      { de: "Die Tochter trägt einen grünen Pullover.", en: "The daughter is wearing a green sweater." },
      { de: "Die Mutter gibt ihrer Tochter einen Autoschlüssel.", en: "The mother gives her daughter a car key." },
      { de: "Das junge Mädchen lacht und freut sich riesig.", en: "The young girl laughs and is extremely happy." },
      { de: "Ich glaube, das rote Auto ist ein Überraschungsgeschenk für die Tochter.", en: "I think the red car is a surprise gift for the daughter." },
      { de: "Vielleicht hat sie gerade ihren Führerschein bestanden.", en: "Maybe she just passed her driving test." }
    ],
    situation: [
      { de: 'Wer ist auf dem Bild?', en: 'Who is in the picture?' },
      { de: '→ Auf dem Bild sind eine Mutter und ihre Tochter.', en: '→ In the picture are a mother and her daughter.', isAnswer: true },
      { de: 'Welche Farbe hat das Auto?', en: 'What color is the car?' },
      { de: '→ Das Auto ist rot.', en: '→ The car is red.', isAnswer: true },
      { de: 'Was gibt die Mutter der Tochter?', en: 'What is the mother giving the daughter?' },
      { de: '→ Sie gibt ihr einen Autoschlüssel.', en: '→ She is giving her a car key.', isAnswer: true },
      { de: 'Wie fühlt sich das Mädchen?', en: 'How does the girl feel?' },
      { de: '→ Sie ist sehr glücklich und überrascht.', en: '→ She is very happy and surprised.', isAnswer: true }
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
      { de: "Auf dem Bild sehe ich zwei Frauen in den Bergen.", en: "In the picture I see two women in the mountains." },
      { de: "Sie machen eine Wanderung in der Natur.", en: "They are going on a hike in nature." },
      { de: "Im Hintergrund sehe ich hohe Berge mit weißem Schnee.", en: "In the background I see high mountains with white snow." },
      { de: "Der Himmel ist blau und die Sonne scheint.", en: "The sky is blue and the sun is shining." },
      { de: "Die linke Frau trägt eine rote Jacke und eine rote Mütze.", en: "The left woman wears a red jacket and a red beanie." },
      { de: "Die rechte Frau trägt eine blaue Jacke und eine blaue Mütze.", en: "The right woman wears a blue jacket and a blue beanie." },
      { de: "Beide Frauen tragen große Wanderrucksäcke.", en: "Both women carry big hiking backpacks." },
      { de: "Sie gehen auf einem Wanderweg, sprechen und lächeln.", en: "They are walking on a hiking path, talking, and smiling." },
      { de: "Ich glaube, sie genießen das schöne Wetter in den Alpen.", en: "I think they are enjoying the nice weather in the Alps." }
    ],
    situation: [
      { de: 'Was machen die Frauen?', en: 'What are the women doing?' },
      { de: '→ Sie machen eine Wanderung in den Bergen.', en: '→ They are doing a hike in the mountains.', isAnswer: true },
      { de: 'Was tragen die Frauen auf dem Rücken?', en: 'What are the women wearing on their backs?' },
      { de: '→ Sie tragen große Rucksäcke.', en: '→ They are wearing big backpacks.', isAnswer: true },
      { de: 'Wie ist das Wetter auf dem Bild?', en: 'How is the weather in the picture?' },
      { de: '→ Das Wetter ist schön und sonnig, aber es ist kalt in den Bergen.', en: '→ The weather is beautiful and sunny, but it is cold in the mountains.', isAnswer: true },
      { de: 'Was sieht man im Hintergrund?', en: 'What do you see in the background?' },
      { de: '→ Im Hintergrund sieht man hohe Berge mit weißem Schnee.', en: '→ In the background, you see high mountains with white snow.', isAnswer: true }
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
      { de: "Auf dem Bild sehe ich zwei Freundinnen in einer Modeboutique.", en: "In the picture I see two female friends in a fashion boutique." },
      { de: "Sie schauen sich Kleidung an und gehen shoppen.", en: "They are looking at clothes and shopping." },
      { de: "Die linke Frau trägt einen hellen Pullover.", en: "The left woman is wearing a light-colored sweater." },
      { de: "Sie hält ein wunderschönes blaues Kleid mit Blumen.", en: "She is holding a wonderful blue dress with flowers." },
      { de: "Die rechte Frau trägt eine modische Jeansjacke.", en: "The right woman is wearing a fashionable denim jacket." },
      { de: "Beide Frauen lachen laut und haben viel Freude.", en: "Both women laugh out loud and have a lot of fun." },
      { de: "Im Hintergrund sieht man viele Taschen und Kleiderständer.", en: "In the background you can see many bags and clothes racks." },
      { de: "Ich glaube, die Frau möchte das blaue Kleid für eine Party kaufen.", en: "I think the woman wants to buy the blue dress for a party." }
    ],
    situation: [
      { de: 'Was machen die zwei Frauen?', en: 'What are the two women doing?' },
      { de: '→ Sie gehen zusammen shoppen und kaufen Kleidung.', en: '→ They are going shopping together and buying clothes.', isAnswer: true },
      { de: 'Was zeigt die eine Frau ihrer Freundin?', en: 'What is the one woman showing her friend?' },
      { de: '→ Sie zeigt ihr ein blaues Kleid.', en: '→ She is showing her a blue dress.', isAnswer: true },
      { de: 'Wie ist die Stimmung im Geschäft?', en: 'How is the mood in the store?' },
      { de: '→ Die Stimmung ist super. Die Freundinnen lachen und sind fröhlich.', en: '→ The mood is great. The friends are laughing and cheerful.', isAnswer: true },
      { de: 'Was sieht man im Hintergrund?', en: 'What do you see in the background?' },
      { de: '→ Im Hintergrund sieht man viele Kleider an Regalen und Taschen.', en: '→ In the background, you see many clothes on racks and bags.', isAnswer: true }
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
      { de: "Auf dem Bild sehe ich ein helles, modernes Wohnzimmer.", en: "In the picture I see a bright, modern living room." },
      { de: "In der Mitte ist ein großes Fenster mit Blick auf Bäume.", en: "In the middle is a large window with a view of trees." },
      { de: "Links steht ein gemütliches, graues Sofa mit Kissen.", en: "On the left stands a cozy, gray sofa with cushions." },
      { de: "Auf dem Sofa liegt auch eine weiche Decke.", en: "On the sofa also lies a soft blanket." },
      { de: "Vor dem Sofa steht ein kleiner, runder Holztisch.", en: "In front of the sofa stands a small, round wooden table." },
      { de: "Rechts sehe ich ein weißes Regal mit vielen Büchern.", en: "On the right I see a white shelf with many books." },
      { de: "Auf einem Hocker steht eine schöne grüne Zimmerpflanze.", en: "On a stool stands a nice green houseplant." },
      { de: "Der Raum ist sehr sauber, ordentlich und gemütlich.", en: "The room is very clean, tidy, and cozy." },
      { de: "Ich glaube, hier kann man sich wunderbar entspannen und lesen.", en: "I think here you can wonderfully relax and read." }
    ],
    situation: [
      { de: 'Welches Zimmer sieht man auf dem Bild?', en: 'Which room do you see in the picture?' },
      { de: '→ Man sieht ein Wohnzimmer.', en: '→ You see a living room.', isAnswer: true },
      { de: 'Was steht in der Mitte vor dem Sofa?', en: 'What stands in the middle in front of the sofa?' },
      { de: '→ Vor dem Sofa steht ein kleiner, runder Holztisch.', en: '→ In front of the sofa stands a small, round wooden table.', isAnswer: true },
      { de: 'Wo stehen die Bücher?', en: 'Where are the books?' },
      { de: '→ Die Bücher stehen in einem weißen Regal auf der rechten Seite.', en: '→ The books are in a white shelf on the right side.', isAnswer: true },
      { de: 'Was sieht man durch das große Fenster?', en: 'What do you see through the large window?' },
      { de: '→ Man sieht den Hintergrund mit Bäumen und anderen Häusern.', en: '→ You see the background with trees and other houses.', isAnswer: true }
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
      { de: "Auf dem Bild sehe ich Studenten in einer Bibliothek oder Universität.", en: "In the picture I see students in a library or university." },
      { de: "Im Vordergrund sitzt eine junge Frau an einem Holztisch.", en: "In the foreground sits a young woman at a wooden table." },
      { de: "Sie hat eine Brille und schöne, lockige Haare.", en: "She has glasses and beautiful, curly hair." },
      { de: "Sie tippt konzentriert auf ihrem Laptop.", en: "She types concentrated on her laptop." },
      { de: "Auf dem Tisch stehen eine Kaffeetasse, eine Wasserflasche und Stifte.", en: "On the table are a coffee cup, a water bottle, and pencils." },
      { de: "Im Hintergrund stehen vier andere Studenten am Fenster.", en: "In the background four other students are standing by the window." },
      { de: "Sie machen eine Pause, trinken Kaffee, sprechen und lachen.", en: "They are taking a break, drinking coffee, talking, and laughing." },
      { de: "An der Wand stehen große Regale mit vielen Büchern.", en: "On the wall are large shelves with many books." },
      { de: "Ich glaube, die Studenten bereiten sich auf eine Prüfung vor.", en: "I think the students are preparing for an exam." }
    ],
    situation: [
      { de: 'Was macht die Frau im Vordergrund?', en: 'What is the woman in the foreground doing?' },
      { de: '→ Sie sitzt am Tisch und arbeitet oder lernt mit ihrem Laptop.', en: '→ She is sitting at the table and working or studying with her laptop.', isAnswer: true },
      { de: 'Was machen die Studenten im Hintergrund?', en: 'What are the students in the background doing?' },
      { de: '→ Sie stehen am Fenster, machen eine Pause, sprechen und lachen.', en: '→ They are standing by the window, taking a break, talking, and laughing.', isAnswer: true },
      { de: 'Was steht alles auf dem Schreibtisch?', en: 'What is everything on the desk?' },
      { de: '→ Auf dem Schreibtisch stehen ein Laptop, eine Tasse, eine Flasche und Stifte.', en: '→ On the desk, there are a laptop, a cup, a bottle, and pencils.', isAnswer: true },
      { de: 'Wo sind die Personen wahrscheinlich?', en: 'Where are the people most likely?' },
      { de: '→ Sie sind in der Universität, in der Schule oder in einer Bibliothek.', en: '→ They are at the university, in school, or in a library.', isAnswer: true }
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
