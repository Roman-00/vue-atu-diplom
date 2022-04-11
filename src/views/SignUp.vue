<script setup>
import SignUpForm from '@/components/SignUpForm.vue';
</script>

<template>
    <div class="signup">
        <div class="container">
            <div class="signup__content">
                <h2 class="signup__title">
                    Зарегистрировать аккаунт
                </h2>

                <SignUpForm />
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.signup {
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
