<template>
    <div
        class="product-group"
        :class="productGroupClasses"
    >
        <div class="product-group__header">
            <component
                :is="componentTag"
                :class="productGroupTitleClasses"
            >
                <slot name="title" />
            </component>

            <slot
                v-if="isViewOnly && !hideSlotAction"
                name="action"
            >
                <NuxtLink
                    :to="href"
                    class="product-group__view-all"
                >
                    Смотреть все

                    <i class="product-group__icon bx bx-chevron-right"></i>
                </NuxtLink>
            </slot>
        </div>

        <div
            v-if="$slots.types"
            class="product-group__types"
        >
            <slot name="types" />
        </div>

        <slot />
    </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
    view?: 'only' | 'full',
    href?: string
    hideSlotAction?: boolean
}>(), {
    view: 'full',
    hideSlotAction: false
});

const isViewOnly = computed(() => props.view === 'only');

const componentTag = computed(() => {
    switch (props.view) {
        case 'only':
            return 'h2';
        default:
            return 'h1';
    }
});
const titleGlobaClass = computed(() => {
    switch (props.view) {
        case 'only':
            return 'g-h2';
        default:
            return 'g-h1';
    }
});

const productGroupClasses = computed(() => ({
    [`product-group--view-${props.view}`]: Boolean(props.view),
}));
const productGroupTitleClasses = computed(() => ({
    [titleGlobaClass.value]: Boolean(titleGlobaClass.value),
}));
</script>

<style lang="scss">
    @use '~/components/product/productGroup/styles/product-group' as *;
</style>
