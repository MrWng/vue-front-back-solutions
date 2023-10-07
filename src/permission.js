import store from '@/store'
import router from '@/router'
// 白名单
const whiteList = ['/login']

router.beforeEach(async (to, from, next) => {
  // 存在token的情况
  if (store.getters.hasToken) {
    if (to.path !== '/login') {
      if (!store.getters.hasUserInfo) {
        await store.dispatch('user/getUserInfo')
      }
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
