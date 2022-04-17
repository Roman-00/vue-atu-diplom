<script setup>
// eslint-disable-next-line no-undef
defineProps({
    title: String,
});

/**
 * Вернуться обратно
 */
function goBack() {
    window.history.back();
}
</script>

<template>
    <header class="header">
        <button class="header__go-back" @click="goBack"/>

        <h2 class="header__title">
            {{ title }}
        </h2>

        <div class="header__user">
            Roman
        </div>
    </header>
</template>

<style scoped lang="scss">
.header {
    position: sticky;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    margin-bottom: 22px;
    background: $white;

    &__go-back {
        @include reset-button;

        width: 24px;
        height: 24px;
        border-radius: $radius-full;
        background: $white url('../assets/icons/arrow-left.svg') no-repeat center center / 60%;
        box-shadow: 0 0 18px 7px rgba(34, 60, 80, 0.1);
    }

    &__title {
        font-size: 18px;
        font-weight: $font-semi;
        line-height: 26px;
    }

    &__user {
        font-size: 14px;
        font-weight: $font-semi;
        line-height: 20px;
    }
}
</style>
