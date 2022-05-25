<script setup>
import { ref, watch } from 'vue';
import { ALERT_STATE } from '@/common/alert/alert';
import AuthForm from '@/components/AuthForm.vue';
import Alert from '@/components/Alert.vue';

const state = ref(ALERT_STATE.DEFAULT);
const errors = ref(null);
const isShowAlert = ref(false);
const closeTimeout = ref(null);

const ALERT_SHOW_DURATION = 5000;

/**
 * Обновляем state или view для alert
 */
const updateState = (event) => {
    state.value = event.state;
    errors.value = event.errors;
    isShowAlert.value = true;
};

/**
 * Сбрасываем TimeOut
 */
const clear = () => {
    if (closeTimeout.value) {
        clearTimeout(closeTimeout);
        closeTimeout.value = null;
    }
};

/**
 * Показываем и через время скрываем Alert
 */
watch(isShowAlert, (currentValue) => {
    if (currentValue) {
        closeTimeout.value = setTimeout(() => {
            isShowAlert.value = false;
            errors.value = null;
            state.value = ALERT_STATE.DEFAULT;
            clear();
        }, ALERT_SHOW_DURATION);
    }
});
</script>

<template>
    <div class="auth">
        <figure class="auth__illustration">
            <img
                src="../assets/images/auth-previews.jpg"
                alt="Авторизация пользователя"
                class="auth__illustration-images"
            />
        </figure>

        <h2 class="auth__title">
            Авторизоваться в системе
            Универ
        </h2>

        <AuthForm
            @update-state="updateState"
        />

        <Alert
            :state="state"
            :errors-list="errors"
            :is-show-alert="isShowAlert"
        />
    </div>
</template>

<style scoped lang="scss">
.auth {
    padding: 0 20px;

    &__illustration {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    &__title {
        width: 100%;
        max-width: 242px;
        margin: 22px auto;
        font-size: 1.125rem;
        font-weight: $font-semi-bold;
        line-height: 26px;
        text-align: center;
    }
}
</style>
