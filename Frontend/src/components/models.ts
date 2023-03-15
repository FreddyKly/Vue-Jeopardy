export interface QuestionCard {
  gridID: number;
  points: number;
  question: string;
}

export interface Category {
  id: number;
  topic: string;
  questions: QuestionCard[];
}