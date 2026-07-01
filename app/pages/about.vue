<script setup lang="ts">
usePageSeo({
  title: 'About TWF Agency | Our Story Begins with the Digital Age',
  description:
    'TWF Agency is a performance creative services team driving measurable growth for brands in the digital age.',
  path: '/about',
  image: '/assets/about-figma/team-event.webp'
})

const assetPath = '/assets/about-figma'

const storyImages = [
  { src: `${assetPath}/story-left.webp`, alt: 'TWF agency event installation', width: 880, height: 490 },
  { src: `${assetPath}/story-center.webp`, alt: 'TWF team portrait', width: 879, height: 490 },
  { src: `${assetPath}/story-right.webp`, alt: 'TWF team celebration', width: 879, height: 492 }
]

const storySets = [storyImages, storyImages]

const partners = [
  {
    name: 'TikTok',
    className: 'partner-tiktok',
    images: [
      { src: `${assetPath}/tiktok-word.svg`, alt: 'TikTok Agency Partner', width: 144, height: 41 },
      { src: `${assetPath}/tiktok-note.svg`, alt: '', width: 83, height: 11 }
    ]
  },
  {
    name: 'Google',
    className: 'partner-google',
    images: [
      { src: `${assetPath}/google-g.webp`, alt: 'Google', width: 123, height: 123 },
      { src: `${assetPath}/google-partner.svg`, alt: 'Google Partner', width: 79, height: 11 }
    ]
  },
  {
    name: 'Meta',
    className: 'partner-meta',
    images: [
      { src: `${assetPath}/meta-mark.webp`, alt: 'Meta', width: 123, height: 123 },
      { src: `${assetPath}/meta-partner.svg`, alt: 'Agency Partner', width: 66, height: 38 }
    ]
  },
  {
    name: 'Adman Awards',
    className: 'partner-adman',
    images: [{ src: `${assetPath}/admanawards.svg`, alt: 'Adman Awards', width: 200, height: 102 }]
  },
  {
    name: 'LINE',
    className: 'partner-line',
    images: [{ src: `${assetPath}/line.svg`, alt: 'LINE Agency Partner', width: 200, height: 102 }]
  }
]

const socials = [
  { label: 'Facebook', src: `${assetPath}/facebook.svg`, href: '#' },
  { label: 'X', src: `${assetPath}/x.svg`, href: '#' },
  { label: 'Instagram', src: `${assetPath}/instagram.svg`, href: '#' },
  { label: 'LinkedIn', src: `${assetPath}/linkedin.svg`, href: '#' }
]

</script>

<template>
  <div class="page about-figma-page">
    <SiteHeader active-path="/about" />

    <main>
      <section class="about-title-section">
        <h1>Our Story Begins with the Digital Age</h1>
      </section>

      <section class="about-story-strip" aria-label="TWF agency moments">
        <div class="about-story-track">
          <div v-for="(set, setIndex) in storySets" :key="setIndex" class="about-story-set">
            <figure v-for="image in set" :key="`${setIndex}-${image.src}`">
              <img
                :src="image.src"
                :alt="setIndex === 0 ? image.alt : ''"
                :width="image.width"
                :height="image.height"
                loading="lazy"
                decoding="async"
              >
            </figure>
          </div>
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
          <img
            src="/assets/about-figma/team-event.webp"
            alt="TWF team at an event"
            width="880"
            height="489"
            loading="lazy"
            decoding="async"
          >
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
              :width="image.width"
              :height="image.height"
              loading="lazy"
              decoding="async"
            >
          </div>
        </div>
      </section>

      <section class="about-founder-section">
        <div class="rainbow-rule" />
        <div class="about-founder-card">
          <blockquote>
            "We strive to drive your audience<br>
            to take action and fuel your<br>
            business growth with measurable results."
          </blockquote>
          <img
            src="/assets/about-figma/founder.webp"
            alt="Narongyod Mahittivanicha"
            width="532"
            height="532"
            loading="lazy"
            decoding="async"
          >
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
          <img :src="`${assetPath}/twf-logo-footer.svg`" alt="TWF" width="123" height="47" loading="lazy" decoding="async">
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
