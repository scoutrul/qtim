<template>
  <footer class="bg-purple-200 py-16">
    <div class="container mx-auto px-4">
      <FooterHeadline subtitle="Is there a project?" />
      
      <div class="flex flex-col md:flex-row justify-between">
        <ContactInfo />
      </div>
      
      <FooterGoButton @click="handleGoClick" />
      
      <FooterSocialLinks />
    </div>
  </footer>
</template>

<script setup lang="ts">
import FooterHeadline from '@/components/footer/FooterHeadline.vue'
import FooterGoButton from '@/components/footer/FooterGoButton.vue'
import FooterSocialLinks from '@/components/footer/FooterSocialLinks.vue'
import ContactInfo from '@/components/contact/ContactInfo.vue'

const handleGoClick = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script> 