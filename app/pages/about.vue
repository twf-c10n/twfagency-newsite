<script setup lang="ts">
useHead({
  title: 'About TWF Agency | Our Story Begins with the Digital Age',
  meta: [
    {
      name: 'description',
      content:
        'TWF Agency is a performance creative services team driving measurable growth for brands in the digital age.'
    }
  ]
})

const menuOpen = ref(false)
const headerScrolled = ref(false)
const activeStoryIndex = ref(1)

const assetPath = '/assets/about-figma'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Our Services', href: '/services' },
  { label: 'Projects', href: '/project' },
  { label: 'Photography', href: '/photography' },
  { label: 'Blog', href: '/blog' },
  { label: 'About Us', href: '/about', active: true }
]

const storyImages = [
  { src: `${assetPath}/story-left.png`, alt: 'TWF agency event installation' },
  { src: `${assetPath}/story-center.png`, alt: 'TWF team portrait' },
  { src: `${assetPath}/story-right.png`, alt: 'TWF team celebration' }
]

const partners = [
  {
    name: 'TikTok',
    className: 'partner-tiktok',
    images: [
      { src: `${assetPath}/tiktok-word.svg`, alt: 'TikTok Agency Partner' },
      { src: `${assetPath}/tiktok-note.svg`, alt: '' }
    ]
  },
  {
    name: 'Google',
    className: 'partner-google',
    images: [
      { src: `${assetPath}/google-g.png`, alt: 'Google' },
      { src: `${assetPath}/google-partner.svg`, alt: 'Google Partner' }
    ]
  },
  {
    name: 'Meta',
    className: 'partner-meta',
    images: [
      { src: `${assetPath}/meta-mark.png`, alt: 'Meta' },
      { src: `${assetPath}/meta-partner.svg`, alt: 'Agency Partner' }
    ]
  },
  {
    name: 'Adman Awards',
    className: 'partner-adman',
    images: [{ src: `${assetPath}/admanawards.svg`, alt: 'Adman Awards' }]
  },
  {
    name: 'LINE',
    className: 'partner-line',
    images: [{ src: `${assetPath}/line.svg`, alt: 'LINE Agency Partner' }]
  }
]

const socials = [
  { label: 'Facebook', src: `${assetPath}/facebook.svg`, href: '#' },
  { label: 'X', src: `${assetPath}/x.svg`, href: '#' },
  { label: 'Instagram', src: `${assetPath}/instagram.svg`, href: '#' },
  { label: 'LinkedIn', src: `${assetPath}/linkedin.svg`, href: '#' }
]

const updateHeader = () => {
  const isScrolled = window.scrollY > 18

  if (headerScrolled.value !== isScrolled) {
    headerScrolled.value = isScrolled
  }
}

const previousStory = () => {
  activeStoryIndex.value =
    activeStoryIndex.value === 0 ? storyImages.length - 1 : activeStoryIndex.value - 1
}

const nextStory = () => {
  activeStoryIndex.value =
    activeStoryIndex.value === storyImages.length - 1 ? 0 : activeStoryIndex.value + 1
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
  <div class="page about-figma-page">
    <header :class="['site-header about-figma-header', { scrolled: headerScrolled }]">
      <nav class="about-figma-nav" aria-label="Primary navigation">
        <a class="about-logo" href="/" aria-label="TWF home">
          <img :src="`${assetPath}/twf-logo.svg`" alt="TWF">
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
      <section class="about-title-section">
        <h1>Our Story Begins with the Digital Age</h1>
      </section>

      <section class="about-story-strip" aria-label="TWF agency moments">
        <div class="about-story-track" :style="{ '--story-index': activeStoryIndex }">
          <figure v-for="image in storyImages" :key="image.src">
            <img :src="image.src" :alt="image.alt">
          </figure>
        </div>
        <div class="about-story-controls">
          <button class="story-control previous" type="button" aria-label="Previous image" @click="previousStory">
            <img :src="`${assetPath}/arrow-circle.svg`" alt="">
          </button>
          <button class="story-control next" type="button" aria-label="Next image" @click="nextStory">
            <img :src="`${assetPath}/arrow-circle.svg`" alt="">
          </button>
        </div>
      </section>

      <section class="about-intro-copy">
        <p>
          We provide performance creative services designed to drive measurable growth.
          Our expertise and tailored solutions empower brands to thrive in today's
          ever-changing marketing landscape.
        </p>
        <blockquote>
          "Sky isn't the limit,<br>
          it's where we begin"
        </blockquote>
      </section>

      <section class="about-team-section">
        <div class="about-team-grid">
          <div class="about-team-copy">
            <h2>Our team</h2>
            <p>
              Our success is driven by a team of exceptionally talented individuals.
              Committed to staying ahead of trends, our close-knit team thrives on
              collaboration, transforming your requirements into impactful campaigns.
              When you partner with us, you're not just working with experts; you're
              engaging a team dedicated to crafting solutions that inspire action and
              drive growth. Together, we bring your business goals to life with our
              Performance Creative Services.
            </p>
          </div>
          <img src="/assets/about-figma/team-event.png" alt="TWF team at an event">
        </div>
      </section>

      <section class="about-partners-section" aria-labelledby="partners-title">
        <h2 id="partners-title">Our Partners</h2>
        <div class="about-partner-row">
          <div
            v-for="partner in partners"
            :key="partner.name"
            :class="['about-partner-logo', partner.className]"
          >
            <img
              v-for="image in partner.images"
              :key="image.src"
              :src="image.src"
              :alt="image.alt"
            >
          </div>
        </div>
      </section>

      <section class="about-founder-section">
        <div class="rainbow-rule" />
        <div class="about-founder-card">
          <blockquote>
            " We strive to drive your audience<br>
            to take action and fuel your<br>
            business growth with measurable results."
          </blockquote>
          <img src="/assets/about-figma/founder.png" alt="Narongyod Mahittivanicha">
          <p>
            <strong>Narongyod Mahittivanicha</strong>
            <span>Cofounder</span>
          </p>
        </div>
        <div class="rainbow-rule" />
      </section>
    </main>

    <footer id="contact" class="about-figma-footer">
      <div class="about-footer-inner">
        <div class="about-footer-address">
          <img :src="`${assetPath}/twf-logo-footer.svg`" alt="TWF">
          <p>
            The Web Flight Co., Ltd., Capital Work Place Building, Fl. 8<br>
            1 Soi Chamchan, Klongton-neur, Wattana, Bangkok 10110
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
