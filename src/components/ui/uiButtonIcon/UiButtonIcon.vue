<template>
    <button
        @click="emit('click')"
        class="ui-button-icon"
        :class="uiButtonIconClasses"
    >
        <i :class="iconName" />
    </button>
</template>

<script setup lang="ts">
const emit = defineEmits(['click']);

const props = withDefaults(defineProps<{
    iconName: string;
    size?: 's' | 'm';
}>(), {
    size: 'm',
});

const uiButtonIconClasses = computed(() => ({
    [`ui-button-icon--size-${props.size}`]: Boolean(props.size),
}));
</script>

<style lang="scss">
    @use '~/components/ui/uiButtonIcon/styles/ui-button-icon' as *;
</style>
