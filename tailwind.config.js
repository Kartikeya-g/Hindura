/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          black: '#0c0c0e',
          dark: '#141417',
          charcoal: '#1c1c21',
          stone: '#292930',
          muted: '#8e8b85',
          border: '#e4e1db',
          borderDark: '#26262d',
          sand: '#f4f1eb',
          cream: '#faf9f6',
          gold: '#b8965a',
          goldLight: '#d6b67e',
          goldMuted: '#967945',
        },
      },
      letterSpacing: {
        widest2: '0.2em',
        widest3: '0.3em',
        widest4: '0.4em',
      },
    },
  },
  plugins: [],
};