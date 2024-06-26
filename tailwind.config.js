/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  heme: {
    extend: {
      transitionProperty: {
        width: "width",
      },
      transitionDuration: {
        1000: "1000ms",
      },
      width: {
        300: "300px",
      },
    },
  },
  plugins: [],
};
