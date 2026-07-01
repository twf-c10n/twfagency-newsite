<script setup lang="ts">
import {
  getHomepage,
  getMediaUrl,
  pickLocalizedText,
  type HomepagePage
} from '~/utils/api'

usePageSeo({
  title: 'TWF Agency | Imagine Beyond The Limit',
  description:
    'TWF is a high-end digital agency merging technical mastery with creativity and performance.',
  path: '/',
  image: '/assets/hero-gradient.webp'
})

useHead({
  link: [
    {
      rel: 'preload',
      href: '/assets/hero-gradient.webp',
      as: 'image',
      type: 'image/webp',
      fetchpriority: 'high'
    }
  ]
})

const clientLogos = [
  { label: 'TrueCoffee', src: '/assets/client-logos/client-logo-12.webp' },
  { label: 'UNICEF', src: '/assets/client-logos/client-logo-10.webp' },
  { label: 'SCG', src: '/assets/client-logos/client-logo-07.webp' },
  { label: 'SC Asset', src: '/assets/client-logos/client-logo-16.webp' },
  { label: 'Pruksa', src: '/assets/client-logos/client-logo-15.webp' },
  { label: 'Kubota', src: '/assets/client-logos/client-logo-18.webp' },
  { label: 'HomePro', src: '/assets/client-logos/client-logo-01.webp' },
  { label: 'GS Battery', src: '/assets/client-logos/client-logo-03.webp' },
  { label: 'Certainty', src: '/assets/client-logos/client-logo-02.webp' },
  { label: 'Bangkok Insurance', src: '/assets/client-logos/client-logo-17.webp' },
  { label: 'Double Goose', src: '/assets/client-logos/client-logo-14.webp' },
  { label: 'BabyLove', src: '/assets/client-logos/client-logo-19.webp' },
  { label: 'ACUVUE', src: '/assets/client-logos/client-logo-20.webp' },
  { label: 'Acer', src: '/assets/client-logos/client-logo-11.webp' },
  { label: 'ViMUT Hospital', src: '/assets/client-logos/client-logo-09.webp' },
  { label: "Dentiste' Plus White", src: '/assets/client-logos/client-logo-08.webp' },
  { label: 'ROJUKISS', src: '/assets/client-logos/client-logo-05.webp' },
  { label: 'Beger', src: '/assets/client-logos/client-logo-06.webp' },
  { label: 'Syngenta', src: '/assets/client-logos/client-logo-04.webp' },
  { label: 'Taro', src: '/assets/client-logos/client-logo-13.webp' }
]

const aboutAssetPath = '/assets/about-figma'

const footerSocials = [
  { label: 'Facebook', src: `${aboutAssetPath}/facebook.svg`, href: '#' },
  { label: 'X', src: `${aboutAssetPath}/x.svg`, href: '#' },
  { label: 'Instagram', src: `${aboutAssetPath}/instagram.svg`, href: '#' },
  { label: 'LinkedIn', src: `${aboutAssetPath}/linkedin.svg`, href: '#' }
]

const pillars = [
  {
    number: '01',
    title: 'Insightful Data & Measurable Result',
    labelLines: ['Insightful Data &', 'Measurable Result'],
    labelSubtitle: '(วัดผลได้)'
  },
  {
    number: '02',
    title: 'Media Efficiency',
    labelLines: ['Media Efficiency'],
    labelSubtitle: '(เข้าถึง)'
  },
  {
    number: '03',
    title: 'Creativity Driving Actions',
    labelLines: ['Creativity', 'Driving Actions'],
    labelSubtitle: '(มี ACTION)'
  }
]

