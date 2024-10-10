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
    fontFamily: {
      manrope: ["Manrope", "sans-serif"],
    },
    fontSize: {
      xs: ["0.8125rem", { lineHeight: "1.5625rem", fontWeight: "700" }],
      sm: [
        "0.875rem",
        {
          lineHeight: "1.1875rem",
          letterSpacing: "0.625rem",
          fontWeight: "400",
        },
      ],
      base: ["0.9375rem", { lineHeight: "1.5625rem", fontWeight: "500" }],
      lg: [
        "1.125rem",
        {
          lineHeight: "1.5rem",
          letterSpacing: "0.08125rem",
          fontWeight: "700",
        },
      ],
      xl: [
        "1.5rem",
        {
          lineHeight: "2.0625rem",
          letterSpacing: "0.10625rem",
          fontWeight: "700",
        },
      ],
      "2xl": [
        "1.75rem",
        {
          lineHeight: "2.375rem",
          letterSpacing: "0.125rem",
          fontWeight: "700",
        },
      ],
      "3xl": [
        "2rem",
        {
          lineHeight: "2.25rem",
          letterSpacing: "0.071875rem",
          fontWeight: "700",
        },
      ],
      "4xl": [
        "2.5rem",
        {
          lineHeight: "2.75rem",
          letterSpacing: "0.09375rem",
          fontWeight: "700",
        },
      ],
      "5xl": [
        "3.5rem",
        {
          lineHeight: "3.625rem",
          letterSpacing: "0.125rem",
          fontWeight: "700",
        },
      ],
    },
    extend: {},
  },
  plugins: [],
};
