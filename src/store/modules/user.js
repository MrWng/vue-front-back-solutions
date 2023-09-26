import { login } from '@/api/sys'
import { getItem, setItem } from '@/utils/storage'
import mds from 'md5'
import { TOKEN } from '@/constant'
export default {
  namespaced: true,
  state: () => ({
    token: getItem(TOKEN)
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      setItem(TOKEN, token)
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
      })
    }
  }
}
