<template>
    <header
        class="base-header"
        :class="baseHeaderClasses"
    >
        <div class="base-header__wrapper g-container">
            <UiSwitch
                v-model="selectedDeliveryType"
                :switches="deliveryTypes"
                class="base-header__delivery-type"
            />

            <NuxtLink
                to="/"
                class="base-header__logo"
            >
                <img
                    src="~/assets/images/logo.png"
                    alt="Forest Rest"
                    class="base-header__logo-image"
                >
            </NuxtLink>

            <div class="base-header__actions">
                <UiButtonIcon
                    iconName="bx bx-user"
                    tag="link"
                    href="/profile"
                />
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
import UiSwitch from '~/components/ui/UiSwitch.vue';
import UiButtonIcon from '~/components/ui/UiButtonIcon.vue';
import type { ISwitch } from '~/interfaces';

const deliveryTypes: ISwitch[] = [
    {
        label: 'Доставка',
        value: 'delivery',
    },
    {
        label: 'Заберу сам',
        value: 'pickup',
    },
];

const isScrolled = ref(false);
const selectedDeliveryType = ref<ISwitch['value']>(deliveryTypes[0].value);

const baseHeaderClasses = computed(() => ({
    'base-header--is-scrolled': isScrolled.value,
}));

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0;
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style lang="scss">
    @use '~/components/base/styles/baseHeader/component' as *;
</style>
