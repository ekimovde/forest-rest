<template>
    <section class="page-index">
        <LandingHero />

        <LandingPhilosophy :items="philosophyItems" />

        <LandingFeatures :features="features" />

        <LandingMenu :categories="featuredCategories" />

        <LandingGallery :images="galleryImages" />

        <LandingCta />
    </section>
</template>

<script setup lang="ts">
import {useSeo} from '~/composables/useSeo';
import {CATEGORIES} from '~/mocks';
import {CategoryId} from '~/constants';
import LandingHero from '~/components/landing/LandingHero.vue';
import LandingPhilosophy from '~/components/landing/LandingPhilosophy.vue';
import LandingFeatures from '~/components/landing/LandingFeatures.vue';
import LandingMenu from '~/components/landing/LandingMenu.vue';
import LandingGallery from '~/components/landing/LandingGallery.vue';
import LandingCta from '~/components/landing/LandingCta.vue';

// Импортируем изображения для категорий
import rollImage from '~/assets/images/rolls/picture-1.jpg';
import pizzaImage from '~/assets/images/pizza/picture-1.jpg';
import grillImage from '~/assets/images/grill/picture-1.jpg';
import saladImage from '~/assets/images/salads/picture-1.jpg';
import dessertImage from '~/assets/images/desserts/picture-1.jpg';
import wokImage from '~/assets/images/wok/picture-1.jpg';

// Импортируем изображения для галереи
import galleryImage1 from '~/assets/images/landing/image-1.jpg';
import galleryImage2 from '~/assets/images/landing/image-2.jpg';
import galleryImage3 from '~/assets/images/landing/image-3.jpg';
import galleryImage4 from '~/assets/images/landing/image-4.jpg';
import galleryImage5 from '~/assets/images/landing/image-5.jpg';
import galleryImage6 from '~/assets/images/landing/image-6.jpg';

const philosophyItems = [
    {
        icon: 'bx bx-leaf',
        title: 'Свежие продукты',
        description: 'Только отборные ингредиенты от проверенных поставщиков'
    },
    {
        icon: 'bx bx-dish',
        title: 'Мастерство поваров',
        description: 'Профессионалы с многолетним опытом создают кулинарные шедевры'
    },
    {
        icon: 'bx bx-heart',
        title: 'С любовью',
        description: 'Каждое блюдо готовится с заботой и вниманием к деталям'
    },
    {
        icon: 'bx bx-time-five',
        title: 'Быстрая доставка',
        description: 'Свежесть и качество сохраняются при доставке'
    }
];

const features = [
    {
        title: 'Разнообразное меню',
        description: 'Более 200 блюд от классики до авторских рецептов. Европейская, азиатская кухня и многое другое.'
    },
    {
        title: 'Премиальное качество',
        description: 'Строгий контроль качества на каждом этапе приготовления. Только лучшие ингредиенты.'
    },
    {
        title: 'Удобный сервис',
        description: 'Простой онлайн-заказ, различные способы оплаты и бесплатная доставка от 1000₽.'
    }
];

const featuredCategories = [
    {
        title: CATEGORIES[CategoryId.ROLLS].title,
        href: CATEGORIES[CategoryId.ROLLS].href,
        count: CATEGORIES[CategoryId.ROLLS].products.length,
        image: rollImage
    },
    {
        title: CATEGORIES[CategoryId.PIZZA].title,
        href: CATEGORIES[CategoryId.PIZZA].href,
        count: CATEGORIES[CategoryId.PIZZA].products.length,
        image: pizzaImage
    },
    {
        title: CATEGORIES[CategoryId.GRILL].title,
        href: CATEGORIES[CategoryId.GRILL].href,
        count: CATEGORIES[CategoryId.GRILL].products.length,
        image: grillImage
    },
    {
        title: CATEGORIES[CategoryId.SALADS].title,
        href: CATEGORIES[CategoryId.SALADS].href,
        count: CATEGORIES[CategoryId.SALADS].products.length,
        image: saladImage
    },
    {
        title: CATEGORIES[CategoryId.DESSERTS].title,
        href: CATEGORIES[CategoryId.DESSERTS].href,
        count: CATEGORIES[CategoryId.DESSERTS].products.length,
        image: dessertImage
    },
    {
        title: CATEGORIES[CategoryId.WOK].title,
        href: CATEGORIES[CategoryId.WOK].href,
        count: CATEGORIES[CategoryId.WOK].products.length,
        image: wokImage
    }
];

// Изображения для галереи
const galleryImages = [
    {
        src: galleryImage1,
        alt: 'Интерьер ресторана',
    },
    {
        src: galleryImage2,
        alt: 'Блюдо из меню',
    },
    {
        src: galleryImage3,
        alt: 'Атмосфера ресторана',
    },
    {
        src: galleryImage4,
        alt: 'Шеф-повар за работой',
    },
    {
        src: galleryImage5,
        alt: 'Подача блюд',
    },
    {
        src: galleryImage6,
        alt: 'Уютная обстановка',
    },
];


// Устанавливаем layout
definePageMeta({
    layout: 'landing'
});

// Устанавливаем мета-данные для SEO
useSeo({
    title: 'Лендинг',
    description: 'Forest Rest - премиальный ресторан изысканной кухни. Где природа встречается с гастрономией. Закажите доставку или посетите нас.',
    keywords: ['ресторан', 'премиальная кухня', 'Forest Rest', 'изысканная кухня', 'доставка еды', 'гастрономия'],
    type: 'website'
});
</script>

<style lang="scss">
    @use '~/pages/styles/pageIndex/page-index' as *;
</style>
