// https://nuxt.com/docs/api/configuration/nuxt-config
const siteUrl = (process.env.NUXT_PUBLIC_SITE_URL || 'https://twfagency.com').replace(/\/+$/, '')
const defaultDescription =
  'TWF is a high-end digital agency merging technical mastery with creativity and performance.'
const defaultImage = `${siteUrl}/assets/hero-gradient.webp`

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    public: {
      siteUrl,
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
      viewport: 'width=device-width, initial-scale=1',
      titleTemplate: (titleChunk) => titleChunk || 'TWF Agency',
      meta: [
        { name: 'description', content: defaultDescription },
        { property: 'og:site_name', content: 'TWF Agency' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: defaultImage },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:image', content: defaultImage }
      ]
    }
  }
})
