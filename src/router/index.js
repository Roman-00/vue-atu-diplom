import { createRouter, createWebHistory } from 'vue-router';
import Preview from '../views/Preview.vue';

const routes = [
    {
        path: '/',
        name: 'Preview',
        component: Preview,
    },
    {
        path: '/index',
        name: 'Index',
        component: () => import('../views/Index.vue'),
    },
    {
        path: '/cabinet',
        name: 'Cabinet',
        component: () => import('../views/Cabinet.vue'),
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
