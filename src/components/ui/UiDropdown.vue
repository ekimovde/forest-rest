<template>
    <div
        ref="dropdownRef"
        class="ui-dropdown"
        :class="uiDropdownClasses"
    >
        <button
            class="ui-dropdown__trigger"
            @click="toggleDropdown"
            :disabled="disabled"
        >
            <span class="ui-dropdown__trigger-text">
                {{ selectedText }}
            </span>

            <i class="bx bx-chevron-down ui-dropdown__arrow" />
        </button>

        <Transition name="dropdown">
            <div
                v-if="isOpen"
                class="ui-dropdown__menu"
            >
                <button
                    v-for="option in options"
                    :key="option.value"
                    class="ui-dropdown__option"
                    :class="getUiDropdownOptionClasses(option)"
                    @click="selectOption(option)"
                >
                    {{ option.label }}
                </button>
            </div>
        </Transition>
    </div>
</template>

<script setup lang="ts">
import type { IDropdownOption } from '~/interfaces';

const emit = defineEmits<{
    (e: 'update:modelValue', value: string | number): void
    (e: 'change', option: IDropdownOption): void
}>();

const props = withDefaults(defineProps<{
    modelValue?: string | number
    options?: IDropdownOption[]
    placeholder?: string
    disabled?: boolean
}>(), {
    modelValue: undefined,
    options: () => [],
    placeholder: 'Выберите опцию',
    disabled: false
});

const isOpen = ref(false);
const dropdownRef = ref<HTMLElement>();

const selectedText = computed(() => {
    if (props.modelValue === undefined) {
        return props.placeholder;
    }

    const selectedOption = props.options.find(option => option.value === props.modelValue);
    return selectedOption?.label || props.placeholder;
});

const uiDropdownClasses = computed(() => ({
    'ui-dropdown--is-open': isOpen.value,
}));

const getUiDropdownOptionClasses = (option: IDropdownOption) => ({
    'ui-dropdown__option--is-selected': option.value === props.modelValue,
});

const toggleDropdown = () => {
    if (props.disabled) {
        return;
    }

    isOpen.value = !isOpen.value;
};

const selectOption = (option: IDropdownOption) => {
    emit('update:modelValue', option.value);
    emit('change', option);

    isOpen.value = false;
};

const closeDropdown = (event: Event) => {
    if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
        isOpen.value = false;
    }
};

onMounted(() => {
    document.addEventListener('click', closeDropdown);
});

onUnmounted(() => {
    document.removeEventListener('click', closeDropdown);
});
</script>

<style lang="scss">
    @use '~/components/ui/styles/uiDropdown/component' as *;
</style>
