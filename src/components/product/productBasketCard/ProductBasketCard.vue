<template>
    <div class="product-basket-card">
        <picture class="product-basket-card__picture">
            <img
                @error="handleImageError"
                :src="item.image"
                :alt="item.title"
                class="product-basket-card__image"
            >
        </picture>

        <div class="product-basket-card__content">
            <div class="product-basket-card__top">
                <span class="product-basket-card__title">
                    {{ item.title }}
                </span>

                <div class="product-basket-card__options">
                    <span
                        v-for="(option, index) in item.options"
                        :key="`product-basket-card-option-${index}`"
                        class="product-basket-card__option"
                    >
                        {{ option }}
                    </span>
                </div>
            </div>

            <div class="product-basket-card__bottom">
                <span class="product-basket-card__price">
                    {{ formatPrice(item.price) }}
                </span>

                <UiCounterSimple
                    @increment="emit('increment', $event)"
                    @decrement="emit('decrement', $event)"
                    :modelValue="item.quantity"
                    class="product-basket-card__counter"
                />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { ICartItem } from '~/interfaces';
import { formatPrice } from '~/utils';
import UiCounterSimple from '~/components/ui/uiCounterSimple/UiCounterSimple.vue';

const emit = defineEmits<{
    (event: 'increment', value: number): void;
    (event: 'decrement', value: number): void;
}>();

defineProps<{
    item: ICartItem;
}>();

const handleImageError = (event: Event) => {
    const img = event.target as HTMLImageElement;

    img.src = 'https://prosushi.ru/cache/iiko_img/7c0a9269-8fee-4894-a0ce-9e7ef5b0d894_c0ed6b280b665dde75351be0d3a4cc91__small__640x440.jpg';
};
</script>

<style lang="scss">
    @use '~/components/product/productBasketCard/styles/product-basket-card' as *;
</style>
