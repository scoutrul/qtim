<script setup lang="ts">
  import { useI18n } from '@/composables/useI18n'

  const { t } = useI18n()

  // Список социальных сетей и ссылок
  const socialLinks = [
    { name: t('social.facebook'), url: '#' },
    { name: t('social.instagram'), url: '#' },
    { name: t('social.telegram'), url: '#' },
  ]

  const legalLinks = [
    { name: t('social.behance'), url: '#' },
    { name: t('social.linkedin'), url: '#' },
    { name: t('social.privacyPolicy'), url: '#' },
  ]
</script>

<template>
  <div class="flex flex-col md:flex-row justify-between w-full gap-6 sm:gap-4">
    <div class="flex gap-6">
      <a
        v-for="(link, index) in socialLinks"
        :key="index"
        :href="link.url"
        target="_blank"
        rel="noopener noreferrer"
        class="text-black hover:text-black duration-200 font-tt-commons text-[13px] group"
      >
        <span class="relative">
          {{ link.name }}
          <span
            class="absolute bottom-[-4px] left-0 w-full h-[1px] bg-black transform scale-x-100 group-hover:scale-x-0 transition-transform duration-200"
          ></span>
        </span>
      </a>
    </div>
    <div class="flex gap-6">
      <a
        v-for="link in legalLinks"
        :key="link.name"
        :href="link.url"
        class="text-black hover:text-black duration-200 font-tt-commons text-[13px] group"
      >
        <span class="relative">
          {{ link.name }}
          <span
            class="absolute bottom-[-4px] left-0 w-full h-[1px] bg-black transform scale-x-100 group-hover:scale-x-0 transition-transform duration-200"
          ></span>
        </span>
      </a>
    </div>
  </div>
</template>
