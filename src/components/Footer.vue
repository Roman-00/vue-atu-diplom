<script setup>
import Navigate from '@/components/Navigate.vue';
</script>

<template>
    <footer class="footer">
        <Navigate />
    </footer>
</template>

<style scoped lang="scss">
.footer {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    border-radius: $radius-large $radius-large 0 0;
    background: $white;
    box-shadow: -3px -9px 8px -5px rgba(34, 60, 80, 0.2);
}
</style>
