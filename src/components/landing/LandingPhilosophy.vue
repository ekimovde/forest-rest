<template>
    <div class="landing-philosophy">
        <div class="landing-container">
            <div class="landing-philosophy__header">
                <span class="landing-philosophy__section-label">
                    Наша философия
                </span>

                <h2 class="landing-philosophy__section-title">
                    Искусство в каждой детали
                </h2>
            </div>

            <div class="landing-philosophy__grid">
                <div
                    v-for="(item, index) in items"
                    :key="index"
                    class="landing-philosophy__card"
                >
                    <div class="landing-philosophy__icon">
                        <i :class="item.icon" />
                    </div>

                    <h3 class="landing-philosophy__title">
                        {{ item.title }}
                    </h3>

                    <p class="landing-philosophy__text">
                        {{ item.description }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
interface PhilosophyItem {
    icon: string;
    title: string;
    description: string;
}

defineProps<{
    items: PhilosophyItem[];
}>();
</script>

<style lang="scss">
    @use '~/components/landing/styles/landingPhilosophy/component' as *;
</style>
