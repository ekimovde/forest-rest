<template>
  <section class="page-legal-information">
    фыафыа
  </section>
</template>

<script setup lang="ts">
import { useSeo } from '~/composables/useSeo';

// Устанавливаем мета-данные для SEO
useSeo({
  title: 'Юридическая информация',
  description: 'Юридическая информация, политика конфиденциальности и пользовательское соглашение ресторана Forest Rest.',
  keywords: ['юридическая информация', 'политика конфиденциальности', 'пользовательское соглашение'],
  type: 'website',
  noIndex: true
});
</script>

<style lang="scss">
    @use '~/pages/styles/pageLegalInformation/page-legal-information' as *;
</style>
