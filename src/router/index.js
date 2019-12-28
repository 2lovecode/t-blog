export default [
    {
        path: '/',
        component: (resolve) => require(['@/pages/HomePage.vue'], resolve),
    },
    {
        path: '/article/:id',
        component: (resolve) => require(['@/pages/article/ArticleDetail.vue'], resolve),
    }
]