/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'didact': ['"Comic Neue"', 'cursive'],  
      },
    },
  },
  plugins: [],
}
