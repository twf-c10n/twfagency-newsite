<script setup lang="ts">
useHead({
  title: 'Contact TWF Agency | Start a Partnership',
  meta: [
    {
      name: 'description',
      content:
        'Start a partnership with The Web Flight Co., Ltd. Contact TWF Agency for digital marketing, creative, media, and growth services.'
    }
  ]
})

const menuOpen = ref(false)
const headerScrolled = ref(false)

const aboutAssetPath = '/assets/about-figma'
const contactAssetPath = '/assets/contact-figma'

const navItems = [
  { label: 'Home', href: '/#home' },
  { label: 'Our Services', href: '/services' },
  { label: 'Projects', href: '/project' },
  { label: 'Photography', href: '/photography' },
  { label: 'Blog', href: '/blog' },
  { label: 'About Us', href: '/about' }
]

const contactDetails = [
  { label: 'Phone', value: '(+66) 02 024 9759', href: 'tel:+6620249759' },
  { label: 'Mail', value: 'mailus@twfagency.com', href: 'mailto:mailus@twfagency.com' }
]

const socialLinks = [
  { label: 'Facebook', src: `${contactAssetPath}/facebook-small.svg`, href: '#' },
  { label: 'Instagram', src: `${contactAssetPath}/instagram-small.svg`, href: '#' },
  { label: 'TikTok', src: `${contactAssetPath}/tiktok-small.svg`, href: '#' },
  { label: 'LinkedIn', src: `${contactAssetPath}/linkedin-small.svg`, href: '#' }
]

const footerSocials = [
  { label: 'Facebook', src: `${aboutAssetPath}/facebook.svg`, href: '#' },
  { label: 'X', src: `${aboutAssetPath}/x.svg`, href: '#' },
  { label: 'Instagram', src: `${aboutAssetPath}/instagram.svg`, href: '#' },
  { label: 'LinkedIn', src: `${aboutAssetPath}/linkedin.svg`, href: '#' }
]

const updateHeader = () => {
  headerScrolled.value = window.scrollY > 18
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
  <div class="page contact-figma-page">
    <header :class="['site-header about-figma-header', { scrolled: headerScrolled }]">
      <nav class="about-figma-nav" aria-label="Primary navigation">
        <a class="about-logo" href="/#home" aria-label="TWF home">
          <img :src="`${aboutAssetPath}/twf-logo.svg`" alt="TWF">
        </a>

        <div :class="['nav-links about-figma-links', { open: menuOpen }]">
          <a
            v-for="item in navItems"
            :key="item.href"
            :href="item.href"
            @click="menuOpen = false"
          >
            {{ item.label }}
          </a>
        </div>

        <a class="nav-contact about-contact active" href="/contact" aria-current="page">Contact</a>
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
      <section class="contact-hero">
        <h1>Start a partnership</h1>
        <a class="contact-pill-button" href="#partnership-form">
          <span>Start a partnership</span>
          <img :src="`${contactAssetPath}/arrow.svg`" alt="">
        </a>
      </section>

      <section class="contact-content" aria-label="Contact information and partnership form">
        <div class="contact-column">
          <article class="contact-panel contact-info-panel">
            <div class="contact-panel-inner">
              <p class="contact-kicker">Looking to make an impact ?</p>
              <h2>The Web Flight Co., Ltd.,</h2>
              <p class="contact-address">
                Capital Work Place Building, Fl. 8, 1 Soi Chamchan, Klongton-neur, Wattana, Bangkok 10110
              </p>
            </div>

            <div class="contact-detail-grid">
              <div v-for="detail in contactDetails" :key="detail.label" class="contact-detail">
                <p>{{ detail.label }}</p>
                <a :href="detail.href">{{ detail.value }}</a>
              </div>

              <div class="contact-detail contact-friends">
                <p>Let's be friends</p>
                <div>
                  <a v-for="social in socialLinks" :key="social.label" :href="social.href" :aria-label="social.label">
                    <img :src="social.src" alt="">
                  </a>
                </div>
              </div>
            </div>
          </article>

          <article class="contact-panel contact-map-panel" aria-label="TWF office map">
            <img :src="`${contactAssetPath}/hq-location-map.png`" alt="Map view around TWF office">
            <div class="contact-map-overlay">
              <span class="contact-map-pin">
                <img :src="`${contactAssetPath}/map-pin.svg`" alt="">
              </span>
              <span>LAT 51.5045 LON -0.0195</span>
            </div>
          </article>
        </div>

        <div class="contact-column">
          <article class="contact-panel contact-intro-panel">
            <div class="contact-panel-inner">
              <p class="contact-kicker">More about me</p>
              <h2>The Web Flight Co., Ltd.,</h2>
              <p class="contact-address">
                Capital Work Place Building, Fl. 8, 1 Soi Chamchan, Klongton-neur, Wattana, Bangkok 10110
              </p>
            </div>
          </article>

          <form id="partnership-form" class="contact-form" action="mailto:mailus@twfagency.com" method="post" enctype="text/plain">
            <div class="contact-form-grid">
              <input type="text" name="name" placeholder="Name" autocomplete="name">
              <input type="email" name="email" placeholder="Email" autocomplete="email">
              <input type="text" name="company" placeholder="Company name/brand" autocomplete="organization">
              <input type="text" name="budget" placeholder="Budget">
            </div>
            <textarea name="objectives" placeholder="Objectives" rows="7"></textarea>
            <label class="contact-consent">
              <input type="checkbox" name="consent">
              <span>
                By submitting this contact form, you consent to the collection, storage, and processing of your personal information
              </span>
            </label>
            <button class="contact-pill-button contact-submit" type="submit">
              <span>Submit</span>
              <img :src="`${contactAssetPath}/arrow.svg`" alt="">
            </button>
          </form>
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
          <a v-for="social in footerSocials" :key="social.label" :href="social.href" :aria-label="social.label">
            <img :src="social.src" alt="">
          </a>
        </div>
      </div>
      <p class="about-copyright">Copyright ©2022 DIGITAL MARKETING CONSULTANCY</p>
    </footer>
  </div>
</template>
