<script setup>
import SignUpForm from '@/components/SignUpForm.vue';

/**
 * Возврат по роуту
 */
function goBack() {
    window.history.back();
}
</script>

<template>
    <div class="signup">
        <div class="signup__header">
            <button class="signup__header-button" @click="goBack"/>
            <h2 class="signup__title">
                Зарегистрироваться
            </h2>
        </div>

        <div class="signup__footer">
            <SignUpForm />
        </div>
    </div>
</template>

<style scoped lang="scss">
.signup {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
    background: url('../assets/images/signup-images.jpg') no-repeat center 30% / contain;
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
        left: 8%;
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
