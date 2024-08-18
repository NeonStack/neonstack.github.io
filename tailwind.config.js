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
          DEFAULT: '#0A0F1C', // Deep dark blue for navbar and footer (matches your background)
          secondary: '#1B263B', // Slate blue for secondary elements (slightly lighter but still dark)
        },
        accent: {
          DEFAULT: '#39FF14', // neon green
        },
        background: {
          DEFAULT: '#111827', // Deep navy for the main background
          alt: '#1E293B', // Slightly lighter navy for alternating sections
        },
        text: {
          DEFAULT: '#F3F4F6', // Light gray for main text
          subdued: '#9CA3AF', // Soft gray for subtext
          muted: '#6B7280', // Medium gray for less important text
        }
      },
    },
  },
  plugins: [],
};
