<template>
    <div
        class="admin-stat-card"
        :class="adminStatCardClasses"
    >
        <div class="admin-stat-card__icon-wrapper">
          <i :class="icon" />
        </div>

        <div class="admin-stat-card__content">
            <span class="admin-stat-card__caption">
                {{ caption }}
            </span>

            <span class="admin-stat-card__value">
                {{ value }}
            </span>
        </div>
    </div>
</template>

<script setup lang="ts">
const {
    caption,
    value,
    type = 'primary',
    icon = 'bx bx-receipt'
} = defineProps<{
    caption: string
    value: string | number
    type?: 'primary' | 'secondary' | 'accent' | 'danger'
    icon?: string
}>();

const adminStatCardClasses = computed(() => ({
    [`admin-stat-card--type-${type}`]: Boolean(type),
}));
</script>

<style lang="scss">
    @use '~/components/admin/styles/adminStatCard/component' as *;
</style>