const mediaServices = [
  {
    id: 'media-strategy',
    title: 'Media Strategy',
    description:
      'Achieve exponential growth with our full-funnel digital strategy services. From awareness to conversion, our results-focused approach delivers success at every stage of the customer journey.',
    capabilities: [
      'Communications Planning and Implementation',
      'Digital Brand Building',
      'Digital Marketing Consultation',
      'Digital Media Planning and Buying',
      'CX Research and Strategy'
    ]
  },
  {
    id: 'performance-strategy',
    title: 'Performance Strategy',
    description:
      'Maximize business growth with performance marketing built around clear objectives, measurable conversions, and continuous optimization.',
    capabilities: [
      'Performance Marketing Strategy',
      'Conversion Optimization',
      'Measurement and Attribution'
    ]
  },
  {
    id: 'creative-solutions',
    title: 'Creative Solutions',
    description:
      'Turn brand direction into creative systems designed to stop attention, express value, and generate meaningful action across digital channels.',
    capabilities: [
      'Campaign Creative Direction',
      'Content and Asset Production',
      'Creative Performance Testing'
    ]
  },
  {
    id: 'influencer-affiliate',
    title: 'Influencer & KOL Affiliate Marketing',
    description:
      'Connect brands with trusted voices through creator and affiliate programs that combine authentic storytelling with accountable results.',
    capabilities: [
      'Creator Matching and Planning',
      'Affiliate Program Management',
      'Campaign Reporting'
    ]
  },
  {
    id: 'crm-solutions',
    title: 'CRM Solutions',
    description:
      'Build stronger customer relationships with lifecycle communications and audience journeys that support retention and repeat growth.',
    capabilities: [
      'Customer Journey Design',
      'Audience Segmentation',
      'Retention Campaign Optimization'
    ]
  },
  {
    id: 'live-service',
    title: 'LIVE Service for Business',
    description:
      'Create engaging live commerce and branded live experiences with strategy, operation, and content designed for real-time conversion.',
    capabilities: [
      'Live Commerce Planning',
      'Production and Operation',
      'Engagement and Sales Reporting'
    ]
  },
  {
    id: 'digital-marketing-agency',
    title: 'Digital Marketing Agency',
    description:
      'Bring strategy, media, creative, and analytics together through one integrated team focused on sustainable digital growth.',
    capabilities: [
      'Integrated Campaign Management',
      'Channel Optimization',
      'Growth Consultation'
    ]
  },
  {
    id: 'ai-video-analytics',
    title: 'AI Video Analytics for Retail',
    description:
      'Translate retail behavior into actionable insight with AI-powered video analytics that help improve operations and customer experience.',
    capabilities: [
      'Customer Traffic Insight',
      'In-store Behavior Analysis',
      'Retail Performance Dashboard'
    ]
  }
]

type ArticleCard = {
  id: string
  title: string
  description: string
  image: string
  href: string
  authorName: string
}

type WordPressPost = {
  id?: number
  slug?: string
  date?: string
  link?: string
  title?: {
    rendered?: string
  }
  author_name?: string
  yoast_head_json?: {
    og_title?: string
    og_description?: string
    og_image?: Array<{
      url?: string
    }>
  }
}

const wordpressOrigin = 'https://twfdigital.com'
const fallbackArticleImage = '/assets/article-cover.webp'
const fallbackTrustDescription =
  'We push boundaries and strive for excellence by fostering a highly collaborative and constructive environment. Our team is comprised of talented individuals who work hard to elevate your brand.'
const runtimeConfig = useRuntimeConfig()
const apiBaseUrl = String(runtimeConfig.public.apiBaseUrl || '')

const fallbackArticles: ArticleCard[] = [
  {
    id: 'fallback-digital-sales',
    title: 'เทคนิคเพิ่มยอดขายผ่านดิจิทัล',
    description: '',
    image: fallbackArticleImage,
    href: '#blog',
    authorName: 'LINE Commerce'
  },
  {
    id: 'fallback-brand-tools',
    title: 'เครื่องมือใหม่ที่แบรนด์ยุคใหม่ต้องใช้',
    description: '',
    image: fallbackArticleImage,
    href: '#blog',
    authorName: 'LINE Commerce'
  },
  {
    id: 'fallback-fast-campaign',
    title: 'เคล็ดลับสร้างแคมเปญให้โตไว',
    description: '',
    image: fallbackArticleImage,
    href: '#blog',
    authorName: 'LINE Commerce'
  }
]

const articles = ref<ArticleCard[]>(fallbackArticles)
const homepage = ref<HomepagePage | null>(null)
const hasFetchedHomepage = ref(false)
const hasFetchedArticles = ref(false)
const trustBottomSlideIndex = ref(0)
const isTrustSliding = ref(false)

const fallbackTrustPhotos = [
  {
    id: 'fallback-award',
    src: '/assets/award.webp',
    alt: 'TWF awards'
  },
  {
    id: 'fallback-team',
    src: '/assets/team.webp',
    alt: 'TWF team'
  }
]

const trustPhotos = computed(() => {
  const photos = (homepage.value?.trust_lies?.images ?? [])
    .map((image, index) => ({
      id: `${image.name || 'trust-lies'}-${index}`,
      src: getMediaUrl(image, '', apiBaseUrl),
      alt: image.name || `TWF team slide ${index + 1}`
    }))
    .filter((photo) => photo.src)

  return photos.length ? photos : fallbackTrustPhotos
})

const trustDescription = computed(() => {
  return pickLocalizedText(
    homepage.value?.trust_lies,
    'description',
    fallbackTrustDescription
  )
})

const getTrustPhotoAt = (index: number) => {
  const photos = trustPhotos.value

  return photos[index % photos.length] || fallbackTrustPhotos[0]
}

const trustBottomPhoto = computed(() => getTrustPhotoAt(trustBottomSlideIndex.value))
const trustTopPhoto = computed(() => getTrustPhotoAt(trustBottomSlideIndex.value + 1))
const trustIncomingPhoto = computed(() => getTrustPhotoAt(trustBottomSlideIndex.value + 2))
const hasTrustPhotoLoop = computed(() => trustPhotos.value.length > 1)

watch(trustPhotos, (photos) => {
  trustBottomSlideIndex.value = 0
  isTrustSliding.value = false
})

