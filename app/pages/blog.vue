<script setup lang="ts">
useHead({
  title: 'Blog | TWF Agency',
  meta: [
    {
      name: 'description',
      content:
        'Read digital marketing, LINE Commerce, media, creative, and performance marketing articles from TWF Agency.'
    }
  ]
})

const menuOpen = ref(false)
const headerScrolled = ref(false)

const aboutAssetPath = '/assets/about-figma'
const blogAssetPath = '/assets/blog-figma'

const navItems = [
  { label: 'Home', href: '/#home' },
  { label: 'Our Services', href: '/services' },
  { label: 'Projects', href: '/project' },
  { label: 'Photography', href: '/photography' },
  { label: 'Blog', href: '/blog', active: true },
  { label: 'About Us', href: '/about' }
]

const articles = Array.from({ length: 6 }, (_, index) => ({
  id: `line-commerce-${index + 1}`,
  category: 'LINE Commerce',
  title: 'เครื่องมือทำเงินแห่งยุคดิจิทัล!',
  href: '#'
}))

const socials = [
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
  <div class="page blog-figma-page">
    <header :class="['site-header about-figma-header', { scrolled: headerScrolled }]">
      <nav class="about-figma-nav" aria-label="Primary navigation">
        <a class="about-logo" href="/#home" aria-label="TWF home">
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
      <section class="blog-search-section" aria-label="Blog search">
        <form class="blog-search-pill" action="/blog" role="search">
          <input type="search" name="q" aria-label="Search articles" placeholder="Search">
          <button type="submit" aria-label="Search">
            <span>Search</span>
            <b aria-hidden="true">→</b>
          </button>
        </form>
      </section>

      <section class="blog-list-section" aria-label="Articles">
        <div class="blog-card-grid">
          <article v-for="article in articles" :key="article.id" class="blog-card">
            <figure class="blog-card-media">
              <img :src="`${blogAssetPath}/article-product.png`" alt="">
              <img :src="`${blogAssetPath}/article-gradient.png`" alt="">
            </figure>

            <div class="blog-card-body">
              <p>{{ article.category }}</p>
              <h2>{{ article.title }}</h2>
              <a :href="article.href">
                <span>Click Here</span>
                <b aria-hidden="true">→</b>
              </a>
            </div>
          </article>
        </div>

        <a class="blog-more-button" href="#">
          <span>บทความเพิ่มเติม</span>
          <b aria-hidden="true">→</b>
        </a>
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
