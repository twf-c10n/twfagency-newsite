// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    public: {
      apiBaseUrl:
        process.env.NUXT_PUBLIC_API_BASE_URL ||
        process.env.NUXT_PUBLIC_API_URL ||
        process.env.VITE_API_BASE_URL ||
        process.env.API_URL ||
        'https://admin-stg.twfagency.com/api'
    }
  },
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      viewport: 'width=device-width, initial-scale=1'
    }
  }
})
