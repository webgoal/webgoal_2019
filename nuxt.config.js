const en = require('./locales/en')
const pt = require('./locales/pt')

export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://use.typekit.net/ohv6flx.css' }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['~/assets/css/tailwind.css', 'swiper/dist/css/swiper.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '@/plugins/vue-awesome-swiper.js', ssr: false },
    '~plugins/vue-scrollto.js',
    { src: '@plugins/gtm.js', ssr: false },
    { src: '@plugins/facebook.js', ssr: false },
    { src: '@plugins/toggle.js', ssr: false }
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // '@nuxtjs/eslint-module'
    [
      'nuxt-i18n',
      {
        locales: [{ code: 'en', iso: 'en-US' }, { code: 'pt', iso: 'pt-BR' }],
        defaultLocale: 'pt',
        detectBrowserLanguage: {
          useCookie: true
        },
        vueI18n: {
          fallbackLocale: 'pt',
          messages: {
            en,
            pt
          }
        }
      }
    ]
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    postcss: {
      plugins: {
        tailwindcss: './tailwind.config.js'
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend (config, ctx) {}
  }
}
