<template>
  <section class="page-profile">
    <div class="page-profile__header">
      <h2 class="page-profile__title g-h1">
        Личный кабинет
      </h2>

      <UiButton
        @click="handleLogout"
        view="default"
      >
        Выйти
      </UiButton>
    </div>

    <div class="page-profile__content">
      <ProfileBannerAdmin v-if="isAdmin" />

      <ProfileCardInfo />

      <ProfileCardOrders />

      <ProfileCardDelivery />
    </div>
  </section>
</template>

<script setup lang="ts">
import {useSeo} from '~/composables/useSeo';

import ProfileBannerAdmin from '~/components/profile/ProfileBannerAdmin.vue';
import ProfileCardInfo from '~/components/profile/ProfileCardInfo.vue';
import ProfileCardOrders from '~/components/profile/ProfileCardOrders.vue';
import ProfileCardDelivery from '~/components/profile/ProfileCardDelivery.vue';
import UiButton from '~/components/ui/UiButton.vue';

const router = useRouter();

const isAdmin = ref(true);

const handleLogout = () => {
  // Здесь должна быть логика выхода (очистка токена и т.д.)
  console.log('Logout');
  router.push('/auth');
};

// Устанавливаем мета-данные для SEO
useSeo({
  title: 'Личный кабинет',
  description: 'Управляйте своим профилем, просматривайте историю заказов и сохраненные адреса доставки в Forest Rest.',
  keywords: ['личный кабинет', 'профиль', 'история заказов'],
  type: 'website',
  noIndex: true
});
</script>

<style lang="scss">
    @use '~/pages/styles/pageProfile/page-profile' as *;
</style>
