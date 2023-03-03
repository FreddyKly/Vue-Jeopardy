export interface QuestionCard {
  id: number;
  points: number;
  question: string;
}

export interface Category {
  id: number;
  title: string;
  questions: QuestionCard[];
}