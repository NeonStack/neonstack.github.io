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
          DEFAULT: '#22c55e'
        },
        background: {
          DEFAULT: '#f5f5f5'
        },
      },
    },
  },
  plugins: [],
};

