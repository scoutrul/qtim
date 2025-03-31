<script setup lang="ts">
// Список социальных сетей и ссылок
const socialLinks = [
  { name: 'Facebook', url: '#' },
  { name: 'Instagram', url: '#' },
  { name: 'Telegram', url: '#' }
]

const legalLinks = [
  { name: 'Behance', url: '#' },
  { name: 'LinkedIn', url: '#' },
  { name: 'Privacy Policy', url: '#' }
]
</script>

<template>
  <div class="flex flex-col md:flex-row justify-between w-full gap-6 sm:gap-4">
    <div class="flex gap-6">
      <a 
        v-for="(link, index) in socialLinks" 
        :key="index"
        :href="link.url" 
        target="_blank" 
        rel="noopener noreferrer"
        class="text-black hover:text-black duration-200 font-tt-commons text-[13px] group"
      >
        <span class="relative">
          {{ link.name }}
          <span class="absolute bottom-[-4px] left-0 w-full h-[1px] bg-black transform scale-x-100 group-hover:scale-x-0 transition-transform duration-200"></span>
        </span>
      </a>
    </div>
    <div class="flex gap-6">
      <a 
        v-for="link in legalLinks" 
        :key="link.name" 
        :href="link.url" 
        class="text-black hover:text-black duration-200 font-tt-commons text-[13px] group"
      >
        <span class="relative">
          {{ link.name }}
          <span class="absolute bottom-[-4px] left-0 w-full h-[1px] bg-black transform scale-x-100 group-hover:scale-x-0 transition-transform duration-200"></span>
        </span>
      </a>
    </div>
  </div>
</template> 