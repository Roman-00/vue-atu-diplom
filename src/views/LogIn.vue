<script setup>
import LogInForm from '@/components/LogInForm.vue';
</script>

<template>
    <div class="login">
        <div class="login__header">
            <h2 class="login__title">
                Войти в аккаунт
            </h2>
        </div>

        <div class="login__footer">
            <LogInForm />
        </div>
    </div>
</template>

<style scoped lang="scss">
.login {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
    background: url('../assets/images/login-image.jpg') no-repeat center center / contain;
    overflow: hidden;

    &__header {
        padding: 26px 0;
        z-index: 2;
    }

    &__title {
        font-size: 22px;
        font-weight: $font-bold;
        line-height: 28px;
        text-align: center;
    }

    &__footer {
        margin: 20px;
        padding: 20px;
        border-radius: $radius-medium;
        background: $white-smoke;
    }

    &::before {
        content: '';
        position: absolute;
        top: -20%;
        left: 0;
        right: 0;
        width: 100%;
        min-height: 250px;
        border-radius: $radius-full;
        background: $white-smoke;
        z-index: 1;
    }
}
</style>
