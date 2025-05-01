/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        umai_green: "#7CDB54",
        umai_dark_green: "#6cc04a "
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"]
      }
    },
  },
  plugins: [],
}