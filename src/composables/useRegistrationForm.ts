import { useForm, useField } from 'vee-validate';
import { registrationSchema } from '~/schemas';

export const useRegistrationForm = () => {
    const { handleSubmit, errors, meta, resetForm, setFieldValue } = useForm({
        validationSchema: registrationSchema,
        initialValues: {
            name: '',
            email: '',
            phone: '',
            password: '',
            confirmPassword: '',
            agreeToTerms: false,
        },
    });

    // Поля формы
    const { value: name, errorMessage: nameError } = useField('name');
    const { value: email, errorMessage: emailError } = useField('email');
    const { value: phone, errorMessage: phoneError } = useField('phone');
    const { value: password, errorMessage: passwordError } = useField('password');
    const { value: confirmPassword, errorMessage: confirmPasswordError } = useField('confirmPassword');
    const { value: agreeToTerms, errorMessage: agreeToTermsError } = useField('agreeToTerms');

    // Безопасный доступ к meta с fallback
    const formMeta = computed(() => meta.value || { valid: false, touched: false, dirty: false });

    // Обработчик отправки формы
    const onSubmit = handleSubmit((values) => {
        console.log('Данные формы:', values);

        // Здесь будет логика отправки данных на сервер
        alert('Форма успешно отправлена!');
    });

    return {
        // Значения полей
        name: name as Ref<string>,
        email: email as Ref<string>,
        phone: phone as Ref<string>,
        password: password as Ref<string>,
        confirmPassword: confirmPassword as Ref<string>,
        agreeToTerms: agreeToTerms as Ref<boolean>,

        // Ошибки валидации
        errors,
        nameError,
        emailError,
        phoneError,
        passwordError,
        confirmPasswordError,
        agreeToTermsError,

        // Мета-информация о форме
        meta: formMeta,

        // Методы
        onSubmit,
        resetForm,
        setFieldValue,
    };
};
