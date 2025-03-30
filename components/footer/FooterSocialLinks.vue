<script setup lang="ts">
import SocialLink from '@/components/ui/SocialLink.vue'

// Можно вынести в константы или получать из API
const socialLinks = [
  { name: 'Facebook', url: '#' },
  { name: 'Instagram', url: '#' },
  { name: 'Telegram', url: '#' }
]

const legalLinks = [
  { name: 'Behance', url: '#' },
  { name: 'Linkedin', url: '#' },
  { name: 'Privacy Policy', url: '#' }
]
</script>

<template>
  <div class="flex justify-between items-center w-full">
    <div class="flex space-x-6">
      <SocialLink 
        v-for="link in socialLinks" 
        :key="link.name" 
        :href="link.url" 
        :text="link.name"
      />
    </div>
    
    <div class="flex space-x-6">
      <SocialLink 
        v-for="link in legalLinks" 
        :key="link.name" 
        :href="link.url" 
        :text="link.name"
      />
    </div>
  </div>
</template> 