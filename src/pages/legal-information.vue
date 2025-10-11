<template>
  <section class="page-legal-information">
    <div class="page-legal-information__header">
      <h1 class="page-legal-information__title">
        Юридическая информация
      </h1>

      <p class="page-legal-information__subtitle">
        Правовая информация и политика конфиденциальности
      </p>
    </div>

    <div class="page-legal-information__content">
      <div class="page-legal-information__section">
        <h2 class="page-legal-information__section-title">
          Информация о компании
        </h2>

        <div class="page-legal-information__info-grid">
          <div
            v-for="info in companyInfo"
            :key="info.id"
            class="page-legal-information__info-item"
          >
            <span class="page-legal-information__info-label">
              {{ info.label }}
            </span>

            <span class="page-legal-information__info-value">
              {{ info.value }}
            </span>
          </div>
        </div>
      </div>

      <div class="page-legal-information__section">
        <h2 class="page-legal-information__section-title">
          Пользовательское соглашение
        </h2>

        <div class="page-legal-information__text-block">
          <h3 class="page-legal-information__subtitle-small">
            1. Общие положения
          </h3>

          <p class="page-legal-information__text">
            Настоящее Пользовательское соглашение (далее — Соглашение) регулирует отношения между ИП Forest Rest (далее — Ресторан) и пользователем сайта при оформлении заказов на доставку блюд.
          </p>

          <p class="page-legal-information__text">
            Используя сайт и оформляя заказ, вы соглашаетесь с условиями данного соглашения.
          </p>

          <h3 class="page-legal-information__subtitle-small">
            2. Оформление заказа
          </h3>

          <p class="page-legal-information__text">
            Заказ считается принятым после подтверждения оператором. Ресторан оставляет за собой право отказать в принятии заказа при невозможности его выполнения.
          </p>

          <ul class="page-legal-information__list">
            <li
              v-for="term in orderTerms"
              :key="term.id"
              class="page-legal-information__list-item"
            >
              {{ term.text }}
            </li>
          </ul>

          <h3 class="page-legal-information__subtitle-small">
            3. Доставка и оплата
          </h3>

          <p class="page-legal-information__text">
            Доставка осуществляется по адресам в городе Чита. Стоимость и условия доставки указаны в разделе "Доставка и оплата". Оплата производится курьеру при получении заказа наличными или банковской картой.
          </p>

          <h3 class="page-legal-information__subtitle-small">
            4. Возврат и обмен
          </h3>

          <p class="page-legal-information__text">
            В случае обнаружения недостатков в блюдах, клиент имеет право на возврат денежных средств или замену заказа. Претензии принимаются в течение 24 часов с момента получения заказа.
          </p>

          <h3 class="page-legal-information__subtitle-small">
            5. Ответственность сторон
          </h3>

          <p class="page-legal-information__text">
            Ресторан не несет ответственности за задержку доставки, вызванную форс-мажорными обстоятельствами или предоставлением клиентом неверной контактной информации.
          </p>
        </div>
      </div>

      <div class="page-legal-information__section">
        <h2 class="page-legal-information__section-title">
          Политика конфиденциальности
        </h2>

        <div class="page-legal-information__text-block">
          <h3 class="page-legal-information__subtitle-small">
            1. Сбор информации
          </h3>

          <p class="page-legal-information__text">
            При оформлении заказа мы собираем следующую информацию: имя, номер телефона, адрес доставки, адрес электронной почты (по желанию). Эта информация необходима для обработки и доставки вашего заказа.
          </p>

          <h3 class="page-legal-information__subtitle-small">
            2. Использование информации
          </h3>

          <p class="page-legal-information__text">
            Полученная информация используется исключительно для:
          </p>

          <ul class="page-legal-information__list">
            <li
              v-for="purpose in dataPurposes"
              :key="purpose.id"
              class="page-legal-information__list-item"
            >
              {{ purpose.text }}
            </li>
          </ul>

          <h3 class="page-legal-information__subtitle-small">
            3. Защита данных
          </h3>

          <p class="page-legal-information__text">
            Мы принимаем все необходимые меры для защиты ваших персональных данных от несанкционированного доступа, изменения или уничтожения. Ваши данные хранятся на защищенных серверах и не передаются третьим лицам без вашего согласия, за исключением случаев, необходимых для выполнения заказа.
          </p>

          <h3 class="page-legal-information__subtitle-small">
            4. Файлы Cookie
          </h3>

          <p class="page-legal-information__text">
            Наш сайт использует файлы cookie для улучшения пользовательского опыта. Cookie помогают запомнить ваши предпочтения и улучшить функциональность сайта. Вы можете отключить cookie в настройках браузера.
          </p>

          <h3 class="page-legal-information__subtitle-small">
            5. Ваши права
          </h3>

          <p class="page-legal-information__text">
            Вы имеете право запросить доступ к своим персональным данным, их изменение или удаление. Для этого свяжитесь с нами по телефону +7 (914) 808-55-50.
          </p>
        </div>
      </div>

      <div class="page-legal-information__section page-legal-information__section--highlight">
        <h2 class="page-legal-information__section-title">
          Контактная информация
        </h2>

        <p class="page-legal-information__text">
          По всем вопросам, связанным с юридической информацией, политикой конфиденциальности или пользовательским соглашением, вы можете связаться с нами:
        </p>

        <div class="page-legal-information__contacts">
          <div
            v-for="contact in contacts"
            :key="contact.id"
            class="page-legal-information__contact-item"
          >
            <span class="page-legal-information__contact-label">
              {{ contact.label }}:
            </span>

            <a
              v-if="contact.link"
              :href="contact.link"
              class="page-legal-information__contact-link"
            >
              {{ contact.value }}
            </a>

            <span
              v-else
              class="page-legal-information__contact-value"
            >
              {{ contact.value }}
            </span>
          </div>
        </div>
      </div>

      <div class="page-legal-information__footer">
        <p class="page-legal-information__footer-text">
          Последнее обновление: {{ lastUpdate }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useSeo } from '~/composables/useSeo';

