<template>
    <div class="ui-switch">
        <button
            v-for="(item, index) in switches"
            :key="`ui-switch-${item.value}`"
            class="ui-switch__action"
            :class="getUiSwitchActionClasses(item.value, index)"
            @click="handleClick(item.value)"
        >
            {{ item.label }}
        </button>

        <div class="ui-switch__slider" />
    </div>
</template>

<script setup lang="ts">
import type { ISwitch } from '~/interfaces/ISwitch';

const emit = defineEmits<{
    (event: 'update:modelValue', value: ISwitch['value']): void;
}>();

const props = defineProps<{
    switches: ISwitch[];
    modelValue: ISwitch['value'];
}>();

const getUiSwitchActionClasses = (value: ISwitch['value'], index: number) => ({
    'ui-switch__action--is-active': isActive(value),
    'ui-switch__action--is-first': index === 0,
    'ui-switch__action--is-last': index === props.switches.length - 1,
});

const isActive = (value: ISwitch['value']) => {
    return props.modelValue === value;
};

const handleClick = (value: ISwitch['value']) => {
    emit('update:modelValue', value);
};
</script>

<style lang="scss">
    @use '~/components/ui/uiSwitch/styles/ui-switch' as *;
</style>
