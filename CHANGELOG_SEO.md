# Changelog: SEO и GitHub Actions

## 🎉 Что было сделано

### 1. GitHub Actions (Деплой)
- ✅ Создан workflow для автоматического деплоя на GitHub Pages
- ✅ Настроена автоматическая сборка при push в master
- ✅ Добавлен линтинг (ESLint, Stylelint) в CI/CD
- ✅ Настроена переменная окружения NUXT_APP_BASE_URL
- ✅ Добавлены типы Node.js (@types/node)

**Файлы:**
- `.github/workflows/deploy.yml`
- `.github/DEPLOY.md`
- `DEPLOYMENT_GUIDE.md`

### 2. SEO оптимизация
- ✅ Установлен @nuxtjs/seo модуль
- ✅ Настроены глобальные SEO мета-теги
- ✅ Добавлены Open Graph теги (Facebook, LinkedIn)
- ✅ Добавлены Twitter Card теги
- ✅ Создан composable `useSeo()` для управления SEO
- ✅ Добавлено SEO на все страницы проекта

**Файлы:**
- `src/composables/useSeo.ts`
- Обновлены все страницы в `src/pages/`

### 3. Структурированные данные (Schema.org)
- ✅ Создан composable `useRestaurantSchema()`
- ✅ Добавлена JSON-LD разметка для ресторана
- ✅ Настроены данные Organization, Restaurant
- ✅ Добавлены часы работы, адрес, меню

**Файлы:**
- `src/composables/useRestaurantSchema.ts`

### 4. Техническое SEO
- ✅ Создан и настроен `robots.txt`
- ✅ Автоматическая генерация `sitemap.xml`
- ✅ Canonical URLs для всех страниц
- ✅ Правильные мета-теги viewport, charset
- ✅ Theme color для мобильных устройств

**Файлы:**
- `public/robots.txt`
- `nuxt.config.ts` (sitemap настройки)

### 5. Open Graph изображения
- ✅ Подготовлена структура для OG изображений
- ✅ Создана инструкция по созданию изображений
- ⚠️ Требуется создать реальные изображения (1200x630px)

**Файлы:**
- `public/og-images/README.md`
- `public/og-image-placeholder.txt`

### 6. Документация
- ✅ Подробное SEO руководство
- ✅ Краткое руководство по деплою
- ✅ Инструкция по созданию OG изображений
- ✅ Обновлен README.md

**Файлы:**
- `SEO_GUIDE.md`
- `DEPLOYMENT_GUIDE.md`
- `README.md`

## 📊 Настроенные страницы

| Страница | Title | SEO | OpenGraph | Schema |
|----------|-------|-----|-----------|--------|
| `/` (Главная) | ✅ | ✅ | ✅ | ✅ Restaurant |
| `/menu/[id]` | ✅ Динамический | ✅ | ✅ | - |
| `/about` | ✅ | ✅ | ✅ | - |
| `/contacts` | ✅ | ✅ | ✅ | - |
| `/delivery` | ✅ | ✅ | ✅ | - |
| `/cart` | ✅ | ✅ noindex | ✅ | - |
| `/legal-information` | ✅ | ✅ noindex | ✅ | - |

## 🔧 Изменения в конфигурации

### package.json
```json
{
  "dependencies": {
    "@nuxtjs/seo": "^2.0.3",  // НОВОЕ
    // ... остальные зависимости
  },
  "devDependencies": {
    "@types/node": "^24.7.2",  // НОВОЕ
    // ... остальные зависимости
  }
}
```

### nuxt.config.ts
```typescript
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/seo',  // НОВОЕ
    // ... остальные модули
  ],

  // НОВОЕ: SEO конфигурация
  site: {
    url: 'https://ekimovde.github.io',
    name: 'Forest Rest',
    description: '...',
    defaultLocale: 'ru',
  },

  seo: {
    redirectToCanonicalSiteUrl: true,
  },

  sitemap: {
    strictNuxtContentPaths: true,
    autoLastmod: true,
  },

  ogImage: {
    enabled: true,
  },

  schemaOrg: {
    identity: {
      type: 'Restaurant',
      // ...
    }
  }
})
```

### tsconfig.json
```json
{
  "compilerOptions": {
    "types": ["node"]  // НОВОЕ
  }
}
```

## 📝 Следующие шаги

### Обязательно
1. **Установите зависимости**: `npm install`
2. **Создайте OG изображение**: `/public/og-image.jpg` (1200x630px)
3. **Заполните реальные данные**:
   - Адрес ресторана в `useRestaurantSchema.ts`
   - Телефон в `useRestaurantSchema.ts`
   - Контент на страницах about, contacts, delivery
4. **Настройте GitHub Pages**:
   - Settings → Pages → Source: GitHub Actions
5. **Задеплойте**: `git push origin master`

### Рекомендуется
1. Создать OG изображения для разных разделов
2. Добавить Google Analytics или Yandex.Metrica
3. Зарегистрироваться в Google Search Console
4. Зарегистрироваться в Yandex Webmaster
5. Добавить социальные сети в footer
6. Оптимизировать изображения продуктов
7. Добавить ALT атрибуты к изображениям

## 🔗 Полезные ссылки

**Документация:**
- [SEO_GUIDE.md](SEO_GUIDE.md) - Полное SEO руководство
- [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) - Инструкция по деплою
- [.github/DEPLOY.md](.github/DEPLOY.md) - Детальная инструкция по деплою

**Инструменты проверки:**
- Facebook Debugger: https://developers.facebook.com/tools/debug/
- Twitter Validator: https://cards-dev.twitter.com/validator
- Google Search Console: https://search.google.com/search-console
- PageSpeed Insights: https://pagespeed.web.dev/

## ⚙️ Команды

```bash
# Установка зависимостей
npm install

# Разработка
npm run dev

# Сборка
npm run build

# Генерация статики
npm run generate

# Проверка линтерами
npm run lint:eslint
npm run lint:styles

# Деплой (автоматически через GitHub Actions)
git add .
git commit -m "feat: add SEO and deployment"
git push origin master
```

## 📈 Результаты

После внедрения изменений ожидаются:
- ✅ Лучшая индексация в поисковых системах
- ✅ Красивые превью в социальных сетях
- ✅ Автоматический деплой при каждом push
- ✅ Структурированные данные для поисковиков
- ✅ Улучшенное SEO на всех страницах

---

**Дата**: 11 октября 2025
**Автор**: Denis Ekimov
**Версия**: 1.0.0
