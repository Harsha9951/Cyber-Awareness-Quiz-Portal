import React, { useState } from 'react';
import { Mail, AlertTriangle, CheckCircle, XCircle, Eye } from 'lucide-react';

interface ScenarioQuizProps {
  onComplete: (score: number) => void;
}

const ScenarioQuiz: React.FC<ScenarioQuizProps> = ({ onComplete }) => {
  const [currentScenario, setCurrentScenario] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);

  const scenarios = [
    {
      type: 'email',
      title: 'Suspicious Email Analysis',
      description: 'Analyze this email and determine if it\'s legitimate or a phishing attempt.',
      content: {
        from: 'security@paypaI.com',
        subject: 'URGENT: Your Account Will Be Suspended',
        body: `Dear Valued Customer,

We have detected unusual activity on your account. Your account will be suspended within 24 hours unless you verify your information immediately.

Click here to verify: http://paypal-security-verify.com/login

Failure to act will result in permanent account closure.

Best regards,
PayPal Security Team`,
      },
      question: 'Is this email legitimate?',
      options: [
        'Yes, it\'s from PayPal security',
        'No, it\'s a phishing attempt',
        'Unsure, need more information',
        'Yes, but I should call PayPal first'
      ],
      correctAnswer: 1,
      explanation: 'This is a phishing email. Red flags: misspelled domain (paypaI.com with capital i), urgent language, suspicious URL, and generic greeting.',
      redFlags: [
        'Domain spoofing: "paypaI.com" instead of "paypal.com"',
        'Urgent threatening language',
        'Suspicious URL not from PayPal',
        'Generic greeting instead of your name',
        'Pressure to act immediately'
      ]
    },
    {
      type: 'website',
      title: 'Website Legitimacy Check',
      description: 'You received a link claiming to be from your bank. Examine the URL and page.',
      content: {
        url: 'https://secure-bankofamerica-login.net/signin',
        pageTitle: 'Bank of America - Sign In',
        sslStatus: 'Valid SSL Certificate',
        content: 'Login page looks identical to the real Bank of America site'
      },
      question: 'Should you enter your banking credentials on this site?',
      options: [
        'Yes, it has SSL and looks legitimate',
        'No, the URL is suspicious',
        'Yes, but only after checking the certificate',
        'No, I should go directly to the bank\'s official site'
      ],
      correctAnswer: 3,
      explanation: 'Never enter credentials from links. The URL "secure-bankofamerica-login.net" is not the official Bank of America domain. Always navigate directly to official sites.',
      redFlags: [
        'Suspicious domain name',
        'Not the official bank URL',
        'Received via link instead of direct navigation',
        'Could be a perfect visual copy (phishing kit)'
      ]
    }
  ];

  const currentScenarioData = scenarios[currentScenario];

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    setShowExplanation(true);
    
    if (answerIndex === currentScenarioData.correctAnswer) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentScenario < scenarios.length - 1) {
      setCurrentScenario(prev => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      onComplete(Math.round((score / scenarios.length) * 100));
    }
  };

  const renderEmailScenario = () => (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 mb-6">
      <div className="flex items-center space-x-2 mb-4">
        <Mail className="h-5 w-5 text-blue-500" />
        <span className="font-semibold text-gray-900 dark:text-white">Email Analysis</span>
      </div>
      
      <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 mb-4">
        <div className="space-y-2 text-sm">
          <div><strong>From:</strong> {currentScenarioData.content.from}</div>
          <div><strong>Subject:</strong> {currentScenarioData.content.subject}</div>
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg p-4">
        <pre className="whitespace-pre-wrap text-sm text-gray-700 dark:text-gray-300 font-sans">
          {currentScenarioData.content.body}
        </pre>
      </div>
    </div>
  );

  const renderWebsiteScenario = () => (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 mb-6">
      <div className="flex items-center space-x-2 mb-4">
        <Eye className="h-5 w-5 text-green-500" />
        <span className="font-semibold text-gray-900 dark:text-white">Website Analysis</span>
      </div>
      
      <div className="space-y-4">
        <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
          <div className="text-sm space-y-2">
            <div><strong>URL:</strong> <code className="bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded">{currentScenarioData.content.url}</code></div>
            <div><strong>Page Title:</strong> {currentScenarioData.content.pageTitle}</div>
            <div><strong>SSL Status:</strong> <span className="text-green-600">✓ {currentScenarioData.content.sslStatus}</span></div>
          </div>
        </div>
        
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
          <p className="text-sm text-blue-800 dark:text-blue-300">
            {currentScenarioData.content.content}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Scenario {currentScenario + 1}: {currentScenarioData.title}
          </h2>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            {currentScenario + 1} of {scenarios.length}
          </div>
        </div>
        
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          {currentScenarioData.description}
        </p>
        
        {/* Progress Bar */}
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-6">
          <div
            className="bg-gradient-to-r from-cyan-500 to-purple-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentScenario + 1) / scenarios.length) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Scenario Content */}
      {currentScenarioData.type === 'email' && renderEmailScenario()}
      {currentScenarioData.type === 'website' && renderWebsiteScenario()}

      {/* Question */}
      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          {currentScenarioData.question}
        </h3>

        <div className="space-y-3 mb-6">
          {currentScenarioData.options.map((option, index) => (
            <button
              key={index}
              onClick={() => !showExplanation && handleAnswerSelect(index)}
              disabled={showExplanation}
              className={`w-full p-4 text-left rounded-xl border-2 transition-all duration-300 ${
                selectedAnswer === index
                  ? showExplanation
                    ? index === currentScenarioData.correctAnswer
                      ? 'border-green-400 bg-green-50 dark:bg-green-800/20 text-green-800 dark:text-green-400'
                      : 'border-red-400 bg-red-50 dark:bg-red-800/20 text-red-800 dark:text-red-400'
                    : 'border-cyan-400 bg-cyan-50 dark:bg-cyan-800/20 text-cyan-800 dark:text-cyan-400'
                  : showExplanation && index === currentScenarioData.correctAnswer
                  ? 'border-green-400 bg-green-50 dark:bg-green-800/20 text-green-800 dark:text-green-400'
                  : 'border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white hover:border-cyan-400 hover:bg-cyan-50 dark:hover:bg-cyan-800/10'
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                  selectedAnswer === index
                    ? showExplanation
                      ? index === currentScenarioData.correctAnswer
                        ? 'border-green-400 bg-green-400'
                        : 'border-red-400 bg-red-400'
                      : 'border-cyan-400 bg-cyan-400'
                    : showExplanation && index === currentScenarioData.correctAnswer
                    ? 'border-green-400 bg-green-400'
                    : 'border-gray-300'
                }`}>
                  {showExplanation && (
                    selectedAnswer === index
                      ? index === currentScenarioData.correctAnswer
                        ? <CheckCircle className="h-4 w-4 text-white" />
                        : <XCircle className="h-4 w-4 text-white" />
                      : index === currentScenarioData.correctAnswer
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
          <div className="space-y-4">
            <div className="bg-blue-50 dark:bg-blue-800/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4">
              <h4 className="font-semibold text-blue-800 dark:text-blue-400 mb-2">
                Explanation
              </h4>
              <p className="text-blue-700 dark:text-blue-300 mb-3">
                {currentScenarioData.explanation}
              </p>
              
              <div className="space-y-2">
                <h5 className="font-medium text-blue-800 dark:text-blue-400">Red Flags:</h5>
                <ul className="space-y-1">
                  {currentScenarioData.redFlags.map((flag, index) => (
                    <li key={index} className="flex items-start space-x-2 text-sm text-blue-700 dark:text-blue-300">
                      <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span>{flag}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <button
              onClick={handleNext}
              className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-3 rounded-xl font-semibold hover:from-cyan-400 hover:to-purple-400 transition-all duration-300"
            >
              {currentScenario < scenarios.length - 1 ? 'Next Scenario' : 'Complete Assessment'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ScenarioQuiz;