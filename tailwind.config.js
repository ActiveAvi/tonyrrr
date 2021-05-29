const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      // Build your palette here
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.trueGray,
      bluegray: colors.blueGray,
      coolgray: colors.coolGray,
      warmgray: colors.warmGray,
      red: colors.red,
      blue: colors.lightBlue,
      yellow: colors.amber,
    },
    extend: {
      spacing: { 800: '800px' },
      screens: {
        msm: { max: '640px' },
      },
      transitionProperty: {
        display: 'display',
        height: 'height',
      },
      height: {
        'screen-95': '95vh',
      },
      width: {
        '1/6': '17%',
        xs: '20rem',
      },
      minWidth: {
        xs: '20rem',
      },
      margin: {
        '1/6': '17%',
        '1/2': '50%',
        '1/4': '25%',
        '1/3': '33%',
        'h-30': '30vh',
      },
      boxShadow: {
        big: '0 45px 60px 24px rgb(0 0 0 / 70%), 0 23px 56px 33px rgb(250 250 250 / 45%)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
