import Vue from 'vue'
import App from '@/FrontendApp.vue'
import Vuex from "vuex"
import Element from "element-ui"

import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/fonts/font.css'

import router from "@/frontend/router"
import store from "@/frontend/store"

import axios from "axios"
import VueAxios from "vue-axios"

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(Element, { size: 'small', zIndex: 3000 })
Vue.use(VueAxios, axios)



new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
