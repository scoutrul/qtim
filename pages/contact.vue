<template>
  <div class="container mx-auto px-4 py-16">
    <Typography text="Контакты" variant="h1" class="mb-12" />
    
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div>
        <ContactInfo />
      </div>
      
      <div>
        <ContactForm />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Typography from '@/components/ui/Typography.vue'
import ContactForm from '@/components/contact/ContactForm.vue'
import ContactInfo from '@/components/contact/ContactInfo.vue'
</script> 