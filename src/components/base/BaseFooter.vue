<template>
  <footer class="base-footer">
    <!-- CTA секция -->
    <div class="base-footer__cta">
      <div class="base-footer__cta-wrapper g-container">
        <div class="base-footer__cta-content">
          <h3 class="base-footer__cta-title">
            🎉 Подпишитесь на наши новости
          </h3>

          <p class="base-footer__cta-text">
            Узнавайте первыми о новых блюдах, акциях и специальных предложениях
          </p>
        </div>

        <div class="base-footer__cta-actions">
          <div class="base-footer__cta-social">
            <a
              v-for="social in socialLinks"
              :key="social.id"
              :href="social.link"
              :title="social.title"
              class="base-footer__social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i :class="social.icon" />
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Основная секция -->
    <div class="base-footer__main">
      <div class="base-footer__main-wrapper g-container">
        <!-- О ресторане -->
        <div class="base-footer__about">
          <NuxtLink
            to="/"
            class="base-footer__logo"
          >
            <img
              src="~/assets/images/logo.png"
              alt="Forest Rest"
              class="base-footer__logo-image"
            />
          </NuxtLink>

          <p class="base-footer__description">
            Ресторан изысканной кухни с доставкой по Чите. Свежие продукты, профессиональные повара и быстрая доставка.
          </p>

          <div class="base-footer__features">
            <div
              v-for="feature in features"
              :key="feature.id"
              class="base-footer__feature"
            >
              <span class="base-footer__feature-icon">
                {{ feature.icon }}
              </span>

              <span class="base-footer__feature-text">
                {{ feature.text }}
              </span>
            </div>
          </div>
        </div>

        <!-- Навигация -->
        <div class="base-footer__nav">
          <div
            v-for="block in footerBlocks"
            :key="`base-footer-block-${block.title}`"
            class="base-footer__block"
          >
            <h4 class="base-footer__block-title">
              {{ block.title }}
            </h4>

            <ul class="base-footer__block-list">
              <li
                v-for="item in block.items"
                :key="`base-footer-block-item-${item.title}`"
                class="base-footer__block-item"
              >
                <NuxtLink :to="item.href">
                  {{ item.title }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>

        <!-- Контакты и режим работы -->
        <div class="base-footer__contacts">
          <h4 class="base-footer__block-title">
            Контакты
          </h4>

          <div class="base-footer__contact-list">
            <a
              href="tel:+79148085550"
              class="base-footer__contact-item"
            >
              <span class="base-footer__contact-icon">
                📞
              </span>

              <span class="base-footer__contact-text">
                +7 (914) 808-55-50
              </span>
            </a>

            <div class="base-footer__contact-item">
              <span class="base-footer__contact-icon">
                📍
              </span>

              <span class="base-footer__contact-text">
                г. Чита, ул. Примерная, д. 1
              </span>
            </div>

            <a
              href="mailto:info@forestrest.ru"
              class="base-footer__contact-item"
            >
              <span class="base-footer__contact-icon">
                📧
              </span>

              <span class="base-footer__contact-text">
                info@forestrest.ru
              </span>
            </a>
          </div>

          <div class="base-footer__schedule">
            <h5 class="base-footer__schedule-title">
              Режим работы
            </h5>

            <p class="base-footer__schedule-text">
              Ежедневно: 11:00 — 23:00
            </p>

            <p class="base-footer__schedule-note">
              Прием заказов до 22:30
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Нижняя секция -->
    <div class="base-footer__bottom">
      <div class="base-footer__bottom-wrapper g-container">
        <div class="base-footer__copyright">
          <p class="base-footer__copyright-text">
            © {{ currentYear }} Forest Rest. Все права защищены.
          </p>
        </div>

        <div class="base-footer__legal">
          <NuxtLink
            to="/legal-information"
            class="base-footer__legal-link"
          >
            Политика конфиденциальности
          </NuxtLink>

          <span class="base-footer__legal-divider">•</span>

          <NuxtLink
            to="/legal-information"
            class="base-footer__legal-link"
          >
            Пользовательское соглашение
          </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { CATEGORIES } from '~/mocks';

interface FooterBlock {
  title: string;
  items: {
    title: string;
    href: string;
  }[];
}

// Социальные сети
const socialLinks = [
  {
    id: 1,
    title: 'VK',
    icon: 'bx bxl-vk',
    link: 'https://vk.com/forestrest'
  },
  {
    id: 2,
    title: 'Telegram',
    icon: 'bx bxl-telegram',
    link: 'https://t.me/forestrest'
  },
  {
    id: 3,
    title: 'Instagram',
    icon: 'bx bxl-instagram-alt',
    link: 'https://instagram.com/forestrest'
  }
];

// Особенности ресторана
const features = [
  {
    id: 1,
    icon: '✓',
    text: 'Свежие продукты'
  },
  {
    id: 2,
    icon: '✓',
    text: 'Быстрая доставка'
  },
  {
    id: 3,
    icon: '✓',
    text: 'Качественный сервис'
  }
];

// Блоки навигации
const footerBlocks = computed<FooterBlock[]>(() => [
  {
    title: 'Информация',
    items: [
      { title: 'О нас', href: '/about' },
      { title: 'Доставка и оплата', href: '/delivery' },
      { title: 'Контакты', href: '/contacts' },
      { title: 'Правовая информация', href: '/legal-information' },
    ],
  },
  {
    title: 'Категории',
    items: Object.values(CATEGORIES).slice(0, 6).map((category) => ({
      title: category.title,
      href: category.href,
    })),
  },
]);

// Текущий год для копирайта
const currentYear = new Date().getFullYear();
</script>

<style lang="scss">
    @use '~/components/base/styles/baseFooter/component' as *;
</style>
