<script setup lang="ts">
useHead({
  title: 'Start a Partnership | TWF Agency',
  meta: [
    {
      name: 'description',
      content:
        'Start a partnership with TWF Agency across media strategy, performance marketing, creative, CRM, commerce, analytics, and technology services.'
    }
  ]
})

const aboutAssetPath = '/assets/about-figma'

const interestOptions = [
  'Media Strategy',
  'Owned E-Commerce Channel Enablement',
  'Social Listening Research',
  'Performance Marketing',
  'Influencer & KOL Affiliate Marketing',
  'Creative Solutions',
  'CRM Solutions',
  'AI, Data, Analytics & Tech',
  'Other'
]

const socials = [
  { label: 'Facebook', src: `${aboutAssetPath}/facebook.svg`, href: '#' },
  { label: 'X', src: `${aboutAssetPath}/x.svg`, href: '#' },
  { label: 'Instagram', src: `${aboutAssetPath}/instagram.svg`, href: '#' },
  { label: 'LinkedIn', src: `${aboutAssetPath}/linkedin.svg`, href: '#' }
]
</script>

<template>
  <div class="page partnership-page">
    <SiteHeader active-path="/partnership" />

    <main class="partnership-main">
      <form class="partnership-form" action="mailto:mailus@twfagency.com" method="post" enctype="text/plain">
        <header class="partnership-heading">
          <h1><em>Hello</em> <span>Let's Work Together</span></h1>
        </header>

        <section class="partnership-section" aria-labelledby="interest-title">
          <p id="interest-title" class="partnership-label">I'm Interested in:</p>
          <div class="partnership-interest-grid">
            <label v-for="option in interestOptions" :key="option" class="partnership-check">
              <input type="checkbox" name="interest" :value="option">
              <span>{{ option }}</span>
            </label>
          </div>
        </section>

        <section class="partnership-section" aria-label="Partnership details">
          <p class="partnership-label">More about me:</p>
          <div class="partnership-field-grid">
            <label class="partnership-field span-full">
              <span>Name</span>
              <input type="text" name="name" autocomplete="name">
            </label>

            <label class="partnership-field">
              <span>E-mail</span>
              <input type="email" name="email" autocomplete="email">
            </label>

            <label class="partnership-field">
              <span>Phone</span>
              <input type="tel" name="phone" autocomplete="tel">
            </label>

            <label class="partnership-field">
              <span>Company name/brand</span>
              <input type="text" name="company" autocomplete="organization">
            </label>

            <label class="partnership-field">
              <span>Budget</span>
              <input type="text" name="budget">
            </label>

            <label class="partnership-field span-full">
              <span>Objectives</span>
              <textarea name="objectives" rows="2"></textarea>
            </label>
          </div>

          <label class="partnership-consent">
            <input type="checkbox" name="consent">
            <span>
              By submitting this contact form, you consent to the collection, storage, and processing of your personal information.
            </span>
          </label>
        </section>

        <div class="partnership-actions">
          <a class="partnership-back" href="/contact">Back</a>
          <button class="partnership-submit" type="submit">Submit</button>
        </div>
      </form>
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
