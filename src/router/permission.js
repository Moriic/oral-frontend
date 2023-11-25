// 路由鉴权，需要在main.js开启
import router from '@/router'
import { useUserStore } from '@/stores/user'
import { getRole } from '@/api/user'

router.beforeEach(async (to, from, next) => {
  document.title = `${to.meta.title}`
  const userStore = useUserStore()

  const token = userStore.token
  let role = userStore.role

  // 访问登录页面
  if (to.path === '/login') {
    if (token === '') {
      next()
    }
    if (role === '') {
      try {
        const res = await getRole()
        role = res.data
      } catch (error) {
        userStore.token = ''
        next({ path: '/login' })
      }
    }
    if (role === 'admin') {
      next('/admin')
    } else if (role === 'doctor') {
      next('/doctor')
    }
  } // 访问其他页面
  else {
    // 有token
    if (token) {
      // 获取role
      if (role === '') {
        try {
          const res = await getRole()
          role = res.data
        } catch (error) {
          next({ path: '/login' })
        }
      }
      if (role === 'admin' && to.path.includes('admin')) {
        next()
      } else if (role === 'doctor' && to.path.includes('doctor')) {
        next()
      } else {
        next({ path: '/login' })
      }
    } else {
      next({ path: '/login' })
    }
  }
})
