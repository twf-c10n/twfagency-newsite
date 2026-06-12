<script setup lang="ts">
useHead({
  title: 'Our Services | TWF Agency',
  meta: [
    {
      name: 'description',
      content:
        'Explore TWF Agency services across media strategy, performance marketing, creative solutions, CRM, influencer marketing, analytics, and LINE business solutions.'
    }
  ]
})

const activeServiceId = ref('media-strategy')

const aboutAssetPath = '/assets/about-figma'
const assetPath = '/assets/services-figma'

// ── Default static data ────────────────────────────────────────────

const defaultServices = [
  {
    id: 'media-strategy',
    title: 'Media Strategy',
    eyebrow: 'Planning System',
    image: `${assetPath}/media-strategy.jpg`,
    accent: '#39b54a',
    description:
      'We map the full funnel from audience insight to channel mix, building campaign architecture that makes every baht work harder.',
    points: ['Audience planning', 'Channel architecture', 'Budget allocation']
  },
  {
    id: 'performance-marketing',
    title: 'Performance Marketing',
    eyebrow: 'Growth Engine',
    image: `${assetPath}/performance-marketing.jpg`,
    accent: '#00a8de',
    description:
      'Always-on optimization across paid platforms with creative testing, conversion tracking, and measurable growth loops.',
    points: ['Paid social and search', 'Conversion optimization', 'Experiment roadmaps']
  },
  {
    id: 'creative-solutions',
    title: 'Creative Solutions',
    eyebrow: 'Creative Studio',
    image: `${assetPath}/creative-solutions.jpg`,
    accent: '#eb2d2e',
    description:
      'Campaign ideas, key visuals, motion, and content systems designed to stop the scroll and drive action.',
    points: ['Campaign concepts', 'Content production', 'Visual systems']
  },
  {
    id: 'crm-solutions',
    title: 'CRM Solutions',
    eyebrow: 'Lifecycle Design',
    image: `${assetPath}/crm-solutions.jpg`,
    accent: '#93278f',
    description:
      'Lifecycle journeys that turn first-party data into smarter segmentation, retention, and repeat purchase.',
    points: ['Customer journeys', 'Segmentation', 'Retention campaigns']
  },
  {
    id: 'influencer-kol',
    title: 'Influencer & KOL Affiliate Marketing',
    eyebrow: 'Creator Network',
    image: `${assetPath}/influencer-kol.jpg`,
    accent: '#fde92b',
    description:
      'Creator programs built around audience fit, credible storytelling, and trackable business outcomes.',
    points: ['KOL selection', 'Affiliate operations', 'Performance reporting']
  },
  {
    id: 'analytics',
    title: 'Digital Marketing Analytics',
    eyebrow: 'Insight Layer',
    image: `${assetPath}/analytics.jpg`,
    accent: '#00a8de',
    description:
      'Dashboards, tagging, and insight frameworks that clarify what is working and where to scale next.',
    points: ['Tracking plans', 'Dashboards', 'Insight reports']
  },
  {
    id: 'line-business',
    title: 'LINE Service for Business',
    eyebrow: 'Messaging Commerce',
    image: `${assetPath}/line-business.jpg`,
    accent: '#39b54a',
    description:
      'LINE OA, CRM, commerce, and messaging solutions for Thai brands that need tighter customer relationships.',
    points: ['LINE OA strategy', 'Rich menu and messaging', 'Commerce integration']
  }
]

const defaultSocials = [
  { label: 'Facebook', src: `${aboutAssetPath}/facebook.svg`, href: '#' },
  { label: 'X', src: `${aboutAssetPath}/x.svg`, href: '#' },
  { label: 'Instagram', src: `${aboutAssetPath}/instagram.svg`, href: '#' },
  { label: 'LinkedIn', src: `${aboutAssetPath}/linkedin.svg`, href: '#' }
]

// ── Reactive state ─────────────────────────────────────────────────

const services = ref(defaultServices)
const socials = ref(defaultSocials)
const pageData = ref<Record<string, unknown> | null>(null)

const activeService = computed(() => {
  return services.value.find((service) => service.id === activeServiceId.value) ?? services.value[0]
})

// ── Fetch from API ─────────────────────────────────────────────────

