import {useForm, useField} from 'vee-validate';
import {cartSchema} from '~/schemas';

export const useCartForm = () => {
  const { handleSubmit, errors, meta, resetForm, setFieldValue } = useForm({
    validationSchema: cartSchema,
    initialValues: {
      name: '',
      phone: '',
      address: '',
      isPrivateHouse: false,
      apartment: '',
      entrance: '',
      floor: '',
      comment: '',
    },
  });

  // Поля формы
  const { value: name, errorMessage: nameError } = useField('name');
  const { value: phone, errorMessage: phoneError } = useField('phone');
  const { value: address, errorMessage: addressError } = useField('address');
  const { value: isPrivateHouse, errorMessage: isPrivateHouseError } = useField('isPrivateHouse');
  const { value: apartment, errorMessage: apartmentError } = useField('apartment');
  const { value: entrance, errorMessage: entranceError } = useField('entrance');
  const { value: floor, errorMessage: floorError } = useField('floor');
  const { value: comment, errorMessage: commentError } = useField('comment');

  // Обработчик отправки формы
  const onSubmit = handleSubmit((values) => {
    console.log('Данные формы:', values);

    // Здесь будет логика отправки данных на сервер
    alert('Форма успешно отправлена!');
  });

  // Безопасный доступ к meta с fallback
  const formMeta = computed(() => meta.value || { valid: false, touched: false, dirty: false });

  return {
    // Значения полей
    name: name as Ref<string>,
    phone: phone as Ref<string>,
    address: address as Ref<string>,
    isPrivateHouse: isPrivateHouse as Ref<boolean>,
    apartment: apartment as Ref<string>,
    entrance: entrance as Ref<string>,
    floor: floor as Ref<string>,
    comment: comment as Ref<string>,

    // Ошибки валидации
    errors,
    nameError,
    phoneError,
    addressError,
    isPrivateHouseError,
    apartmentError,
    entranceError,
    floorError,
    commentError,

    // Мета-информация о форме
    meta: formMeta,

    // Методы
    onSubmit,
    resetForm,
    setFieldValue,
  };
};
