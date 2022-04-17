<script setup>
import LogInForm from '@/components/LogInForm.vue';

/**
 * Возврат по роуту
 */
function goBack() {
    window.history.back();
}
</script>

<template>
    <div class="login">
        <div class="login__header">
            <button class="login__header-button" @click="goBack"/>
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
        position: relative;
        padding: 26px 0;
        z-index: 2;
    }

    &__header-button {
        @include reset-button;
        position: absolute;
        top: 50%;
        left: 15%;
        width: 24px;
        height: 24px;
        padding: 10px;
        border-radius: $radius-full;
        background: $white url('../assets/icons/arrow-left.svg') no-repeat center center / 60%;
        transform: translateY(-50%);
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
