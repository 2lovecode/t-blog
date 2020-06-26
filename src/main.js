import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import Vuex from "vuex"
import Element from "element-ui"

import 'element-ui/lib/theme-chalk/index.css'
import './assets/fonts/font.css'

import routes from "./router"
import store from "./store"

import axios from "axios"
import VueAxios from "vue-axios"
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

// axios.defaults.timeout = 5000
// axios.defaults.baseURL = "http://127.0.0.1:8888/"
// axios.defaults.headers['Access-Control-Allow-Origin'] = "*"
// axios.defaults.headers['Content-Type'] = "application/json"

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.config.productionTip = false
Vue.use(mavonEditor)
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(Element, { size: 'small', zIndex: 3000 })
Vue.use(VueAxios, axios)

const router = new VueRouter({
  routes
})

router.beforeResolve((to, from, next) => {
  if (to.path == '/backend/article') {
    store.dispatch('app/changePageType', 'backend')
  } else {
    store.dispatch('app/changePageType', 'frontend')
  }
  next()
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
