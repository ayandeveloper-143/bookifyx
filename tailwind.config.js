/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#fb8226',
        'primary-light': 'rgba(251, 130, 38, 0.3)',
        'primary-transparent': 'rgba(251, 130, 38, 0.25)'
      }
    }
  },
  plugins: []
};
