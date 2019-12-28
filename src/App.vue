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
  font-size: 16px;
  letter-spacing: 0.25px;
  line-height: 1.8;
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
