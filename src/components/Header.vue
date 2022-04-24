<script setup>
// eslint-disable-next-line no-undef
defineProps({
    isActive: Boolean,
    title: String,
});

/**
 * Возвращаемся назад
 */
const goBack = () => {
    window.history.back();
};
</script>

<template>
    <header
        class="header"
        :class="{'header--active' : isActive}"
    >
        <div class="container">
            <button class="header__go-back" @click="goBack"/>

            <h2 class="header__title">
                {{ title }}
            </h2>
        </div>
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
    justify-content: center;
    min-height: 52px;
    background: $white;

    &--active {
        border-bottom: 1px solid $border-color;
    }

    &__go-back {
        @include reset-button;

        position: absolute;
        top: 50%;
        display: block;
        width: 20px;
        min-height: 28px;
        background: url('../assets/icons/back-icon.svg') no-repeat center center;
        transform: translateY(-50%);
    }

    &__title {
        font-size: 21px;
        font-weight: $font-normal;
        line-height: 26px;
        text-align: center;
        color: $text-color;
    }
}
</style>
