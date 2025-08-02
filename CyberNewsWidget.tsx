import React, { useState, useEffect } from 'react';
import { ExternalLink, Clock, TrendingUp, Shield } from 'lucide-react';

interface NewsItem {
  id: string;
  title: string;
  summary: string;
  url: string;
  publishedAt: string;
  source: string;
  category: 'breach' | 'vulnerability' | 'threat' | 'policy' | 'general';
}

const CyberNewsWidget: React.FC = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  // Mock news data (in a real app, this would come from an API)
  const mockNews: NewsItem[] = [
    {
      id: '1',
      title: 'Major Healthcare Provider Suffers Data Breach Affecting 2M Patients',
      summary: 'Ransomware attack compromises sensitive medical records and personal information.',
      url: '#',
      publishedAt: '2024-01-15T10:30:00Z',
      source: 'CyberScoop',
      category: 'breach'
    },
    {
      id: '2',
      title: 'Critical Zero-Day Vulnerability Found in Popular VPN Software',
      summary: 'Security researchers discover flaw that could allow remote code execution.',
      url: '#',
      publishedAt: '2024-01-14T15:45:00Z',
      source: 'The Hacker News',
      category: 'vulnerability'
    },
    {
      id: '3',
      title: 'New Phishing Campaign Targets Financial Institutions',
      summary: 'Sophisticated attack uses AI-generated content to bypass email filters.',
      url: '#',
      publishedAt: '2024-01-14T09:20:00Z',
      source: 'KrebsOnSecurity',
      category: 'threat'
    },
    {
      id: '4',
      title: 'EU Proposes New Cybersecurity Regulations for Critical Infrastructure',
      summary: 'Stricter requirements for incident reporting and security measures.',
      url: '#',
      publishedAt: '2024-01-13T14:15:00Z',
      source: 'SecurityWeek',
      category: 'policy'
    },
    {
      id: '5',
      title: 'AI-Powered Security Tools Show 40% Improvement in Threat Detection',
      summary: 'Machine learning algorithms help identify previously unknown attack patterns.',
      url: '#',
      publishedAt: '2024-01-13T11:30:00Z',
      source: 'Dark Reading',
      category: 'general'
    }
  ];

  useEffect(() => {
    // Simulate API call
    const fetchNews = async () => {
      setLoading(true);
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      setNews(mockNews);
      setLoading(false);
    };

    fetchNews();
  }, []);

  const getCategoryIcon = (category: NewsItem['category']) => {
    switch (category) {
      case 'breach':
        return <Shield className="h-4 w-4 text-red-500" />;
      case 'vulnerability':
        return <TrendingUp className="h-4 w-4 text-orange-500" />;
      case 'threat':
        return <Shield className="h-4 w-4 text-yellow-500" />;
      case 'policy':
        return <ExternalLink className="h-4 w-4 text-blue-500" />;
      default:
        return <Shield className="h-4 w-4 text-gray-500" />;
    }
  };

  const getCategoryColor = (category: NewsItem['category']) => {
    switch (category) {
      case 'breach':
        return 'bg-red-100 text-red-800 dark:bg-red-800/20 dark:text-red-400';
      case 'vulnerability':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-800/20 dark:text-orange-400';
      case 'threat':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800/20 dark:text-yellow-400';
      case 'policy':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-800/20 dark:text-blue-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-800/20 dark:text-gray-400';
    }
  };

  const formatTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    const diffInDays = Math.floor(diffInHours / 24);
    return `${diffInDays}d ago`;
  };

  if (loading) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-2 mb-4">
          <Shield className="h-5 w-5 text-cyan-400" />
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Cyber Security News
          </h3>
        </div>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="animate-pulse">
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2"></div>
              <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Shield className="h-5 w-5 text-cyan-400" />
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Latest Cyber News
          </h3>
        </div>
        <button className="text-cyan-400 hover:text-cyan-300 text-sm font-medium">
          View All
        </button>
      </div>

      <div className="space-y-4">
        {news.slice(0, 4).map((item) => (
          <div
            key={item.id}
            className="group cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-lg p-3 -m-3 transition-colors"
          >
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 mt-1">
                {getCategoryIcon(item.category)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2 mb-1">
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>
                    {item.category}
                  </span>
                  <div className="flex items-center space-x-1 text-xs text-gray-500 dark:text-gray-400">
                    <Clock className="h-3 w-3" />
                    <span>{formatTimeAgo(item.publishedAt)}</span>
                  </div>
                </div>
                <h4 className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-cyan-400 transition-colors line-clamp-2">
                  {item.title}
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 line-clamp-2">
                  {item.summary}
                </p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {item.source}
                  </span>
                  <ExternalLink className="h-3 w-3 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
        <button className="w-full text-center text-sm text-cyan-400 hover:text-cyan-300 font-medium">
          Subscribe to Security Alerts
        </button>
      </div>
    </div>
  );
};

export default CyberNewsWidget;