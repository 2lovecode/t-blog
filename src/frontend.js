import Vue from 'vue'
import App from '@/FrontendApp.vue'
import Vuex from "vuex"
import Element from "element-ui"

import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/fonts/font.css'

import router from "@/router"
import store from "@/store"

import axios from "axios"
import VueAxios from "vue-axios"

// import Icon from "vue-awesome/components/Icon"
// import "vue-awesome/icons"

// 全局注册
// Vue.component("icon", Icon)

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(Element, { size: 'small', zIndex: 3000 })
Vue.use(VueAxios, axios)



new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
