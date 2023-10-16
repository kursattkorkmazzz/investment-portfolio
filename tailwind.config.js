/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: colors.slate[700],
        },
        white: {
          DEFAULT: colors.slate[100],
        },
      },
    },
  },
  plugins: [],
};
