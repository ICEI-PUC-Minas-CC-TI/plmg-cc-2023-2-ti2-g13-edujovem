/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        accent:"#f9b24a",
        white: "#f3f3f3",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      fontFamily: {
        montserrat: ['Montserrat'],
      },
      fontSize: {
        spct: "3vw",
        sspct: "2vw",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
        'start': '0px',
        'tablet': '640px',
        'laptop': '1024px',
        'desktop': '1280px',
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
        "countmoneyVID": "url('/src/assets/contmoney.png')",
      },
    },
  },
  plugins: [],
};