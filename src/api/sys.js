import request from '@/utils/request'

export const login = (data) => {
  return request({
    data,
    url: '/sys/login',
    method: 'POST'
  })
}
