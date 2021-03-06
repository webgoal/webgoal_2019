// See default config https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    fontFamily: {
      serif: ['museo-slab', ...defaultTheme.fontFamily.serif],
      sans: ['museo-sans', ...defaultTheme.fontFamily.sans]
    },
    fontSize: { ...defaultTheme.fontSize, '7xl': '5rem' },
    extend: {
      colors: {
        white: '#ffffff',
        black: '#000000',
        yellow: '#febd32',
        darkYellow: '#eba40e',
        lightBlue: '#00b8d7',
        lightGray: '#f8f8f8',
        gray: '#9f9f9f',
        darkBlue: '#008da5'
      }
    },
    container: {
      center: true,
      padding: '1rem'
    }
  },
  variants: {}
}
