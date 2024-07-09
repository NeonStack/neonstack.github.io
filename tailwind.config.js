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
          DEFAULT: '#252525',
        },
        accent: {
          DEFAULT: '#228B22',
        },
        background: {
          DEFAULT: '#ffffff',
        },
      },
    },
  },
  plugins: [],
};
