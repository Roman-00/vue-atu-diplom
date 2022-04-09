<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

import Footer from '@/components/Footer.vue';

const route = useRoute();
const showButtonGoBack = computed(() => route.path !== '/' && route.path !== '/index');

/**
 * Вернуться на предыдущую страницу
 */
function goBack() {
    window.history.back();
}
</script>

<template>
    <transition name="fade">
        <router-view/>
    </transition>
    <button
        v-if="showButtonGoBack"
        class="app-button-go-back"
        @click="goBack"
    />
    <Footer />
</template>

<style scoped lang="scss">
.app-button-go-back {
    @include reset-button;

    position: absolute;
    top: 25px;
    right: 20px;
    width: 24px;
    height: 24px;
    border-radius: $radius-full;
    background: $white url('./assets/icons/arrow-left.svg') no-repeat center center / 60%;
    box-shadow: 0px -1px 8px 8px rgba($black, 0.1);
}
</style>
