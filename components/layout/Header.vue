<script setup lang="ts">
import Logo from '@/components/ui/Logo.vue'
import NavLink from '@/components/ui/NavLink.vue'
import LanguageFlag from '@/components/ui/LanguageFlag.vue'
import Button from '@/components/ui/Button.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const navigateToContacts = () => {
  router.push('/contact')
}
</script>

<template>
  <header class="flex items-center justify-between p-header-padding">
    <Logo @click="router.push('/')" class="cursor-pointer" />
    
    <nav class="flex items-center gap-nav-gap">
      <NavLink href="/">Блог</NavLink>
      <NavLink href="/contact">Контакты</NavLink>
      <LanguageFlag src="https://dashboard.codeparrot.ai/api/image/Z-kMFXn5m-GBkPCn/colors.png" />
      <Button @click="navigateToContacts">Let's work</Button>
    </nav>
  </header>
</template> 