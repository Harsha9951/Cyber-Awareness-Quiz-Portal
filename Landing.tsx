import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Target, 
  Trophy, 
  Users, 
  ArrowRight,
  Play,
  Star,
  CheckCircle
} from 'lucide-react';

const Landing: React.FC = () => {
  const features = [
    {
      icon: Target,
      title: 'Interactive Quizzes',
      description: 'Test your knowledge with engaging cybersecurity quizzes covering all major threat vectors.',
    },
    {
      icon: Trophy,
      title: 'Achievement System',
      description: 'Unlock badges and climb levels as you master different aspects of cybersecurity.',
    },
    {
      icon: Users,
      title: 'Global Leaderboard',
      description: 'Compete with cybersecurity enthusiasts worldwide and track your progress.',
    },
  ];

  const stats = [
    { label: 'Active Learners', value: '10,000+' },
    { label: 'Quizzes Completed', value: '250,000+' },
    { label: 'Security Topics', value: '50+' },
    { label: 'Success Rate', value: '94%' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <Shield className="h-24 w-24 text-cyan-400 animate-pulse" />
                <div className="absolute -top-2 -right-2 h-8 w-8 bg-green-400 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-5 w-5 text-white" />
                </div>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Test Your{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Cyber IQ
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Stay ahead of hackers with interactive cybersecurity quizzes. 
              Build your defense knowledge and become a cyber guardian.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/auth"
                className="group bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 flex items-center justify-center space-x-2 shadow-2xl hover:shadow-cyan-500/25"
              >
                <Play className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span>Start Your Journey</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                to="/leaderboard"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Trophy className="h-5 w-5" />
                <span>View Leaderboard</span>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose CyberGuard?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our platform combines gamification with real-world cybersecurity knowledge 
              to create an engaging learning experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 group"
                >
                  <div className="bg-gradient-to-r from-cyan-500 to-purple-500 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Become a Cyber Guardian?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of security professionals and enthusiasts who are already 
            strengthening their cyber defense knowledge.
          </p>
          <Link
            to="/auth"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/25"
          >
            <Shield className="h-5 w-5" />
            <span>Get Started for Free</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;