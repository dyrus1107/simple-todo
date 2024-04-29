/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#30ad6b",
        dark: "#292c30",
        "dark-lighter": "#323538",
        "dark-700": "#494f55",
        "dark-800": "#414549",
        "background-700": "#484d53",
        "background-400": "#7f8891",
      },
    },
  },
  plugins: [],
};
