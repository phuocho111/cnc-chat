import { computed, onMounted, onUnmounted, ref } from 'vue'

export const useScreen = () => {
  const width = ref(typeof window !== 'undefined' ? window.innerWidth : 0)

  const breakpoints = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    xxl: 1536,
  }

  const update = () => {
    if (typeof window !== 'undefined') {
      width.value = window.innerWidth
    }
  }

  onMounted(() => {
    window.addEventListener('resize', update)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', update)
  })

  const isMobile = computed(() => width.value < breakpoints.md) // < 768px
  const isTablet = computed(() => width.value >= breakpoints.md && width.value < breakpoints.lg) // 768px - 1023px
  const isDesktop = computed(() => width.value >= breakpoints.lg) // >= 1024px

  const screenType = computed(() => {
    if (isMobile.value) return 'mobile'
    if (isTablet.value) return 'tablet'
    return 'desktop'
  })

  return {
    isMobile,
    isTablet,
    isDesktop,
    screenType,
  }
}
