import Lenis from 'lenis'

export default defineNuxtPlugin(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
  let lenis: Lenis | undefined
  let frame = 0

  const tick = (time: number) => {
    lenis?.raf(time)
    frame = window.requestAnimationFrame(tick)
  }

  const stop = () => {
    window.cancelAnimationFrame(frame)
    frame = 0
    document.documentElement.classList.remove('lenis-smooth')
    lenis?.destroy()
    lenis = undefined
  }

  const start = () => {
    if (reduceMotion.matches || lenis) {
      return
    }

    lenis = new Lenis({
      duration: 1.15,
      easing: (time: number) => 1 - Math.pow(1 - time, 3),
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.05
    })
    document.documentElement.classList.add('lenis-smooth')

    lenis.on('scroll', () => {
      window.dispatchEvent(new Event('scroll'))
    })

    frame = window.requestAnimationFrame(tick)
  }

  const syncMotionPreference = () => {
    if (reduceMotion.matches) {
      stop()
      return
    }

    start()
  }

  const teardown = () => {
    stop()
    reduceMotion.removeEventListener('change', syncMotionPreference)
    window.removeEventListener('pagehide', teardown)
  }

  start()
  reduceMotion.addEventListener('change', syncMotionPreference)
  window.addEventListener('pagehide', teardown, { once: true })
})
