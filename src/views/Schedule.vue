<script setup>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import Lessons from '@/components/Lessons.vue';
import { months, days } from '../helpers/date';

const store = useStore();
const date = new Date();
const fullDate = `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;

onMounted(() => {
    store.dispatch('getLessons');
});

const currentDay = computed(() => days[date.getDay()]);
const currentTime = computed(() => date.getHours() < 12);
// const listLessons = computed(() => store.getters.allLessons);
</script>

<template>
    <div class="schedule">
        <div class="schedule__header">
            <div class="schedule__header-date">
                <div class="schedule__header-date-info">
                    <span class="schedule__header-date-full">
                        {{ fullDate }}
                    </span>

                    <span class="schedule__header-date-days">
                        {{ currentDay }}
                    </span>
                </div>

                <div
                    v-if="currentTime"
                    class="schedule__header-date-images schedule__header-date-images-day"
                />
                <div
                    v-else-if="!currentTime"
                    class="schedule__header-date-images schedule__header-date-images-evening"
                />
            </div>
        </div>

        <Lessons />
    </div>
</template>

<style scoped lang="scss">
.schedule {
    padding-bottom: 80px;

    &__header {
        margin: 0 20px;
        padding: 12px 20px;
        border-radius: $radius-medium;
        box-shadow: 0 5px 17px -9px rgba(0, 0, 0, 0.2);
    }

    &__header-date {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    &__header-date-full {
        display: block;
        margin-bottom: 5px;
        font-size: 14px;
        font-weight: $font-semi;
        line-height: 22px;
        color: $gray-silver;
    }

    &__header-date-days {
        font-size: 18px;
        font-weight: $font-bold;
        line-height: 28px;
    }

    &__header-date-images {
        width: 52px;
        height: 52px;
        border-radius: $radius-full;
    }

    &__header-date-images-day {
        background: $white url('../assets/images/sun-day.jpg') no-repeat center center/ cover;
    }

    &__header-date-images-evening {
        background: $white url('../assets/images/night-day.jpg') no-repeat center center/ cover;
    }
}
</style>
