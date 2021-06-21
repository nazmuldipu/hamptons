/** https://tailwindcss.com/docs/configuration */
const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.njk"],
  darkMode: false, // or 'media' or 'class'
  //https://tailwindcss.com/docs/theme#customizing-the-default-themeß
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        xmed: "900px",
        lg: "1024px",
        "mar-tablet": "1200px",
        xl: "1280px",
        "2xl": "1536px",
        "mar-desktop": "2600px",
      },
      colors: {
        rose: colors.rose,
        "jou-main-1": "#1B3A5C",
        "jou-main-2": "#DBC8B6",
        "jou-main-3": "#EEE5DC",
        "jou-main": "#354656",
        white: "#fff",
        grey: "#D9D9D6",
        "grey-1": "#E5E5E5",
        violet: "#FDFAF9",
        "vio-1": "#DBC8B6",
        "vio-2": "#EEE5DC",
      },
      maxWidth: {
        "jou-desktop": "1200px",
        "hero-width": "832px",
        subheader__caption: "19rem",
      },
      borderWidth: {
        1: "1px",
      },
      width: {
        5.5: "1.375rem",
        126: "31.5rem",
      },
      height: {
        15: "60px",
        19: "76px",
        25: "100px",
      },
      fontFamily: {
        serif: ["Adobe Garamond Pro", "serif"],
        hijr: ["Hijrnotes", "sans-serif"],
      },
      fontSize: {
        "6.5xl": "4rem",
        "4.5xl": "2.5rem",
      },
      gridTemplateColumns: {
        "3-min-min": "repeat(3, min-content)",
        "50-40-40": "1.5fr 1fr 1fr",
      },
    },
  },
  variants: {
    extend: {
      textColor: ["active"],
      backgroundColor: ["active"],
      borderWidth: ["last"], //TODO, I dont know why it is not working in my machine, added by Meherab 5th May 2021
    },
  },
  plugins: [
    plugin(function ({ addUtilities, addComponents, theme }) {
      const utilities = {
        ".txtor-mixed": {
          "text-orientation": "mixed",
        },
        ".txtor-upright": {
          "text-orientation": "upright",
        },
        ".txtor-sideways": {
          "text-orientation": "sideways",
        },
      };
      const subtitles = {
        ".subtitle": {
          fontWeight: theme("fontWeight.900"),
          textDecoration: "line-through",
          "&:hover": {
            letterSpacing: theme("letterSpacing.widest"),
          },
        },
        ".subtitle-gr": {
          backgroundColor: theme("colors.green.200"),
          color: theme("colors.white"),
          "&:hover": {
            backgroundColor: theme("colors.green.900"),
          },
        },
      };
      addUtilities(utilities, ["responsive"]);
      addComponents(subtitles);
    }),
  ],
};
