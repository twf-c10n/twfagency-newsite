<script setup lang="ts">
useHead({
  title: 'TWF Agency | Imagine Beyond The Limit',
  meta: [
    {
      name: 'description',
      content:
        'TWF is a high-end digital agency merging technical mastery with creativity and performance.'
    }
  ]
})

const clientLogos = [
  { label: 'TrueCoffee', src: '/assets/client-logos/client-logo-12.png' },
  { label: 'UNICEF', src: '/assets/client-logos/client-logo-10.png' },
  { label: 'SCG', src: '/assets/client-logos/client-logo-07.png' },
  { label: 'SC Asset', src: '/assets/client-logos/client-logo-16.png' },
  { label: 'Pruksa', src: '/assets/client-logos/client-logo-15.png' },
  { label: 'Kubota', src: '/assets/client-logos/client-logo-18.png' },
  { label: 'HomePro', src: '/assets/client-logos/client-logo-01.png' },
  { label: 'GS Battery', src: '/assets/client-logos/client-logo-03.png' },
  { label: 'Certainty', src: '/assets/client-logos/client-logo-02.png' },
  { label: 'Bangkok Insurance', src: '/assets/client-logos/client-logo-17.png' },
  { label: 'Double Goose', src: '/assets/client-logos/client-logo-14.png' },
  { label: 'BabyLove', src: '/assets/client-logos/client-logo-19.png' },
  { label: 'ACUVUE', src: '/assets/client-logos/client-logo-20.png' },
  { label: 'Acer', src: '/assets/client-logos/client-logo-11.png' },
  { label: 'ViMUT Hospital', src: '/assets/client-logos/client-logo-09.png' },
  { label: "Dentiste' Plus White", src: '/assets/client-logos/client-logo-08.png' },
  { label: 'ROJUKISS', src: '/assets/client-logos/client-logo-05.png' },
  { label: 'Beger', src: '/assets/client-logos/client-logo-06.png' },
  { label: 'Syngenta', src: '/assets/client-logos/client-logo-04.png' },
  { label: 'Taro', src: '/assets/client-logos/client-logo-13.png' }
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
    labelLines: ['INSIGHTFUL DATA &', 'MEASURABLE RESULT'],
    labelSubtitle: '(วัดผลได้)'
  },
  {
    number: '02',
    title: 'Media Efficiency',
    labelLines: ['MEDIA EFFICIENCY'],
    labelSubtitle: '(เข้าถึง)'
  },
  {
    number: '03',
    title: 'Creativity Driving Actions',
    labelLines: ['CREATIVITY', 'DRIVING ACTIONS'],
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

const articles = [
  'เทคนิคเพิ่มยอดขายผ่านดิจิทัล',
  'เครื่องมือใหม่ที่แบรนด์ยุคใหม่ต้องใช้',
  'เคล็ดลับสร้างแคมเปญให้โตไว'
]

const motionReady = ref(false)
const activeService = ref(mediaServices[0].id)
const showreelActive = ref(false)
const pageRoot = ref<HTMLElement | null>(null)
const heroMedia = ref<HTMLElement | null>(null)
const showreelSection = ref<HTMLElement | null>(null)
const showreelStage = ref<HTMLElement | null>(null)
const showreelVideo = ref<HTMLVideoElement | null>(null)
const serviceNavigation = ref<HTMLUListElement | null>(null)

let revealObserver: IntersectionObserver | undefined
let strategyObserver: IntersectionObserver | undefined
let heroVideoObserver: IntersectionObserver | undefined
let showreelStageObserver: IntersectionObserver | undefined
let showreelVideoObserver: IntersectionObserver | undefined
let pointerFrame = 0
let scrollFrame = 0
let scrollIdleTimer: number | undefined
let showreelTracking = false
let showreelStyleKey = ''

const loadShowreelVideo = () => {
  const video = showreelVideo.value
  const source = video?.querySelector<HTMLSourceElement>('source[data-src]')

  if (!video || !source || source.src) {
    return
  }

  source.src = source.dataset.src ?? ''
  video.load()
  video.play().catch(() => {
    // Autoplay can be blocked in edge cases; the poster keeps the section useful.
  })
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

  if (!reduceMotion && showreelVideo.value) {
    showreelVideoObserver = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          loadShowreelVideo()
          showreelVideoObserver?.disconnect()
        }
      },
      { rootMargin: '600px 0px', threshold: 0 }
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

  if (!reduceMotion && heroMedia.value) {
    const heroVideos = Array.from(heroMedia.value.querySelectorAll<HTMLVideoElement>('video'))

    heroVideoObserver = new IntersectionObserver(
      (entries) => {
        const isVisible = entries.some((entry) => entry.isIntersecting)

        heroVideos.forEach((video) => {
          if (isVisible) {
            video.play().catch(() => {
              // Autoplay can be blocked; the static frame remains visible.
            })
          } else {
            video.pause()
          }
        })
      },
      { rootMargin: '120px 0px 120px 0px', threshold: 0.04 }
    )
    heroVideoObserver.observe(heroMedia.value)
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
  revealElements.forEach((element) => revealObserver?.observe(element))
  motionReady.value = true

  if (window.matchMedia('(pointer: fine)').matches) {
    page.addEventListener('pointermove', updatePointerGlow, { passive: true })
  }
})

