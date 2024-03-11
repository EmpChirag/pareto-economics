/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
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
    }}
  },
  plugins: []
};
