<template>
  <div class="flex flex-col items-start mt-[72px] w-fit mx-auto">
    <!-- Блок с основными контактами -->
    <div class="mb-[28px]">
      <Typography 
        text="For all questions" 
        variant="h5" 
        tag="h3"
        weight="medium" 
        class="mb-2"
        customClass="text-[11pt]"
      />
      <Typography 
        text="+7 (920) 278—00—68" 
        variant="body" 
        customClass="text-[10.6pt]"
      />
      <Typography 
        text="qtim@agency.com" 
        variant="body" 
        customClass="text-[10.6pt]"
      />
    </div>
    
    <!-- Офис в России -->
    <div class="mb-[28px]">
      <Typography 
        text="Office in Russia" 
        variant="h5" 
        tag="h3"
        weight="medium" 
        class="mb-2"
        customClass="text-[11pt]"
      />
      <Typography 
        text="139 Ruben Station Lake" 
        variant="body" 
        customClass="text-[10.6pt]"
      />
      <Typography 
        text="Drew, NM 52678" 
        variant="body" 
        customClass="text-[10.6pt]"
      />
      <div class="cursor-pointer mt-2" @click="openModal">
        <img src="@/assets/icons/arrow-icon.svg" alt="Arrow Icon" width="32" height="32" />
      </div>
    </div>
    
    <!-- Офис в Дубае -->
    <div class="mb-[28px]">
      <Typography 
        text="Office in Dubai" 
        variant="h5" 
        tag="h3"
        weight="medium" 
        class="mb-2"
        customClass="text-[11pt]"
      />
      <Typography 
        text="139 Ruben Station Lake" 
        variant="body" 
        customClass="text-[10.6pt]"
      />
      <Typography 
        text="Drew, NM 52678" 
        variant="body" 
        customClass="text-[10.6pt]"
      />
      <div class="cursor-pointer mt-2" @click="openModal">
        <img src="@/assets/icons/arrow-icon.svg" alt="Arrow Icon" width="32" height="32" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Typography from '@/components/ui/Typography.vue'
import { useContactModal } from '@/composables/useContactModal'

const { openModal } = useContactModal()
</script> 