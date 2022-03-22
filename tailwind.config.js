// tailwind.config.js
// in this file we can add the customized colors tailwind provides.

// const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],

  darkMode: "class", // or 'media' or 'class'
  theme: {
    fontFamily: {
      Popins: ["Poppins"],
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      // spacing: {
      //   128: "32rem",
      //   144: "36rem",
      // },
      // borderRadius: {
      //   "4xl": "2rem",
      // },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"), // import tailwind forms
  ],
};
