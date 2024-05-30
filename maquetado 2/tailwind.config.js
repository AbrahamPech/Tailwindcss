/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        danger: '#ff5f40',
        info: {
          900: '#cb3838',
          800: '#214776',
        },
        mio: '#0aab5d',
        otro: '#308618',
        mipiel: '#533b1e'
      },
    },
    fontFamily: {
      rale: ['Raleway'],
    },
  },
  plugins: [],
}

