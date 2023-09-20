import axios from 'axios'
const request = axios.create({
  baseURL: process.env.VUE_APP_BASE_API_PATH,
  timeout: 1000 * 5
})

export default request
