<template>
    <div class="landing-menu">
        <div class="landing-container">
            <div class="landing-menu__header">
                <span class="landing-menu__section-label">
                    Наше меню
                </span>

                <h2 class="landing-menu__section-title">
                    Изысканные блюда
                </h2>

                <p class="landing-menu__description">
                    Откройте для себя разнообразие вкусов от классики до авторских рецептов
                </p>
            </div>

            <div class="landing-menu__grid">
                <div
                    v-for="(category, index) in categories"
                    :key="index"
                    class="landing-menu__card"
                >
                    <NuxtLink
                        :to="category.href"
                        class="landing-menu__link"
                    >
                        <div class="landing-menu__image-wrapper">
                            <div
                                class="landing-menu__image"
                                :style="{ backgroundImage: `url(${category.image})` }"
                            />
                        </div>

                        <div class="landing-menu__content">
                            <h3 class="landing-menu__title">
                                {{ category.title }}
                            </h3>

                            <p class="landing-menu__count">
                                {{ category.count }} блюд
                            </p>
                        </div>
                    </NuxtLink>
                </div>
            </div>

            <div class="landing-menu__actions">
                <UiButton
                    tag="link"
                    href="/"
                    view="primary"
                    class="landing-menu__button"
                >
                    Смотреть всё меню
                </UiButton>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import UiButton from '~/components/ui/UiButton.vue';

interface Category {
    title: string;
    href: string;
    count: number;
    image: string;
}

defineProps<{
    categories: Category[];
}>();
</script>

<style lang="scss">
    @use '~/components/landing/styles/landingMenu/component' as *;
</style>
