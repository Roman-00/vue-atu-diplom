import { createRouter, createWebHistory } from 'vue-router';
import Preview from '@/views/Preview.vue';

const routes = [
    {
        path: '/',
        name: 'Preview',
        component: Preview,
    },
    {
        path: '/index',
        name: 'Главная',
        component: () => import('../views/Index.vue'),
    },
    {
        path: '/signup',
        name: 'Зарегистрировать аккаунт',
        component: () => import('../views/SignUp.vue'),
    },
    {
        path: '/login',
        name: 'Войти в Аккаунт',
        component: () => import('../views/LogIn.vue'),
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
