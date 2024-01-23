/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/index.html","./src/contact.html","./src/main.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        "bodoni": ['Bodoni', 'serif'],
        "grotesque": ['Darker Grotesque', 'sans-serif'],
        "poppins": ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}

