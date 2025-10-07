<template>
    <NuxtLink
        to="/product/123"
        class="product-card"
    >
        <picture class="product-card__picture">
            <source
                srcset="https://prosushi.ru/cache/iiko_img/7c0a9269-8fee-4894-a0ce-9e7ef5b0d894_c0ed6b280b665dde75351be0d3a4cc91__small__640x440.webp"
                type="image/webp"
            >
            <img
                alt="Калифорния с креветкой"
                src="https://prosushi.ru/cache/iiko_img/7c0a9269-8fee-4894-a0ce-9e7ef5b0d894_c0ed6b280b665dde75351be0d3a4cc91__small__640x440.jpg"
                class="product-card__image"
            >
        </picture>

        <span class="product-card__content">
            <span class="product-card__text">
                <span class="product-card__title">
                    Калифорния с креветкой
                </span>

                <span class="product-card__description">
                    Форель, авокадо, икра Масаго, сливочный сыр, соус Яки, рис, нори
                </span>

                <span class="product-card__info">
                    <span class="product-card__data">
                        250 г
                    </span>

                    <span class="product-card__data">
                        223 ккал
                    </span>
                </span>
            </span>
        </span>

        <span class="product-card__counter">
            Counter
        </span>
    </NuxtLink>
</template>

<script setup lang="ts">
//
</script>

<style lang="scss">
    @use '~/components/product/productCard/styles/product-card' as *;
</style>
