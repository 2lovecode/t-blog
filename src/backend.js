import Vue from 'vue'
import App from './BackendApp.vue'
import VueRouter from "vue-router"
import Vuex from "vuex"
import Element from "element-ui"

import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/fonts/font.css'

import router from "@/backend/router"
import store from "@/backend/store"

import axios from "axios"
import VueAxios from "vue-axios"
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

Vue.config.productionTip = false
Vue.use(mavonEditor)
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(Element, { size: 'small', zIndex: 3000 })
Vue.use(VueAxios, axios)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
