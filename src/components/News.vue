<script setup>
const newsList = [
    {
        id: '1',
        title: 'Объявления',
        description: 'Студенты, которые подали заявки на участие в программах...',
        link: 'https://atu.edu.kz/archives/50013',
    },
    {
        id: '2',
        title: '8 апреля состоялся круглый стол в рамках празднования Недели науки в АТУ',
        description: '8 апреля 2022 года в Алматинском Технологическом Университете состоялся круглый стол...',
        link: 'https://atu.edu.kz/archives/49987',
    },
    {
        id: '3',
        title: 'Победители конкурса на звание «Лучший студент 2022»',
        description: 'Корпоративным Фондом «Эндаумент АТУ» был организован Конкурс «Лучший студент года»',
        link: 'https://atu.edu.kz/archives/49973',
    },
    {
        id: '4',
        title: 'Друзья, всем привет!',
        description: 'Друзья, всем привет!😉',
        link: 'https://atu.edu.kz/archives/49969',
    },
];
</script>

<template>
    <div class="news-block">
        <h2 class="news-block__title">
            Новости Университета
        </h2>

        <ul class="news-block__list">
            <li
                v-for="item in newsList"
                :key="item.id"
                class="news-block__list-item"
            >
                <a :href="item.link" class="news-block__list-item-link">
                    <span class="news-block__list-item-link-title">
                        {{ item.title }}
                    </span>

                    <span class="news-block__list-item-link-description">
                        {{ item.description }}
                    </span>
                </a>
            </li>
        </ul>
    </div>
</template>

<style scoped lang="scss">
.news-block {
    position: relative;
    top: -40px;
    padding: 20px;
    border-radius: $radius-large $radius-large 0 0;
    background: $white;

    &__title {
        margin-bottom: 12px;
        font-size: 1.125rem;
        font-weight: $font-bold;
        line-height: 28px;
        color: $black;
    }

    &__list {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    &__list-item {
        margin-bottom: 20px;

        &:last-of-type {
            margin-bottom: 0;
        }
    }

    &__list-item-link {
        display: block;
        font-size: 0.875rem;
        font-weight: $font-medium;
        text-decoration: none;
        color: $black;
    }

    &__list-item-link-title {
        display: block;
        margin-bottom: 4px;
    }

    &__list-item-link-description {
        display: block;
        font-size: 0.875rem;
        font-weight: $font-normal;
        line-height: 20px;
        color: $gray-silver;
    }
}
</style>
