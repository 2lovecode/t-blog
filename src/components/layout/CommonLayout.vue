<template>
    <el-container>
        <el-header style="height:auto;">
            <el-row style="padding-top: 50px;">
                <el-col :span="24" style="margin:20px auto;">
                    <a id="home-logo" class="t-title">
                        Veen<span class="red-dot"></span>
                    </a>
                </el-col>
            </el-row>
            <el-row type="flex" justify="space-around">
                <el-menu id="header-nav" default-active="1" mode="horizontal" text-color="#262525" active-text-color="#EC586D">
                    <el-menu-item class="nav-item" index="1">首页</el-menu-item>
                    <el-menu-item class="nav-item" index="2">编程开发</el-menu-item>
                    <el-menu-item class="nav-item" index="3">程序人生</el-menu-item>
                    <el-menu-item class="nav-item" index="4">关于作者</el-menu-item>
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