export interface WortschatzItem {
  de: string;
  en: string;
  article?: 'der' | 'die' | 'das' | 'plural' | 'verb' | 'adj' | 'prep' | 'phrase';
  example?: {
    de: string;
    en: string;
  };
}

export interface WortschatzCategory {
  id: number;
  icon: string;
  title: string;
  subtitle: string;
  items: WortschatzItem[];
  sentences?: { de: string; en: string }[];
  tip?: string;
}

export function detectArticle(text: string): 'der' | 'die' | 'das' | 'plural' | 'verb' | 'adj' | 'prep' | 'phrase' {
  const trimmed = text.trim();
  if (trimmed.startsWith('der ')) return 'der';
  if (trimmed.startsWith('die ')) return 'die';
  if (trimmed.startsWith('das ')) return 'das';
  return 'phrase';
}

export const wortschatzCategories: WortschatzCategory[] = [
  {
    id: 1,
    icon: 'Users',
    title: 'Menschen — Personen',
    subtitle: 'People & Family',
    tip: 'In der Bildbeschreibung immer zuerst die Personen nennen (Mann, Frau, Kinder, Beruf).',
    sentences: [
      { de: 'Auf dem Bild sehe ich einen Mann und eine Frau.', en: 'In the picture I see a man and a woman.' },
      { de: 'Die Verkäuferin hilft der Kundin.', en: 'The saleswoman helps the customer.' },
      { de: 'Der Arzt spricht mit dem Patienten.', en: 'The doctor speaks with the patient.' }
    ],
    items: [
      { de: 'der Mann', en: 'man', article: 'der' },
      { de: 'die Frau', en: 'woman', article: 'die' },
      { de: 'das Kind', en: 'child', article: 'das' },
      { de: 'der Junge', en: 'boy', article: 'der' },
      { de: 'das Mädchen', en: 'girl', article: 'das' },
      { de: 'das Baby', en: 'baby', article: 'das' },
      { de: 'die Familie', en: 'family', article: 'die' },
      { de: 'die Mutter', en: 'mother', article: 'die' },
      { de: 'der Vater', en: 'father', article: 'der' },
      { de: 'die Eltern', en: 'parents', article: 'plural' },
      { de: 'die Tochter', en: 'daughter', article: 'die' },
      { de: 'der Sohn', en: 'son', article: 'der' },
      { de: 'der Bruder', en: 'brother', article: 'der' },
      { de: 'die Schwester', en: 'sister', article: 'die' },
      { de: 'der Freund', en: 'male friend', article: 'der' },
      { de: 'die Freundin', en: 'female friend', article: 'die' },
      { de: 'der Kunde', en: 'male customer', article: 'der' },
      { de: 'die Kundin', en: 'female customer', article: 'die' },
      { de: 'der Verkäufer', en: 'salesman', article: 'der' },
      { de: 'die Verkäuferin', en: 'saleswoman', article: 'die' },
      { de: 'der Mitarbeiter', en: 'employee', article: 'der' },
      { de: 'die Mitarbeiterin', en: 'female employee', article: 'die' },
      { de: 'der Lehrer', en: 'teacher', article: 'der' },
      { de: 'die Lehrerin', en: 'female teacher', article: 'die' },
      { de: 'der Arzt', en: 'doctor', article: 'der' },
      { de: 'die Ärztin', en: 'female doctor', article: 'die' },
      { de: 'der Kellner', en: 'waiter', article: 'der' },
      { de: 'die Kellnerin', en: 'waitress', article: 'die' },
      { de: 'der Kassierer', en: 'cashier', article: 'der' },
      { de: 'die Kassiererin', en: 'female cashier', article: 'die' },
      { de: 'der Rezeptionist', en: 'receptionist', article: 'der' },
      { de: 'die Rezeptionistin', en: 'female receptionist', article: 'die' }
    ]
  },
  {
    id: 2,
    icon: 'Home',
    title: 'Zuhause — Haus & Wohnung',
    subtitle: 'House & Furniture',
    tip: 'Sehr wichtig für Bildbeschreibung: Möbel und Gegenstände mit Präpositionen kombinieren.',
    sentences: [
      { de: 'Im Hintergrund sehe ich ein Sofa.', en: 'In the background I see a sofa.' },
      { de: 'Auf dem Tisch steht eine Lampe.', en: 'On the table stands a lamp.' },
      { de: 'Neben dem Stuhl steht eine Tasche.', en: 'Next to the chair stands a bag.' }
    ],
    items: [
      { de: 'das Haus', en: 'house', article: 'das' },
      { de: 'die Wohnung', en: 'apartment', article: 'die' },
      { de: 'das Zimmer', en: 'room', article: 'das' },
      { de: 'das Wohnzimmer', en: 'living room', article: 'das' },
      { de: 'das Schlafzimmer', en: 'bedroom', article: 'das' },
      { de: 'die Küche', en: 'kitchen', article: 'die' },
      { de: 'das Badezimmer', en: 'bathroom', article: 'das' },
      { de: 'der Balkon', en: 'balcony', article: 'der' },
      { de: 'die Tür', en: 'door', article: 'die' },
      { de: 'das Fenster', en: 'window', article: 'das' },
      { de: 'die Wand', en: 'wall', article: 'die' },
      { de: 'der Boden', en: 'floor', article: 'der' },
      { de: 'die Treppe', en: 'stairs', article: 'die' },
      { de: 'der Tisch', en: 'table', article: 'der' },
      { de: 'der Stuhl', en: 'chair', article: 'der' },
      { de: 'das Sofa', en: 'sofa', article: 'das' },
      { de: 'das Bett', en: 'bed', article: 'das' },
      { de: 'der Schrank', en: 'cupboard / wardrobe', article: 'der' },
      { de: 'das Regal', en: 'shelf', article: 'das' },
      { de: 'die Lampe', en: 'lamp', article: 'die' },
      { de: 'der Fernseher', en: 'television', article: 'der' },
      { de: 'der Computer', en: 'computer', article: 'der' },
      { de: 'das Handy', en: 'mobile phone', article: 'das' },
      { de: 'die Tasche', en: 'bag', article: 'die' },
      { de: 'der Schlüssel', en: 'key', article: 'der' }
    ]
  },
  {
    id: 3,
    icon: 'ShoppingCart',
    title: 'Einkaufen — Shopping',
    subtitle: 'Shopping & Supermarket',
    tip: 'Typische Prüfungssituation: Eine Person bezahlt an der Kasse oder fragt nach einem Produkt.',
    sentences: [
      { de: 'Die Frau kauft ein.', en: 'The woman goes shopping.' },
      { de: 'Die Kundin bezahlt an der Kasse.', en: 'The customer pays at the checkout.' },
      { de: 'Die Verkäuferin hilft der Kundin.', en: 'The saleswoman helps the customer.' },
      { de: 'Ich sehe einen Einkaufswagen.', en: 'I see a shopping cart.' }
    ],
    items: [
      { de: 'der Supermarkt', en: 'supermarket', article: 'der' },
      { de: 'das Geschäft', en: 'shop / store', article: 'das' },
      { de: 'der Laden', en: 'shop', article: 'der' },
      { de: 'der Markt', en: 'market', article: 'der' },
      { de: 'die Kasse', en: 'checkout / cash desk', article: 'die' },
      { de: 'die Kassiererin', en: 'cashier', article: 'die' },
      { de: 'der Kunde', en: 'customer', article: 'der' },
      { de: 'die Kundin', en: 'female customer', article: 'die' },
      { de: 'der Einkaufswagen', en: 'shopping cart', article: 'der' },
      { de: 'der Einkaufskorb', en: 'shopping basket', article: 'der' },
      { de: 'das Geld', en: 'money', article: 'das' },
      { de: 'der Euro', en: 'euro', article: 'der' },
      { de: 'der Preis', en: 'price', article: 'der' },
      { de: 'die Tasche', en: 'bag', article: 'die' },
      { de: 'die Tüte', en: 'carrier bag', article: 'die' },
      { de: 'kaufen', en: 'to buy', article: 'verb' },
      { de: 'bezahlen', en: 'to pay', article: 'verb' },
      { de: 'kosten', en: 'to cost', article: 'verb' },
      { de: 'suchen', en: 'to look for', article: 'verb' },
      { de: 'brauchen', en: 'to need', article: 'verb' },
      { de: 'verkaufen', en: 'to sell', article: 'verb' }
    ]
  },
  {
    id: 4,
    icon: 'Apple',
    title: 'Obst & Gemüse',
    subtitle: 'Fruits & Vegetables',
    tip: 'Merke dir: die meisten Früchte sind feminin (die Banane, die Orange), außer der Apfel!',
    sentences: [
      { de: 'Ich sehe Obst und Gemüse.', en: 'I see fruits and vegetables.' },
      { de: 'Die Frau kauft Äpfel und Tomaten.', en: 'The woman buys apples and tomatoes.' },
      { de: 'Auf dem Tisch liegt eine Orange.', en: 'On the table lies an orange.' }
    ],
    items: [
      { de: 'der Apfel', en: 'apple', article: 'der' },
      { de: 'die Banane', en: 'banana', article: 'die' },
      { de: 'die Orange', en: 'orange', article: 'die' },
      { de: 'die Zitrone', en: 'lemon', article: 'die' },
      { de: 'die Erdbeere', en: 'strawberry', article: 'die' },
      { de: 'die Traube', en: 'grape', article: 'die' },
      { de: 'die Birne', en: 'pear', article: 'die' },
      { de: 'die Wassermelone', en: 'watermelon', article: 'die' },
      { de: 'die Ananas', en: 'pineapple', article: 'die' },
      { de: 'die Tomate', en: 'tomato', article: 'die' },
      { de: 'die Kartoffel', en: 'potato', article: 'die' },
      { de: 'die Karotte', en: 'carrot', article: 'die' },
      { de: 'die Gurke', en: 'cucumber', article: 'die' },
      { de: 'die Zwiebel', en: 'onion', article: 'die' },
      { de: 'der Salat', en: 'lettuce / salad', article: 'der' },
      { de: 'die Paprika', en: 'pepper / bell pepper', article: 'die' },
      { de: 'die Bohne', en: 'bean', article: 'die' },
      { de: 'der Brokkoli', en: 'broccoli', article: 'der' }
    ]
  },
  {
    id: 5,
    icon: 'Utensils',
    title: 'Essen & Küche',
    subtitle: 'Food, Drinks & Tableware',
    tip: 'Besteck und Geschirr: der Teller, das Glas, die Tasse, die Gabel, das Messer, der Löffel.',
    sentences: [
      { de: 'Auf dem Tisch stehen ein Teller und ein Glas Wasser.', en: 'On the table are a plate and a glass of water.' },
      { de: 'Die Familie frühstückt zusammen in der Küche.', en: 'The family has breakfast together in the kitchen.' }
    ],
    items: [
      { de: 'der Teller', en: 'plate', article: 'der' },
      { de: 'das Glas', en: 'glass', article: 'das' },
      { de: 'die Tasse', en: 'cup', article: 'die' },
      { de: 'die Flasche', en: 'bottle', article: 'die' },
      { de: 'das Messer', en: 'knife', article: 'das' },
      { de: 'die Gabel', en: 'fork', article: 'die' },
      { de: 'der Löffel', en: 'spoon', article: 'der' },
      { de: 'der Tisch', en: 'table', article: 'der' },
      { de: 'das Brot', en: 'bread', article: 'das' },
      { de: 'der Käse', en: 'cheese', article: 'der' },
      { de: 'die Milch', en: 'milk', article: 'die' },
      { de: 'das Ei', en: 'egg', article: 'das' },
      { de: 'der Kuchen', en: 'cake', article: 'der' },
      { de: 'das Fleisch', en: 'meat', article: 'das' },
      { de: 'der Fisch', en: 'fish', article: 'der' },
      { de: 'das Wasser', en: 'water', article: 'das' },
      { de: 'der Kaffee', en: 'coffee', article: 'der' },
      { de: 'der Tee', en: 'tea', article: 'der' },
      { de: 'das Frühstück', en: 'breakfast', article: 'das' },
      { de: 'das Mittagessen', en: 'lunch', article: 'das' },
      { de: 'das Abendessen', en: 'dinner', article: 'das' }
    ]
  },
  {
    id: 6,
    icon: 'Shirt',
    title: 'Kleidung — Shopping & Mode',
    subtitle: 'Clothes & Accessories',
    tip: 'Verb "tragen": Der Mann trägt einen Pullover (Akkusativ: der -> den). Die Frau trägt ein Kleid.',
    sentences: [
      { de: 'Die Frau trägt eine Jacke.', en: 'The woman is wearing a jacket.' },
      { de: 'Der Mann trägt einen Pullover.', en: 'The man is wearing a sweater.' },
      { de: 'Das Mädchen trägt ein Kleid.', en: 'The girl is wearing a dress.' }
    ],
    items: [
      { de: 'die Kleidung', en: 'clothes', article: 'die' },
      { de: 'die Jacke', en: 'jacket', article: 'die' },
      { de: 'der Pullover', en: 'sweater', article: 'der' },
      { de: 'das Hemd', en: 'shirt', article: 'das' },
      { de: 'das T-Shirt', en: 'T-shirt', article: 'das' },
      { de: 'die Hose', en: 'trousers / pants', article: 'die' },
      { de: 'der Rock', en: 'skirt', article: 'der' },
      { de: 'das Kleid', en: 'dress', article: 'das' },
      { de: 'der Mantel', en: 'coat', article: 'der' },
      { de: 'der Schuh', en: 'shoe', article: 'der' },
      { de: 'der Stiefel', en: 'boot', article: 'der' },
      { de: 'die Socke', en: 'sock', article: 'die' },
      { de: 'die Mütze', en: 'beanie / cap', article: 'die' },
      { de: 'der Hut', en: 'hat', article: 'der' },
      { de: 'der Schal', en: 'scarf', article: 'der' },
      { de: 'die Tasche', en: 'handbag / bag', article: 'die' },
      { de: 'der Gürtel', en: 'belt', article: 'der' }
    ]
  },
  {
    id: 7,
    icon: 'TreePine',
    title: 'Garten & Natur',
    subtitle: 'Nature, Park & Weather',
    tip: 'Beschreibe Naturdetails: Sonne scheint, viele Bäume im Hintergrund, Kinder auf der Wiese.',
    sentences: [
      { de: 'Im Garten steht ein großer Baum.', en: 'In the garden stands a big tree.' },
      { de: 'Auf dem Gras spielen zwei Kinder.', en: 'Two children are playing on the grass.' },
      { de: 'Im Hintergrund sehe ich viele Bäume.', en: 'In the background I see many trees.' }
    ],
    items: [
      { de: 'der Garten', en: 'garden', article: 'der' },
      { de: 'der Baum', en: 'tree', article: 'der' },
      { de: 'die Blume', en: 'flower', article: 'die' },
      { de: 'das Gras', en: 'grass', article: 'das' },
      { de: 'die Pflanze', en: 'plant', article: 'die' },
      { de: 'das Blatt', en: 'leaf', article: 'das' },
      { de: 'die Wiese', en: 'meadow', article: 'die' },
      { de: 'der Park', en: 'park', article: 'der' },
      { de: 'der Wald', en: 'forest', article: 'der' },
      { de: 'der See', en: 'lake', article: 'der' },
      { de: 'der Fluss', en: 'river', article: 'der' },
      { de: 'das Meer', en: 'sea', article: 'das' },
      { de: 'der Strand', en: 'beach', article: 'der' },
      { de: 'die Sonne', en: 'sun', article: 'die' },
      { de: 'der Himmel', en: 'sky', article: 'der' },
      { de: 'die Wolke', en: 'cloud', article: 'die' },
      { de: 'der Regen', en: 'rain', article: 'der' },
      { de: 'der Schnee', en: 'snow', article: 'der' }
    ]
  },
  {
    id: 8,
    icon: 'Plane',
    title: 'Reisen — Reise & Urlaub',
    subtitle: 'Travel, Hotel & Holiday',
    tip: 'Sehr wichtig für A1: Bahnhof, Flughafen, Koffer, Ticket und Rezeption.',
    sentences: [
      { de: 'Die Familie macht Urlaub.', en: 'The family goes on vacation.' },
      { de: 'Die Menschen warten am Flughafen.', en: 'The people are waiting at the airport.' },
      { de: 'Ich sehe einen Koffer.', en: 'I see a suitcase.' },
      { de: 'Der Mann fährt mit dem Zug.', en: 'The man travels by train.' },
      { de: 'Das Flugzeug fliegt.', en: 'The airplane is flying.' }
    ],
    items: [
      { de: 'der Urlaub', en: 'holiday / vacation', article: 'der' },
      { de: 'die Reise', en: 'trip / journey', article: 'die' },
      { de: 'der Flughafen', en: 'airport', article: 'der' },
      { de: 'der Bahnhof', en: 'train station', article: 'der' },
      { de: 'das Flugzeug', en: 'airplane', article: 'das' },
      { de: 'der Flug', en: 'flight', article: 'der' },
      { de: 'der Zug', en: 'train', article: 'der' },
      { de: 'der Bus', en: 'bus', article: 'der' },
      { de: 'das Auto', en: 'car', article: 'das' },
      { de: 'der Koffer', en: 'suitcase', article: 'der' },
      { de: 'die Tasche', en: 'bag', article: 'die' },
      { de: 'das Ticket', en: 'ticket', article: 'das' },
      { de: 'die Fahrkarte', en: 'ticket', article: 'die' },
      { de: 'der Pass', en: 'passport', article: 'der' },
      { de: 'das Hotel', en: 'hotel', article: 'das' },
      { de: 'das Zimmer', en: 'room', article: 'das' },
      { de: 'die Rezeption', en: 'reception', article: 'die' },
      { de: 'der Rezeptionist', en: 'receptionist', article: 'der' },
      { de: 'die Rezeptionistin', en: 'female receptionist', article: 'die' },
      { de: 'das Meer', en: 'sea', article: 'das' },
      { de: 'der Strand', en: 'beach', article: 'der' }
    ]
  },
  {
    id: 9,
    icon: 'Train',
    title: 'Verkehrsmittel',
    subtitle: 'Transport & Vehicles',
    tip: 'Präposition mit Dativ: mit dem Bus, mit dem Zug, mit dem Auto, mit dem Fahrrad, mit der U-Bahn.',
    sentences: [
      { de: 'Der Mann fährt mit dem Bus.', en: 'The man travels by bus.' },
      { de: 'Die Frau wartet auf den Zug.', en: 'The woman is waiting for the train.' },
      { de: 'Die Familie fährt mit dem Auto.', en: 'The family travels by car.' }
    ],
    items: [
      { de: 'das Auto', en: 'car', article: 'das' },
      { de: 'der Bus', en: 'bus', article: 'der' },
      { de: 'der Zug', en: 'train', article: 'der' },
      { de: 'das Flugzeug', en: 'airplane', article: 'das' },
      { de: 'das Fahrrad', en: 'bicycle', article: 'das' },
      { de: 'das Motorrad', en: 'motorcycle', article: 'das' },
      { de: 'die Straßenbahn', en: 'tram', article: 'die' },
      { de: 'die U-Bahn', en: 'subway / metro', article: 'die' },
      { de: 'das Taxi', en: 'taxi', article: 'das' },
      { de: 'das Schiff', en: 'ship / boat', article: 'das' },
      { de: 'fahren', en: 'to drive / ride', article: 'verb' },
      { de: 'fliegen', en: 'to fly', article: 'verb' },
      { de: 'laufen', en: 'to walk / run', article: 'verb' },
      { de: 'gehen', en: 'to walk / go', article: 'verb' },
      { de: 'einsteigen', en: 'to get on / board', article: 'verb' },
      { de: 'aussteigen', en: 'to get off', article: 'verb' }
    ]
  },
  {
    id: 10,
    icon: 'Building2',
    title: 'Stadt & Orte',
    subtitle: 'City, Places & Buildings',
    tip: 'Orte in der Stadt: Wo sind die Personen? In der Bank, im Supermarkt, am Bahnhof.',
    sentences: [
      { de: 'In der Stadt gibt es ein großes Hotel und eine Bank.', en: 'In the city there is a big hotel and a bank.' },
      { de: 'Die Leute warten an der Bushaltestelle.', en: 'The people are waiting at the bus stop.' }
    ],
    items: [
      { de: 'die Stadt', en: 'city', article: 'die' },
      { de: 'die Straße', en: 'street', article: 'die' },
      { de: 'der Platz', en: 'square / plaza', article: 'der' },
      { de: 'das Gebäude', en: 'building', article: 'das' },
      { de: 'der Bahnhof', en: 'station', article: 'der' },
      { de: 'die Bank', en: 'bank', article: 'die' },
      { de: 'die Post', en: 'post office', article: 'die' },
      { de: 'die Apotheke', en: 'pharmacy', article: 'die' },
      { de: 'der Supermarkt', en: 'supermarket', article: 'der' },
      { de: 'das Geschäft', en: 'shop', article: 'das' },
      { de: 'das Restaurant', en: 'restaurant', article: 'das' },
      { de: 'das Café', en: 'café', article: 'das' },
      { de: 'das Hotel', en: 'hotel', article: 'das' },
      { de: 'das Krankenhaus', en: 'hospital', article: 'das' },
      { de: 'die Schule', en: 'school', article: 'die' },
      { de: 'die Bibliothek', en: 'library', article: 'die' },
      { de: 'der Park', en: 'park', article: 'der' },
      { de: 'die Bushaltestelle', en: 'bus stop', article: 'die' }
    ]
  },
  {
    id: 11,
    icon: 'BookOpen',
    title: 'Schule & Deutschkurs',
    subtitle: 'Classroom & Learning',
    tip: 'Immer gut: Die Schüler lernen Deutsch. Die Lehrerin erklärt die Grammatik.',
    sentences: [
      { de: 'Die Schüler lernen Deutsch.', en: 'The students are learning German.' },
      { de: 'Die Lehrerin schreibt an die Tafel.', en: 'The teacher writes on the board.' },
      { de: 'Der Mann liest ein Buch.', en: 'The man reads a book.' }
    ],
    items: [
      { de: 'die Schule', en: 'school', article: 'die' },
      { de: 'der Kurs', en: 'course', article: 'der' },
      { de: 'der Deutschkurs', en: 'German course', article: 'der' },
      { de: 'der Lehrer', en: 'male teacher', article: 'der' },
      { de: 'die Lehrerin', en: 'female teacher', article: 'die' },
      { de: 'der Schüler', en: 'male pupil', article: 'der' },
      { de: 'die Schülerin', en: 'female pupil', article: 'die' },
      { de: 'das Buch', en: 'book', article: 'das' },
      { de: 'das Heft', en: 'notebook', article: 'das' },
      { de: 'der Stift', en: 'pen', article: 'der' },
      { de: 'der Bleistift', en: 'pencil', article: 'der' },
      { de: 'der Kugelschreiber', en: 'ballpoint pen', article: 'der' },
      { de: 'das Papier', en: 'paper', article: 'das' },
      { de: 'der Tisch', en: 'table', article: 'der' },
      { de: 'der Stuhl', en: 'chair', article: 'der' },
      { de: 'die Tafel', en: 'board', article: 'die' },
      { de: 'der Computer', en: 'computer', article: 'der' },
      { de: 'die Prüfung', en: 'exam', article: 'die' },
      { de: 'die Aufgabe', en: 'exercise / task', article: 'die' },
      { de: 'die Frage', en: 'question', article: 'die' },
      { de: 'die Antwort', en: 'answer', article: 'die' }
    ]
  },
  {
    id: 12,
    icon: 'Briefcase',
    title: 'Arbeit & Beruf',
    subtitle: 'Office & Career',
    tip: 'Beschreibe Aktionen im Büro: Der Mitarbeiter tippt am Computer, die Chefin telefoniert.',
    sentences: [
      { de: 'Der Mitarbeiter arbeitet am Computer.', en: 'The employee is working on the computer.' },
      { de: 'Die Chefin hat einen wichtigen Termin.', en: 'The boss has an important appointment.' },
      { de: 'Die Kollegen machen eine Kaffeepause.', en: 'The colleagues are taking a coffee break.' }
    ],
    items: [
      { de: 'die Arbeit', en: 'work', article: 'die' },
      { de: 'der Beruf', en: 'job / profession', article: 'der' },
      { de: 'das Büro', en: 'office', article: 'das' },
      { de: 'der Chef', en: 'boss / manager', article: 'der' },
      { de: 'die Chefin', en: 'female boss', article: 'die' },
      { de: 'der Mitarbeiter', en: 'employee', article: 'der' },
      { de: 'die Mitarbeiterin', en: 'female employee', article: 'die' },
      { de: 'der Computer', en: 'computer', article: 'der' },
      { de: 'der Tisch', en: 'desk / table', article: 'der' },
      { de: 'der Stuhl', en: 'chair', article: 'der' },
      { de: 'das Telefon', en: 'telephone', article: 'das' },
      { de: 'das Handy', en: 'mobile phone', article: 'das' },
      { de: 'die E-Mail', en: 'email', article: 'die' },
      { de: 'der Termin', en: 'appointment', article: 'der' },
      { de: 'die Pause', en: 'break', article: 'die' },
      { de: 'arbeiten', en: 'to work', article: 'verb' },
      { de: 'schreiben', en: 'to write', article: 'verb' },
      { de: 'telefonieren', en: 'to make a call', article: 'verb' },
      { de: 'sprechen', en: 'to speak', article: 'verb' },
      { de: 'lesen', en: 'to read', article: 'verb' },
      { de: 'sitzen', en: 'to sit', article: 'verb' }
    ]
  },
  {
    id: 13,
    icon: 'Activity',
    title: 'Arzt & Gesundheit',
    subtitle: 'Doctor, Body & Health',
    tip: 'Typischer Ausdruck: Ich habe Kopfschmerzen / Bauchschmerzen / Halsschmerzen.',
    sentences: [
      { de: 'Ich habe Kopfschmerzen.', en: 'I have a headache.' },
      { de: 'Ich habe Zahnschmerzen.', en: 'I have a toothache.' },
      { de: 'Der Mann ist beim Arzt.', en: 'The man is at the doctor.' },
      { de: 'Die Frau braucht Medizin.', en: 'The woman needs medicine.' }
    ],
    items: [
      { de: 'der Arzt', en: 'doctor', article: 'der' },
      { de: 'die Ärztin', en: 'female doctor', article: 'die' },
      { de: 'der Patient', en: 'patient', article: 'der' },
      { de: 'die Patientin', en: 'female patient', article: 'die' },
      { de: 'das Krankenhaus', en: 'hospital', article: 'das' },
      { de: 'die Apotheke', en: 'pharmacy', article: 'die' },
      { de: 'die Medizin', en: 'medicine', article: 'die' },
      { de: 'der Kopf', en: 'head', article: 'der' },
      { de: 'der Bauch', en: 'belly / stomach', article: 'der' },
      { de: 'der Arm', en: 'arm', article: 'der' },
      { de: 'die Hand', en: 'hand', article: 'die' },
      { de: 'das Bein', en: 'leg', article: 'das' },
      { de: 'der Fuß', en: 'foot', article: 'der' },
      { de: 'das Auge', en: 'eye', article: 'das' },
      { de: 'das Ohr', en: 'ear', article: 'das' },
      { de: 'der Mund', en: 'mouth', article: 'der' },
      { de: 'der Zahn', en: 'tooth', article: 'der' }
    ]
  },
  {
    id: 14,
    icon: 'Palette',
    title: 'Farben',
    subtitle: 'Colors for Bildbeschreibung',
    tip: 'Farben sind Gold wert für Bilder: "Die Jacke ist blau", "Das Auto ist rot".',
    sentences: [
      { de: 'Die Tasche ist schwarz.', en: 'The bag is black.' },
      { de: 'Das Auto ist rot.', en: 'The car is red.' },
      { de: 'Die Jacke ist blau.', en: 'The jacket is blue.' },
      { de: 'Der Tisch ist braun.', en: 'The table is brown.' }
    ],
    items: [
      { de: 'rot', en: 'red', article: 'adj' },
      { de: 'blau', en: 'blue', article: 'adj' },
      { de: 'grün', en: 'green', article: 'adj' },
      { de: 'gelb', en: 'yellow', article: 'adj' },
      { de: 'schwarz', en: 'black', article: 'adj' },
      { de: 'weiß', en: 'white', article: 'adj' },
      { de: 'grau', en: 'grey', article: 'adj' },
      { de: 'braun', en: 'brown', article: 'adj' },
      { de: 'orange', en: 'orange', article: 'adj' },
      { de: 'rosa', en: 'pink', article: 'adj' },
      { de: 'lila', en: 'purple', article: 'adj' }
    ]
  },
  {
    id: 15,
    icon: 'Maximize2',
    title: 'Größen & Beschreibung',
    subtitle: 'Adjectives & Attributes',
    tip: 'Vergleiche und Gegensätze: groß/klein, alt/jung, offen/geschlossen.',
    sentences: [
      { de: 'Ich sehe einen großen Baum.', en: 'I see a big tree.' },
      { de: 'Die Tasche ist klein.', en: 'The bag is small.' },
      { de: 'Das Zimmer ist groß und hell.', en: 'The room is large and bright.' }
    ],
    items: [
      { de: 'groß', en: 'big / tall', article: 'adj' },
      { de: 'klein', en: 'small', article: 'adj' },
      { de: 'lang', en: 'long', article: 'adj' },
      { de: 'kurz', en: 'short', article: 'adj' },
      { de: 'dick', en: 'thick / fat', article: 'adj' },
      { de: 'dünn', en: 'thin', article: 'adj' },
      { de: 'alt', en: 'old', article: 'adj' },
      { de: 'jung', en: 'young', article: 'adj' },
      { de: 'schön', en: 'beautiful', article: 'adj' },
      { de: 'neu', en: 'new', article: 'adj' },
      { de: 'sauber', en: 'clean', article: 'adj' },
      { de: 'schmutzig', en: 'dirty', article: 'adj' },
      { de: 'voll', en: 'full', article: 'adj' },
      { de: 'leer', en: 'empty', article: 'adj' },
      { de: 'offen', en: 'open', article: 'adj' },
      { de: 'geschlossen', en: 'closed', article: 'adj' }
    ]
  },
  {
    id: 16,
    icon: 'Compass',
    title: 'Positionen & Präpositionen',
    subtitle: 'SUPER WICHTIG für Bildbeschreibung',
    tip: 'Prüfer lieben Positionsangaben: Links sehe ich..., Rechts steht..., Im Hintergrund...',
    sentences: [
      { de: 'Links sehe ich eine Frau.', en: 'On the left I see a woman.' },
      { de: 'Rechts steht ein Tisch.', en: 'On the right stands a table.' },
      { de: 'In der Mitte sehe ich ein Kind.', en: 'In the middle I see a child.' },
      { de: 'Im Hintergrund ist ein Baum.', en: 'In the background there is a tree.' },
      { de: 'Auf dem Tisch steht ein Teller.', en: 'On the table stands a plate.' },
      { de: 'Neben dem Mann steht eine Frau.', en: 'Next to the man stands a woman.' }
    ],
    items: [
      { de: 'links', en: 'left', article: 'prep' },
      { de: 'rechts', en: 'right', article: 'prep' },
      { de: 'oben', en: 'above / top', article: 'prep' },
      { de: 'unten', en: 'below / bottom', article: 'prep' },
      { de: 'vorne', en: 'in front', article: 'prep' },
      { de: 'hinten', en: 'behind', article: 'prep' },
      { de: 'in der Mitte', en: 'in the middle', article: 'prep' },
      { de: 'neben', en: 'next to / beside', article: 'prep' },
      { de: 'vor', en: 'in front of', article: 'prep' },
      { de: 'hinter', en: 'behind', article: 'prep' },
      { de: 'auf', en: 'on', article: 'prep' },
      { de: 'unter', en: 'under', article: 'prep' },
      { de: 'über', en: 'above / over', article: 'prep' },
      { de: 'zwischen', en: 'between', article: 'prep' },
      { de: 'gegenüber', en: 'opposite', article: 'prep' },
      { de: 'in', en: 'in', article: 'prep' },
      { de: 'draußen', en: 'outside', article: 'prep' },
      { de: 'drinnen', en: 'inside', article: 'prep' }
    ]
  },
  {
    id: 17,
    icon: 'Sparkles',
    title: 'Bildbeschreibung — Verben',
    subtitle: 'Die wichtigsten Verben für Bilder',
    tip: 'Konjugiere sicher im Präsens: Er steht, sie sitzt, das Kind spielt, sie sprechen.',
    sentences: [
      { de: 'Der Mann arbeitet und spricht mit der Kundin.', en: 'The man is working and talking with the customer.' },
      { de: 'Die Kinder spielen draußen im Park.', en: 'The children are playing outside in the park.' }
    ],
    items: [
      { de: 'sehen', en: 'to see', article: 'verb' },
      { de: 'stehen', en: 'to stand', article: 'verb' },
      { de: 'sitzen', en: 'to sit', article: 'verb' },
      { de: 'liegen', en: 'to lie', article: 'verb' },
      { de: 'laufen', en: 'to walk / run', article: 'verb' },
      { de: 'gehen', en: 'to go / walk', article: 'verb' },
      { de: 'sprechen', en: 'to speak', article: 'verb' },
      { de: 'essen', en: 'to eat', article: 'verb' },
      { de: 'trinken', en: 'to drink', article: 'verb' },
      { de: 'kaufen', en: 'to buy', article: 'verb' },
      { de: 'verkaufen', en: 'to sell', article: 'verb' },
      { de: 'lesen', en: 'to read', article: 'verb' },
      { de: 'schreiben', en: 'to write', article: 'verb' },
      { de: 'arbeiten', en: 'to work', article: 'verb' },
      { de: 'spielen', en: 'to play', article: 'verb' },
      { de: 'schlafen', en: 'to sleep', article: 'verb' },
      { de: 'warten', en: 'to wait', article: 'verb' },
      { de: 'telefonieren', en: 'to make a call', article: 'verb' },
      { de: 'fahren', en: 'to drive / go', article: 'verb' },
      { de: 'tragen', en: 'to wear / carry', article: 'verb' },
      { de: 'machen', en: 'to do / make', article: 'verb' },
      { de: 'kochen', en: 'to cook', article: 'verb' }
    ]
  },
  {
    id: 18,
    icon: 'MessageSquareText',
    title: 'Die wichtigsten Bild-Sätze',
    subtitle: 'Satzmuster & Formeln für 100% Sicherheit',
    tip: 'Präge dir diese 5 Bausteine ein: Start, Personen, Position, Aktionen und Vermutung!',
    sentences: [
      { de: 'Auf dem Bild sehe ich zwei Personen.', en: 'In the picture I see two people.' },
      { de: 'Links sehe ich einen Mann, rechts steht eine Frau.', en: 'On the left I see a man, on the right stands a woman.' },
      { de: 'Ich glaube, dass sie am Bahnhof sind.', en: 'I think that they are at the train station.' }
    ],
    items: [
      { de: 'Auf dem Bild sehe ich ...', en: 'In the picture I see ...', article: 'phrase' },
      { de: 'Ich sehe einen Mann / eine Frau / ein Kind.', en: 'I see a man / a woman / a child.', article: 'phrase' },
      { de: 'Auf dem Bild sind zwei Personen.', en: 'In the picture there are two people.', article: 'phrase' },
      { de: 'Links sehe ich ... / Rechts sehe ich ...', en: 'On the left I see ... / On the right I see ...', article: 'phrase' },
      { de: 'In der Mitte sehe ich ...', en: 'In the middle I see ...', article: 'phrase' },
      { de: 'Im Hintergrund sehe ich ...', en: 'In the background I see ...', article: 'phrase' },
      { de: 'Im Vordergrund sehe ich ...', en: 'In the foreground I see ...', article: 'phrase' },
      { de: 'Der Mann sitzt. / Die Frau steht.', en: 'The man is sitting. / The woman is standing.', article: 'phrase' },
      { de: 'Das Kind spielt. / Die Frau kauft ein.', en: 'The child is playing. / The woman is shopping.', article: 'phrase' },
      { de: 'Der Mann liest ein Buch.', en: 'The man is reading a book.', article: 'phrase' },
      { de: 'Ich glaube, dass ...', en: 'I believe that ...', article: 'phrase' },
      { de: 'Vielleicht ...', en: 'Maybe ...', article: 'phrase' },
      { de: 'Ich denke, dass ...', en: 'I think that ...', article: 'phrase' },
      { de: 'Ich glaube, die Frau ist eine Verkäuferin.', en: 'I believe the woman is a saleswoman.', article: 'phrase' }
    ]
  },
  {
    id: 19,
    icon: 'Crown',
    title: 'Der goldene A1-Wortschatz',
    subtitle: 'Golden A1 Vocabulary — Wenn die Zeit knapp ist!',
    tip: 'Wenn du wenig Zeit hast: Lerne diese Wörter zuerst! Sie decken 90% aller A1-Bilder ab.',
    sentences: [
      { de: 'Mann, Frau, Haus, Tisch, Auto, Apfel, Jacke, Baum, stehen, sitzen.', en: 'Key vocabulary across all exams.' }
    ],
    items: [
      { de: 'der Mann · die Frau · das Kind', en: 'People (Essential)', article: 'plural' },
      { de: 'die Familie · der Kunde · die Verkäuferin', en: 'People & Service', article: 'plural' },
      { de: 'das Haus · die Wohnung · das Zimmer', en: 'Places: Living', article: 'plural' },
      { de: 'der Supermarkt · das Geschäft · das Restaurant', en: 'Places: City', article: 'plural' },
      { de: 'der Bahnhof · der Flughafen · das Hotel', en: 'Places: Travel', article: 'plural' },
      { de: 'der Tisch · der Stuhl · das Sofa · das Regal', en: 'Objects: Furniture', article: 'plural' },
      { de: 'die Tasche · der Koffer · das Handy · das Buch', en: 'Objects: Accessories', article: 'plural' },
      { de: 'der Teller · das Glas · die Flasche · das Wasser', en: 'Food & Kitchen', article: 'plural' },
      { de: 'der Apfel · die Banane · das Brot · der Kaffee', en: 'Food essentials', article: 'plural' },
      { de: 'die Jacke · der Pullover · das T-Shirt · die Hose', en: 'Clothes', article: 'plural' },
      { de: 'das Kleid · die Schuhe · die Tasche', en: 'Clothes & Shoes', article: 'plural' },
      { de: 'der Baum · die Blume · das Gras · die Sonne', en: 'Nature', article: 'plural' },
      { de: 'das Auto · der Bus · der Zug · das Fahrrad', en: 'Transport', article: 'plural' },
      { de: 'links · rechts · vorne · hinten · oben · unten', en: 'Positions', article: 'prep' },
      { de: 'in der Mitte · neben · auf · unter · vor · hinter', en: 'Prepositions', article: 'prep' },
      { de: 'stehen · sitzen · gehen · laufen · essen · trinken', en: 'Verbs (Body & Food)', article: 'verb' },
      { de: 'kaufen · arbeiten · lesen · schreiben · sprechen · spielen', en: 'Verbs (Daily life)', article: 'verb' }
    ]
  }
];
