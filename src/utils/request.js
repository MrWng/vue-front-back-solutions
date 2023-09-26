import axios from 'axios'
import { ElMessage } from 'element-plus'

const request = axios.create({
  baseURL: process.env.VUE_APP_BASE_API_PATH,
  timeout: 1000 * 5
})

request.interceptors.response.use(
  (response) => {
    console.log(response)
    const { success, message, data } = response.data
    if (success) {
      return data
    }
    // 业务错误
    ElMessage.error(message)
    return Promise.reject(message)
  },
  (err) => {
    // 后端错误
    ElMessage.error(err.message)
    return Promise.reject(err)
  }
)

export default request
