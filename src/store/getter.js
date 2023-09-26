export const getters = {
  token: (state) => state.user.token,
  hasToken: (state) => !!state.user.token
}
