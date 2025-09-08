/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: 'hsl(210, 36%, 96%)',
        accent: 'hsl(130, 70%, 50%)',
        primary: 'hsl(210, 70%, 50%)',
        surface: 'hsl(210, 36%, 100%)',
        'text-primary': 'hsl(210, 29%, 24%)',
        'text-secondary': 'hsl(210, 15%, 49%)',
        // Dark theme colors
        'dark-bg': 'hsl(230, 30%, 8%)',
        'dark-surface': 'hsl(230, 25%, 12%)',
        'dark-surface-2': 'hsl(230, 20%, 16%)',
        'dark-border': 'hsl(230, 15%, 20%)',
        'dark-text': 'hsl(0, 0%, 95%)',
        'dark-text-secondary': 'hsl(0, 0%, 65%)',
        'purple-primary': 'hsl(260, 70%, 60%)',
        'purple-secondary': 'hsl(280, 60%, 70%)',
      },
      borderRadius: {
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
      },
      spacing: {
        'sm': '4px',
        'md': '8px',
        'lg': '16px',
        'xl': '24px',
      },
      boxShadow: {
        'card': '0 1px 8px hsla(210, 15%, 15%, 0.08)',
        'modal': '0 5px 15px hsla(210, 15%, 15%, 0.12)',
        'dark-card': '0 4px 20px hsla(0, 0%, 0%, 0.3)',
      },
      backgroundImage: {
        'gradient-purple': 'linear-gradient(135deg, hsl(260, 70%, 60%) 0%, hsl(280, 60%, 70%) 100%)',
        'gradient-dark': 'linear-gradient(135deg, hsl(230, 30%, 8%) 0%, hsl(230, 25%, 12%) 100%)',
      }
    },
  },
  plugins: [],
}