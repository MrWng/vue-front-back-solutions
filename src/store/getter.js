import { isEmpty } from '@/utils/common'
export const getters = {
  token: (state) => state.user.token,
  userInfo: (state) => state.user.userInfo,
  hasToken: (state) => !!state.user.token,
  hasUserInfo: (state) => !isEmpty(state.user.userInfo)
}
