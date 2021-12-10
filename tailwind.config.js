// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto Mono", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "blog-tag": "#090909",
        "bt-primary": "#3b49df",
        "bt-secondary": "#323ebe",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
