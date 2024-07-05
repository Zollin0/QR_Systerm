import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: '',
        redirect: '/Home'
    },
    {
        path: '/Home',
        name: 'Home',
        component: () => import('../pages/Home/Home.vue')
    },
    {
        path: '/Login',
        name: 'Login',
        component: () => import('../pages/Login/Login.vue')
    },
    {
        path: '/Show',
        name: 'Show',
        component: () => import('../pages/Show/Show.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
