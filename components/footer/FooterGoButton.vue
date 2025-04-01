<template>
  <div
    class="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] lg:w-[358px] lg:h-[358px] bg-black text-white rounded-full flex items-center justify-center cursor-pointer absolute left-1/2"
    style="bottom: 0; overflow: visible; transform: translate(-50%, 40%)"
    @click="handleClick"
  >
    <Typography
      :text="text"
      variant="h3"
      weight="light"
      class="transform -translate-y-1/4"
      custom-class="text-xl sm:text-2xl md:text-2xl lg:text-3xl"
      style="transform: translateY(-40px); font-size: 20pt"
    />
  </div>
</template>

<script setup lang="ts">
  import Typography from '@/components/ui/Typography.vue'
  import { useContactModal } from '@/composables/useContactModal'

  const { openModal } = useContactModal()

  const { text } = defineProps<{ text: string }>()

  const emit = defineEmits<{
    click: [event: MouseEvent]
  }>()

  const handleClick = (event: MouseEvent) => {
    openModal()
    emit('click', event)
  }
</script>
