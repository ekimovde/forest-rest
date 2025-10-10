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
    @use '~/components/ui/uiButtonInline/styles/ui-button-inline' as *;
</style>
