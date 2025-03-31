<template>
  <div>
    <!-- Верхний блок с заголовком и проектом -->
    <div class="mb-16">
      <Typography
        :text="t('footer.project.isThere')"
        variant="xs"
        class="mb-[60px]"
        custom-class="text-[11pt]"
      />
      <div class="pb-8">
        <img
          src="@/assets/images/lets-work-together.svg"
          alt="Let's work together"
          class="w-full max-w-[250px] md:max-w-[350px] xl:max-w-[436px]"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import Typography from '@/components/ui/Typography.vue'
  import { useI18n } from '@/composables/useI18n'

  const { t } = useI18n()
</script>
