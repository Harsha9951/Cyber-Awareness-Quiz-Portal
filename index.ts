export interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
  avatar?: string;
  xp: number;
  level: number;
  badges: Badge[];
  streak: number;
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  category: string;
  questions: Question[];
  timeLimit: number;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface QuizAttempt {
  id: string;
  userId: string;
  quizId: string;
  score: number;
  totalQuestions: number;
  completedAt: Date;
  timeSpent: number;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  condition: string;
  unlockedAt?: Date;
}

export interface LeaderboardEntry {
  userId: string;
  userName: string;
  avatar?: string;
  totalScore: number;
  totalQuizzes: number;
  averageScore: number;
  badges: number;
  level: number;
}