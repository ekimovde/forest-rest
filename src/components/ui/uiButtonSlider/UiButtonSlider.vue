<template>
    <button
        class="ui-button-slider"
        :class="uiButtonSliderClasses"
    >
        <i :class="uiButtonSliderIconClasses" />
    </button>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
    isDisabled?: boolean;
    view?: 'prev' | 'next';
}>(), {
    isDisabled: false,
    view: 'prev',
});

const uiButtonSliderClasses = computed(() => ({
    [`ui-button-slider--is-disabled`]: props.isDisabled,
    [`ui-button-slider--view-${props.view}`]: Boolean(props.view),
}));
const uiButtonSliderIconClasses = computed(() => {
    switch (props.view) {
        case 'next':
            return 'bx bx-chevron-right';
        default:
            return 'bx bx-chevron-left';
    }
});
</script>

<style lang="scss">
    @use '~/components/ui/uiButtonSlider/styles/ui-button-slider' as *;
</style>
