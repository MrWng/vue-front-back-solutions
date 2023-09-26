import store from '@/store'
import router from '@/router'
// 白名单
const whiteList = ['/login']

router.beforeEach((to, from, next) => {
  // 存在token的情况
  if (store.getters.hasToken) {
    if (to.path !== '/login') {
      next()
    } else {
      next('/')
    }
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})
