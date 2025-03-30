<script setup lang="ts">
import IconButton from '@/components/ui/IconButton.vue'
import Typography from '@/components/ui/Typography.vue'

defineProps<{
  title: string;
  address: string;
  iconSrc: string;
}>();
</script>

<template>
  <div>
    <Typography :text="title" variant="h5" class="mb-2.5" />
    <Typography :text="address" variant="body" class="mb-5" html />
    <IconButton 
      :iconSrc="iconSrc" 
      alt="location icon"
    />
  </div>
</template> 