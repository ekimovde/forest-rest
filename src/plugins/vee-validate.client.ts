import { configure } from 'vee-validate';

// Конфигурация VeeValidate
export default defineNuxtPlugin(() => {
  configure({
    generateMessage: (context) => {
      const messages = {
        required: `Поле "${context.label}" обязательно для заполнения`,
        email: `Поле "${context.label}" должно содержать корректный email адрес`,
        min: `Поле "${context.label}" должно содержать минимум ${context.rule?.params?.[0] || 0} символов`,
        max: `Поле "${context.label}" должно содержать максимум ${context.rule?.params?.[0] || 0} символов`,
        confirmed: `Поля "${context.label}" не совпадают`,
        regex: `Поле "${context.label}" имеет неверный формат`,
        alpha: `Поле "${context.label}" может содержать только буквы`,
        alpha_num: `Поле "${context.label}" может содержать только буквы и цифры`,
        numeric: `Поле "${context.label}" может содержать только цифры`,
        integer: `Поле "${context.label}" должно быть целым числом`,
        decimal: `Поле "${context.label}" должно быть числом`,
        url: `Поле "${context.label}" должно быть корректным URL`,
        date: `Поле "${context.label}" должно быть корректной датой`,
        after: `Поле "${context.label}" должно быть после указанной даты`,
        before: `Поле "${context.label}" должно быть до указанной даты`,
        alpha_spaces: `Поле "${context.label}" может содержать только буквы и пробелы`,
        digits: `Поле "${context.label}" должно содержать ${context.rule?.params?.[0] || 0} цифр`,
        dimensions: `Поле "${context.label}" имеет неверные размеры`,
        excluded: `Поле "${context.label}" имеет недопустимое значение`,
        ext: `Поле "${context.label}" имеет недопустимое расширение файла`,
        image: `Поле "${context.label}" должно быть изображением`,
        oneOf: `Поле "${context.label}" должно быть одним из допустимых значений`,
        size: `Файл "${context.label}" слишком большой`,
        double: `Поле "${context.label}" должно быть числом`,
        length: `Поле "${context.label}" должно содержать ${context.rule?.params?.[0] || 0} символов`,
        min_value: `Поле "${context.label}" должно быть не меньше ${context.rule?.params?.[0] || 0}`,
        max_value: `Поле "${context.label}" должно быть не больше ${context.rule?.params?.[0] || 0}`,
        mimes: `Поле "${context.label}" имеет недопустимый тип файла`,
        not_one_of: `Поле "${context.label}" имеет недопустимое значение`,
      };

      return messages[context.rule?.name as keyof typeof messages] || `Поле "${context.label}" имеет неверное значение`;
    },
  });
});
