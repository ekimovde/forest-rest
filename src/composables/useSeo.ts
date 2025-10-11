interface SeoOptions {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
  keywords?: string[];
  noIndex?: boolean;
}

export const useSeo = (options: SeoOptions = {}) => {
  const route = useRoute();

  const baseUrl = 'https://ekimovde.github.io/forest-rest';
  const siteName = 'Forest Rest';

  const defaultTitle = 'Forest Rest - Ресторан изысканной кухни';
  const defaultDescription = 'Ресторан Forest Rest - изысканная кухня в атмосфере природы. Доставка блюд высокой кухни, меню из свежих продуктов. Заказывайте онлайн!';
  const defaultImage = `${baseUrl}/og-image.jpg`;

  const title = options.title
    ? `${options.title} | ${siteName}`
    : defaultTitle;

  const description = options.description || defaultDescription;
  const image = options.image || defaultImage;
  const url = options.url || `${baseUrl}${route.path}`;
  const type = options.type || 'website';

  // Базовые мета-теги
  const meta = [
    { name: 'description', content: description },
    { name: 'format-detection', content: 'telephone=no' },

    // Open Graph
    { property: 'og:site_name', content: siteName },
    { property: 'og:type', content: type },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:image', content: image },
    { property: 'og:url', content: url },
    { property: 'og:locale', content: 'ru_RU' },

    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: image },

    // Дополнительные мета-теги
    { name: 'theme-color', content: '#2D5F3F' },
    { name: 'apple-mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
  ];

  // Добавляем keywords если есть
  if (options.keywords && options.keywords.length > 0) {
    meta.push({ name: 'keywords', content: options.keywords.join(', ') });
  }

  // Добавляем noindex если указано
  if (options.noIndex) {
    meta.push({ name: 'robots', content: 'noindex, nofollow' });
  }

  // Устанавливаем мета-теги
  useHead({
    title,
    meta,
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'canonical', href: url },
    ],
  });

  // Устанавливаем SEO мета-теги через useSeoMeta
  useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    ogImage: image,
    ogUrl: url,
    // @ts-ignore
    ogType: type,
    ogSiteName: siteName,
    ogLocale: 'ru_RU',
    twitterCard: 'summary_large_image',
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: image,
  });
};
