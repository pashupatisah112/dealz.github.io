let API_URL = "https://dealzlegal.herokuapp.com/api"

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Dealz',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/v-toast.js", mode: "client" },
    { src: "~/plugins/ripple-directive.js", mode: "client" }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/style-resources',
    "@nuxtjs/axios",
    "@nuxtjs/auth-next",
  ],
  bootstrapVue: {
    // Install the `IconsPlugin` plugin (in addition to `BootstrapVue` plugin)
    icons: true
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ["vee-validate/dist/rules"]
  },

  styleResources: {
    scss: ['./assets/styles/components/main.scss']
  },

  axios: {
    baseURL: API_URL,
  },

  auth: {
    strategies: {
      local: {
        token: {
          property: "token",
          required: true,
          type: "Bearer",
          maxAge: 1800 * 2
        },
        user: {
          property: false,
          autoFetch: true
        },
        endpoints: {
          login: { url: "/user/login", method: "post" },
          // logout: { url: "/accounts/logout", method: "get" },
          user: { url: "/user/me", method: "get" }
        }
      }
    },
    redirect: {
      home: "/dashboard"
    }
  },

  env: {
    baseUrl: API_URL,
  }

}
