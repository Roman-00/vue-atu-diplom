<template>
    <div class="user">
        <div class="user__images"></div>

        <div class="user__info">
            <span class="user__info-text">
                Добро пожаловать!
            </span>

            <span class="user__info-name">
                Roman Vasin
            </span>
        </div>
    </div>
</template>

<style scoped lang="scss">
.user {
    position: relative;
    display: flex;
    align-items: center;

    &__images {
        width: 40px;
        height: 40px;
        margin-right: 12px;
        border-radius: $radius-full;
        background: url('../assets/images/avatar.jpg') no-repeat center center / cover;
        overflow: hidden;
    }

    &__info {
        display: flex;
        flex-direction: column;
    }

    &__info-text {
        font-size: 0.75rem;
        font-weight: $font-medium;
        line-height: 20px;
        color: $white;
    }

    &__info-name {
        font-size: 0.875rem;
        font-weight: $font-medium;
        line-height: 20px;
        color: $white;
    }
}
</style>
