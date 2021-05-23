module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'netflix-red': {
          'light': '#d23840',
          'og': '#E50914',
        },
        'netflix-black': '#111',
      },
      fontFamily: {
        'mulish': 'Mulish',
        'work-sans': '"Work Sans"',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
