export default [
    {
        path: '/',
        component: (resolve) => require(['@/pages/HomePage.vue'], resolve),
    },
    {
        path: '/article/:id',
        component: (resolve) => require(['@/pages/article/ArticleDetail.vue'], resolve),
    },
    {
        path: '/module/develop',
        component: (resolve) => require(['@/pages/modules/Develop.vue'], resolve)
    },
    {
        path: '/module/interest-life',
        component: (resolve) => require(['@/pages/modules/InterestLife.vue'], resolve)
    },
    {
        path: '/module/about',
        component: (resolve) => require(['@/pages/modules/About.vue'], resolve),
    }
]