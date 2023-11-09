import { createRouter,createWebHashHistory } from 'vue-router'
import ImageDetection from "@/views/workspace/ImageDetection.vue";
const routes = [
    {
        path:'/',
        component:()=>import('../pages/home/index.vue'),
        meta:{
            title:'首页'
        }
    },
    {
      path: '/workspace',
      component:() => import('@/views/workspace/WorkSpace.vue'),
      meta: {
          title: '工作台'
      }
    },
    {
        path: '/imageDetection',
        component:()=> import('@/views/workspace/ImageDetection.vue'),
        meta: {
            title: '图像检测'
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