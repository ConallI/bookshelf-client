// eslint-disable-next-line @typescript-eslint/no-var-requires
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["Overpass", "Murecho", ...fontFamily.sans],
    },
    extend: {
      colors: {
        "bk-primary-light": "#ffffff01",
        "bk-primary-dark": "#21212180",
        "bk-orange": "#F2994A",
        "bk-blue": "#63B3ED",
        "bk-red": "#EB5757",
      },
    },
  },
  plugins: [],
};