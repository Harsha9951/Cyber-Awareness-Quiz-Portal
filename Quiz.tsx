import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Clock, 
  CheckCircle, 
  XCircle, 
  ArrowRight, 
  ArrowLeft,
  Trophy,
  Target,
  BookOpen
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { mockQuizzes } from '../data/mockData';
import { Quiz as QuizType, Question } from '../types';
import ScenarioQuiz from '../components/ScenarioQuiz';

const Quiz: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user, addQuizAttempt } = useApp();
  
  // Quiz selection or specific quiz
  const [selectedQuiz, setSelectedQuiz] = useState<QuizType | null>(null);
  const [isScenarioMode, setIsScenarioMode] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [timeLeft, setTimeLeft] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);

  useEffect(() => {
    if (id) {
      if (id === 'scenarios') {
        setIsScenarioMode(true);
        return;
      }
      const quiz = mockQuizzes.find(q => q.id === id);
      if (quiz) {
        setSelectedQuiz(quiz);
        setTimeLeft(quiz.timeLimit);
        setSelectedAnswers(new Array(quiz.questions.length).fill(-1));
      }
    }
  }, [id]);

  useEffect(() => {
    if (selectedQuiz && timeLeft > 0 && !quizCompleted) {
      const timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            handleQuizComplete();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [selectedQuiz, timeLeft, quizCompleted]);

  const handleScenarioComplete = (scenarioScore: number) => {
    setScore(scenarioScore);
    setQuizCompleted(true);
    
    if (user) {
      addQuizAttempt({
        id: Date.now().toString(),
        userId: user.id,
        quizId: 'scenarios',
        score: scenarioScore,
        totalQuestions: 2, // Number of scenarios
        completedAt: new Date(),
        timeSpent: 0,
      });
    }
  };
  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestionIndex] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
    if (selectedQuiz && currentQuestionIndex < selectedQuiz.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setShowExplanation(false);
    } else {
      handleQuizComplete();
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
      setShowExplanation(false);
    }
  };

  const handleQuizComplete = () => {
    if (!selectedQuiz || !user) return;

    let correctAnswers = 0;
    selectedQuiz.questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        correctAnswers++;
      }
    });

    const finalScore = Math.round((correctAnswers / selectedQuiz.questions.length) * 100);
    setScore(finalScore);
    setQuizCompleted(true);

    // Add quiz attempt to context
    addQuizAttempt({
      id: Date.now().toString(),
      userId: user.id,
      quizId: selectedQuiz.id,
      score: finalScore,
      totalQuestions: selectedQuiz.questions.length,
      completedAt: new Date(),
      timeSpent: selectedQuiz.timeLimit - timeLeft,
    });
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Scenario quiz mode
  if (isScenarioMode && !quizCompleted) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Scenario-Based Training
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Practice identifying threats in realistic scenarios
            </p>
          </div>
          <ScenarioQuiz onComplete={handleScenarioComplete} />
        </div>
      </div>
    );
  }
  // Quiz selection view
  if (!selectedQuiz && !isScenarioMode) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Choose Your Challenge
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Select a quiz to test your cybersecurity knowledge
            </p>
          </div>

          {/* Special Scenario Quiz Card */}
          <div className="mb-8">
            <div
              onClick={() => navigate('/quiz/scenarios')}
              className="bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl p-8 text-white cursor-pointer hover:from-green-400 hover:to-teal-400 transition-all duration-300 shadow-lg hover:shadow-green-500/25"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-white/20 w-16 h-16 rounded-xl flex items-center justify-center">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Scenario-Based Training</h3>
                  <p className="text-green-100">
                    Practice with realistic cybersecurity scenarios and learn to identify threats in real-world situations.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-6 text-green-100">
                  <span>Interactive scenarios</span>
                  <span>•</span>
                  <span>Real-world examples</span>
                  <span>•</span>
                  <span>Detailed explanations</span>
                </div>
                <div className="bg-white/20 px-4 py-2 rounded-lg font-semibold">
                  Start Training
                </div>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockQuizzes.map((quiz) => (
              <div
                key={quiz.id}
                onClick={() => navigate(`/quiz/${quiz.id}`)}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg dark:hover:shadow-cyan-500/10 transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-gradient-to-r from-cyan-500 to-purple-500 w-12 h-12 rounded-xl flex items-center justify-center">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-cyan-400 transition-colors">
                      {quiz.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {quiz.category}
                    </p>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                  {quiz.description}
                </p>
                
                <div className="flex items-center justify-between text-sm">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    quiz.difficulty === 'easy' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-800/20 dark:text-green-400'
                      : quiz.difficulty === 'medium'
                      ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800/20 dark:text-yellow-400'
                      : 'bg-red-100 text-red-800 dark:bg-red-800/20 dark:text-red-400'
                  }`}>
                    {quiz.difficulty}
                  </span>
                  <div className="flex items-center space-x-3 text-gray-500 dark:text-gray-400">
                    <span>{quiz.questions.length} questions</span>
                    <span>•</span>
                    <span>{Math.floor(quiz.timeLimit / 60)} min</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Quiz completed view
  if (quizCompleted) {
    const quizTitle = isScenarioMode ? 'Scenario Training' : selectedQuiz?.title || 'Quiz';
    const totalQuestions = isScenarioMode ? 2 : selectedQuiz?.questions.length || 0;
    
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 text-center">
            <div className="mb-6">
              {score >= 80 ? (
                <Trophy className="h-16 w-16 text-yellow-400 mx-auto mb-4" />
              ) : (
                <Target className="h-16 w-16 text-cyan-400 mx-auto mb-4" />
              )}
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {isScenarioMode ? 'Training Completed!' : 'Quiz Completed!'}
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                {quizTitle}
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6 mb-6">
              <div className="text-4xl font-bold text-cyan-400 mb-2">{score}%</div>
              <p className="text-gray-600 dark:text-gray-400">
                {isScenarioMode 
                  ? `${Math.round((score / 100) * totalQuestions)} out of ${totalQuestions} scenarios completed successfully`
                  : `${selectedAnswers.filter((answer, index) => 
                      answer === selectedQuiz!.questions[index].correctAnswer
                    ).length} out of ${totalQuestions} correct`
                }
              </p>
            </div>

            {!isScenarioMode && (
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
                  <div className="text-lg font-semibold text-gray-900 dark:text-white">
                    Time Spent
                  </div>
                  <div className="text-cyan-400">
                    {formatTime(selectedQuiz!.timeLimit - timeLeft)}
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
                  <div className="text-lg font-semibold text-gray-900 dark:text-white">
                    XP Earned
                  </div>
                  <div className="text-green-400">
                    +{Math.floor(score * 1.5)}
                  </div>
                </div>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/quiz')}
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-cyan-400 hover:to-purple-400 transition-all duration-300"
              >
                {isScenarioMode ? 'Try Another Challenge' : 'Take Another Quiz'}
              </button>
              <button
                onClick={() => navigate('/dashboard')}
                className="border-2 border-cyan-400 text-cyan-400 px-6 py-3 rounded-xl font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Back to Dashboard
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Active quiz view
  const currentQuestion = selectedQuiz!.questions[currentQuestionIndex];
  const hasAnswered = selectedAnswers[currentQuestionIndex] !== -1;
  const isCorrect = selectedAnswers[currentQuestionIndex] === currentQuestion.correctAnswer;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
              {selectedQuiz!.title}
            </h1>
            <div className="flex items-center space-x-2 text-orange-400">
              <Clock className="h-5 w-5" />
              <span className="font-mono text-lg">{formatTime(timeLeft)}</span>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="flex items-center space-x-4">
            <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-cyan-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                style={{ 
                  width: `${((currentQuestionIndex + 1) / selectedQuiz!.questions.length) * 100}%` 
                }}
              ></div>
            </div>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {currentQuestionIndex + 1} of {selectedQuiz!.questions.length}
            </span>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              {currentQuestion.question}
            </h2>
          </div>

          {/* Answer Options */}
          <div className="space-y-4 mb-8">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => !showExplanation && handleAnswerSelect(index)}
                disabled={showExplanation}
                className={`w-full p-4 text-left rounded-xl border-2 transition-all duration-300 ${
                  selectedAnswers[currentQuestionIndex] === index
                    ? showExplanation
                      ? index === currentQuestion.correctAnswer
                        ? 'border-green-400 bg-green-50 dark:bg-green-800/20 text-green-800 dark:text-green-400'
                        : 'border-red-400 bg-red-50 dark:bg-red-800/20 text-red-800 dark:text-red-400'
                      : 'border-cyan-400 bg-cyan-50 dark:bg-cyan-800/20 text-cyan-800 dark:text-cyan-400'
                    : showExplanation && index === currentQuestion.correctAnswer
                    ? 'border-green-400 bg-green-50 dark:bg-green-800/20 text-green-800 dark:text-green-400'
                    : 'border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white hover:border-cyan-400 hover:bg-cyan-50 dark:hover:bg-cyan-800/10'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    selectedAnswers[currentQuestionIndex] === index
                      ? showExplanation
                        ? index === currentQuestion.correctAnswer
                          ? 'border-green-400 bg-green-400'
                          : 'border-red-400 bg-red-400'
                        : 'border-cyan-400 bg-cyan-400'
                      : showExplanation && index === currentQuestion.correctAnswer
                      ? 'border-green-400 bg-green-400'
                      : 'border-gray-300'
                  }`}>
                    {showExplanation && (
                      selectedAnswers[currentQuestionIndex] === index
                        ? index === currentQuestion.correctAnswer
                          ? <CheckCircle className="h-4 w-4 text-white" />
                          : <XCircle className="h-4 w-4 text-white" />
                        : index === currentQuestion.correctAnswer
                        ? <CheckCircle className="h-4 w-4 text-white" />
                        : null
                    )}
                  </div>
                  <span className="font-medium">{option}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Explanation */}
          {showExplanation && (
            <div className="bg-blue-50 dark:bg-blue-800/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4 mb-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-400 mb-2">
                Explanation
              </h3>
              <p className="text-blue-700 dark:text-blue-300">
                {currentQuestion.explanation}
              </p>
            </div>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <button
              onClick={handlePreviousQuestion}
              disabled={currentQuestionIndex === 0}
              className="flex items-center space-x-2 px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Previous</span>
            </button>

            <div className="flex items-center space-x-4">
              {hasAnswered && !showExplanation && (
                <button
                  onClick={() => setShowExplanation(true)}
                  className="px-4 py-2 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-white transition-colors"
                >
                  Show Answer
                </button>
              )}
              
              <button
                onClick={handleNextQuestion}
                disabled={!hasAnswered}
                className="flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-2 rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>
                  {currentQuestionIndex === selectedQuiz!.questions.length - 1 ? 'Finish' : 'Next'}
                </span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;