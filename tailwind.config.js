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
        umai_dark_green: "#3A8D2D"
      }
    },
  },
  plugins: [],
}