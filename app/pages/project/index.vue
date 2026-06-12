<script setup lang="ts">
import {
  getMediaUrl,
  getOurProjectsPage,
  pickLocalizedText,
  type OurProjectsPage,
  type ProjectCard,
  type ProjectService
} from '~/utils/api'

type IconName = 'aperture' | 'camera' | 'bolt' | 'layers'

type ProjectCardView = {
  id: string
  icon: IconName
  title: string
  description: string
  image?: string
  imageAlt: string
  href?: string
}

type ProjectCategoryView = {
  id: string
  label: string
  title: string
  description: string
  cards: ProjectCardView[]
}

const aboutAssetPath = '/assets/about-figma'
const fallbackProjectMedia = '/assets/Abstract_grain.jpg'
const activeCategoryId = ref('')
const runtimeConfig = useRuntimeConfig()
const apiBaseUrl = String(runtimeConfig.public.apiBaseUrl || '')

const fallbackSeoTitle = 'Projects | TWF Agency'
const fallbackSeoDescription =
  'Explore TWF Agency project capabilities across media strategy, performance marketing, creative solutions, CRM, influencer marketing, and analytics.'
const fallbackHeroTitle = 'Reach New Heights'
const fallbackHeroDescription =
  'Elite technical mastery meets uncompromising aesthetic standards. We architect digital dominance for high-growth innovators.'
const fallbackCardCopy =
  'High-resolution stills engineered for global campaigns and elite product launches.'

const iconNames: IconName[] = ['aperture', 'camera', 'bolt', 'layers']

