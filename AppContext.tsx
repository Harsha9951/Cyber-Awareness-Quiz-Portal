import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User, Quiz, QuizAttempt, Badge } from '../types';

interface AppContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
  currentQuiz: Quiz | null;
  setCurrentQuiz: (quiz: Quiz | null) => void;
  quizAttempts: QuizAttempt[];
  addQuizAttempt: (attempt: QuizAttempt) => void;
  badges: Badge[];
  setBadges: (badges: Badge[]) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [darkMode, setDarkMode] = useState(true);
  const [currentQuiz, setCurrentQuiz] = useState<Quiz | null>(null);
  const [quizAttempts, setQuizAttempts] = useState<QuizAttempt[]>([]);
  const [badges, setBadges] = useState<Badge[]>([]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const addQuizAttempt = (attempt: QuizAttempt) => {
    setQuizAttempts(prev => [...prev, attempt]);
  };

  const value: AppContextType = {
    user,
    setUser,
    darkMode,
    toggleDarkMode,
    currentQuiz,
    setCurrentQuiz,
    quizAttempts,
    addQuizAttempt,
    badges,
    setBadges,
  };

  return (
    <AppContext.Provider value={value}>
      <div className={darkMode ? 'dark' : ''}>
        {children}
      </div>
    </AppContext.Provider>
  );
};