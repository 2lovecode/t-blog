<template>
    <div>
        <el-row type="flex" justify="center">
            <el-col :span="20">
                <img :src="detail.coverImage" class="article-detail-cover">
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">Main</el-col>
            <el-col :span="12">Aside</el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    data () {
        return {
            detail : {
                coverImage: "/assets/images/bg/2020/05/post-1.jpg"
            }
        }
    }
}
</script>
<style>
    .article-detail-cover {
        width: 100%;
        height: 500px;
    }
    @media screen and (max-width: 990px) and (min-width: 768px) {
        .article-detail-cover {
            height: 325px;
        }
    }
    @media screen and (max-width: 767px){
        .article-detail-cover {
            left: auto;
            height: 200px;
        }
    }    
</style>