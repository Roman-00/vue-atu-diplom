<script setup>
import { ref } from 'vue';
import Auth from '@/views/Auth.vue';
import PreviewActions from '@/components/PreviewActions.vue';

const showAuthBlock = ref(false);
</script>

<template>
    <div class="preview-page">
        <transition name="fade">
            <PreviewActions v-if="showAuthBlock"/>
            <Auth v-else />
        </transition>
    </div>
</template>

<style scoped lang="scss">
.preview-page {
    position: relative;
    width: 100%;
    min-height: 100vh;
    background: $white-smoke url('../assets/images/preview-bg.png') no-repeat center 25%;
    background-size: contain;
}
</style>
