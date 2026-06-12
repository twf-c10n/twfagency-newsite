<script setup lang="ts">
import {
  getMediaUrl,
  getProjectDetail,
  pickLocalizedText,
  type Media,
  type ProjectCard,
  type ProjectDetail
} from '~/utils/api'

type DetailSection = {
  id: string
  title: string
  body: string
}

const route = useRoute()
const rawSlug = route.params.slug
const slug = Array.isArray(rawSlug) ? rawSlug[0] : String(rawSlug ?? '')
const aboutAssetPath = '/assets/about-figma'
const fallbackProjectMedia = '/assets/Abstract_grain.jpg'
const runtimeConfig = useRuntimeConfig()
const apiBaseUrl = String(runtimeConfig.public.apiBaseUrl || '')

const { data: project, pending, error } = await useAsyncData<ProjectDetail>(
  `project-detail:${slug}`,
  () => getProjectDetail(slug)
)

const asRecord = (source: unknown) => source as Record<string, unknown> | null | undefined

const toTextList = (value: unknown): string[] => {
  if (!value) {
    return []
  }

  if (typeof value === 'string') {
    return value
      .split(/\r?\n/)
      .map((item) => item.trim())
      .filter(Boolean)
  }

  if (Array.isArray(value)) {
    return value.flatMap(toTextList)
  }

  if (typeof value === 'object') {
    return Object.values(value as Record<string, unknown>).flatMap(toTextList)
  }

  return [String(value)]
}

const mapMediaList = (items?: Media[]) => {
  return (items ?? [])
    .map((media) => ({
      src: getMediaUrl(media, '', apiBaseUrl),
      alt: media.name || 'Project media'
    }))
    .filter((media) => media.src)
}

const title = computed(() => {
  return pickLocalizedText(asRecord(project.value), 'name', 'Project')
})

const headline = computed(() => {
  return pickLocalizedText(asRecord(project.value), 'headline')
})

const heroImage = computed(() => {
  return getMediaUrl(
    project.value?.hero_banner ?? project.value?.thumbnail ?? project.value?.meta_thumbnail,
    fallbackProjectMedia,
    apiBaseUrl
  )
})

const sections = computed<DetailSection[]>(() => {
  const source = asRecord(project.value)

  return [
    {
      id: 'overview',
      title: 'Overview',
      body: pickLocalizedText(source, 'content')
    },
    {
      id: 'challenge',
      title: 'Challenge',
      body: pickLocalizedText(source, 'chanllenge_text')
    },
    {
      id: 'solution',
      title: 'Solution',
      body: pickLocalizedText(source, 'solution_text')
    },
    {
      id: 'showcase',
      title: 'Showcase',
      body: pickLocalizedText(source, 'showcase_content')
    },
    {
      id: 'result',
      title: 'Result',
      body: pickLocalizedText(source, 'result_text')
    }
  ].filter((section) => section.body.trim())
})

const deliverables = computed(() => toTextList(project.value?.deliverable_texts))
const measurables = computed(() => toTextList(project.value?.measurables))
const deliverableImages = computed(() => mapMediaList(project.value?.deliverable_attachments))
const showcaseImages = computed(() => mapMediaList(project.value?.showcase_attachment))
const showcaseMainMedia = computed(() => {
  const media = getMediaUrl(project.value?.showcase_media, '', apiBaseUrl)

  return media
    ? {
        src: media,
        alt: project.value?.showcase_media?.name || title.value
      }
    : null
})
const resultImage = computed(() => {
  const media = getMediaUrl(project.value?.result_attachment, '', apiBaseUrl)

  return media
    ? {
        src: media,
        alt: project.value?.result_attachment?.name || title.value
      }
    : null
})

const getProjectLink = (card?: ProjectCard | null) => {
  return card?.slug ? `/project/${card.slug}` : ''
}

const getProjectName = (card?: ProjectCard | null, fallback = 'Project') => {
  return pickLocalizedText(asRecord(card), 'name', fallback)
}

