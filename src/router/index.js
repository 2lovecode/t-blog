export function resetRouter() {
}
export default [
    {
        path: '/',
        component: (resolve) => require(['@/pages/frontend/HomePage.vue'], resolve),
        meta: {
            requireAuth: false,
        },
    },
    {
        path: '/login',
        component: (resolve) => require(['@/pages/Login.vue'], resolve),
        meta: {
            layoutType: "login",
        },
    },
    {
        path: '/frontend/archive',
        component: (resolve) => require(['@/pages/frontend/Archive.vue'], resolve)
    },
    {
        path: '/frontend/category',
        component: (resolve) => require(['@/pages/frontend/Category.vue'], resolve)
    },
    {
        path: '/frontend/say',
        component: (resolve) => require(['@/pages/frontend/Say.vue'], resolve)
    },
    {
        path: '/frontend/about',
        component: (resolve) => require(['@/pages/frontend/About.vue'], resolve)
    },
    {
        path: '/article/:id',
        component: (resolve) => require(['@/pages/frontend/ArticleDetail.vue'], resolve)
    },
    {
        path: '/backend/article',
        component: (resolve) => require(['@/pages/backend/Article.vue'], resolve),
        meta: {
            layoutType: "backend",
        },
    }
]