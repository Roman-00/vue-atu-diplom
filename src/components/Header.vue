<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const title = computed(() => route.name);
const isShowButton = computed(() => route.path !== '/');

/**
 * Кнопка вернуться назад
 */
function goBack() {
    window.history.back();
}
</script>

<template>
    <header class="header">
        <button
            v-if="isShowButton"
            class="header__button-go-back"
            @click="goBack"
        />
        <h2 class="header__title">
            {{ title }}
        </h2>
    </header>
</template>

<style scoped lang="scss">
.header {
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    width: 100%;
    min-height: 52px;
    padding: 10px 20px;
    background: $white;

    &__title {
        position: absolute;
        top: 50%;
        left: 0;
        right: 0;
        margin: 0 auto;
        font-size: 1rem;
        font-weight: $font-bold;
        line-height: 24px;
        text-align: center;
        transform: translateY(-50%);
        color: $text-blue-color;
        z-index: -1;
    }

    &__button-go-back {
        @include reset-button;

        width: 32px;
        height: 32px;
        border-radius: $radius-full;
        background: $white-smoke url('../assets/icons/arrow-left.svg') no-repeat center center;
        background-size: 60%;
        cursor: pointer;
    }
}
</style>
