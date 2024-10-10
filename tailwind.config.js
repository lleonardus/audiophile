/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      black: "#000000",
      white: "#FFFFFF",
      orange: {
        400: "#FBAF85",
        700: "#D87D4A",
      },
      gray: {
        50: "#FAFAFA",
        100: "#F1F1F1",
        900: "#101010",
      },
    },
    extend: {},
  },
  plugins: [],
};
