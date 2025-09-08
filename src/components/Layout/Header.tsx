import React from 'react';
import { Bell, Search as SearchIcon, User } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="h-16 bg-dark-surface border-b border-dark-border flex items-center justify-between px-6">
      <div className="flex items-center space-x-4 flex-1">
        <div className="relative max-w-md w-full">
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-dark-text-secondary w-4 h-4" />
          <input
            type="text"
            placeholder="Search samples, artists, or rights holders..."
            className="w-full pl-10 pr-4 py-2 input-field"
          />
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <button className="p-2 text-dark-text-secondary hover:text-dark-text transition-colors">
          <Bell className="w-5 h-5" />
        </button>
        
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-purple-primary rounded-full flex items-center justify-center">
            <User className="w-4 h-4 text-white" />
          </div>
          <div className="text-sm">
            <p className="text-dark-text font-medium">John Producer</p>
            <p className="text-dark-text-secondary">Pro Plan</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;