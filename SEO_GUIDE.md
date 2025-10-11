# 🔍 SEO Руководство для Forest Rest

## ✅ Что уже настроено

### 1. Технические настройки
- ✅ @nuxtjs/seo модуль установлен и настроен
- ✅ Автоматическая генерация sitemap.xml
- ✅ robots.txt настроен
- ✅ Canonical URLs для всех страниц
- ✅ Мета-теги для всех страниц
- ✅ Schema.org разметка (JSON-LD) для ресторана

### 2. Open Graph и Social Media
- ✅ Open Graph теги (Facebook, LinkedIn)
- ✅ Twitter Card теги
- ✅ Динамические OG изображения (требуется создать)
- ✅ Правильные мета-теги для социальных сетей

### 3. Производительность
- ✅ Оптимизированная сборка через Nuxt 3
- ✅ Статическая генерация (SSG)
- ✅ Кэширование ресурсов

### 4. Структурированные данные
- ✅ Restaurant Schema
- ✅ Breadcrumbs (можно добавить при необходимости)
- ✅ Organization Schema

## 📄 Настроенные страницы

### Главная страница (/)
- **Title**: Главная | Forest Rest
- **Description**: Ресторан Forest Rest - доставка изысканных блюд в Москве...
- **Keywords**: ресторан, доставка еды, Forest Rest, пицца, роллы...
- **Schema**: Restaurant

### Меню (/menu/[id])
- **Title**: [Категория] | Forest Rest
- **Description**: Динамическое описание на основе категории
- **Keywords**: Название категории + общие ключевые слова
- **Динамический контент**: Адаптируется под категорию и подкатегорию

### О нас (/about)
- **Title**: О нас | Forest Rest
- **Description**: Узнайте больше о ресторане Forest Rest...
- **Focus**: История и философия ресторана

### Контакты (/contacts)
- **Title**: Контакты | Forest Rest
- **Description**: Свяжитесь с рестораном Forest Rest...
- **Focus**: Контактная информация

### Доставка (/delivery)
- **Title**: Доставка и оплата | Forest Rest
- **Description**: Условия доставки еды из ресторана...
- **Focus**: Условия доставки и оплаты

### Корзина (/cart)
- **Title**: Корзина | Forest Rest
- **noindex**: true (страница не индексируется)

### Юридическая информация (/legal-information)
- **Title**: Юридическая информация | Forest Rest
- **noindex**: true (страница не индексируется)

## 🛠 Использование SEO в коде

### Базовое использование

```typescript
// В любом компоненте или странице
useSeo({
  title: 'Заголовок страницы',
  description: 'Описание страницы для поисковых систем',
  keywords: ['ключевое', 'слово', 'список'],
  type: 'website' // или 'article', 'product'
});
```

### С кастомным изображением

```typescript
useSeo({
  title: 'Специальная страница',
  description: 'Описание',
  image: '/og-images/special-page.jpg'
});
```

### Запретить индексацию

```typescript
useSeo({
  title: 'Служебная страница',
  description: 'Описание',
  noIndex: true // Добавит meta robots noindex, nofollow
});
```

### Добавить Schema.org разметку

```typescript
// Используйте на главной странице или странице контактов
useRestaurantSchema();
```

## 📊 Файлы конфигурации

### nuxt.config.ts
```typescript
site: {
  url: 'https://ekimovde.github.io',
  name: 'Forest Rest',
  description: 'Ресторан Forest Rest - изысканная кухня...',
  defaultLocale: 'ru',
}
```

### Composables
- **useSeo.ts**: Управление SEO мета-тегами
- **useRestaurantSchema.ts**: JSON-LD схема ресторана

## 🎯 Рекомендации по SEO

### Контент
1. ✅ Уникальные title и description для каждой страницы
2. ✅ Релевантные ключевые слова
3. ⚠️ Добавьте больше текстового контента на страницы
4. ⚠️ Используйте заголовки H1-H6 правильно
5. ⚠️ Добавьте ALT атрибуты к изображениям

### Технические аспекты
1. ✅ Мобильная адаптивность
2. ✅ Быстрая загрузка страниц
3. ✅ HTTPS (через GitHub Pages)
4. ✅ Корректные canonical URLs
5. ⚠️ Настройте 301 редиректы при необходимости

