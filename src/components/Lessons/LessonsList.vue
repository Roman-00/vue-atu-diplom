<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const listLessons = computed(() => store.getters.allLessons);
console.log(listLessons.value);
</script>

<template>
    <ul class="lessons-list">
        <li
            v-for="item in listLessons"
            :key="item.id"
            class="lessons-list__item"
        >
            <div class="lessons-list__item-time">
                {{ item.beginning }}
                {{ item.end }}
            </div>
            <div class="lessons-list__item-schedule">
                <h3 class="lessons-list__item-schedule-name">
                    {{ item.lesson }}
                </h3>

                <span class="lessons-list__item-schedule-hall">
                    {{ item.hall }}
                </span>

                <span class="lessons-list__item-schedule-avenue">
                    {{ item.avenue }}
                </span>
            </div>
        </li>
    </ul>
</template>

<style scoped lang="scss">
.lessons-list {
    padding: 0;
    margin: 0;
    list-style: none;

    &__item {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        margin-bottom: 22px;
    }

    &__item-time {
        margin-right: 10px;
        font-size: 14px;
        font-weight: $font-bold;
        line-height: 22px;
        border-right: 1px solid $gray-silver;
    }

    &__item-schedule {
        width: 100%;
        max-width: 260px;
        padding: 12px;
        border-radius: $radius-medium;
        background: $blue-primary;
        box-shadow: 0 8px 25px rgba(42, 129, 221, 0.6);
        color: $white;
    }

    &__item-schedule-name {
        margin-bottom: 12px;
        font-size: 16px;
        font-weight: $font-semi;
        line-height: 24px;
    }

    &__item-schedule-hall {
        display: block;
        margin-bottom: 4px;
        font-size: 14px;
        font-weight: $font-bold;
        line-height: 22px;
    }

    &__item-schedule-avenue {
        display: block;
        font-size: 12px;
        font-weight: $font-semi;
        line-height: 20px;
    }
}
</style>
