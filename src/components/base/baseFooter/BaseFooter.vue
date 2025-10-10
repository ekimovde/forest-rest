<template>
    <footer class="base-footer">
        <div class="base-footer__wrapper g-container">
            <div class="base-footer__info">
                <NuxtLink
                    to="/"
                    class="base-footer__logo"
                >
                    <img
                        src="https://logos-world.net/wp-content/uploads/2020/04/McDonalds-Logo.png"
                        alt="Logo"
                        class="base-footer__logo-image"
                    >
                </NuxtLink>

                <div class="base-footer__group">
                    <div class="base-footer__phone">
                        <a
                            href="tel:79964292405"
                            class="base-footer__phone-link"
                        >
                            +7 (996) 429 24 05
                        </a>
                    </div>

                    <div class="base-footer__social">
                        <UiButtonIcon
                            iconName="bx bxl-vk"
                            size="s"
                        />

                        <UiButtonIcon
                            iconName="bx bxl-telegram"
                            size="s"
                        />

                        <UiButtonIcon
                            iconName="bx bxl-instagram-alt"
                            size="s"
                        />
                    </div>
                </div>
            </div>

            <nav class="base-footer__content">
                <div
                    v-for="block in footerBlocks"
                    :key="`base-footer-block-${block.title}`"
                    class="base-footer__block"
                >
                    <span class="base-footer__block-title">
                        {{ block.title }}
                    </span>

                    <ul class="base-footer__block-list">
                        <li
                            v-for="item in block.items"
                            :key="`base-footer-block-item-${item.title}`"
                            class="base-footer__block-item"
                        >
                            <NuxtLink :to="item.href">
                                {{ item.title }}
                            </NuxtLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </footer>
</template>

<script setup lang="ts">
import UiButtonIcon from '~/components/ui/uiButtonIcon/UiButtonIcon.vue';
import { CATEGORIES } from '~/mocks';

interface FooterBlock {
    title: string;
    items: {
        title: string;
        href: string;
    }[];
}

const footerBlocks = computed<FooterBlock[]>(() => [
    {
        title: 'Меню сайта',
        items: [
            { title: 'Главная', href: '/' },
            { title: 'О нас', href: '/about' },
            { title: 'Доставка', href: '/delivery' },
            { title: 'Правовая информация', href: '/legal-information' },
        ],
    },
    {
        title: 'Меню доставки',
        items: Object.values(CATEGORIES).map((category) => ({
            title: category.title,
            href: category.href,
        })),
    },
    {
        title: 'Контакты',
        items: [
            { title: 'Чита', href: '/contacts' },
        ],
    },
]);
</script>

<style lang="scss">
    @use '~/components/base/baseFooter/styles/base-footer' as *;
</style>
