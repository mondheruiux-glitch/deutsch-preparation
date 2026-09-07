import React from 'react';

export const Table = ({ headers, rows }: { headers?: string[], rows: (string | React.ReactNode)[][] }) => (
  <div className="overflow-x-auto rounded-2xl border border-surface-container-high shadow-sm my-4 bg-surface-container max-w-full">
    <table className="w-full text-left border-collapse min-w-full">
      {headers && (
        <thead>
          <tr className="bg-primary-container/50">
            {headers.map((h, i) => (
              <th key={i} className="p-2.5 sm:p-3 font-fredoka text-sm sm:text-base md:text-lg text-primary border-b border-surface-container-high whitespace-nowrap">{h}</th>
            ))}
          </tr>
        </thead>
      )}
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} className="border-b border-surface-container-high last:border-b-0 hover:bg-surface-container-high/30">
            {row.map((cell, j) => (
              <td key={j} className="p-2.5 sm:p-3 font-medium text-on-surface text-sm sm:text-base md:text-lg whitespace-nowrap">{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export const Example = ({ de, en }: { de: string | React.ReactNode, en?: string | React.ReactNode }) => (
  <div className="bg-secondary-container/30 p-4 rounded-2xl border border-secondary-container/50 my-3 shadow-sm">
    <p className="font-fredoka text-xl text-on-surface font-medium">{de}</p>
    {en && <p className="text-on-surface-variant mt-1 font-medium">{en}</p>}
  </div>
);

export const Alert = ({ children, type = 'info' }: { children: React.ReactNode, type?: 'info' | 'warning' | 'error' | 'success' }) => {
  const styles = {
    info: 'bg-blue-100 text-blue-900 border-blue-200',
    warning: 'bg-amber-100 text-amber-900 border-amber-200',
    error: 'bg-red-100 text-red-900 border-red-200',
    success: 'bg-green-100 text-green-900 border-green-200'
  };
  return (
    <div className={`p-4 rounded-2xl border my-4 shadow-sm font-medium ${styles[type]}`}>
      {children}
    </div>
  );
};

export const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h3 className="font-fredoka text-2xl text-on-surface mt-8 mb-4 flex items-center gap-2">{children}</h3>
);

export const Text = ({ children }: { children: React.ReactNode }) => (
  <p className="text-on-surface-variant mb-4 leading-relaxed text-lg font-medium">{children}</p>
);

export interface KonjugationLesson {
  id: string;
  number: number | string;
  title: string;
  icon: string;
  color: string;
  content: React.ReactNode;
}

export const konjugationLessons: KonjugationLesson[] = [
  {
    id: 'l1', number: 1, title: 'Personal pronouns', icon: '👤', color: 'bg-blue-100 text-blue-600',
    content: (
      <>
        <Text>Before conjugating verbs, memorize these.</Text>
        <Table headers={['German', 'English']} rows={[
          ['ich', 'I'],
          ['du', 'you — informal, one person'],
          ['er', 'he'],
          ['sie', 'she'],
          ['es', 'it'],
          ['wir', 'we'],
          ['ihr', 'you — informal plural'],
          ['sie', 'they'],
          ['Sie', 'you — formal']
        ]} />
        <Alert type="warning">
          <strong>Very important:</strong> "sie" can mean "she" or "they". But "Sie" with a capital S = formal you.
        </Alert>
      </>
    )
  },
  {
    id: 'l2', number: 2, title: 'sein — to be', icon: '🌟', color: 'bg-amber-100 text-amber-600',
    content: (
      <>
        <Text><strong>sein = to be</strong>. This is one of the most important verbs in German.</Text>
        <Table headers={['Person', 'sein']} rows={[
          ['ich', 'bin'], ['du', 'bist'], ['er/sie/es', 'ist'],
          ['wir', 'sind'], ['ihr', 'seid'], ['sie/Sie', 'sind']
        ]} />
        <SectionTitle>Examples</SectionTitle>
        <Example de="Ich bin Mondher." en="I am Mondher." />
        <Example de="Du bist nett." en="You are nice." />
        <Example de="Er ist mein Bruder." en="He is my brother." />
        <Example de="Sie ist meine Frau." en="She is my wife." />
        <Example de="Wir sind Freunde." en="We are friends." />
        <Example de="Ihr seid müde." en="You are tired." />
        <Example de="Sie sind aus Deutschland." en="They are from Germany." />
        <Example de="Sie sind Herr Müller." en="You are Mr. Müller." />
        <Alert type="success">🚨 <strong>Memorize:</strong> bin – bist – ist – sind – seid – sind</Alert>
      </>
    )
  },
  {
    id: 'l3', number: 3, title: 'haben — to have', icon: '🤲', color: 'bg-green-100 text-green-600',
    content: (
      <>
        <Text><strong>haben = to have</strong></Text>
        <Table headers={['Person', 'haben']} rows={[
          ['ich', 'habe'], ['du', 'hast'], ['er/sie/es', 'hat'],
          ['wir', 'haben'], ['ihr', 'habt'], ['sie/Sie', 'haben']
        ]} />
        <SectionTitle>Examples</SectionTitle>
        <Example de="Ich habe ein Auto." en="I have a car." />
        <Example de="Du hast einen Bruder." en="You have a brother." />
        <Example de="Sie hat ein Kind." en="She has a child." />
        <Example de="Wir haben ein Haus." en="We have a house." />
        <Example de="Ihr habt Zeit." en="You have time." />
        <Example de="Sie haben Hunger." en="They have hunger (are hungry)." />
        <Alert type="success">🚨 <strong>Memorize:</strong> habe – hast – hat – haben – habt – haben</Alert>
      </>
    )
  },
  {
    id: 'l4', number: 4, title: 'Regular verbs', icon: '📏', color: 'bg-purple-100 text-purple-600',
    content: (
      <>
        <Text>This is the main A1 conjugation pattern. Example: <strong>machen = to do/make</strong></Text>
        <Alert type="info">Remove <strong>-en</strong> (machen → mach), then add the ending.</Alert>
        <Table headers={['Person', 'Ending', 'machen']} rows={[
          ['ich', '-e', 'mache'],
          ['du', '-st', 'machst'],
          ['er/sie/es', '-t', 'macht'],
          ['wir', '-en', 'machen'],
          ['ihr', '-t', 'macht'],
          ['sie/Sie', '-en', 'machen']
        ]} />
      </>
    )
  },
  {
    id: 'l5', number: 5, title: 'Verb endings', icon: '🧩', color: 'bg-pink-100 text-pink-600',
    content: (
      <>
        <Text>Learn this pattern by heart:</Text>
        <Alert type="success">ich <strong>-e</strong> | du <strong>-st</strong> | er/sie/es <strong>-t</strong> | wir <strong>-en</strong> | ihr <strong>-t</strong> | sie/Sie <strong>-en</strong></Alert>
        <SectionTitle>Examples</SectionTitle>
        <Table headers={['Person', 'wohnen', 'arbeiten', 'lernen']} rows={[
          ['ich', 'wohne', 'arbeite', 'lerne'],
          ['du', 'wohnst', 'arbeitest', 'lernst'],
          ['er/sie/es', 'wohnt', 'arbeitet', 'lernt'],
          ['wir', 'wohnen', 'arbeiten', 'lernen'],
          ['ihr', 'wohnt', 'arbeitet', 'lernt'],
          ['sie/Sie', 'wohnen', 'arbeiten', 'lernen']
        ]} />
      </>
    )
  },
  {
    id: 'l6', number: 6, title: 'Verbs with -ieren', icon: '📞', color: 'bg-teal-100 text-teal-600',
    content: (
      <>
        <Text>These verbs are also regular, but they do not add <strong>-en</strong> to the stem (they already end in it).</Text>
        <Table headers={['Person', 'telefonieren']} rows={[
          ['ich', 'telefoniere'], ['du', 'telefonierst'], ['er/sie/es', 'telefoniert'],
          ['wir', 'telefonieren'], ['ihr', 'telefoniert'], ['sie/Sie', 'telefonieren']
        ]} />
        <SectionTitle>Other important A1 examples</SectionTitle>
        <div className="flex flex-wrap gap-2 mb-4">
          {['studieren', 'fotografieren', 'organisieren', 'probieren', 'reparieren'].map(v => (
            <span key={v} className="bg-surface-container-high px-3 py-1 rounded-full text-on-surface font-medium">{v}</span>
          ))}
        </div>
        <Example de="Ich studiere Deutsch." />
        <Example de="Wir telefonieren jeden Abend." />
      </>
    )
  },
  {
    id: 'l7', number: 7, title: 'Important irregular verbs', icon: '⚡', color: 'bg-red-100 text-red-600',
    content: (
      <>
        <Text>You need these for A1.</Text>
        
        <SectionTitle>fahren — to drive/go (a → ä)</SectionTitle>
        <Table rows={[['ich', 'fahre'], ['du', 'fährst'], ['er', 'fährt'], ['wir', 'fahren'], ['ihr', 'fahrt'], ['sie', 'fahren']]} />
        <Example de="Du fährst nach Berlin." />

        <SectionTitle>lesen — to read (e → ie)</SectionTitle>
        <Table rows={[['ich', 'lese'], ['du', 'liest'], ['er', 'liest'], ['wir', 'lesen'], ['ihr', 'lest'], ['sie', 'lesen']]} />
        <Example de="Ich lese ein Buch." />
        <Example de="Sie liest die Zeitung." />

        <SectionTitle>sehen — to see (e → ie)</SectionTitle>
        <Table rows={[['ich', 'sehe'], ['du', 'siehst'], ['er', 'sieht'], ['wir', 'sehen'], ['ihr', 'seht'], ['sie', 'sehen']]} />
        <Example de="Ich sehe einen Film." />

        <SectionTitle>sprechen — to speak (e → i)</SectionTitle>
        <Table rows={[['ich', 'spreche'], ['du', 'sprichst'], ['er', 'spricht'], ['wir', 'sprechen'], ['ihr', 'sprecht'], ['sie', 'sprechen']]} />
        <Example de="Ich spreche Deutsch." />

        <SectionTitle>essen — to eat (e → i)</SectionTitle>
        <Table rows={[['ich', 'esse'], ['du', 'isst'], ['er', 'isst'], ['wir', 'essen'], ['ihr', 'esst'], ['sie', 'essen']]} />
        <Example de="Ich esse Pizza." />

        <SectionTitle>nehmen — to take (e → i, hm → mm)</SectionTitle>
        <Table rows={[['ich', 'nehme'], ['du', 'nimmst'], ['er', 'nimmt'], ['wir', 'nehmen'], ['ihr', 'nehmt'], ['sie', 'nehmen']]} />
        <Example de="Ich nehme einen Kaffee." />

        <SectionTitle>schlafen — to sleep (a → ä)</SectionTitle>
        <Table rows={[['ich', 'schlafe'], ['du', 'schläfst'], ['er', 'schläft'], ['wir', 'schlafen'], ['ihr', 'schlaft'], ['sie', 'schlafen']]} />
        <Example de="Ich schlafe acht Stunden." />
      </>
    )
  },
  {
    id: 'l8', number: 8, title: 'Vowel-changing verbs', icon: '🔠', color: 'bg-indigo-100 text-indigo-600',
    content: (
      <>
        <Alert type="warning"><strong>Very important rule:</strong> Usually the change happens only with <strong>du</strong> and <strong>er/sie/es</strong>.</Alert>
        <Table headers={['Verb', 'Change', 'ich', 'du', 'er/sie', 'wir']} rows={[
          ['fahren', 'a → ä', 'fahre', 'fährst', 'fährt', 'fahren'],
          ['laufen', 'au → äu', 'laufe', 'läufst', 'läuft', 'laufen'],
          ['sprechen', 'e → i', 'spreche', 'sprichst', 'spricht', 'sprechen'],
          ['lesen', 'e → ie', 'lese', 'liest', 'liest', 'lesen']
        ]} />
        <SectionTitle>Important pattern</SectionTitle>
        <Alert type="error">Don't say: ❌ ich fährt <br/>Say: ✅ ich fahre</Alert>
        <Alert type="error">Don't say: ❌ wir sprecht <br/>Say: ✅ wir sprechen</Alert>
      </>
    )
  },
  {
    id: 'l9', number: 9, title: 'Modal verbs', icon: '🚦', color: 'bg-cyan-100 text-cyan-600',
    content: (
      <>
        <Text>These are extremely important for A1.</Text>
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="bg-surface-container-high px-3 py-1 rounded-full text-on-surface font-medium">können — can</span>
          <span className="bg-surface-container-high px-3 py-1 rounded-full text-on-surface font-medium">müssen — must</span>
          <span className="bg-surface-container-high px-3 py-1 rounded-full text-on-surface font-medium">wollen — want</span>
          <span className="bg-surface-container-high px-3 py-1 rounded-full text-on-surface font-medium">möchten — would like</span>
          <span className="bg-surface-container-high px-3 py-1 rounded-full text-on-surface font-medium">dürfen — may</span>
          <span className="bg-surface-container-high px-3 py-1 rounded-full text-on-surface font-medium">sollen — should</span>
        </div>
        <Table headers={['Person', 'können', 'müssen', 'wollen', 'möchten', 'dürfen', 'sollen']} rows={[
          ['ich', 'kann', 'muss', 'will', 'möchte', 'darf', 'soll'],
          ['du', 'kannst', 'musst', 'willst', 'möchtest', 'darfst', 'sollst'],
          ['er/sie/es', 'kann', 'muss', 'will', 'möchte', 'darf', 'soll'],
          ['wir', 'können', 'müssen', 'wollen', 'möchten', 'dürfen', 'sollen'],
          ['ihr', 'könnt', 'müsst', 'wollt', 'möchtet', 'dürft', 'sollt'],
          ['sie/Sie', 'können', 'müssen', 'wollen', 'möchten', 'dürfen', 'sollen']
        ]} />
        <Alert type="success">
          🔥 <strong>MODAL VERB + SECOND VERB:</strong> The modal verb is conjugated. The second verb goes to the END in infinitive form.
        </Alert>
        <Example de="Ich kann Deutsch sprechen." />
        <Example de="Ich möchte einen Kaffee trinken." />
        <Example de="Darf ich hier sitzen?" />
      </>
    )
  },
  {
    id: 'l10', number: 10, title: 'Separable verbs', icon: '✂️', color: 'bg-orange-100 text-orange-600',
    content: (
      <>
        <Text>German has verbs such as <strong>aufstehen</strong> (get up). The verb separates in a normal sentence.</Text>
        <Table headers={['Person', 'aufstehen']} rows={[
          ['ich', 'stehe auf'], ['du', 'stehst auf'], ['er/sie/es', 'steht auf'],
          ['wir', 'stehen auf'], ['ihr', 'steht auf'], ['sie/Sie', 'stehen auf']
        ]} />
        <Example de="Ich stehe um 7 Uhr auf." />
        <Alert type="error">Not: ❌ Ich aufstehe um 7 Uhr.</Alert>
        
        <SectionTitle>Other important A1 separable verbs</SectionTitle>
        <Example de="Ich kaufe heute ein." en="einkaufen" />
        <Example de="Ich rufe meine Mutter an." en="anrufen" />
        <Example de="Ich mache die Tür auf." en="aufmachen" />
        <Example de="Ich mache das Fenster zu." en="zumachen" />
        <Example de="Ich lade meine Freunde ein." en="einladen" />
        <Example de="Kommst du mit?" en="mitkommen" />
      </>
    )
  },
  {
    id: 'l11', number: 11, title: 'Inseparable verbs', icon: '🔒', color: 'bg-stone-100 text-stone-600',
    content: (
      <>
        <Text>Some prefixes don't separate.</Text>
        <Alert type="info">Important prefixes: <strong>be-, ver-, er-, ent-, ge-</strong></Alert>
        <Example de="Ich besuche meine Mutter." en="besuchen" />
        <Alert type="error">Not: ❌ Ich suche meine Mutter be.</Alert>
        <SectionTitle>Other examples</SectionTitle>
        <Example de="Ich bezahle die Rechnung." />
        <Example de="Ich verstehe Deutsch." />
        <div className="flex flex-wrap gap-2 mt-4">
          {['bezahlen', 'verstehen', 'verkaufen', 'erzählen', 'bekommen'].map(v => (
            <span key={v} className="bg-surface-container-high px-3 py-1 rounded-full text-on-surface font-medium">{v}</span>
          ))}
        </div>
      </>
    )
  },
  {
    id: 'l12', number: 12, title: 'Reflexive verbs', icon: '🪞', color: 'bg-rose-100 text-rose-600',
    content: (
      <>
        <Text>Some verbs use: <strong>mich / dich / sich / uns / euch / sich</strong></Text>
        <Table headers={['Person', 'sich waschen']} rows={[
          ['ich', 'wasche mich'], ['du', 'wäschst dich'], ['er/sie/es', 'wäscht sich'],
          ['wir', 'waschen uns'], ['ihr', 'wascht euch'], ['sie/Sie', 'waschen sich']
        ]} />
        <SectionTitle>Important A1 reflexive verbs</SectionTitle>
        <div className="flex flex-wrap gap-2 mb-4">
          {['sich waschen', 'sich duschen', 'sich anziehen', 'sich treffen', 'sich fühlen'].map(v => (
            <span key={v} className="bg-surface-container-high px-3 py-1 rounded-full text-on-surface font-medium">{v}</span>
          ))}
        </div>
        <Example de="Wir treffen uns um 18 Uhr." />
      </>
    )
  },
  {
    id: 'l13', number: 13, title: 'wissen (to know)', icon: '🧠', color: 'bg-fuchsia-100 text-fuchsia-600',
    content: (
      <>
        <Text><strong>wissen = to know</strong> (a fact)</Text>
        <Table rows={[
          ['ich', 'weiß'], ['du', 'weißt'], ['er/sie/es', 'weiß'],
          ['wir', 'wissen'], ['ihr', 'wisst'], ['sie/Sie', 'wissen']
        ]} />
        <Example de="Ich weiß das nicht." />
        <Example de="Weißt du das?" />
        <Alert type="success">Very useful: <strong>Ich weiß nicht.</strong> (I don't know.)</Alert>
      </>
    )
  },
  {
    id: 'l14', number: 14, title: 'werden (to become)', icon: '🦋', color: 'bg-lime-100 text-lime-600',
    content: (
      <>
        <Text><strong>werden</strong> can be used in several ways, but at A1 you mainly encounter it in basic expressions.</Text>
        <Table rows={[
          ['ich', 'werde'], ['du', 'wirst'], ['er/sie/es', 'wird'],
          ['wir', 'werden'], ['ihr', 'werdet'], ['sie/Sie', 'werden']
        ]} />
        <Example de="Ich werde müde." en="I am getting tired." />
      </>
    )
  },
  {
    id: 'l15', number: 15, title: 'Imperative', icon: '📣', color: 'bg-yellow-100 text-yellow-600',
    content: (
      <>
        <Text>The imperative is used for commands or requests.</Text>
        <Table headers={['Infinitive', 'Command (du)']} rows={[
          ['kommen', 'Komm!'],
          ['gehen', 'Geh!'],
          ['lesen', 'Lies!'],
          ['sprechen', 'Sprich!'],
          ['warten', 'Warte!']
        ]} />
        <SectionTitle>Formal (Sie)</SectionTitle>
        <Alert type="info">Verb + Sie (e.g. Kommen Sie! Warten Sie!)</Alert>
        <Example de="Komm bitte!" />
        <Example de="Sprechen Sie bitte langsam." />
      </>
    )
  },
  {
    id: 'l16', number: 16, title: 'Perfekt — basic past', icon: '⏳', color: 'bg-gray-100 text-gray-600',
    content: (
      <>
        <Text>At A1, you need to understand and use basic past tense, especially Perfekt.</Text>
        <Alert type="info">Structure: <strong>haben/sein + Partizip II</strong></Alert>
        <Example de="Ich habe gearbeitet." />
        <Example de="Ich bin gegangen." />
      </>
    )
  },
  {
    id: 'l17', number: 17, title: 'haben or sein in Perfekt', icon: '⚖️', color: 'bg-sky-100 text-sky-600',
    content: (
      <>
        <SectionTitle>Most verbs use "haben"</SectionTitle>
        <Example de="Ich habe gegessen." />
        <Example de="Ich habe gearbeitet." />
        
        <SectionTitle>Movement/change of location use "sein"</SectionTitle>
        <Example de="Ich bin gegangen." />
        <Example de="Ich bin gefahren." />
        <Example de="Ich bin gekommen." />
        <Example de="Ich bin aufgestanden." />
      </>
    )
  },
  {
    id: 'l18', number: 18, title: 'Common A1 verbs in Perfekt', icon: '📝', color: 'bg-emerald-100 text-emerald-600',
    content: (
      <>
        <Table headers={['Infinitive', 'Perfekt']} rows={[
          ['machen', 'hat gemacht'],
          ['lernen', 'hat gelernt'],
          ['arbeiten', 'hat gearbeitet'],
          ['kaufen', 'hat gekauft'],
          ['spielen', 'hat gespielt'],
          ['essen', 'hat gegessen'],
          ['trinken', 'hat getrunken'],
          ['sprechen', 'hat gesprochen'],
          ['lesen', 'hat gelesen'],
          ['schreiben', 'hat geschrieben'],
          ['nehmen', 'hat genommen'],
          ['kommen', 'ist gekommen'],
          ['gehen', 'ist gegangen'],
          ['fahren', 'ist gefahren'],
          ['aufstehen', 'ist aufgestanden']
        ]} />
      </>
    )
  },
  {
    id: 'l19', number: 19, title: 'Negation with verbs', icon: '🚫', color: 'bg-red-100 text-red-600',
    content: (
      <>
        <SectionTitle>nicht</SectionTitle>
        <Text>Used to negate verbs, adjectives, or general information.</Text>
        <Example de="Ich arbeite nicht." />
        <Example de="Ich bin nicht müde." />
        
        <SectionTitle>kein</SectionTitle>
        <Text>Used mainly with nouns without a definite article.</Text>
        <Example de="Ich habe kein Auto." />
        <Example de="Ich habe keine Zeit." />
      </>
    )
  },
  {
    id: 'l20', number: 20, title: 'Questions + verb position', icon: '❓', color: 'bg-violet-100 text-violet-600',
    content: (
      <>
        <SectionTitle>Yes/no questions (Verb comes first)</SectionTitle>
        <Example de="Kommst du aus Tunesien?" />
        <Example de="Hast du ein Auto?" />
        <Example de="Kannst du Deutsch sprechen?" />
        
        <SectionTitle>W-questions (Question word + verb + subject)</SectionTitle>
        <Example de="Wo wohnst du?" />
        <Example de="Woher kommst du?" />
        <Example de="Was machst du?" />
        <Example de="Wie heißen Sie?" />
      </>
    )
  },
  {
    id: 'l21', number: 21, title: 'Verbs with accusative', icon: '🎯', color: 'bg-blue-100 text-blue-600',
    content: (
      <>
        <Text>Some common verbs take an object.</Text>
        <Alert type="warning">Important A1 masculine change: <strong>der → den</strong>, <strong>ein → einen</strong></Alert>
        <Example de="Ich sehe den Mann." />
        <Example de="Ich kaufe einen Tisch." />
        <Text>But neuter and feminine stay the same:</Text>
        <Example de="Ich kaufe eine Tasche." />
        <Example de="Ich kaufe ein Auto." />
      </>
    )
  },
  {
    id: 'l22', number: 22, title: 'Verbs with dative', icon: '🎁', color: 'bg-pink-100 text-pink-600',
    content: (
      <>
        <Text>Some common verbs use dative (e.g. helfen, gefallen, gehören, schmecken).</Text>
        <Table headers={['Nominative', 'Dative']} rows={[
          ['ich', 'mir'], ['du', 'dir'], ['er/es', 'ihm'], ['sie', 'ihr'],
          ['wir', 'uns'], ['ihr', 'euch'], ['sie/Sie', 'ihnen/Ihnen']
        ]} />
        <Example de="Ich helfe meiner Mutter." />
        <Example de="Das gefällt mir." />
        <Example de="Das schmeckt mir." />
      </>
    )
  },
  {
    id: 'l23', number: 23, title: 'Complete A1 verb list', icon: '📋', color: 'bg-slate-100 text-slate-600',
    content: (
      <>
        <Text>This is the list I recommend memorizing for your ÖSD preparation.</Text>
        
        <SectionTitle>Basic</SectionTitle>
        <Text>sein, haben, werden, heißen, wohnen, leben, kommen, gehen, machen, tun</Text>
        
        <SectionTitle>Communication</SectionTitle>
        <Text>sprechen, sagen, fragen, antworten, hören, lesen, schreiben, verstehen, wissen, lernen</Text>
        
        <SectionTitle>Everyday</SectionTitle>
        <Text>essen, trinken, schlafen, kaufen, bezahlen, brauchen, nehmen, geben, bringen, holen</Text>

        <SectionTitle>Movement</SectionTitle>
        <Text>gehen, kommen, fahren, fliegen, laufen, reisen, ankommen, einsteigen, aussteigen</Text>
      </>
    )
  },
  {
    id: 'l24', number: 24, title: 'A1 Master Table & Tips', icon: '🏆', color: 'bg-amber-100 text-amber-600',
    content: (
      <>
        <SectionTitle>A1 Master Table</SectionTitle>
        <Table headers={['Verb', 'ich', 'du', 'er/sie/es']} rows={[
          ['sein', 'bin', 'bist', 'ist'],
          ['haben', 'habe', 'hast', 'hat'],
          ['machen', 'mache', 'machst', 'macht'],
          ['arbeiten', 'arbeite', 'arbeitest', 'arbeitet'],
          ['fahren', 'fahre', 'fährst', 'fährt'],
          ['sprechen', 'spreche', 'sprichst', 'spricht'],
          ['sehen', 'sehe', 'siehst', 'sieht'],
          ['essen', 'esse', 'isst', 'isst'],
          ['können', 'kann', 'kannst', 'kann'],
          ['müssen', 'muss', 'musst', 'muss'],
          ['wollen', 'will', 'willst', 'will'],
          ['dürfen', 'darf', 'darfst', 'darf']
        ]} />
        <SectionTitle>🎯 Exam Sentence Patterns</SectionTitle>
        <ul className="list-disc pl-5 space-y-2 text-on-surface-variant font-medium text-lg mb-8">
          <li><strong>Ich + verb:</strong> Ich wohne in Tunis.</li>
          <li><strong>Ich + verb + object:</strong> Ich trinke einen Kaffee.</li>
          <li><strong>Ich + modal + inf:</strong> Ich kann Deutsch sprechen.</li>
          <li><strong>Ich + separable:</strong> Ich stehe um 7 Uhr auf.</li>
          <li><strong>Perfekt:</strong> Ich habe Deutsch gelernt.</li>
          <li><strong>Question:</strong> Wo wohnen Sie?</li>
          <li><strong>Request:</strong> Öffnen Sie bitte das Fenster.</li>
        </ul>
        <SectionTitle>💡 Best way to study this</SectionTitle>
        <Alert type="success">
          Don't memorize 100 conjugation tables separately.<br/><br/>
          Memorize the basic pattern and practice changing the subject:<br/>
          <strong>Ich</strong> mache Deutsch → <strong>Du</strong> machst Deutsch → <strong>Er</strong> macht Deutsch.
        </Alert>
      </>
    )
  }
];
