import { createRouter, createWebHistory } from 'vue-router';
import Auth from '@/views/Auth.vue';

const routes = [
    {
        path: '/',
        name: 'Страница Авторизации',
        component: Auth,
    },
    {
        path: '/index',
        name: 'Система Универ',
        component: () => import(/* webpackChunkName: "about" */ '../views/Index.vue'),
    },
    {
        path: '/schedule',
        name: 'Расписание занятий',
        component: () => import(/* webpackChunkName: "about" */ '../views/Schedule.vue'),
    },
    {
        path: '/user',
        name: 'Личный кабинет',
        component: () => import(/* webpackChunkName: "about" */ '../views/User.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
