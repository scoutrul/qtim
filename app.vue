<template>
  <NuxtLayout>
    <NuxtPage />
    <ContactModal />
  </NuxtLayout>
</template>

<script setup lang="ts">
  import ContactModal from '@/components/contact/ContactModal.vue'

  useHead({
    htmlAttrs: {
      lang: 'ru'
    },
    link: [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
      { 
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Poppins:wght@300;400;500;600;700;800&display=swap'
      },
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      { rel: 'manifest', href: '/manifest.json' },
      { rel: 'apple-touch-icon', href: '/favicon.svg' }
    ],
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, viewport-fit=cover' },
      { name: 'theme-color', content: '#8B5CF6' },
      { 
        name: 'description',
        content: 'QTIM - профессиональная разработка проектов и digital-решений'
      },
      // Open Graph / Facebook
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'QTIM' },
      { 
        property: 'og:description',
        content: 'Профессиональная разработка проектов и digital-решений'
      },
      { property: 'og:image', content: '/images/og-image.jpg' },
      // Twitter
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:title', content: 'QTIM' },
      { 
        property: 'twitter:description',
        content: 'Профессиональная разработка проектов и digital-решений'
      },
      { property: 'twitter:image', content: '/images/og-image.jpg' },
      { name: 'mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
      { name: 'apple-mobile-web-app-title', content: 'QTIM' },
      { name: 'application-name', content: 'QTIM' },
      { name: 'msapplication-TileColor', content: '#8B5CF6' }
    ]
  })
</script>
