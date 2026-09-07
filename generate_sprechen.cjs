const fs = require('fs');

const content = `import { LucideIcon } from 'lucide-react';
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

export const sprechenTopics: TopicDefinition[] = [
  {
    id: '8',
    title: 'Essen und Trinken — Food and Drinks',
    icon: 'Coffee',
    image: img8,
    bildbeschreibung: [
      { de: 'Das ist ein Essen. Es steht auf einem Tisch.', en: 'This is a meal. It is on a table.' },
      { de: 'Der Reis: Auf dem Teller ist Reis mit Hähnchen.', en: 'The rice: On the plate is rice with chicken.' },
      { de: 'Das Obst: In der Schale ist Obst. Es gibt Melone, Weintrauben und Kiwi.', en: 'The fruit: In the bowl is fruit. There is melon, grapes, and kiwi.' },
      { de: 'Der Kaffee: Der Kaffee ist in einer Tasse.', en: 'The coffee: The coffee is in a cup.' },
      { de: 'Das Wasser: Das Wasser ist in einem Glas mit einer Zitrone.', en: 'The water: The water is in a glass with a lemon.' },
      { de: 'Die Sachen: Hier sind ein Holztisch, eine Gabel und ein Löffel.', en: 'The things: Here are a wooden table, a fork, and a spoon.' }
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
  },
  {
    id: '10',
    title: 'Freizeit — Free Time',
    icon: 'Gamepad2',
    image: img10,
    bildbeschreibung: [
      { de: 'Das ist eine Gruppe von Freunden. Sie sind in einem Garten.', en: 'This is a group of friends. They are in a garden.' },
      { de: 'Das Wetter: Die Sonne scheint. Es ist warm.', en: 'The weather: The sun is shining. It is warm.' },
      { de: 'Die Frau: Eine Frau liegt auf einer Decke. Sie liest ein Buch.', en: 'The woman: A woman is lying on a blanket. She is reading a book.' },
      { de: 'Die Männer: Zwei Männer sitzen auf dem Rasen. Sie lachen und trinken Bier.', en: 'The men: Two men are sitting on the lawn. They are laughing and drinking beer.' },
      { de: 'Der Hintergrund: Im Hintergrund sitzen zwei Frauen auf Stühlen. Drei Männer stehen am Haus.', en: 'The background: In the background, two women are sitting on chairs. Three men are standing by the house.' },
      { de: 'Der Fußball: Ein Fußball liegt im Gras.', en: 'The soccer ball: A soccer ball is lying in the grass.' }
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
      { de: 'Das ist eine Familie. Sie sind am Flughafen.', en: 'This is a family. They are at the airport.' },
      { de: 'Die Personen: Es gibt den Vater, die Mutter und drei Kinder.', en: 'The people: There is the father, the mother, and three children.' },
      { de: 'Die Stimmung: Alle Personen lächeln und sind glücklich. Sie machen Urlaub.', en: 'The mood: All people are smiling and happy. They are going on vacation.' },
      { de: 'Das Gepäck: Die Familie hat Koffer und Rucksäcke. Ein Koffer ist rot.', en: 'The luggage: The family has suitcases and backpacks. One suitcase is red.' },
      { de: 'Der Ort: Sie stehen bei Gate 24. Im Hintergrund sieht man Monitore mit Flügen.', en: 'The location: They are standing by Gate 24. In the background, you can see monitors with flights.' }
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
      { de: 'Das ist ein Bahnhof. Eine Familie möchte mit dem Zug fahren.', en: 'This is a train station. A family wants to travel by train.' },
      { de: 'Der Zug: Ein großer, roter Zug steht am Gleis. Es ist ein Regionalzug nach Frankfurt.', en: 'The train: A big, red train is standing at the platform. It is a regional train to Frankfurt.' },
      { de: 'Die Personen: Eine Familie steht auf dem Bahnsteig. Man sieht Eltern und Kinder. Sie lächeln.', en: 'The people: A family is standing on the platform. You see parents and children. They are smiling.' },
      { de: 'Das Gepäck: Die Familie hat Koffer dabei. Ein Koffer ist rot, ein Koffer ist blau.', en: 'The luggage: The family has suitcases with them. One suitcase is red, one suitcase is blue.' },
      { de: 'Die Anzeige: Ein blauer Bildschirm zeigt die Abfahrt: Gleis 7 nach Frankfurt (Main) Hbf.', en: 'The display: A blue screen shows the departure: Platform 7 to Frankfurt (Main) Hbf.' }
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
      { de: 'Das ist ein Bekleidungsgeschäft. Zwei Personen kaufen Kleidung.', en: 'This is a clothing store. Two people are buying clothes.' },
      { de: 'Die Personen: Ein Mann und eine Frau sind im Laden. Sie lächeln.', en: 'The people: A man and a woman are in the store. They are smiling.' },
      { de: 'Die Frau: Die Frau trägt einen gelben Pullover. Sie hält eine grüne Jacke.', en: 'The woman: The woman is wearing a yellow sweater. She is holding a green jacket.' },
      { de: 'Der Mann: Der Mann steht links. Er trägt ein blaues Hemd und ein weißes T-Shirt.', en: 'The man: The man is standing on the left. He is wearing a blue shirt and a white t-shirt.' },
      { de: 'Die Sachen: Im Geschäft gibt es viele Kleiderbügel, Hosen und Hemden.', en: 'The things: In the store, there are many clothes hangers, pants, and shirts.' }
    ],
    situation: [
      { de: 'Wo sind der Mann und die Frau?', en: 'Where are the man and the woman?' },
      { de: '→ Sie sind in einem Modegeschäft.', en: '→ They are in a clothing store.', isAnswer: true },
      { de: 'Was sucht die Frau aus?', en: 'What is the woman picking out?' },
      { de: '→ Sie sucht eine grüne Jacke aus.', en: '→ She is picking out a green jacket.', isAnswer: true },
      { de: 'Welche Farbe hat der Pullover von der Frau?', en: 'What color is the woman\'s sweater?' },
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
      { de: 'Das ist ein Möbelgeschäft. Ein Paar möchte Möbel kaufen.', en: 'This is a furniture store. A couple wants to buy furniture.' },
      { de: 'Die Personen: Ein Mann, eine Frau und eine Verkäuferin sprechen zusammen.', en: 'The people: A man, a woman, and a saleswoman are talking together.' },
      { de: 'Die Beratung: Die Verkäuferin trägt ein grünes T-Shirt. Sie zeigt auf ein Sofa und hält ein Tablet.', en: 'The advice: The saleswoman is wearing a green t-shirt. She points at a sofa and holds a tablet.' },
      { de: 'Das Paar: Der Mann trägt ein dunkelblaues Sakko. Die Frau trägt einen hellen Mantel. Sie hören zu.', en: 'The couple: The man is wearing a dark blue blazer. The woman is wearing a light coat. They are listening.' },
      { de: 'Die Möbel: Im Geschäft gibt es viele Möbel: ein graues Sofa, einen Holztisch mit Stühlen und einen Schrank.', en: 'The furniture: In the store there is a lot of furniture: a gray sofa, a wooden table with chairs, and a cupboard.' }
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
      { de: 'Das ist eine Mutter und ihre Tochter. Sie stehen vor einem Haus.', en: 'This is a mother and her daughter. They are standing in front of a house.' },
      { de: 'Das Auto: Hinter den Frauen steht ein großes, rotes Auto.', en: 'The car: Behind the women stands a big, red car.' },
      { de: 'Die Übergabe: Die Mutter gibt der Tochter einen Autoschlüssel.', en: 'The handover: The mother is giving the daughter a car key.' },
      { de: 'Die Stimmung: Das junge Mädchen freut sich sehr. Sie lacht und ist glücklich.', en: 'The mood: The young girl is very happy. She is laughing and happy.' },
      { de: 'Die Kleidung: Beide Frauen tragen Jeans. Die Mutter trägt eine blaue Jacke, die Tochter einen grünen Pullover.', en: 'The clothes: Both women are wearing jeans. The mother is wearing a blue jacket, the daughter a green sweater.' }
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
      { de: 'Das sind zwei Frauen. Sie wandern in den Bergen.', en: 'This is two women. They are hiking in the mountains.' },
      { de: 'Der Ort: Sie sind in der Natur auf einem Wanderweg. Im Hintergrund sieht man hohe Berge mit viel Schnee.', en: 'The location: They are in nature on a hiking trail. In the background, you can see high mountains with a lot of snow.' },
      { de: 'Die Aktivität: Die Frauen gehen zu Fuß. Sie tragen große Rucksäcke auf dem Rücken.', en: 'The activity: The women are walking. They are wearing big backpacks on their backs.' },
      { de: 'Die Stimmung: Sie unterhalten sich, lächeln und haben Spaß.', en: 'The mood: They are talking to each other, smiling, and having fun.' },
      { de: 'Die Kleidung: Es ist kalt. Eine Frau trägt eine rote Jacke und eine rote Mütze. Die andere Frau trägt eine blaue Jacke und eine blaue Mütze.', en: 'The clothes: It is cold. One woman wears a red jacket and a red beanie. The other woman wears a blue jacket and a blue beanie.' }
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
      { de: 'Das sind zwei Freundinnen. Sie kaufen zusammen Kleidung.', en: 'This is two friends. They are buying clothes together.' },
      { de: 'Der Ort: Sie sind in einem Bekleidungsgeschäft. Das Geschäft heißt "Velvet & Vine".', en: 'The location: They are in a clothing store. The store is called "Velvet & Vine".' },
      { de: 'Das Kleid: Eine Frau hält ein blaues Kleid mit Blumen auf einem Kleiderbügel.', en: 'The dress: One woman is holding a blue dress with flowers on a clothes hanger.' },
      { de: 'Die Stimmung: Die Frauen lachen sehr laut. Sie sind glücklich und haben viel Spaß.', en: 'The mood: The women are laughing very loudly. They are happy and having a lot of fun.' },
      { de: 'Die Kleidung: Die linke Frau trägt einen hellen Pullover. Die rechte Frau trägt eine Jeansjacke.', en: 'The clothes: The woman on the left is wearing a light-colored sweater. The woman on the right is wearing a denim jacket.' }
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
      { de: 'Das ist ein Wohnzimmer. Es sieht sehr gemütlich aus.', en: 'This is a living room. It looks very cozy.' },
      { de: 'Das Fenster: In der Mitte ist ein großes Fenster. Man sieht Bäume und Häuser draußen.', en: 'The window: In the middle is a large window. You see trees and houses outside.' },
      { de: 'Das Sofa: Links steht ein graues Sofa mit Kissen und einer Decke.', en: 'The sofa: On the left is a gray sofa with pillows and a blanket.' },
      { de: 'Die Möbel: In der Mitte steht ein kleiner Holztisch. Rechts gibt es ein Regal mit Büchern.', en: 'The furniture: In the middle stands a small wooden table. On the right there is a shelf with books.' },
      { de: 'Die Pflanzen: Es gibt grüne Pflanzen im Zimmer. Eine große Pflanze steht auf einem kleinen Hocker.', en: 'The plants: There are green plants in the room. A large plant stands on a small stool.' }
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
      { de: 'Das ist ein Klassenzimmer oder eine Bibliothek. Studenten lernen hier.', en: 'This is a classroom or a library. Students are studying here.' },
      { de: 'Die Frau im Vordergrund: Eine junge Frau sitzt am Tisch. Sie hat Brille und lockige Haare. Sie tippt auf einem Laptop.', en: 'The woman in the foreground: A young woman is sitting at the table. She has glasses and curly hair. She is typing on a laptop.' },
      { de: 'Die Gruppe im Hintergrund: Vier Studenten stehen am Fenster. Sie sprechen, lachen und trinken Kaffee.', en: 'The group in the background: Four students are standing by the window. They are talking, laughing, and drinking coffee.' },
      { de: 'Die Sachen auf dem Tisch: Auf dem Holztisch stehen ein Laptop, eine Kaffeetasse, eine Wasserflasche und Stifte.', en: 'The things on the table: On the wooden table, there are a laptop, a coffee mug, a water bottle, and pencils.' },
      { de: 'Der Raum: Es gibt große Fenster, Holzregale mit Büchern und ein Whiteboard an der Wand.', en: 'The room: There are large windows, wooden shelves with books, and a whiteboard on the wall.' }
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
`

fs.writeFileSync('src/data/sprechen.ts', content);
console.log('Sprechen data successfully updated!');
