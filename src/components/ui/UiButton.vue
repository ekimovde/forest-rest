<template>
    <component
        v-bind="componentParams"
        @click="handleClick"
        :is="componentTag"
        :type="type"
        :disabled="disabled"
        class="ui-button"
        :class="uiButtonClasses"
    >
        <slot />
    </component>
</template>

<script setup lang="ts">
const emit = defineEmits<{
    (event: 'update:modelValue', value: string | number): void;
}>();

const props = withDefaults(defineProps<{
    isCustomActive?: boolean;
    tag?: 'button' | 'link';
    href?: string;
    value?: string | number;
    modelValue?: string | number;
    type?: 'button' | 'submit';
    disabled?: boolean;
    view?: 'default' | 'primary';
}>(), {
    isCustomActive: false,
    tag: 'button',
    href: '',
    modelValue: '',
    type: 'button',
    disabled: false,
    view: 'default',
});

const isTagLink = computed(() => props.tag === 'link');
const isActive = computed(() => props.modelValue === props.value);

const componentTag = computed(() => {
    if (isTagLink.value) {
        return resolveComponent('NuxtLink');
    }

    return props.tag;
});

const uiButtonClasses = computed(() => ({
    'ui-button--is-active': props.isCustomActive || isActive.value,
    'ui-button--disabled': props.disabled,
    [`ui-button--view-${props.view}`]: Boolean(props.view),
}));

const componentParams = computed(() => {
    if (isTagLink.value) {
        return {
            to: props.href,
        };
    }

    return {};
});

const handleClick = () => {
    if (isTagLink.value) {
        return;
    }

    emit('update:modelValue', props.value);
};
</script>

<style lang="scss">
    @use '~/components/ui/styles/uiButton/component' as *;
</style>
