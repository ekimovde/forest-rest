<template>
  <ProfileCard
    title="История заказов"
    class="profile-card-orders"
  >
    <div class="profile-card-orders__content">
      <span class="profile-card-orders__caption">
        У вас пока нет заказов
      </span>
    </div>
  </ProfileCard>
</template>

<script setup lang="ts">
import ProfileCard from '~/components/profile/ProfileCard.vue';
</script>

<style lang="scss">
    @use '~/components/profile/styles/profileCardOrders/component' as *;
</style>
