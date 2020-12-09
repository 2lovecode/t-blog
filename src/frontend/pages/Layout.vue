<template>
    <el-container>
        <el-header style="height:auto;">
            <el-row style="padding-top: 50px;">
                <el-col :span="24" style="margin:20px auto;">
                    <el-link href="/" :underline="false" id="home-logo" class="t-title">
                        {{ appName }}<span class="red-dot"></span>
                    </el-link>
                </el-col>
            </el-row>
            <el-row type="flex" justify="space-around">
                <el-menu id="header-nav" :default-active="defaultRoute"  mode="horizontal" text-color="#262525" active-text-color="#EC586D" :router=true>
                    <el-menu-item class="nav-item" v-for="(item, idx) in navList" :key="idx" :index="item.path">{{ item.title }}</el-menu-item>
                </el-menu>
            </el-row>
        </el-header>
        <el-main>
            <router-view></router-view>
        </el-main>
        <el-divider></el-divider>
        <el-footer>{{ appName }}</el-footer>
    </el-container>
</template>

<script>
export default {
    data () {
        return {
            appName: "2lovecode",
            homePage: "/",
            navList: [
                {
                    path: "/",
                    title: "首页",
                },
                // {
                //     path: "/archive",
                //     title: "归档",
                // },
                {
                    path: "/category",
                    title: "分类",
                },
                // {
                //     path: "/tag",
                //     title: "标签",
                // },
                // {
                //     path: "/say",
                //     title: "说",
                // },
                {
                    path: "/about",
                    title: "关于",
                }
            ]
        }
    },
    computed : {
        defaultRoute: function () {
            return this.$route.path
        },
        layoutType: function () {
            return this.$store.getters.layoutType()
        }
    }
}
</script>
<style>
    #home-logo {
        color:black;
        font-size: 60px;
        font-weight: 800;
    }
    #home-logo:hover {
        color: #596172;
    }
    .red-dot {
        display: inline-block;
        width: 10px;
        height: 10px;
        background-color: #FF486A;
        border-radius: 50%;
        margin-left: 5px;
        vertical-align: baseline;
    }
    #header-nav {
        border-bottom:0px;
    }
    #header-nav .nav-item {
        border-bottom:0px;
    }
</style>
<style>
    i {
        color: #FF486A;
    }
    .article-list-img {
        position: relative;
        display: block;
        min-height: 440px;
        box-shadow: rgba(7, 10, 25, 0.2) 0px 3px 12px -1px, rgba(7, 10, 25, 0.2) 0px 22px 27px -20px;
        background-repeat: no-repeat!important;
        background-position: center center!important;
        background-size: cover!important;
        -webkit-transition: all 300ms ease;
        -moz-transition: all 300ms ease;
        -ms-transition: all 300ms ease;
        -o-transition: all 300ms ease;
        transition: all 300ms ease;
        
    }
    @media screen and (max-width: 990px) and (min-width: 768px) {
        .article-list-img {
            min-height: 325px;
        }
    }
    @media screen and (max-width: 767px) {
        .article-list-img {
            -webkit-box-shadow: 0 3px 12px -1px rgba(7, 10, 25, 0.2), 0 22px 27px -20px rgba(7, 10, 25, 0.2);
            box-shadow: 0 3px 12px -1px rgba(7, 10, 25, 0.2), 0 22px 27px -20px rgba(7, 10, 25, 0.2);
            min-height: 200px;
            height: 200px!important;
        }
    }
    .article-detail-button {
        opacity: 0;
        position: absolute;
        right: 0px;
        bottom: 40px;
        z-index: 3;
    }
    .article-list-img .article-detail-button {
        font-family: "Josefin Sans", sans-serif;
        font-size: 15px;
        letter-spacing: 0.5px;
        line-height: 1.8;
        background-color: #7169FE;
        border: 0 solid #fff;
        -webkit-transition: all 700ms ease;
        -moz-transition: all 700ms ease;
        -ms-transition: all 700ms ease;
        -o-transition: all 700ms ease;
        transition: all 700ms ease;
    }
    .article-list-img:hover .article-detail-button{
        opacity: 1;
        right: 30px;
    }
    .article-list-header .el-link{
        min-height: 35px;
        font-family: "Josefin Sans", sans-serif;
        font-size: 15px;
        letter-spacing: 0.25px;
        line-height: 1.8;
        color: #424851;
    }
    .article-list-header .el-link:hover{
        color: #FF486A;
    }
    .article-list-cover {
        position: relative;
    }
    .article-list-title {
        display: block;
        position: absolute;
        left: 40px;
        bottom: 45px;
        max-width: 50%;
        text-align: left;
        font-family: "Josefin Sans", sans-serif;
        font-weight: 700;
        font-size: 30px;
        /* margin-bottom: 40px; */
        line-height: 1.45;
        letter-spacing: 0px;
        color: #242323;
        -webkit-transition: all 700ms ease;
        -moz-transition: all 700ms ease;
        -ms-transition: all 700ms ease;
        -o-transition: all 700ms ease;
        transition: all 700ms ease;
    }
    .article-list-title a{
        display: inline;
        background-color:rgb(255, 255, 255);
        padding: 14px 22px 10px;
        -webkit-text-size-adjust: 100%;
    }
    @media screen and (max-width: 980px) {
        .article-list-title {
            font-size: 20px;
        }
    }
    @media screen and (max-width: 767px) {
        .article-list-title {
            position: relative;
            left: auto;
            bottom: auto;
            max-width: none;
            margin-top: 25px;
            text-align: center;
        }
    }

    .article-list-img:hover .article-list-title{
        opacity: 0;
        left: 0px;
    }

    .article-list-content {
        font-family: "DM Sans", sans-serif;
        font-size: 16px;
        letter-spacing: 0.25px;
        line-height: 1.8;
        color: #596172;
    }
    
    .tag-list {
        display: inline-block;
        text-align: center;
    }
    .tag-list-item {
        padding: 5px;
    }
    .epcl-border {
        background: #eee;
        height: 1px;
        margin: 50px auto 0;
    }
    .epcl-border.small {
        width: 75px;
        margin-top: 30px;
    }
    .author-image {
        width: 35px;
        height: 35px;
        position: relative;
        left: auto;
        top: -1px;
        display: inline-block;
        vertical-align: middle;
        margin-right: 7px;
        border-radius: 50%;
        -webkit-box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.2);
        box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.2);
        background-repeat: no-repeat!important;
        background-position: center center!important;
        background-size: cover!important;
    }
    .time-icon {
        position: relative;
        top: 50%;
        left: -10px;
        display: inline-block;
        vertical-align: middle;
        width: 5px;
        height: 5px;
        background-color: #FF486A;
        border-radius: 50%;
        -webkit-transition: all 300ms ease;
        -moz-transition: all 300ms ease;
        -ms-transition: all 300ms ease;
        -o-transition: all 300ms ease;
        transition: all 300ms ease;
    }
    .article-reading {
        display: inline-block;
        width: 40px;
        height: 20px;
        border-radius: 50%;
        color: #fff;
        background-color: #7169FE;
        text-align: center;
        line-height: 21px;
        font-size: 10px;
        vertical-align: middle;
        /* margin-top: -3px; */
        overflow: hidden;
    }
</style>