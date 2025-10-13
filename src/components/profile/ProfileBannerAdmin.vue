<template>
  <div class="profile-banner-admin">
    <div class="profile-banner-admin__icon">
        <i class="bx bx-shield-quarter" />
    </div>

    <div class="profile-banner-admin__content">
        <h3 class="profile-banner-admin__title g-h2">
            Панель администратора
        </h3>

        <p class="profile-banner-admin__description">
            Управление заказами и просмотр статистики
        </p>

        <UiButton
            tag="link"
            href="/profile/admin-stats"
            view="primary"
            class="profile-banner-admin__action"
        >
            <i class="bx bx-bar-chart-alt-2"></i>
            Перейти к статистике
        </UiButton>
    </div>
  </div>
</template>

<script setup lang="ts">
//
</script>

<style lang="scss">
    @use '~/components/profile/styles/profileBannerAdmin/component' as *;
</style>

