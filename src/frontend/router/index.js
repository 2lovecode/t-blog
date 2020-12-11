import Vue from 'vue'
import VueRouter from "vue-router"
import store from "@/frontend/store"

// 屏蔽错误提示
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: (resolve) => require(['@/frontend/pages/HomePage.vue'], resolve),
        meta: {
            requireAuth: false,
        },
    },
    {
        path: '/login',
        component: (resolve) => require(['@/Login.vue'], resolve),
    },
    {
        path: '/archive',
        component: (resolve) => require(['@/frontend/pages/Archive.vue'], resolve)
    },
    {
        path: '/category',
        component: (resolve) => require(['@/frontend/pages/Category.vue'], resolve)
    },
    {
        path: '/say',
        component: (resolve) => require(['@/frontend/pages/Say.vue'], resolve)
    },
    {
        path: '/about',
        component: (resolve) => require(['@/frontend/pages/About.vue'], resolve)
    },
    {
        path: '/article/:id',
        component: (resolve) => require(['@/frontend/pages/ArticleDetail.vue'], resolve)
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

