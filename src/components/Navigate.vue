<script setup>
const navList = [
    {
        id: 'home',
        to: '/index',
        class: 'nav-link-index',
        exact: true,
    },
    {
        id: 'cabinet',
        to: '/cabinet',
        class: 'nav-link-cabinet',
        exact: true,
    },
];
</script>

<template>
    <div class="navigate-panel">
        <ul class="navigate-panel__list">
            <li
                v-for="item in navList"
                :key="item.id"
                class="navigate-panel__list-item"
            >
                <router-link
                    :to="item.to"
                    :exact="item.exact"
                    active-class="navigate-panel__list-item-link--active"
                    class="navigate-panel__list-item-link"
                    :class="item.class"
                />
            </li>
        </ul>
    </div>
</template>

<style scoped lang="scss">
.navigate-panel {
    position: relative;
    padding: 12px;

    &__list {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0;
        padding: 0;
        list-style: none;
    }

    &__list-item-link {
        position: relative;
        display: block;
        width: 20px;
        height: 20px;
        margin: 12px;
    }

    &__list-item-link {
        &--active {
            &::after {
                content: '';
                position: absolute;
                left: 0;
                right: 0;
                bottom: -10px;
                width: 100%;
                height: 4px;
                border-radius: $radius-medium;
                background: $blue-primary;
            }
        }
    }

    .nav-link-index {
        background: url('../assets/icons/home.svg') no-repeat center center / cover;
    }

    .nav-link-cabinet {
        background: url('../assets/icons/cabinet.svg') no-repeat center center / cover;
    }
}
</style>
