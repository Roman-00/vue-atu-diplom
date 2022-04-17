<template>
    <div class="preview">
        <div class="preview__header">
            <img
                src="@/assets/images/logo-atu-edu.png"
                alt="Алматинский Тeхнологический Университет"
                class="preview__header-image"
            />
        </div>

        <div class="preview__body">
            <h1 class="preview__title">
                Добро пожаловать!
                В&nbsp;Алматинский Тeхнологический Университет
            </h1>
        </div>

        <div class="preview__footer">
            <div class="preview__actions">
                <router-link
                    to="/signup"
                    class="preview__actions-link"
                >
                    Зарегистрироваться
                </router-link>
                <router-link
                    to="/login"
                    class="preview__actions-link"
                >
                    Войти
                </router-link>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.preview {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    min-height: 100vh;
    overflow: hidden;

    &__header {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        display: flex;
        justify-content: center;
        width: 100%;
        padding: 26px 0;
    }

    &__header-image {
        width: 200px;
    }

    &::before {
        content: '';
        position: absolute;
        top: -20%;
        left: 0;
        right: 0;
        width: 100%;
        min-height: 250px;
        border-radius: $radius-full;
        background: $white-smoke;
    }

    &__body {
        padding-top: calc(100% - 160px);
    }

    &__title {
        padding: 0 20px;
        font-size: 20px;
        font-weight: $font-medium;
        line-height: 28px;
        text-align: center;
    }

    &__footer {
        padding: 0 20px;
    }

    &__actions {
        padding: 22px;
        border-radius: $radius-medium;
        background: $white-smoke;
    }

    &__actions-link {
        display: block;
        width: 100%;
        margin-bottom: 22px;
        padding: 10px 0;
        font-size: 16px;
        font-weight: $font-medium;
        line-height: 24px;
        text-align: center;
        text-decoration: none;
        border-radius: $radius-medium;
        background: $blue-primary;
        box-shadow: 0 8px 25px rgba(42, 129, 221, 0.6);
        color: $white;

        &:last-of-type {
            margin-bottom: 0;
        }
    }
}
</style>
