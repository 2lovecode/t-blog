import Vue from 'vue'
import VueRouter from "vue-router"
import store from "@/backend/store"

// 屏蔽错误提示
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: (resolve) => require(['@/backend/pages/HomePage.vue'], resolve),
        meta: {
            requireAuth: false,
        }
    },
    {
        path: '/article',
        component: (resolve) => require(['@/backend/pages/Article.vue'], resolve),
    }
]

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

export default router



export function resetRouter() {

}

