<template>
  <div class="profile-card">
    <h2 class="profile-card__title g-h2">
        {{ title }}
    </h2>

    <slot name="default" />

    <slot name="footer" />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>

<style lang="scss">
    @use '~/components/profile/styles/profileCard/component' as *;
</style>
