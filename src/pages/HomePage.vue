<template>
    <el-row type="flex" justify="center">
        <el-col :span="18">
            <el-card shadow="never" body-style="padding:0" style="border:0 solid #fff;">
                <span class="article-list-img" style="background-image: url(http://ghost.estudiopatagon.com/veen/content/images/size/w1500h500/2019/10/chris-lawton-5IHz5WhosQE-unsplash.jpg);">
                </span>
                <el-row type="flex" justify="center">
                    <el-col :span="4">
                        <a href="#">
                            <span style="background-image: url(http://ghost.estudiopatagon.com/veen/content/images/2019/10/avatar-1.jpg);"></span>
                            <span>2lovecode</span>
                        </a>
                    </el-col>
                    <el-col :span="4">
                        <time class="time">October 17, 2019</time>
                    </el-col>
                    <el-col :span="4">
                        <div>
                            <span class="count">1000</span>
                            Read
                        </div>
                    </el-col>
                </el-row>
                <el-row type="flex" justify="center">                    
                    Welcome, it's great to have you here. We know that first impressions are important, so we've populated your new site with some initial getting started posts that will help you get familiar with everything in no time....                
                </el-row>     
                <el-row type="flex" justify="center">
                    <el-col :span="2">
                        <el-button>编程</el-button>
                    </el-col>
                    <el-col :span="2">
                        <el-button>人生</el-button>
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
</style>