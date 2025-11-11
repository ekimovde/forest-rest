<template>
  <section class="page-admin-stats">
    <div class="page-admin-stats__header">
      <div class="page-admin-stats__header-top">
        <h2 class="page-admin-stats__title g-h1">
          Статистика заказов
        </h2>

        <div class="page-admin-stats__actions">
          <UiButton
            tag="link"
            href="/profile"
            view="default"
          >
            <i class="bx bx-arrow-back"></i>
            Назад в профиль
          </UiButton>
        </div>
      </div>

      <div class="page-admin-stats__period">
        <UiButton
          v-for="period in periods"
          :key="period.value"
          v-model="selectedPeriod"
          :value="period.value"
          view="default"
        >
          {{ period.label }}
        </UiButton>
      </div>
    </div>

    <div class="page-admin-stats__stats">
      <AdminStatCard
        caption="Всего заказов"
        :value="totalOrders"
      />

      <AdminStatCard
        caption="Общая сумма"
        icon="bx bx-wallet"
        type="secondary"
        :value="formatPrice(totalRevenue)"
      />

      <AdminStatCard
        caption="Средний чек"
        icon="bx bx-trending-up"
        type="accent"
        :value="formatPrice(averageCheck)"
      />

      <AdminStatCard
        caption="Клиентов"
        icon="bx bx-user"
        type="danger"
        :value="totalCustomers"
      />
    </div>

    <UiInput
        v-model="searchQuery"
        placeholder="Поиск по номеру заказа или клиенту"
        class="page-admin-stats__search"
    >
        <template #prepend>
        <i class="bx bx-search"></i>
        </template>
    </UiInput>

    <AdminTable
        :items="filteredOrders"
        class="page-admin-stats__table"
    />

    <AdminPagination
        :current-page="currentPage"
        :total-pages="totalPages"
        @prev-page="prevPage"
        @next-page="nextPage"
    />
  </section>
</template>

<script setup lang="ts">
import {formatPrice} from '~/utils';
import {useSeo} from '~/composables/useSeo';

import UiButton from '~/components/ui/UiButton.vue';
import UiInput from '~/components/ui/UiInput.vue';
import AdminStatCard from '~/components/admin/AdminStatCard.vue';
import AdminTable from '~/components/admin/AdminTable.vue';
import AdminPagination from '~/components/admin/AdminPagination.vue';

// Периоды
const periods = [
    { label: 'Сегодня', value: 'today' },
    { label: 'Неделя', value: 'week' },
    { label: 'Месяц', value: 'month' },
    { label: 'Год', value: 'year' },
    { label: 'Все время', value: 'all' },
];

// Моковые данные заказов
const orders = ref([
    {
        id: '10247',
        date: new Date('2024-03-15T14:30:00'),
        customerName: 'Иванов Иван',
        customerPhone: '+7 (999) 123-45-67',
        itemsCount: 5,
        total: 3450,
    },
    {
        id: '10246',
        date: new Date('2024-03-15T13:15:00'),
        customerName: 'Петрова Мария',
        customerPhone: '+7 (999) 234-56-78',
        itemsCount: 3,
        total: 2100,
    },
    {
        id: '10245',
        date: new Date('2024-03-15T12:45:00'),
        customerName: 'Сидоров Петр',
        customerPhone: '+7 (999) 345-67-89',
        itemsCount: 7,
        total: 5890,
    },
    {
        id: '10244',
        date: new Date('2024-03-15T11:20:00'),
        customerName: 'Козлова Анна',
        customerPhone: '+7 (999) 456-78-90',
        itemsCount: 2,
        total: 1500,
    },
    {
        id: '10243',
        date: new Date('2024-03-15T10:30:00'),
        customerName: 'Морозов Дмитрий',
        customerPhone: '+7 (999) 567-89-01',
        itemsCount: 4,
        total: 3200,
    },
    {
        id: '10242',
        date: new Date('2024-03-14T18:45:00'),
        customerName: 'Соколова Елена',
        customerPhone: '+7 (999) 678-90-12',
        itemsCount: 6,
        total: 4750,
    },
    {
        id: '10241',
        date: new Date('2024-03-14T17:20:00'),
        customerName: 'Волков Александр',
        customerPhone: '+7 (999) 789-01-23',
        itemsCount: 3,
        total: 2800,
    },
    {
        id: '10240',
        date: new Date('2024-03-14T16:10:00'),
        customerName: 'Новикова Ольга',
        customerPhone: '+7 (999) 890-12-34',
        itemsCount: 5,
        total: 4200,
    },
    {
        id: '10239',
        date: new Date('2024-03-14T15:05:00'),
        customerName: 'Григорьев Сергей',
        customerPhone: '+7 (999) 901-23-45',
        itemsCount: 2,
        total: 1800,
    },
    {
        id: '10238',
        date: new Date('2024-03-14T14:00:00'),
        customerName: 'Козлова Анна',
        customerPhone: '+7 (999) 012-34-56',
        itemsCount: 4,
        total: 3600,
    },
    {
        id: '10237',
        date: new Date('2024-03-14T13:10:00'),
        customerName: 'Новикова Ольга',
        customerPhone: '+7 (999) 123-45-67',
        itemsCount: 3,
        total: 2700,
    },
    {
        id: '10236',
        date: new Date('2024-03-14T12:15:00'),
        customerName: 'Петрова Мария',
        customerPhone: '+7 (999) 234-56-78',
        itemsCount: 6,
        total: 5400,
    },
    {
        id: '10235',
        date: new Date('2024-03-14T11:20:00'),
        customerName: 'Сидоров Петр',
        customerPhone: '+7 (999) 345-67-89',
        itemsCount: 8,
        total: 7200,
    },
]);

const selectedPeriod = ref('month');
const searchQuery = ref('');

const totalOrders = ref(247);
const totalRevenue = ref(1245890);
const averageCheck = ref(5044);
const totalCustomers = ref(156);

const currentPage = ref(1);
const itemsPerPage = 10;

// Фильтрация заказов
const filteredOrders = computed(() => {
    return orders.value.filter(order => {
        const matchesSearch = !searchQuery.value ||
            order.id.includes(searchQuery.value) ||
            order.customerName.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
            order.customerPhone.includes(searchQuery.value);

        return matchesSearch;
    });
});

const totalPages = computed(() => Math.ceil(filteredOrders.value.length / itemsPerPage));

const prevPage = () => {
    if (currentPage.value > 1) {
        currentPage.value--;
    }
};

const nextPage = () => {
    if (currentPage.value < totalPages.value) {
        currentPage.value++;
    }
};

// Устанавливаем мета-данные для SEO
useSeo({
    title: 'Статистика заказов - Админ панель',
    description: 'Административная панель для просмотра статистики и управления заказами Forest Rest.',
    keywords: ['админ панель', 'статистика', 'заказы', 'управление'],
    type: 'website',
    noIndex: true
});
</script>

<style lang="scss">
  @use '~/pages/styles/pageAdminStats/page-admin-stats' as *;
</style>
