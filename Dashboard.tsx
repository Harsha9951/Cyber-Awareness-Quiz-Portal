import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Trophy, 
  Target, 
  Flame, 
  TrendingUp, 
  Play, 
  Star,
  Award,
  Calendar,
  BookOpen,
  Users
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { mockQuizzes, mockBadges } from '../data/mockData';
import CyberNewsWidget from '../components/CyberNewsWidget';
import StreakCalendar from '../components/StreakCalendar';

const Dashboard: React.FC = () => {
  const { user } = useApp();

  if (!user) return null;

  const recentQuizzes = mockQuizzes.slice(0, 4);
  const availableBadges = mockBadges.slice(0, 4);

  const stats = [
    {
      label: 'Total XP',
      value: user.xp.toLocaleString(),
      icon: Star,
      color: 'text-yellow-400',
    },
    {
      label: 'Current Level',
      value: user.level,
      icon: TrendingUp,
      color: 'text-cyan-400',
    },
    {
      label: 'Learning Streak',
      value: `${user.streak} days`,
      icon: Flame,
      color: 'text-orange-400',
    },
    {
      label: 'Badges Earned',
      value: user.badges.length,
      icon: Award,
      color: 'text-purple-400',
    },
  ];

  const quickActions = [
    {
      title: 'Take Quiz',
      description: 'Start a new cybersecurity challenge',
      icon: Play,
      link: '/quiz',
      gradient: 'from-cyan-500 to-purple-500',
      hoverGradient: 'from-cyan-400 to-purple-400'
    },
    {
      title: 'Scenario Training',
      description: 'Practice with real-world scenarios',
      icon: BookOpen,
      link: '/quiz/scenarios',
      gradient: 'from-green-500 to-teal-500',
      hoverGradient: 'from-green-400 to-teal-400'
    },
    {
      title: 'Leaderboard',
      description: 'See how you rank globally',
      icon: Trophy,
      link: '/leaderboard',
      gradient: 'from-yellow-500 to-orange-500',
      hoverGradient: 'from-yellow-400 to-orange-400'
    },
    {
      title: 'Study Groups',
      description: 'Join collaborative learning',
      icon: Users,
      link: '/groups',
      gradient: 'from-purple-500 to-pink-500',
      hoverGradient: 'from-purple-400 to-pink-400'
    }
  ];
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Welcome back, {user.name}! 👋
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Ready to strengthen your cyber defenses today?
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg dark:hover:shadow-cyan-500/10 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <Icon className={`h-8 w-8 ${stat.color}`} />
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">
                    {stat.value}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</p>
              </div>
            );
          })}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-3 space-y-8">
            {/* Quick Actions */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Quick Actions
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {quickActions.map((action, index) => {
                  const Icon = action.icon;
                  return (
                    <Link
                      key={index}
                      to={action.link}
                      className={`group bg-gradient-to-r ${action.gradient} text-white p-4 rounded-xl hover:${action.hoverGradient} transition-all duration-300 shadow-lg hover:shadow-lg`}
                    >
                      <div className="flex items-center space-x-2 mb-2">
                        <Icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                        <span className="font-semibold text-sm">{action.title}</span>
                      </div>
                      <p className="text-white/80 text-xs">
                        {action.description}
                      </p>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Recent Quizzes */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Available Quizzes
                </h2>
                <Link
                  to="/quiz"
                  className="text-cyan-400 hover:text-cyan-300 font-medium text-sm"
                >
                  View All
                </Link>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {recentQuizzes.map((quiz) => (
                  <div
                    key={quiz.id}
                    className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-500 w-10 h-10 rounded-lg flex items-center justify-center">
                        <Target className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900 dark:text-white">
                          {quiz.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {quiz.category} • {quiz.difficulty}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {quiz.questions.length} questions • {Math.floor(quiz.timeLimit / 60)} min
                      </span>
                      <Link
                        to={`/quiz/${quiz.id}`}
                        className="bg-cyan-500 text-white px-3 py-1 rounded-lg hover:bg-cyan-400 transition-colors text-xs font-medium"
                      >
                        Start
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cyber News Widget */}
            <CyberNewsWidget />
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Progress Card */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Cyber Guru Progress
              </h3>
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600 dark:text-gray-400">Level {user.level}</span>
                  <span className="text-gray-600 dark:text-gray-400">
                    {user.xp}/3000 XP
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-cyan-500 to-purple-500 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${(user.xp / 3000) * 100}%` }}
                  ></div>
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                550 XP needed to reach Level {user.level + 1}
              </p>
            </div>

            {/* Available Badges */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Available Badges
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {availableBadges.map((badge) => (
                  <div
                    key={badge.id}
                    className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-xl text-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer"
                  >
                    <div className="w-8 h-8 mx-auto mb-2 text-gray-400">
                      <Award className="w-full h-full" />
                    </div>
                    <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-1">
                      {badge.name}
                    </h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      {badge.condition}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Streak Calendar */}
            <StreakCalendar streak={user.streak} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;