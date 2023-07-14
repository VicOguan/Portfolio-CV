/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      animation: {
        fadeIn: "fadeIn 2s ease-in forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      transitionDuration: {
        0: "0ms",
        2000: "2000ms",
      },
      colors: {
        softBlue: "hsl(231, 69%, 60%)",
        black: "hsl()",
        softRed: "hsl(0, 94%, 66%)",
        grayishBlue: "hsl(229, 8%, 60%)",
        veryDarkBlue: "hsl(229, 31%, 21%)",
        
      },
      fontFamily: {
        sans: ["Josefin Sans", "sans-serif", "Rubik"],
        alata: ["Alata"],
      },
      backgroundImage: () => ({
        dots: "url('../images/bg-dots.svg')",
      }),
      letterSpacing: {
        widest: ".3em",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
  darkMode: "class"
};
