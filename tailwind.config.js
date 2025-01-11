/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./**/*.{html,js}",
"!./node_modules/**/*"   // Exclude the node_modules directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

