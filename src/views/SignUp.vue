<script setup>
import SignUpForm from '@/components/SignUpForm.vue';
</script>

<template>
    <div class="signup">
        <div class="signup__header">
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
