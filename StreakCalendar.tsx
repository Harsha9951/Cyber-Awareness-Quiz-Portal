import React from 'react';
import { Calendar, Flame, CheckCircle } from 'lucide-react';

interface StreakCalendarProps {
  streak: number;
  className?: string;
}

const StreakCalendar: React.FC<StreakCalendarProps> = ({ streak, className = '' }) => {
  // Generate last 30 days
  const generateCalendarDays = () => {
    const days = [];
    const today = new Date();
    
    for (let i = 29; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      
      // Mock activity data - in real app this would come from user data
      const hasActivity = i < streak || (i >= 7 && i < 14) || (i >= 21 && i < 25);
      const isToday = i === 0;
      
      days.push({
        date,
        hasActivity,
        isToday,
        dayOfWeek: date.getDay(),
        dayOfMonth: date.getDate()
      });
    }
    
    return days;
  };

  const days = generateCalendarDays();
  const weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  const getActivityLevel = (hasActivity: boolean, isToday: boolean) => {
    if (isToday && hasActivity) {
      return 'bg-gradient-to-r from-cyan-500 to-purple-500 border-2 border-white dark:border-gray-800';
    }
    if (hasActivity) {
      return 'bg-green-400 hover:bg-green-500';
    }
    return 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600';
  };

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 ${className}`}>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Flame className="h-5 w-5 text-orange-400" />
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Learning Streak
          </h3>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-orange-400">{streak}</span>
          <span className="text-sm text-gray-600 dark:text-gray-400">days</span>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="space-y-3">
        {/* Week day headers */}
        <div className="grid grid-cols-7 gap-1 mb-2">
          {weekDays.map((day, index) => (
            <div
              key={index}
              className="text-xs font-medium text-gray-500 dark:text-gray-400 text-center py-1"
            >
              {day}
            </div>
          ))}
        </div>

        {/* Calendar days */}
        <div className="grid grid-cols-7 gap-1">
          {days.map((day, index) => (
            <div
              key={index}
              className={`
                w-8 h-8 rounded-lg transition-all duration-200 cursor-pointer
                flex items-center justify-center text-xs font-medium
                ${getActivityLevel(day.hasActivity, day.isToday)}
                ${day.hasActivity ? 'text-white' : 'text-gray-600 dark:text-gray-400'}
              `}
              title={`${day.date.toLocaleDateString()} ${day.hasActivity ? '- Quiz completed' : '- No activity'}`}
            >
              {day.isToday && day.hasActivity && (
                <CheckCircle className="h-4 w-4" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Streak info */}
      <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 bg-green-400 rounded"></div>
              <span className="text-gray-600 dark:text-gray-400">Active</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 bg-gray-200 dark:bg-gray-700 rounded"></div>
              <span className="text-gray-600 dark:text-gray-400">Inactive</span>
            </div>
          </div>
          <div className="text-gray-600 dark:text-gray-400">
            Last 30 days
          </div>
        </div>
      </div>

      {/* Motivation message */}
      <div className="mt-4 p-3 bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-200 dark:border-orange-800 rounded-lg">
        <p className="text-sm text-orange-800 dark:text-orange-300 text-center">
          {streak >= 7 
            ? `Amazing! You're on fire! 🔥 Keep up the ${streak}-day streak!`
            : streak >= 3
            ? `Great progress! ${7 - streak} more days to reach a week streak!`
            : 'Start your learning journey today! Complete a quiz to begin your streak.'
          }
        </p>
      </div>
    </div>
  );
};

export default StreakCalendar;