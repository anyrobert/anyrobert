module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        profile: `url('/anyrobert.jpg')`,
      },
      colors: {
        primary: '#CC0F11',
        'light-primary': '#FA4F59',
        secondary: '#2F4858',
        'light-secondary': '#00A3CB',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
