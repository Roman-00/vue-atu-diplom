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
    // {
    //     path: '/login',
    //     name: 'Войти в Аккаунт',
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue'),
    // },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
