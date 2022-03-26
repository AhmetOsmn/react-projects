module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-light": "#D8E3E7",
        "secondary-light": "#94B49F",
        "primary-dark": "#132C33",
        "secondary-dark": "#126E82",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
