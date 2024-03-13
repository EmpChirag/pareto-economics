/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      padding: "1.125em"
    },
    extend: {
      screens: {
        "2xl": "1480px",
        "max-2xl": { max: "1439px" },
        "max-xl": { max: "1279px" },
        "max-1150": { max: "1149px" },
        "max-lg": { max: "1023px" },
        "max-900": { max: "899px" },
        "max-md": { max: "767px" },
        "max-sm": { max: "639px" }
      },
      fontFamily: {
        extra: "Montserrat, sans-serif"
      },
      colors: {
        black: "#1B2029"
      }
    }
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        ".btn": {
          border: "1px solid #1B2029",
          padding: "0 25px",
          // color: "#1B2029",
          height: "40px",
          display: "inline-block",
          position: "relative",
          textDecoration: "none !important",
          lineHeight: "38px",
          transitionDuration: "0.3s",
          "&:after": {
            display: "inline-block",
            content: "url(./assets/images/arrow.svg)",
            "margin-left": "4px",
            width: "16px",
            transitionDuration: "0.3s",
            position: "relative",
            top: "1px"
          },
          "&:hover": {
            backgroundColor: "#1B2029",
            color: "white",
            "&:after": {
              filter: "invert(1)"
            }
          }
        },
        ".btn2": {
          "text-transform": "uppercase",
          "border-bottom": "1px solid #1B2029",
          height: "50px",
          "font-size": "18px",
          padding: "10px 0",
          "text-decoration": "none !important",
          position: "relative",
          display: "block",
          "&:after": {
            display: "inline-block",
            width: "16px",
            content: "url(./assets/images/arrow.svg)",
            "margin-left": "4px",
            transitionDuration: "0.3s",
            position: "absolute",
            right: 0,
            top: "12px"
          },
          "&:hover": {
            backgroundColor: "#1B2029",
            color: "white",
            padding: "10px",
            "&:after": {
              filter: "invert(1)"
            }
          }
        },
        ".btn3": {
          height: "40px",
          "font-size": "18px",
          lineHeight: 1,
          padding: "10px 0",
          position: "relative",

          display: "block",
          "&:after": {
            display: "inline-block",
            width: "16px",
            content: "url(./assets/images/arrow.svg)",
            "margin-left": "4px",
            transitionDuration: "0.3s",
            position: "absolute",
            right: 0,
            top: "9px"
          },
          "&:hover": {
            textDecoration: "underline"
          }
        },
        section: {
          marginTop: "96px",
          "@media(max-width: 767px)": {
            marginTop: "50px"
          }
        },
        a: {
          transitionDuration: "0.3s",
          "&:hover": {
            "text-decoration": "underline"
          }
        },
        "@media (max-width: 1023px)": {}
      });
    })
  ]
};
