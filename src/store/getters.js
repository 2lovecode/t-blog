const getters = {
  layoutType: (state) => () => {
    return state.app.layoutType
  },
  sidebar: (state) => () => {
    return state.app.sidebar
  },
  size: (state) => () => {
    return state.app.size
  },
  device: (state) => () => {
    return state.app.device
  },
  token: (state) => () => {
    return state.user.token
  },
  avatar: (state) => () => {
    return state.user.avatar
  },
  name: (state) => () => {
    return state.user.name
  },
  introduction: (state) => () => {
    return state.user.introduction
  },
  roles: (state) => () => {
    return state.user.roles
  },
}
export default getters