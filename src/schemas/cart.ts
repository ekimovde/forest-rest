import * as yup from 'yup';

// Схема валидации для формы корзины
export const cartSchema = yup.object({
  name: yup
    .string()
    .required('ФИО обязательно для заполнения')
    .min(2, 'ФИО должно содержать минимум 2 символа')
    .matches(/^[а-яё\s]+$/i, 'ФИО может содержать только буквы и пробелы'),

  phone: yup
    .string()
    .required('Номер телефона обязателен для заполнения')
    .test('phone-format', 'Введите корректный номер телефона', function(value) {
      if (!value) return false;

      // Извлекаем только цифры из отформатированного номера
      const cleaned = value.replace(/\D/g, '');

      // Проверяем, что это российский номер (7 + 10 цифр)
      return /^7\d{10}$/.test(cleaned);
    }),

  address: yup
    .string()
    .required('Адрес обязателен для заполнения')
    .min(5, 'Адрес должен содержать минимум 5 символов'),

  isPrivateHouse: yup.boolean(),

  apartment: yup
    .string()
    .when('isPrivateHouse', {
      is: false,
      then: (schema) => schema.required('Укажите номер квартиры/офиса'),
      otherwise: (schema) => schema.notRequired(),
    }),

  entrance: yup
    .string()
    .when('isPrivateHouse', {
      is: false,
      then: (schema) => schema.required('Укажите подъезд'),
      otherwise: (schema) => schema.notRequired(),
    }),

  floor: yup
    .string()
    .when('isPrivateHouse', {
      is: false,
      then: (schema) => schema.required('Укажите этаж'),
      otherwise: (schema) => schema.notRequired(),
    }),

  comment: yup.string().max(500, 'Комментарий не должен превышать 500 символов'),
});
