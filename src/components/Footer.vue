<script setup>
import 'bootstrap/dist/css/bootstrap.min.css';

const tabsList = [
    {
        id: 'news',
        class: 'footer__tabs-item-icon-news',
        name: 'Новости',
        path: '/',
    },
    {
        id: 'schedule',
        class: 'footer__tabs-item-icon-schedule',
        name: 'Расписание',
        path: '/schedule',
    },
    {
        id: 'messages',
        class: 'footer__tabs-item-icon-messages',
        name: 'Сообщения',
        path: '/messages',
    },
    {
        id: 'account',
        class: 'footer__tabs-item-icon-account',
        name: 'Профиль',
        path: '/account',
    },
];
</script>

<template>
    <footer class="footer">
        <div class="container">
            <div class="footer__tabs">
                <router-link
                    v-for="tabs in tabsList"
                    :key="tabs.id"
                    :to="tabs.path"
                    class="footer__tabs-item"
                    active-class="footer__tabs-item--active"
                    exact
                >
                    <i
                        class="footer__tabs-item-icon"
                        :class="tabs.class"
                    />
                    <span class="footer__tabs-item-name">
                        {{ tabs.name }}
                    </span>
                </router-link>
            </div>
        </div>
    </footer>
</template>

<style scoped lang="scss">
.footer {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    max-height: 49px;
    padding: 5px 2px;
    border-top: 1px solid $border-color;
    background: $white;

    &__tabs {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    &__tabs-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        font-family: 'SF Pro Display', sans-serif;
        color: $inactive-tabs;
        text-decoration: none;
    }

    &__tabs-item-icon {
        display: block;
        width: 28px;
        height: 28px;
    }

    &__tabs-item-icon-news {
        background: url('../assets/icons/news.svg') no-repeat center center / cover;
    }

    &__tabs-item-icon-schedule {
        background: url('../assets/icons/services.svg') no-repeat center center / cover;
    }

    &__tabs-item-icon-messages {
        background: url('../assets/icons/messages.svg') no-repeat center center / cover;
    }

    &__tabs-item-icon-account {
        background: url('../assets/icons/user.svg') no-repeat center center / cover;
    }

    &__tabs-item-name {
        font-size: 10px;
        font-weight: $font-medium;
        line-height: 12px;
        letter-spacing: 0.12px;
    }

    &__tabs-item--active {
        color: $active-tabs;

        .footer__tabs-item-icon-news {
            background: url('../assets/icons/news-active.svg') no-repeat center center / cover;
        }

        .footer__tabs-item-icon-schedule {
            background: url('../assets/icons/services-active.svg') no-repeat center center / cover;
        }

        .footer__tabs-item-icon-messages {
            background: url('../assets/icons/messages-active.svg') no-repeat center center / cover;
        }

        .footer__tabs-item-icon-account {
            background: url('../assets/icons/user-active.svg') no-repeat center center / cover;
        }
    }
}
</style>
