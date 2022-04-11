<script setup></script>

<template>
    <form
        class="form-signup"
        @submit.prevent=""
    >
        <div class="form-signup__group-input">
            <input
                type="text"
                class="form-signup__input"
                placeholder="Введите Ваше Имя"
            />

            <input
                type="email"
                class="form-signup__input"
                placeholder="Введите Email"
            />

            <input
                type="password"
                class="form-signup__input"
                placeholder="Введите пароль"
            />
        </div>

        <div class="form-signup__actions">
            <button class="form-signup__button">
                Войти в аккаунт
            </button>

            <span class="form-signup__text">
                Если у вас уже есть аккаунт вы можете
                <router-link to="/login" class="form-signup__text-link">
                    Войти
                </router-link>
            </span>
        </div>
    </form>
</template>

<style scoped lang="scss">
.form-signup {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 300px;

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
