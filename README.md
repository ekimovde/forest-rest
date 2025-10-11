# 🌲 Forest Rest

Веб-приложение для ресторана Forest Rest, разработанное на Nuxt 3.

## 🚀 Технологии

- **Nuxt 3** - The Intuitive Vue Framework
- **Vue 3** - Progressive JavaScript Framework
- **Pinia** - State Management
- **VueUse** - Collection of Vue Composition Utilities
- **Vee-Validate** + **Yup** - Form Validation
- **Swiper** - Modern Mobile Touch Slider
- **SCSS** - CSS Preprocessor
- **TypeScript** - JavaScript with syntax for types

## 📦 Установка

```bash
# Установка зависимостей
npm install

# (Опционально) Создайте .env файл из примера
cp .env.example .env
```

## 🛠️ Разработка

```bash
# Запуск dev сервера на http://localhost:3000
npm run dev
```

## 🏗️ Сборка

```bash
# Сборка для production
npm run build

# Генерация статических файлов
npm run generate

# Предпросмотр production сборки
npm run preview
```

## 🧹 Линтинг

```bash
# Проверка JavaScript/Vue файлов
npm run lint:eslint

# Автоматическое исправление ошибок ESLint
npm run lint:eslint:fix

# Проверка стилей
npm run lint:styles

# Автоматическое исправление ошибок Stylelint
npm run lint:styles:fix
```

## 🌐 Развёртывание

Проект настроен для автоматического развёртывания на GitHub Pages через GitHub Actions.

### Настройка GitHub Pages

1. Перейдите в `Settings` → `Pages` вашего репозитория
2. В разделе "Build and deployment" → Source выберите `GitHub Actions`
3. Сделайте push в ветку `master`:
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin master
   ```
4. Сайт будет доступен по адресу: `https://<username>.github.io/forest-rest/`

Подробная инструкция: [.github/DEPLOY.md](.github/DEPLOY.md)

## 📁 Структура проекта

```
forest-rest/
├── .github/
│   └── workflows/        # GitHub Actions workflows
├── public/              # Статические файлы
├── src/
│   ├── assets/         # Ресурсы (шрифты, иконки, изображения, стили)
│   ├── components/     # Vue компоненты
│   ├── composables/    # Композаблы
│   ├── constants/      # Константы
│   ├── enums/          # Перечисления
│   ├── interfaces/     # TypeScript интерфейсы
│   ├── layouts/        # Layouts
│   ├── mocks/          # Моковые данные
│   ├── pages/          # Страницы приложения
│   ├── plugins/        # Плагины
│   ├── schemas/        # Схемы валидации
│   ├── stores/         # Pinia stores
│   └── utils/          # Утилиты
├── .gitignore
├── eslint.config.js    # Конфигурация ESLint
├── nuxt.config.ts      # Конфигурация Nuxt
├── package.json
├── stylelint.config.cjs # Конфигурация Stylelint
└── tsconfig.json       # Конфигурация TypeScript
```

## 👨‍💻 Автор

Denis Ekimov - [GitHub](https://github.com/ekimovde)

## 📄 Лицензия

MIT
