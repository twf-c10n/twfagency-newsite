<script setup lang="ts">
useHead({
  title: 'Projects | TWF Agency',
  meta: [
    {
      name: 'description',
      content:
        'Explore TWF Agency project capabilities across media strategy, performance marketing, creative solutions, CRM, influencer marketing, and analytics.'
    }
  ]
})

const menuOpen = ref(false)
const headerScrolled = ref(false)
const activeCategoryId = ref('media-strategy')

const aboutAssetPath = '/assets/about-figma'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Our Services', href: '/services' },
  { label: 'Projects', href: '/project', active: true },
  { label: 'Photography', href: '/photography' },
  { label: 'Blog', href: '/blog' },
  { label: 'About Us', href: '/about' }
]

const categories = [
  {
    id: 'media-strategy',
    label: 'Media Strategy',
    title: 'Media Strategy',
    description:
      'Achieve exponential growth with our full-funnel digital strategy services. From awareness to conversion, our results-focused approach delivers success at every stage of the customer journey.'
  },
  {
    id: 'performance-marketing',
    label: 'Performance Marketing',
    title: 'Performance Marketing',
    description:
      'Scale every conversion path with paid media, testing, tracking, and optimization systems built around measurable business growth.'
  },
  {
    id: 'creative-solutions',
    label: 'Creative Solutions',
    title: 'Creative Solutions',
    description:
      'Turn brand strategy into campaign ideas, content systems, and high-performing creative assets that move audiences to action.'
  },
  {
    id: 'crm-solutions',
    label: 'CRM Solutions',
    title: 'CRM Solutions',
    description:
      'Build lifecycle journeys that connect first-party data, segmentation, and retention programs into stronger customer relationships.'
  },
  {
    id: 'influencer-kol',
    label: 'Influencer & KOL Affilate Marketing',
    title: 'Influencer & KOL Affilate Marketing',
    description:
      'Match brands with credible creators and affiliate partners through accountable campaign operations and trackable outcomes.'
  },
  {
    id: 'analytics',
    label: 'Digital Marketing Analytics',
    title: 'Digital Marketing Analytics',
    description:
      'Clarify what works with measurement plans, dashboards, tagging, and insight frameworks that reveal where to scale next.'
  }
]

const cardCopy =
  'High-resolution stills engineered for global campaigns and elite product launches.'

const cardsByCategory: Record<string, Array<{ icon: string; title: string; description: string }>> = {
  'media-strategy': [
    {
      icon: 'aperture',
      title: 'Communications Planning and Implementation',
      description: cardCopy
    },
    {
      icon: 'camera',
      title: 'Digital Brand Building',
      description: cardCopy
    },
    {
      icon: 'bolt',
      title: 'Digital Marketing Consultation',
      description: cardCopy
    },
    {
      icon: 'bolt',
      title: 'Digital Marketing Consultation',
      description: cardCopy
    },
    {
      icon: 'layers',
      title: 'Digital Media Planning and Buying',
      description: cardCopy
    }
  ],
  'performance-marketing': [
    { icon: 'bolt', title: 'Performance Campaign Architecture', description: cardCopy },
    { icon: 'layers', title: 'Conversion Optimization', description: cardCopy },
    { icon: 'camera', title: 'Paid Search and Social Scaling', description: cardCopy },
    { icon: 'aperture', title: 'Creative Testing Roadmap', description: cardCopy },
    { icon: 'layers', title: 'Attribution and Reporting', description: cardCopy }
  ],
  'creative-solutions': [
    { icon: 'aperture', title: 'Campaign Creative Direction', description: cardCopy },
    { icon: 'camera', title: 'Content Production System', description: cardCopy },
    { icon: 'layers', title: 'Motion and Visual Design', description: cardCopy },
    { icon: 'bolt', title: 'Short-Form Creative Testing', description: cardCopy },
    { icon: 'aperture', title: 'Brand Asset Development', description: cardCopy }
  ],
  'crm-solutions': [
    { icon: 'layers', title: 'Customer Journey Mapping', description: cardCopy },
    { icon: 'aperture', title: 'Segmentation Strategy', description: cardCopy },
    { icon: 'camera', title: 'Retention Campaigns', description: cardCopy },
    { icon: 'bolt', title: 'Marketing Automation', description: cardCopy },
    { icon: 'layers', title: 'Lifecycle Performance Review', description: cardCopy }
  ],
  'influencer-kol': [
    { icon: 'camera', title: 'Creator Matching and Planning', description: cardCopy },
    { icon: 'aperture', title: 'KOL Campaign Operations', description: cardCopy },
    { icon: 'bolt', title: 'Affiliate Program Management', description: cardCopy },
    { icon: 'layers', title: 'Content Usage Planning', description: cardCopy },
    { icon: 'camera', title: 'Creator Performance Reporting', description: cardCopy }
  ],
  analytics: [
    { icon: 'layers', title: 'Tracking Plan Development', description: cardCopy },
    { icon: 'aperture', title: 'Dashboard Architecture', description: cardCopy },
    { icon: 'bolt', title: 'Campaign Insight Reports', description: cardCopy },
    { icon: 'camera', title: 'Data Quality Audit', description: cardCopy },
    { icon: 'layers', title: 'Growth Opportunity Mapping', description: cardCopy }
  ]
}

