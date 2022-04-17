<script setup>
import 'bootstrap/dist/css/bootstrap.min.css';

// eslint-disable-next-line no-undef
defineProps({
    listError: {
        type: Array,
        default: () => [],
    },
    isShowAlert: Boolean,
});
</script>

<template>
    <div
        class="alert alert-danger"
        :class="{ 'alert-danger--active' : isShowAlert }"
        role="alert"
    >
        <h2 class="alert-danger__title">
            Заполните поля!
        </h2>
        <span
            v-for="item in listError"
            :key="item"
            class="alert-danger__text"
        >
            {{ item }}
        </span>
    </div>
</template>

<style scoped lang="scss">
.alert-danger {
    position: fixed;
    top: 20px;
    right: 50px;
    width: 100%;
    max-width: 250px;
    transform: translate3d(calc(100% + 70px), -50%, 0);
    transition: transform 0.3s ease;
    z-index: 99;

    &__title {
        margin-bottom: 10px;
        font-size: 16px;
        line-height: 24px;
    }

    &__text {
        display: inline-block;
        margin-right: 10px;
        font-size: 14px;
        line-height: 20px;
    }

    &--active {
        transform: translate3d(0, 22px, 0);
    }
}
</style>
