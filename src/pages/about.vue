<template>
  <section class="page-about">
    фыафыа
  </section>
</template>

<script setup lang="ts">
import { useSeo } from '~/composables/useSeo';

// Устанавливаем мета-данные для SEO
useSeo({
  title: 'О нас',
  description: 'Узнайте больше о ресторане Forest Rest. Наша история, философия и ценности. Изысканная кухня с использованием свежих продуктов высокого качества.',
  keywords: ['о ресторане', 'Forest Rest', 'история ресторана', 'философия', 'качество продуктов'],
  type: 'website'
});
</script>

<style lang="scss">
    @use '~/pages/styles/pageAbout/page-about' as *;
</style>
