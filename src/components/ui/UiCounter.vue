<template>
    <div class="ui-counter">
        <button
            v-if="showAddButton"
            class="ui-counter__price"
            @click="handleAdd"
        >
            + {{ formatPrice(price) }}
        </button>

        <div
            v-else
            class="ui-counter__actions"
        >
            <button
                class="ui-counter__action"
                @click="handleDecrement"
            >
                <i class="bx bx-minus" />
            </button>

            <span class="ui-counter__value">
                {{ modelValue }}
            </span>

            <button
                class="ui-counter__action"
                @click="handleIncrement"
                :disabled="isDisabledIncrement"
            >
                <i class="bx bx-plus" />
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { formatPrice } from '~/utils';

const emit = defineEmits<{
    (e: 'update:modelValue', value: number): void
    (e: 'add'): void
}>();

const props = withDefaults(defineProps<{
    modelValue: number
    maxValue?: number
    price?: number
}>(), {
    maxValue: 99,
    price: 0
});

const showAddButton = computed(() => props.modelValue === 0)
const isDisabledIncrement = computed(() => props.modelValue >= props.maxValue);

const handleAdd = () => {
    emit('update:modelValue', props.modelValue + 1);
    emit('add');
};

const handleIncrement = () => {
    if (props.modelValue < props.maxValue) {
        emit('update:modelValue', props.modelValue + 1);
    }
};

const handleDecrement = () => {
    if (props.modelValue > 0) {
        emit('update:modelValue', props.modelValue - 1);
    }
};
</script>

<style lang="scss">
    @use '~/components/ui/styles/uiCounter/component' as *;
</style>