const fallbackCategoryMeta = [
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

const fallbackCardsByCategory: Record<string, Array<Omit<ProjectCardView, 'id'>>> = {
  'media-strategy': [
    {
      icon: 'aperture',
      title: 'Communications Planning and Implementation',
      description: fallbackCardCopy,
      imageAlt: 'Communications Planning and Implementation'
    },
    {
      icon: 'camera',
      title: 'Digital Brand Building',
      description: fallbackCardCopy,
      imageAlt: 'Digital Brand Building'
    },
    {
      icon: 'bolt',
      title: 'Digital Marketing Consultation',
      description: fallbackCardCopy,
      imageAlt: 'Digital Marketing Consultation'
    },
    {
      icon: 'bolt',
      title: 'Digital Marketing Consultation',
      description: fallbackCardCopy,
      imageAlt: 'Digital Marketing Consultation'
    },
    {
      icon: 'layers',
      title: 'Digital Media Planning and Buying',
      description: fallbackCardCopy,
      imageAlt: 'Digital Media Planning and Buying'
    }
  ],
  'performance-marketing': [
    {
      icon: 'bolt',
      title: 'Performance Campaign Architecture',
      description: fallbackCardCopy,
      imageAlt: 'Performance Campaign Architecture'
    },
    {
      icon: 'layers',
      title: 'Conversion Optimization',
      description: fallbackCardCopy,
      imageAlt: 'Conversion Optimization'
    },
    {
      icon: 'camera',
      title: 'Paid Search and Social Scaling',
      description: fallbackCardCopy,
      imageAlt: 'Paid Search and Social Scaling'
    },
    {
      icon: 'aperture',
      title: 'Creative Testing Roadmap',
      description: fallbackCardCopy,
      imageAlt: 'Creative Testing Roadmap'
    },
    {
      icon: 'layers',
      title: 'Attribution and Reporting',
      description: fallbackCardCopy,
      imageAlt: 'Attribution and Reporting'
    }
  ],
  'creative-solutions': [
    {
      icon: 'aperture',
      title: 'Campaign Creative Direction',
      description: fallbackCardCopy,
      imageAlt: 'Campaign Creative Direction'
    },
    {
      icon: 'camera',
      title: 'Content Production System',
      description: fallbackCardCopy,
      imageAlt: 'Content Production System'
    },
    {
      icon: 'layers',
      title: 'Motion and Visual Design',
      description: fallbackCardCopy,
      imageAlt: 'Motion and Visual Design'
    },
    {
      icon: 'bolt',
      title: 'Short-Form Creative Testing',
      description: fallbackCardCopy,
      imageAlt: 'Short-Form Creative Testing'
    },
    {
      icon: 'aperture',
      title: 'Brand Asset Development',
      description: fallbackCardCopy,
      imageAlt: 'Brand Asset Development'
    }
  ],
  'crm-solutions': [
    {
      icon: 'layers',
      title: 'Customer Journey Mapping',
      description: fallbackCardCopy,
      imageAlt: 'Customer Journey Mapping'
    },
    {
      icon: 'aperture',
      title: 'Segmentation Strategy',
      description: fallbackCardCopy,
      imageAlt: 'Segmentation Strategy'
    },
    {
      icon: 'camera',
      title: 'Retention Campaigns',
      description: fallbackCardCopy,
      imageAlt: 'Retention Campaigns'
    },
    {
      icon: 'bolt',
      title: 'Marketing Automation',
      description: fallbackCardCopy,
      imageAlt: 'Marketing Automation'
    },
    {
      icon: 'layers',
      title: 'Lifecycle Performance Review',
      description: fallbackCardCopy,
      imageAlt: 'Lifecycle Performance Review'
    }
  ],
  'influencer-kol': [
    {
      icon: 'camera',
      title: 'Creator Matching and Planning',
      description: fallbackCardCopy,
      imageAlt: 'Creator Matching and Planning'
    },
    {
      icon: 'aperture',
      title: 'KOL Campaign Operations',
      description: fallbackCardCopy,
      imageAlt: 'KOL Campaign Operations'
    },
    {
      icon: 'bolt',
      title: 'Affiliate Program Management',
      description: fallbackCardCopy,
      imageAlt: 'Affiliate Program Management'
    },
    {
      icon: 'layers',
      title: 'Content Usage Planning',
      description: fallbackCardCopy,
      imageAlt: 'Content Usage Planning'
    },
    {
      icon: 'camera',
      title: 'Creator Performance Reporting',
      description: fallbackCardCopy,
      imageAlt: 'Creator Performance Reporting'
    }
  ],
  analytics: [
    {
      icon: 'layers',
      title: 'Tracking Plan Development',
      description: fallbackCardCopy,
      imageAlt: 'Tracking Plan Development'
    },
    {
      icon: 'aperture',
      title: 'Dashboard Architecture',
      description: fallbackCardCopy,
      imageAlt: 'Dashboard Architecture'
    },
    {
      icon: 'bolt',
      title: 'Campaign Insight Reports',
      description: fallbackCardCopy,
      imageAlt: 'Campaign Insight Reports'
    },
    {
      icon: 'camera',
      title: 'Data Quality Audit',
      description: fallbackCardCopy,
      imageAlt: 'Data Quality Audit'
    },
    {
      icon: 'layers',
      title: 'Growth Opportunity Mapping',
      description: fallbackCardCopy,
      imageAlt: 'Growth Opportunity Mapping'
    }
  ]
}

const fallbackCategories: ProjectCategoryView[] = fallbackCategoryMeta.map((category) => ({
  ...category,
  cards: (fallbackCardsByCategory[category.id] ?? []).map((card, index) => ({
    ...card,
    id: `${category.id}-${index}`
  }))
}))

const emptyCategory: ProjectCategoryView = {
  id: 'projects',
  label: 'Projects',
  title: 'Projects',
  description: '',
  cards: []
}

const { data: projectsPage, pending, error } = await useAsyncData<OurProjectsPage>(
  'page:our-projects',
  () => getOurProjectsPage(),
  { server: false }
)

const asRecord = (source: unknown) => source as Record<string, unknown> | null | undefined

const createStableId = (value: string | undefined, fallback: string) => {
  const normalized = (value ?? '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

  return normalized || fallback
}

const mapProjectCard = (project: ProjectCard, index: number): ProjectCardView => {
  const title = pickLocalizedText(asRecord(project), 'name', `Project ${index + 1}`)
  const description = pickLocalizedText(asRecord(project), 'headline', fallbackCardCopy)
  const media = getMediaUrl(project.thumbnail ?? project.hero_banner, fallbackProjectMedia, apiBaseUrl)

  return {
    id: project.slug || `${createStableId(title, 'project')}-${index}`,
    icon: iconNames[index % iconNames.length],
    title,
    description,
    image: media,
    imageAlt: project.thumbnail?.name || project.hero_banner?.name || title,
    href: project.slug ? `/project/${project.slug}` : undefined
  }
}

const mapProjectService = (service: ProjectService, index: number): ProjectCategoryView => {
  const title = pickLocalizedText(asRecord(service), 'name', `Service ${index + 1}`)
  const description = pickLocalizedText(
    asRecord(service),
    'description',
    'Explore selected project work from this service.'
  )
  const id = service.id || createStableId(title, `service-${index + 1}`)

  return {
    id,
    label: title,
    title,
    description,
    cards: (service.projects ?? []).map(mapProjectCard)
  }
}

const apiCategories = computed(() => {
  return (projectsPage.value?.services ?? [])
    .map(mapProjectService)
    .filter((category) => category.title.trim())
})

const hasApiCategories = computed(() => apiCategories.value.length > 0)

const projectCategories = computed(() => {
  return hasApiCategories.value ? apiCategories.value : fallbackCategories
})

watch(
  projectCategories,
  (categories) => {
    if (!categories.length) {
      activeCategoryId.value = ''

      return
    }

    if (!categories.some((category) => category.id === activeCategoryId.value)) {
      activeCategoryId.value = categories[0].id
    }
  },
  { immediate: true }
)

const activeCategory = computed(() => {
  return projectCategories.value.find((category) => category.id === activeCategoryId.value) ?? projectCategories.value[0] ?? emptyCategory
})

const activeCards = computed(() => activeCategory.value.cards)

const heroTitle = computed(() => {
  return pickLocalizedText(asRecord(projectsPage.value), 'name', fallbackHeroTitle)
})

const heroDescription = computed(() => {
  return pickLocalizedText(asRecord(projectsPage.value), 'meta_description', fallbackHeroDescription)
})

useHead(() => {
  const title = pickLocalizedText(asRecord(projectsPage.value), 'meta_title', fallbackSeoTitle)
  const description = pickLocalizedText(asRecord(projectsPage.value), 'meta_description', fallbackSeoDescription)
  const keywords = pickLocalizedText(asRecord(projectsPage.value), 'meta_keyword')
  const thumbnail = getMediaUrl(projectsPage.value?.meta_thumbnail, '', apiBaseUrl)
  const meta: Array<Record<string, string>> = [
    { name: 'description', content: description },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description }
  ]

  if (keywords) {
    meta.push({ name: 'keywords', content: keywords })
  }

  if (thumbnail) {
    meta.push({ property: 'og:image', content: thumbnail })
  }

  return {
    title,
    meta
  }
})

const socials = [
  { label: 'Facebook', src: `${aboutAssetPath}/facebook.svg`, href: '#' },
  { label: 'X', src: `${aboutAssetPath}/x.svg`, href: '#' },
  { label: 'Instagram', src: `${aboutAssetPath}/instagram.svg`, href: '#' },
  { label: 'LinkedIn', src: `${aboutAssetPath}/linkedin.svg`, href: '#' }
]
</script>

<template>
  <div class="page project-page">
    <SiteHeader active-path="/project" />

    <main>
      <section class="project-hero">
        <h1>{{ heroTitle }}</h1>
        <p>{{ heroDescription }}</p>
      </section>

      <section class="project-categories" aria-label="Project categories">
        <button
          v-for="category in projectCategories"
          :key="category.id"
          type="button"
          :class="{ active: activeCategoryId === category.id }"
          @click="activeCategoryId = category.id"
        >
          {{ category.label }}
        </button>
      </section>

      <p v-if="pending" class="project-status" role="status">
        Loading projects...
      </p>
      <p v-else-if="error && !hasApiCategories" class="project-status" role="status">
        Project data is unavailable.
      </p>

      <section class="project-services" :aria-labelledby="`${activeCategory.id}-title`">
        <div class="project-service-copy">
          <h2 :id="`${activeCategory.id}-title`">{{ activeCategory.title }}</h2>
          <p>{{ activeCategory.description }}</p>
        </div>

        <div v-if="activeCards.length" class="project-card-grid">
          <template v-for="card in activeCards" :key="card.id">
            <NuxtLink
              v-if="card.href"
              :to="card.href"
              :class="['project-card', { 'has-media': card.image }]"
            >
              <div v-if="card.image" class="project-card-media">
                <img :src="card.image" :alt="card.imageAlt" loading="lazy">
              </div>
              <span v-else :class="['project-card-icon', card.icon]" aria-hidden="true" />
              <div class="project-card-body">
                <h3>{{ card.title }}</h3>
                <p>{{ card.description }}</p>
              </div>
            </NuxtLink>

            <article v-else :class="['project-card', { 'has-media': card.image }]">
              <div v-if="card.image" class="project-card-media">
                <img :src="card.image" :alt="card.imageAlt" loading="lazy">
              </div>
              <span v-else :class="['project-card-icon', card.icon]" aria-hidden="true" />
              <div class="project-card-body">
                <h3>{{ card.title }}</h3>
                <p>{{ card.description }}</p>
              </div>
            </article>
          </template>
        </div>

        <div v-else class="project-empty" role="status">
          Projects for this category are coming soon.
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
