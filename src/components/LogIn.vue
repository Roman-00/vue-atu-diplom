<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const email = ref('');
const password = ref('');

/**
 * Функция для входа в приложение
 */
async function login() {
    const data = {
        email: email.value,
        password: password.value,
    };

    try {
        await store.dispatch('login', data);
    } catch (e) {
        console.log(e);
    }
}
</script>

<template>
    <form
        class="login"
        @submit.prevent="login"
    >
        <h2 class="login__title">
            Войти в ATU
        </h2>

        <input
            v-model="email"
            type="email"
            class="login__input"
            placeholder="Введите Email"
        >

        <input
            v-model="password"
            type="password"
            class="login__input"
            placeholder="Введите Пароль"
        >

        <button class="login__button">
            Войти
        </button>
    </form>
</template>

<style scoped lang="scss">
.login {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &__title {
        margin-bottom: 16px;
        font-size: 1rem;
        font-weight: $font-bold;
        line-height: 24px;
        text-transform: uppercase;
        color: $blue-primary;
    }

    &__input {
        margin-bottom: 16px;
        width: 100%;
        padding: 12px 8px;
        font-size: 0.75rem;
        font-weight: $font-normal;
        border: 1px solid $white-smoke;
        border-radius: $radius-small;
        color: $black;

        &::placeholder {
            color: $black;
        }
    }

    &__button {
        @include reset-button;

        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        padding: 12px 0;
        border-radius: $radius-small;
        background: $yellow-primary;
        color: $black;
    }
}
</style>
