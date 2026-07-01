<script setup lang="ts">
usePageSeo({
  title: 'Photography & Production | TWF Agency',
  description:
    'Commercial photography, cinema-grade video production, short-form content, drone operations, VFX, and color finishing by TWF Agency.',
  path: '/photography',
  image: '/assets/photography-figma/automotive-campaign.webp'
})

const aboutAssetPath = '/assets/about-figma'
const assetPath = '/assets/photography-figma'

const tickerItems = [
  'Commercial Photography',
  '4K Cinematography',
  'Drone Ops',
  'Post-Production VFX',
  'Short-Form Virality'
]

const expertiseCards = [
  {
    icon: 'aperture',
    title: 'Commercial Photography',
    description:
      'High-resolution stills engineered for global campaigns and elite product launches.'
  },
  {
    icon: 'camera',
    title: 'Video Production',
    description:
      'Cinema-grade narrative commercial work from storyboarding to final cut.'
  },
  {
    icon: 'bolt',
    title: 'Short-Form TikTok / IG',
    description:
      'High-velocity, algorithm-optimized vertical content designed to disrupt feeds.'
  },
  {
    icon: 'layers',
    title: 'Pre-to-Post VFX & Color',
    description:
      'End-to-end finishing, industry-standard color grading and seamless visual effects.'
  }
]

const portfolioItems = [
  {
    className: 'large',
    title: 'Apex Motors: "Nightfall"',
    meta: 'Motion • Automotive',
    src: `${assetPath}/automotive-campaign.webp`,
    alt: 'Black sports car in a neon-lit studio',
    width: 512,
    height: 512
  },
  {
    className: 'tall',
    title: 'Vogue Vanguard',
    meta: 'Stills • Editorial',
    src: `${assetPath}/fashion-editorial.webp`,
    alt: 'Editorial portrait lit with pink and green accents',
    width: 512,
    height: 512
  },
  {
    className: 'wide',
    title: 'Air Defy Launch',
    meta: 'Commercial • Apparel',
    src: `${assetPath}/product-drop.webp`,
    alt: 'Black running shoe exploding through colorful powder',
    width: 512,
    height: 512
  },
  {
    className: 'wide mono',
    title: 'Sonic Architecture',
    meta: 'Motion • Tech',
    src: `${assetPath}/tech-commercial.webp`,
    alt: 'Monochrome reel-to-reel recording equipment',
    width: 512,
    height: 512
  }
]

const socials = [
  { label: 'Facebook', src: `${aboutAssetPath}/facebook.svg`, href: '#' },
  { label: 'X', src: `${aboutAssetPath}/x.svg`, href: '#' },
  { label: 'Instagram', src: `${aboutAssetPath}/instagram.svg`, href: '#' },
  { label: 'LinkedIn', src: `${aboutAssetPath}/linkedin.svg`, href: '#' }
]

</script>

<template>
  <div class="page photography-page">
    <SiteHeader active-path="/photography" />

    <main>
      <section class="photo-hero">
        <h1>Photography &amp;<br>Production</h1>
        <p>
          We are a high-end digital agency merging uncompromising technical mastery
          with unbounded creativity. For 15 years, we have engineered digital experiences
          for high-growth tech firms and luxury innovators.
        </p>
      </section>

      <section class="photo-ticker" aria-label="Production capabilities">
        <div class="photo-ticker-track">
          <template v-for="set in 2" :key="set">
            <span v-for="item in tickerItems" :key="`${set}-${item}`">
              {{ item }}
            </span>
          </template>
        </div>
      </section>

      <section class="photo-section photo-expertise" aria-labelledby="photo-expertise-title">
        <div class="photo-section-head">
          <div>
            <p class="photo-kicker">Our Expertise</p>
            <h2 id="photo-expertise-title">Our Arsenel</h2>
          </div>
          <p>
            We dismantle the traditional agency model to build something faster,
            bolder, and more focused on your bottom line. No fluff, just kinetic impact.
          </p>
        </div>

        <div class="photo-card-grid">
          <article v-for="card in expertiseCards" :key="card.title" class="photo-expertise-card">
            <span :class="['photo-card-icon', card.icon]" aria-hidden="true" />
            <h3>{{ card.title }}</h3>
            <p>{{ card.description }}</p>
          </article>
        </div>
      </section>

      <section class="photo-section photo-archive" aria-labelledby="photo-archive-title">
        <div class="photo-archive-head">
          <div>
            <h2 id="photo-archive-title">The Archive</h2>
            <p>A curated selection of our most dominant visual campaigns.</p>
          </div>
          <div class="photo-filters" aria-label="Portfolio filters">
            <button type="button" class="active">All</button>
            <button type="button">Stills</button>
            <button type="button">Motion</button>
          </div>
        </div>

        <div class="photo-masonry">
          <article
            v-for="item in portfolioItems"
            :key="item.title"
            :class="['photo-work', item.className]"
          >
            <img
              :src="item.src"
              :alt="item.alt"
              :width="item.width"
              :height="item.height"
              loading="lazy"
              decoding="async"
            >
            <div class="photo-work-copy">
              <span>{{ item.meta }}</span>
              <h3>{{ item.title }}</h3>
            </div>
          </article>
        </div>
      </section>

      <section class="photo-cta">
        <h2>Bring Your Story to Life</h2>
        <a class="photo-cta-button" href="/contact">
          <span>Book a Production</span>
          <b aria-hidden="true">›</b>
        </a>
      </section>
    </main>

    <footer class="about-figma-footer">
      <div class="about-footer-inner">
        <div class="about-footer-address">
          <img :src="`${aboutAssetPath}/twf-logo-footer.svg`" alt="TWF" width="123" height="47" loading="lazy" decoding="async">
          <p>
            The Web Flight Co., Ltd., Capital Work Place Building, Fl. 8<br>
            1 Soi Chamchan, Klongton-neur, Wattana, Bangkok 10110
          </p>
        </div>
        <div class="about-footer-socials">
          <a v-for="social in socials" :key="social.label" :href="social.href" :aria-label="social.label">
            <img :src="social.src" alt="" width="29" height="29" loading="lazy" decoding="async">
          </a>
        </div>
      </div>
      <p class="about-copyright">Copyright ©2022 DIGITAL MARKETING CONSULTANCY</p>
    </footer>
  </div>
</template>
