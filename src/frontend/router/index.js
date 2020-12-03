export function resetRouter() {

}

export default [
    {
        path: '/',
        component: (resolve) => require(['@/frontend/pages/HomePage.vue'], resolve),
        meta: {
            requireAuth: false,
        },
    },
    {
        path: '/login',
        component: (resolve) => require(['@/frontend/pages/Login.vue'], resolve),
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