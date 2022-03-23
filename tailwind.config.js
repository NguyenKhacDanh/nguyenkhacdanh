module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {},
    keyframes: {
      animation: {
        "0%,50%,100%": { transform: "rotate(45deg)" },
        "25%": { transform: "rotate(45deg) translate(5px,-10px)" },
        "75%": { transform: "rotate(45deg) translate(5px,10px)" },
      },
    },
    animation: {
      animation1: " animation 4s linear infinite",
      animation2: " animation 7s linear infinite",
    },
  },
  plugins: [],
}



