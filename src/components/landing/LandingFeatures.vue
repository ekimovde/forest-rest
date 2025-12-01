<template>
    <div class="landing-features">
        <div class="landing-container">
            <div class="landing-features__content">
                <div class="landing-features__text">
                    <span class="landing-features__section-label">
                        Почему мы
                    </span>

                    <h2 class="landing-features__section-title">
                        Премиальный опыт
                    </h2>

                    <div class="landing-features__list">
                        <div
                            v-for="(feature, index) in features"
                            :key="index"
                            class="landing-features__item"
                        >
                            <div class="landing-features__number">
                                {{ String(index + 1).padStart(2, '0') }}
                            </div>

                            <div class="landing-features__content-item">
                                <h3 class="landing-features__title">
                                    {{ feature.title }}
                                </h3>

                                <p class="landing-features__text-item">
                                    {{ feature.description }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="landing-features__visual">
                    <div class="landing-features__image" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
interface Feature {
    title: string;
    description: string;
}

defineProps<{
    features: Feature[];
}>();
</script>

<style lang="scss">
    @use '~/components/landing/styles/landingFeatures/component' as *;
</style>
