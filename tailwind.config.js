/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-comfortaa)"],
        mono: ["var(--font-roboto-mono)"],
      },
      backgroundImage: {
        profile: `url('/anyrobert.jpg')`,
      },
      colors: {
        primary: "#CC0F11",
        "light-primary": "#FA4F59",
        secondary: "#2F4858",
        "light-secondary": "#00A3CB",
      },
    },
  },
  plugins: [],
};
