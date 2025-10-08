<template>
  <div class="layout-default">
    <BaseHeader />

    <div class="layout-default__wrapper">
      <BaseCatalog />

      <div class="g-container">
        <NuxtPage />
      </div>
    </div>

    <BaseFooter />
  </div>
</template>

<script setup lang="ts">
import BaseHeader from '~/components/base/baseHeader/BaseHeader.vue';
import BaseCatalog from '~/components/base/baseCatalog/BaseCatalog.vue';
import BaseFooter from '~/components/base/baseFooter/BaseFooter.vue';
</script>

<style scoped lang="scss">
  @use '~/layouts/styles/layoutDefault/layout-default' as *;
</style>
