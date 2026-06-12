<script setup lang="ts">
import {
  PublicApiError,
  getContactUsPage,
  leadUtmKeys,
  normalizeLeadPhone,
  parseLeadEstimatedBudget,
  submitContactForm,
  type ContactFormPayload,
  type ContactService,
  type ContactUsPage
} from '~/utils/api'

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

type InterestOption = {
  id: string
  label: string
  serviceId?: string
  isOther?: boolean
}

type PartnershipField =
  | 'fullname'
  | 'email'
  | 'phone'
  | 'companyName'
  | 'budget'
  | 'objectives'
  | 'hasAccepted'
  | 'services'

type PartnershipFieldErrors = Partial<Record<PartnershipField, string>>

const fallbackInterestLabels = [
  'Media Strategy',
  'Owned E-Commerce Channel Enablement',
  'Social Listening Research',
  'Performance Marketing',
  'Influencer & KOL Affiliate Marketing',
  'Creative Solutions',
  'CRM Solutions',
  'AI, Data, Analytics & Tech'
]

const socials = [
  { label: 'Facebook', src: `${aboutAssetPath}/facebook.svg`, href: '#' },
  { label: 'X', src: `${aboutAssetPath}/x.svg`, href: '#' },
  { label: 'Instagram', src: `${aboutAssetPath}/instagram.svg`, href: '#' },
  { label: 'LinkedIn', src: `${aboutAssetPath}/linkedin.svg`, href: '#' }
]

const { data: contactPage } = await useAsyncData<ContactUsPage>(
  'partnership-contact-page',
  getContactUsPage
)

const form = reactive({
  fullname: '',
  email: '',
  phone: '',
  companyName: '',
  budget: '',
  objectives: '',
  hasAccepted: false
})
const selectedInterestIds = ref<string[]>([])
const isSubmitting = ref(false)
const submitState = ref<'idle' | 'success' | 'error'>('idle')
const submitMessage = ref('')
const fieldErrors = ref<PartnershipFieldErrors>({})
const route = useRoute()

const normalizeOptionId = (label: string, index: number) => {
  return `fallback-${index}-${label.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`
}

const getServiceLabel = (service: ContactService) => {
  return service.name_en || service.name_th || 'Digital Marketing Service'
}

const interestOptions = computed<InterestOption[]>(() => {
  const cmsOptions = (contactPage.value?.services ?? [])
    .filter((service) => service.id)
    .map((service) => ({
      id: service.id,
      label: getServiceLabel(service),
      serviceId: service.id
    }))

  const baseOptions = cmsOptions.length
    ? cmsOptions
    : fallbackInterestLabels.map((label, index) => ({
        id: normalizeOptionId(label, index),
        label
      }))

  return [
    ...baseOptions,
    {
      id: 'other-service',
      label: 'Other',
      isOther: true
    }
  ]
})

const selectedOptions = computed(() => {
  return interestOptions.value.filter((option) => selectedInterestIds.value.includes(option.id))
})

const selectedServiceIds = computed(() => {
  return selectedOptions.value
    .map((option) => option.serviceId)
    .filter((serviceId): serviceId is string => Boolean(serviceId))
})

const selectedOtherServices = computed(() => {
  return selectedOptions.value
    .filter((option) => option.isOther || !option.serviceId)
    .map((option) => option.label)
})

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
  const mappedErrors: PartnershipFieldErrors = {}

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
    } else if (field.startsWith('services')) {
      mappedErrors.services = message
    }
  })

  return mappedErrors
}

const hasFieldError = (field: PartnershipField) => Boolean(fieldErrors.value[field])

const clearFieldError = (field: PartnershipField) => {
  if (!fieldErrors.value[field]) {
    return
  }

  const nextErrors = { ...fieldErrors.value }
  delete nextErrors[field]
  fieldErrors.value = nextErrors
}

