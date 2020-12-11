import Cookies from 'js-cookie'

const state = {
  device: 'desktop',
  size: Cookies.get('size') || 'medium'
}

const mutations = {
}

export default {
  namespaced: true,
  state,
  mutations,
  actions: {
  }
}
