/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        battleShipGrey: '#9A998C',
        ashGrey: '#A2A392',
        timberwolfGrey: '#D5D0CD',
        timberwolfGreyDark: '#D4CDC3',
        cosmicLatte: '#F8F4E3',
        blueBtn: '#003b6d',
        hoverBtn: '#6699CC',
      },
    },
  },
  plugins: [],
};
