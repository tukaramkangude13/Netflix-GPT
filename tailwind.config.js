/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-bg': "url('/Back.png')", // Custom class
      },
    },
  },
plugins: [
  require('tailwind-scrollbar-hide'),
],
}