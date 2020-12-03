import Vue from 'vue'
import App from '@/FrontendApp.vue'
import VueRouter from "vue-router"
import Vuex from "vuex"
import Element from "element-ui"

import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/fonts/font.css'

import routes from "@/frontend/router"
import store from "@/store"

import axios from "axios"
import VueAxios from "vue-axios"

console.log(routes)
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(Element, { size: 'small', zIndex: 3000 })
Vue.use(VueAxios, axios)

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    if (store.getters.token()) {
      next()
    } else {
      next({
        path: "/login",
        query: {redirect: to.fullPath},
      })
    }
  } else {
    next();
  }
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
