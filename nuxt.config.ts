export default {
  mode: 'spa',
  debug: true,

  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/container_plugin.ts'
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxt/typescript-build',
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],

  extends: [
    '@nuxtjs/eslint-config-typescript'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://buefy.github.io/#/documentation
    'nuxt-buefy',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxtjs/proxy',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    debug: true,
    proxy: true
  },
  /*
   ** Build configuration
   */
  proxy: {
    '/api': {
      target: 'http://localhost:9000',
      pathRewrite: {
        '^/api': '/api'
      },
      logLevel: 'debug'
    }
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: '/api/v1/login', method: 'post', propertyName: 'token' },
          logout: { url: '/api/v1/logout', method: 'post' },
          user: { url: '/api/v1/user', method: 'get', propertyName: 'data' }
        },
        tokenRequired: true,
        tokenType: '',
        globalToken: true,
        tokenName: 'X-Auth-Token'
      }
    },
    redirect: {
      login: '/login',
      logout: '/login',
      callback: '/login',
      home: '/'
    }
  },

  router: {
    middleware: ['auth']
  }

}