<template>
    <el-container>
        <el-header>
            <el-row>
                <el-col :offset="2" :span="4">
                    <span style="font-size:2em;">[ 2lovecode ]</span>
                </el-col>
                <el-col :offset="6" :span="1">
                    aaa
                </el-col>
                <el-col :span="1">
                    bbb
                </el-col>
            </el-row>
        </el-header>
        <el-row justify="center">
            <el-col :offset="1" :span="22">
                <el-container>
                    <el-main>
                        <el-breadcrumb separator-class="el-icon-arrow-right">
                            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                        </el-breadcrumb>
                        <el-container style="padding:1em;">
                            <router-view></router-view>
                        </el-container>
                    </el-main>
                    <el-footer>@2lovecode</el-footer>
                </el-container>
            </el-col>
        </el-row>
        
    </el-container>
</template>

<script>
export default {
    data () {
        return {
            appName: "2lovecode",
            homePage: "/backend"
        }
    },
    computed : {
    },
    methods: {
      goBack() {
        console.log('go back');
      }
    }
}
</script>
<style scoped>
.el-menu{
    border-right:solid 0px #e6e6e6;
}
.el-header {
    padding: 15px 0;
    color: #FFFFFF;
    background-color:rgba(32, 37, 41, 0.9);
}
</style>