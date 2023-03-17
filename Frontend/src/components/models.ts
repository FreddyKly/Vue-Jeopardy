export interface QuestionCard {
  gridID: number;
  points: number;
  question: string;
  edited: boolean;
}

export interface Category {
  id: number;
  topic: string;
  questions: QuestionCard[];
}