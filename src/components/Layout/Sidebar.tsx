import React from 'react';
import { 
  Search, 
  FileText, 
  TrendingUp, 
  DollarSign, 
  Settings, 
  User,
  Home,
  Music
} from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, onSectionChange }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'discover', label: 'Discover Samples', icon: Search },
    { id: 'clearances', label: 'My Clearances', icon: FileText },
    { id: 'analytics', label: 'Sample Trends', icon: TrendingUp },
    { id: 'valuation', label: 'Market Insights', icon: DollarSign },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="w-64 bg-dark-surface border-r border-dark-border h-full flex flex-col">
      <div className="p-6 border-b border-dark-border">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-purple rounded-lg flex items-center justify-center">
            <Music className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-xl font-bold text-dark-text">SampleSecure</h1>
        </div>
      </div>
      
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200 ${
                activeSection === item.id
                  ? 'bg-purple-primary text-white'
                  : 'text-dark-text-secondary hover:bg-dark-surface-2 hover:text-dark-text'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>
      
      <div className="p-4 border-t border-dark-border">
        <div className="bg-dark-surface-2 rounded-lg p-4">
          <h3 className="font-semibold text-dark-text mb-2">Upgrade to Pro</h3>
          <p className="text-sm text-dark-text-secondary mb-3">
            Unlock advanced analytics and unlimited searches
          </p>
          <button className="w-full button-primary">
            Upgrade Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;