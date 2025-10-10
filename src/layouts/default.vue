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
import BaseHeader from '~/components/base/baseHeader/BaseHeader.vue';
import BaseCatalog from '~/components/base/baseCatalog/BaseCatalog.vue';
import BaseWidgetCart from '~/components/base/baseWidgetCart/BaseWidgetCart.vue';
import BaseFooter from '~/components/base/baseFooter/BaseFooter.vue';
import { useCartStore } from '~/stores';

const route = useRoute();
const { orderPrice, totalItems } = storeToRefs(useCartStore());

const isWidgetCartVisible = computed(() => !route.path.includes('/cart') && totalItems.value > 0);
</script>

<style scoped lang="scss">
  @use '~/layouts/styles/layoutDefault/layout-default' as *;
</style>
