/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyber: {
          50: '#f0fdff',
          100: '#ccfbfe',
          200: '#00d9ff',
          300: '#00bfff',
          400: '#0099cc',
          500: '#007799',
          600: '#005566',
          700: '#003344',
          800: '#001122',
          900: '#000511',
        },
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Monaco', 'Consolas', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          from: { boxShadow: '0 0 20px -10px rgba(0, 217, 255, 0.5)' },
          to: { boxShadow: '0 0 20px -5px rgba(0, 217, 255, 0.8)' },
        },
      },
      backgroundImage: {
        'cyber-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'neon-gradient': 'linear-gradient(45deg, #00d9ff, #8b5cf6, #06ffa5)',
      },
    },
  },
  plugins: [],
};