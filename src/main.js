import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import Vuex from "vuex"
import Element from "element-ui"

import 'element-ui/lib/theme-chalk/index.css'
import './assets/fonts/font.css'

import routes from "./router"
import stores from "./store"

import axios from "axios"
import VueAxios from "vue-axios"

axios.defaults.timeout = 5000
axios.defaults.baseURL = "http://localhost:8888/"
axios.defaults.headers['Access-Control-Allow-Origin'] = "*"
axios.defaults.headers['Content-Type'] = "application/json"

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(Element, { size: 'small', zIndex: 3000 })
Vue.use(VueAxios, axios)

const router = new VueRouter({
  routes
})
const store = new Vuex.Store(stores)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
