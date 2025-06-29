/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Kanit", "sans-serif"],
        bebas: ["Bebas Neue", "cursive"],
        comfortaa: ["Comfortaa", "cursive"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        royalBlue: "#408dff",
        royalBlack: "#111214",
      },
      boxShadow: {
        bottomShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
      },
    },
  },
  plugins: [],
};
