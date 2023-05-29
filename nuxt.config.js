export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-v2-prj',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/router',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  router: {
    mode: 'history',
    extendRoutes(routes, resolve) {
      routes.push(
        { path: '/', redirect: '/coaches' },
        {
          path: '/coaches',
          component: resolve(__dirname, 'pages/coaches/CoachesList.vue')
        },
        {
          path: '/coaches/:id',
          component: resolve(__dirname, 'pages/coaches/CoachDetail.vue'),
          props: true,
          children: [
            {
              path: 'contact',
              component: resolve(__dirname, 'pages/requests/ContactCoach.vue')
            } // /coaches/c1/contact
          ]
        },
        {
          path: '/register',
          component: resolve(__dirname, 'pages/coaches/CoachRegistration.vue')
        },
        {
          path: '/requests',
          component: resolve(__dirname, 'pages/requests/RequestsReceived.vue')
        },
        {
          path: '/:notFound(.*)',
          component: resolve(__dirname, 'pages/NotFound.vue')
        }
      )
    }
  },
}
