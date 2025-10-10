<template>
  <section class="page-cart">
    <div class="page-cart__wrapper">
      <ProductGroup
        :hideSlotAction="items.length === 0"
        view="only"
      >
        <template #title>
          Корзина
        </template>

        <template #action>
          <UiButtonInline @click="clearCart">
            Очистить корзину
          </UiButtonInline>
        </template>

        <template #default>
          <div
            v-if="items.length > 0"
            class="page-cart__products"
          >
            <ProductBasketCard
              v-for="item in items"
              :key="item.id"
              :item="item"
              @increment="updateQuantity(item.id, $event)"
              @decrement="updateQuantity(item.id, $event)"
            />
          </div>

          <span
            v-else
            class="page-cart__empty-text"
          >
            Корзина пустая :( Добавьте товары из меню.
          </span>
        </template>
      </ProductGroup>

      <ProductGroup
        view="only"
        hideSlotAction
      >
        <template #title>
          Способ оплаты
        </template>

        <template #default>
          <BasePaymentMethod
            v-model="paymentMethod"
            v-model:paymentBanknote="paymentBanknote"
          />
        </template>
      </ProductGroup>

      <ProductGroup
        view="only"
        hideSlotAction
      >
        <template #title>
          Оформление заказа
        </template>

        <template #default>
          <form
            @submit.prevent
            class="page-cart__form"
          >
            <UiInput
              v-model="name"
              placeholder="ФИО"
              :error="nameError"
            />

            <UiInputPhone
              v-model="phone"
              :error="phoneError"
            />

            <UiInput
              v-model="address"
              placeholder="Адрес"
              :error="addressError"
            />

            <UiCheckbox
              v-model="isPrivateHouse"
              label="Частный дом"
            />

            <fieldset
              v-if="!isPrivateHouse"
              class="page-cart__form-group"
            >
              <UiInput
                v-model="apartment"
                placeholder="Кв./офис"
                :error="apartmentError"
              />

              <UiInput
                v-model="entrance"
                placeholder="Подъезд"
                :error="entranceError"
              />

              <UiInput
                v-model="floor"
                placeholder="Этаж"
                :error="floorError"
              />
            </fieldset>

            <UiTextarea
              v-model="comment"
              placeholder="Комментарий к заказу"
              :error="commentError"
            />
          </form>
        </template>
      </ProductGroup>
    </div>

    <BaseOrderInvoice
      :orderPrice="orderPrice"
      :totalPrice="totalPrice"
      class="page-cart__order-invoice"
    >
      <template #default>
        <UiButton
          @click="onSubmit"
          view="primary"
          :disabled="!meta?.valid"
          class="page-cart__submit"
        >
          Оформить заказ
        </UiButton>
      </template>
    </BaseOrderInvoice>
  </section>
</template>

<script setup lang="ts">
import ProductGroup from '~/components/product/productGroup/ProductGroup.vue';
import ProductBasketCard from '~/components/product/productBasketCard/ProductBasketCard.vue';
import BaseOrderInvoice from '~/components/base/baseOrderInvoice/BaseOrderInvoice.vue';
import BasePaymentMethod from '~/components/base/basePaymentMethod/BasePaymentMethod.vue';
import UiInput from '~/components/ui/uiInput/UiInput.vue';
import UiInputPhone from '~/components/ui/uiInputPhone/UiInputPhone.vue';
import UiCheckbox from '~/components/ui/uiCheckbox/UiCheckbox.vue';
import UiTextarea from '~/components/ui/uiTextarea/UiTextarea.vue';
import UiButton from '~/components/ui/uiButton/UiButton.vue';
import UiButtonInline from '~/components/ui/uiButtonInline/UiButtonInline.vue';
import { useCartForm } from '~/composables/useCartForm';
import { useCartStore } from '~/stores';
import { PaymentMethod, PaymentBanknote } from '~/enums';

const { items, orderPrice, totalPrice } = storeToRefs(useCartStore());
const { updateQuantity, clearCart } = useCartStore();

// Используем валидацию формы
const {
  name,
  phone,
  address,
  isPrivateHouse,
  apartment,
  entrance,
  floor,
  comment,

  nameError,
  phoneError,
  addressError,
  apartmentError,
  entranceError,
  floorError,
  commentError,

  meta,
  onSubmit,
} = useCartForm();

const paymentMethod = ref(PaymentMethod.CASH);
const paymentBanknote = ref(PaymentBanknote.WITHOUT_CHANGE);

// Устанавливаем мета-данные для SEO
useHead({
  title: 'Forest Rest - Корзина',
  meta: [
    { name: 'description', content: 'Добро пожаловать в ресторан Forest Rest. Выберите меню и наслаждайтесь вкусными блюдами.' }
  ]
});
</script>

<style lang="scss">
    @use '~/pages/styles/pageCart/page-cart' as *;
</style>
