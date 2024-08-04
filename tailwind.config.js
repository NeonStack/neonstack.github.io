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
          DEFAULT: '#39FF14', // neon green
        },
        background: {
          DEFAULT: '#1C2128', // A dark charcoal color
          alt: '#16191F', // A slightly darker shade for alternating sections
          component1: '#0A3D62', // Deep teal
          component2: '#4B0082', // Vibrant indigo
          component3: '#4A1A2C', // Dark burgundy
          component4: '#013220', // Dark forest green
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