/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        rubic: ["Rubik-Bold", "sans-serif"],
        rubicExtraBlod: ["Rubik-ExtraBold", "sans-serif"],
        rubicLight: ["Rubik-Light", "sans-serif"],
        rubicMedium: ["Rubik-Medium", "sans-serif"],
        rubikRegula: ["Rubik-Regular", "sans-serif"],
        rubicSemibold: ["Rubik-SemiBold", "sans-serif"],
        spaceMonoRegular: ["SpaceMono-Regular", "sans-serif"],
      },

      colors: {
        primary: {
          100: "#0061ff0a",
          200: "#0061ff1a",
          300: "#0061ff",
        },
        accent: {
          100: "#fbfbfd",
        },
        black: {
          DEFAULT: "#000000",
          100: "#8c8e98",
          200: "#666876",
          300: "#191d31",
        },
        danger: "#f75555",
      },
    },
  },
  plugins: [],
};
