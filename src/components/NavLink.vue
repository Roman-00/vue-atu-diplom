<template>
    <ul class="nav-link">
        <li class="nav-link__item">
            <router-link
                to="/index"
                class="nav-link__item-link nav-link__item-link-home"
            />
        </li>

        <li class="nav-link__item">
            <router-link
                to="/schedule"
                class="nav-link__item-link nav-link__item-link-schedule"
            />
        </li>

        <li class="nav-link__item">
            <router-link
                to="/account"
                class="nav-link__item-link nav-link__item-link-account"
            />
        </li>
    </ul>
</template>

<style scoped lang="scss">
.nav-link {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin: 0;
    padding: 0;
    list-style: none;

    &__item {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 24px;
        height: 24px;
    }

    &__item-link {
        display: block;
        width: 24px;
        height: 24px;
        margin: 0;
    }

    &__item-link-home {
        background: url('../assets/icons/home.svg') no-repeat center center / cover;
    }

    &__item-link-schedule {
        background: url('../assets/icons/schedule.svg') no-repeat center center / cover;
    }

    &__item-link-account {
        background: url('../assets/icons/account.svg') no-repeat center center / cover;
    }
}
</style>
