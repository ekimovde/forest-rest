<template>
  <section class="page-contacts">
    <div class="page-contacts__header">
      <h1 class="page-contacts__title">
        Контакты
      </h1>

      <p class="page-contacts__subtitle">
        Мы всегда рады вашим вопросам и предложениям
      </p>
    </div>

    <div class="page-contacts__content">
      <div class="page-contacts__main">
        <div class="page-contacts__section">
          <h2 class="page-contacts__section-title">
            Свяжитесь с нами
          </h2>

          <div class="page-contacts__cards">
            <div
              v-for="contact in contactMethods"
              :key="contact.id"
              class="page-contacts__card"
            >
              <span class="page-contacts__card-icon">
                {{ contact.icon }}
              </span>

              <h3 class="page-contacts__card-title">
                {{ contact.title }}
              </h3>

              <a
                v-if="contact.link"
                :href="contact.link"
                class="page-contacts__card-link"
              >
                {{ contact.value }}
              </a>

              <span
                v-else
                class="page-contacts__card-value"
              >
                {{ contact.value }}
              </span>

              <p
                v-if="contact.description"
                class="page-contacts__card-description"
              >
                {{ contact.description }}
              </p>
            </div>
          </div>
        </div>

        <div class="page-contacts__section">
          <h2 class="page-contacts__section-title">
            Наш адрес
          </h2>

          <div class="page-contacts__address-block">
            <div class="page-contacts__address-info">
              <span class="page-contacts__address-icon">📍</span>

              <div class="page-contacts__address-content">
                <p class="page-contacts__address-text">
                  <strong>г. Чита</strong>, ул. Примерная, д. 1
                </p>

                <p class="page-contacts__address-text">
                  Мы находимся в центре города, недалеко от главных достопримечательностей
                </p>
              </div>
            </div>

            <div class="page-contacts__map-placeholder">
              <span class="page-contacts__map-icon">🗺️</span>
              <p class="page-contacts__map-text">
                Карта будет здесь
              </p>
            </div>
          </div>
        </div>

        <div class="page-contacts__section">
          <h2 class="page-contacts__section-title">
            Режим работы
          </h2>

          <div class="page-contacts__schedule">
            <div
              v-for="day in workSchedule"
              :key="day.id"
              class="page-contacts__schedule-item"
              :class="{ 'page-contacts__schedule-item--today': day.isToday }"
            >
              <span class="page-contacts__schedule-day">
                {{ day.day }}
              </span>

              <span class="page-contacts__schedule-time">
                {{ day.time }}
              </span>
            </div>
          </div>

          <div class="page-contacts__schedule-note">
            <span class="page-contacts__note-icon">⏰</span>
            <p class="page-contacts__note-text">
              Прием заказов до 22:30. Доставка осуществляется ежедневно.
            </p>
          </div>
        </div>

        <div class="page-contacts__section page-contacts__section--highlight">
          <h2 class="page-contacts__section-title">
            Остались вопросы?
          </h2>

          <p class="page-contacts__text">
            Если у вас есть вопросы, предложения или вы хотите оставить отзыв о нашей работе, мы будем рады услышать вас! Свяжитесь с нами любым удобным способом.
          </p>

          <div class="page-contacts__highlights">
            <div
              v-for="highlight in highlights"
              :key="highlight.id"
              class="page-contacts__highlight-item"
            >
              <span class="page-contacts__highlight-icon">
                {{ highlight.icon }}
              </span>

              <span class="page-contacts__highlight-text">
                {{ highlight.text }}
              </span>
            </div>
          </div>
        </div>

        <div class="page-contacts__section">
          <h2 class="page-contacts__section-title">
            Способы связи
          </h2>

          <div class="page-contacts__methods">
            <div
              v-for="method in communicationMethods"
              :key="method.id"
              class="page-contacts__method"
            >
              <span class="page-contacts__method-icon">
                {{ method.icon }}
              </span>

              <div class="page-contacts__method-content">
                <h3 class="page-contacts__method-title">
                  {{ method.title }}
                </h3>

                <p class="page-contacts__method-text">
                  {{ method.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {useSeo} from '~/composables/useSeo';

// Способы связи
const contactMethods = [
  {
    id: 1,
    icon: '📞',
    title: 'Телефон',
    value: '+7 (914) 808-55-50',
    link: 'tel:+79148085550',
    description: 'Звоните нам для заказа или консультации'
  },
  {
    id: 2,
    icon: '📍',
    title: 'Адрес',
    value: 'г. Чита, ул. Примерная, д. 1',
    link: null,
    description: 'Мы находимся в центре города'
  },
  {
    id: 3,
    icon: '📧',
    title: 'Email',
    value: 'info@forestrest.ru',
    link: 'mailto:info@forestrest.ru',
    description: 'Напишите нам письмо'
  }
];

// График работы
const getCurrentDay = () => {
  const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
  return days[new Date().getDay()];
};

const currentDay = getCurrentDay();

const workSchedule = [
  {
    id: 1,
    day: 'Понедельник',
    time: '11:00 — 23:00',
    isToday: currentDay === 'Понедельник'
  },
  {
    id: 2,
    day: 'Вторник',
    time: '11:00 — 23:00',
    isToday: currentDay === 'Вторник'
  },
  {
    id: 3,
    day: 'Среда',
    time: '11:00 — 23:00',
    isToday: currentDay === 'Среда'
  },
  {
    id: 4,
    day: 'Четверг',
    time: '11:00 — 23:00',
    isToday: currentDay === 'Четверг'
  },
  {
    id: 5,
    day: 'Пятница',
    time: '11:00 — 23:00',
    isToday: currentDay === 'Пятница'
  },
  {
    id: 6,
    day: 'Суббота',
    time: '11:00 — 23:00',
    isToday: currentDay === 'Суббота'
  },
  {
    id: 7,
    day: 'Воскресенье',
    time: '11:00 — 23:00',
    isToday: currentDay === 'Воскресенье'
  }
];

// Преимущества
const highlights = [
  {
    id: 1,
    icon: '⚡',
    text: 'Быстрый ответ на звонки и сообщения'
  },
  {
    id: 2,
    icon: '💬',
    text: 'Консультация по меню и составу блюд'
  },
  {
    id: 3,
    icon: '🎁',
    text: 'Помощь в выборе блюд для мероприятий'
  }
];

// Способы коммуникации
const communicationMethods = [
  {
    id: 1,
    icon: '🎧',
    title: 'Служба поддержки',
    description: 'Наша служба поддержки работает ежедневно с 11:00 до 23:00. Мы ответим на все ваши вопросы и поможем с оформлением заказа.'
  },
  {
    id: 2,
    icon: '💭',
    title: 'Обратная связь',
    description: 'Мы ценим мнение каждого клиента. Оставляйте отзывы и предложения, чтобы помочь нам стать лучше.'
  },
  {
    id: 3,
    icon: '📝',
    title: 'Корпоративные заказы',
    description: 'Планируете мероприятие? Свяжитесь с нами для обсуждения специальных условий и составления индивидуального меню.'
  }
];

// Устанавливаем мета-данные для SEO
useSeo({
  title: 'Контакты',
  description: 'Свяжитесь с рестораном Forest Rest в Чите. Адрес, телефон +7 (914) 808-55-50, время работы. Мы всегда рады вашим вопросам и предложениям.',
  keywords: ['контакты Forest Rest', 'телефон ресторана Чита', 'адрес ресторана', 'время работы', 'связаться'],
  type: 'website'
});
</script>

<style lang="scss">
    @use '~/pages/styles/pageContacts/page-contacts' as *;
</style>
