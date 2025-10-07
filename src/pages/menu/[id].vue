<template>
  <section class="page-menu-id">
    <ProductGroup>
        <template #title>
          Спринг-роллы
        </template>

        <template #default>
          <div class="page-menu-id__products-list">
            <ProductCard class="page-menu-id__product-card" />
            <ProductCard class="page-menu-id__product-card" />
            <ProductCard class="page-menu-id__product-card" />
            <ProductCard class="page-menu-id__product-card" />
            <ProductCard class="page-menu-id__product-card" />
            <ProductCard class="page-menu-id__product-card" />
            <ProductCard class="page-menu-id__product-card" />
          </div>
        </template>
      </ProductGroup>
  </section>
</template>

<script setup lang="ts">
import ProductGroup from '~/components/product/productGroup/ProductGroup.vue';
import ProductCard from '~/components/product/productCard/ProductCard.vue';

const route = useRoute();

const menuId = computed(() => route.params.id as string);

// Устанавливаем мета-данные для SEO
useHead({
  title: `Меню - Forest Rest`,
  meta: [
    {
      name: 'description',
      content: `Меню ${menuId} в ресторане Forest Rest`
    }
  ]
});
</script>

<style lang="scss">
@use '~/pages/styles/pageMenuId/page-menu-id' as *;
</style>
