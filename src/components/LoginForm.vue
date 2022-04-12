<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const store = useStore();
const router = useRouter();

const email = ref('');
const password = ref('');

const formData = {
    email,
    password,
};

/**
 * Отправляем данные с формы авторизации в firebase
 */
async function postFormData() {
    try {
        await store.dispatch('login', formData);
        router.push('/index');
    } catch (e) {
        console.log(e);
    }
}
</script>

<template>
    <form
        class="form-login"
        @submit.prevent="postFormData"
    >
        <div class="form-login__group-input">
            <input
                v-model="email"
                type="email"
                class="form-login__input"
                placeholder="Введите Email"
            />

            <input
                v-model="password"
                type="password"
                class="form-login__input"
                placeholder="Введите пароль"
            />
        </div>

        <div class="form-login__actions">
            <button class="form-login__button">
                Войти в аккаунт
            </button>

            <span class="form-login__text">
                Если у вас еще нет аккаунта вы можете
                <router-link to="/signup" class="form-login__text-link">
                    Зарегистрироваться
                </router-link>
            </span>
        </div>
    </form>
</template>

<style scoped lang="scss">
.form-login {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 260px;

    &__input {
        display: block;
        width: 100%;
        margin-bottom: 16px;
        padding: 12px 10px;
        font-size: 0.875rem;
        font-weight: $font-normal;
        line-height: 22px;
        border: none;
        border-radius: $radius-medium;
        background-color: $white-smoke;
    }

    &__button {
        @include reset-button;

        width: 100%;
        padding: 16px 10px;
        border-radius: $radius-medium;
        background: $blue-primary;
        color: $white;
    }

    &__text {
        display: block;
        margin-top: 12px;
        font-size: 0.875rem;
        font-weight: $font-normal;
        line-height: 20px;
        text-align: center;
    }

    &__text-link {
        font-size: 0.75rem;
        font-weight: $font-bold;
        line-height: 24px;
        text-transform: uppercase;
        text-decoration: none;
        color: $blue-primary;
    }
}
</style>
