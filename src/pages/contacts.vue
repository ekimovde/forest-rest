<template>
  <section class="page-contacts">
    фыафыа
  </section>
</template>

<script setup lang="ts">
import { useSeo } from '~/composables/useSeo';

// Устанавливаем мета-данные для SEO
useSeo({
  title: 'Контакты',
  description: 'Свяжитесь с рестораном Forest Rest. Адрес, телефон, время работы. Мы всегда рады вашим вопросам и предложениям.',
  keywords: ['контакты Forest Rest', 'телефон ресторана', 'адрес ресторана', 'время работы', 'связаться'],
  type: 'website'
});
</script>

<style lang="scss">
    @use '~/pages/styles/pageContacts/page-contacts' as *;
</style>