useHead(() => {
  const seoTitle = pickLocalizedText(asRecord(project.value), 'meta_title', `${title.value} | TWF Agency`)
  const description = pickLocalizedText(asRecord(project.value), 'meta_description', headline.value || seoTitle)
  const keywords = pickLocalizedText(asRecord(project.value), 'meta_keyword')
  const thumbnail = getMediaUrl(project.value?.meta_thumbnail ?? project.value?.thumbnail, '', apiBaseUrl)
  const meta: Array<Record<string, string>> = [
    { name: 'description', content: description },
    { property: 'og:title', content: seoTitle },
    { property: 'og:description', content: description }
  ]

  if (keywords) {
    meta.push({ name: 'keywords', content: keywords })
  }

  if (thumbnail) {
    meta.push({ property: 'og:image', content: thumbnail })
  }

  return {
    title: seoTitle,
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
  <div class="page project-page project-detail-page">
    <SiteHeader active-path="/project" />

    <main>
      <section class="project-detail-hero">
        <div class="project-detail-hero-copy">
          <NuxtLink class="project-detail-back" to="/project">Projects</NuxtLink>
          <h1>{{ title }}</h1>
          <p v-if="headline">{{ headline }}</p>
        </div>
        <div class="project-detail-hero-media">
          <img :src="heroImage" :alt="title">
        </div>
      </section>

      <section v-if="pending" class="project-detail-status" role="status">
        Loading project...
      </section>

      <section v-else-if="error" class="project-detail-status" role="status">
        Project could not be loaded.
      </section>

      <template v-else-if="project">
        <section v-if="sections.length" class="project-detail-sections">
          <article v-for="section in sections" :key="section.id" class="project-detail-section">
            <h2>{{ section.title }}</h2>
            <p>{{ section.body }}</p>
          </article>
        </section>

        <section
          v-if="deliverables.length || deliverableImages.length"
          class="project-detail-feature"
        >
          <div>
            <h2>Deliverables</h2>
            <ul v-if="deliverables.length">
              <li v-for="item in deliverables" :key="item">{{ item }}</li>
            </ul>
          </div>
          <div v-if="deliverableImages.length" class="project-detail-media-grid">
            <img
              v-for="media in deliverableImages"
              :key="media.src"
              :src="media.src"
              :alt="media.alt"
              loading="lazy"
            >
          </div>
        </section>

        <section
          v-if="showcaseMainMedia || showcaseImages.length || project.showcase_url"
          class="project-detail-showcase"
        >
          <h2>Showcase</h2>
          <div v-if="showcaseMainMedia" class="project-detail-wide-media">
            <img :src="showcaseMainMedia.src" :alt="showcaseMainMedia.alt" loading="lazy">
          </div>
          <div v-if="showcaseImages.length" class="project-detail-media-grid">
            <img
              v-for="media in showcaseImages"
              :key="media.src"
              :src="media.src"
              :alt="media.alt"
              loading="lazy"
            >
          </div>
          <a v-if="project.showcase_url" class="project-detail-link" :href="project.showcase_url" target="_blank" rel="noreferrer">
            Open showcase
          </a>
        </section>

        <section
          v-if="measurables.length || resultImage || project.result_url"
          class="project-detail-feature"
        >
          <div>
            <h2>Measurables</h2>
            <ul v-if="measurables.length">
              <li v-for="item in measurables" :key="item">{{ item }}</li>
            </ul>
            <a v-if="project.result_url" class="project-detail-link" :href="project.result_url" target="_blank" rel="noreferrer">
              Open result
            </a>
          </div>
          <div v-if="resultImage" class="project-detail-wide-media">
            <img :src="resultImage.src" :alt="resultImage.alt" loading="lazy">
          </div>
        </section>

        <nav
          v-if="getProjectLink(project.previous) || getProjectLink(project.next)"
          class="project-detail-nav"
          aria-label="Project navigation"
        >
          <NuxtLink v-if="getProjectLink(project.previous)" :to="getProjectLink(project.previous)">
            <span>Previous</span>
            {{ getProjectName(project.previous, 'Previous project') }}
          </NuxtLink>
          <NuxtLink v-if="getProjectLink(project.next)" :to="getProjectLink(project.next)">
            <span>Next</span>
            {{ getProjectName(project.next, 'Next project') }}
          </NuxtLink>
        </nav>
      </template>
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
