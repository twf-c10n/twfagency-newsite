<script setup lang="ts">
usePageSeo({
  title: 'Digital Marketing Blog | TWF Agency',
  description:
    'Read digital marketing, LINE Commerce, media, creative, and performance marketing articles from TWF Agency.',
  path: '/blog',
  image: '/assets/blog-figma/article-product.webp'
})

const aboutAssetPath = '/assets/about-figma'
const blogAssetPath = '/assets/blog-figma'
const blogListingUrl = 'https://twfdigital.com/blogs/'

const articles = Array.from({ length: 6 }, (_, index) => ({
  id: `line-commerce-${index + 1}`,
  category: 'LINE Commerce',
  title: 'เครื่องมือทำเงินแห่งยุคดิจิทัล!',
  href: blogListingUrl
}))

const socials = [
  { label: 'Facebook', src: `${aboutAssetPath}/facebook.svg`, href: '#' },
  { label: 'X', src: `${aboutAssetPath}/x.svg`, href: '#' },
  { label: 'Instagram', src: `${aboutAssetPath}/instagram.svg`, href: '#' },
  { label: 'LinkedIn', src: `${aboutAssetPath}/linkedin.svg`, href: '#' }
]

</script>

<template>
  <div class="page blog-figma-page">
    <SiteHeader active-path="/blog" />

    <main>
      <h1 class="visually-hidden">Digital Marketing Blog by TWF Agency</h1>

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
              <img :src="`${blogAssetPath}/article-product.webp`" alt="" width="296" height="165" loading="lazy" decoding="async">
              <img :src="`${blogAssetPath}/article-gradient.webp`" alt="" width="3834" height="2496" loading="lazy" decoding="async">
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

        <a class="blog-more-button" :href="blogListingUrl">
          <span>บทความเพิ่มเติม</span>
          <b aria-hidden="true">→</b>
        </a>
      </section>
    </main>

    <footer class="about-figma-footer">
      <div class="about-footer-inner">
        <div class="about-footer-address">
          <img :src="`${aboutAssetPath}/twf-logo-footer.svg`" alt="TWF" width="123" height="47" loading="lazy" decoding="async">
          <p>
            The Web Flight Co., Ltd., Capital Work Place Building, Fl. 8, 1<br>
            Soi Chamchan, Klongton-neur, Wattana, Bangkok 10110
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
