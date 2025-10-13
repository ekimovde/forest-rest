import * as yup from 'yup';

export const loginSchema = yup.object({
    email: yup
        .string()
        .email('Некорректный email')
        .required('Email обязателен'),

    password: yup
        .string()
        .required('Пароль обязателен')
        .min(6, 'Пароль должен содержать минимум 6 символов'),

    remember: yup.boolean(),
});

export const registrationSchema = yup.object({
    name: yup
        .string()
        .required('Имя обязательно')
        .min(2, 'Имя должно содержать минимум 2 символа'),

    email: yup
        .string()
        .email('Некорректный email')
        .required('Email обязателен'),

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

    password: yup
        .string()
        .required('Пароль обязателен')
        .min(6, 'Пароль должен содержать минимум 6 символов'),

    confirmPassword: yup
        .string()
        .required('Подтверждение пароля обязательно')
        .oneOf([yup.ref('password')], 'Пароли должны совпадать'),

    agreeToTerms: yup.boolean().oneOf([true], 'Необходимо согласиться с условиями'),
});
