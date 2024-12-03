#What The Hack

Day #1
A cybersecurity news portal app. It gathers news articles via an API and presents them in a news format based on different categories.

Install vite
npm create vite@latest whatthehack-app -- --template react
npm install
npm run dev

Install Tailwind
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

```
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        kanit: ["Kanit", "sans-serif"],
        bebas: ["Bebas Neue", "cursive"],
        comfortaa: ["Comfortaa", "cursive"],
      },
    },
  },
  plugins: [],
};

```

Delete a few things
App.css
vite.svg files
Clear all contents in App.jsx
Clear all contents in index.css
Delete all logo links in the index.html
Change title in the index.html

Organize Folders
src > Components > News
Import News component into App.jsx
Add new Images folder in assets folder

Initial CSS
add a container class to the main App div
set initial styles in the index.css

```
* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  box-sizing: border-box;
  outline: none;
}

```

Google Fonts
Kanit
Comfortaa
Bebas Neue

grab the import code and add it in the index.css
