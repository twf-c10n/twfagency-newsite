<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{
  error: NuxtError
}>()

const statusCode = computed(() => props.error.statusCode || 500)
const isNotFound = computed(() => statusCode.value === 404)
const pageTitle = computed(() => (isNotFound.value ? 'Page Not Found | TWF Agency' : 'Something Went Wrong | TWF Agency'))
const heading = computed(() => (isNotFound.value ? 'Page not found' : 'Something went off course'))
const description = computed(() =>
  isNotFound.value
    ? 'The route may have moved, changed, or never existed. Return to the main site and keep the mission moving.'
    : 'We could not load this page right now. Please return to the homepage or contact the TWF team.'
)
const aboutAssetPath = '/assets/about-figma'

const socials = [
  { label: 'Facebook', src: `${aboutAssetPath}/facebook.svg` },
  { label: 'X', src: `${aboutAssetPath}/x.svg` },
  { label: 'Instagram', src: `${aboutAssetPath}/instagram.svg` },
  { label: 'LinkedIn', src: `${aboutAssetPath}/linkedin.svg` }
]

const quickLinks = [
  { label: 'Explore services', href: '/services' },
  { label: 'View projects', href: '/project' },
  { label: 'Start a partnership', href: '/partnership' }
]

useHead(() => ({
  title: pageTitle.value,
  meta: [
    {
      name: 'robots',
      content: 'noindex, follow'
    },
    {
      name: 'description',
      content: description.value
    }
  ]
}))

const goHome = () => clearError({ redirect: '/' })
</script>

<template>
  <div class="page error-theme-page">
    <SiteHeader active-path="" />

    <main class="error-main">
      <section class="error-hero" aria-labelledby="error-title" aria-describedby="error-description">
        <div class="error-visual" aria-hidden="true">
          <span class="error-visual-glow" />
          <span class="error-panel">
            <span class="error-panel-dot" />
            <span class="error-panel-copy">Route scan</span>
          </span>
          <span class="error-orbit error-orbit-one" />
          <span class="error-orbit error-orbit-two" />
          <span class="error-route-line" />
          <span class="error-number">
            <span>4</span>
            <span>0</span>
            <span>4</span>
          </span>
          <span class="error-line" />
          <span class="error-word">TWF</span>
          <span class="error-signal">Signal lost</span>
        </div>

        <div class="error-copy">
          <p class="error-kicker">{{ statusCode }} / Flight path interrupted</p>
          <h1 id="error-title">{{ heading }}</h1>
          <p id="error-description">{{ description }}</p>
<<<<<<< HEAD
=======

>>>>>>> main
          <div class="error-actions">
            <a class="error-home-link" href="/" @click.prevent="goHome">
              <span>Back to home</span>
              <b aria-hidden="true">→</b>
            </a>
            <a class="error-secondary-link" href="/contact">Contact TWF</a>
          </div>

          <nav class="error-quick-links" aria-label="Helpful links">
            <a v-for="link in quickLinks" :key="link.href" :href="link.href">
              {{ link.label }}
            </a>
          </nav>

          <div class="error-note" role="note">
            <span aria-hidden="true" />
            <p>If you followed an old campaign URL, this page now safely returns a 404 so search engines can update.</p>
          </div>
        </div>
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
          <span v-for="social in socials" :key="social.label" class="error-social-icon" role="img" :aria-label="social.label">
            <img :src="social.src" alt="" width="29" height="29" loading="lazy" decoding="async">
          </span>
        </div>
      </div>
      <p class="about-copyright">Copyright ©2022 DIGITAL MARKETING CONSULTANCY</p>
    </footer>
  </div>
</template>

<style scoped>
.error-theme-page {
  position: relative;
  overflow-x: hidden;
  background:
    radial-gradient(circle at 12% 22%, rgb(51 190 107 / 18%), transparent 24%),
    radial-gradient(circle at 82% 16%, rgb(242 50 134 / 16%), transparent 28%),
    linear-gradient(135deg, rgb(255 213 27 / 6%), transparent 28%),
    #050607;
}

.error-theme-page::before {
  position: fixed;
  inset: 0;
  pointer-events: none;
  content: "";
  background-image:
    linear-gradient(rgb(255 255 255 / 4%) 1px, transparent 1px),
    linear-gradient(90deg, rgb(255 255 255 / 4%) 1px, transparent 1px);
  background-size: 72px 72px;
  mask-image: linear-gradient(to bottom, rgb(0 0 0 / 78%), transparent 72%);
}

.error-main {
  position: relative;
  min-height: 100svh;
  padding: 112px 0 78px;
}

.error-hero {
  width: min(calc(100% - 150px), 1120px);
  min-height: calc(100svh - 190px);
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(280px, 0.82fr) minmax(360px, 1.18fr);
  align-items: center;
  gap: clamp(36px, 6vw, 84px);
}

