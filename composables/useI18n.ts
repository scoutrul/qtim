import { ref, onMounted } from 'vue'
import { navigateTo } from 'nuxt/app'
import { useRoute } from 'vue-router'

type Language = 'en' | 'ru'

const translations = {
  en: {
    navigation: {
      works: 'Works',
      about: 'About',
      letsWork: "Let's Work",
      changeLanguage: 'Change language',
    },
    common: {
      readMore: 'Read more',
      articles: 'Articles',
      scrollToTop: 'Go'
    },
    footer: {
      rights: 'All rights reserved',
      project: {
        title: 'Project',
        description: 'Your project description',
        isThere: 'Is there a project?'
      },
      contacts: {
        title: 'Contacts',
        forAllQuestions: 'For all questions',
        officeInRussia: 'Office in Russia',
        officeInDubai: 'Office in Dubai'
      },
      goButton: 'Go!'
    },
    about: {
      description: 'Information about our company and team will be displayed here.'
    },
    works: {
      description: 'Our portfolio and projects will be displayed here.'
    },
    social: {
      facebook: 'Facebook',
      instagram: 'Instagram',
      telegram: 'Telegram',
      behance: 'Behance',
      linkedin: 'LinkedIn',
      privacyPolicy: 'Privacy Policy'
    },
    errors: {
      loading: 'Loading error. Please try again later.'
    }
  },
  ru: {
    navigation: {
      works: 'Работы',
      about: 'О нас',
      letsWork: 'Давайте',
      changeLanguage: 'Сменить язык',
    },
    common: {
      readMore: 'Читать далее',
      articles: 'Статьи',
      scrollToTop: 'Наверх'
    },
    footer: {
      rights: 'Все права защищены',
      project: {
        title: 'Проект',
        description: 'Описание вашего проекта',
        isThere: 'Есть проект?'
      },
      contacts: {
        title: 'Контакты',
        forAllQuestions: 'По всем вопросам',
        officeInRussia: 'Офис в России',
        officeInDubai: 'Офис в Дубае'
      },
      goButton: 'Го!'
    },
    about: {
      description: 'Здесь будет отображаться информация о нашей компании и команде.'
    },
    works: {
      description: 'Здесь будет отображаться наше портфолио и проекты.'
    },
    social: {
      facebook: 'Фейсбук',
      instagram: 'Инстаграм',
      telegram: 'Телеграм',
      behance: 'Беханс',
      linkedin: 'Линкедин',
      privacyPolicy: 'Политика конфиденциальности'
    },
    errors: {
      loading: 'Ошибка загрузки. Попробуйте позже.'
    }
  }
}

export const useI18n = () => {
  const currentLanguage = ref<Language>('en')

  const setLanguage = (lang: Language) => {
    currentLanguage.value = lang
    localStorage.setItem('language', lang)
    window.location.reload()
  }

  const t = (key: string) => {
    const keys = key.split('.')
    let translation: any = translations[currentLanguage.value]
    
    for (const k of keys) {
      translation = translation[k]
    }
    
    return translation || key
  }

  onMounted(() => {
    const savedLang = localStorage.getItem('language') as Language
    if (savedLang && ['en', 'ru'].includes(savedLang)) {
      currentLanguage.value = savedLang
    }
  })

  return {
    currentLanguage,
    setLanguage,
    t
  }
} 