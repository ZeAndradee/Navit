const typography = require("@tailwindcss/typography");
const forms = require("@tailwindcss/forms");

/** @type {import('tailwindcss').Config}*/
const config = {
  darkMode: "class",
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      spacing: {
        sidebar: '240px',
        estatisticaDiariaa: '288px',
      },
      colors:{
        'blue-youme': '#006AFF',
        'estatisca-diaria': '#F8F7F1',
        'background': '#F9F9F9', 
      }
    },
  },

  plugins: [forms, typography],
};

module.exports = config;
