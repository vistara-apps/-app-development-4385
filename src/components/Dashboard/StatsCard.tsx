import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string | number;
  change?: string;
  icon: LucideIcon;
  trend?: 'up' | 'down' | 'neutral';
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, change, icon: Icon, trend = 'neutral' }) => {
  const trendColor = {
    up: 'text-green-400',
    down: 'text-red-400',
    neutral: 'text-dark-text-secondary'
  };

  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-dark-text-secondary text-sm font-medium">{title}</p>
          <p className="text-2xl font-bold text-dark-text mt-1">{value}</p>
          {change && (
            <p className={`text-sm mt-1 ${trendColor[trend]}`}>
              {change}
            </p>
          )}
        </div>
        <div className="w-12 h-12 bg-purple-primary/10 rounded-lg flex items-center justify-center">
          <Icon className="w-6 h-6 text-purple-primary" />
        </div>
      </div>
    </div>
  );
};

export default StatsCard;