.error-visual {
  position: relative;
  width: min(100%, 430px);
  aspect-ratio: 1;
  display: grid;
  place-items: center;
  border: 1px solid rgb(255 255 255 / 10%);
  border-radius: 36px;
  background:
    linear-gradient(145deg, rgb(255 255 255 / 9%), rgb(255 255 255 / 2%)),
    radial-gradient(circle at 28% 22%, rgb(255 213 27 / 14%), transparent 30%),
    rgb(8 9 11 / 66%);
  box-shadow:
    inset 0 1px 0 rgb(255 255 255 / 12%),
    0 30px 90px rgb(0 0 0 / 42%);
  isolation: isolate;
  justify-self: center;
  overflow: hidden;
}

.error-visual::before {
  position: absolute;
  inset: 12%;
  z-index: 0;
  border: 1px solid rgb(255 255 255 / 16%);
  border-radius: 999px;
  content: "";
  background:
    conic-gradient(from 140deg, var(--green), var(--yellow), var(--red), var(--pink), var(--green));
  mask: radial-gradient(circle, transparent 62%, #000 63%);
  opacity: 0.78;
}

.error-visual::after {
  position: absolute;
  inset: 25%;
  z-index: 0;
  border: 1px dashed rgb(255 255 255 / 18%);
  border-radius: 999px;
  content: "";
}

.error-visual-glow {
  position: absolute;
  inset: -18%;
  z-index: 0;
  background:
    radial-gradient(circle at 35% 35%, rgb(255 213 27 / 20%), transparent 30%),
    radial-gradient(circle at 72% 64%, rgb(242 50 134 / 16%), transparent 34%);
  filter: blur(10px);
}

.error-panel {
  position: absolute;
  top: 24px;
  right: 24px;
  z-index: 2;
  display: inline-flex;
  min-height: 34px;
  align-items: center;
  gap: 8px;
  padding: 0 13px;
  border: 1px solid rgb(255 255 255 / 16%);
  border-radius: 999px;
  background: rgb(5 6 7 / 68%);
  color: rgb(247 248 250 / 72%);
  font-size: 0.74rem;
  letter-spacing: .08em;
  text-transform: uppercase;
  backdrop-filter: blur(12px);
}

.error-panel-dot {
  width: 7px;
  height: 7px;
  border-radius: 99px;
  background: var(--red);
  box-shadow: 0 0 14px rgb(230 40 63 / 80%);
}

.error-route-line {
  position: absolute;
  inset: auto 10% 18%;
  height: 110px;
  border: 1px solid rgb(255 255 255 / 12%);
  border-top: 0;
  border-radius: 0 0 999px 999px;
  transform: rotate(-10deg);
}

.error-route-line::before,
.error-route-line::after {
  position: absolute;
  top: -5px;
  width: 10px;
  height: 10px;
  border-radius: 999px;
  content: "";
}

.error-route-line::before {
  left: 8%;
  background: var(--green);
  box-shadow: 0 0 18px rgb(51 190 107 / 72%);
}

.error-route-line::after {
  right: 8%;
  background: var(--red);
  box-shadow: 0 0 18px rgb(230 40 63 / 72%);
}

.error-orbit {
  position: absolute;
  z-index: 1;
  width: 12px;
  height: 12px;
  border-radius: 999px;
  background: var(--yellow);
  box-shadow: 0 0 18px rgb(255 213 27 / 68%);
}

.error-orbit-one {
  top: 18%;
  right: 22%;
}

.error-orbit-two {
  bottom: 21%;
  left: 18%;
  background: var(--green);
  box-shadow: 0 0 18px rgb(51 190 107 / 62%);
}

.error-number {
  z-index: 1;
  display: flex;
  align-items: center;
  gap: clamp(0.14em, 1.6vw, 0.22em);
  color: rgb(255 255 255 / 88%);
  font-size: clamp(5.6rem, 13vw, 9.6rem);
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.08em;
  text-shadow:
    0 0 26px rgb(255 213 27 / 16%),
    0 16px 46px rgb(0 0 0 / 58%);
}

.error-number span {
  display: inline-grid;
  width: clamp(72px, 10vw, 112px);
  aspect-ratio: 0.78;
  place-items: center;
  border: 1px solid rgb(255 255 255 / 12%);
  border-radius: 24px;
  background:
    linear-gradient(180deg, rgb(255 255 255 / 11%), rgb(255 255 255 / 3%)),
    rgb(5 6 7 / 42%);
  backdrop-filter: blur(6px);
}

.error-number span:nth-child(2) {
  color: var(--yellow);
  transform: translateY(-12%);
  box-shadow:
    inset 0 0 28px rgb(255 213 27 / 10%),
    0 0 34px rgb(255 213 27 / 16%);
}

.error-line {
  position: absolute;
  z-index: 2;
  width: 78%;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgb(255 213 27 / 76%), transparent);
  transform: rotate(-13deg);
}

.error-word {
  position: absolute;
  right: 11%;
  bottom: 12%;
  color: var(--yellow);
  font-size: clamp(1.25rem, 2.4vw, 1.95rem);
  font-weight: 700;
  letter-spacing: .08em;
}

