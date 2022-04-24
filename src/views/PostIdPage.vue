<script setup>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';

const store = useStore();
const route = useRoute();

const path = computed(() => route.path.replace('/posts/', ''));

onMounted(() => {
    store.dispatch('getPost', path.value);
});

</script>

<template>
    <div class="post-page">
        Hello World
    </div>
</template>
