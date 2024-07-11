/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0D1117', // A deep, dark blue-black
        },
        accent: {
          DEFAULT: '#00FFBF', // A bright neon cyan
        },
        background: {
          DEFAULT: '#1C2128', // A dark charcoal color
        },
        secondary: {
          DEFAULT: '#4CAF50', // A muted green for balance
        },
        text: {
          DEFAULT: '#E6EDF3', // A light gray for text
        }
      },
    },
  },
  plugins: [],
};