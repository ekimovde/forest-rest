<template>
    <button
        @click="emit('click')"
        class="ui-button-inline"
    >
        <slot />
    </button>
</template>

<script setup lang="ts">
const emit = defineEmits<{
    (e: 'click'): void;
}>();
</script>

<style lang="scss">
    @use '~/components/ui/styles/uiButtonInline/component' as *;
</style>
