/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans"],
        roboto: ["Roboto", "sans"],
      },
      boxShadow: {
        "5-10": "0px 5px 0px 0px rgba(0, 0, 0, .25)",
      },
      colors: {
        "custom-blue": "#46AFE7",
        "light-blue": "#D2E6F9",
        "light-green": "#6CCE8C",
        "custom-white": "#FFFFFF",
        "custom-black": "#323c47",
        "custom-orange": "#F29B62",
      },
    },
  },
  plugins: [],
};
