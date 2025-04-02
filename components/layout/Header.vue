<script setup lang="ts">
  import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import { useI18n } from '@/composables/useI18n'
  import Logo from '@/components/ui/Logo.vue'
  import NavLink from '@/components/ui/NavLink.vue'
  import LanguageFlag from '@/components/ui/LanguageFlag.vue'
  import Button from '@/components/ui/Button.vue'
  import { useContactModal } from '@/composables/useContactModal'

  const { t } = useI18n()
  const router = useRouter()

  interface MenuItem {
    title: string
    path: string
    translationKey: 'navigation.works' | 'navigation.about' | 'navigation.letsWork'
  }

  const menuItems: MenuItem[] = [
    { title: 'Works', path: '/works', translationKey: 'navigation.works' },
    { title: 'About', path: '/about', translationKey: 'navigation.about' },
  ]

  const { openModal } = useContactModal()
  const isMobileMenuOpen = ref(false)
  const touchStartX = ref(0)
  const touchEndX = ref(0)
  const minSwipeDistance = 100
  const isScrolled = ref(false)

  const route = useRoute()

  const handleOpenModal = () => {
    openModal()
    isMobileMenuOpen.value = false
  }

  const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value
    document.body.classList.toggle('mobile-menu-open', isMobileMenuOpen.value)
  }

  const handleScroll = () => {
    isScrolled.value = window.scrollY > 0
  }

  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.value = e.changedTouches[0].screenX
  }

  const handleTouchEnd = (e: TouchEvent) => {
    touchEndX.value = e.changedTouches[0].screenX
    handleSwipe()
  }

  const handleSwipe = () => {
    // Расстояние свайпа
    const swipeDistance = touchEndX.value - touchStartX.value

    // Если был свайп влево (закрыть меню)
    if (swipeDistance < -minSwipeDistance && isMobileMenuOpen.value) {
      isMobileMenuOpen.value = false
    }

    // Если был свайп вправо (открыть меню)
    if (swipeDistance > minSwipeDistance && !isMobileMenuOpen.value) {
      isMobileMenuOpen.value = true
    }
  }

  onMounted(() => {
    document.addEventListener('touchstart', handleTouchStart, { passive: true })
    document.addEventListener('touchend', handleTouchEnd, { passive: true })
    window.addEventListener('scroll', handleScroll)
    handleScroll() // Проверяем начальное положение скролла
  })

  onBeforeUnmount(() => {
    document.removeEventListener('touchstart', handleTouchStart)
    document.removeEventListener('touchend', handleTouchEnd)
    window.removeEventListener('scroll', handleScroll)
  })

  // Закрываем мобильное меню при изменении маршрута
  watch(
    route,
    () => {
      isMobileMenuOpen.value = false
    },
    { immediate: true }
  )
</script>

<template>
  <header
    :class="[
      'sticky top-0 bg-white z-40 w-full transition-shadow duration-300',
      isScrolled ? 'shadow-sm py-[0.6rem]' : 'py-4 sm:py-6',
    ]"
  >
    <div class="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
      <div class="flex items-center justify-between">
        <Logo variant="dark" class="cursor-pointer z-20" @click="router.push('/')" />

        <!-- Гамбургер меню для мобильных -->
        <button
          class="sm:hidden text-black focus:outline-none z-20"
          aria-label="Меню"
          :aria-expanded="isMobileMenuOpen"
          @click="toggleMobileMenu"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              :class="{ 'opacity-0': isMobileMenuOpen }"
              class="transform transition-all duration-300"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
            <path
              :class="{ 'opacity-100': isMobileMenuOpen, 'opacity-0': !isMobileMenuOpen }"
              class="absolute transform transition-all duration-300"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>

        <!-- Десктопное меню -->
        <div class="hidden sm:flex items-center">
          <nav class="flex items-center">
            <NavLink
              v-for="(item, index) in menuItems"
              :key="item.path"
              :href="item.path"
              :class="['font-tt-commons', index < menuItems.length - 1 ? 'nav-link-spacing' : '']"
            >
              {{ t(item.translationKey) }}
            </NavLink>
          </nav>

          <div class="w-[91px]"></div>

          <div class="flex items-center">
            <LanguageFlag class="mr-[16px]" />
            <Button
              rounded
              size="md"
              class="btn-lets-work h-[52px] w-[142px] whitespace-nowrap"
              @click="handleOpenModal"
            >
              {{ t('navigation.letsWork') }}
            </Button>
          </div>
        </div>
      </div>

      <!-- Мобильное меню -->
      <div
        class="mobile-menu-container"
        :class="isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'"
      >
        <div class="mobile-menu-content">
          <nav class="mobile-menu-nav">
            <NavLink
              v-for="item in menuItems"
              :key="item.path"
              :href="item.path"
              class="text-2xl py-2 font-tt-commons"
            >
              {{ t(item.translationKey) }}
            </NavLink>

            <div class="mobile-menu-footer">
              <LanguageFlag size="lg" />
              <Button
                rounded
                size="lg"
                class="btn-lets-work w-full max-w-xs whitespace-nowrap"
                @click="handleOpenModal"
              >
                {{ t('navigation.letsWork') }}
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
  /* Фиксируем боди при открытом мобильном меню */
  @media (max-width: 640px) {
    :global(body.mobile-menu-open) {
      overflow: hidden;
      position: fixed;
      width: 100%;
    }
  }
</style>
