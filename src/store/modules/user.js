import { login, getUserInfo } from '@/api/sys'
import { getItem, setItem, clearStorage } from '@/utils/storage'
import { setTimeStamp } from '@/utils/auth'
import mds from 'md5'
import { TOKEN } from '@/constant'
import router from '@/router'
export default {
  namespaced: true,
  state: () => ({
    token: getItem(TOKEN),
    userInfo: {}
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      setItem(TOKEN, token)
    },
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
    }
  },
  actions: {
    login(context, userInfo) {
      const { username, password } = userInfo
      return login({
        username,
        password: mds(password)
      }).then((res) => {
        this.commit('user/setToken', res.token)
        // 记录登录时间
        setTimeStamp()
      })
    },
    logout(context) {
      this.commit('user/setToken', '')
      this.commit('user/setUserInfo', {})
      clearStorage()
      router.push('/login')
    },
    async getUserInfo(context) {
      const res = await getUserInfo()
      this.commit('user/setUserInfo', res)
      return res
    }
  }
}
