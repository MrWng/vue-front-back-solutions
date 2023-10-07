import request from '@/utils/request'

export const login = (data) => {
  return request({
    data,
    url: '/sys/login',
    method: 'POST'
  })
}

export const getUserInfo = () => {
  return request({
    url: '/sys/profile'
  })
}
