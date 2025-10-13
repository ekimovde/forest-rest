<template>
    <label
        class="ui-checkbox"
        :class="uiCheckboxClasses"
    >
        <input
            type="checkbox"
            :checked="modelValue"
            @change="handleChange"
            :disabled="disabled"
            class="ui-checkbox__input"
        />

        <span class="ui-checkbox__checkbox">
            <i
                v-if="modelValue"
                class="bx bx-check ui-checkbox__icon"
            />
        </span>

        <span
            v-if="label || $slots.label"
            class="ui-checkbox__label"
        >
            <slot name="label">
                {{ label }}
            </slot>
        </span>
    </label>
</template>

<script setup lang="ts">
const emit = defineEmits<{
    (event: 'update:modelValue', value: boolean): void;
}>();

const props = withDefaults(defineProps<{
    modelValue?: boolean;
    label?: string;
    disabled?: boolean;
}>(), {
    modelValue: false,
    label: '',
    disabled: false,
});

const uiCheckboxClasses = computed(() => ({
    'ui-checkbox--disabled': props.disabled,
    'ui-checkbox--checked': props.modelValue,
}));

const handleChange = (event: Event) => {
    const target = event.target as HTMLInputElement;
    emit('update:modelValue', target.checked);
};
</script>

<style lang="scss">
    @use '~/components/ui/styles/uiCheckbox/component' as *;
</style>
