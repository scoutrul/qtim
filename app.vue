<template>
  <div>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
      <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
      <meta name="theme-color" content="#8B5CF6" />
      <meta name="description" content="QTIM - профессиональная разработка проектов и digital-решений" />
      
      <!-- Open Graph / Facebook -->
      <meta property="og:type" content="website" />
      <meta property="og:title" content="QTIM" />
      <meta property="og:description" content="Профессиональная разработка проектов и digital-решений" />
      <meta property="og:image" content="/images/og-image.jpg" />
      
      <!-- Twitter -->
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content="QTIM" />
      <meta property="twitter:description" content="Профессиональная разработка проектов и digital-решений" />
      <meta property="twitter:image" content="/images/og-image.jpg" />
    </Head>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <ContactModal />
  </div>
</template>

<script setup lang="ts">
import ContactModal from '@/components/contact/ContactModal.vue'
</script>