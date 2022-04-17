<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

const route = useRoute();

const title = computed(() => route.name);
const showHeader = computed(() => route.path !== '/'
    && route.path !== '/login' && route.path !== '/signup');

</script>

<template>
    <Header
        v-if="showHeader"
        :title="title"
    />
    <router-view/>
    <Footer />
</template>
