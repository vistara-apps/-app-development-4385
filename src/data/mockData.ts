import { Sample, ClearanceRequest, TrendData, DashboardStats } from '../types';

// Mock Dashboard Stats
export const mockDashboardStats: DashboardStats = {
  totalSamples: 247,
  clearanceRequests: 89,
  approvalRate: 73,
  avgClearanceTime: 12
};

// Mock Chart Data for Dashboard
export const chartData = [
  { month: 'Jan', samples: 45, clearances: 32 },
  { month: 'Feb', samples: 52, clearances: 38 },
  { month: 'Mar', samples: 48, clearances: 35 },
  { month: 'Apr', samples: 61, clearances: 45 },
  { month: 'May', samples: 55, clearances: 40 },
  { month: 'Jun', samples: 67, clearances: 49 }
];

// Genre Distribution Data
export const genreDistribution = [
  { name: 'Hip-Hop', value: 35, color: '#8B5CF6' },
  { name: 'R&B', value: 25, color: '#A78BFA' },
  { name: 'Electronic', value: 20, color: '#C4B5FD' },
  { name: 'Jazz', value: 12, color: '#DDD6FE' },
  { name: 'Rock', value: 8, color: '#EDE9FE' }
];

// Mock Samples Data
export const mockSamples: Sample[] = [
  {
    sampleId: 'smp_001',
    originalTrackTitle: 'Apache',
    originalArtist: 'The Incredible Bongo Band',
    rightsHolderInfo: 'EMI Music Publishing',
    clearanceStatus: 'approved',
    potentialFeeEstimate: 2500,
    addedByUserId: 'user_001',
    genre: 'Funk',
    year: 1973
  },
  {
    sampleId: 'smp_002',
    originalTrackTitle: 'Funky Drummer',
    originalArtist: 'James Brown',
    rightsHolderInfo: 'Universal Music Group',
    clearanceStatus: 'pending',
    potentialFeeEstimate: 5000,
    addedByUserId: 'user_001',
    genre: 'Funk',
    year: 1970
  },
  {
    sampleId: 'smp_003',
    originalTrackTitle: 'Amen Break',
    originalArtist: 'The Winstons',
    rightsHolderInfo: 'Color-Red Music',
    clearanceStatus: 'in-progress',
    potentialFeeEstimate: 1500,
    addedByUserId: 'user_001',
    genre: 'Soul',
    year: 1969
  },
  {
    sampleId: 'smp_004',
    originalTrackTitle: 'Think (About It)',
    originalArtist: 'Lyn Collins',
    rightsHolderInfo: 'Sony Music Publishing',
    clearanceStatus: 'denied',
    potentialFeeEstimate: 3000,
    addedByUserId: 'user_001',
    genre: 'Funk',
    year: 1972
  },
  {
    sampleId: 'smp_005',
    originalTrackTitle: 'Impeach the President',
    originalArtist: 'The Honey Drippers',
    rightsHolderInfo: 'Warner Music Group',
    clearanceStatus: 'approved',
    potentialFeeEstimate: 2000,
    addedByUserId: 'user_001',
    genre: 'Funk',
    year: 1973
  }
];

// Mock Clearance Requests
export const mockClearanceRequests: ClearanceRequest[] = [
  {
    requestId: 'req_001',
    sampleId: 'smp_001',
    licensorContact: 'licensing@emi.com',
    licensorResponse: 'Approved with standard terms',
    negotiatedFee: 2500,
    agreementTerms: 'Standard mechanical license, 50% split',
    requestStatus: 'approved',
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-20T14:30:00Z'
  },
  {
    requestId: 'req_002',
    sampleId: 'smp_002',
    licensorContact: 'clearance@umg.com',
    requestStatus: 'sent',
    createdAt: '2024-02-01T09:15:00Z',
    updatedAt: '2024-02-01T09:15:00Z'
  },
  {
    requestId: 'req_003',
    sampleId: 'smp_003',
    licensorContact: 'rights@colorred.com',
    licensorResponse: 'Reviewing terms, will respond within 5 business days',
    requestStatus: 'negotiating',
    createdAt: '2024-02-10T11:30:00Z',
    updatedAt: '2024-02-12T16:45:00Z'
  },
  {
    requestId: 'req_004',
    sampleId: 'smp_004',
    licensorContact: 'licensing@sony.com',
    licensorResponse: 'Sample not available for licensing at this time',
    requestStatus: 'denied',
    createdAt: '2024-01-25T08:20:00Z',
    updatedAt: '2024-01-30T13:10:00Z'
  }
];

// Mock Trend Data
export const mockTrendData: TrendData[] = [
  {
    trendId: 'trend_001',
    sampleIdentifier: 'Apache - The Incredible Bongo Band',
    usageFrequency: 1247,
    genre: 'Hip-Hop',
    platform: 'Spotify',
    analysisDate: '2024-02-15T00:00:00Z'
  },
  {
    trendId: 'trend_002',
    sampleIdentifier: 'Funky Drummer - James Brown',
    usageFrequency: 892,
    genre: 'Hip-Hop',
    platform: 'Apple Music',
    analysisDate: '2024-02-15T00:00:00Z'
  },
  {
    trendId: 'trend_003',
    sampleIdentifier: 'Amen Break - The Winstons',
    usageFrequency: 2156,
    genre: 'Drum & Bass',
    platform: 'SoundCloud',
    analysisDate: '2024-02-15T00:00:00Z'
  },
  {
    trendId: 'trend_004',
    sampleIdentifier: 'Think (About It) - Lyn Collins',
    usageFrequency: 634,
    genre: 'Hip-Hop',
    platform: 'YouTube Music',
    analysisDate: '2024-02-15T00:00:00Z'
  },
  {
    trendId: 'trend_005',
    sampleIdentifier: 'Impeach the President - The Honey Drippers',
    usageFrequency: 445,
    genre: 'Hip-Hop',
    platform: 'Spotify',
    analysisDate: '2024-02-15T00:00:00Z'
  }
];

// Market Valuation Data
export const marketValuationData = [
  { genre: 'Hip-Hop', avgFee: 3500, samples: 156, trend: 'up' },
  { genre: 'R&B', avgFee: 2800, samples: 89, trend: 'stable' },
  { genre: 'Electronic', avgFee: 2200, samples: 67, trend: 'up' },
  { genre: 'Jazz', avgFee: 1800, samples: 34, trend: 'down' },
  { genre: 'Rock', avgFee: 2100, samples: 45, trend: 'stable' }
];

// Fee Range Data
export const feeRangeData = [
  { range: '$0-500', count: 45, percentage: 18 },
  { range: '$500-1000', count: 67, percentage: 27 },
  { range: '$1000-2500', count: 89, percentage: 36 },
  { range: '$2500-5000', count: 34, percentage: 14 },
  { range: '$5000+', count: 12, percentage: 5 }
];

// Platform Usage Data
export const platformUsageData = [
  { platform: 'Spotify', usage: 45, color: '#1DB954' },
  { platform: 'Apple Music', usage: 28, color: '#FA57C1' },
  { platform: 'SoundCloud', usage: 15, color: '#FF5500' },
  { platform: 'YouTube Music', usage: 12, color: '#FF0000' }
];
