<script setup>
import LoginForm from '@/components/LoginForm.vue';
</script>

<template>
    <div class="login">
        <div class="container">
            <div class="login__content">
                <h2 class="login__title">
                    Войти в&nbsp;свой&nbsp;аккаунт
                </h2>

                <LoginForm />
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.login {
    &__content {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        min-height: 90vh;
        padding-top: 20px;
    }

    &__title {
        font-size: 2rem;
        font-weight: $font-bold;
        line-height: 36px;
        color: $text-blue-color;
    }
}
</style>
