<template>
    <el-container>
        <el-header style="height:auto;">
            <el-row style="padding-top: 50px;">
                <el-col :span="24" style="margin:20px auto;">
                    <a id="home-logo" class="t-title">
                        2lovecode<span class="red-dot"></span>
                    </a>
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
        <el-footer>2lovecode</el-footer>
    </el-container>
</template>

<script>
export default {
    data () {
        return {
            navList: [
                {
                    path: "/",
                    title: "首页",
                },
                {
                    path: "/article/1",
                    title: "编程开发",
                },
                {
                    path: "/article/2",
                    title: "程序人生",
                },
                {
                    path: "/article/3",
                    title: "关于作者",
                },
            ]
        }
    },
    computed : {
        defaultRoute: function () {
            return this.$route.path
        },
    }
}
</script>
<style>
    #home-logo {
        font-size: 60px;
        font-weight: 800;
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