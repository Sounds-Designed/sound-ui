export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    '@sounds-designed/sound-ui'
  ],

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  routeRules: {
    '/docs/components/**': { redirect: { to: '/components/**', statusCode: 301 }, prerender: false }
  },

  compatibilityDate: '2026-01-23'
})
