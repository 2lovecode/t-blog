<template>
  <div id="app">
    <CommonLayout/>
  </div>
</template>

<script>
import CommonLayout from './components/layout/CommonLayout.vue'

export default {
  name: 'app',
  components: {
    CommonLayout
  }
}
</script>

<style>
#app {
  font-family: "DM Sans", sans-serif;
  font-size: 14px;
  text-align: center;
}
.t-title {
  font-family: "Josefin Sans", sans-serif;
}
.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}

.clearfix:after {
    clear: both
}
</style>
