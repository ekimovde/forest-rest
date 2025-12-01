<template>
    <div class="landing-cta">
        <div class="landing-container">
            <div class="landing-cta__content">
                <h2 class="landing-cta__title">
                    Готовы начать гастрономическое путешествие?
                </h2>

                <p class="landing-cta__text">
                    Закажите доставку или посетите наш ресторан
                </p>

                <div class="landing-cta__actions">
                    <UiButton
                        tag="link"
                        href="/menu"
                        view="primary"
                        class="landing-cta__button"
                    >
                        Заказать сейчас
                    </UiButton>

                    <UiButton
                        tag="link"
                        href="/contacts"
                        class="landing-cta__button landing-cta__button--outline"
                    >
                        Контакты
                    </UiButton>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import UiButton from '~/components/ui/UiButton.vue';
</script>

<style lang="scss">
    @use '~/components/landing/styles/landingCta/component' as *;
</style>
