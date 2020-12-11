<template>
  <div class="mavonEditor">
    <el-row class="article-form-row">
      <el-col>
        <el-input placeholder="请输入标题" v-model="title">
          <template slot="prepend">标题</template>
        </el-input>
      </el-col>
    </el-row>
    <el-row class="article-form-row">
      <el-col>
        <el-input placeholder="请输入描述" v-model="description">
          <template slot="prepend">描述</template>
        </el-input>
      </el-col>
    </el-row>
    <el-row class="article-form-row">
      <el-col>
        <mavon-editor 
        :externalLink="externalLink"
        v-model="content">
        </mavon-editor>
      </el-col>
    </el-row>
    <el-row class="article-form-row">
      <el-col :offset="22" :span="2">
        <el-button type="success">发布</el-button>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      externalLink: false,
      markdownOption: {
        bold: true, // 粗体
      },
      title: "",
      description: "",
      content: "#### how to use mavonEditor in nuxt.js"
    };
  }
};
</script>

<style scoped>
.mavonEditor {
  width: 80%;
  height: 80%;
}
.article-form-row{
  margin-bottom: 1em;
}
</style>