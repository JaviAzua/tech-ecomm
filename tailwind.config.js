/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        marquee: "marquee 60s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
    fontFamily: {
      custom: ["Inter", "sans-serif"],
    },
    colors: {
      tightRed: "#d6d2d2",
      lightRed: "#f04941",
      scrollbar: "#48dae0",
      darkblack: "#3C4048",
      grey: "#D8D9CF",
      lightgrey: "#EDEDED",
      white: "#FFFFFF",
      black: "#000000",
      stampRed: "#D61C1C;",
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
