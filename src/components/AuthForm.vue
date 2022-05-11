<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import auth from '@/api/__mocks__/auth.json';
import { ALERT_STATE } from '@/common/alert/alert';

const router = useRouter();

// eslint-disable-next-line no-undef
const emit = defineEmits(['update-state']);

const email = ref('');
const password = ref('');
const errorList = ref([]);

/**
 * Валидация полей формы
 */
function isValid() {
    if (email.value === '' && password.value === '') {
        errorList.value = [];
        errorList.value.push('Поля Email* и Пароль не заполнены!');
        emit('update-state', {
            state: ALERT_STATE.ERROR,
            errors: errorList,
        });
        return false;
    }

    if (email.value === '') {
        errorList.value = [];
        errorList.value.push('Поле Email* пустое');
        emit('update-state', {
            state: ALERT_STATE.ERROR,
            errors: errorList,
        });
        return false;
    }

    if (password.value === '') {
        errorList.value = [];
        errorList.value.push('Поле Пароль* пустое');
        emit('update-state', {
            state: ALERT_STATE.ERROR,
            errors: errorList,
        });
        return false;
    }

    return true;
}

/**
 * Отправляем данные с формы, для авторизации пользователя
 */
async function handleSubmit() {
    if (!isValid()) return;

    try {
        if (email.value === auth.login && password.value === auth.password) {
            localStorage.setItem('loggedIn', 'true');
            await router.push('/index');
        }
    } catch (e) {
        console.log(e);
    }
}
</script>

<template>
    <form
        class="auth-form"
        @submit.prevent="handleSubmit"
    >
        <div class="auth-form__group">
            <label for="auth-form-mail" class="auth-form__label">Ваш E-mail</label>
            <input
                v-model="email"
                id="auth-form-mail"
                type="text"
                class="auth-form__input"
                placeholder="example@mail.ru"
            />
        </div>

        <div class="auth-form__group">
            <label for="auth-form-password" class="auth-form__label">Ваш пароль</label>
            <input
                v-model="password"
                id="auth-form-password"
                type="text"
                class="auth-form__input"
                placeholder="Введите пароль"
            />
        </div>

        <button class="auth-form__button-submit">
            Войти
        </button>
    </form>
</template>

<style scoped lang="scss">
.auth-form {
    position: relative;

    &__group {
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
    }

    &__label {
        margin-bottom: 5px;
        font-size: 0.875rem;
        font-weight: $font-regular;
        line-height: 20px;
        color: rgba($black-primary, 0.6);
    }

    &__input {
        display: flex;
        align-items: center;
        min-height: 42px;
        padding: 0 12px;
        border: 1px solid rgba($black-primary, 0.2);
        border-radius: $radius-small;

        &::placeholder {
            color: rgba($black-primary, 0.5);
        }

        &:focus {
            border: 1px solid $blue-primary;
        }
    }

    &__button-submit {
        @include reset-button;

        width: 100%;
        min-height: 44px;
        font-size: 0.875rem;
        font-weight: $font-semi-bold;
        line-height: 20px;
        box-shadow: 0 2px 4px rgba($black-primary, 0.1);
        border-radius: $radius-medium;
        background: $blue-primary;
        color: $white;
    }
}
</style>
