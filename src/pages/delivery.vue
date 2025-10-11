<template>
  <section class="page-delivery">
    фыафыа
  </section>
</template>

<script setup lang="ts">
import { useSeo } from '~/composables/useSeo';

// Устанавливаем мета-данные для SEO
useSeo({
  title: 'Доставка и оплата',
  description: 'Условия доставки еды из ресторана Forest Rest. Зоны доставки, стоимость, время, способы оплаты. Быстрая и бесплатная доставка при заказе от 1000₽.',
  keywords: ['доставка еды', 'условия доставки', 'оплата заказа', 'бесплатная доставка', 'Forest Rest доставка'],
  type: 'website'
});
</script>

<style lang="scss">
    @use '~/pages/styles/pageDelivery/page-delivery' as *;
</style>
