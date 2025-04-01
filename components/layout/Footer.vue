<template>
  <footer class="bg-bg-purple py-16 pt-[8.8rem] relative overflow-hidden">
    <div class="container py-16 md:py-20">
      <div class="grid grid-cols-1 md:grid-cols-2">
        <!-- Левая колонка -->
        <FooterProject />

        <!-- Правая колонка -->
        <FooterContacts />
      </div>

      <!-- Социальные сети внизу футера -->
      <div class="mt-[240px]">
        <SocialLinks />
      </div>
    </div>

    <!-- Кнопка "Go" для прокрутки наверх (только для lg и больше) -->
    <div class="hidden lg:block">
      <FooterGoButton text="Go" />
    </div>
  </footer>
</template>

<script setup lang="ts">
  import SocialLinks from '@/components/contact/SocialLinks.vue'
  import FooterProject from '@/components/footer/FooterProject.vue'
  import FooterContacts from '@/components/footer/FooterContacts.vue'
  import FooterGoButton from '@/components/footer/FooterGoButton.vue'
</script>
