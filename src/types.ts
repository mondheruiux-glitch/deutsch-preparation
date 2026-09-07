export interface Phrase {
  de: string;
  en: string;
  isAnswer?: boolean;
}

export interface Topic {
  id: string;
  title: string;
  icon: string;
  image: string;
  bildbeschreibung: Phrase[];
  situation: Phrase[];
  vocabulary: Phrase[];
}

export interface BildWortschatzTopic {
  id: number;
  image: string;
  title: string;
  englishTitle: string;
  icon: string;
  vocabulary: {
    german: string;
    english: string;
    category?: string;
  }[];
  verbs: {
    german: string;
    english: string;
  }[];
  sentences: {
    german: string;
    english: string;
  }[];
  description: string[];
  bildbeschreibung?: {
    de: string;
    en: string;
  }[];
  fragen?: {
    question: string;
    answer: string;
    questionEn?: string;
    answerEn?: string;
  }[];
}

export interface SchreibenTheme {
  id: string;
  title: string;
  icon: string;
  situation: string;
  questions: Phrase[];
  vocabulary: Phrase[];
  usefulSentences: Phrase[];
  modelAnswer: {
    de: string;
    en: string;
  };
}


export type OesdTaskType = 'matching' | 'yes_no' | 'multiple_choice';

export interface OesdMatchingTask {
  id: string;
  type: 'matching';
  title: string;
  instruction: string;
  situations: { id: string; number: number; text: string }[];
  options: { id: string; content: string; isSign?: boolean }[];
  answers: Record<string, string>;
  explanations: Record<string, string>;
}

export interface OesdYesNoTask {
  id: string;
  type: 'yes_no';
  title: string;
  instruction: string;
  items: {
    id: string;
    text: string;
    questions: {
      id: string;
      number: number;
      text: string;
      answer: 'JA' | 'NEIN';
      explanation: string;
    }[];
  }[];
}

export interface OesdMultipleChoiceTask {
  id: string;
  type: 'multiple_choice';
  title: string;
  instruction: string;
  items: {
    id: string;
    text?: string;
    questionNumber: number;
    question: string;
    options: { id: string; text: string }[];
    answer: string;
    explanation: string;
  }[];
}

export type OesdTask = OesdMatchingTask | OesdYesNoTask | OesdMultipleChoiceTask;

export interface LesenTest {
  id: string;
  title: string;
  difficulty: string;
  timeLimitInMinutes: number;
  tasks: OesdTask[];
}
