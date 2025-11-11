<template>
    <div class="admin-pagination">
        <UiButton
          @click="emit('prevPage')"
          :disabled="isDisabledPrev"
          view="default"
        >
          <i class="bx bx-chevron-left" />

          Назад
        </UiButton>

        <span class="admin-pagination__info">
          Страница {{ currentPage }} из {{ totalPages }}
        </span>

        <UiButton
          @click="emit('nextPage')"
          :disabled="isDisabledNext"
          view="default"
        >
            Вперед

            <i class="bx bx-chevron-right" />
        </UiButton>
    </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
    (e: 'prevPage'): void;
    (e: 'nextPage'): void;
}>();

const {
    currentPage,
    totalPages,
} = defineProps<{
    currentPage?: number;
    totalPages?: number;
}>();

const isDisabledPrev = computed(() => currentPage === 1);
const isDisabledNext = computed(() => currentPage === totalPages);
</script>

<style lang="scss">
    @use '~/components/admin/styles/adminPagination/component' as *;
</style>
