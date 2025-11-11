import {useForm, useField} from 'vee-validate';
import {loginSchema} from '~/schemas';

export const useLoginForm = () => {
    const { handleSubmit, errors, meta, resetForm, setFieldValue } = useForm({
        validationSchema: loginSchema,
        initialValues: {
            email: '',
            password: '',
            remember: false,
        },
    });

    // Поля формы
    const { value: email, errorMessage: emailError } = useField('email');
    const { value: password, errorMessage: passwordError } = useField('password');
    const { value: remember, errorMessage: rememberError } = useField('remember');

    // Безопасный доступ к meta с fallback
    const formMeta = computed(() => meta.value || { valid: false, touched: false, dirty: false });

    // Обработчик отправки формы
    const onSubmit = handleSubmit((values) => {
        console.log('Данные формы:', values);

        // Здесь будет логика отправки данных на сервер
        alert('Форма успешно отправлена!');
    });

    // Обработчик восстановления пароля
    const onForgotPassword = () => {
        // Здесь должна быть логика восстановления пароля
        alert('Функция восстановления пароля в разработке');
    };

    return {
        // Значения полей
        email: email as Ref<string>,
        password: password as Ref<string>,
        remember: remember as Ref<boolean>,

        // Ошибки валидации
        errors,
        emailError,
        passwordError,
        rememberError,

        // Мета-информация о форме
        meta: formMeta,

        // Методы
        onSubmit,
        onForgotPassword,
        resetForm,
        setFieldValue,
    };
};
