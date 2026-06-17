const fallbackSiteUrl = 'https://twfagency.com'
const defaultSeoImage = '/assets/hero-gradient.webp'

const normalizeSiteUrl = (siteUrl?: string) => {
  return (siteUrl || fallbackSiteUrl).replace(/\/+$/, '')
}

export const getAbsoluteUrl = (path = '/', siteUrl?: string) => {
  if (/^https?:\/\//i.test(path)) {
    return path
  }

  const normalizedPath = path.startsWith('/') ? path : `/${path}`

  return `${normalizeSiteUrl(siteUrl)}${normalizedPath}`
}

export const useCanonicalSeo = () => {
  const route = useRoute()
  const config = useRuntimeConfig()

  useHead(() => {
    const canonicalUrl = getAbsoluteUrl(route.path, config.public.siteUrl)

    return {
      link: [
        {
          key: 'canonical',
          rel: 'canonical',
          href: canonicalUrl
        }
      ],
      meta: [
        {
          key: 'og:url',
          property: 'og:url',
          content: canonicalUrl
        }
      ]
    }
  })
}

export const usePageSeo = ({
  title,
  description,
  path,
  image = defaultSeoImage
}: {
  title: string
  description: string
  path?: string
  image?: string
}) => {
  const route = useRoute()
  const config = useRuntimeConfig()

  useHead(() => {
    const siteUrl = config.public.siteUrl
    const canonicalUrl = getAbsoluteUrl(path ?? route.path, siteUrl)
    const imageUrl = getAbsoluteUrl(image, siteUrl)

    return {
      title,
      link: [
        {
          key: 'canonical',
          rel: 'canonical',
          href: canonicalUrl
        }
      ],
      meta: [
        {
          key: 'description',
          name: 'description',
          content: description
        },
        {
          key: 'og:type',
          property: 'og:type',
          content: 'website'
        },
        {
          key: 'og:title',
          property: 'og:title',
          content: title
        },
        {
          key: 'og:description',
          property: 'og:description',
          content: description
        },
        {
          key: 'og:url',
          property: 'og:url',
          content: canonicalUrl
        },
        {
          key: 'og:image',
          property: 'og:image',
          content: imageUrl
        },
        {
          key: 'twitter:title',
          name: 'twitter:title',
          content: title
        },
        {
          key: 'twitter:description',
          name: 'twitter:description',
          content: description
        },
        {
          key: 'twitter:image',
          name: 'twitter:image',
          content: imageUrl
        }
      ]
    }
  })
}
