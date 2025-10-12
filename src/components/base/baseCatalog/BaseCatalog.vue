<template>
    <div
        ref="catalogRef"
        class="base-catalog"
        :class="baseCatalogClasses"
    >
        <div class="g-container">
            <UiSlider
                view="catalog"
                :spaceBetween="8"
                :slidesPerView="'auto'"
            >
                <SwiperSlide
                    v-for="category in categories"
                    :key="`base-catalog-${category.href}`"
                >
                    <UiButton
                        tag="link"
                        :href="category.href"
                        :isCustomActive="isActive(category.href)"
                    >
                        {{ category.title }}
                    </UiButton>
                </SwiperSlide>
            </UiSlider>
        </div>
    </div>
</template>

<script setup lang="ts">
import { SwiperSlide } from 'swiper/vue';
import UiSlider from '~/components/ui/uiSlider/UiSlider.vue';
import UiButton from '~/components/ui/uiButton/UiButton.vue';
import { CATEGORIES } from '~/mocks';

const route = useRoute();

const catalogRef = ref<HTMLElement | null>(null);
const isScrolled = ref(false);

const baseCatalogClasses = computed(() => ({
    'base-catalog--is-scrolled': isScrolled.value,
}));

const categories = computed(() => Object.values(CATEGORIES));

const isActive = (href: string) => {
    return route.path.includes(href);
};

const handleScroll = () => {
    const headerHeight = 66;

    isScrolled.value = window.scrollY >= headerHeight;
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<style lang="scss">
    @use '~/components/base/baseCatalog/styles/base-catalog' as *;
</style>
