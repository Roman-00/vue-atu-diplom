<script setup>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import { Carousel, Slide } from 'vue3-carousel';
import PostItem from '@/components/PostItem.vue';

import 'vue3-carousel/dist/carousel.css';

const store = useStore();

onMounted(() => {
    store.dispatch('getPosts');
});

const posts = computed(() => store.getters.allPosts);
</script>

<template>
    <div
        v-if="posts.length  > 0"
        class="post-list"
    >
        <h2 class="post-list__title">
            Новости
        </h2>

        <Carousel :autoplay="2000" :wrap-around="true">
            <Slide
                v-for="post in posts"
                :key="post.id"
            >
                <PostItem
                    :post="post"
                />
            </Slide>
        </Carousel>
    </div>
    <div v-else class="not-found">
        Посты не найдены!
    </div>
</template>

<style scoped lang="scss">
.post-list {
    padding: 12px;
    border-radius: $radius-medium;
    background: $white;

    &__title {
        margin-bottom: 9px;
        font-family: 'SF Pro Display', sans-serif;
        font-size: 17px;
        font-weight: $font-semi-bold;
        line-height: 22px;
        letter-spacing: -0.408px;
        color: $text-color;
    }
}
</style>
