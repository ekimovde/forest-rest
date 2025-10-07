<template>
  <section class="page-index">
    <div class="page-index__categories">
      <ProductGroup
        view="only"
        href="/menu/rolls"
      >
        <template #title>
          Роллы
        </template>

        <template #default>
          <div class="page-index__products-list">
            <ProductCard class="page-index__product-card" />
            <ProductCard class="page-index__product-card" />
            <ProductCard class="page-index__product-card" />
          </div>
        </template>
      </ProductGroup>

      <ProductGroup
        view="only"
        href="/menu/soups"
      >
        <template #title>
          Супы
        </template>

        <template #default>
          <div class="page-index__products-list">
            <ProductCard class="page-index__product-card" />
            <ProductCard class="page-index__product-card" />
            <ProductCard class="page-index__product-card" />
          </div>
        </template>
      </ProductGroup>

      <ProductGroup
        view="only"
        href="/menu/pizza"
      >
        <template #title>
          Пицца
        </template>

        <template #default>
          <div class="page-index__products-list">
            <ProductCard class="page-index__product-card" />
            <ProductCard class="page-index__product-card" />
            <ProductCard class="page-index__product-card" />
          </div>
        </template>
      </ProductGroup>
    </div>
  </section>
</template>

<script setup lang="ts">
import ProductGroup from '~/components/product/productGroup/ProductGroup.vue';
import ProductCard from '~/components/product/productCard/ProductCard.vue';

// Устанавливаем мета-данные для SEO
useHead({
  title: 'Forest Rest - Главная',
  meta: [
    { name: 'description', content: 'Добро пожаловать в ресторан Forest Rest. Выберите меню и наслаждайтесь вкусными блюдами.' }
  ]
});
</script>

<style lang="scss">
    @use '~/pages/styles/pageIndex/page-index' as *;
</style>