const decodeHtml = (value: string) => {
  if (!import.meta.client || !value) {
    return value
  }

  const textarea = document.createElement('textarea')
  textarea.innerHTML = value

  return textarea.value
}

const stripHtml = (value: string) => {
  return decodeHtml(value.replace(/<[^>]*>/g, '').trim())
}

const mapWordPressPost = (post: WordPressPost): ArticleCard => {
  const title = stripHtml(
    post.yoast_head_json?.og_title ||
      post.title?.rendered ||
      'TWF Agency Article'
  )
  const description = stripHtml(post.yoast_head_json?.og_description || '')
  const image = post.yoast_head_json?.og_image?.[0]?.url || fallbackArticleImage
  const href = post.link || (post.slug ? `${wordpressOrigin}/${post.slug}/` : '#blog')

  return {
    id: String(post.id ?? post.slug ?? title),
    title,
    description,
    image,
    href,
    authorName: post.author_name || 'TWF Agency'
  }
}

const revealElement = (element: HTMLElement) => {
  if (element.classList.contains('is-visible')) {
    return
  }

  if (!revealObserver || !motionReady.value) {
    element.classList.add('is-visible')
    return
  }

  revealObserver.observe(element)
}

const revealArticleCards = async () => {
  await nextTick()

  pageRoot.value
    ?.querySelectorAll<HTMLElement>('.article-grid [data-reveal]')
    .forEach(revealElement)
}

const fetchLatestArticles = async () => {
  if (hasFetchedArticles.value) {
    return
  }

  hasFetchedArticles.value = true

  const fields = [
    'id',
    'slug',
    'date',
    'link',
    'title.rendered',
    'author_name',
    'yoast_head_json.og_title',
    'yoast_head_json.og_description',
    'yoast_head_json.og_image'
  ].join(',')
  const params = new URLSearchParams({
    per_page: '3',
    orderby: 'date',
    order: 'desc',
    _fields: fields
  })
  const requestUrl = `${wordpressOrigin}/wp-json/wp/v2/posts?${params.toString()}`

  try {
    const response = await fetch(requestUrl)

    if (!response.ok) {
      throw new Error(`WordPress responded with ${response.status}`)
    }

    const posts = (await response.json()) as WordPressPost[]
    const mappedPosts = posts.map(mapWordPressPost).filter((post) => post.title).slice(0, 3)

    if (mappedPosts.length) {
      articles.value = mappedPosts
      await revealArticleCards()
    }
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    articles.value = fallbackArticles
    await revealArticleCards()
  }
}

const fetchHomepageContent = async () => {
  if (hasFetchedHomepage.value) {
    return
  }

  hasFetchedHomepage.value = true

  try {
    homepage.value = await getHomepage()
  } catch (error) {
    console.error('Error fetching homepage content:', error)
  }
}

const motionReady = ref(false)
const activeService = ref(mediaServices[0].id)
const showreelActive = ref(false)
const pageRoot = ref<HTMLElement | null>(null)
const introStory = ref<HTMLElement | null>(null)
const heroMedia = ref<HTMLElement | null>(null)
const heroBannerVideo = ref<HTMLVideoElement | null>(null)
const heroFilterVideo = ref<HTMLVideoElement | null>(null)
const showreelSection = ref<HTMLElement | null>(null)
const showreelStage = ref<HTMLElement | null>(null)
const showreelVideo = ref<HTMLVideoElement | null>(null)
const teamSection = ref<HTMLElement | null>(null)
const teamBackgroundVideo = ref<HTMLVideoElement | null>(null)
const articleSection = ref<HTMLElement | null>(null)
const serviceNavigation = ref<HTMLUListElement | null>(null)

let revealObserver: IntersectionObserver | undefined
let strategyObserver: IntersectionObserver | undefined
let heroVideoObserver: IntersectionObserver | undefined
let teamSectionObserver: IntersectionObserver | undefined
let articleSectionObserver: IntersectionObserver | undefined
let showreelStageObserver: IntersectionObserver | undefined
let showreelVideoObserver: IntersectionObserver | undefined
let pointerFrame = 0
let scrollFrame = 0
let scrollIdleTimer: number | undefined
let heroFilterLoadTimer: number | undefined
let trustSlideTimer: number | undefined
let trustSlideResetTimer: number | undefined
let articleFetchTimer: number | undefined
let heroAmbientMediaLoaded = false
let showreelTracking = false
let showreelStyleKey = ''

const canUseMotionMedia = () => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return false
  }

  const connection = (navigator as Navigator & {
    connection?: {
      saveData?: boolean
      effectiveType?: string
    }
  }).connection

  if (connection?.saveData || ['slow-2g', '2g'].includes(connection?.effectiveType || '')) {
    return false
  }

  return true
}

const canLoadAmbientMedia = () => {
  if (!canUseMotionMedia()) {
    return false
  }

  return window.matchMedia('(min-width: 900px)').matches
}

const canLoadHeroMedia = () => canUseMotionMedia()

