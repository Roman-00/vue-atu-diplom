<template>
    <div class="preview-loader">
        <img
            src="../assets/images/logo.png"
            alt="Алматинский Технологический Университет"
            class="preview-loader__logo"
        />
    </div>
</template>

<style scoped lang="scss">
.preview-loader {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 100vh;
    background: $white;
    z-index: 999;

    &__logo {
        max-width: 290px;
    }
}
</style>
