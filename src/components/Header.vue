<script setup>
import User from '@/components/User.vue';
</script>

<template>
    <header class="header">
        <User />

        <button class="header__button-logout">
            <i class="header__button-logout-icon"></i>
            <span class="header__button-logout-text">
                Выйти
            </span>
        </button>
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
    justify-content: space-between;
    padding: 20px 20px 60px;
    background: $blue-primary;

    &__button-logout {
        @include reset-button;

        display: flex;
        flex-direction: column;
        align-items: center;
        background: transparent;
    }

    &__button-logout-icon {
        width: 20px;
        height: 20px;
        margin-bottom: 5px;
        background: url('../assets/icons/logout.svg') no-repeat center center / cover;
    }

    &__button-logout-text {
        display: block;
        font-size: 0.75rem;
        font-weight: $font-normal;
        line-height: 20px;
        color: $white;
    }
}
</style>
