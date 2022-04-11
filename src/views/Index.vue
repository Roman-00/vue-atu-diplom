<script setup>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import NewsList from '@/components/NewsList.vue';

const store = useStore();

onMounted(() => {
    store.dispatch('getNews');
});

const listNews = computed(() => store.getters.news);
</script>

<template>
    <div class="index">
        <div class="container">
            <h3 class="index__title">
                Свежие новости
            </h3>

            <NewsList :list-news="listNews"/>
        </div>
    </div>
</template>

<style scoped lang="scss">
.index {
    &__title {
        margin-top: 20px;
        font-size: 1.125rem;
        font-weight: $font-bold;
        line-height: 24px;
        color: $text-blue-color;
    }
}
</style>
