/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      custom: ["Inter", "sans-serif"],
    },
    colors: {
      tightRed: "#E26868",
      lightRed: "#FF8787",
      scrollbar: "#48dae0",
      darkblack: "#3C4048",
      grey: "#D8D9CF",
      lightgrey: "#EDEDED",
      white: "#FFFFFF",
      stampRed: "#D61C1C;",
    },
  },
  plugins: [],
};
