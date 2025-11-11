<template>
  <section class="page-auth">
    <div class="page-auth__container">
      <div class="page-auth__card">
        <div class="page-auth__tabs">
          <button
            @click="setActiveTab(AuthTab.login)"
            class="page-auth__tab"
            :class="getPageAuthTabClasses(AuthTab.login)"
          >
            Вход
          </button>

          <button
            @click="setActiveTab(AuthTab.registration)"
            class="page-auth__tab"
            :class="getPageAuthTabClasses(AuthTab.registration)"
          >
            Регистрация
          </button>
        </div>

        <!-- Форма входа -->
        <AuthLoginForm v-if="isActiveTabLogin" />

        <!-- Форма регистрации -->
        <AuthRegistrationForm v-else />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {useSeo} from '~/composables/useSeo';

import AuthLoginForm from '~/components/auth/AuthLoginForm.vue';
import AuthRegistrationForm from '~/components/auth/AuthRegistrationForm.vue';

enum AuthTab {
  login = 'login',
  registration = 'registration',
}

const activeTab = ref<AuthTab>(AuthTab.login);

const isActiveTabLogin = computed(() => activeTab.value === AuthTab.login);

const setActiveTab = (tab: AuthTab) => {
  activeTab.value = tab;
};

const getPageAuthTabClasses = (tab: AuthTab) => {
  return {
    'page-auth__tab--is-active': activeTab.value === tab,
  };
};

definePageMeta({
  layout: 'auth'
});

// Устанавливаем мета-данные для SEO
useSeo({
  title: 'Авторизация',
  description: 'Войдите в свой аккаунт Forest Rest или зарегистрируйтесь, чтобы делать заказы быстрее и получать персональные предложения.',
  keywords: ['вход', 'регистрация', 'авторизация', 'личный кабинет'],
  type: 'website',
  noIndex: true
});
</script>

<style scoped lang="scss">
    @use '~/pages/styles/pageAuth/page-auth' as *;
</style>
