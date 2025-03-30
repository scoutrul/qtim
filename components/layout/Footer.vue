<template>
  <footer class="bg-bg-purple py-16 relative overflow-hidden">
    <div class="container relative">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Левая колонка -->
        <div>
          <!-- Верхний блок с заголовком и проектом -->
          <div class="mb-16">
            <p class="mb-[56px] text-paragraph">Is there a project?</p>
            <div class="pb-8">
              <img src="@/assets/images/lets-work-together.svg" alt="Let's work together" class="w-full max-w-[250px] md:max-w-[350px] xl:max-w-[464px] headline-stroke" />
            </div>
          </div>
          
          <!-- Социальные сети внизу слева -->
          <div class="mt-auto">
            <SocialLinks />
          </div>
        </div>
        
        <!-- Правая колонка -->
        <div class="flex flex-col md:ml-auto">
          <!-- Блок с основными контактами -->
          <div class="mb-12">
            <h3 class="footer-heading">For all questions</h3>
            <p class="text-paragraph mb-2">+7 (920) 278—00—68</p>
            <p class="text-paragraph mb-8">qtim@agency.com</p>
          </div>
          
          <!-- Офис в России -->
          <div class="mb-12">
            <h3 class="footer-heading">Office in Russia</h3>
            <p class="text-paragraph mb-2">139 Ruben Station Lake</p>
            <p class="text-paragraph mb-8">Drew, NM 52678</p>
            <div class="cursor-pointer">
              <img src="@/assets/icons/ArrowIcon.svg" alt="Arrow Icon" width="48" height="48" />
            </div>
          </div>
          
          <!-- Офис в Дубае -->
          <div>
            <h3 class="footer-heading">Office in Dubai</h3>
            <p class="text-paragraph mb-2">139 Ruben Station Lake</p>
            <p class="text-paragraph mb-8">Drew, NM 52678</p>
            <div class="cursor-pointer">
              <img src="@/assets/icons/ArrowIcon.svg" alt="Arrow Icon" width="48" height="48" />
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Кнопка "Go" для прокрутки наверх -->
    <div 
      class="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] lg:w-[358px] lg:h-[358px] bg-black text-white rounded-full flex items-center justify-center cursor-pointer absolute left-1/2"
      @click="scrollToTop"
      style="bottom: 0; overflow: visible; transform: translate(-50%, 48%);"
    >
      <span class="font-medium text-xl sm:text-2xl md:text-2xl lg:text-3xl font-tt-commons" style="transform: translateY(-25%);">Go</span>
    </div>
  </footer>
</template>

<script setup lang="ts">
import SocialLinks from '@/components/contact/SocialLinks.vue'
import { defineComponent, PropType } from 'vue'

// Компонент для отображения блока офиса
const OfficeBlock = defineComponent({
  props: {
    title: {
      type: String,
      required: true
    },
    address: {
      type: Array as PropType<string[]>,
      required: true
    }
  },
  template: `
    <div class="mb-12">
      <h3 class="footer-heading">{{ title }}</h3>
      <p v-for="(line, index) in address" :key="index" 
         :class="['text-paragraph', index === address.length - 1 ? 'mb-8' : 'mb-2']">
        {{ line }}
      </p>
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="24" fill="black"/>
        <path d="M26.25 30.75L30.75 17.25L17.25 21.75L22.875 25.125L26.25 30.75Z" stroke="#E2BEFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
  `
})

// Функция для прокрутки наверх страницы
const scrollToTop = (): void => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>

<style scoped>
.footer-heading {
  @apply font-medium mb-3 font-tt-commons text-xl;
}

.text-paragraph {
  @apply font-tt-commons text-base;
  line-height: 120%;
  letter-spacing: 1%;
}

.headline-stroke {
  -webkit-text-stroke: 1.5px #E2BEFF;
  text-stroke: 1.5px #E2BEFF;
  paint-order: stroke fill;
}
</style> 