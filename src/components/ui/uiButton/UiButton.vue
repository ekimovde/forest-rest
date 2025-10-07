<template>
    <component
        v-bind="componentParams"
        @click="handleClick"
        :is="componentTag"
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
}>(), {
    isCustomActive: false,
    tag: 'button',
    href: '',
    modelValue: '',
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
    @use '~/components/ui/uiButton/styles/ui-button' as *;
</style>
