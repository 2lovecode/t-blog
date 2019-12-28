import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import Vuex from "vuex"
import Element from "element-ui"
import 'element-ui/lib/theme-chalk/index.css'
import './assets/fonts/font.css'
import routes from "./router"
import stores from "./store"


Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(Element, { size: 'small', zIndex: 3000 })

const router = new VueRouter({
  routes
})
const store = new Vuex.Store(stores)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
