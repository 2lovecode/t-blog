<template>
    <el-row>
        <el-col :span="2" :offset="8">
            <el-avatar :size="100" :src="about.avatar" @error="errorHandler">
            </el-avatar>
        </el-col>
        <el-col :span="12" class="author-box">
            <el-row style="min-height:32px;line-height:32px;vertical-align: middle;">
                <el-col :span="3" class="author-name">
                    <a>
                        {{ about.name }}
                    </a>
                </el-col>
                <el-col :span="3" class="author-info">文章数 {{ about.article }}</el-col>
                <el-col :span="3" class="author-info">{{ about.email }}</el-col>
            </el-row>
            <el-row>
                <el-col>
                    <a :href="about.github" target="_blank" class="author-share">
                        <i class="iconfont icon-github-fill"></i>
                    </a>
                </el-col>
            </el-row>
            <el-row class="author-description">
                <el-col :span="12">
                    {{ about.intro }}
                </el-col>
            </el-row>
        </el-col>
    </el-row>
</template>
<script>
import "@/assets/icon/tank-blog/iconfont.css"
const author = require('@/api/author.js')
export default {
    data () {
        return {
            about : {
                author: "刘浩",
                name: "2lovecode",
                avatar: "/assets/images/avatar/avatar-1.jpg",
                email: "liu546hao@163.com",
                github: "https://github.com/2lovecode",
                article: 0,
                intro: "",
            }
        }
    },
    methods: {
        getAbout() {
            const tank = this
            author.fetchAbout().then(function(res){
                tank.about = res.data
            })
        },
        errorHandler() {
            return true
        }
    },
    mounted: function() {
        this.getAbout()
    },
}
</script>
<style scoped>
    .author-box {
        text-align: left;
        padding: 5px;
    }
    .author-name {
        font-size: 18px;
        font-family: "Josefin Sans", sans-serif;
    }
    .author-info {
        font-size: 14px;
        color: #596172;
    }
    .author-description {
        color: #596172;
    }
    .author-share i{
        font-size: 18px;
        font-family: "Josefin Sans", sans-serif;
        color: #596172;
    }
    .author-share :hover {
        color: #FF486A;
    }
</style>