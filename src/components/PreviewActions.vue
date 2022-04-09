<template>
    <div class="preview-actions">
        <h2 class="preview-actions__title">
            ATU University
        </h2>

        <p class="preview-actions__description">
            Новости, Расписание занятий всегда&nbsp;с&nbsp;тобой :)
        </p>

        <button class="preview-actions__button">
            <i class="preview-actions__button-icon"></i>
            <span class="preview-actions__button-text">Начинаем</span>
        </button>
    </div>
</template>

<style scoped lang="scss">
.preview-actions {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 20px;
    padding: 20px;
    border-radius: $radius-medium;
    background: $white;

    &__title {
        margin-bottom: 16px;
        font-size: 1.5rem;
        font-weight: $font-bold;
        line-height: 28px;
        text-transform: uppercase;
        color: $blue-primary;
    }

    &__description {
        font-size: 0.875rem;
        font-weight: $font-medium;
        line-height: 20px;
        color: $text-color;
    }

    &__button {
        @include reset-button;

        display: flex;
        flex-direction: row-reverse;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin-top: 16px;
        padding: 12px 0;
        text-align: center;
        text-decoration: none;
        border-radius: $radius-small;
        background: $yellow-primary;
    }

    &__button-text {
        display: block;
        margin-right: 12px;
        font-size: 1rem;
        font-weight: $font-medium;
        line-height: 24px;
        color: $black;
    }

    &__button-icon {
        display: block;
        width: 20px;
        height: 20px;
        background: url('../assets/icons/arrow-right.svg') no-repeat center center / cover;
    }
}
</style>
