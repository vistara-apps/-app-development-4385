// API Service Layer for SampleSecure
import { Sample, ClearanceRequest, TrendData, User } from '../types';

const API_BASE_URL = process.env.VITE_API_BASE_URL || 'http://localhost:3001/api';

class ApiService {
  private async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const url = `${API_BASE_URL}${endpoint}`;
    const token = localStorage.getItem('auth_token');
    
    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        throw new Error(`API Error: ${response.status} ${response.statusText}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('API Request failed:', error);
      throw error;
    }
  }

  // Authentication
  async login(email: string, password: string): Promise<{ user: User; token: string }> {
    return this.request('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
  }

  async register(email: string, password: string, subscriptionTier: string): Promise<{ user: User; token: string }> {
    return this.request('/auth/register', {
      method: 'POST',
      body: JSON.stringify({ email, password, subscriptionTier }),
    });
  }

  async logout(): Promise<void> {
    localStorage.removeItem('auth_token');
  }

  // Sample Discovery
  async searchSamples(query: string): Promise<Sample[]> {
    return this.request(`/samples/search?q=${encodeURIComponent(query)}`);
  }

  async getSample(sampleId: string): Promise<Sample> {
    return this.request(`/samples/${sampleId}`);
  }

  async getPopularSamples(): Promise<Sample[]> {
    return this.request('/samples/popular');
  }

  // MusicBrainz API Integration
  async searchMusicBrainz(query: string): Promise<any> {
    const musicBrainzUrl = `https://musicbrainz.org/ws/2/recording/?query=${encodeURIComponent(query)}&fmt=json&limit=10`;
    
    try {
      const response = await fetch(musicBrainzUrl);
      return await response.json();
    } catch (error) {
      console.error('MusicBrainz API Error:', error);
      throw error;
    }
  }

  // Clearance Management
  async getClearanceRequests(): Promise<ClearanceRequest[]> {
    return this.request('/clearances');
  }

  async createClearanceRequest(request: Omit<ClearanceRequest, 'requestId' | 'createdAt' | 'updatedAt'>): Promise<ClearanceRequest> {
    return this.request('/clearances', {
      method: 'POST',
      body: JSON.stringify(request),
    });
  }

  async updateClearanceRequest(requestId: string, updates: Partial<ClearanceRequest>): Promise<ClearanceRequest> {
    return this.request(`/clearances/${requestId}`, {
      method: 'PATCH',
      body: JSON.stringify(updates),
    });
  }

  async deleteClearanceRequest(requestId: string): Promise<void> {
    return this.request(`/clearances/${requestId}`, {
      method: 'DELETE',
    });
  }

  // Analytics & Trends
  async getTrendData(): Promise<TrendData[]> {
    return this.request('/analytics/trends');
  }

  async getGenreAnalytics(): Promise<any> {
    return this.request('/analytics/genres');
  }

  async getPlatformAnalytics(): Promise<any> {
    return this.request('/analytics/platforms');
  }

  // Market Valuation
  async getMarketValuation(sampleType: string, artistTier: string, usageType: string): Promise<{ estimatedFee: number; range: { min: number; max: number } }> {
    return this.request('/valuation/estimate', {
      method: 'POST',
      body: JSON.stringify({ sampleType, artistTier, usageType }),
    });
  }

  async getMarketTrends(): Promise<any> {
    return this.request('/valuation/trends');
  }

  async getRecentDeals(): Promise<any> {
    return this.request('/valuation/recent-deals');
  }

  // User Management
  async getCurrentUser(): Promise<User> {
    return this.request('/user/profile');
  }

  async updateUserProfile(updates: Partial<User>): Promise<User> {
    return this.request('/user/profile', {
      method: 'PATCH',
      body: JSON.stringify(updates),
    });
  }

  async updateSubscription(subscriptionTier: string): Promise<User> {
    return this.request('/user/subscription', {
      method: 'PATCH',
      body: JSON.stringify({ subscriptionTier }),
    });
  }

  // Stripe Integration
  async createPaymentIntent(amount: number, currency: string = 'usd'): Promise<{ clientSecret: string }> {
    return this.request('/payments/create-intent', {
      method: 'POST',
      body: JSON.stringify({ amount, currency }),
    });
  }

  async confirmSubscription(paymentMethodId: string, subscriptionTier: string): Promise<any> {
    return this.request('/payments/confirm-subscription', {
      method: 'POST',
      body: JSON.stringify({ paymentMethodId, subscriptionTier }),
    });
  }

  // Dashboard Stats
  async getDashboardStats(): Promise<any> {
    return this.request('/dashboard/stats');
  }
}

export const apiService = new ApiService();
export default apiService;
