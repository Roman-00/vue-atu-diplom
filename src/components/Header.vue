<script setup>
// eslint-disable-next-line no-undef
defineProps({
    isScroll: Boolean,
    title: {
        type: String,
        default: '',
    },
});
</script>

<template>
    <header
        class="header"
        :class="{ 'header--scroll' : isScroll}"
    >
        <h2 class="header__title">
            {{ title }}
        </h2>
    </header>
</template>

<style scoped lang="scss">
.header {
    position:  sticky;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 44px;
    background: $white;
    z-index: 99;

    &__title {
        font-size: 0.875rem;
        font-weight: $font-regular;
        line-height: 24px;
        color: $text-color;
    }

    &--scroll {
        box-shadow: 0 2px 4px rgba($black-primary, 0.1);
    }
}
</style>
