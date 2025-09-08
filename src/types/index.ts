export interface User {
  userId: string;
  email: string;
  subscriptionTier: 'free' | 'pro' | 'business';
  paymentStatus: 'active' | 'pending' | 'expired';
  createdAt: string;
}

export interface Sample {
  sampleId: string;
  originalTrackTitle: string;
  originalArtist: string;
  rightsHolderInfo: string;
  clearanceStatus: 'pending' | 'approved' | 'denied' | 'in-progress';
  potentialFeeEstimate: number;
  addedByUserId: string;
  genre?: string;
  year?: number;
}

export interface ClearanceRequest {
  requestId: string;
  sampleId: string;
  licensorContact: string;
  licensorResponse?: string;
  negotiatedFee?: number;
  agreementTerms?: string;
  requestStatus: 'pending' | 'sent' | 'negotiating' | 'approved' | 'denied';
  createdAt: string;
  updatedAt: string;
}

export interface TrendData {
  trendId: string;
  sampleIdentifier: string;
  usageFrequency: number;
  genre: string;
  platform: string;
  analysisDate: string;
}

export interface DashboardStats {
  totalSamples: number;
  clearanceRequests: number;
  approvalRate: number;
  avgClearanceTime: number;
}