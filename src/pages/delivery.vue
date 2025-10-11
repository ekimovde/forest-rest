<template>
  <section class="page-delivery">
    <div class="page-delivery__header">
      <h1 class="page-delivery__title">
        Доставка и оплата
      </h1>

      <p class="page-delivery__subtitle">
        Быстрая доставка вашего заказа прямо к двери
      </p>
    </div>

    <div class="page-delivery__content">
      <div class="page-delivery__section">
        <h2 class="page-delivery__section-title">
          Условия доставки
        </h2>

        <div class="page-delivery__cards">
          <div
            v-for="condition in deliveryConditions"
            :key="condition.id"
            class="page-delivery__card"
          >
            <span class="page-delivery__card-icon">
              {{ condition.icon }}
            </span>

            <h3 class="page-delivery__card-title">
              {{ condition.title }}
            </h3>

            <p class="page-delivery__card-text">
              {{ condition.description }}
            </p>
          </div>
        </div>
      </div>

      <div class="page-delivery__section">
        <h2 class="page-delivery__section-title">
          Зоны доставки
        </h2>

        <div class="page-delivery__zones">
          <div
            v-for="zone in deliveryZones"
            :key="zone.id"
            class="page-delivery__zone"
          >
            <div class="page-delivery__zone-header">
              <h3 class="page-delivery__zone-title">
                {{ zone.title }}
              </h3>

              <span class="page-delivery__zone-price">
                {{ zone.price }}
              </span>
            </div>

            <p class="page-delivery__zone-text">
              {{ zone.description }}
            </p>

            <ul class="page-delivery__zone-list">
              <li
                v-for="area in zone.areas"
                :key="area"
                class="page-delivery__zone-item"
              >
                {{ area }}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="page-delivery__section">
        <h2 class="page-delivery__section-title">
          Время доставки
        </h2>

        <div class="page-delivery__info-block">
          <p class="page-delivery__text">
            Среднее время доставки составляет <strong>60-90 минут</strong> с момента подтверждения заказа. 
            Время может варьироваться в зависимости от загруженности кухни и удаленности адреса доставки.
          </p>

          <p class="page-delivery__text">
            Мы работаем ежедневно с <strong>11:00 до 23:00</strong>. Принимаем заказы до 22:30.
          </p>

          <div class="page-delivery__highlight">
            <span class="page-delivery__highlight-icon">⏰</span>
            <p class="page-delivery__highlight-text">
              В часы пик (18:00 - 21:00) время доставки может увеличиться до 120 минут
            </p>
          </div>
        </div>
      </div>

      <div class="page-delivery__section">
        <h2 class="page-delivery__section-title">
          Способы оплаты
        </h2>

        <div class="page-delivery__payment-methods">
          <div
            v-for="method in paymentMethods"
            :key="method.id"
            class="page-delivery__payment-card"
          >
            <span class="page-delivery__payment-icon">
              {{ method.icon }}
            </span>

            <div class="page-delivery__payment-content">
              <h3 class="page-delivery__payment-title">
                {{ method.title }}
              </h3>

              <p class="page-delivery__payment-text">
                {{ method.description }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="page-delivery__section page-delivery__section--highlight">
        <h2 class="page-delivery__section-title">
          Важная информация
        </h2>

        <ul class="page-delivery__important-list">
          <li
            v-for="info in importantInfo"
            :key="info.id"
            class="page-delivery__important-item"
          >
            {{ info.text }}
          </li>
        </ul>
      </div>

      <div class="page-delivery__section">
        <div class="page-delivery__contact">
          <p class="page-delivery__contact-text">
            Остались вопросы? Свяжитесь с нами по телефону

            <a
              href="tel:+79148085550"
              class="page-delivery__contact-link"
            >
              +7 (914) 808-55-50
            </a>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useSeo } from '~/composables/useSeo';
import { DELIVERY_PRICE } from '~/constants/delivery';

// Условия доставки
const deliveryConditions = [
  {
    id: 1,
    icon: '🆓',
    title: 'Бесплатная доставка',
    description: 'При заказе от 1000₽ доставка абсолютно бесплатна в пределах зоны бесплатной доставки'
  },
  {
    id: 2,
    icon: '💰',
    title: `${DELIVERY_PRICE}₽ за доставку`,
    description: `Стоимость доставки ${DELIVERY_PRICE}₽ при заказе до 1000₽ или за пределами зоны бесплатной доставки`
  },
  {
    id: 3,
    icon: '📦',
    title: 'Минимальный заказ',
    description: 'Минимальная сумма заказа составляет 500₽. Доставляем заказы любого размера'
  },
  {
    id: 4,
    icon: '🚗',
    title: 'Быстрая доставка',
    description: 'Доставим ваш заказ в течение 60-90 минут. Следите за статусом заказа онлайн'
  }
];

// Зоны доставки
const deliveryZones = [
  {
    id: 1,
    title: 'Зона 1 — Бесплатная доставка',
    price: 'Бесплатно при заказе от 1000₽',
    description: 'Центральные районы города Читы с быстрой доставкой',
    areas: ['Центральный район', 'Ингодинский район', 'Железнодорожный район', 'Черновский район']
  },
  {
    id: 2,
    title: 'Зона 2 — Стандартная доставка',
    price: `${DELIVERY_PRICE}₽ или бесплатно от 1500₽`,
    description: 'Прилегающие районы с немного увеличенным временем доставки',
    areas: ['Октябрьский район', 'Северный микрорайон', 'Аэропорт', 'Каштак']
  },
  {
    id: 3,
    title: 'Зона 3 — Удаленная доставка',
    price: '300₽ или бесплатно от 2000₽',
    description: 'Отдаленные районы города',
    areas: ['Антипиха', 'Песчанка', 'Смоленка', 'Угдан', 'Кадала']
  }
];

// Способы оплаты
const paymentMethods = [
  {
    id: 1,
    icon: '💵',
    title: 'Наличными курьеру',
    description: 'Оплата наличными при получении заказа. Курьер выдаст чек'
  },
  {
    id: 2,
    icon: '📱',
    title: 'Картой курьеру',
    description: 'Бесконтактная оплата банковской картой через терминал курьера'
  }
];

// Важная информация
const importantInfo = [
  {
    id: 1,
    text: 'Мы доставляем заказы только по предварительному заказу через сайт или по телефону'
  },
  {
    id: 2,
    text: 'Точное время доставки уточняйте у оператора при подтверждении заказа'
  },
  {
    id: 3,
    text: 'Бесплатная отмена заказа возможна не позднее чем за 30 минут до времени доставки'
  },
  {
    id: 4,
    text: 'Если вас не устроило качество блюд, мы вернем деньги или приготовим заказ заново'
  }
];

// Устанавливаем мета-данные для SEO
useSeo({
  title: 'Доставка и оплата',
  description: 'Условия доставки еды из ресторана Forest Rest. Зоны доставки, стоимость, время, способы оплаты. Быстрая и бесплатная доставка при заказе от 1000₽.',
  keywords: ['доставка еды', 'условия доставки', 'оплата заказа', 'бесплатная доставка', 'Forest Rest доставка'],
  type: 'website'
});
</script>

<style lang="scss">
    @use '~/pages/styles/pageDelivery/page-delivery' as *;
</style>
