<script setup>
// eslint-disable-next-line no-undef
defineProps({
    listNews: {
        type: Array,
        default: () => [],
    },
});
</script>

<template>
    <ul class="news-list">
        <li
            v-for="news in listNews"
            :key="news.title"
            class="news-list__item"
        >
            <a href="#" class="news-list__item-link">
                <span class="news-list__item-link-label">
                    Top
                </span>
                <img :src="news.img" :alt="news.title" class="news-list__item-link-image">
                <h4 class="news-list__item-link-title">
                    {{ news.title }}
                    <span class="news-list__item-link-description">
                        {{ news.description }}
                    </span>
                </h4>
            </a>
        </li>
    </ul>
</template>

<style scoped lang="scss">
.news-list {
    margin: 0;
    padding: 0;
    list-style: none;

    &__item {
        margin: 32px 0;
    }

    &__item-link {
        position: relative;
        display: block;
        text-decoration: none;
    }

    &__item-link-label {
        position: absolute;
        top: 10px;
        left: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 58px;
        padding: 4px;
        font-size: 0.875rem;
        font-weight: $font-bold;
        line-height: 20px;
        border-radius: $radius-large;
        background: $lavender;
    }

    &__item-link-image {
        width: 100%;
        height: 250px;
        margin-bottom: 12px;
        border-radius: $radius-large;
        object-fit: cover;
    }

    &__item-link-title {
        position: relative;
        margin-bottom: 4px;
        padding-top: 10px;
        font-size: 1rem;
        font-weight: $font-medium;
        line-height: 20px;
        color: $black;

        &::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 1px;
            width: 100%;
            background: $gray-silver;
        }
    }

    &__item-link-description {
        display: inline-block;
        font-size: 0.875rem;
        font-weight: $font-medium;
        line-height: 20px;
        color: $text-gray-color;
    }
}
</style>
