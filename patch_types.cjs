const fs = require('fs');
let types = fs.readFileSync('src/types.ts', 'utf8');

types = types.replace(/export type LesenExerciseType[\s\S]*$/, '');

types += `
export type OesdTaskType = 'matching' | 'yes_no';

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

export type OesdTask = OesdMatchingTask | OesdYesNoTask;

export interface LesenTest {
  id: string;
  title: string;
  difficulty: string;
  timeLimitInMinutes: number;
  tasks: OesdTask[];
}
`;
fs.writeFileSync('src/types.ts', types);
