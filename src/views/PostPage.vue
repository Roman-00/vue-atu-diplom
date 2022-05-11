<script setup>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';

const store = useStore();
const route = useRoute();

const path = computed(() => route.path.repeat('/posts/', ''));

onMounted(() => {
    // store.dispatch('getPost', path.value);
});

const data = computed(() => store.getters.postData);
console.log(data, path);
</script>

<template>
    <div class="post-page">
        123
    </div>
</template>