const loadVideoSource = (video?: HTMLVideoElement | null) => {
  const source = video?.querySelector<HTMLSourceElement>('source[data-src]')

  if (!video || !source || source.src) {
    return false
  }

  source.src = source.dataset.src ?? ''
  video.load()

  return true
}

const playVideo = (video?: HTMLVideoElement | null) => {
  video?.play().catch(() => {
    // Posters keep each section useful when autoplay is blocked.
  })
}

const advanceTrustPhoto = () => {
  if (trustPhotos.value.length < 2 || isTrustSliding.value) {
    return
  }

  isTrustSliding.value = true
  window.clearTimeout(trustSlideResetTimer)
  trustSlideResetTimer = window.setTimeout(finishTrustPhotoSlide, 950)
}

const finishTrustPhotoSlide = () => {
  if (!isTrustSliding.value) {
    return
  }

  window.clearTimeout(trustSlideResetTimer)
  trustBottomSlideIndex.value = (trustBottomSlideIndex.value + 1) % trustPhotos.value.length
  isTrustSliding.value = false
}

const startTrustPhotoLoop = () => {
  window.clearInterval(trustSlideTimer)

  if (!hasTrustPhotoLoop.value) {
    return
  }

  trustSlideTimer = window.setInterval(advanceTrustPhoto, 3400)
}

const loadShowreelVideo = () => {
  const video = showreelVideo.value

  if (!video || !canLoadAmbientMedia()) {
    return
  }

  loadVideoSource(video)
  playVideo(video)
}

const loadHeroBannerVideo = () => {
  const video = heroBannerVideo.value

  if (!video || !canLoadHeroMedia()) {
    return
  }

  loadVideoSource(video)
  playVideo(video)
}

const loadHeroAmbientMedia = () => {
  if (heroAmbientMediaLoaded) {
    return
  }

  heroAmbientMediaLoaded = true
  loadHeroBannerVideo()
}

const loadHeroFilterVideo = () => {
  const video = heroFilterVideo.value

  if (!video || !canLoadHeroMedia()) {
    return
  }

  loadVideoSource(video)
  playVideo(video)
}

const loadTeamBackgroundVideo = () => {
  const video = teamBackgroundVideo.value

  if (!video || !canLoadAmbientMedia()) {
    return
  }

  loadVideoSource(video)
  playVideo(video)
}

const scheduleHeroFilterLoad = () => {
  if (heroFilterLoadTimer || !canLoadHeroMedia()) {
    return
  }

  heroFilterLoadTimer = window.setTimeout(() => {
    heroFilterLoadTimer = undefined
    loadHeroFilterVideo()
  }, 4500)
}

const updateShowreelProgress = () => {
  const section = showreelSection.value
  if (!section) {
    return
  }

  const rect = section.getBoundingClientRect()
  const viewportWidth = window.innerWidth
  const viewportHeight = window.innerHeight
  const travelDistance = Math.max(viewportHeight, rect.height - viewportHeight)
  const rawProgress = travelDistance
    ? Math.min(1, Math.max(0, -rect.top / travelDistance))
    : 0
  const showreelProgress = Math.round(rawProgress * 1000) / 1000
  const styleKey = `${viewportWidth}:${viewportHeight}:${showreelProgress}`

  if (styleKey === showreelStyleKey) {
    return
  }

  showreelStyleKey = styleKey
  const startWidth = Math.min(400, viewportWidth * 0.86)
  const startHeight = startWidth * (9 / 16)
  const showreelWidth = startWidth + ((viewportWidth - startWidth) * showreelProgress)
  const showreelHeight = startHeight + ((viewportHeight - startHeight) * showreelProgress)

  showreelActive.value = showreelProgress > 0.02
  section.style.setProperty('--showreel-progress', String(showreelProgress))
  section.style.setProperty('--showreel-width', `${showreelWidth}px`)
  section.style.setProperty('--showreel-height', `${showreelHeight}px`)
}

const getIntroStoryProgress = () => {
  const story = introStory.value

  if (!story) {
    return 0
  }

  const rect = story.getBoundingClientRect()
  const bound = story.querySelector<HTMLElement>('.home-intro-bound')
  const boundRect = bound?.getBoundingClientRect()
  const viewportHeight = window.innerHeight
  const timelineHeight = boundRect?.height || rect.height
  const travelDistance = Math.max(1, timelineHeight - viewportHeight)

  return Math.min(1, Math.max(0, -rect.top / travelDistance))
}

const applyIntroStoryProgress = (progress: number) => {
  const story = introStory.value

  if (!story) {
    return
  }

  story.style.setProperty('--intro-progress', String(progress))
  story.style.setProperty('--hero-progress', String(progress))
}

const updateIntroStoryProgress = () => {
  // Lenis smooths the scroll position itself, so this value can stay perfectly reversible.
  applyIntroStoryProgress(getIntroStoryProgress())
}

