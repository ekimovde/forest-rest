<template>
    <button class="product-card">
        <picture class="product-card__picture">
            <img
                src="https://prosushi.ru/cache/iiko_img/7c0a9269-8fee-4894-a0ce-9e7ef5b0d894_c0ed6b280b665dde75351be0d3a4cc91__small__640x440.jpg"
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

        <span class="product-card__counter">
            Counter
        </span>
    </button>
</template>

<script setup lang="ts">
import type { IProduct } from '~/interfaces/IProduct';

defineProps<{
    product: IProduct;
}>();
</script>

<style lang="scss">
    @use '~/components/product/productCard/styles/product-card' as *;
</style>
