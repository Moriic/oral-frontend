import { createRouter,createWebHistory,createWebHashHistory } from 'vue-router'
const routes = [
    {
        path:'/',
        component:()=>import('../pages/home/index.vue'),
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