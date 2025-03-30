<template>
  <footer class="bg-secondary py-16">
    <div class="container">
      <div class="flex flex-col lg:flex-row justify-between items-start gap-12">
        <!-- Левая колонка -->
        <div class="w-full lg:w-1/2">
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Let's work together</h2>
          <p class="text-lg mb-6">Is there a project?</p>
          <ContactInfo />
        </div>
        
        <!-- Правая колонка -->
        <div class="w-full lg:w-1/2 flex flex-col items-start">
          <h3 class="text-xl font-bold mb-6">Office in Russia</h3>
          <p class="text-base mb-4">119 Baker Stanton Lake<br />Ohio, NM 52479</p>
        </div>
      </div>
      
      <!-- Нижняя часть с соцсетями и кнопкой -->
      <div class="mt-16 flex flex-col-reverse md:flex-row justify-between items-center gap-8">
        <SocialLinks />
        <div 
          class="w-14 h-14 bg-black text-white rounded-full flex items-center justify-center cursor-pointer"
          @click="scrollToTop"
        >Go</div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import ContactInfo from '@/components/contact/ContactInfo.vue'
import SocialLinks from '@/components/contact/SocialLinks.vue'

// Функция для прокрутки наверх страницы
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script> 