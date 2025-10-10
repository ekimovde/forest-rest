<template>
  <section class="page-index">
    <div class="page-index__categories">
      <ProductGroup
        v-for="category in categories"
        :key="category.href"
        :href="category.href"
        view="only"
      >
        <template #title>
          {{ category.title }}
        </template>

        <template #types>
          <div
            v-if="category.subcategories.length > 1"
            class="page-index__types"
          >
            <UiButton
              isCustomActive
              tag="link"
              :href="category.href"
            >
              Все блюда
            </UiButton>

            <UiButton
              v-for="subcategory in category.subcategories"
              :key="`${category.href}-${subcategory.id}`"
              tag="link"
              :href="`${category.href}?subcategoryId=${subcategory.id}`"
            >
              {{ subcategory.title }}
            </UiButton>
          </div>
        </template>

        <template #default>
          <UiSlider
            :slides-per-view="3.2"
            :space-between="20"
            :breakpoints="{
              320: { slidesPerView: 2, spaceBetween: 8 },
              480: { slidesPerView: 2.2, spaceBetween: 8 },
              768: { slidesPerView: 3.2, spaceBetween: 12 },
              1024: { slidesPerView: 4.2, spaceBetween: 16 },
            }"
          >
            <SwiperSlide
              v-for="product in category.products"
              :key="product.id"
              :style="{ height: '100%' }"
            >
              <ProductCard :product="product" />
            </SwiperSlide>
          </UiSlider>
        </template>
      </ProductGroup>
    </div>
  </section>
</template>

<script setup lang="ts">
import ProductGroup from '~/components/product/productGroup/ProductGroup.vue';
import ProductCard from '~/components/product/productCard/ProductCard.vue';
import UiSlider from '~/components/ui/uiSlider/UiSlider.vue';
import UiButton from '~/components/ui/uiButton/UiButton.vue';
import { SwiperSlide } from 'swiper/vue';
import { CATEGORIES } from '~/mocks';

const categories = computed(() => Object.values(CATEGORIES));

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
