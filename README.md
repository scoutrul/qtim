# QTIM тестовое задание - фронт

## О проекте

Тестовое задание представляет собой реализацию блога с использованием Nuxt 3 и TypeScript. Проект демонстрирует современные практики разработки веб-приложений с использованием Vue 3 Composition API.

### Демо
- 🌐 [Версия на Vercel](https://qtim-aelgtqerq-anton-gs-projects.vercel.app)
- 📂 [GitHub репозиторий](https://github.com/scoutrul/qtim)

### Основные возможности

📄 Вывод списка статей с пагинацией
  - Динамическая пагинация с бесконечной прокруткой
  - Кэширование загруженных данных
  - Оптимизированная загрузка при скролле

🔍 Детальные страницы статей

🔄 Лоадеры (скелетоны) для статей

🖼 Заглушки для изображений, если они не загружаются

🌍 Смена языка (EN/RU)

📱 Адаптивная вёрстка (сетка меняется на мобильных устройствах)

🔝 Кнопка "Наверх"

📩 Форма обратной связи

❌ Страница ошибки 404

🎭 Анимации и hover-эффекты для интерактивности

### API Endpoints:
- Список статей: `https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/`
- Детальная страница: `https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/${id}`

### Дизайн
Макет доступен в [Figma](https://www.figma.com/file/YuLYXnZmLk1U5sKAYjQ0Qy/Test?type=design&node-id=0-1&mode=design&t=qUknJKzxfWOznHn0-0)

## Технологический стек

### Основные технологии:
- **Nuxt 3** - Фреймворк для создания Vue.js приложений
- **Vue 3** - JavaScript фреймворк для создания пользовательских интерфейсов
- **TypeScript** - Типизированный JavaScript
- **Composition API** - Современный подход к организации логики компонентов
- **Vue Router** - Официальная библиотека маршрутизации для Vue.js

### Стилизация и UI:
- **Tailwind CSS** - Utility-first CSS фреймворк
- **PostCSS** - Инструмент для трансформации CSS
- **Autoprefixer** - Плагин для добавления вендорных префиксов
- **@nuxtjs/i18n** - Модуль для интернационализации
- **@vueuse/core** - Коллекция полезных Vue Composition API утилит

### Инструменты разработки:
- **ESLint** - Линтер для JavaScript/TypeScript
- **Prettier** - Форматтер кода
- **Vite** - Сборщик и dev-сервер
- **Vitest** - Фреймворк для тестирования

## Установка и запуск проекта

### Установка зависимостей:

```bash
# Установка зависимостей
npm install
# или
yarn install
```

### Запуск в режиме разработки:

```bash
npm run dev
# или
yarn dev
```

### Сборка для продакшена:

```bash
npm run build
# или
yarn build
```

### Предпросмотр продакшен-сборки:

```bash
npm run preview
# или
yarn preview
```

## Структура проекта

```
├── assets/          # Статические ресурсы (изображения, стили)
├── components/      # Vue компоненты
│   ├── article/    # Компоненты для статей
│   ├── contact/    # Компоненты формы обратной связи
│   ├── footer/     # Компоненты футера
│   ├── layout/     # Компоненты макета
│   ├── pages/      # Компоненты страниц
│   └── ui/         # Переиспользуемые UI компоненты
├── composables/     # Композабл функции
│   ├── useI18n.ts          # Логика интернационализации
│   ├── useContactModal.ts  # Логика модального окна контактов
│   ├── usePosts.ts         # Логика работы со статьями
│   ├── useScroll.ts        # Логика скролла
│   └── useSkeleton.ts      # Логика скелетонов
├── constants/       # Константы и конфигурации
├── entities/        # Бизнес-сущности
├── layouts/         # Шаблоны страниц
├── pages/          # Маршруты приложения
│   ├── article/    # Страницы статей
│   ├── about.vue   # Страница о нас
│   ├── index.vue   # Главная страница
│   └── works.vue   # Страница работ
├── public/         # Публичные файлы
├── types/          # TypeScript типы
│   ├── components.d.ts  # Типы компонентов
│   ├── typography.ts    # Типы типографики
│   ├── colors.ts        # Типы цветов
│   └── post.ts          # Типы статей
└── utils/          # Вспомогательные функции

# Конфигурационные файлы
├── .eslintrc.json     # Конфигурация ESLint
├── .prettierrc        # Конфигурация Prettier
├── nuxt.config.ts     # Конфигурация Nuxt
├── tailwind.config.js # Конфигурация Tailwind
└── tsconfig.json      # Конфигурация TypeScript
```