const updateScrollEffects = () => {
  if (!pageRoot.value) {
    return
  }

  const scrollY = window.scrollY
  const viewportHeight = window.innerHeight
  const maximumScroll = document.documentElement.scrollHeight - viewportHeight
  const progress = maximumScroll
    ? Math.min(1, Math.max(0, scrollY / maximumScroll))
    : 0
  pageRoot.value.style.setProperty('--scroll-progress', String(progress))

  updateIntroStoryProgress()

  if (showreelTracking) {
    updateShowreelProgress()
  }
}

const requestScrollEffects = () => {
  if (pageRoot.value && !pageRoot.value.classList.contains('is-scrolling')) {
    pageRoot.value.classList.add('is-scrolling')
  }

  window.clearTimeout(scrollIdleTimer)
  scrollIdleTimer = window.setTimeout(() => {
    pageRoot.value?.classList.remove('is-scrolling')
  }, 140)

  if (scrollFrame) {
    return
  }

  scrollFrame = window.requestAnimationFrame(() => {
    scrollFrame = 0
    updateScrollEffects()
  })
}

const updatePointerGlow = (event: PointerEvent) => {
  if (!pageRoot.value || pointerFrame) {
    return
  }

  pointerFrame = window.requestAnimationFrame(() => {
    if (pageRoot.value) {
      pageRoot.value.style.setProperty('--pointer-x', `${(event.clientX / window.innerWidth) * 100}%`)
      pageRoot.value.style.setProperty('--pointer-y', `${(event.clientY / window.innerHeight) * 100}%`)
    }
    pointerFrame = 0
  })
}

const selectService = (id: string, keepVisible = false) => {
  activeService.value = id

  if (!keepVisible || window.innerWidth > 760) {
    return
  }

  nextTick(() => {
    const navigation = serviceNavigation.value
    const activeLink = navigation?.querySelector<HTMLElement>('a.active')
    if (!navigation || !activeLink) {
      return
    }

    const targetLeft = activeLink.offsetLeft - ((navigation.clientWidth - activeLink.offsetWidth) / 2)
    const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
    navigation.scrollTo({ left: targetLeft, behavior })
  })
}

onMounted(() => {
  const page = pageRoot.value
  if (!page) {
    return
  }

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (!reduceMotion) {
    startTrustPhotoLoop()
  }

  if (articleSection.value) {
    articleSectionObserver = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) {
          return
        }

        fetchLatestArticles()
        articleSectionObserver?.disconnect()
      },
      { rootMargin: '600px 0px', threshold: 0 }
    )
    articleSectionObserver.observe(articleSection.value)
  } else {
    articleFetchTimer = window.setTimeout(fetchLatestArticles, 6500)
  }

  updateScrollEffects()
  window.addEventListener('scroll', requestScrollEffects, { passive: true })
  window.addEventListener('resize', requestScrollEffects, { passive: true })

  const strategyPanels = page.querySelectorAll<HTMLElement>('.strategy-panel')
  strategyObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          selectService(entry.target.id.replace('strategy-', ''), true)
        }
      })
    },
    { rootMargin: '-44% 0px -44% 0px', threshold: 0 }
  )
  strategyPanels.forEach((panel) => strategyObserver?.observe(panel))

  if (!reduceMotion && canLoadAmbientMedia() && showreelVideo.value) {
    showreelVideoObserver = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          loadShowreelVideo()
          showreelVideoObserver?.disconnect()
        }
      },
      { rootMargin: '200px 0px', threshold: 0 }
    )
    showreelVideoObserver.observe(showreelVideo.value)
  }

  if (!reduceMotion && showreelStage.value) {
    showreelStageObserver = new IntersectionObserver(
      (entries) => {
        showreelTracking = entries.some((entry) => entry.isIntersecting)
        updateShowreelProgress()
      },
      { rootMargin: '0px 0px 0px 0px', threshold: 0 }
    )
    showreelStageObserver.observe(showreelStage.value)
  }

  if (!reduceMotion && canLoadHeroMedia() && heroMedia.value) {
    const heroVideos = Array.from(heroMedia.value.querySelectorAll<HTMLVideoElement>('video'))

    heroVideoObserver = new IntersectionObserver(
      (entries) => {
        const isVisible = entries.some((entry) => entry.isIntersecting)

        heroVideos.forEach((video) => {
          if (isVisible) {
            loadHeroAmbientMedia()
            playVideo(video)
          } else {
            video.pause()
          }
        })
      },
      { rootMargin: '120px 0px 120px 0px', threshold: 0.04 }
    )
    heroVideoObserver.observe(heroMedia.value)

    window.addEventListener('pointerdown', loadHeroAmbientMedia, { once: true, passive: true })
    window.addEventListener('keydown', loadHeroAmbientMedia, { once: true })
    window.addEventListener('scroll', loadHeroAmbientMedia, { once: true, passive: true })
  }

  if (teamSection.value) {
    teamSectionObserver = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) {
          return
        }

        fetchHomepageContent()
        loadTeamBackgroundVideo()
        teamSectionObserver?.disconnect()
      },
      { rootMargin: '500px 0px', threshold: 0 }
    )
    teamSectionObserver.observe(teamSection.value)
  }

  if (reduceMotion) {
    page.querySelectorAll('video').forEach((video) => video.pause())
    return
  }

  const revealElements = page.querySelectorAll<HTMLElement>('[data-reveal]')
  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          revealObserver?.unobserve(entry.target)
        }
      })
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.12 }
  )
  motionReady.value = true
  revealElements.forEach(revealElement)

  if (window.matchMedia('(pointer: fine)').matches) {
    page.addEventListener('pointermove', updatePointerGlow, { passive: true })
  }
})

