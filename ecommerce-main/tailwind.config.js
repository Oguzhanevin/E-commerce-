/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
      dropShadow: {
        black: "0 8px 10px rgba(0, 0, 0, 0.9)",
      },
    },
  },
  plugins: [],
};
