<template>
    <NuxtLink
        to="/cart"
        class="base-widget-cart"
    >
        <span class="base-widget-cart__group">
            <i class="bx bx-cart bx-tada base-widget-cart__icon" />

            <span class="base-widget-cart__caption">
                {{ totalItems }}
            </span>
        </span>

        <span class="base-widget-cart__separator" />

        <span class="base-widget-cart__caption">
            {{ formatPrice(totalPrice) }}
        </span>
    </NuxtLink>
</template>

<script setup lang="ts">
import { formatPrice } from '~/utils';

withDefaults(defineProps<{
    totalItems: number;
    totalPrice: number;
}>(), {
    totalItems: 0,
    totalPrice: 0,
});
</script>

<style lang="scss">
    @use '~/components/base/baseWidgetCart/styles/base-widget-cart' as *;
</style>
