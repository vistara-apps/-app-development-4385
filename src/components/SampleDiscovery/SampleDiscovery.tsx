import React, { useState } from 'react';
import { Search, Music, User, Calendar, DollarSign, AlertCircle } from 'lucide-react';
import { mockSamples } from '../../data/mockData';
import { Sample } from '../../types';

const SampleDiscovery: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Sample[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;

    setIsSearching(true);
    // Simulate API call
    setTimeout(() => {
      const filtered = mockSamples.filter(sample => 
        sample.originalTrackTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        sample.originalArtist.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(filtered);
      setIsSearching(false);
    }, 1000);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved': return 'text-green-400 bg-green-400/10';
      case 'pending': return 'text-yellow-400 bg-yellow-400/10';
      case 'denied': return 'text-red-400 bg-red-400/10';
      case 'in-progress': return 'text-blue-400 bg-blue-400/10';
      default: return 'text-gray-400 bg-gray-400/10';
    }
  };

  const handleStartClearance = (sample: Sample) => {
    alert(`Starting clearance process for "${sample.originalTrackTitle}" by ${sample.originalArtist}`);
  };

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-dark-text mb-2">Discover Samples</h1>
        <p className="text-dark-text-secondary">Find original tracks and rights holders for your samples.</p>
      </div>

      {/* Search Section */}
      <div className="card">
        <h3 className="text-lg font-semibold text-dark-text mb-4">Search for Samples</h3>
        <div className="flex space-x-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Enter song title, artist name, or describe the melody..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              className="w-full input-field"
            />
          </div>
          <button
            onClick={handleSearch}
            disabled={isSearching}
            className="button-primary flex items-center space-x-2 disabled:opacity-50"
          >
            <Search className="w-4 h-4" />
            <span>{isSearching ? 'Searching...' : 'Search'}</span>
          </button>
        </div>
        
        <div className="mt-4 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
          <div className="flex items-start space-x-3">
            <AlertCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-blue-400 font-medium">Search Tips</h4>
              <p className="text-blue-300 text-sm mt-1">
                Try searching with exact song titles for best results. You can also describe drum breaks or melodic phrases.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Search Results */}
      {searchResults.length > 0 && (
        <div className="card">
          <h3 className="text-lg font-semibold text-dark-text mb-4">
            Search Results ({searchResults.length} found)
          </h3>
          <div className="space-y-4">
            {searchResults.map((sample) => (
              <div key={sample.sampleId} className="border border-dark-border rounded-lg p-4 hover:bg-dark-surface-2 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <Music className="w-5 h-5 text-purple-primary" />
                      <h4 className="font-semibold text-dark-text">{sample.originalTrackTitle}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(sample.clearanceStatus)}`}>
                        {sample.clearanceStatus}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4 text-dark-text-secondary" />
                        <span className="text-dark-text-secondary">Artist:</span>
                        <span className="text-dark-text">{sample.originalArtist}</span>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-dark-text-secondary" />
                        <span className="text-dark-text-secondary">Year:</span>
                        <span className="text-dark-text">{sample.year}</span>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <DollarSign className="w-4 h-4 text-dark-text-secondary" />
                        <span className="text-dark-text-secondary">Est. Fee:</span>
                        <span className="text-dark-text">${sample.potentialFeeEstimate.toLocaleString()}</span>
                      </div>
                    </div>
                    
                    <div className="mt-3">
                      <p className="text-dark-text-secondary text-sm">
                        <strong>Rights Holder:</strong> {sample.rightsHolderInfo}
                      </p>
                      {sample.genre && (
                        <p className="text-dark-text-secondary text-sm mt-1">
                          <strong>Genre:</strong> {sample.genre}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  <div className="ml-4">
                    {sample.clearanceStatus === 'pending' || sample.clearanceStatus === 'in-progress' ? (
                      <button className="button-secondary">
                        View Request
                      </button>
                    ) : (
                      <button 
                        onClick={() => handleStartClearance(sample)}
                        className="button-primary"
                      >
                        Start Clearance
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Popular Samples */}
      <div className="card">
        <h3 className="text-lg font-semibold text-dark-text mb-4">Popular Samples This Month</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {mockSamples.map((sample) => (
            <div key={sample.sampleId} className="border border-dark-border rounded-lg p-4 hover:bg-dark-surface-2 transition-colors">
              <div className="flex items-center space-x-2 mb-2">
                <Music className="w-4 h-4 text-purple-primary" />
                <h4 className="font-medium text-dark-text truncate">{sample.originalTrackTitle}</h4>
              </div>
              <p className="text-dark-text-secondary text-sm mb-2">{sample.originalArtist}</p>
              <div className="flex items-center justify-between">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(sample.clearanceStatus)}`}>
                  {sample.clearanceStatus}
                </span>
                <span className="text-dark-text-secondary text-sm">${sample.potentialFeeEstimate.toLocaleString()}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SampleDiscovery;