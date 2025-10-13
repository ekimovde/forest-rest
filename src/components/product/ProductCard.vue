<template>
    <button class="product-card">
        <div class="product-card__picture">
            <img
                v-show="!imageError && !isLoading"
                @error="handleImageError"
                @load="handleImageLoad"
                :src="product.image"
                :alt="product.title"
                class="product-card__image"
            >

            <div
                v-if="isLoading || imageError"
                class="product-card__placeholder"
            >
                <i
                    class="bx product-card__placeholder-icon"
                    :class="isLoading ? 'bx-loader-alt bx-spin' : 'bx-dish'"
                />

                <span
                    v-if="!isLoading"
                    class="product-card__placeholder-text"
                >
                    Нет фото
                </span>
            </div>
        </div>

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
import UiCounter from '~/components/ui/UiCounter.vue';

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
    @use '~/components/product/styles/productCard/component' as *;
</style>
