import React from 'react';
import { User, Mail, Trophy, Target, Flame, Calendar, Award, Settings } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { mockBadges } from '../data/mockData';

const Profile: React.FC = () => {
  const { user } = useApp();

  if (!user) return null;

  const earnedBadges = mockBadges.slice(0, 3); // Mock earned badges
  const availableBadges = mockBadges.slice(3); // Mock available badges

  const stats = [
    {
      label: 'Quizzes Completed',
      value: '25',
      icon: Target,
      color: 'text-cyan-400',
    },
    {
      label: 'Total XP',
      value: user.xp.toLocaleString(),
      icon: Trophy,
      color: 'text-yellow-400',
    },
    {
      label: 'Learning Streak',
      value: `${user.streak} days`,
      icon: Flame,
      color: 'text-orange-400',
    },
    {
      label: 'Average Score',
      value: '87%',
      icon: Award,
      color: 'text-green-400',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
            {/* Avatar */}
            <div className="relative">
              <img
                src={user.avatar || 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400'}
                alt={user.name}
                className="w-32 h-32 rounded-full border-4 border-white dark:border-gray-700 shadow-lg"
              />
              <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full p-2">
                <span className="text-white font-bold text-sm">L{user.level}</span>
              </div>
            </div>

            {/* User Info */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {user.name}
              </h1>
              <div className="flex items-center justify-center md:justify-start space-x-2 text-gray-600 dark:text-gray-400 mb-4">
                <Mail className="h-4 w-4" />
                <span>{user.email}</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-4 mb-6">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-cyan-100 text-cyan-800 dark:bg-cyan-800/20 dark:text-cyan-400">
                  Level {user.level} Cyber Guardian
                </span>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Member since Nov 2024
                </span>
              </div>

              {/* Progress Bar */}
              <div className="max-w-md mx-auto md:mx-0">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600 dark:text-gray-400">Progress to Level {user.level + 1}</span>
                  <span className="text-gray-600 dark:text-gray-400">{user.xp}/3000 XP</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-cyan-500 to-purple-500 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${(user.xp / 3000) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Settings Button */}
            <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:border-gray-400 dark:hover:border-gray-500 transition-colors">
              <Settings className="h-4 w-4" />
              <span>Settings</span>
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700"
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

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Earned Badges */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Earned Badges ({earnedBadges.length})
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {earnedBadges.map((badge) => (
                <div
                  key={badge.id}
                  className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-200 dark:border-cyan-800 rounded-xl p-4 hover:from-cyan-500/20 hover:to-purple-500/20 transition-all duration-300"
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-500 w-10 h-10 rounded-lg flex items-center justify-center">
                      <Award className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        {badge.name}
                      </h3>
                      <p className="text-xs text-cyan-600 dark:text-cyan-400">
                        Earned recently
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {badge.description}
                  </p>
                </div>
              ))}
            </div>
            {earnedBadges.length === 0 && (
              <div className="text-center py-8">
                <Award className="h-12 w-12 text-gray-400 mx-auto mb-3" />
                <p className="text-gray-500 dark:text-gray-400">
                  No badges earned yet. Complete quizzes to unlock achievements!
                </p>
              </div>
            )}
          </div>

          {/* Available Badges */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Available Badges
            </h2>
            <div className="space-y-4">
              {availableBadges.map((badge) => (
                <div
                  key={badge.id}
                  className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <div className="bg-gray-300 dark:bg-gray-600 w-10 h-10 rounded-lg flex items-center justify-center">
                      <Award className="h-5 w-5 text-gray-500" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                        {badge.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                        {badge.description}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-500">
                        Requirement: {badge.condition}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-8 bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            Recent Activity
          </h2>
          <div className="space-y-4">
            {[
              { action: 'Completed "Phishing Attack Fundamentals"', score: '95%', time: '2 hours ago' },
              { action: 'Earned "Password Guardian" badge', score: null, time: '1 day ago' },
              { action: 'Completed "Social Engineering Basics"', score: '88%', time: '3 days ago' },
            ].map((activity, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl"
              >
                <div className="flex items-center space-x-3">
                  <div className="bg-cyan-100 dark:bg-cyan-800/20 w-8 h-8 rounded-lg flex items-center justify-center">
                    <Target className="h-4 w-4 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      {activity.action}
                    </p>
                    {activity.score && (
                      <p className="text-sm text-green-600 dark:text-green-400">
                        Score: {activity.score}
                      </p>
                    )}
                  </div>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {activity.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;