// https://nuxt.com/docs/api/configuration/nuxt-config
const siteUrl = (process.env.NUXT_PUBLIC_SITE_URL || 'https://twfagency.com').replace(/\/+$/, '')
const defaultDescription =
  'TWF is a high-end digital agency merging technical mastery with creativity and performance.'
const defaultImage = `${siteUrl}/assets/hero-gradient.webp`
const defaultLogo = `${siteUrl}/assets/about-figma/twf-logo.svg`
const securityHeaders = {
  'x-content-type-options': 'nosniff',
  'x-frame-options': 'SAMEORIGIN',
  'referrer-policy': 'strict-origin-when-cross-origin',
  'permissions-policy': 'camera=(), microphone=(), geolocation=()',
  'content-security-policy': "frame-ancestors 'self'; upgrade-insecure-requests"
}
const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'TWF Agency',
  alternateName: 'The Web Flight',
  url: siteUrl,
  logo: defaultLogo,
  image: defaultImage,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Capital Work Place Building, Fl. 8, 1 Soi Chamchan, Klongton-neur, Wattana',
    addressLocality: 'Bangkok',
    postalCode: '10110',
    addressCountry: 'TH'
  }
}
const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'TWF Agency',
  url: siteUrl,
  publisher: {
    '@type': 'Organization',
    name: 'TWF Agency',
    logo: defaultLogo
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: `${siteUrl}/blog?q={search_term_string}`,
    'query-input': 'required name=search_term_string'
  }
}

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: process.env.NODE_ENV !== 'production' },
  css: ['~/assets/css/main.css'],
  nitro: {
    compressPublicAssets: {
      gzip: true,
      brotli: true
    }
  },
  routeRules: {
    '/**': {
      headers: securityHeaders
    },
    '/assets/**': {
      headers: {
        ...securityHeaders,
        'cache-control': 'public, max-age=31536000, immutable'
      }
    },
    '/fonts/**': {
      headers: {
        ...securityHeaders,
        'cache-control': 'public, max-age=31536000, immutable'
      }
    },
    '/_nuxt/**': {
      headers: {
        ...securityHeaders,
        'cache-control': 'public, max-age=31536000, immutable'
      }
    }
  },
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
      link: [
        {
          rel: 'icon',
          href: '/favicon.ico',
          sizes: 'any'
        },
        {
          rel: 'preload',
          href: '/fonts/chakra-petch-regular.ttf',
          as: 'font',
          type: 'font/ttf',
          crossorigin: 'anonymous'
        }
      ],
      meta: [
        { name: 'description', content: defaultDescription },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:site_name', content: 'TWF Agency' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: defaultImage },
        { property: 'og:image:alt', content: 'TWF Agency' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:image', content: defaultImage }
      ],
      script: [
        {
          key: 'organization-jsonld',
          type: 'application/ld+json',
          defer: true,
          tagPosition: 'bodyClose',
          innerHTML: JSON.stringify(organizationJsonLd)
        },
        {
          key: 'website-jsonld',
          type: 'application/ld+json',
          defer: true,
          tagPosition: 'bodyClose',
          innerHTML: JSON.stringify(websiteJsonLd)
        }
      ]
    }
  }
})
