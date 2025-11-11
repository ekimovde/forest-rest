<template>
    <div class="base-payment-method">
        <UiDropdown
            @update:modelValue="handleUpdatePaymentMethod"
            :modelValue="modelValue"
            :options="PAYMENT_METHODS"
            placeholder="Выберите способ оплаты"
            class="base-payment-method__dropdown"
        />

        <div
            v-if="isPaymentMethodCash"
            class="base-payment-method__actions"
        >
            <UiButton
                v-for="banknote in PAYMENT_BANKNOTES"
                :key="`base-payment-method-banknote-${banknote.value}`"
                :isCustomActive="isPaymentBanknoteSelected(banknote.value as PaymentBanknote)"
                @click="handleUpdatePaymentBanknote(banknote.value as PaymentBanknote)"
            >
                {{ banknote.label }}
            </UiButton>
        </div>
    </div>
</template>

<script setup lang="ts">
import {PaymentMethod, PaymentBanknote} from '~/enums';
import type {IDropdownOption, IPaymentBanknote} from '~/interfaces';

import UiDropdown from '~/components/ui/UiDropdown.vue';
import UiButton from '~/components/ui/UiButton.vue';

const PAYMENT_METHODS: IDropdownOption[] = [
    {
        label: 'Наличными при получении',
        value: PaymentMethod.CASH
    },
    {
        label: 'Картой при получении',
        value: PaymentMethod.CARD
    }
];

const PAYMENT_BANKNOTES: IPaymentBanknote[] = [
    {
        label: 'Без сдачи',
        value: PaymentBanknote.WITHOUT_CHANGE
    },
    {
        label: '500 ₽',
        value: PaymentBanknote.FIVE_HUNDRED
    },
    {
        label: '1000 ₽',
        value: PaymentBanknote.ONE_THOUSAND
    },
    {
        label: '2000 ₽',
        value: PaymentBanknote.TWO_THOUSAND
    },
    {
        label: '5000 ₽',
        value: PaymentBanknote.FIVE_THOUSAND
    }
];

const emit = defineEmits<{
    (event: 'update:modelValue', value: PaymentMethod): void
    (event: 'update:paymentBanknote', value: PaymentBanknote): void
}>();

const props = withDefaults(defineProps<{
    modelValue: PaymentMethod;
    paymentBanknote: PaymentBanknote;
}>(), {
    modelValue: PaymentMethod.CASH,
    paymentBanknote: PaymentBanknote.WITHOUT_CHANGE
});

const isPaymentMethodCash = computed(() => props.modelValue === PaymentMethod.CASH);

const handleUpdatePaymentMethod = (value: PaymentMethod) => {
    emit('update:modelValue', value);
};

const handleUpdatePaymentBanknote = (value: PaymentBanknote) => {
    emit('update:paymentBanknote', value);
};

const isPaymentBanknoteSelected = (value: PaymentBanknote) => {
    return value === props.paymentBanknote;
};
</script>

<style lang="scss">
    @use '~/components/base/styles/basePaymentMethod/component' as *;
</style>
