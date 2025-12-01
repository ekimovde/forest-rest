<template>
  <section class="page-menu">
    <div class="page-menu__categories">
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
            class="page-menu__types"
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
              320: { slidesPerView: 1.5, spaceBetween: 8 },
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
              <ProductCard
                :product="product"
                :quantity="getItemQuantity(product.id)"
                @add="addItem(product, 1)"
                @remove="removeItem(product.id)"
                @change="updateQuantity(product.id, $event)"
              />
            </SwiperSlide>
          </UiSlider>
        </template>
      </ProductGroup>
    </div>
  </section>
</template>

<script setup lang="ts">
import {SwiperSlide} from 'swiper/vue';
import {CATEGORIES} from '~/mocks';
import {useCartStore} from '~/stores';
import {useSeo} from '~/composables/useSeo';
import {useRestaurantSchema} from '~/composables/useRestaurantSchema';

import ProductGroup from '~/components/product/ProductGroup.vue';
import ProductCard from '~/components/product/ProductCard.vue';
import UiSlider from '~/components/ui/UiSlider.vue';
import UiButton from '~/components/ui/UiButton.vue';

const { addItem, getItemQuantity, removeItem, updateQuantity } = useCartStore();

const categories = computed(() => Object.values(CATEGORIES));

// Устанавливаем мета-данные для SEO
useSeo({
  title: 'Меню',
  description: 'Ресторан Forest Rest - доставка изысканных блюд в Москве. Пицца, роллы, салаты, горячие блюда и десерты. Заказывайте онлайн с доставкой на дом!',
  keywords: ['ресторан', 'доставка еды', 'Forest Rest', 'пицца', 'роллы', 'горячие блюда', 'десерты', 'заказать еду'],
  type: 'website'
});

// Добавляем структурированные данные для ресторана
useRestaurantSchema();
</script>

<style lang="scss">
    @use '~/pages/styles/pageMenu/page-menu' as *;
</style>
