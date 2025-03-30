<script setup lang="ts">
import OfficeLocation from '@/components/contact/OfficeLocation.vue'
import Typography from '@/components/ui/Typography.vue'
import CopyButton from '@/components/ui/CopyButton.vue'

// Иконка для кнопок офисов (можно заменить на svg или src из API)
const iconSrc = 'https://dashboard.codeparrot.ai/api/image/Z-kMFXn5m-GBkPCn/colors.png'

// Контактные данные (можно вынести в константы или получать из API)
const contactInfo = {
  title: 'For all questions',
  phone: '+7 (920) 278—00—68',
  email: 'qtim@agency.com'
}

// Информация об офисах (можно вынести в константы или получать из API)
const offices = [
  {
    id: 1,
    title: 'Office in Russia',
    address: '139 Ruben Station Lake<br>Drew, NM 52678',
    iconSrc
  },
  {
    id: 2,
    title: 'Office in Dubai',
    address: '139 Ruben Station Lake<br>Drew, NM 52678',
    iconSrc
  }
]
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-8 py-10">
    <!-- Контактная информация -->
    <div>
      <Typography :text="contactInfo.title" variant="body" class="mb-2" />
      
      <div class="flex items-center justify-between mb-2">
        <Typography :text="contactInfo.phone" variant="body" />
        <CopyButton :value="contactInfo.phone" />
      </div>
      
      <div class="flex items-center justify-between mb-5">
        <Typography :text="contactInfo.email" variant="body" />
        <CopyButton :value="contactInfo.email" />
      </div>
    </div>
    
    <!-- Офисы -->
    <div v-for="office in offices" :key="office.id" class="mb-6">
      <OfficeLocation 
        :title="office.title"
        :address="office.address"
        :iconSrc="office.iconSrc"
      />
    </div>
  </div>
</template> 