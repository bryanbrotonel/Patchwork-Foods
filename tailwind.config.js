/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{html,ts,tsx,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#EF5411',
        black: '#0C1618',
        white: '#FFFEFD',
        background: '#FFF3EA',
      },
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      serif: ['Crimson Pro', 'serif'],
    },
    container: {
      center: true,
    },
  },
  variants: {
    extend: {},
  },
};
