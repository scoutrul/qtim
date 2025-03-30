<script setup lang="ts">
import Logo from '@/components/ui/Logo.vue'
import NavLink from '@/components/ui/NavLink.vue'
import LanguageFlag from '@/components/ui/LanguageFlag.vue'
import Button from '@/components/ui/Button.vue'
</script>

<template>
  <header class="flex items-center justify-between p-header-padding">
    <Logo />
    
    <nav class="flex items-center gap-nav-gap">
      <NavLink href="#">Works</NavLink>
      <NavLink href="#">About</NavLink>
      <LanguageFlag src="https://dashboard.codeparrot.ai/api/image/Z-kMFXn5m-GBkPCn/colors.png" />
      <Button>Let's work</Button>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Header'
})
</script> 