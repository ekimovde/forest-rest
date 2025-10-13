<template>
    <div class="ui-input">
        <input
            :value="modelValue"
            @input="handleInput"
            :placeholder="placeholder"
            :type="type"
            :disabled="disabled"
            class="ui-input__field"
            :class="uiInputClasses"
        />

        <div
            v-if="error"
            class="ui-input__error"
        >
            {{ error }}
        </div>
    </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
    (event: 'update:modelValue', value: string): void;
}>();

const props = withDefaults(defineProps<{
    modelValue?: string;
    placeholder?: string;
    type?: 'text' | 'email' | 'password' | 'tel' | 'number';
    disabled?: boolean;
    error?: string;
}>(), {
    modelValue: '',
    placeholder: '',
    type: 'text',
    disabled: false,
    error: '',
});

const uiInputClasses = computed(() => ({
    'ui-input--disabled': props.disabled,
    'ui-input--error': Boolean(props.error),
}));

const handleInput = (event: Event) => {
    const target = event.target as HTMLInputElement;
    emit('update:modelValue', target.value);
};
</script>

<style lang="scss">
    @use '~/components/ui/styles/uiInput/component' as *;
</style>
