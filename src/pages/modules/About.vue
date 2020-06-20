<template>
    <el-row>
        <el-col :span="2" :offset="8">
            <el-avatar :size="100" src="/assets/images/avatar/avatar-3.jpg" @error="errorHandler">
                <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"/>
            </el-avatar>
        </el-col>
        <el-col :span="12" class="author-box">
            <el-row style="min-height:32px;line-height:32px;vertical-align: middle;">
                <el-col :span="3" class="author-name">
                    <a>
                        {{ about.nickname }}
                    </a>
                </el-col>
                <el-col :span="3" class="author-info">文章数 {{ about.articleNum }}</el-col>
                <el-col :span="3" class="author-info">{{ about.email }}</el-col>
            </el-row>
            <br/>
            <el-row class="author-description">
                <el-col :span="12">
                    {{ about.description }}
                </el-col>
            </el-row>
        </el-col>
    </el-row>
</template>
<script>
export default {
    data () {
        return {
            about : {
                author: "刘浩",
                nickname: "2lovecode",
                email: "liu546hao@163.com",
                github: "https://github.com/2lovecode",
                company: "",
                articleNum: 4,
                description: "I love traveling. Travel is my life, and not just the business that I do. This is part of me... part of my feelings, thoughts, my past and future, a source of new strength and inspiration.",
            }
        }
    },
    methods: {
      errorHandler() {
        return true
      }
    }
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
</style>