onBeforeUnmount(() => {
  window.clearTimeout(scrollIdleTimer)
  window.clearTimeout(heroFilterLoadTimer)
  window.clearTimeout(trustSlideResetTimer)
  window.clearTimeout(articleFetchTimer)
  window.clearInterval(trustSlideTimer)
  window.cancelAnimationFrame(pointerFrame)
  window.cancelAnimationFrame(scrollFrame)
  window.removeEventListener('scroll', requestScrollEffects)
  window.removeEventListener('scroll', loadHeroAmbientMedia)
  window.removeEventListener('pointerdown', loadHeroAmbientMedia)
  window.removeEventListener('keydown', loadHeroAmbientMedia)
  window.removeEventListener('resize', requestScrollEffects)
  pageRoot.value?.removeEventListener('pointermove', updatePointerGlow)
  revealObserver?.disconnect()
  strategyObserver?.disconnect()
  heroVideoObserver?.disconnect()
  teamSectionObserver?.disconnect()
  articleSectionObserver?.disconnect()
  showreelStageObserver?.disconnect()
  showreelVideoObserver?.disconnect()
})
</script>

<template>
  <div ref="pageRoot" :class="['page', { 'motion-ready': motionReady }]">
    <SiteHeader active-path="/" />

    <main>
      <section ref="introStory" class="home-intro-story" aria-label="TWF introduction">
        <div class="home-intro-bound">
          <div class="home-intro-stage">
            <section id="home" class="hero">
              <div ref="heroMedia" class="hero-media" aria-hidden="true">
                <div class="media-skeleton hero-media-skeleton" />
                <video
                  ref="heroBannerVideo"
                  class="hero-banner"
                  autoplay
                  muted
                  loop
                  playsinline
                  preload="none"
                  poster="/assets/hero-gradient.webp"
                  @loadeddata="scheduleHeroFilterLoad"
                >
                  <source data-src="/assets/banner.webm" type="video/webm">
                </video>
                <video
                  ref="heroFilterVideo"
                  class="hero-filter"
                  autoplay
                  muted
                  loop
                  playsinline
                  preload="none"
                  poster="/assets/hero-gradient.webp"
                >
                  <source data-src="/assets/bg_filter.webm" type="video/webm">
                </video>
              </div>
              <div class="shell hero-copy">
                <p class="pill" data-reveal style="--delay: .12s"><span /> Performance Creative Agency</p>
                <h1 data-reveal style="--delay: .22s">Imagine Beyond<br>The Limit</h1>
                <p class="hero-description" data-reveal style="--delay: .34s">
                  We empower digital dominance through high-content design, relentless
                  performance optimization, and elite technical mastery. Future-forward
                  solutions for high-growth innovators.
                </p>
                <a class="cta-button" data-reveal style="--delay: .44s" href="/project">Let's Launch Your Project <b>+</b></a>
              </div>
            </section>
          </div>
        </div>
      </section>

      <section class="needs">
        <div class="narrow" data-reveal>
          <p class="caption needs-caption">Built for brands that need more than visibility</p>
          <h2 class="gradient-title">All your needs</h2>
          <p>
            We are a high-end digital agency merging uncompromising technical mastery
            with unbounded creativity. For 15 years, we have engineered digital
            experiences for high-growth talent firms and luxury innovators.
          </p>
        </div>
      </section>

      <section class="client-strip" aria-label="Our clients">
        <div class="logo-track" aria-hidden="true">
          <div v-for="sequence in 2" :key="sequence" class="logo-set">
            <img
              v-for="logo in clientLogos"
              :key="`${sequence}-${logo.label}`"
              class="brand-logo"
              :src="logo.src"
              :alt="logo.label"
              width="700"
              height="314"
              loading="lazy"
              decoding="async"
            >
          </div>
        </div>
      </section>

      <section id="services" class="expertise">
        <div class="shell expertise-heading" data-reveal>
          <div>
            <p class="caption">Our Expertise</p>
            <h2>Performance<br>Creative</h2>
          </div>
          <p>
            We dismantle the traditional agency model to build something faster,
            bolder, and more focused on your bottom line. No fluff, just kinetic impact.
          </p>
        </div>

        <div id="performance-creative-visual" class="performance-visual" aria-label="Triangle of Performance">
          <div class="performance-scene" data-reveal>
            <picture class="performance-bg" aria-hidden="true">
              <source srcset="/assets/performance-bg.webp" type="image/webp">
              <img src="/assets/performance-bg.webp" alt="" width="1600" height="900" loading="lazy" decoding="async">
            </picture>
            <img
              class="performance-shards"
              src="/assets/triangle-performance-glow.webp"
              alt=""
              aria-hidden="true"
              width="1600"
              height="1591"
              loading="lazy"
              decoding="async"
            >
            <div class="performance-labels" aria-hidden="true">
              <span class="performance-label performance-label-1">
                <strong>
                  <span
                    v-for="line in pillars[0].labelLines"
                    :key="`top-${line}`"
                    class="performance-label-line"
                  >
                    {{ line }}
                  </span>
                </strong>
                <span class="performance-label-subtitle">{{ pillars[0].labelSubtitle }}</span>
              </span>
              <span class="performance-label performance-label-2">
                <strong>
                  <span
                    v-for="line in pillars[1].labelLines"
                    :key="`left-${line}`"
                    class="performance-label-line"
                  >
                    {{ line }}
                  </span>
                </strong>
                <span class="performance-label-subtitle">{{ pillars[1].labelSubtitle }}</span>
              </span>
              <span class="performance-label performance-label-3">
                <strong>
                  <span
                    v-for="line in pillars[2].labelLines"
                    :key="`right-${line}`"
                    class="performance-label-line"
                  >
                    {{ line }}
                  </span>
                </strong>
                <span class="performance-label-subtitle">{{ pillars[2].labelSubtitle }}</span>
              </span>
            </div>
            <img
              class="performance-poster"
              src="/assets/triangle-of-performance-figma.webp"
              alt="Triangle of Performance: TWF Agency Performance Creative"
              width="558"
              height="469"
              loading="lazy"
              decoding="async"
            >
            <div class="poster-border" aria-hidden="true"></div>
          </div>
        </div>

        <div class="pillar-grid">
          <article
            v-for="(pillar, index) in pillars"
            :key="pillar.number"
            class="pillar"
            data-reveal
            :style="{ '--delay': `${index * 90}ms` }"
          >
            <div>
              <span>{{ pillar.number }}</span>
              <h3>{{ pillar.title }}</h3>
              <a href="#contact">Click Here <b>+</b></a>
            </div>
          </article>
        </div>
      </section>

      <section class="strategy">
        <div class="shell strategy-grid">
          <aside class="service-list" data-reveal>
            <p class="service-caption">Our Services</p>
            <ul ref="serviceNavigation" aria-label="Strategy services">
              <li v-for="(service, index) in mediaServices" :key="service.id">
                <a
                  :class="{ active: activeService === service.id }"
                  :href="`#strategy-${service.id}`"
                  :aria-current="activeService === service.id ? 'true' : undefined"
                  @click="selectService(service.id, true)"
                >
                  <span>{{ String(index + 1).padStart(2, '0') }}</span>
                  {{ service.title }}
                </a>
              </li>
            </ul>
          </aside>
          <div class="strategy-content">
            <div class="strategy-copy">
              <article
                v-for="(service, index) in mediaServices"
                :id="`strategy-${service.id}`"
                :key="service.id"
                :class="['strategy-panel', { active: activeService === service.id }]"
              >
                <div class="strategy-status">
                  <p class="strategy-number">{{ String(index + 1).padStart(2, '0') }} / {{ String(mediaServices.length).padStart(2, '0') }}</p>
                  <span class="strategy-meter" aria-hidden="true">
                    <span :style="{ width: `${((index + 1) / mediaServices.length) * 100}%` }" />
                  </span>
                </div>
                <h2>{{ service.title }}</h2>
                <p>{{ service.description }}</p>
                <ul>
                  <li v-for="capability in service.capabilities" :key="capability">{{ capability }}</li>
                </ul>
              </article>
            </div>
          </div>
          <div class="orbit-art" data-reveal style="--delay: .18s" aria-hidden="true">
            <img src="/assets/orbit.webp" alt="" width="670" height="372" loading="lazy" decoding="async">
          </div>
        </div>
      </section>

      <section id="photography" ref="showreelSection" :class="['showreel', { 'is-active': showreelActive }]">
        <div ref="showreelStage" class="showreel-stage">
          <figure class="showreel-frame" data-reveal>
            <div class="media-skeleton showreel-skeleton" aria-hidden="true" />
            <img
              class="showreel-poster"
              src="/assets/showreel-reference.webp"
              alt=""
              aria-hidden="true"
              width="2880"
              height="1326"
              loading="lazy"
              decoding="async"
            >
            <video
              ref="showreelVideo"
              muted
              loop
              playsinline
              preload="none"
              poster="/assets/showreel-reference.webp"
              aria-label="Capturing Vision. Executing Perfection. Watch 2026 showreel"
            >
              <source data-src="/assets/showreel.mp4" type="video/mp4">
            </video>
          </figure>
        </div>
      </section>

      <section id="projects" class="products">
        <div class="shell products-inner">
          <p class="accent-copy" data-reveal>Venture Beyond Your Limits</p>
          <h2 data-reveal style="--delay: .08s">Our Innovative Product<br>and Services</h2>
          <div class="product-grid">
            <article data-reveal style="--delay: .14s">
              <img src="/assets/stellar-data.webp" alt="Stellar Data" width="358" height="111" loading="lazy" decoding="async">
              <p>Elevate your performance marketing campaigns</p>
            </article>
            <article data-reveal style="--delay: .22s">
              <img src="/assets/kensento.webp" alt="Kensento" width="338" height="98" loading="lazy" decoding="async">
              <p>Taking you beyond cookies consent management</p>
            </article>
          </div>
        </div>
      </section>

      <section id="about" ref="teamSection" class="team">
        <div class="team-media" aria-hidden="true">
          <video ref="teamBackgroundVideo" autoplay muted loop playsinline preload="none">
            <source data-src="/assets/background-1781079667180.webm" type="video/webm">
          </video>
        </div>
        <div class="shell team-grid">
          <div :class="['team-photos', { 'is-looping': hasTrustPhotoLoop, 'is-sliding': isTrustSliding }]">
            <div
              class="team-photo-track"
              @animationend="finishTrustPhotoSlide"
              @animationcancel="finishTrustPhotoSlide"
            >
              <figure class="team-photo-slide is-incoming" aria-hidden="true">
                <img :src="trustIncomingPhoto.src" :alt="trustIncomingPhoto.alt" width="880" height="490" loading="lazy" decoding="async">
              </figure>
              <figure class="team-photo-slide is-top">
                <img :src="trustTopPhoto.src" :alt="trustTopPhoto.alt" width="880" height="490" loading="lazy" decoding="async">
              </figure>
              <figure class="team-photo-slide is-bottom">
                <img :src="trustBottomPhoto.src" :alt="trustBottomPhoto.alt" width="880" height="490" loading="lazy" decoding="async">
              </figure>
            </div>
            <div class="team-photo-buffer" aria-hidden="true">
              <img
                v-for="photo in trustPhotos"
                :key="`buffer-${photo.id}`"
                :src="photo.src"
                :alt="photo.alt"
                width="880"
                height="490"
                loading="lazy"
                decoding="async"
              >
            </div>
          </div>
          <div class="team-copy" data-reveal style="--delay: .14s">
            <h2>A team you<br>can trust</h2>
            <p>
              {{ trustDescription }}
            </p>
          </div>
        </div>
      </section>

      <section id="blog" ref="articleSection" class="articles">
        <div class="shell">
          <p class="caption" data-reveal>Our Expertise</p>
          <h2 data-reveal style="--delay: .08s">Explore our recent articles</h2>
          <p class="article-tags" data-reveal style="--delay: .12s">Performance Marketing · Social Media · Case Study · Media Plan &amp; Buy · Digital Campaign</p>
          <div class="article-grid">
            <article
              v-for="(article, index) in articles"
              :key="article.id"
              data-reveal
              :style="{ '--delay': `${160 + index * 75}ms` }"
            >
              <a
                class="article-card-link"
                :href="article.href"
                :target="article.href.startsWith('http') ? '_blank' : undefined"
                :rel="article.href.startsWith('http') ? 'noopener noreferrer' : undefined"
                :aria-label="`ดูบทความ ${article.title}`"
              >
                <img :src="article.image" :alt="article.title" width="384" height="250" loading="lazy" decoding="async">
                <div>
                  <p>{{ article.authorName }}</p>
                  <h3>{{ article.title }}</h3>
                  <span class="article-link">ดูบทความ <b>+</b></span>
                </div>
              </a>
            </article>
          </div>
        </div>
      </section>
    </main>

    <footer id="contact" class="footer">
      <div class="footer-action" data-reveal>
        <h2 class="gradient-title">Make your goals a reality</h2>
        <a class="cta-button" href="/partnership" target="_blank" rel="noopener noreferrer">Initiate Project Launch <b>+</b></a>
      </div>
      <div class="shell footer-bottom">
        <img class="footer-logo" :src="`${aboutAssetPath}/twf-logo-footer.svg`" alt="TWF" width="123" height="47" loading="lazy" decoding="async">
        <p>The Web Flight Co., Ltd. Crystal Park Place Building, R.1<br>Praditmanutham Road, Wangthonglang, Bangkok 10310</p>
        <div class="socials">
          <a v-for="social in footerSocials" :key="social.label" :href="social.href" :aria-label="social.label">
            <img :src="social.src" alt="" width="29" height="29" loading="lazy" decoding="async">
          </a>
        </div>
      </div>
      <p class="copyright">Copyright © 2026 TWF DIGITAL MARKETING CONSULTANCY</p>
    </footer>
  </div>
</template>
