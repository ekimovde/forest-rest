<template>
    <form
        @submit.prevent="onSubmit"
        class="auth-registration-form"
    >
        <span class="auth-registration-form__title g-h1">
            Создать аккаунт
        </span>

        <p class="auth-registration-form__description">
            Зарегистрируйтесь, чтобы делать заказы быстрее и отслеживать их статус
        </p>

        <fieldset class="auth-registration-form__fields">
            <UiInput
                v-model="name"
                type="text"
                placeholder="Имя"
                :error="nameError"
            />

            <UiInput
                v-model="email"
                type="email"
                placeholder="Email"
                :error="emailError"
            />

            <UiInputPhone
                v-model="phone"
                :error="phoneError"
            />

            <UiInput
                v-model="password"
                type="password"
                placeholder="Пароль"
                :error="passwordError"
            />

            <UiInput
                v-model="confirmPassword"
                type="password"
                placeholder="Подтвердите пароль"
                :error="confirmPasswordError"
            />
        </fieldset>

        <UiCheckbox
            v-model="agreeToTerms"
            class="auth-registration-form__terms"
        >
            <template #label>
                <span class="auth-registration-form__terms-text">
                    Я согласен с

                    <NuxtLink
                        to="/legal-information"
                        class="auth-registration-form__terms-link"
                    >
                        условиями использования
                    </NuxtLink>

                    и

                    <NuxtLink
                        to="/legal-information"
                        class="auth-registration-form__terms-link"
                    >
                        политикой конфиденциальности
                    </NuxtLink>
                </span>
            </template>
        </UiCheckbox>

        <span
            v-if="agreeToTermsError"
            class="auth-registration-form__error"
        >
            {{ agreeToTermsError }}
        </span>

        <UiButton
            :disabled="!meta?.valid"
            type="submit"
            view="primary"
            class="auth-registration-form__submit"
        >
            Зарегистрироваться
        </UiButton>
    </form>
</template>

<script setup lang="ts">
import {useRegistrationForm} from '~/composables/useRegistrationForm';

import UiInput from '~/components/ui/UiInput.vue';
import UiInputPhone from '~/components/ui/UiInputPhone.vue';
import UiCheckbox from '~/components/ui/UiCheckbox.vue';
import UiButton from '~/components/ui/UiButton.vue';

const {
  name,
  email,
  phone,
  password,
  confirmPassword,
  agreeToTerms,

  nameError,
  emailError,
  phoneError,
  passwordError,
  confirmPasswordError,
  agreeToTermsError,
  meta,

  onSubmit,
} = useRegistrationForm();
</script>

<style lang="scss">
    @use '~/components/auth/styles/authRegistrationForm/component' as *;
</style>
