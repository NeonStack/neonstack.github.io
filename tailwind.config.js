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
          secondary: '#4CAF50', // A muted green for balance (moved from secondary)
        },
        accent: {
          DEFAULT: '#31ED10', // A bright neon green
        },
        background: {
          DEFAULT: '#1C2128', // A dark charcoal color
          alt: '#16191F', // A slightly darker shade for alternating sections
        },
        text: {
          DEFAULT: '#E6EDF3', // A light gray for text
          subdued: '#B1B7BE', // A darker gray for subtext
          muted: '#8B949E', // An even more muted color for less important text
        }
      },
    },
  },
  plugins: [],
};