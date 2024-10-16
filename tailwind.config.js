/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      padding: "1.125em"
    },
    extend: {
      fontSize: {
        base: ["0.875rem", "1.25rem"],
        lg: ["1rem", "1.5rem"],
        xl: ["1.125rem", "1.75rem"],
        "2xl": ["1.25rem", "1.75rem"],
        "3xl": ["1.5rem", "2rem"],
        "4xl": ["1.875rem", "2.25rem"]
      },
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
        title: "sansation, sans-serif",
        body: "Montserrat, sans-serif"
      },
      colors: {
        black: "#1B2029"
      }
    }
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    plugin(function ({ addBase }) {
      addBase({
        h1: {
          fontSize: "85px",
          lineHeight: "80px",
          fontWeight: "normal"
        },
        h2: {
          fontSize: "50px",
          lineHeight: "54px"
        },
        h3: {
          fontSize: "32px",
          lineHeight: "38px"
        },
        h4: {
          fontSize: "20px",
          lineHeight: "26px"
        },
        ".btn": {
          border: "1px solid #1B2029",
          padding: "0 25px",
          fontFamily: "Montserrat, sans-serif",
          // color: "#1B2029",
          height: "40px",
          display: "inline-block",
          position: "relative",
          textDecoration: "none !important",
          lineHeight: "38px",
          transitionDuration: "0.3s",
          "&:after": {
            display: "inline-block",
            content: "url(/public/images/arrow.svg)",
            "margin-left": "6px",
            width: "18px",
            transitionDuration: "0.3s",
            position: "relative",
            top: "3px"
          },
          "&:hover": {
            backgroundColor: "#1B2029",
            color: "white",
            "&:after": {
              filter: "invert(1)"
            }
          }
        },
        ".btn-invert": {
          backgroundColor: "#1B2029",
          color: "white !important",
          borderColor: "white",
          "&:after": {
            filter: "invert(1)"
          },
          "&:hover": {
            backgroundColor: "white",
            color: "#1B2029 !important",
            "&:after": {
              filter: "invert(0)"
            }
          }
        },
        ".btn2": {
          "text-transform": "uppercase",
          fontFamily: "Montserrat, sans-serif",
          "border-bottom": "1px solid #1B2029",
          height: "50px",
          "font-size": "18px",
          padding: "10px 0",
          "text-decoration": "none !important",
          position: "relative",
          display: "block",
          "&:after": {
            display: "inline-block",
            width: "18px",
            content: "url(/public/images/arrow.svg)",
            "margin-left": "4px",
            transitionDuration: "0.3s",
            position: "absolute",
            right: 0,
            top: "15px"
          },
          "&:hover": {
            backgroundColor: "#1B2029",
            color: "white",
            padding: "10px",
            "&:after": {
              filter: "invert(1)",
              right: "10px"
            }
          }
        },
        ".btn3": {
          height: "40px",
          fontFamily: "Montserrat, sans-serif",
          "font-size": "18px",
          lineHeight: 1,
          padding: "10px 0",
          position: "relative",

          display: "block",
          "&:after": {
            display: "inline-block",
            width: "18px",
            content: "url(/public/images/arrow.svg)",
            "margin-left": "4px",
            transitionDuration: "0.3s",
            position: "absolute",
            right: 0,
            top: "10px"
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
          fontFamily: "sansation, sans-serif",
          "&:hover": {
            "text-decoration": "underline"
          }
        },
        "@media (max-width: 1023px)": {
          h1: {
            fontSize: "40px",
            lineHeight: "46px"
          },
          h2: {
            fontSize: "35px",
            lineHeight: "40px"
          },
          h3: {
            fontSize: "24px",
            lineHeight: "30px"
          },
          h4: {
            fontSize: "18px",
            lineHeight: "24px"
          }
        }
      });
    })
  ]
};
