<script setup>
import { onMounted, computed } from 'vue';
import { useStore } from 'vuex';
import {
    Carousel, Slide, Pagination, Navigation,
} from 'vue3-carousel';
import { setCookie, getCookie } from '@/common/cookies';
import 'vue3-carousel/dist/carousel.css';

const store = useStore();

// eslint-disable-next-line no-undef
const props = defineProps({
    showPreviewModal: Boolean,
});

// eslint-disable-next-line no-undef
const emit = defineEmits(['update:showPreviewModal']);

onMounted(() => {
    store.dispatch('getPreview');
});

const listSwipe = computed(() => store.getters.previews);
const isShowPreview = computed(() => !getCookie('preview'));

/**
 * Закрываем превьюшку
 */
function closePreviewModal() {
    emit('update:showPreviewModal', !props.showPreviewModal);
    setCookie('preview', 'hidden', { secure: true });
}
</script>

<template>
    <transition name="modal">
        <div
            v-if="isShowPreview"
            class="preview-modal"
        >
            <div class="preview-modal__content">
                <carousel
                    v-if="listSwipe.length > 0"
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
                                @click="closePreviewModal"
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
    z-index: 100;

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
