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

const aboutAssetPath = '/assets/about-figma'
const blogAssetPath = '/assets/blog-figma'

// ── Default static data ────────────────────────────────────────────

const defaultArticles = Array.from({ length: 6 }, (_, index) => ({
  id: `line-commerce-${index + 1}`,
  category: 'LINE Commerce',
  title: 'เครื่องมือทำเงินแห่งยุคดิจิทัล!',
  href: '#'
}))

const defaultSocials = [
  { label: 'Facebook', src: `${aboutAssetPath}/facebook.svg`, href: '#' },
  { label: 'X', src: `${aboutAssetPath}/x.svg`, href: '#' },
  { label: 'Instagram', src: `${aboutAssetPath}/instagram.svg`, href: '#' },
  { label: 'LinkedIn', src: `${aboutAssetPath}/linkedin.svg`, href: '#' }
]

// ── Reactive state ─────────────────────────────────────────────────

const articles = ref(defaultArticles)
const socials = ref(defaultSocials)
const loading = ref(false)

// ── Fetch from API ─────────────────────────────────────────────────

onMounted(async () => {
  loading.value = true
  try {
    const api = useApi()
    const result = await api.fetchBlogs(1, 10)
    if (result?.blogs && Array.isArray(result.blogs) && result.blogs.length > 0) {
      articles.value = result.blogs.map((blog: any, i: number) => ({
        id: blog.slug || `blog-${i}`,
        category: blog.category || 'Article',
        title: blog.title || defaultArticles[i]?.title || '',
        href: blog.url || `/blog/${blog.slug}`,
        image: blog.imageUrl || `${blogAssetPath}/article-product.png`,
        date: blog.postDate,
        author: blog.authorName,
      }))
    }
  } catch {
    // API unavailable — keep fallback
  } finally {
    loading.value = false
  }
})

</script>

<template>
  <div class="page blog-figma-page">
    <SiteHeader active-path="/blog" />

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
