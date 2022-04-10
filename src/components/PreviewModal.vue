<script setup>
import {
    Carousel, Slide, Pagination, Navigation,
} from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';

// eslint-disable-next-line no-undef
defineProps({
    showPreviewModal: Boolean,
});

// eslint-disable-next-line no-undef
const emit = defineEmits(['update:showPreviewModal']);

const listSwipe = [
    {
        title: '&#128400; Привет Друг!',
        text: 'Добро пожаловать! В Алматинский Технологический Университет. Листай дальше и узнаешь много нового',
        images: 'https://firebasestorage.googleapis.com/v0/b/my-atu-edu-app.appspot.com/o/images-preview.jpg?alt=media&token=fce6b37f-7fd7-4628-a46b-70222fb9583f',
        button: '&#128400; Привет Друг!',
    },
    {
        title: '&#128214; Расписание',
        text: 'Теперь не нужно заходить на сайт и открывать много вкладок, с данным приложением все делается в 2 клика',
        images: 'https://firebasestorage.googleapis.com/v0/b/my-atu-edu-app.appspot.com/o/images-preview-2.jpg?alt=media&token=704e7806-0023-4f55-9e28-24a3a12302ca',
        button: 'Закрыть',
    },
    {
        title: '📰 Новости',
        text: 'Новости Университета всегда в твоих руках, будешь узнавать все первым &#128521;',
        images: 'https://firebasestorage.googleapis.com/v0/b/my-atu-edu-app.appspot.com/o/images-preview-3.jpg?alt=media&token=cdc8cc22-d00c-4bbd-8c9e-c893f902dcf7',
        button: 'Закрыть',
    },
];
</script>

<template>
    <transition name="modal">
        <div class="preview-modal">
            <div class="preview-modal__content">
                <carousel
                    :items-to-show="1"
                    :wrapAround="true"
                    class="preview-modal__carousel"
                >
                    <slide
                        v-for="slide in listSwipe"
                        :key="slide.title"
                    >
                        <div class="preview-modal__carousel-card">
                            <button
                                class="preview-modal__carousel-card-label"
                                v-html="slide.button"
                                @click="emit('update:showPreviewModal', !showPreviewModal)"
                            />

                            <img
                                :src="slide.images"
                                :alt="slide.title"
                                class="preview-modal__carousel-card-image"
                            >

                            <h2
                                class="preview-modal__carousel-card-title"
                                v-html="slide.title"
                            />

                            <p
                                class="preview-modal__carousel-card-description"
                                v-html="slide.text"
                            />
                        </div>
                    </slide>

                    <template #addons>
                        <Pagination />
                        <Navigation />
                    </template>
                </carousel>
            </div>
        </div>
    </transition>
</template>

<style scoped lang="scss">
.preview-modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    min-height: 100%;
    background: $white;

    &__content {
        position: relative;
    }

    &__carousel {
        width: 100%;
        min-height: 100%;
    }

    &__carousel-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px 20px 80px;
    }

    &__carousel-card-image {
        max-width: 300px;
    }

    &__carousel-card-title {
        margin: 16px 0;
        font-size: 1.5rem;
        font-weight: $font-bold;
        line-height: 28px;
    }

    &__carousel-card-description {
        font-size: 1rem;
        font-weight: $font-normal;
        line-height: 24px;
        color: $text-gray-color;
    }

    &__carousel-card-label {
        @include reset-button;

        position: absolute;
        top: 3%;
        right: 20px;
        font-family: 'Nunito', sans-serif;
        font-size: 1.125rem;
        font-weight: $font-medium;
        color: $black;
        line-height: 22px;
        transform: translateY(-3%);
    }

}

.modal-enter {
    opacity: 0
}
.modal-leave-active {
    opacity: 0
}
.modal-enter .modal-content,
.modal-leave-active .modal-content {
    transform: scale(1.2)
}
</style>
