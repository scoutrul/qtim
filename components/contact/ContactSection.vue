<script setup lang="ts">
// Импортируем компоненты
import SectionHeader from '@/components/contact/SectionHeader.vue'
import ContactInfo from '@/components/contact/ContactInfo.vue'
import SocialLinks from '@/components/contact/SocialLinks.vue'
import CircleButton from '@/components/ui/CircleButton.vue'
</script>

<template>
  <div class="flex flex-col justify-between items-center bg-lavender min-h-screen p-10 relative font-sans">
    <SectionHeader />
    
    <ContactInfo />
    
    <SocialLinks />
    
    <!-- Go Button -->
    <CircleButton 
      class="absolute bottom-5 left-1/2 transform -translate-x-1/2"
      text="Go" 
      :size="100" 
    />
  </div>
</template> 