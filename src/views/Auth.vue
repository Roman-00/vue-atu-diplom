<script setup>
import { ref } from 'vue';
import PreviewModal from '@/components/PreviewModal.vue';

const showPreviewModal = ref(false);
</script>

<template>
    <div class="auth-page">
        <div class="container">
            <div class="auth-page__content">
                <figure class="auth-page__figure">
                    <img
                        src="@/assets/images/logo-atu-edu.png"
                        alt="Atu University"
                        class="auth-page__figure-logo"
                    />
                </figure>

                <img
                    src="@/assets/images/auth.jpg"
                    alt="Illustration Auth Page"
                    class="auth-page__illustration"
                />

                <router-link
                    to="/signup"
                    class="auth-page__link"
                >
                    Зарегистрироваться
                </router-link>

                <router-link
                    to="/login"
                    class="auth-page__link"
                >
                    Войти
                </router-link>
            </div>
            <PreviewModal
                v-if="showPreviewModal"
                v-model:showPreviewModal="showPreviewModal"
            />
        </div>
    </div>
</template>

<style scoped lang="scss">
.auth-page {
    &__content {
        display: flex;
        flex-direction: column;
        padding: 20px 0;
    }

    &__figure {
        display: flex;
        align-items: center;
        justify-content: center;
        max-width: 250px;
        margin: 0 auto;
    }

    &__illustration {
        width: 100%;
        max-width: 250px;
        margin: 60px auto;
        text-align: center;
    }

    &__link {
        display: block;
        margin-bottom: 24px;
        padding: 12px;
        font-size: 1rem;
        font-weight: $font-medium;
        line-height: 26px;
        text-align: center;
        text-decoration: none;
        border-radius: $radius-medium;
        background-color: $yellow-primary;
        color: $text-blue-color;
    }
}
</style>