const activeCategory = computed(() => {
  return categories.find((category) => category.id === activeCategoryId.value) ?? categories[0]
})

const activeCards = computed(() => cardsByCategory[activeCategory.value.id] ?? cardsByCategory['media-strategy'])

const socials = [
  { label: 'Facebook', src: `${aboutAssetPath}/facebook.svg`, href: '#' },
  { label: 'X', src: `${aboutAssetPath}/x.svg`, href: '#' },
  { label: 'Instagram', src: `${aboutAssetPath}/instagram.svg`, href: '#' },
  { label: 'LinkedIn', src: `${aboutAssetPath}/linkedin.svg`, href: '#' }
]

const updateHeader = () => {
  const isScrolled = window.scrollY > 18

  if (headerScrolled.value !== isScrolled) {
    headerScrolled.value = isScrolled
  }
}

onMounted(() => {
  updateHeader()
  window.addEventListener('scroll', updateHeader, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateHeader)
})
</script>

<template>
  <div class="page project-page">
    <header :class="['site-header about-figma-header', { scrolled: headerScrolled }]">
      <nav class="about-figma-nav" aria-label="Primary navigation">
        <a class="about-logo" href="/" aria-label="TWF home">
          <img :src="`${aboutAssetPath}/twf-logo.svg`" alt="TWF">
        </a>

        <div :class="['nav-links about-figma-links', { open: menuOpen }]">
          <a
            v-for="item in navItems"
            :key="item.href"
            :class="{ active: item.active }"
            :href="item.href"
            :aria-current="item.active ? 'page' : undefined"
            @click="menuOpen = false"
          >
            {{ item.label }}
          </a>
        </div>

        <a class="nav-contact about-contact" href="/contact">Contact</a>
        <button
          class="menu-toggle"
          type="button"
          :aria-expanded="menuOpen"
          aria-label="Toggle navigation"
          @click="menuOpen = !menuOpen"
        >
          <span />
          <span />
        </button>
      </nav>
    </header>

    <main>
      <section class="project-hero">
        <h1>Reach New Heights</h1>
        <p>
          Elite technical mastery meets uncompromising aesthetic standards. We architect
          digital dominance for high-growth innovators.
        </p>
      </section>

      <section class="project-categories" aria-label="Project categories">
        <button
          v-for="category in categories"
          :key="category.id"
          type="button"
          :class="{ active: activeCategoryId === category.id }"
          @click="activeCategoryId = category.id"
        >
          {{ category.label }}
        </button>
      </section>

      <section class="project-services" :aria-labelledby="`${activeCategory.id}-title`">
        <div class="project-service-copy">
          <h2 :id="`${activeCategory.id}-title`">{{ activeCategory.title }}</h2>
          <p>{{ activeCategory.description }}</p>
        </div>

        <div class="project-card-grid">
          <article v-for="(card, index) in activeCards" :key="`${activeCategory.id}-${index}`" class="project-card">
            <span :class="['project-card-icon', card.icon]" aria-hidden="true" />
            <div>
              <h3>{{ card.title }}</h3>
              <p>{{ card.description }}</p>
            </div>
          </article>
        </div>
      </section>
    </main>

    <footer class="about-figma-footer project-footer">
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
