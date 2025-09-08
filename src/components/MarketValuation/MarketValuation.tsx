import React, { useState } from 'react';
import { DollarSign, TrendingUp, BarChart3, Calculator, AlertCircle } from 'lucide-react';

const MarketValuation: React.FC = () => {
  const [sampleType, setSampleType] = useState('drum-break');
  const [artistTier, setArtistTier] = useState('emerging');
  const [usageType, setUsageType] = useState('single');
  const [estimatedFee, setEstimatedFee] = useState<number | null>(null);

  const calculateFee = () => {
    let baseFee = 1000;
    
    // Sample type multiplier
    const sampleMultipliers = {
      'drum-break': 1.0,
      'melody': 1.5,
      'vocal': 2.0,
      'full-loop': 2.5
    };
    
    // Artist tier multiplier
    const artistMultipliers = {
      'emerging': 1.0,
      'established': 3.0,
      'legendary': 8.0,
      'deceased-estate': 12.0
    };
    
    // Usage type multiplier
    const usageMultipliers = {
      'single': 1.0,
      'album': 1.5,
      'commercial': 3.0,
      'film-tv': 5.0
    };
    
    const fee = baseFee * 
      sampleMultipliers[sampleType as keyof typeof sampleMultipliers] * 
      artistMultipliers[artistTier as keyof typeof artistMultipliers] * 
      usageMultipliers[usageType as keyof typeof usageMultipliers];
    
    setEstimatedFee(Math.round(fee));
  };

  const marketData = [
    { category: 'Drum Breaks', avgFee: '$2,500', range: '$500 - $8,000', trend: 'up' },
    { category: 'Vocal Samples', avgFee: '$8,000', range: '$2,000 - $25,000', trend: 'up' },
    { category: 'Melody Loops', avgFee: '$5,500', range: '$1,000 - $15,000', trend: 'stable' },
    { category: 'Full Song Samples', avgFee: '$15,000', range: '$5,000 - $50,000', trend: 'up' }
  ];

  const recentDeals = [
    { sample: 'Motown drum break', artist: 'The Funk Brothers', fee: '$3,200', type: 'Hip-Hop Single' },
    { sample: 'Jazz piano riff', artist: 'Bill Evans', fee: '$12,000', type: 'Commercial Use' },
    { sample: 'Soul vocal phrase', artist: 'Aretha Franklin', fee: '$18,500', type: 'Major Label Album' },
    { sample: 'Rock guitar lick', artist: 'Led Zeppelin', fee: '$35,000', type: 'Film Soundtrack' }
  ];

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-dark-text mb-2">Market Valuation Insights</h1>
        <p className="text-dark-text-secondary">Get data-driven estimates for sample licensing fees and market trends.</p>
      </div>

      {/* Fee Calculator */}
      <div className="card">
        <h3 className="text-lg font-semibold text-dark-text mb-4 flex items-center space-x-2">
          <Calculator className="w-5 h-5 text-purple-primary" />
          <span>Sample Fee Calculator</span>
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-dark-text mb-2">Sample Type</label>
            <select
              value={sampleType}
              onChange={(e) => setSampleType(e.target.value)}
              className="w-full input-field"
            >
              <option value="drum-break">Drum Break</option>
              <option value="melody">Melody/Riff</option>
              <option value="vocal">Vocal Sample</option>
              <option value="full-loop">Full Loop</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-dark-text mb-2">Artist Tier</label>
            <select
              value={artistTier}
              onChange={(e) => setArtistTier(e.target.value)}
              className="w-full input-field"
            >
              <option value="emerging">Emerging Artist</option>
              <option value="established">Established Artist</option>
              <option value="legendary">Legendary Artist</option>
              <option value="deceased-estate">Deceased Artist (Estate)</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-dark-text mb-2">Usage Type</label>
            <select
              value={usageType}
              onChange={(e) => setUsageType(e.target.value)}
              className="w-full input-field"
            >
              <option value="single">Single Release</option>
              <option value="album">Album Track</option>
              <option value="commercial">Commercial Use</option>
              <option value="film-tv">Film/TV Sync</option>
            </select>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <button onClick={calculateFee} className="button-primary">
            Calculate Estimated Fee
          </button>
          
          {estimatedFee && (
            <div className="text-right">
              <p className="text-dark-text-secondary text-sm">Estimated Fee Range</p>
              <p className="text-2xl font-bold text-purple-primary">
                ${Math.round(estimatedFee * 0.7).toLocaleString()} - ${Math.round(estimatedFee * 1.3).toLocaleString()}
              </p>
            </div>
          )}
        </div>
        
        <div className="mt-4 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
          <div className="flex items-start space-x-3">
            <AlertCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-yellow-400 font-medium">Estimation Disclaimer</h4>
              <p className="text-yellow-300 text-sm mt-1">
                These are estimated ranges based on historical data. Actual fees may vary significantly based on specific circumstances, negotiation, and market conditions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Market Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="text-lg font-semibold text-dark-text mb-4">Average Market Rates</h3>
          <div className="space-y-4">
            {marketData.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-dark-surface-2 rounded-lg">
                <div>
                  <h4 className="font-medium text-dark-text">{item.category}</h4>
                  <p className="text-dark-text-secondary text-sm">Range: {item.range}</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold text-dark-text">{item.avgFee}</p>
                  <div className="flex items-center space-x-1">
                    <TrendingUp className={`w-4 h-4 ${item.trend === 'up' ? 'text-green-400' : 'text-gray-400'}`} />
                    <span className={`text-sm ${item.trend === 'up' ? 'text-green-400' : 'text-gray-400'}`}>
                      {item.trend === 'up' ? 'Rising' : 'Stable'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold text-dark-text mb-4">Recent Market Deals</h3>
          <div className="space-y-4">
            {recentDeals.map((deal, index) => (
              <div key={index} className="border-l-4 border-purple-primary pl-4 py-2">
                <h4 className="font-medium text-dark-text">{deal.sample}</h4>
                <p className="text-dark-text-secondary text-sm">{deal.artist}</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-purple-primary font-semibold">{deal.fee}</span>
                  <span className="text-dark-text-secondary text-sm">{deal.type}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Market Insights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-dark-text-secondary text-sm font-medium">Market Growth</p>
              <p className="text-2xl font-bold text-dark-text mt-1">+18%</p>
              <p className="text-green-400 text-sm mt-1">Year over year</p>
            </div>
            <BarChart3 className="w-8 h-8 text-purple-primary" />
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-dark-text-secondary text-sm font-medium">Avg. Negotiation Time</p>
              <p className="text-2xl font-bold text-dark-text mt-1">14 days</p>
              <p className="text-blue-400 text-sm mt-1">From first contact</p>
            </div>
            <TrendingUp className="w-8 h-8 text-purple-primary" />
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-dark-text-secondary text-sm font-medium">Success Rate</p>
              <p className="text-2xl font-bold text-dark-text mt-1">73%</p>
              <p className="text-green-400 text-sm mt-1">Clearance approval</p>
            </div>
            <DollarSign className="w-8 h-8 text-purple-primary" />
          </div>
        </div>
      </div>

      {/* Tips & Best Practices */}
      <div className="card">
        <h3 className="text-lg font-semibold text-dark-text mb-4">Negotiation Tips & Best Practices</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-dark-text mb-3">Pre-Negotiation</h4>
            <ul className="space-y-2 text-sm text-dark-text-secondary">
              <li>• Research comparable deals in your genre</li>
              <li>• Prepare multiple usage scenarios</li>
              <li>• Know the original song's commercial history</li>
              <li>• Have backup samples ready</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-dark-text mb-3">During Negotiation</h4>
            <ul className="space-y-2 text-sm text-dark-text-secondary">
              <li>• Start with your usage scope and intent</li>
              <li>• Be transparent about your budget range</li>
              <li>• Consider percentage-based deals for high-value samples</li>
              <li>• Build relationships for future clearances</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketValuation;