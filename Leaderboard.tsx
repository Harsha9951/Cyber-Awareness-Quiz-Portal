import React, { useState } from 'react';
import { Trophy, Medal, Award, Crown, Filter } from 'lucide-react';
import { mockLeaderboard } from '../data/mockData';

const Leaderboard: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'weekly' | 'monthly'>('all');

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="h-6 w-6 text-yellow-400" />;
      case 2:
        return <Medal className="h-6 w-6 text-gray-400" />;
      case 3:
        return <Award className="h-6 w-6 text-amber-600" />;
      default:
        return <span className="text-lg font-bold text-gray-500">#{rank}</span>;
    }
  };

  const getRankBg = (rank: number) => {
    switch (rank) {
      case 1:
        return 'bg-gradient-to-r from-yellow-400 to-orange-400';
      case 2:
        return 'bg-gradient-to-r from-gray-300 to-gray-400';
      case 3:
        return 'bg-gradient-to-r from-amber-400 to-amber-600';
      default:
        return 'bg-gray-100 dark:bg-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Trophy className="h-12 w-12 text-yellow-400" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Global Leaderboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            See how you rank against cyber security champions worldwide
          </p>
        </div>

        {/* Filters */}
        <div className="flex justify-center mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-1 border border-gray-200 dark:border-gray-700">
            {['all', 'weekly', 'monthly'].map((filterOption) => (
              <button
                key={filterOption}
                onClick={() => setFilter(filterOption as any)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  filter === filterOption
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {filterOption.charAt(0).toUpperCase() + filterOption.slice(1)} Time
              </button>
            ))}
          </div>
        </div>

        {/* Top 3 Podium */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {mockLeaderboard.slice(0, 3).map((entry, index) => {
            const rank = index + 1;
            return (
              <div
                key={entry.userId}
                className={`relative bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 text-center ${
                  rank === 1 ? 'md:order-2 transform md:scale-110' : rank === 2 ? 'md:order-1' : 'md:order-3'
                }`}
              >
                {/* Rank Badge */}
                <div className={`absolute -top-3 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full ${getRankBg(rank)} flex items-center justify-center shadow-lg`}>
                  {getRankIcon(rank)}
                </div>

                {/* Avatar */}
                <div className="mt-6 mb-4">
                  <img
                    src={entry.avatar}
                    alt={entry.userName}
                    className="w-16 h-16 rounded-full mx-auto border-4 border-white dark:border-gray-700 shadow-lg"
                  />
                </div>

                {/* User Info */}
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  {entry.userName}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Level {entry.level}
                </p>

                {/* Stats */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Total Score</span>
                    <span className="font-semibold text-cyan-400">{entry.totalScore.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Avg Score</span>
                    <span className="font-semibold text-green-400">{entry.averageScore}%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Badges</span>
                    <span className="font-semibold text-purple-400">{entry.badges}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Full Leaderboard */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Complete Rankings
            </h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-700/50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Rank
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    User
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Total Score
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Quizzes
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Avg Score
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Level
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Badges
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {mockLeaderboard.map((entry, index) => {
                  const rank = index + 1;
                  return (
                    <tr
                      key={entry.userId}
                      className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          {rank <= 3 ? (
                            getRankIcon(rank)
                          ) : (
                            <span className="text-lg font-bold text-gray-500">#{rank}</span>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <img
                            className="h-10 w-10 rounded-full"
                            src={entry.avatar}
                            alt={entry.userName}
                          />
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900 dark:text-white">
                              {entry.userName}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm font-semibold text-cyan-400">
                          {entry.totalScore.toLocaleString()}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">
                        {entry.totalQuizzes}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm font-semibold text-green-400">
                          {entry.averageScore}%
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-800/20 dark:text-purple-400">
                          Level {entry.level}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm font-semibold text-purple-400">
                          {entry.badges}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Achievement Notice */}
        <div className="mt-8 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-200 dark:border-cyan-800 rounded-2xl p-6">
          <div className="text-center">
            <Trophy className="h-8 w-8 text-cyan-400 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Climb the Ranks!
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Complete more quizzes and maintain high scores to improve your ranking
            </p>
            <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-2 rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all duration-300">
              Take a Quiz
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;