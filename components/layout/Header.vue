<script setup lang="ts">
import Logo from '@/components/ui/Logo.vue'
import NavLink from '@/components/ui/NavLink.vue'
import LanguageFlag from '@/components/ui/LanguageFlag.vue'
import Button from '@/components/ui/Button.vue'
import Modal from '@/components/ui/Modal.vue'
import ContactForm from '@/components/contact/ContactForm.vue'
import { ref } from 'vue'

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
</script>

<template>
  <header class="py-4 sm:py-6">
    <div class="container">
      <div class="flex items-center justify-between">
        <Logo @click="$router.push('/')" class="cursor-pointer" />
        
        <!-- Гамбургер меню для мобильных -->
        <button 
          class="sm:hidden text-black focus:outline-none"
          @click="toggleMobileMenu"
          aria-label="Меню"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path v-if="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        
        <!-- Десктопное меню -->
        <nav class="hidden sm:flex items-center gap-nav-gap">
          <NavLink 
            v-for="item in menuItems" 
            :key="item.path" 
            :href="item.path"
          >
            {{ item.title }}
          </NavLink>
          <LanguageFlag />
          <Button @click="openModal" rounded size="md">Let's work</Button>
        </nav>
      </div>
      
      <!-- Мобильное меню -->
      <transition 
        name="mobile-menu"
        enter-active-class="transition duration-300 ease-out" 
        enter-from-class="opacity-0 transform -translate-y-3" 
        enter-to-class="opacity-100 transform translate-y-0" 
        leave-active-class="transition duration-200 ease-in" 
        leave-from-class="opacity-100 transform translate-y-0" 
        leave-to-class="opacity-0 transform -translate-y-3"
      >
        <div 
          v-if="isMobileMenuOpen"
          class="sm:hidden mt-4 py-4 bg-white rounded-lg shadow-md"
        >
          <nav class="flex flex-col items-center gap-nav-gap-mobile">
            <NavLink 
              v-for="item in menuItems" 
              :key="item.path" 
              :href="item.path"
              class="py-2"
            >
              {{ item.title }}
            </NavLink>
            <div class="flex items-center gap-4 mt-2">
              <LanguageFlag />
              <Button @click="openModal" rounded size="md">Let's work</Button>
            </div>
          </nav>
        </div>
      </transition>
    </div>

    <!-- Модальное окно с формой заявки -->
    <Modal v-model="isModalOpen" @close="closeModal">
      <template #header>
        <h2 class="text-xl font-bold mb-4">Связаться с нами</h2>
      </template>
      <ContactForm @submit="closeModal" />
    </Modal>
  </header>
</template> 