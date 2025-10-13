<template>
  <ProfileCard
    title="Личная информация"
    class="profile-card-info"
  >
    <div class="profile-card-info__content">
      <div class="profile-card-info__group">
        <span class="profile-card-info__label">
          Имя:
        </span>

        <span class="profile-card-info__value">
          Иван Иванов
        </span>
      </div>

      <div class="profile-card-info__group">
        <span class="profile-card-info__label">
          Email:
        </span>

        <span class="profile-card-info__value">
          ivan@example.com
        </span>
      </div>

      <div class="profile-card-info__group">
        <span class="profile-card-info__label">
          Телефон:
        </span>

        <span class="profile-card-info__value">
          +7 (999) 123-45-67
        </span>
      </div>
    </div>

    <template #footer>
      <UiButton view="primary">
        Редактировать профиль
      </UiButton>
    </template>
  </ProfileCard>
</template>

<script setup lang="ts">
import ProfileCard from '~/components/profile/ProfileCard.vue';
import UiButton from '~/components/ui/UiButton.vue';
</script>

<style lang="scss">
    @use '~/components/profile/styles/profileCardInfo/component' as *;
</style>
