/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Kanit", "sans-serif"],
        bebas: ["Bebas Neue", "cursive"],
        comfortaa: ["Comfortaa", "cursive"],
      },
    },
  },
  plugins: [],
};
