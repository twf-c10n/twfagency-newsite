<script setup lang="ts">
import {
  PublicApiError,
  leadUtmKeys,
  normalizeLeadPhone,
  parseLeadEstimatedBudget,
  submitContactForm,
  type ContactFormPayload
} from '~/utils/api'

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

type ContactLeadField =
  | 'fullname'
  | 'email'
  | 'phone'
  | 'companyName'
  | 'budget'
  | 'objectives'
  | 'hasAccepted'

type ContactLeadFieldErrors = Partial<Record<ContactLeadField, string>>

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

const route = useRoute()
const contactForm = reactive({
  fullname: '',
  email: '',
  phone: '',
  companyName: '',
  budget: '',
  objectives: '',
  hasAccepted: false
})
const isSubmitting = ref(false)
const submitState = ref<'idle' | 'success' | 'error'>('idle')
const submitMessage = ref('')
const fieldErrors = ref<ContactLeadFieldErrors>({})

const readQueryValue = (key: string) => {
  const value = route.query[key]

  if (Array.isArray(value)) {
    return value.find((item) => typeof item === 'string' && item.trim())?.trim() ?? null
  }

  return typeof value === 'string' && value.trim() ? value.trim() : null
}

const getStoredUtmValue = (key: string) => {
  const queryValue = readQueryValue(key)

  if (queryValue) {
    return queryValue
  }

  if (!import.meta.client) {
    return null
  }

  return window.sessionStorage.getItem(`twf_${key}`) || null
}

const getUtmPayload = () => ({
  utm_source: getStoredUtmValue('utm_source'),
  utm_medium: getStoredUtmValue('utm_medium'),
  utm_campaign: getStoredUtmValue('utm_campaign')
})

const mapApiFieldErrors = (errors?: Record<string, string[]>) => {
  const mappedErrors: ContactLeadFieldErrors = {}

  Object.entries(errors ?? {}).forEach(([field, messages]) => {
    const message = messages[0]

    if (!message) {
      return
    }

    if (field === 'fullname') {
      mappedErrors.fullname = message
    } else if (field === 'email') {
      mappedErrors.email = message
    } else if (field === 'phone') {
      mappedErrors.phone = message
    } else if (field === 'company_name') {
      mappedErrors.companyName = message
    } else if (field.startsWith('estimated_budget')) {
      mappedErrors.budget = message
    } else if (field === 'objectives') {
      mappedErrors.objectives = message
    } else if (field === 'has_accepted') {
      mappedErrors.hasAccepted = message
    }
  })

  return mappedErrors
}

const hasFieldError = (field: ContactLeadField) => Boolean(fieldErrors.value[field])

const clearFieldError = (field: ContactLeadField) => {
  if (!fieldErrors.value[field]) {
    return
  }

  const nextErrors = { ...fieldErrors.value }
  delete nextErrors[field]
  fieldErrors.value = nextErrors
}

const resetContactForm = () => {
  contactForm.fullname = ''
  contactForm.email = ''
  contactForm.phone = ''
  contactForm.companyName = ''
  contactForm.budget = ''
  contactForm.objectives = ''
  contactForm.hasAccepted = false
}

const validateContactForm = () => {
  const nextErrors: ContactLeadFieldErrors = {}
  const phone = normalizeLeadPhone(contactForm.phone)
  const budget = parseLeadEstimatedBudget(contactForm.budget)

  if (!contactForm.fullname.trim()) {
    nextErrors.fullname = 'Please enter your name.'
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactForm.email.trim())) {
    nextErrors.email = 'Please enter a valid email address.'
  }

  if (phone.length !== 10) {
    nextErrors.phone = 'Please enter a 10-digit phone number.'
  }

  if (!contactForm.companyName.trim()) {
    nextErrors.companyName = 'Please enter your company or brand name.'
  }

  if (!budget) {
    nextErrors.budget = 'Please enter an estimated budget.'
  }

  if (!contactForm.objectives.trim()) {
    nextErrors.objectives = 'Please tell us about your objectives.'
  }

  if (!contactForm.hasAccepted) {
    nextErrors.hasAccepted = 'Please accept the consent before submitting.'
  }

  fieldErrors.value = nextErrors

  return Object.keys(nextErrors).length === 0
}

const handleContactSubmit = async () => {
  submitState.value = 'idle'
  submitMessage.value = ''

  if (!validateContactForm()) {
    submitState.value = 'error'
    submitMessage.value = 'Please check the highlighted fields.'
    return
  }

  const estimatedBudget = parseLeadEstimatedBudget(contactForm.budget)

  if (!estimatedBudget) {
    return
  }

  const payload: ContactFormPayload = {
    fullname: contactForm.fullname.trim(),
    email: contactForm.email.trim(),
    phone: normalizeLeadPhone(contactForm.phone),
    company_name: contactForm.companyName.trim(),
    estimated_budget: estimatedBudget,
    form_type: 'contact',
    objectives: contactForm.objectives.trim(),
    has_accepted: contactForm.hasAccepted,
    other_service: null,
    services: [],
    ...getUtmPayload()
  }

  isSubmitting.value = true

  try {
    await submitContactForm(payload)
    fieldErrors.value = {}
    submitState.value = 'success'
    submitMessage.value = 'Thank you. Your message has been sent.'
    resetContactForm()
  } catch (error) {
    submitState.value = 'error'
    submitMessage.value = 'Unable to submit the form. Please try again.'

    if (error instanceof PublicApiError) {
      fieldErrors.value = mapApiFieldErrors(error.errors)
      submitMessage.value = error.message || submitMessage.value
    }
  } finally {
    isSubmitting.value = false
  }
}

