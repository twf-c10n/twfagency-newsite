// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      viewport: 'width=device-width, initial-scale=1'
    }
  },

  /**
   * Runtime config — accessible via useRuntimeConfig()
   */
  runtimeConfig: {
    public: {
      apiBaseUrl: '/api',
    },
  },

  /**
   * Route rules — proxy /api requests to the Laravel backend
   * to avoid CORS issues during development.
   */
  routeRules: {
    '/api/**': { proxy: 'http://localhost:8000/api/**' },
  },
})
