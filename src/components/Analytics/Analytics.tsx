import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { TrendingUp, Music, Globe, Calendar } from 'lucide-react';
import { mockTrendData } from '../../data/mockData';

const Analytics: React.FC = () => {
  const trendChartData = [
    { month: 'Jan', hiphop: 120, electronic: 80, pop: 60 },
    { month: 'Feb', hiphop: 140, electronic: 95, pop: 75 },
    { month: 'Mar', hiphop: 110, electronic: 70, pop: 55 },
    { month: 'Apr', hiphop: 180, electronic: 120, pop: 90 },
    { month: 'May', hiphop: 200, electronic: 140, pop: 110 },
    { month: 'Jun', hiphop: 220, electronic: 160, pop: 125 }
  ];

  const platformData = [
    { platform: 'Spotify', usage: 450 },
    { platform: 'Apple Music', usage: 320 },
    { platform: 'SoundCloud', usage: 280 },
    { platform: 'YouTube Music', usage: 200 },
    { platform: 'Bandcamp', usage: 150 }
  ];

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-dark-text mb-2">Sample Trends & Analytics</h1>
        <p className="text-dark-text-secondary">Discover popular samples and market trends across platforms.</p>
      </div>

      {/* Trending Samples */}
      <div className="card">
        <h3 className="text-lg font-semibold text-dark-text mb-4">Trending Samples This Week</h3>
        <div className="space-y-3">
          {mockTrendData.slice(0, 5).map((trend, index) => (
            <div key={trend.trendId} className="flex items-center justify-between p-4 bg-dark-surface-2 rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-8 h-8 bg-purple-primary rounded-full text-white font-bold">
                  {index + 1}
                </div>
                <div>
                  <h4 className="font-medium text-dark-text">{trend.sampleIdentifier}</h4>
                  <div className="flex items-center space-x-4 text-sm text-dark-text-secondary">
                    <span className="flex items-center space-x-1">
                      <Music className="w-4 h-4" />
                      <span>{trend.genre}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Globe className="w-4 h-4" />
                      <span>{trend.platform}</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold text-dark-text">{trend.usageFrequency}</p>
                <p className="text-sm text-dark-text-secondary">uses</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trend Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="text-lg font-semibold text-dark-text mb-4">Sample Usage by Genre</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={trendChartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="month" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Line type="monotone" dataKey="hiphop" stroke="#8B5CF6" strokeWidth={3} />
              <Line type="monotone" dataKey="electronic" stroke="#A78BFA" strokeWidth={3} />
              <Line type="monotone" dataKey="pop" stroke="#C4B5FD" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
          <div className="flex justify-center space-x-6 mt-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-purple-primary rounded-full"></div>
              <span className="text-sm text-dark-text-secondary">Hip-Hop</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-purple-secondary rounded-full"></div>
              <span className="text-sm text-dark-text-secondary">Electronic</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-purple-300 rounded-full"></div>
              <span className="text-sm text-dark-text-secondary">Pop</span>
            </div>
          </div>
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold text-dark-text mb-4">Platform Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={platformData} layout="horizontal">
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis type="number" stroke="#9CA3AF" />
              <YAxis type="category" dataKey="platform" stroke="#9CA3AF" width={100} />
              <Bar dataKey="usage" fill="#8B5CF6" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Market Insights */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-dark-text-secondary text-sm font-medium">Total Tracked Samples</p>
              <p className="text-2xl font-bold text-dark-text mt-1">12,847</p>
              <p className="text-green-400 text-sm mt-1">+15% this month</p>
            </div>
            <TrendingUp className="w-8 h-8 text-purple-primary" />
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-dark-text-secondary text-sm font-medium">Active Platforms</p>
              <p className="text-2xl font-bold text-dark-text mt-1">47</p>
              <p className="text-blue-400 text-sm mt-1">across all genres</p>
            </div>
            <Globe className="w-8 h-8 text-purple-primary" />
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-dark-text-secondary text-sm font-medium">Most Sampled Era</p>
              <p className="text-2xl font-bold text-dark-text mt-1">1970s</p>
              <p className="text-yellow-400 text-sm mt-1">Funk & Soul</p>
            </div>
            <Calendar className="w-8 h-8 text-purple-primary" />
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-dark-text-secondary text-sm font-medium">Avg. Usage Growth</p>
              <p className="text-2xl font-bold text-dark-text mt-1">23%</p>
              <p className="text-green-400 text-sm mt-1">year over year</p>
            </div>
            <Music className="w-8 h-8 text-purple-primary" />
          </div>
        </div>
      </div>

      {/* Detailed Trends Table */}
      <div className="card">
        <h3 className="text-lg font-semibold text-dark-text mb-4">Detailed Sample Analytics</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-dark-border">
                <th className="text-left py-3 text-dark-text-secondary font-medium">Sample</th>
                <th className="text-left py-3 text-dark-text-secondary font-medium">Genre</th>
                <th className="text-left py-3 text-dark-text-secondary font-medium">Platform</th>
                <th className="text-right py-3 text-dark-text-secondary font-medium">Usage Count</th>
                <th className="text-right py-3 text-dark-text-secondary font-medium">Growth</th>
              </tr>
            </thead>
            <tbody>
              {mockTrendData.map((trend) => (
                <tr key={trend.trendId} className="border-b border-dark-border/50">
                  <td className="py-3 text-dark-text font-medium">{trend.sampleIdentifier}</td>
                  <td className="py-3 text-dark-text-secondary">{trend.genre}</td>
                  <td className="py-3 text-dark-text-secondary">{trend.platform}</td>
                  <td className="py-3 text-right text-dark-text">{trend.usageFrequency}</td>
                  <td className="py-3 text-right text-green-400">+12%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Analytics;