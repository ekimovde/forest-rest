<template>
    <div class="landing-hero">
        <div class="landing-hero__content">
            <div class="landing-hero__badge">
                <span class="landing-hero__badge-text">
                    Премиальная кухня
                </span>
            </div>

            <h1 class="landing-hero__title">
                <span class="landing-hero__title-line">
                    Forest
                </span>

                <span class="landing-hero__title-line landing-hero__title-line--accent">
                    Ресторан
                </span>
            </h1>

            <p class="landing-hero__subtitle">
                Где природа встречается с изысканной кухней
            </p>

            <p class="landing-hero__description">
                Уникальный гастрономический опыт в атмосфере уюта и гармонии.
                Каждое блюдо — произведение искусства, созданное с любовью и вниманием к деталям.
            </p>

            <div class="landing-hero__actions">
                <UiButton
                    tag="link"
                    href="/menu/rolls"
                    view="primary"
                    class="landing-hero__button"
                >
                    Посмотреть меню
                </UiButton>

                <UiButton
                    tag="link"
                    href="/about"
                    class="landing-hero__button landing-hero__button--outline"
                >
                    О ресторане
                </UiButton>
            </div>
        </div>

        <div class="landing-hero__visual">
            <div class="landing-hero__image-wrapper">
                <div class="landing-hero__image landing-hero__image--primary" />

                <div class="landing-hero__image landing-hero__image--secondary" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import UiButton from '~/components/ui/UiButton.vue';
</script>

<style lang="scss">
    @use '~/components/landing/styles/landingHero/component' as *;
</style>
