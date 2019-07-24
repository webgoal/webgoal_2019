// See default config https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    fontFamily: {
      serif: ['museo-slab', ...defaultTheme.fontFamily.serif],
      sans: ['museo-sans', ...defaultTheme.fontFamily.sans]
    },
    fontSize: { ...defaultTheme.fontSize, '7xl': '5rem' },
    extend: {},
    container: {
      center: true,
      padding: '1rem'
    }
  },
  variants: {}
}