onMounted(async () => {
  try {
    const api = useApi()
    const data = await api.fetchPage<Record<string, any>>('services')
    if (data?.services && Array.isArray(data.services) && data.services.length > 0) {
      // Map API services to the structure expected by the template
      const accents = ['#39b54a', '#00a8de', '#eb2d2e', '#93278f', '#fde92b', '#00a8de', '#39b54a']
      const images = [
        'media-strategy', 'performance-marketing', 'creative-solutions',
        'crm-solutions', 'influencer-kol', 'analytics', 'line-business'
      ]
      services.value = data.services.map((s: any, i: number) => ({
        id: s.id || `service-${i}`,
        title: s.name_en || defaultServices[i]?.title || '',
        eyebrow: s.sub_services?.[0]?.name || defaultServices[i]?.eyebrow || '',
        image: `${assetPath}/${images[i] || defaultServices[i]?.id}.jpg`,
        accent: accents[i] || defaultServices[i]?.accent || '#39b54a',
        description: s.description_en || defaultServices[i]?.description || '',
        points: (s.sub_services as any[])?.map((ss: any) => ss.name) || defaultServices[i]?.points || [],
      }))
      activeServiceId.value = services.value[0]?.id || 'media-strategy'
    }
  } catch {
    // API unavailable — keep fallback
  }
})

</script>

<template>
  <div class="page services-page">
    <SiteHeader active-path="/services" />

    <main>
      <section class="services-hero">
        <h1>Our Services TWF Agency</h1>
        <p>
          We are a high-end digital agency merging uncompromising technical mastery
          with unbounded creativity. For 15 years, we have engineered digital experiences
          for high-growth tech firms and luxury innovators.
        </p>
      </section>

      <section
        class="agency-services-showcase"
        :style="{ '--active-accent': activeService.accent }"
        aria-labelledby="agency-services-title"
      >
        <div class="automotive-bg" aria-hidden="true" />
        <div class="automotive-gridline" aria-hidden="true" />

        <div class="automotive-inner">
          <aside class="automotive-menu" aria-label="Agency services">
            <button
              v-for="(service, index) in services"
              :key="service.id"
              type="button"
              :class="{ active: activeServiceId === service.id }"
              :style="{ '--item-accent': service.accent }"
              @click="activeServiceId = service.id"
            >
              <span>{{ String(index + 1).padStart(2, '0') }}</span>
              <b>{{ service.title }}</b>
            </button>
          </aside>

          <article class="automotive-content">
            <Transition name="service-image" mode="out-in">
              <figure :key="activeService.id" class="automotive-media">
                <img :src="activeService.image" :alt="`${activeService.title} campaign visual`">
              </figure>
            </Transition>
            <div class="automotive-copy">
              <p>Agency Service / {{ activeService.eyebrow }}</p>
              <Transition name="service-copy" mode="out-in">
                <div :key="activeService.id" class="automotive-copy-panel">
                  <h2 id="agency-services-title">{{ activeService.title }}</h2>
                  <span>{{ activeService.description }}</span>
                </div>
              </Transition>
              <ul>
                <li v-for="point in activeService.points" :key="point">{{ point }}</li>
              </ul>
              <div class="automotive-progress" aria-label="Service slides">
                <button
                  v-for="service in services"
                  :key="`dot-${service.id}`"
                  type="button"
                  :class="{ active: activeServiceId === service.id }"
                  :aria-label="`Show ${service.title}`"
                  @click="activeServiceId = service.id"
                />
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>

    <footer class="about-figma-footer">
      <div class="about-footer-inner">
        <div class="about-footer-address">
          <img :src="`${aboutAssetPath}/twf-logo-footer.svg`" alt="TWF">
          <p>
            The Web Flight Co., Ltd., Capital Work Place Building, Fl. 8, 1<br>
            Soi Chamchan, Klongton-neur, Wattana, Bangkok 10110
          </p>
        </div>
        <div class="about-footer-socials">
          <a v-for="social in socials" :key="social.label" :href="social.href" :aria-label="social.label">
            <img :src="social.src" alt="">
          </a>
        </div>
      </div>
      <p class="about-copyright">Copyright ©2022 DIGITAL MARKETING CONSULTANCY</p>
    </footer>
  </div>
</template>
