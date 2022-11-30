/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      padding: {
        '1/2': '50%',
        full: '100%',
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  darkMode: 'media', // class
  plugins: [
    // require("@tailwindcss/forms"),
    // require("@tailwindcss/aspect-ratio"),
    require('tailwind-scrollbar-hide'),
  ],
}
