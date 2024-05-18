/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./distr/index.html"],
  theme: {
    extend: {
      colors: {
        "main-background": "#2f3e46",
        "para-BG": "#FFF6CC",
      },
      fontFamily: {
        myFont: ["Ubuntu", "sans-serif"],
        bodyFont: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
