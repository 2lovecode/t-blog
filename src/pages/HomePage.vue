<template>
    <el-row type="flex" justify="center">
        <el-backtop target=".page-component__scroll .el-scrollbar__wrap"></el-backtop>
        <el-col :span="18">
            <el-card shadow="never" body-style="padding:0" style="border:0 solid #fff;">
                <span class="article-list-img" style="background-image: url(http://ghost.estudiopatagon.com/veen/content/images/size/w1500h500/2019/10/chris-lawton-5IHz5WhosQE-unsplash.jpg);">
                </span>
                <el-row type="flex" justify="center" style="margin-top:30px;" class="article-list-header">
                    <el-col :span="3">
                        <el-link :underline="false" icon="el-icon-edit">
                            <span style="background-image: url(http://ghost.estudiopatagon.com/veen/content/images/2019/10/avatar-1.jpg);"></span>
                            <span>2lovecode</span>
                        </el-link>
                    </el-col>
                    <el-col :span="3">
                        <el-link :underline="false" icon="el-icon-time">
                            <span>October 17, 2019</span>
                        </el-link>
                    </el-col>
                    <el-col :span="3">
                        <el-link :underline="false" icon="el-icon-reading">
                            <span>1000 Read</span>
                        </el-link>
                    </el-col>
                </el-row>
                <el-row type="flex" justify="center" class="article-list-content">
                    <el-col :span="18" style="margin:25px 0;">
                        Welcome, it's great to have you here. We know that first impressions are important, so we've populated your new site with some initial getting started posts that will help you get familiar with everything in no time....
                    </el-col>
                </el-row>     
                <el-row type="flex" justify="center" class="article-list-tags">
                    <el-col :span="2">
                        <el-link :underline="false">编程</el-link>
                    </el-col>
                    <el-col :span="2">
                        <el-link :underline="false">人生</el-link>
                    </el-col>
                </el-row>
            </el-card>
        </el-col>
    </el-row>
</template>
<script>
export default {
    
}
</script>
<style>
    .article-list-img {
        display: block;
        min-height: 440px;
        box-shadow: rgba(7, 10, 25, 0.2) 0px 3px 12px -1px, rgba(7, 10, 25, 0.2) 0px 22px 27px -20px;
    }
    .article-list-header .el-link{
        font-family: "Josefin Sans", sans-serif;
        font-size: 15px;
        letter-spacing: 0.25px;
        line-height: 1.8;
        color: #424851;
    }
    .article-list-header .el-link:hover{
        color: #FF486A;
    }
    .article-list-content {
        font-family: "DM Sans", sans-serif;
        font-size: 16px;
        letter-spacing: 0.25px;
        line-height: 1.8;
        color: #596172;
    }
    
    .article-list-tags .el-link{
        color: #242323;
    }
    .article-list-tags .el-link:hover{
        color: #FF486A;
    }
    
</style>