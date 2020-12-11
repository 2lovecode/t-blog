<template>
  <div id="app">
    <Layout/>
  </div>
</template>

<script>
import Layout from '@/backend/pages/Layout.vue'

export default {
  name: 'app',
  components: {
    Layout
  }
}
</script>
<style>
body {
    margin: 0;
    padding: 0;
}
html,body,#app{
  height: 100%;
}
</style>