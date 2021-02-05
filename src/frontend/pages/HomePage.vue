<template>
    <el-row type="flex" justify="center">
        <el-col :span="16" >
            <el-card v-for="(item, index) in articleList" v-bind:key="index" shadow="never" body-style="padding:0" style="border:0 solid #fff;">
                <router-link v-bind:to="item.skipUrl" style=":hover{cursor: pointer;text-decoration:none;}">
                    <div class="article-list-cover">
                        <span class="article-list-img" v-bind:style="{ backgroundImage: 'url(' + item.image + ')' }">
                            <el-button class="article-detail-button" type="danger" round="">Continue Reading</el-button>
                        </span>
                            <h1 class="article-list-title">
                            <a>{{ item.title }}</a>
                        </h1>
                        
                    </div>
                </router-link>
                <el-row type="flex" justify="center" style="margin-top:30px;" class="article-list-header">
                    <el-col :xs="24" :sm="12" :md="8" :lg="4" :xl="4">
                        <el-link :underline="false">
                            <span class="author-image cover" v-bind:style="{ backgroundImage: 'url(' + item.authorAvatar + ')' }"></span>
                            <span>{{ item.author }}</span>
                        </el-link>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="8" :lg="4" :xl="4">
                        <el-link :underline="false">
                            <span class="time-icon"></span>
                            <span>{{ item.addTime }}</span>
                        </el-link>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="8" :lg="4" :xl="4">
                        <el-link :underline="false">
                            <span class="article-reading">{{ item.visited }}</span>
                            <span> Visited</span>
                        </el-link>
                    </el-col>
                </el-row>
                <el-row type="flex" justify="center" class="article-list-content">
                    <el-col :span="20" style="margin:25px 0;">
                        {{ item.summary }}
                    </el-col>
                </el-row>
                <el-row type="flex" justify="center" class="article-list-tags">
                    <el-col :span="20" class="tag-group">
                        <el-tag v-for="(tagItem, tagIndex) in item.tags" v-bind:key="tagIndex" type="info" effect="plain">
                            <el-tooltip :content="tagItem" placement="top" effect="light">
                                <span>{{ tagItem }}</span>
                            </el-tooltip>
                        </el-tag>
                    </el-col>
                </el-row>
                <div class="epcl-border small"></div>
            </el-card>
        </el-col>
    </el-row>
    
</template>
<script>
const article = require('@/api/article.js')
export default {
    data () {
        return {
            articleList : [
                {
                    articleID: 1,
                    title: "编程技巧",
                    author: "2lovecode",
                    authorAvatar: "/assets/images/avatar/avatar-1.jpg",
                    addTime: "October 17, 2020",
                    image: "/assets/images/bg/2020/05/list-1.jpg",
                    summary: "讲一讲编程的技巧",
                    visited: "100万+",
                    skipUrl: "article/1",
                    tags: ["编程"],
                },
                {
                    articleID: 2,
                    title: "The spectacle before us was indeed sublime",
                    author: "2lovecode",
                    authorAvatar: "/assets/images/avatar/avatar-1.jpg",
                    addTime: "October 17, 2020",
                    image: "/assets/images/bg/2020/05/list-2.jpg",
                    summary: "Welcome, it's great to have you here. We know that first impressions are important, so we've populated your new site with some initial getting started posts that will help you get familiar with everything in no time....",
                    visited: "2000+",
                    skipUrl: "article/2",
                    tags: ["tag1", "tag2", "tag3"],
                }
            ]
        }
    },
    methods: {
        getArticleList() {
            var tank = this
            article.fetchList().then(function(res){
                var list = res.data.list
                console.log(list)
                for (let x in list) {
                    console.log("/article-detail/"+list[x]["articleID"])
                    tank.articleList.push({
                        articleID: list[x]["articleID"],
                        title: list[x]["title"],
                        author: list[x]["author"],
                        authorAvatar: "",
                        addTime: "",
                        image: "",
                        summary: "",
                        visited: "",
                        skipUrl: "/article-detail/"+list[x]["articleID"],
                        tags: ["test"]
                    })
                }
            })
        }
    },
    
    mounted: function () {
        this.getArticleList()
    }
}
</script>