export function resetRouter() {
}
export default [
    {
        path: '/',
        component: (resolve) => require(['@/pages/frontend/HomePage.vue'], resolve),
    },
    {
        path: '/module/develop/:id',
        component: (resolve) => require(['@/pages/frontend/Develop.vue'], resolve)
    },
    {
        path: '/module/interest-life',
        component: (resolve) => require(['@/pages/frontend/InterestLife.vue'], resolve)
    },
    {
        path: '/module/about',
        component: (resolve) => require(['@/pages/frontend/About.vue'], resolve)
    },
    {
        path: '/article/:id',
        component: (resolve) => require(['@/pages/frontend/ArticleDetail.vue'], resolve)
    },
    {
        path: '/backend/article',
        component: (resolve) => require(['@/pages/backend/Article.vue'], resolve)
    }
]