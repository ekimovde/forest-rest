<template>
    <form
        @submit.prevent="onSubmit"
        class="auth-login-form"
    >
        <h4 class="auth-login-form__title g-h1">
            Войти в аккаунт
        </h4>

        <p class="auth-login-form__description">
            Войдите, чтобы получить доступ к истории заказов и персональным предложениям
        </p>

        <fieldset class="auth-login-form__fields">
            <UiInput
                v-model="email"
                type="email"
                placeholder="Email"
                :error="emailError"
            />

            <UiInput
                v-model="password"
                type="password"
                placeholder="Пароль"
                :error="passwordError"
            />
        </fieldset>

        <div class="auth-login-form__options">
            <UiCheckbox
                v-model="remember"
                label="Запомнить меня"
                :error="rememberError"
            />

            <button
                type="button"
                @click="onForgotPassword"
                class="auth-login-form__link"
            >
                Забыли пароль?
            </button>
        </div>

        <UiButton
            :disabled="!meta?.valid"
            type="submit"
            view="primary"
            class="auth-login-form__submit"
        >
            Войти
        </UiButton>
    </form>
</template>

<script setup lang="ts">
import UiInput from '~/components/ui/UiInput.vue';
import UiCheckbox from '~/components/ui/UiCheckbox.vue';
import UiButton from '~/components/ui/UiButton.vue';
import { useLoginForm } from '~/composables/useLoginForm';

const {
  email,
  password,
  remember,

  emailError,
  passwordError,
  rememberError,
  meta,

  onSubmit,
  onForgotPassword,
} = useLoginForm();
</script>

<style lang="scss">
    @use '~/components/auth/styles/authLoginForm/component' as *;
</style>
