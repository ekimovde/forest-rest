<template>
  <ProfileCard
    title="Адреса доставки"
    class="profile-card-delivery"
  >
    <div class="profile-card-delivery__content">
      <span class="profile-card-delivery__caption">
        Сохраненных адресов пока нет
      </span>
    </div>

    <template #footer>
      <UiButton view="primary">
        Добавить адрес
      </UiButton>
    </template>
  </ProfileCard>
</template>

<script setup lang="ts">
import ProfileCard from '~/components/profile/ProfileCard.vue';
import UiButton from '~/components/ui/UiButton.vue';
</script>

<style lang="scss">
    @use '~/components/profile/styles/profileCardDelivery/component' as *;
</style>
