<script setup>
import LessonsList from '@/components/Lessons/LessonsList.vue';
</script>

<template>
    <div class="lessons">
        <div class="lessons__content">
            <div class="lessons__content-info">
                <span class="lessons__content-info-time">
                    Время
                </span>
                <span class="lessons__content-info-schedule">
                    Расписание
                </span>
            </div>

            <LessonsList />
        </div>
    </div>
</template>

<style scoped lang="scss">
.lessons {
    margin: 22px 20px;

    &__content-info {
        display: flex;
        margin-bottom: 12px;
    }

    &__content-info-time,
    &__content-info-schedule {
        margin-right: 6px;
        font-size: 14px;
        font-weight: $font-bold;
        line-height: 22px;
    }

    &__content-info-time {
        width: 100%;
        max-width: 60px;
    }

    &__content-info-schedule {
        width: 100%;
        margin-right: 0;
    }
}
</style>
