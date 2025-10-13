<template>
    <div class="product-basket-card">
        <div class="product-basket-card__picture">
            <img
                v-show="!imageError && !isLoading"
                @error="handleImageError"
                @load="handleImageLoad"
                :src="item.image"
                :alt="item.title"
                class="product-basket-card__image"
            >

            <div
                v-if="isLoading || imageError"
                class="product-basket-card__placeholder"
            >
                <i
                    class="bx product-basket-card__placeholder-icon"
                    :class="isLoading ? 'bx-loader-alt bx-spin' : 'bx-dish'"
                />
            </div>
        </div>

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
import UiCounterSimple from '~/components/ui/UiCounterSimple.vue';

const emit = defineEmits<{
    (event: 'increment', value: number): void;
    (event: 'decrement', value: number): void;
}>();

defineProps<{
    item: ICartItem;
}>();

// Состояние для отслеживания загрузки и ошибок изображения
const isLoading = ref(true);
const imageError = ref(false);

const handleImageLoad = () => {
    isLoading.value = false;
};

const handleImageError = () => {
    isLoading.value = false;
    imageError.value = true;
};
</script>

<style lang="scss">
    @use '~/components/product/styles/productBasketCard/component' as *;
</style>
