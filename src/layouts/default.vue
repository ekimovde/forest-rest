<template>
  <div class="layout-default">
    <BaseHeader />

    <div class="layout-default__wrapper">
      <BaseCatalog />

      <div class="g-container">
        <NuxtPage />
      </div>
    </div>

    <div
      v-if="isWidgetCartVisible"
      class="layout-default__widgets g-container"
    >
      <BaseWidgetCart
        :totalItems="totalItems"
        :totalPrice="orderPrice"
      />
    </div>

    <BaseFooter />
  </div>
</template>

<script setup lang="ts">
import {useCartStore} from '~/stores';

import BaseHeader from '~/components/base/BaseHeader.vue';
import BaseCatalog from '~/components/base/BaseCatalog.vue';
import BaseWidgetCart from '~/components/base/BaseWidgetCart.vue';
import BaseFooter from '~/components/base/BaseFooter.vue';

const route = useRoute();
const { orderPrice, totalItems } = storeToRefs(useCartStore());

const isWidgetCartVisible = computed(() => {
  const notAllowedRoutePaths = ['/cart', '/profile'];

  return !notAllowedRoutePaths.includes(route.path) && totalItems.value > 0;
});
</script>

<style scoped lang="scss">
  @use '~/layouts/styles/layoutDefault/layout-default' as *;
</style>
