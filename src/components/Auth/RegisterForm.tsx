import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, Music, Check } from 'lucide-react';
import { useAuth } from './AuthProvider';

interface RegisterFormProps {
  onToggleMode: () => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onToggleMode }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [subscriptionTier, setSubscriptionTier] = useState('free');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const { register } = useAuth();

  const subscriptionPlans = [
    {
      id: 'free',
      name: 'Free',
      price: '$0',
      features: ['5 searches per month', 'Basic sample database', 'Community support'],
    },
    {
      id: 'pro',
      name: 'Pro',
      price: '$25',
      features: ['Unlimited searches', 'Advanced analytics', 'Priority support', 'Market insights'],
    },
    {
      id: 'business',
      name: 'Business',
      price: '$75',
      features: ['Everything in Pro', 'Team collaboration', 'API access', 'Custom integrations'],
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    setIsLoading(true);

    try {
      await register(email, password, subscriptionTier);
    } catch (error) {
      setError('Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-dark-bg flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="card">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-gradient-purple rounded-lg flex items-center justify-center">
                <Music className="w-6 h-6 text-white" />
              </div>
            </div>
            <h1 className="text-2xl font-bold text-dark-text mb-2">Create Your Account</h1>
            <p className="text-dark-text-secondary">Join SampleSecure and streamline your sample clearance process</p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
              <p className="text-red-400 text-sm">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Account Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-dark-text mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-dark-text-secondary w-5 h-5" />
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 input-field"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-dark-text mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-dark-text-secondary w-5 h-5" />
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-12 py-3 input-field"
                    placeholder="Create a password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-dark-text-secondary hover:text-dark-text"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-dark-text mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-dark-text-secondary w-5 h-5" />
                <input
                  id="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full pl-10 pr-12 py-3 input-field"
                  placeholder="Confirm your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-dark-text-secondary hover:text-dark-text"
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Subscription Plans */}
            <div>
              <label className="block text-sm font-medium text-dark-text mb-4">Choose Your Plan</label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {subscriptionPlans.map((plan) => (
                  <div
                    key={plan.id}
                    className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                      subscriptionTier === plan.id
                        ? 'border-purple-primary bg-purple-primary/5'
                        : 'border-dark-border hover:border-purple-primary/50'
                    }`}
                    onClick={() => setSubscriptionTier(plan.id)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-dark-text">{plan.name}</h3>
                      <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                        subscriptionTier === plan.id
                          ? 'border-purple-primary bg-purple-primary'
                          : 'border-dark-border'
                      }`}>
                        {subscriptionTier === plan.id && <Check className="w-2 h-2 text-white" />}
                      </div>
                    </div>
                    <p className="text-2xl font-bold text-purple-primary mb-3">{plan.price}<span className="text-sm text-dark-text-secondary">/month</span></p>
                    <ul className="space-y-1">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="text-sm text-dark-text-secondary flex items-center">
                          <Check className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                id="terms"
                className="mt-1 rounded border-dark-border text-purple-primary focus:ring-purple-primary"
                required
              />
              <label htmlFor="terms" className="text-sm text-dark-text-secondary">
                I agree to the{' '}
                <a href="#" className="text-purple-primary hover:text-purple-secondary">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="#" className="text-purple-primary hover:text-purple-secondary">
                  Privacy Policy
                </a>
              </label>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full button-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Creating Account...' : 'Create Account'}
            </button>
          </form>

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-dark-text-secondary">
              Already have an account?{' '}
              <button
                onClick={onToggleMode}
                className="text-purple-primary hover:text-purple-secondary font-medium"
              >
                Sign in
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