onBeforeUnmount(() => {
  window.clearTimeout(scrollIdleTimer)
  window.cancelAnimationFrame(pointerFrame)
  window.cancelAnimationFrame(scrollFrame)
  window.removeEventListener('scroll', requestScrollEffects)
  window.removeEventListener('resize', requestScrollEffects)
  pageRoot.value?.removeEventListener('pointermove', updatePointerGlow)
  revealObserver?.disconnect()
  strategyObserver?.disconnect()
  heroVideoObserver?.disconnect()
  showreelStageObserver?.disconnect()
  showreelVideoObserver?.disconnect()
})
</script>

<template>
  <div ref="pageRoot" :class="['page', { 'motion-ready': motionReady }]">
    <SiteHeader active-path="/" />

    <main>
      <section id="home" class="hero">
        <div ref="heroMedia" class="hero-media" aria-hidden="true">
          <div class="media-skeleton hero-media-skeleton" />
          <video class="hero-banner" autoplay muted loop playsinline preload="metadata">
            <source src="/assets/banner.webm" type="video/webm">
          </video>
          <video class="hero-filter" autoplay muted loop playsinline preload="metadata">
            <source src="/assets/bg_filter.webm" type="video/webm">
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
          <a class="cta-button" data-reveal style="--delay: .44s" href="#contact">Let's Launch Your Project <b>+</b></a>
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
              loading="eager"
              decoding="async"
            >
          </div>
        </div>
      </section>

      <section class="needs">
        <div class="narrow" data-reveal>
          <h2 class="gradient-title">All your needs</h2>
          <p>
            We are a high-end digital agency merging uncompromising technical mastery
            with unbounded creativity. For 15 years, we have engineered digital
            experiences for high-growth talent firms and luxury innovators.
          </p>
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
          <div class="performance-scene">
            <div class="performance-bg" aria-hidden="true">
              <div class="performance-bg-gradient" />
              <picture class="performance-bg-layer main">
                <source srcset="/assets/triangle-performance-main.webp" type="image/webp">
                <img src="/assets/triangle-performance-main.png" alt="" loading="lazy" decoding="async">
              </picture>
              <picture class="performance-bg-layer grid">
                <source srcset="/assets/triangle-performance-grid.webp" type="image/webp">
                <img src="/assets/triangle-performance-grid.png" alt="" loading="lazy" decoding="async">
              </picture>
              <picture class="performance-bg-layer glow">
                <source srcset="/assets/triangle-performance-glow.webp" type="image/webp">
                <img src="/assets/triangle-performance-glow.png" alt="" loading="lazy" decoding="async">
              </picture>
            </div>
            <div class="beam" aria-hidden="true" />
            <div class="performance-stack">
              <div class="performance-label-top">
                <p class="performance-label-title">
                  <span
                    v-for="line in pillars[0].labelLines"
                    :key="`performance-top-${line}`"
                  >
                    {{ line }}
                  </span>
                </p>
                <p class="performance-label-subtitle">{{ pillars[0].labelSubtitle }}</p>
              </div>
              <div class="triangle" aria-label="Triangle of Performance">
                <svg class="triangle-energy" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                  <defs>
                    <linearGradient id="triangle-light" x1="0" y1="1" x2="1" y2="1">
                      <stop offset="0" stop-color="#67e999" />
                      <stop offset=".22" stop-color="#16c9ec" />
                      <stop offset=".45" stop-color="#6550ff" />
                      <stop offset=".7" stop-color="#ee3786" />
                      <stop offset="1" stop-color="#ffe84c" />
                    </linearGradient>
                  </defs>
                  <path class="triangle-energy-track" d="M50 1 L99 99 L1 99 Z" />
                  <path class="triangle-energy-flow" d="M50 1 L99 99 L1 99 Z" />
                </svg>
                <div class="triangle-inner">
                  <img
                    class="triangle-logo"
                    src="/assets/triangle-twf-logo.svg"
                    alt="TWF Agency"
                    loading="lazy"
                    decoding="async"
                  >
                  <strong>PERFORMANCE CREATIVE</strong>
                  <small>TRIANGLE OF PERFORMANCE (TOP)</small>
                </div>
              </div>
              <div class="performance-label-bottom">
                <div class="performance-label-side performance-label-left">
                  <p class="performance-label-title">
                    <span
                      v-for="line in pillars[1].labelLines"
                      :key="`performance-left-${line}`"
                    >
                      {{ line }}
                    </span>
                  </p>
                  <p class="performance-label-subtitle">{{ pillars[1].labelSubtitle }}</p>
                </div>
                <div class="performance-label-side performance-label-right">
                  <p class="performance-label-title">
                    <span
                      v-for="line in pillars[2].labelLines"
                      :key="`performance-right-${line}`"
                    >
                      {{ line }}
                    </span>
                  </p>
                  <p class="performance-label-subtitle">{{ pillars[2].labelSubtitle }}</p>
                </div>
              </div>
            </div>
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
            <img src="/assets/orbit.png" alt="">
          </div>
        </div>
      </section>

      <section id="photography" ref="showreelSection" :class="['showreel', { 'is-active': showreelActive }]">
        <div ref="showreelStage" class="showreel-stage">
          <figure class="showreel-frame" data-reveal>
            <div class="media-skeleton showreel-skeleton" aria-hidden="true" />
            <img class="showreel-poster" src="/assets/showreel-reference.png" alt="" aria-hidden="true">
            <video
              ref="showreelVideo"
              muted
              loop
              playsinline
              preload="none"
              poster="/assets/showreel-reference.png"
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
              <img src="/assets/stellar-data.png" alt="Stellar Data">
              <p>Elevate your performance marketing campaigns</p>
            </article>
            <article data-reveal style="--delay: .22s">
              <img src="/assets/kensento.png" alt="Kensento">
              <p>Taking you beyond cookies consent management</p>
            </article>
          </div>
        </div>
      </section>

      <section id="about" class="team">
        <div class="shell team-grid">
          <div class="team-photos" data-reveal>
            <img src="/assets/award.png" alt="TWF awards">
            <img src="/assets/team.png" alt="TWF team">
          </div>
          <div class="team-copy" data-reveal style="--delay: .14s">
            <h2>A team you<br>can trust</h2>
            <p>
              We push boundaries and strive for excellence by fostering a highly
              collaborative and constructive environment. Our team is comprised of
              talented individuals who work hard to elevate your brand.
            </p>
          </div>
        </div>
      </section>

      <section id="blog" class="articles">
        <div class="shell">
          <p class="caption" data-reveal>Our Expertise</p>
          <h2 data-reveal style="--delay: .08s">Explore our recent articles</h2>
          <p class="article-tags" data-reveal style="--delay: .12s">Performance Marketing · Social Media · Case Study · Media Plan &amp; Buy · Digital Campaign</p>
          <div class="article-grid">
            <article
              v-for="(article, index) in articles"
              :key="article"
              data-reveal
              :style="{ '--delay': `${160 + index * 75}ms` }"
            >
              <img src="/assets/article-cover.png" alt="">
              <div>
                <p>LINE Commerce</p>
                <h3>{{ article }}</h3>
                <a href="#blog">Click Here <b>+</b></a>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>

    <footer id="contact" class="footer">
      <div class="footer-action" data-reveal>
        <h2 class="gradient-title">Make your goals a reality</h2>
        <a class="cta-button" href="mailto:hello@twf.agency">Initiate Project Launch <b>+</b></a>
      </div>
      <div class="shell footer-bottom">
        <img class="footer-logo" :src="`${aboutAssetPath}/twf-logo-footer.svg`" alt="TWF">
        <p>The Web Flight Co., Ltd. Crystal Park Place Building, R.1<br>Praditmanutham Road, Wangthonglang, Bangkok 10310</p>
        <div class="socials">
          <a v-for="social in footerSocials" :key="social.label" :href="social.href" :aria-label="social.label">
            <img :src="social.src" alt="">
          </a>
        </div>
      </div>
      <p class="copyright">Copyright © 2026 TWF DIGITAL MARKETING CONSULTANCY</p>
    </footer>
  </div>
</template>
