import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { FileText, TrendingUp, DollarSign, Clock } from 'lucide-react';
import StatsCard from './StatsCard';
import { chartData, genreDistribution, mockDashboardStats } from '../../data/mockData';

const Dashboard: React.FC = () => {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-dark-text mb-2">Dashboard</h1>
        <p className="text-dark-text-secondary">Welcome back! Here's your sample clearance overview.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Samples"
          value={mockDashboardStats.totalSamples}
          change="+12% from last month"
          icon={FileText}
          trend="up"
        />
        <StatsCard
          title="Clearance Requests"
          value={mockDashboardStats.clearanceRequests}
          change="+8% from last month"
          icon={TrendingUp}
          trend="up"
        />
        <StatsCard
          title="Approval Rate"
          value={`${mockDashboardStats.approvalRate}%`}
          change="+5% from last month"
          icon={DollarSign}
          trend="up"
        />
        <StatsCard
          title="Avg. Clearance Time"
          value={`${mockDashboardStats.avgClearanceTime} days`}
          change="-2 days from last month"
          icon={Clock}
          trend="up"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="text-lg font-semibold text-dark-text mb-4">Sample Discovery & Clearances</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="month" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Bar dataKey="samples" fill="#8B5CF6" radius={[4, 4, 0, 0]} />
              <Bar dataKey="clearances" fill="#A78BFA" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold text-dark-text mb-4">Genre Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={genreDistribution}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={120}
                paddingAngle={5}
                dataKey="value"
              >
                {genreDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="flex flex-wrap gap-4 mt-4">
            {genreDistribution.map((genre) => (
              <div key={genre.name} className="flex items-center space-x-2">
                <div 
                  className="w-3 h-3 rounded-full" 
                  style={{ backgroundColor: genre.color }}
                />
                <span className="text-sm text-dark-text-secondary">
                  {genre.name} ({genre.value}%)
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="card">
        <h3 className="text-lg font-semibold text-dark-text mb-4">Recent Activity</h3>
        <div className="space-y-3">
          {[
            { action: 'Sample discovered', item: 'Apache - The Incredible Bongo Band', time: '2 hours ago' },
            { action: 'Clearance approved', item: 'Funky Drummer - James Brown', time: '5 hours ago' },
            { action: 'Rights holder contacted', item: 'Amen Break - The Winstons', time: '1 day ago' },
            { action: 'Market analysis updated', item: 'Hip-Hop samples trending', time: '2 days ago' }
          ].map((activity, index) => (
            <div key={index} className="flex items-center justify-between py-3 border-b border-dark-border last:border-b-0">
              <div>
                <p className="text-dark-text font-medium">{activity.action}</p>
                <p className="text-dark-text-secondary text-sm">{activity.item}</p>
              </div>
              <span className="text-dark-text-secondary text-sm">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;