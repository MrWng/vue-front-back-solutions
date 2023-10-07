// import router from '@/router'
import store from '@/store'
import axios from 'axios'
import { ElMessage } from 'element-plus'
// import { isCheckTimeout } from '@/utils/auth'
const request = axios.create({
  baseURL: process.env.VUE_APP_BASE_API_PATH,
  timeout: 1000 * 5
})

request.interceptors.request.use(
  (config) => {
    if (store.getters.hasToken) {
      config.headers.Authorization = `Bearer ${store.getters.token}`
      // if (isCheckTimeout()) {
      //   store.dispatch('user/logout')
      //   return Promise.reject(new Error('token失效'))
      // }
    }
    return config
  },
  (err) => {
    ElMessage.error(err.message)
    return Promise.reject(err)
  }
)

request.interceptors.response.use(
  (response) => {
    const { success, message, data } = response.data
    if (success) {
      return data
    }
    // 业务错误
    ElMessage.error(message)
    return Promise.reject(message)
  },
  (err) => {
    const status = err.response?.status
    if (status && status === 401) {
      store.dispatch('user/logout')
      ElMessage.error(err.response.data)
    } else {
      // 后端错误
      ElMessage.error(err.message)
    }
    return Promise.reject(err)
  }
)

export default request
