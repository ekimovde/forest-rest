import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { IProduct, ICartItem } from '~/interfaces'
import { DELIVERY_PRICE } from '~/constants'

export const useCartStore = defineStore(
  'cart',
  () => {
    const items = ref<ICartItem[]>([]);

    /**
     * Получить все товары в корзине
     */
    const cartItems = computed(() => items.value);

    /**
     * Общее количество товаров в корзине
     */
    const totalItems = computed(() => {
      return items.value.reduce((total, item) => total + item.quantity, 0);
    });

    /**
     * Общая стоимость корзины
     */
    const orderPrice = computed(() => {
      return items.value.reduce((total, item) => total + item.price * item.quantity, 0);
    });

    /**
     * Общая стоимость корзины с доставкой
     */
    const totalPrice = computed(() => {
      return orderPrice.value + DELIVERY_PRICE;
    });

    /**
     * Проверка, пуста ли корзина
     */
    const isCartEmpty = computed(() => {
      return items.value.length === 0;
    });

    /**
     * Проверка, есть ли товар в корзине
     */
    const isInCart = (productId: number): boolean => {
      return items.value.some((item) => item.id === productId);
    };

    /**
     * Получить количество конкретного товара в корзине
     */
    const getItemQuantity = (productId: number): number => {
      const item = items.value.find((item) => item.id === productId);

      return item?.quantity || 0;
    };

    /**
     * Добавить товар в корзину
     */
    const addItem = (product: IProduct, quantity: number = 1) => {
      const existingItem = items.value.find((item) => item.id === product.id);

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        items.value.push({
          ...product,
          quantity,
        });
      }
    };

    /**
     * Удалить товар из корзины
     */
    const removeItem = (productId: number) => {
      const index = items.value.findIndex((item) => item.id === productId);

      if (index !== -1) {
        items.value.splice(index, 1);
      }
    };

    /**
     * Обновить количество товара
     */
    const updateQuantity = (productId: number, quantity: number) => {
      const item = items.value.find((item) => item.id === productId);

      if (item) {
        if (quantity <= 0) {
          removeItem(productId);
        } else {
          item.quantity = quantity;
        }
      }
    };

    /**
     * Увеличить количество товара на 1
     */
    const incrementQuantity = (productId: number) => {
      const item = items.value.find((item) => item.id === productId);

      if (item) {
        item.quantity++;
      }
    };

    /**
     * Уменьшить количество товара на 1
     */
    const decrementQuantity = (productId: number) => {
      const item = items.value.find((item) => item.id === productId);

      if (item) {
        if (item.quantity > 1) {
          item.quantity--;
        } else {
          removeItem(productId);
        }
      }
    };

    /**
     * Очистить корзину
     */
    const clearCart = () => {
      items.value = [];
    };

    return {
      items,
      cartItems,
      totalItems,
      orderPrice,
      totalPrice,
      isCartEmpty,

      isInCart,
      getItemQuantity,
      addItem,
      removeItem,
      updateQuantity,
      incrementQuantity,
      decrementQuantity,
      clearCart,
    }
  },
  {
    persist: {
      key: 'forest-rest-cart',
      storage: typeof window !== 'undefined' ? localStorage : undefined,
    },
  }
);
