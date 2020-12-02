<template>
  <div class="mavonEditor">
    <el-row class="article-form-row">
      <el-input placeholder="请输入标题" v-model="title">
        <template slot="prepend">标题</template>
      </el-input>
    </el-row>
    <el-row class="article-form-row">
      <el-input placeholder="请输入描述" v-model="description">
        <template slot="prepend">描述</template>
      </el-input>
    </el-row>
    <el-row class="article-form-row">
      <mavon-editor 
      :externalLink="externalLink"
      v-model="content">
      </mavon-editor>
    </el-row>
    <el-row class="article-form-row">
      <el-button type="info">发布</el-button>
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