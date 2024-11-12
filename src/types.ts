export interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
  points: number;
}

export interface GameState {
  status: 'idle' | 'playing' | 'finished';
  currentQuestionIndex: number;
  score: number;
  selectedAnswers: Record<number, string>;
  timeRemaining: number;
}