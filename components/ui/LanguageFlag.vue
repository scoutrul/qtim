<script setup lang="ts">
  import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
  import { useI18n } from '@/composables/useI18n'

  const { currentLanguage, setLanguage } = useI18n()
  const isOpen = ref(false)

  interface Language {
    code: 'en' | 'ru'
    label: string
    flag: string
  }

  const languages: Language[] = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'ru', label: 'Русский', flag: '🇷🇺' },
  ]

  // Фильтруем языки, исключая текущий
  const availableLanguages = computed(() =>
    languages.filter((lang) => lang.code !== currentLanguage.value)
  )

  // Закрываем меню при клике вне компонента
  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement
    if (!target.closest('.language-switcher')) {
      isOpen.value = false
    }
  }

  onMounted(() => {
    document.addEventListener('click', handleClickOutside)
  })

  onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside)
  })

  const toggleMenu = () => {
    isOpen.value = !isOpen.value
  }

  const selectLanguage = (lang: 'en' | 'ru') => {
    setLanguage(lang)
    isOpen.value = false
  }
</script>

<template>
  <div class="language-switcher relative">
    <!-- Кнопка с текущим языком -->
    <button
      class="flex items-center justify-center w-[52px] h-[52px] rounded-full bg-white border-2 border-light-gray"
      :class="{ 'ring-2 ring-purple-500': isOpen }"
      @click="toggleMenu"
    >
      <div class="w-6 h-6 rounded-full overflow-hidden">
        <span class="block w-full h-full text-[24px] leading-none">{{
          languages.find((lang) => lang.code === currentLanguage)?.flag
        }}</span>
      </div>
    </button>

    <!-- Выпадающее меню -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <div v-if="isOpen" class="absolute top-full right-0 mt-2 bg-transparent">
        <div class="flex flex-col gap-2">
          <button
            v-for="lang in availableLanguages"
            :key="lang.code"
            class="flex items-center justify-center w-[52px] h-[52px] rounded-full bg-white border-2 border-light-gray"
            @click="selectLanguage(lang.code)"
          >
            <div class="w-6 h-6 rounded-full overflow-hidden">
              <span class="block w-full h-full text-[24px] leading-none">{{ lang.flag }}</span>
            </div>
          </button>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
  .language-switcher {
    z-index: 50;
  }

  /* Анимация при наведении на свитчер */
  .language-switcher:hover .language-switcher__dropdown {
    display: block;
  }
</style>
