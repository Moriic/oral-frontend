import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: () => import('../views/login/LoginPage.vue'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/doctor',
    redirect: '/doctor/workspace',
    children: [
      {
        path: '/doctor/workspace',
        component: () => import('@/views/workspace/WorkSpace.vue'),
        meta: {
          title: '工作台'
        }
      },
      {
        path: '/doctor/imageDetection',
        component: () => import('@/views/workspace/ImageDetection.vue'),
        meta: {
          title: '图像检测'
        }
      }
    ]
  },
  {
    path: '/test',
    component: () => import('@/views/workspace/test.vue')
  },
  {
    path: '/admin',
    component: () => import('@/views/layout/LayoutContainer.vue'),
    redirect: '/admin/doctor',
    children: [
      {
        path: '/admin/home',
        component: () => import('@/views/admin/home.vue'),
        meta: {
          title: '首页概况'
        }
      },
      {
        path: '/admin/doctor',
        component: () => import('@/views/admin/DoctorPage.vue'),
        meta: {
          title: '医生页面'
        }
      },
      {
        path: '/admin/patient',
        component: () => import('@/views/admin/PatientPage.vue'),
        meta: {
          title: '患者页面'
        }
      },
      {
        path: '/admin/sickroom',
        component: () => import('@/views/admin/PatientRoom.vue'),
        meta: {
          title: '病房页面'
        }
      }
    ]
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router
