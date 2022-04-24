<script setup>
import {
    computed, onMounted, onUnmounted, ref,
} from 'vue';
import { useRoute } from 'vue-router';
import debounce from 'lodash/debounce';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

const route = useRoute();

const isActive = ref(false);

const isHidden = computed(() => route.path === '/preview');
const title = computed(() => route.name);

/**
 * Добавляем активность для шапки при скролле
 */
const activeHeader = debounce(() => {
    isActive.value = window.scrollY > 120;
}, 16);

onMounted(() => {
    window.addEventListener('scroll', activeHeader);
});

onUnmounted(() => {
    window.removeEventListener('scroll', activeHeader);
});
</script>

<template>
    <Header
        v-if="!isHidden"
        :is-active="isActive"
        :title="title"
    />
    <router-view/>
    <Footer
        v-if="!isHidden"
    />
</template>
