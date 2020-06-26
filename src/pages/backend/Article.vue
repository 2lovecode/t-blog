<template>
  <div class="mavonEditor">
    <mavon-editor 
    :externalLink="externalLink"
    v-model="handbook">
    </mavon-editor>
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
      handbook: "#### how to use mavonEditor in nuxt.js"
    };
  }
};
</script>

<style scoped>
.mavonEditor {
  width: 80%;
  height: 80%;
}
</style>