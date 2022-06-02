import { createWebHistory, createRouter } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'Main',
        component: () => import('@/views/main.vue'),
    },
    {
        path: '/tree',
        name: 'TreeComponent',
        component: () => import('@/components/tree/TreeComponent.vue'),
    },
    {
        path: '/tag',
        name: 'TagComponent',
        component: () => import('@/components/tag/TagComponent.vue'),
    },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});