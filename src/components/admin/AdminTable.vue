<template>
    <div class="admin-table">
        <table class="admin-table__table">
            <thead class="admin-table__table-head">
              <tr>
                <th class="admin-table__table-th">
                    № Заказа
                </th>

                <th class="admin-table__table-th">
                    Дата
                </th>

                <th class="admin-table__table-th">
                    Клиент
                </th>

                <th class="admin-table__table-th">
                    Товары
                </th>

                <th class="admin-table__table-th">
                    Сумма
                </th>
              </tr>
            </thead>

            <tbody class="admin-table__table-body">
              <tr
                v-for="item in items"
                :key="item.id"
                class="admin-table__table-row"
              >
                <td class="admin-table__table-td admin-table__table-td--order">
                  <span class="admin-table__order-number">
                    #{{ item.id }}
                  </span>
                </td>

                <td class="admin-table__table-td">
                  <span class="admin-table__date">
                    {{ formatDate(item.date) }}
                  </span>

                  <span class="admin-table__time">
                    {{ formatTime(item.date) }}
                  </span>
                </td>

                <td class="admin-table__table-td">
                  <div class="admin-table__customer">
                    <span class="admin-table__customer-name">
                        {{ item.customerName }}
                    </span>

                    <span class="admin-table__customer-phone">
                        {{ item.customerPhone }}
                    </span>
                  </div>
                </td>

                <td class="admin-table__table-td">
                  <span class="admin-table__items-count">
                    {{ item.itemsCount }} позиций
                  </span>
                </td>

                <td class="admin-table__table-td">
                  <span class="admin-table__total">
                    {{ formatPrice(item.total) }}
                  </span>
                </td>
              </tr>
            </tbody>
        </table>

        <div
            v-if="isEmptyItems"
            class="admin-table__empty"
        >
            <i class="admin-table__empty-icon bx bx-package" />

            <span class="admin-table__empty-text">
                Заказы не найдены
            </span>
        </div>
    </div>
</template>

<script setup lang="ts">
import {formatDate, formatTime} from '~/utils/formatDate';
import {formatPrice} from '~/utils/formatPrice';

const {
    items = []
} = defineProps<{
    items?: any[]
}>();

const isEmptyItems = computed(() => items.length === 0);
</script>

<style lang="scss">
    @use '~/components/admin/styles/adminTable/component' as *;
</style>
