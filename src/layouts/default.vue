<template>
  <div class="layout-default">
    <BaseHeader />

    <div class="layout-default__wrapper g-container">
      <NuxtPage />
    </div>

    <BaseFooter />
  </div>
</template>

<script setup lang="ts">
import BaseHeader from '~/components/base/baseHeader/BaseHeader.vue';
import BaseFooter from '~/components/base/baseFooter/BaseFooter.vue';
</script>

<style scoped lang="scss">
  @use '~/layouts/styles/layoutDefault/layout-default' as *;
</style>
