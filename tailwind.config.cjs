/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
      playfair: ["Playfair Display", "serif"],
    },
    backgroundImage: {
      galaxy: "url('./src/assets/5471985.jpg')",
    },
  },
  plugins: [],
};
