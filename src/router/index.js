import { createRouter, createWebHistory } from 'vue-router';
import Index from '@/views/Index.vue';

const routes = [
    {
        path: '/',
        name: 'Главная',
        component: Index,
    },
    {
        path: '/schedule',
        name: 'Расписание',
        component: () => import('../views/Schedule.vue'),
    },
    {
        path: '/messages',
        name: 'Сообщения',
        component: () => import('../views/Messages.vue'),
    },
    {
        path: '/account',
        name: 'Профиль',
        component: () => import('../views/Account.vue'),
    },
    {
        path: '/posts/:id',
        name: 'Детальная',
        component: () => import('../views/PostIdPage.vue'),
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
