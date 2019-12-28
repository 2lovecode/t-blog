<template>

    <el-row type="flex" justify="center">
        
        <el-col :span="16" >
            <el-card shadow="never" body-style="padding:0" style="border:0 solid #fff;">
                <a href="#" style=":hover{pointer:cursor;}">
                    <span class="article-list-img" style="background-image: url(http://ghost.estudiopatagon.com/veen/content/images/size/w1500h500/2019/10/chris-lawton-5IHz5WhosQE-unsplash.jpg);">
                        <h1 class="article-list-title">
                            <a>The spectacle before us was indeed sublime</a>
                        </h1>
                        <el-button class="article-detail-button" type="danger" round="">Continue Reading</el-button>
                    </span>
                </a>
                <el-row type="flex" justify="center" style="margin-top:30px;" class="article-list-header">
                    <el-col :xs="24" :sm="12" :md="8" :lg="4" :xl="4">
                        <el-link :underline="false">
                            <span class="author-image cover" style="background-image: url(http://ghost.estudiopatagon.com/veen/content/images/2019/10/avatar-3.jpg);"></span>
                            <span>2lovecode</span>
                        </el-link>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="8" :lg="4" :xl="4">
                        <el-link :underline="false">
                            <span class="time-icon"></span>
                            <span>October 17, 2019</span>
                        </el-link>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="8" :lg="4" :xl="4">
                        <el-link :underline="false" icon="el-icon-reading">
                            <span>1000 Read</span>
                        </el-link>
                    </el-col>
                </el-row>
                <el-row type="flex" justify="center" class="article-list-content">
                    <el-col :span="20" style="margin:25px 0;">
                        Welcome, it's great to have you here. We know that first impressions are important, so we've populated your new site with some initial getting started posts that will help you get familiar with everything in no time....
                    </el-col>
                </el-row>
                <el-row type="flex" justify="center" class="article-list-tags">
                    <i class="el-icon-price-tag"></i>
                    <el-col :span="1">
                        <el-link :underline="false">编程</el-link>
                    </el-col>
                    <el-col :span="1">
                        <el-link :underline="false">人生</el-link>
                    </el-col>
                    <el-col :span="1">
                        <el-link :underline="false">编程</el-link>
                    </el-col>
                    <el-col :span="1">
                        <el-link :underline="false">人生</el-link>
                    </el-col>
                    <el-col :span="1">
                        <el-link :underline="false">编程</el-link>
                    </el-col>
                    <el-col :span="1">
                        <el-link :underline="false">人生</el-link>
                    </el-col>
                </el-row>
                <div class="epcl-border small"></div>
            </el-card>
        </el-col>
    </el-row>
    
</template>
<script>
export default {
    
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
    
    .article-list-tags .el-link{
        font-size: 13px;
        color: #596172;
    }
    .article-list-tags .el-link:hover{
        color: #FF486A;
    }
    .article-list-tags i {
        line-height: 1.7;
        transform:rotate(25deg);
        -ms-transform:rotate(25deg); 	/* IE 9 */
        -moz-transform:rotate(25deg); 	/* Firefox */
        -webkit-transform:rotate(25deg); /* Safari 和 Chrome */
        -o-transform:rotate(25deg);
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
</style>