/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customGreen: "#019f55", // Custom color name and hex code
        customBody: "#002339",
      },
    },
  },
  plugins: [],
};
