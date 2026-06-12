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

const aboutAssetPath = '/assets/about-figma'
const contactAssetPath = '/assets/contact-figma'

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

// ── Form submission state ──────────────────────────────────────────

const formState = reactive({
  name: '',
  email: '',
  company: '',
  budget: '',
  objectives: '',
  consent: false,
  submitting: false,
  submitted: false,
  error: '',
})

async function handleSubmit() {
  formState.submitting = true
  formState.error = ''

  try {
    const api = useApi()
    const response = await api.submitContactForm({
      fullname: formState.name,
      email: formState.email,
      phone: '',
      company_name: formState.company,
      form_type: 'contact',
      objectives: formState.objectives,
      has_accepted: formState.consent,
      'estimated_budget.min': 0,
      'estimated_budget.max': formState.budget ? Number(formState.budget) : 0,
    })

    if (response.statusCode === 200) {
      formState.submitted = true
    } else {
      formState.error = response.message || 'Submission failed. Please try again.'
    }
  } catch (err: any) {
    formState.error = err?.message || 'Network error. Please try again.'
  } finally {
    formState.submitting = false
  }
}

</script>

<template>
  <div class="page contact-figma-page">
    <SiteHeader active-path="/contact" />

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

          <form id="partnership-form" class="contact-form" @submit.prevent="handleSubmit">
            <div v-if="formState.submitted" class="contact-form-success">
              <p>Thank you! We'll be in touch soon.</p>
            </div>

            <template v-else>
              <div class="contact-form-grid">
                <input v-model="formState.name" type="text" name="name" placeholder="Name" autocomplete="name" required>
                <input v-model="formState.email" type="email" name="email" placeholder="Email" autocomplete="email" required>
                <input v-model="formState.company" type="text" name="company" placeholder="Company name/brand" autocomplete="organization" required>
                <input v-model="formState.budget" type="text" name="budget" placeholder="Budget">
              </div>
              <textarea v-model="formState.objectives" name="objectives" placeholder="Objectives" rows="7" required></textarea>
              <label class="contact-consent">
                <input v-model="formState.consent" type="checkbox" name="consent" required>
                <span>
                  By submitting this contact form, you consent to the collection, storage, and processing of your personal information
                </span>
              </label>
              <p v-if="formState.error" class="contact-form-error">{{ formState.error }}</p>
              <button class="contact-pill-button contact-submit" type="submit" :disabled="formState.submitting">
                <span>{{ formState.submitting ? 'Sending...' : 'Submit' }}</span>
                <img :src="`${contactAssetPath}/arrow.svg`" alt="">
              </button>
            </template>
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