const resetForm = () => {
  form.fullname = ''
  form.email = ''
  form.phone = ''
  form.companyName = ''
  form.budget = ''
  form.objectives = ''
  form.hasAccepted = false
  selectedInterestIds.value = []
}

const validateForm = () => {
  const nextErrors: PartnershipFieldErrors = {}
  const phone = normalizeLeadPhone(form.phone)
  const budget = parseLeadEstimatedBudget(form.budget)

  if (!form.fullname.trim()) {
    nextErrors.fullname = 'Please enter your name.'
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
    nextErrors.email = 'Please enter a valid email address.'
  }

  if (phone.length !== 10) {
    nextErrors.phone = 'Please enter a 10-digit phone number.'
  }

  if (!form.companyName.trim()) {
    nextErrors.companyName = 'Please enter your company or brand name.'
  }

  if (!budget) {
    nextErrors.budget = 'Please enter an estimated budget.'
  }

  if (!form.objectives.trim()) {
    nextErrors.objectives = 'Please tell us about your objectives.'
  }

  if (!form.hasAccepted) {
    nextErrors.hasAccepted = 'Please accept the consent before submitting.'
  }

  fieldErrors.value = nextErrors

  return Object.keys(nextErrors).length === 0
}

const handleSubmit = async () => {
  submitState.value = 'idle'
  submitMessage.value = ''

  if (!validateForm()) {
    submitState.value = 'error'
    submitMessage.value = 'Please check the highlighted fields.'
    return
  }

  const estimatedBudget = parseLeadEstimatedBudget(form.budget)

  if (!estimatedBudget) {
    return
  }

  const payload: ContactFormPayload = {
    fullname: form.fullname.trim(),
    email: form.email.trim(),
    phone: normalizeLeadPhone(form.phone),
    company_name: form.companyName.trim(),
    estimated_budget: estimatedBudget,
    form_type: 'partnership',
    objectives: form.objectives.trim(),
    has_accepted: form.hasAccepted,
    other_service: selectedOtherServices.value.length ? selectedOtherServices.value.join(', ') : null,
    services: selectedServiceIds.value,
    ...getUtmPayload()
  }

  isSubmitting.value = true

  try {
    await submitContactForm(payload)
    fieldErrors.value = {}
    submitState.value = 'success'
    submitMessage.value = 'Thank you. Your partnership request has been sent.'
    resetForm()
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
  <div class="page partnership-page">
    <SiteHeader active-path="/partnership" />

    <main class="partnership-main">
      <form class="partnership-form" novalidate @submit.prevent="handleSubmit">
        <header class="partnership-heading">
          <h1><em>Hello</em> <span>Let's Work Together</span></h1>
        </header>

        <section class="partnership-section" aria-labelledby="interest-title">
          <p id="interest-title" class="partnership-label">I'm Interested in:</p>
          <div class="partnership-interest-grid">
            <label v-for="option in interestOptions" :key="option.id" class="partnership-check">
              <input
                v-model="selectedInterestIds"
                type="checkbox"
                name="interest"
                :value="option.id"
                @change="clearFieldError('services')"
              >
              <span>{{ option.label }}</span>
            </label>
          </div>
          <small v-if="fieldErrors.services" class="partnership-error">{{ fieldErrors.services }}</small>
        </section>

        <section class="partnership-section" aria-label="Partnership details">
          <p class="partnership-label">More about me:</p>
          <div class="partnership-field-grid">
            <label :class="['partnership-field span-full', { 'has-error': hasFieldError('fullname') }]">
              <span>Name</span>
              <input
                v-model="form.fullname"
                type="text"
                name="fullname"
                autocomplete="name"
                :aria-invalid="hasFieldError('fullname')"
                :aria-describedby="fieldErrors.fullname ? 'partnership-fullname-error' : undefined"
                @input="clearFieldError('fullname')"
              >
              <small
                v-if="fieldErrors.fullname"
                id="partnership-fullname-error"
                class="partnership-error"
              >{{ fieldErrors.fullname }}</small>
            </label>

            <label :class="['partnership-field', { 'has-error': hasFieldError('email') }]">
              <span>E-mail</span>
              <input
                v-model="form.email"
                type="email"
                name="email"
                autocomplete="email"
                :aria-invalid="hasFieldError('email')"
                :aria-describedby="fieldErrors.email ? 'partnership-email-error' : undefined"
                @input="clearFieldError('email')"
              >
              <small
                v-if="fieldErrors.email"
                id="partnership-email-error"
                class="partnership-error"
              >{{ fieldErrors.email }}</small>
            </label>

            <label :class="['partnership-field', { 'has-error': hasFieldError('phone') }]">
              <span>Phone</span>
              <input
                v-model="form.phone"
                type="tel"
                name="phone"
                autocomplete="tel"
                inputmode="tel"
                :aria-invalid="hasFieldError('phone')"
                :aria-describedby="fieldErrors.phone ? 'partnership-phone-error' : undefined"
                @input="clearFieldError('phone')"
              >
              <small
                v-if="fieldErrors.phone"
                id="partnership-phone-error"
                class="partnership-error"
              >{{ fieldErrors.phone }}</small>
            </label>

            <label :class="['partnership-field', { 'has-error': hasFieldError('companyName') }]">
              <span>Company name/brand</span>
              <input
                v-model="form.companyName"
                type="text"
                name="company_name"
                autocomplete="organization"
                :aria-invalid="hasFieldError('companyName')"
                :aria-describedby="fieldErrors.companyName ? 'partnership-company-error' : undefined"
                @input="clearFieldError('companyName')"
              >
              <small
                v-if="fieldErrors.companyName"
                id="partnership-company-error"
                class="partnership-error"
              >{{ fieldErrors.companyName }}</small>
            </label>

            <label :class="['partnership-field', { 'has-error': hasFieldError('budget') }]">
              <span>Budget</span>
              <input
                v-model="form.budget"
                type="text"
                name="budget"
                inputmode="decimal"
                :aria-invalid="hasFieldError('budget')"
                :aria-describedby="fieldErrors.budget ? 'partnership-budget-error' : undefined"
                @input="clearFieldError('budget')"
              >
              <small
                v-if="fieldErrors.budget"
                id="partnership-budget-error"
                class="partnership-error"
              >{{ fieldErrors.budget }}</small>
            </label>

            <label :class="['partnership-field span-full', { 'has-error': hasFieldError('objectives') }]">
              <span>Objectives</span>
              <textarea
                v-model="form.objectives"
                name="objectives"
                rows="2"
                :aria-invalid="hasFieldError('objectives')"
                :aria-describedby="fieldErrors.objectives ? 'partnership-objectives-error' : undefined"
                @input="clearFieldError('objectives')"
              ></textarea>
              <small
                v-if="fieldErrors.objectives"
                id="partnership-objectives-error"
                class="partnership-error"
              >{{ fieldErrors.objectives }}</small>
            </label>
          </div>

          <label :class="['partnership-consent', { 'has-error': hasFieldError('hasAccepted') }]">
            <input
              v-model="form.hasAccepted"
              type="checkbox"
              name="consent"
              :aria-invalid="hasFieldError('hasAccepted')"
              @change="clearFieldError('hasAccepted')"
            >
            <span>
              By submitting this contact form, you consent to the collection, storage, and processing of your personal information.
            </span>
          </label>
          <small v-if="fieldErrors.hasAccepted" class="partnership-error">{{ fieldErrors.hasAccepted }}</small>
        </section>

        <p
          v-if="submitMessage"
          :class="['partnership-status', `partnership-status-${submitState}`]"
          :role="submitState === 'error' ? 'alert' : 'status'"
        >
          {{ submitMessage }}
        </p>

        <div class="partnership-actions">
          <a class="partnership-back" href="/contact">Back</a>
          <button class="partnership-submit" type="submit" :disabled="isSubmitting">
            {{ isSubmitting ? 'Sending...' : 'Submit' }}
          </button>
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