onMounted(() => {
  if (!import.meta.client) {
    return
  }

  leadUtmKeys.forEach((key) => {
    const value = readQueryValue(key)

    if (value) {
      window.sessionStorage.setItem(`twf_${key}`, value)
    }
  })
})

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

          <form id="partnership-form" class="contact-form" novalidate @submit.prevent="handleContactSubmit">
            <div class="contact-form-grid">
              <label :class="['contact-field', { 'has-error': hasFieldError('fullname') }]">
                <input
                  v-model="contactForm.fullname"
                  type="text"
                  name="fullname"
                  placeholder="Name"
                  autocomplete="name"
                  :aria-invalid="hasFieldError('fullname')"
                  :aria-describedby="fieldErrors.fullname ? 'contact-fullname-error' : undefined"
                  @input="clearFieldError('fullname')"
                >
                <small v-if="fieldErrors.fullname" id="contact-fullname-error">{{ fieldErrors.fullname }}</small>
              </label>

              <label :class="['contact-field', { 'has-error': hasFieldError('email') }]">
                <input
                  v-model="contactForm.email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  autocomplete="email"
                  :aria-invalid="hasFieldError('email')"
                  :aria-describedby="fieldErrors.email ? 'contact-email-error' : undefined"
                  @input="clearFieldError('email')"
                >
                <small v-if="fieldErrors.email" id="contact-email-error">{{ fieldErrors.email }}</small>
              </label>

              <label :class="['contact-field', { 'has-error': hasFieldError('phone') }]">
                <input
                  v-model="contactForm.phone"
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  autocomplete="tel"
                  inputmode="tel"
                  :aria-invalid="hasFieldError('phone')"
                  :aria-describedby="fieldErrors.phone ? 'contact-phone-error' : undefined"
                  @input="clearFieldError('phone')"
                >
                <small v-if="fieldErrors.phone" id="contact-phone-error">{{ fieldErrors.phone }}</small>
              </label>

              <label :class="['contact-field', { 'has-error': hasFieldError('companyName') }]">
                <input
                  v-model="contactForm.companyName"
                  type="text"
                  name="company_name"
                  placeholder="Company name/brand"
                  autocomplete="organization"
                  :aria-invalid="hasFieldError('companyName')"
                  :aria-describedby="fieldErrors.companyName ? 'contact-company-error' : undefined"
                  @input="clearFieldError('companyName')"
                >
                <small v-if="fieldErrors.companyName" id="contact-company-error">{{ fieldErrors.companyName }}</small>
              </label>

              <label :class="['contact-field contact-field-wide', { 'has-error': hasFieldError('budget') }]">
                <input
                  v-model="contactForm.budget"
                  type="text"
                  name="budget"
                  placeholder="Budget"
                  inputmode="decimal"
                  :aria-invalid="hasFieldError('budget')"
                  :aria-describedby="fieldErrors.budget ? 'contact-budget-error' : undefined"
                  @input="clearFieldError('budget')"
                >
                <small v-if="fieldErrors.budget" id="contact-budget-error">{{ fieldErrors.budget }}</small>
              </label>
            </div>

            <label :class="['contact-field contact-message-field', { 'has-error': hasFieldError('objectives') }]">
              <textarea
                v-model="contactForm.objectives"
                name="objectives"
                placeholder="Objectives"
                rows="7"
                :aria-invalid="hasFieldError('objectives')"
                :aria-describedby="fieldErrors.objectives ? 'contact-objectives-error' : undefined"
                @input="clearFieldError('objectives')"
              ></textarea>
              <small v-if="fieldErrors.objectives" id="contact-objectives-error">{{ fieldErrors.objectives }}</small>
            </label>

            <label :class="['contact-consent', { 'has-error': hasFieldError('hasAccepted') }]">
              <input
                v-model="contactForm.hasAccepted"
                type="checkbox"
                name="consent"
                :aria-invalid="hasFieldError('hasAccepted')"
                @change="clearFieldError('hasAccepted')"
              >
              <span>
                By submitting this contact form, you consent to the collection, storage, and processing of your personal information
              </span>
            </label>
            <small v-if="fieldErrors.hasAccepted" class="contact-error">{{ fieldErrors.hasAccepted }}</small>

            <p
              v-if="submitMessage"
              :class="['contact-status', `contact-status-${submitState}`]"
              :role="submitState === 'error' ? 'alert' : 'status'"
            >
              {{ submitMessage }}
            </p>

            <button class="contact-pill-button contact-submit" type="submit" :disabled="isSubmitting">
              <span>{{ isSubmitting ? 'Sending...' : 'Submit' }}</span>
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