### Социальные сети
1. ✅ Open Graph настроен
2. ✅ Twitter Cards настроены
3. ⚠️ Создайте уникальные OG изображения (см. /public/og-images/README.md)
4. ⚠️ Добавьте ссылки на социальные сети в footer

## 🖼 Open Graph изображения

Создайте изображения в формате 1200x630px:

1. **Основное** (`/public/og-image.jpg`)
2. **Для разделов меню** (`/public/og-images/menu.jpg`)
3. **О нас** (`/public/og-images/about.jpg`)
4. **Контакты** (`/public/og-images/contacts.jpg`)

Подробная инструкция: `/public/og-images/README.md`

## 🔗 Полезные инструменты

### Проверка SEO
- **Google Search Console**: https://search.google.com/search-console
- **Bing Webmaster Tools**: https://www.bing.com/webmasters
- **Yandex Webmaster**: https://webmaster.yandex.ru/

### Проверка Open Graph
- **Facebook Debugger**: https://developers.facebook.com/tools/debug/
- **Twitter Card Validator**: https://cards-dev.twitter.com/validator
- **LinkedIn Inspector**: https://www.linkedin.com/post-inspector/
- **Open Graph Check**: https://www.opengraph.xyz/

### Анализ производительности
- **Google PageSpeed Insights**: https://pagespeed.web.dev/
- **GTmetrix**: https://gtmetrix.com/
- **WebPageTest**: https://www.webpagetest.org/

### SEO аудит
- **Google Lighthouse**: Встроен в Chrome DevTools
- **Screaming Frog**: https://www.screamingfrogseoseotools.com/
- **Ahrefs**: https://ahrefs.com/ (платный)

## 📈 Метрики и аналитика

### Google Analytics (рекомендуется добавить)

```typescript
// В nuxt.config.ts
modules: [
  // ... другие модули
  '@nuxtjs/google-analytics',
],
googleAnalytics: {
  id: 'UA-XXX-X' // Ваш ID
}
```

### Yandex.Metrica (рекомендуется для РФ)

```typescript
// В nuxt.config.ts
modules: [
  // ... другие модули
  'nuxt-yandex-metrika',
],
yandexMetrika: {
  id: 'XXXXXXXX',
  webvisor: true,
}
```

## 🎬 Следующие шаги

1. ⚠️ **Создайте OG изображения** (см. /public/og-images/README.md)
2. ⚠️ **Заполните реальный контент** на страницах about, contacts, delivery
3. ⚠️ **Добавьте реальные контакты** в Restaurant Schema
4. ⚠️ **Настройте Google Analytics** или Yandex.Metrica
5. ⚠️ **Зарегистрируйтесь в Search Console** (Google, Yandex)
6. ⚠️ **Создайте аккаунты в соцсетях** и добавьте ссылки
7. ⚠️ **Добавьте breadcrumbs** на страницы для лучшей навигации
8. ⚠️ **Оптимизируйте изображения** (сжатие, современные форматы)

## 📝 Проверочный лист перед запуском

- [ ] Все страницы имеют уникальные title и description
- [ ] Созданы OG изображения
- [ ] robots.txt и sitemap.xml доступны
- [ ] Проверены все ссылки (нет 404)
- [ ] Заполнены реальные контакты
- [ ] Настроена аналитика
- [ ] Проверка в Mobile-Friendly Test
- [ ] Проверка скорости загрузки
- [ ] Регистрация в вебмастерах
- [ ] Проверка Open Graph в социальных сетях

## 💡 Полезные советы

1. **Регулярно обновляйте контент** - поисковики любят свежий контент
2. **Добавьте блог** - для увеличения органического трафика
3. **Локальное SEO** - добавьте адрес, карты, часы работы
4. **Микроразметка для акций** - используйте Offer Schema для спецпредложений
5. **Отзывы** - добавьте раздел с отзывами и разметку Review Schema
6. **FAQ** - добавьте раздел FAQ с разметкой FAQPage Schema

---

**Контакт**: Denis Ekimov - [GitHub](https://github.com/ekimovde)
