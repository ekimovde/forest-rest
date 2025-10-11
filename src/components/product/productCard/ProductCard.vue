<template>
    <button class="product-card">
        <picture class="product-card__picture">
            <img
                @error="handleImageError"
                :src="product.image"
                :alt="product.title"
                class="product-card__image"
            >
        </picture>

        <span class="product-card__content">
            <span class="product-card__text">
                <span class="product-card__title">
                    {{ product.title }}
                </span>

                <span
                    v-if="product.description"
                    class="product-card__description"
                >
                    {{ product.description }}
                </span>

                <span class="product-card__info">
                    <span
                        v-for="(option, index) in product.options"
                        :key="`product-card-option-${index}`"
                        class="product-card__data"
                    >
                        {{ option }}
                    </span>
                </span>
            </span>
        </span>

        <div class="product-card__counter">
            <UiCounter
                @update:modelValue="emit('change', $event)"
                @add="emit('add')"
                @remove="emit('remove')"
                :price="product.price"
                :modelValue="quantity"
            />
        </div>
    </button>
</template>

<script setup lang="ts">
import type { IProduct } from '~/interfaces';
import UiCounter from '~/components/ui/uiCounter/UiCounter.vue';

const emit = defineEmits<{
    (event: 'add'): void;
    (event: 'remove'): void;
    (event: 'change', value: number): void;
}>();

withDefaults(defineProps<{
    product: IProduct;
    quantity: number;
}>(), {
    quantity: 0,
});

const handleImageError = (event: Event) => {
    const img = event.target as HTMLImageElement;

    img.src = 'https://prosushi.ru/cache/iiko_img/7c0a9269-8fee-4894-a0ce-9e7ef5b0d894_c0ed6b280b665dde75351be0d3a4cc91__small__640x440.jpg';
};
</script>

<style lang="scss">
    @use '~/components/product/productCard/styles/product-card' as *;
</style>
