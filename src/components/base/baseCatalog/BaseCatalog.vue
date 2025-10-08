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
            >
                <SwiperSlide
                    v-for="item in catalog"
                    :key="`base-catalog-${item.href}`"
                >
                    <UiButton
                        tag="link"
                        :href="item.href"
                        :isCustomActive="isActive(item.href)"
                    >
                        {{ item.title }}
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

interface IBaseCatalog {
    title: string;
    href: string;
}

const catalog = <IBaseCatalog[]>[
    {
        title: 'Спринг-роллы',
        href: '/menu/spring-rolls',
    },
    {
        title: 'Роллы',
        href: '/menu/rolls',
    },
    {
        title: 'Онигири',
        href: '/menu/onigiri',
    },
    {
        title: 'Сеты и комбо',
        href: '/menu/sets',
    },
    {
        title: 'Пицца',
        href: '/menu/pizza',
    },
    {
        title: 'Супы',
        href: '/menu/soups',
    },
    {
        title: 'Горячее и WOK',
        href: '/menu/hot-and-wok',
    },
    {
        title: 'Салаты',
        href: '/menu/salads',
    },
    {
        title: 'Поке',
        href: '/menu/poke',
    },
    {
        title: 'Закуски и гарниры',
        href: '/menu/snacks-and-side-dishes',
    },
    {
        title: 'Десерты',
        href: '/menu/desserts',
    },
    {
        title: 'Соусы и допы',
        href: '/menu/sauces-and-extras',
    },
    {
        title: 'Напитки',
        href: '/menu/drinks',
    }
];

const route = useRoute();

const catalogRef = ref<HTMLElement | null>(null);
const isScrolled = ref(false);

const baseCatalogClasses = computed(() => ({
    'base-catalog--is-scrolled': isScrolled.value,
}));

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
