/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx}"],

  theme: {
    fontFamily: {
      jost: ["Jost"],
    },

    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        fadeIn: "fadeIn .6s ease-in-out",
      },
    },
    colors: {
      purple: "#AD1FEA",
      navyBlue: "#4661E6",
      white: "#FFFFFF",
      whiteMedium: "#F7F8FD",
      whiteGrey: "#F2F4FF",
      grey: "#647196",
      greyMedium: "#4661E6",
      darkgrey: "#3A4374",
      salmon: "#F49F85",
      blue: "#62BCFA",
    },
    borderRadius: { main: "10px" },
  },
  plugins: [],
};
