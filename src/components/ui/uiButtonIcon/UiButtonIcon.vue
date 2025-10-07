<template>
    <button
        @click="emit('click')"
        class="ui-button-icon"
    >
        <i :class="iconName" />
    </button>
</template>

<script setup lang="ts">
const emit = defineEmits(['click']);

defineProps<{
    iconName: string;
}>();
</script>

<style lang="scss">
    @use '~/components/ui/uiButtonIcon/styles/ui-button-icon' as *;
</style>
