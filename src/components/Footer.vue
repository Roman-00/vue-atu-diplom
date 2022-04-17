<script setup>
import NavLink from '@/components/NavLink.vue';
</script>

<template>
    <footer class="footer">
        <NavLink />
    </footer>
</template>

<style scoped lang="scss">
.footer {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 20px;
    background: $white;
    box-shadow: 0 1px 25px 2px rgba(34, 60, 80, 0.2);
}
</style>
