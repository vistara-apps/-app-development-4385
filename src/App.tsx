import React, { useState } from 'react';
import { AuthProvider, useAuth } from './components/Auth/AuthProvider';
import Sidebar from './components/Layout/Sidebar';
import Header from './components/Layout/Header';
import Dashboard from './components/Dashboard/Dashboard';
import SampleDiscovery from './components/SampleDiscovery/SampleDiscovery';
import ClearanceManagement from './components/ClearanceManagement/ClearanceManagement';
import Analytics from './components/Analytics/Analytics';
import MarketValuation from './components/MarketValuation/MarketValuation';
import LoginForm from './components/Auth/LoginForm';
import RegisterForm from './components/Auth/RegisterForm';

const AppContent: React.FC = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const { isAuthenticated, isLoading } = useAuth();

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

  if (isLoading) {
    return (
      <div className="min-h-screen bg-dark-bg flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-primary mx-auto mb-4"></div>
          <p className="text-dark-text-secondary">Loading SampleSecure...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return authMode === 'login' ? (
      <LoginForm onToggleMode={() => setAuthMode('register')} />
    ) : (
      <RegisterForm onToggleMode={() => setAuthMode('login')} />
    );
  }

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
};

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
