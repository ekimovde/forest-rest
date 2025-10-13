<template>
    <div class="ui-textarea">
        <textarea
            :value="modelValue"
            @input="handleInput"
            :placeholder="placeholder"
            :disabled="disabled"
            :rows="rows"
            :maxlength="maxlength"
            class="ui-textarea__field"
            :class="uiTextareaClasses"
        />

        <div
            v-if="error"
            class="ui-textarea__error"
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
    disabled?: boolean;
    error?: string;
    rows?: number;
    maxlength?: number;
}>(), {
    modelValue: '',
    placeholder: '',
    disabled: false,
    error: '',
    rows: 4,
    maxlength: undefined,
});

const uiTextareaClasses = computed(() => ({
    'ui-textarea--disabled': props.disabled,
    'ui-textarea--error': Boolean(props.error),
}));

const handleInput = (event: Event) => {
    const target = event.target as HTMLTextAreaElement;

    emit('update:modelValue', target.value);
};
</script>

<style lang="scss">
    @use '~/components/ui/styles/uiTextarea/component' as *;
</style>
