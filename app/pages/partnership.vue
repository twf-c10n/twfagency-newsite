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

const defaultInterestOptions = [
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

const defaultSocials = [
  { label: 'Facebook', src: `${aboutAssetPath}/facebook.svg`, href: '#' },
  { label: 'X', src: `${aboutAssetPath}/x.svg`, href: '#' },
  { label: 'Instagram', src: `${aboutAssetPath}/instagram.svg`, href: '#' },
  { label: 'LinkedIn', src: `${aboutAssetPath}/linkedin.svg`, href: '#' }
]

// ── Reactive state ─────────────────────────────────────────────────

const interestOptions = ref(defaultInterestOptions)
const socials = ref(defaultSocials)

// ── Form state ─────────────────────────────────────────────────────

const formState = reactive({
  interests: [] as string[],
  name: '',
  email: '',
  phone: '',
  company: '',
  budget: '',
  objectives: '',
  consent: false,
  submitting: false,
  submitted: false,
  error: '',
})

function toggleInterest(option: string) {
  const idx = formState.interests.indexOf(option)
  if (idx === -1) {
    formState.interests.push(option)
  } else {
    formState.interests.splice(idx, 1)
  }
}

async function handleSubmit() {
  formState.submitting = true
  formState.error = ''

  try {
    const api = useApi()
    const response = await api.submitContactForm({
      fullname: formState.name,
      email: formState.email,
      phone: formState.phone,
      company_name: formState.company,
      form_type: 'partnership',
      objectives: formState.objectives,
      other_service: formState.interests.join(', '),
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

// ── Fetch from API ─────────────────────────────────────────────────

onMounted(async () => {
  try {
    const api = useApi()
    const data = await api.fetchPage<Record<string, any>>('contact-us')
    if (data?.interest_options && Array.isArray(data.interest_options)) {
      interestOptions.value = data.interest_options
    }
  } catch {
    // API unavailable — keep fallback
  }
})

</script>

<template>
  <div class="page partnership-page">
    <SiteHeader active-path="/partnership" />

    <main class="partnership-main">
      <form class="partnership-form" @submit.prevent="handleSubmit">
        <header class="partnership-heading">
          <h1><em>Hello</em> <span>Let's Work Together</span></h1>
        </header>

        <div v-if="formState.submitted" class="partnership-success">
          <p>Thank you! We'll review your inquiry and get back to you shortly.</p>
        </div>

        <template v-else>
          <section class="partnership-section" aria-labelledby="interest-title">
            <p id="interest-title" class="partnership-label">I'm Interested in:</p>
            <div class="partnership-interest-grid">
              <label v-for="option in interestOptions" :key="option" class="partnership-check">
                <input
                  type="checkbox"
                  :value="option"
                  :checked="formState.interests.includes(option)"
                  @change="toggleInterest(option)"
                >
                <span>{{ option }}</span>
              </label>
            </div>
          </section>

          <section class="partnership-section" aria-label="Partnership details">
            <p class="partnership-label">More about me:</p>
            <div class="partnership-field-grid">
              <label class="partnership-field span-full">
                <span>Name</span>
                <input v-model="formState.name" type="text" name="name" autocomplete="name" required>
              </label>

              <label class="partnership-field">
                <span>E-mail</span>
                <input v-model="formState.email" type="email" name="email" autocomplete="email" required>
              </label>

              <label class="partnership-field">
                <span>Phone</span>
                <input v-model="formState.phone" type="tel" name="phone" autocomplete="tel" required>
              </label>

              <label class="partnership-field">
                <span>Company name/brand</span>
                <input v-model="formState.company" type="text" name="company" autocomplete="organization" required>
              </label>

              <label class="partnership-field">
                <span>Budget</span>
                <input v-model="formState.budget" type="text" name="budget">
              </label>

              <label class="partnership-field span-full">
                <span>Objectives</span>
                <textarea v-model="formState.objectives" name="objectives" rows="2" required></textarea>
              </label>
            </div>

            <label class="partnership-consent">
              <input v-model="formState.consent" type="checkbox" name="consent" required>
              <span>
                By submitting this contact form, you consent to the collection, storage, and processing of your personal information.
              </span>
            </label>
          </section>

          <p v-if="formState.error" class="partnership-error">{{ formState.error }}</p>

          <div class="partnership-actions">
            <a class="partnership-back" href="/contact">Back</a>
            <button class="partnership-submit" type="submit" :disabled="formState.submitting">
              {{ formState.submitting ? 'Sending...' : 'Submit' }}
            </button>
          </div>
        </template>
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
