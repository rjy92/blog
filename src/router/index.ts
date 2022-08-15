import { createRouter, RouteRecordRaw, createWebHashHistory } from 'vue-router'
import loginRouter from './modules/login'
const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: () => import('@/views/home/index.vue')
    },
    {
        path: '/home',
        component: () => import('@/views/home/index.vue')
    },
    {
        path: '/404',
        component: () => import('@/views/404.vue')
    },
    loginRouter
]

const router = createRouter({
    history: createWebHashHistory(), // 路由模式
    scrollBehavior () {
        return { top: 0 }
    },
    routes
})

export default router
