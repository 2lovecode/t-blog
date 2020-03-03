export default [
    {
        path: '/',
        component: (resolve) => require(['@/pages/HomePage.vue'], resolve),
    },
    {
        path: '/module/:module',
        component: (resolve) => require(['@/pages/article/ArticleDetail.vue'], resolve),
    }
]