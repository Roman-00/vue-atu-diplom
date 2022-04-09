<script setup>
import { ref } from 'vue';

const email = ref('');
const password = ref('');
/**
 * Регистрируемся в системе
 */
function signUp() {
    console.log(123);
}
</script>

<template>
    <form
        class="sign-up"
        @submit.prevent="signUp"
    >
        <h2 class="sign-up__title">
            Зарегистрироваться в ATU
        </h2>

        <input
            v-model="email"
            type="email"
            class="sign-up__input"
            placeholder="Введите Email"
        >

        <input
            v-model="password"
            type="password"
            class="sign-up__input"
            placeholder="Введите Пароль"
        >

        <button class="sign-up__button">
            Зарегистрироваться
        </button>
    </form>
</template>

<style scoped lang="scss">
.sign-up {
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
