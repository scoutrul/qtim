<template>
  <div>
    <!-- Верхний блок с заголовком и проектом -->
    <div class="mb-16">
      <Typography 
        text="Is there a project?" 
        variant="xs" 
        class="mb-[60px]"
        customClass="text-[11pt]"
      />
      <div class="pb-8">
        <img src="@/assets/images/lets-work-together.svg" alt="Let's work together" class="w-full max-w-[250px] md:max-w-[350px] xl:max-w-[436px]" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Typography from '@/components/ui/Typography.vue'
</script> 