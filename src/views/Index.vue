<script setup>
import 'bootstrap/dist/css/bootstrap.min.css';
import PostList from '@/components/PostList.vue';
</script>

<template>
    <div class="index">
        <div class="container-sm">
            <PostList />
        </div>
    </div>
</template>

<style scoped lang="scss">
.index {
    padding: 20px 0;
}
</style>
