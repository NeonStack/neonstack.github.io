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
          DEFAULT: 'var(--color-primary)',
          secondary: 'var(--color-primary-secondary)',
        },
        accent: {
          DEFAULT: 'var(--color-accent)',
        },
        background: {
          DEFAULT: 'var(--color-background)',
          alt: 'var(--color-background-alt)',
        },
        text: {
          DEFAULT: 'var(--color-text)',
          subdued: 'var(--color-text-subdued)',
          muted: 'var(--color-text-muted)',
        },
      },
    },
  },
  plugins: [],
};
