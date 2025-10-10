<template>
    <div class="ui-counter-simple">
        <button
            @click="handleDecrement"
            class="ui-counter-simple__action"
        >
            <i class="bx bx-minus ui-counter-simple__icon" />
        </button>

        <span class="ui-counter-simple__value">
            {{ modelValue }}
        </span>

        <button
            @click="handleIncrement"
            class="ui-counter-simple__action"
        >
            <i class="bx bx-plus ui-counter-simple__icon" />
        </button>
    </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
    (event: 'increment', value: number): void;
    (event: 'decrement', value: number): void;
}>();

const props = defineProps<{
    modelValue: number;
}>();

const handleIncrement = () => {
    emit('increment', props.modelValue + 1);
};

const handleDecrement = () => {
    emit('decrement', props.modelValue - 1);
};
</script>

<style lang="scss">
    @use '~/components/ui/uiCounterSimple/styles/ui-counter-simple' as *;
</style>
