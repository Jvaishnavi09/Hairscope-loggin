/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ...colors, // keep all Tailwind default colors
        brandCyan: "#00ffe0", // your custom cyan
      },
    },
  },
  plugins: [],
};
