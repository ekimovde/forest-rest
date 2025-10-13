<template>
  <div class="layout-auth">
    <header class="layout-auth__header">
        <div class="layout-auth__header-container g-container">
            <NuxtLink
                to="/"
                class="layout-auth__logo"
            >
                <img
                src="~/assets/images/logo.png"
                alt="Forest Rest"
                class="layout-auth__logo-image"
                >
            </NuxtLink>
        </div>
    </header>

    <main class="layout-auth__main">
      <div class="g-container">
        <NuxtPage />
      </div>
    </main>

    <footer class="layout-auth__footer">
      <div class="g-container">
        <p class="layout-auth__footer-text">
          © {{ currentYear }} Forest Rest. Все права защищены
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>

<style scoped lang="scss">
  @use '~/layouts/styles/layoutAuth/layout-auth' as *;
</style>
