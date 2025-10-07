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

        <template #types>
          <div class="page-index__types">
            <UiButton
              isCustomActive
              tag="link"
              href="/menu/rolls"
            >
              Все блюда
            </UiButton>

            <UiButton
              tag="link"
              href="/menu/rolls?type=klassicheskie"
            >
              Классические
            </UiButton>

            <UiButton
              tag="link"
              href="/menu/rolls?type=zapechennye"
            >
              Запеченные
            </UiButton>

            <UiButton
              tag="link"
              href="/menu/rolls?type=zharenye"
            >
              Жаренные
            </UiButton>

            <UiButton
              tag="link"
              href="/menu/rolls?type=lajt-rolly"
            >
              Лайт-роллы
            </UiButton>

            <UiButton
              tag="link"
              href="/menu/rolls?type=short-rolly-4-sht"
            >
              Short-роллы 4 шт.
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
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>

            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>

            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>

            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>

            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
          </UiSlider>
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
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>

            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>

            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
          </UiSlider>
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
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>

            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>

            <SwiperSlide>
              <ProductCard />
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
