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
                            <span>{{ item.createdTime }}</span>
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
                    <el-col :span="12" style="text-align:center;">
                        <i class="tag-list-item el-icon-price-tag"></i>
                        <div class="tag-list">
                            <span class="tag-list-item" v-for="(tagItem, tagIndex) in item.tags" v-bind:key="tagIndex">
                                <a href="#">{{ tagItem }}</a>
                            </span>
                        </div>
                    </el-col>
                </el-row>
                <div class="epcl-border small"></div>
            </el-card>
        </el-col>
    </el-row>
    
</template>
<script>
export default {
    data () {
        return {
            articleList : [
                {
                    articleID: 1,
                    title: "编程技巧",
                    author: "2lovecode",
                    authorAvatar: "http://ghost.estudiopatagon.com/veen/content/images/2019/10/avatar-3.jpg",
                    createdTime: "October 17, 2019",
                    image: "http://ghost.estudiopatagon.com/veen/content/images/size/w1500h500/2019/10/chris-lawton-5IHz5WhosQE-unsplash.jpg",
                    summary: "Welcome, it's great to have you here. We know that first impressions are important, so we've populated your new site with some initial getting started posts that will help you get familiar with everything in no time....",
                    visited: "100万+",
                    skipUrl: "article/1",
                    tags: ["tag1", "tag2", "tag3"],
                },
                {
                    articleID: 2,
                    title: "The spectacle before us was indeed sublime",
                    author: "2lovecode",
                    authorAvatar: "http://ghost.estudiopatagon.com/veen/content/images/2019/10/avatar-1.jpg",
                    createdTime: "October 17, 2019",
                    image: "http://ghost.estudiopatagon.com/veen/content/images/size/w1500h500/2019/10/janita-sumeiko-ZK1WQDMQvik-unsplash.jpg",
                    summary: "Welcome, it's great to have you here. We know that first impressions are important, so we've populated your new site with some initial getting started posts that will help you get familiar with everything in no time....",
                    visited: "2000+",
                    skipUrl: "article/2",
                    tags: ["tag1", "tag2", "tag3"],
                }
            ]
        }
    },
}
</script>
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
        position: absolute;
        left: 40px;
        bottom: 45px;
        padding: 14px 22px 10px;
        max-width: 55%;
        text-align: left;
        font-family: "Josefin Sans", sans-serif;
        font-weight: 700;
        font-size: 30px;
        margin-bottom: 40px;
        line-height: 1.45;
        letter-spacing: 0px;
        color: #242323;
        background-color:rgb(255, 255, 255);
        -webkit-transition: all 700ms ease;
        -moz-transition: all 700ms ease;
        -ms-transition: all 700ms ease;
        -o-transition: all 700ms ease;
        transition: all 700ms ease;
    }
    /* .article-list-list:hover .article-list-title{
        pointer: cursor;
    } */
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
    
    .article-list-tags a {
        font-size: 13px;
        color: #596172;
    }
    .article-list-tags a:hover{
        color: #FF486A;
    }
    .article-list-tags i {
        display: inline-block;
        line-height: 1.7;
        transform:rotate(25deg);
        -ms-transform:rotate(25deg); 	/* IE 9 */
        -moz-transform:rotate(25deg); 	/* Firefox */
        -webkit-transform:rotate(25deg); /* Safari 和 Chrome */
        -o-transform:rotate(25deg);
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