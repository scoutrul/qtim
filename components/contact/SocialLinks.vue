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
  <div class="flex flex-col sm:flex-row justify-between w-full gap-6 sm:gap-0">
    <div class="flex gap-6">
      <a 
        v-for="link in socialLinks" 
        :key="link.name" 
        :href="link.url" 
        class="text-black hover:text-purple transition-colors duration-200 font-tt-commons"
      >
        {{ link.name }}
      </a>
    </div>
    <div class="flex gap-6">
      <a 
        v-for="link in legalLinks" 
        :key="link.name" 
        :href="link.url" 
        class="text-black hover:text-purple transition-colors duration-200 font-tt-commons"
      >
        {{ link.name }}
      </a>
    </div>
  </div>
</template> 