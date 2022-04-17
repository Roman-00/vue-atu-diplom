<script setup>
import { onBeforeUnmount, ref, watch } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import Alert from '@/components/common/Alert.vue';

const store = useStore();
const router = useRouter();

console.log(router);

const email = ref('');
const password = ref('');
const isValid = ref(false);
const isShowAlert = ref(false);
const listError = ref([]);
const closeTimeOut = ref(null);

const formData = {
    email,
    password,
};

/**
 * Валидация формы входа
 */
function validateInput() {
    if (email.value === '' || password.value === '') {
        isValid.value = false;
        isShowAlert.value = true;
        if (email.value === '') listError.value.push('Введите ваш Email');
        if (password.value === '') listError.value.push('Введите ваш Пароль');
    } else {
        isValid.value = true;
        isShowAlert.value = false;
    }

    return isValid.value;
}

/**
 * Отправляем данные с формы
 */
async function handleSubmit() {
    if (!validateInput()) return;

    try {
        await store.dispatch('login', formData);
        router.push('/index');
    } catch (e) {
        console.log(e);
    }
}

/**
 * Скрываем Alert, и отчищаем список ошибок
 */
const close = () => {
    listError.value = [];
    isShowAlert.value = false;
};

/**
 * Сбрасываем таймаут после того как он отработал
 */
const clear = () => {
    if (closeTimeOut.value) {
        clearTimeout(closeTimeOut.value);
        closeTimeOut.value = null;
    }
};

watch(isShowAlert, (value) => {
    if (value) {
        closeTimeOut.value = setTimeout(() => {
            close();
            clear();
        }, 5000);
    }
});

onBeforeUnmount(() => clear());
</script>

<template>
    <form
        class="login-form"
        @submit.prevent="handleSubmit"
    >
        <div class="login-form__input-group">
            <input
                v-model="email"
                type="email"
                class="login-form__input"
                placeholder="Введите свой Email"
            />
        </div>

        <div class="login-form__input-group">
            <input
                v-model="password"
                type="password"
                class="login-form__input"
                placeholder="Введите свой Пароль"
            />
        </div>

        <button class="login-form__button">
            Войти
        </button>
    </form>

    <Alert
        :list-error="listError"
        :is-show-alert="isShowAlert"
    />
</template>

<style scoped lang="scss">
.login-form {
    position: relative;

    &__input-group {
        margin-bottom: 20px;
    }

    &__input {
        width: 100%;
        padding: 12px 10px;
        border: none;
        border-radius: $radius-small;

        &::placeholder {
            color: $gray-silver;
        }
    }

    &__button {
        @include reset-button;

        display: block;
        width: 100%;
        padding: 10px 0;
        font-size: 14px;
        font-weight: $font-medium;
        line-height: 22px;
        border-radius: $radius-medium;
        background: $blue-primary;
        box-shadow: 0 8px 25px rgba(42, 129, 221, 0.6);
        color: $white;
    }
}
</style>
