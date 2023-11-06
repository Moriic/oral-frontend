import { createRouter,createWebHashHistory } from 'vue-router'
const routes = [
    {
        path:'/',
        component:()=>import('../pages/home/index.vue'),
        meta:{
            title:'首页'
        }
    },
    {
        path: '/login',
        component:()=>import('../views/login/LoginPage.vue'),
        meta:{
            title: '登录'
        }
    },
    {
        path: '/admin',
        component: () => import('@/views/layout/LayoutContainer.vue'),
        redirect: '/admin/doctor',
        children: [
          {
            path: '/admin/doctor',
            component: () => import('@/views/admin/DoctorPage.vue')
          }
        ]
    }
    
]
const router = createRouter({
    history:createWebHashHistory(),
    routes,
})

export default router;