.error-signal {
  position: absolute;
<<<<<<< HEAD
  top: auto;
=======
>>>>>>> main
  bottom: 24px;
  left: 24px;
  z-index: 2;
  padding: 8px 12px;
  border: 1px solid rgb(255 255 255 / 18%);
  border-radius: 999px;
  background: rgb(5 6 7 / 68%);
  color: rgb(247 248 250 / 78%);
  font-size: 0.78rem;
  text-transform: uppercase;
  backdrop-filter: blur(10px);
}

.error-kicker {
  width: fit-content;
  margin-bottom: 24px;
  padding: 9px 14px;
  border: 1px solid rgb(255 255 255 / 22%);
  border-radius: 999px;
  color: var(--yellow);
  font-size: 0.85rem;
  text-transform: uppercase;
}

.error-copy h1 {
  max-width: 720px;
  font-size: clamp(4.2rem, 8.2vw, 8.4rem);
  line-height: 0.9;
  letter-spacing: -0.035em;
  text-transform: uppercase;
  text-wrap: balance;
}

.error-copy > p:last-of-type {
  max-width: 580px;
  margin-top: 24px;
  color: rgb(247 248 250 / 74%);
  font-size: clamp(1rem, 1.7vw, 1.28rem);
  line-height: 1.6;
}

.error-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 34px;
}

.error-actions a {
  min-height: 48px;
  padding: 0 22px;
  border: 1px solid rgb(255 255 255 / 32%);
  border-radius: 999px;
  background: rgb(255 255 255 / 8%);
  color: var(--white);
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: border-color .24s ease, box-shadow .24s ease, transform .24s ease, background .24s ease;
}

.error-actions .error-home-link {
  gap: 12px;
  border-color: var(--yellow) !important;
  background:
    linear-gradient(#f7f8fa, #f7f8fa) padding-box,
    linear-gradient(95deg, var(--green), var(--yellow), var(--red)) border-box !important;
  color: #050607;
  font-weight: 700;
  box-shadow: 0 14px 40px rgb(255 213 27 / 16%);
}

.error-home-link b {
  color: var(--red);
  font-size: 1.15rem;
}

.error-secondary-link {
  color: var(--white);
}

.error-actions a:hover {
  transform: translateY(-2px);
}

.error-secondary-link:hover {
  border-color: rgb(255 213 27 / 58%);
  background: rgb(255 213 27 / 8%);
}

.error-actions a:focus-visible,
.error-quick-links a:focus-visible {
  outline: 3px solid rgb(255 213 27 / 72%);
  outline-offset: 4px;
}

.error-quick-links {
  display: flex;
  flex-wrap: wrap;
  gap: 12px 20px;
  margin-top: 22px;
}

.error-quick-links a {
  color: rgb(247 248 250 / 72%);
  font-size: 0.9rem;
  text-decoration: underline;
  text-decoration-color: rgb(255 213 27 / 45%);
  text-underline-offset: 5px;
  transition: color .22s ease, text-decoration-color .22s ease;
}

.error-quick-links a:hover {
  color: var(--yellow);
  text-decoration-color: currentColor;
}

.error-note {
  display: grid;
  grid-template-columns: 9px minmax(0, 1fr);
  gap: 12px;
  max-width: 520px;
  margin-top: 34px;
  padding: 16px 18px;
  border: 1px solid rgb(255 255 255 / 10%);
  border-radius: 20px;
  background: rgb(255 255 255 / 5%);
}

.error-note span {
  width: 9px;
  height: 9px;
  margin-top: 6px;
  border-radius: 99px;
  background: var(--green);
  box-shadow: 0 0 16px rgb(51 190 107 / 55%);
}

.error-note p {
  color: rgb(247 248 250 / 64%);
  font-size: 0.88rem;
  line-height: 1.55;
}

.error-social-icon {
  display: grid;
  width: 72px;
  height: 60px;
  place-items: center;
  opacity: 0.78;
}

@media (max-width: 900px) {
  .error-main {
    padding-top: 108px;
  }

  .error-hero {
    width: min(calc(100% - 32px), 1120px);
    grid-template-columns: 1fr;
    gap: 24px;
    align-items: start;
    padding-top: 24px;
  }

  .error-visual {
    width: min(62vw, 300px);
    margin: 0 auto;
    order: 2;
  }

  .error-copy {
    order: 1;
  }
}

@media (max-width: 640px) {
  .error-main {
    padding-bottom: 54px;
  }

  .error-copy h1 {
    font-size: clamp(3.3rem, 17vw, 5.35rem);
  }

  .error-actions {
    align-items: stretch;
    flex-direction: column;
  }

  .error-actions a {
    width: 100%;
  }

  .error-quick-links {
    flex-direction: column;
    gap: 12px;
  }

  .error-note {
    padding: 14px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .error-actions a {
    transition: none;
  }

  .error-actions a:hover {
    transform: none;
  }
}
</style>
