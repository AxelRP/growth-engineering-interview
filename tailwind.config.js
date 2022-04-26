const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#FDDD35',
        white: "#FCFCFC",
        red: '#ED5656',
        green: '#85FFBC',
        blue: '#298AFF',
        orange: '#FFA83C',
        black: '#0E1414',
        softBlack: '#182222',
        gray: colors.gray,
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  content: [
    "./src/**/*.{html,ts}",
  ],
}
