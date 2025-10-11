# Open Graph изображения

## Требования к изображениям

### Основное изображение (og-image.jpg)
- **Размер**: 1200x630 пикселей (оптимально для Facebook, LinkedIn, Twitter)
- **Формат**: JPG или PNG
- **Вес**: до 300 KB
- **Соотношение сторон**: 1.91:1

### Дополнительные размеры (опционально)
- **Twitter**: 1200x600 пикселей (2:1)
- **Instagram**: 1080x1080 пикселей (квадрат)
- **LinkedIn**: 1200x627 пикселей

## Дизайн-гайдлайн

### Содержание
1. **Логотип/название**: Forest Rest
2. **Слоган**: "Изысканная кухня в атмосфере природы"
3. **Изображение**: Красивое фото блюда или интерьера ресторана
4. **Цветовая схема**:
   - Основной цвет: #2D5F3F (зеленый)
   - Акцентный: #D4AF37 (золотой)
   - Фон: Светлый или с текстурой дерева/природы

### Элементы дизайна
- Использовать шрифт Nunito (как в основном сайте)
- Добавить иконки или элементы природы (листья, деревья)
- Обеспечить хороший контраст для читаемости текста
- Оставить безопасные зоны по краям (50px со всех сторон)

## Инструменты для создания

### Онлайн-редакторы
- **Canva**: https://www.canva.com/
  - Шаблоны: "Facebook Post" → 1200x630
- **Figma**: https://www.figma.com/
- **Adobe Express**: https://www.adobe.com/express/

### Готовые шаблоны
- https://www.canva.com/templates/?query=og-image
- https://www.figma.com/community/search?resource_type=mixed&sort_by=relevancy&query=og+image

## Структура файлов

```
public/
├── og-image.jpg           # Основное изображение (1200x630)
├── og-images/
│   ├── home.jpg          # Для главной страницы
│   ├── menu.jpg          # Для страниц меню
│   ├── about.jpg         # Для страницы "О нас"
│   ├── contacts.jpg      # Для страницы контактов
│   └── delivery.jpg      # Для страницы доставки
└── favicon/
    ├── favicon.ico
    ├── apple-touch-icon.png (180x180)
    ├── favicon-32x32.png
    └── favicon-16x16.png
```

## Проверка изображений

После создания проверьте как выглядят изображения:

1. **Facebook Debugger**: https://developers.facebook.com/tools/debug/
2. **Twitter Card Validator**: https://cards-dev.twitter.com/validator
3. **LinkedIn Post Inspector**: https://www.linkedin.com/post-inspector/
4. **Open Graph Checker**: https://www.opengraph.xyz/

## Пример кода для использования разных изображений

Уже реализовано в `useSeo` composable:

```typescript
useSeo({
  title: 'Заголовок',
  description: 'Описание',
  image: '/og-images/menu.jpg' // Кастомное изображение
});
```

## Временное решение

До создания собственных изображений используется изображение по умолчанию:
`https://ekimovde.github.io/forest-rest/og-image.jpg`

Рекомендуется создать уникальные изображения для лучшего вовлечения в социальных сетях.
