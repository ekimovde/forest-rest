<template>
    <div class="base-order-invoice">
        <div class="base-order-invoice__group">
            <span>
                Сумма заказа
            </span>

            <span>
                {{ formatPrice(orderPrice) }}
            </span>
        </div>

        <div class="base-order-invoice__group">
            <span>
                Доставка
            </span>

            <span>
                {{ formatPrice(deliveryPrice) }}
            </span>
        </div>

        <div class="base-order-invoice__group">
            <span class="base-order-invoice__caption">
                К оплате
            </span>

            <span class="base-order-invoice__caption">
                {{ formatPrice(totalPrice) }}
            </span>
        </div>

        <slot />
    </div>
</template>

<script setup lang="ts">
import { DELIVERY_PRICE } from '~/constants';
import { formatPrice } from '~/utils';

withDefaults(defineProps<{
    orderPrice?: number;
    deliveryPrice?: number;
    totalPrice?: number;
}>(), {
    orderPrice: 0,
    deliveryPrice: DELIVERY_PRICE,
    totalPrice: 0,
});
</script>

<style lang="scss">
    @use '~/components/base/styles/baseOrderInvoice/component' as *;
</style>
