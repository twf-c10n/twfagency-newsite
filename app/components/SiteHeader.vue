<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    activePath?: string
  }>(),
  {
    activePath: '/'
  }
)

const menuOpen = ref(false)
const headerScrolled = ref(false)

const aboutAssetPath = '/assets/about-figma'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Our Services', href: '/services' },
  { label: 'Projects', href: '/project' },
  { label: 'Photography', href: '/photography' },
  { label: 'Blog', href: 'https://twfdigital.com/blogs/', activePath: '/blog' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' }
]

const isActive = (item: { href: string, activePath?: string } | string) => {
  const path = typeof item === 'string' ? item : (item.activePath ?? item.href)

  return props.activePath === path
}

const closeMenu = () => {
  menuOpen.value = false
}

const updateHeader = () => {
  const isScrolled = window.scrollY > 18

  if (headerScrolled.value !== isScrolled) {
    headerScrolled.value = isScrolled
  }
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
  <header :class="['site-header about-figma-header', { scrolled: headerScrolled }]">
    <nav class="about-figma-nav" aria-label="Primary navigation">
      <a class="about-logo" href="/" aria-label="TWF home" @click="closeMenu">
        <img :src="`${aboutAssetPath}/twf-logo.svg`" alt="TWF">
      </a>

      <div :class="['nav-links about-figma-links', { open: menuOpen }]">
        <a
          v-for="item in navItems"
          :key="item.href"
          :class="{ active: isActive(item) }"
          :href="item.href"
          :aria-current="isActive(item) ? 'page' : undefined"
          @click="closeMenu"
        >
          {{ item.label }}
        </a>
      </div>

      <a
        :class="['nav-contact about-contact', { active: isActive('/partnership') }]"
        href="/partnership"
        :aria-current="isActive('/partnership') ? 'page' : undefined"
        @click="closeMenu"
      >Start a partnership</a>
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
</template>