// Информация о компании
const companyInfo = [
  {
    id: 1,
    label: 'Наименование',
    value: 'ИП Forest Rest'
  },
  {
    id: 2,
    label: 'ИНН',
    value: '123456789012'
  },
  {
    id: 3,
    label: 'ОГРНИП',
    value: '123456789012345'
  },
  {
    id: 4,
    label: 'Юридический адрес',
    value: 'г. Чита, ул. Примерная, д. 1'
  },
  {
    id: 5,
    label: 'Телефон',
    value: '+7 (914) 808-55-50'
  }
];

// Условия заказа
const orderTerms = [
  {
    id: 1,
    text: 'Минимальная сумма заказа — 500₽'
  },
  {
    id: 2,
    text: 'Время приготовления и доставки составляет 60-90 минут'
  },
  {
    id: 3,
    text: 'Отмена заказа возможна не позднее чем за 30 минут до времени доставки'
  },
  {
    id: 4,
    text: 'Ресторан оставляет за собой право изменить время доставки в зависимости от загруженности'
  }
];

// Цели использования данных
const dataPurposes = [
  {
    id: 1,
    text: 'Обработки и выполнения заказа'
  },
  {
    id: 2,
    text: 'Связи с вами для уточнения деталей заказа'
  },
  {
    id: 3,
    text: 'Улучшения качества обслуживания'
  },
  {
    id: 4,
    text: 'Информирования о специальных предложениях (при вашем согласии)'
  }
];

// Контакты
const contacts = [
  {
    id: 1,
    label: 'Телефон',
    value: '+7 (914) 808-55-50',
    link: 'tel:+79148085550'
  },
  {
    id: 2,
    label: 'Адрес',
    value: 'г. Чита, ул. Примерная, д. 1',
    link: null
  }
];

// Дата последнего обновления
const lastUpdate = new Date().toLocaleDateString('ru-RU', {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});

// Устанавливаем мета-данные для SEO
useSeo({
  title: 'Юридическая информация',
  description: 'Юридическая информация, политика конфиденциальности и пользовательское соглашение ресторана Forest Rest.',
  keywords: ['юридическая информация', 'политика конфиденциальности', 'пользовательское соглашение'],
  type: 'website',
  noIndex: true
});
</script>

<style lang="scss">
    @use '~/pages/styles/pageLegalInformation/page-legal-information' as *;
</style>
