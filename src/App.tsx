import React, { useState } from 'react';
import Sidebar from './components/Layout/Sidebar';
import Header from './components/Layout/Header';
import Dashboard from './components/Dashboard/Dashboard';
import SampleDiscovery from './components/SampleDiscovery/SampleDiscovery';
import ClearanceManagement from './components/ClearanceManagement/ClearanceManagement';
import Analytics from './components/Analytics/Analytics';
import MarketValuation from './components/MarketValuation/MarketValuation';

function App() {
  const [activeSection, setActiveSection] = useState('dashboard');

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return <Dashboard />;
      case 'discover':
        return <SampleDiscovery />;
      case 'clearances':
        return <ClearanceManagement />;
      case 'analytics':
        return <Analytics />;
      case 'valuation':
        return <MarketValuation />;
      case 'profile':
        return (
          <div className="p-6">
            <h1 className="text-3xl font-bold text-dark-text mb-4">Profile Settings</h1>
            <div className="card">
              <p className="text-dark-text-secondary">Profile management coming soon...</p>
            </div>
          </div>
        );
      case 'settings':
        return (
          <div className="p-6">
            <h1 className="text-3xl font-bold text-dark-text mb-4">Settings</h1>
            <div className="card">
              <p className="text-dark-text-secondary">Settings panel coming soon...</p>
            </div>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-dark-bg">
      <div className="flex h-screen">
        <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />
          <main className="flex-1 overflow-y-auto">
            {renderContent()}
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;