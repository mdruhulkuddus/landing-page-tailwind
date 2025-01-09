/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,js}",
"!./node_modules/**/*"   // Exclude the node_modules directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

