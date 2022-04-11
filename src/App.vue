<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

const route = useRoute();

const title = computed(() => route.name);
const isShow = computed(() => route.path !== '/');
const isShowFooter = computed(() => route.path !== '/'
    && route.path !== '/login'
    && route.path !== '/signup');
</script>

<template>
    <Header
        :is-show-button="isShow"
        :title="title"
    />
        <router-view/>
    <Footer
        v-if="isShowFooter"
    />
</template>
