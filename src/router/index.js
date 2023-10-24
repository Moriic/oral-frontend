import { createRouter,createWebHistory,createWebHashHistory } from 'vue-router'
const routes = [
    {
        path:'/home',
        component:()=>import('@/src/pages/home/index.vue'),
        meta:{
            title:'首页'
        }
    },
]
const router = createRouter({
    history:createWebHashHistory(),
    routes,
})

export default router;