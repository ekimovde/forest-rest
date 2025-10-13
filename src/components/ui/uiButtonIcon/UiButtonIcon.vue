<template>
    <component
        v-bind="componentParams"
        @click="emit('click')"
        :is="componentTag"
        class="ui-button-icon"
        :class="uiButtonIconClasses"
    >
        <i :class="iconName" />
    </component>
</template>

<script setup lang="ts">
const emit = defineEmits(['click']);

const props = withDefaults(defineProps<{
    iconName: string;
    size?: 's' | 'm';
    tag?: 'button' | 'link';
    href?: string;
}>(), {
    size: 'm',
    tag: 'button',
    href: '',
});

const isTagLink = computed(() => props.tag === 'link');

const componentTag = computed(() => {
    if (isTagLink.value) {
        return resolveComponent('NuxtLink');
    }

    return props.tag;
});

const componentParams = computed(() => {
    if (isTagLink.value) {
        return {
            to: props.href,
        };
    }

    return {};
});

const uiButtonIconClasses = computed(() => ({
    [`ui-button-icon--size-${props.size}`]: Boolean(props.size),
}));
</script>

<style lang="scss">
    @use '~/components/ui/uiButtonIcon/styles/ui-button-icon' as *;
</style>
