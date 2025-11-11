<template>
    <input
        v-maska="'+7 (###) ###-##-##'"
        :value="modelValue"
        type="tel"
        :disabled="disabled"
        placeholder="+7 (___) ___-__-__"
        class="ui-input-phone"
        :class="uiInputPhoneClasses"
        @input="handleInput"
    />
</template>

<script setup lang="ts">
import {vMaska} from 'maska/vue';

const emit = defineEmits<{
    (event: 'update:modelValue', value: string): void;
}>();

const props = withDefaults(defineProps<{
    modelValue?: string;
    disabled?: boolean;
    error?: string;
}>(), {
    modelValue: '',
    disabled: false,
    error: '',
});

const uiInputPhoneClasses = computed(() => ({
    'ui-input-phone--disabled': props.disabled,
    'ui-input-phone--error': Boolean(props.error),
}));

const handleInput = (event: Event) => {
    const input = event.target as HTMLInputElement;

    emit('update:modelValue', input.value);
};
</script>

<style lang="scss">
    @use '~/components/ui/styles/uiInputPhone/component' as *;
</style>
