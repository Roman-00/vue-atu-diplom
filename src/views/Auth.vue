<script setup>
import { ref } from 'vue';
import LogIn from '@/components/LogIn.vue';
import SignUp from '@/components/SignUp.vue';

const showForm = ref(false);
</script>

<template>
    <div class="auth-block">
        <div class="auth-block__wrapper">
            <LogIn v-if="showForm"/>
            <SignUp v-else/>
        </div>

        <button
            class="auth-block__exchange-form"
            @click="showForm = !showForm"
        >
            {{ showForm ? 'Зарегистрироваться' : 'Войти'  }}
        </button>
    </div>
</template>

<style scoped lang="scss">
.auth-block {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 20px;
    padding: 20px;
    border-radius: $radius-medium;
    background: $white;

    &__exchange-form {
        @include reset-button;

        position: relative;
        display: block;
        margin: 16px auto 0;
        padding-bottom: 5px;
        text-align: center;
        color: $blue-primary;

        &::after {
            content: '';
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            height: 1px;
            background: $blue-primary;
        }
    }
}

.fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
}
</style>
