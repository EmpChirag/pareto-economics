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
        'extra': "Montserrat, sans-serif"
      }
    }
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        ".btn": {
          border: "1px solid black",
          padding: "0 25px",
          height: "40px",
          display: "inline-block",
          position: "relative",
          transitionDuration: "0.3s",
          "&:after": {
            content:
              "url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxNCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjc0ODYgMTAuMTY0OEw0Ljg4Nzc4IDEzLjY1OTFWMTIuMjk1NUwxMC4xNTA2IDkuNzU5OTRMMTAuMTA4IDkuODQ1MTdWOS42MzIxTDEwLjE1MDYgOS43MTczM0w0Ljg4Nzc4IDcuMTgxODJWNS44MTgxOEwxMS43NDg2IDkuMzEyNVYxMC4xNjQ4WiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTUuMDU5NjYgOS40Mzg5MlYxMC40NTQ1SDAuOTIzMjk1VjkuNDM4OTJINS4wNTk2NloiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=)",
            "margin-left": "4px",
            transitionDuration: "0.3s",
            position: "relative",
            top: "2.5px"
          },
          "&:hover": {
            backgroundColor: "black",
            color: "white",
            "&:after": {
              filter: "invert(1)"
            }
          }
        },
        ".btn2": {
          "text-transform": "uppercase",
          "border-bottom": "1px solid black",
          height: "50px",
          "font-size": "18px",
          padding: "10px 0",
          "text-decoration": "none !important",
          position: "relative",
          display: "block",
          "&:after": {
            content:
              "url(data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgaGVpZ2h0PSIzNSIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSIzNSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkYXRhLW5hbWU9IkxheWVyIDEiPjxwYXRoIGQ9Im00NTQuOTY1IDMxOS40MSA1Mi41NDEtNTIuNTQyYTE1LjM4OSAxNS4zODkgMCAwIDAgMC0yMS43MzdsLTUyLjU0LTUyLjU0MWExMi41MjUgMTIuNTI1IDAgMCAwIC0xNy43MTMgMTcuNzFsMzMuMTczIDMzLjE3M2gtNDU3LjkwMmExMi41MjQgMTIuNTI0IDAgMCAwIDAgMjUuMDQ4aDQ1Ny45bC0zMy4xNzEgMzMuMTc5YTEyLjUyNSAxMi41MjUgMCAwIDAgMTcuNzEyIDE3LjcxM3oiLz48L3N2Zz4=)",
            "margin-left": "4px",
            transitionDuration: "0.3s",
            position: "absolute",
            right: 0,
            top: "9px"
          },
          "&:hover": {
            backgroundColor: "black",
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
          padding: "10px 0",
          position: "relative",
          display: "block",
          "&:after": {
            content:
              "url(data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgaGVpZ2h0PSIzNSIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSIzNSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkYXRhLW5hbWU9IkxheWVyIDEiPjxwYXRoIGQ9Im00NTQuOTY1IDMxOS40MSA1Mi41NDEtNTIuNTQyYTE1LjM4OSAxNS4zODkgMCAwIDAgMC0yMS43MzdsLTUyLjU0LTUyLjU0MWExMi41MjUgMTIuNTI1IDAgMCAwIC0xNy43MTMgMTcuNzFsMzMuMTczIDMzLjE3M2gtNDU3LjkwMmExMi41MjQgMTIuNTI0IDAgMCAwIDAgMjUuMDQ4aDQ1Ny45bC0zMy4xNzEgMzMuMTc5YTEyLjUyNSAxMi41MjUgMCAwIDAgMTcuNzEyIDE3LjcxM3oiLz48L3N2Zz4=)",
            "margin-left": "4px",
            transitionDuration: "0.3s",
            position: "absolute",
            right: 0,
            top: "7px"
          },
          "&:hover": {
           textDecoration: "underline"
          }
        },
        section: {
          marginTop: "96px"
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
