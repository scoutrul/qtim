<template>
  <div 
    class="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] lg:w-[358px] lg:h-[358px] bg-black text-white rounded-full flex items-center justify-center cursor-pointer absolute left-1/2"
    @click="openModal"
    style="bottom: 0; overflow: visible; transform: translate(-50%, 40%);"
  >
    <Typography 
      text="Go" 
      variant="h3" 
      weight="light" 
      class="transform -translate-y-1/4"
      customClass="text-xl sm:text-2xl md:text-2xl lg:text-3xl"
      style="transform: translateY(-40px); font-size: 20pt;"
    />
  </div>
</template>

<script setup lang="ts">
import Typography from '@/components/ui/Typography.vue'
import { useContactModal } from '@/composables/useContactModal'
import { useI18n } from '@/composables/useI18n'

const { openModal } = useContactModal()
const { t } = useI18n()
</script> 