<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import Logo from '@/components/ui/Logo.vue'
import NavLink from '@/components/ui/NavLink.vue'
import LanguageFlag from '@/components/ui/LanguageFlag.vue'
import Button from '@/components/ui/Button.vue'
import Modal from '../ui/Modal.vue'
import ContactForm from '@/components/contact/ContactForm.vue'

interface MenuItem {
  title: string
  path: string
}

const menuItems: MenuItem[] = [
  { title: 'Works', path: '/works' },
  { title: 'About', path: '/about' }
]

const isModalOpen = ref(false)
const isMobileMenuOpen = ref(false)
const touchStartX = ref(0)
const touchEndX = ref(0)
const minSwipeDistance = 100
const isScrolled = ref(false)

const router = useRouter()
const route = useRoute()

const openModal = () => {
  isModalOpen.value = true
  isMobileMenuOpen.value = false
}

const closeModal = () => {
  isModalOpen.value = false
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
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
watch(route, () => {
  isMobileMenuOpen.value = false
}, { immediate: true })
</script>

<template>
  <header :class="['py-4 sm:py-6 sticky top-0 bg-white z-40 w-full transition-shadow duration-300', isScrolled ? 'shadow-sm' : '']">
    <div class="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
      <div class="flex items-center justify-between">
        <Logo @click="$router.push('/')" class="cursor-pointer z-20" />
        
        <!-- Гамбургер меню для мобильных -->
        <button 
          class="sm:hidden text-black focus:outline-none z-20"
          @click="toggleMobileMenu"
          aria-label="Меню"
          :aria-expanded="isMobileMenuOpen"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
        <nav class="hidden sm:flex items-center gap-nav-gap">
          <NavLink 
            v-for="item in menuItems" 
            :key="item.path" 
            :href="item.path"
            class="font-tt-commons"
          >
            {{ item.title }}
          </NavLink>
          <LanguageFlag />
          <Button @click="openModal" rounded size="md" class="font-tt-commons bg-black hover:bg-black/90 text-white">Let's&nbsp;work</Button>
        </nav>
      </div>
      
      <!-- Мобильное меню -->
      <div 
        class="sm:hidden fixed inset-0 bg-white z-10 transform transition-transform duration-300 ease-in-out"
        :class="isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'"
      >
        <div class="h-full pt-20 pb-6 px-4 flex flex-col">
          <nav class="flex flex-col items-center gap-6 flex-grow">
            <NavLink 
              v-for="item in menuItems" 
              :key="item.path" 
              :href="item.path"
              class="text-2xl py-2 font-tt-commons"
            >
              {{ item.title }}
            </NavLink>
            
            <div class="mt-auto flex flex-col items-center gap-4">
              <LanguageFlag size="lg" />
              <Button @click="openModal" rounded size="lg" class="w-full max-w-xs font-tt-commons bg-black hover:bg-black/90 text-white">
                Let's&nbsp;work
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </div>

    <!-- Модальное окно с формой заявки -->
    <Modal 
      v-model="isModalOpen" 
      @close="closeModal"
      title="Связаться с нами"
      size="sm"
      :persistent="false"
    >
      <ContactForm @submit="closeModal" />
      <template #footer>
        <Button 
          variant="underlined" 
          size="lg" 
          @click="closeModal"
          class="mr-3 font-tt-commons"
        >
          Отмена
        </Button>
      </template>
    </Modal>
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