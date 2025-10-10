<template>
  <section class="page-menu-id">
    <ProductGroup>
        <template #title>
          {{ category.title }}
        </template>

        <template #types>
          <div
            v-if="category.subcategories.length > 1"
            class="page-index__types"
          >
            <UiButton
              :isCustomActive="!subcategoryId"
              tag="link"
              :href="category.href"
            >
              Все блюда
            </UiButton>

            <UiButton
              v-for="subcategory in category.subcategories"
              :key="`${category.href}-${subcategory.id}`"
              :isCustomActive="Number(subcategoryId) === subcategory.id"
              tag="link"
              :href="`${category.href}?subcategoryId=${subcategory.id}`"
            >
              {{ subcategory.title }}
            </UiButton>
          </div>
        </template>

        <template #default>
          <div class="page-menu-id__products-list">
            <ProductCard
              v-for="product in filteredProducts"
              :key="`page-menu-id-product-${product.id}`"
              :product="product"
              :quantity="getItemQuantity(product.id)"
              @add="addItem(product, 1)"
              @remove="removeItem(product.id)"
              @change="updateQuantity(product.id, $event)"
              class="page-menu-id__product-card"
            />
          </div>
        </template>
      </ProductGroup>
  </section>
</template>

<script setup lang="ts">
import ProductGroup from '~/components/product/productGroup/ProductGroup.vue';
import ProductCard from '~/components/product/productCard/ProductCard.vue';
import UiButton from '~/components/ui/uiButton/UiButton.vue';
import { CATEGORIES } from '~/mocks';
import { useCartStore } from '~/stores';

const route = useRoute();
const { addItem, getItemQuantity, removeItem, updateQuantity } = useCartStore();

const menuId = computed(() => route.params.id as string);
const subcategoryId = computed(() => route.query.subcategoryId as string);

const category = computed(() => CATEGORIES[menuId.value]);
const products = computed(() => category.value.products);
const filteredProducts = computed(() => {
  return subcategoryId.value
    ? products.value.filter((product) => product.subcategoryId === Number(subcategoryId.value))
    : products.value;
});

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
