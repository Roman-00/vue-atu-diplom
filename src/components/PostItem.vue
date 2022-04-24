<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
// eslint-disable-next-line no-undef
defineProps({
    post: Object,
});
</script>

<template>
    <div
        class="post-item"
        @click="router.push(`/posts/${post.id}`)"
    >
        <figure class="post-item__images">
            <img
                :src="post.yoast_head_json.og_image[0].url"
                :alt="post.title.rendered"
                class="post-item__images-preview"
            />
        </figure>
        <h2 class="post-item__title" v-html="post.title.rendered" />
        <p  class="post-item__description" v-html="post.excerpt.rendered"/>
    </div>
</template>

<style scoped lang="scss">
.post-item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 400px;
    padding-bottom: 8px;
    border-radius: $radius-medium;
    background: $white;

    &__images {
        height: 234px;
        border-radius: $radius-medium $radius-medium 0 0;
    }

    &__images-preview {
        width: 100%;
        height: 234px;
        object-fit: cover;
        border-radius: $radius-medium $radius-medium 0 0;
    }

    &__title {
        max-height: 26px;
        margin: 12px 0 6px;
        padding: 0 10px;
        font-family: 'SF Pro Display', sans-serif;
        font-size: 17px;
        font-weight: $font-semi-bold;
        line-height: 22px;
        text-align: left;
        overflow: hidden;
    }

    &__description {
        max-height: 100px;
        padding: 0 10px;
        font-family: 'SF Pro Display', sans-serif;
        font-size: 15px;
        font-weight: $font-normal;
        line-height: 20px;
        letter-spacing: -0.24px;
        text-align: left;
        color: $text-color;
        overflow: hidden;
    }
}
</style>
