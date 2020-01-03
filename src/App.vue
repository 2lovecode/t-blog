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
h1 {
  margin: 0;
  padding: 0;
}
body {
  font-size: 16px;
}
@media screen and (max-width: 990px) and (min-width: 768px) {
  body {
      font-size: 14px;
  }
}
@media screen and (max-width: 767px) {
  body {
      font-size: 13px;
  }
}
a {
  text-decoration: none;
}
a:hover {
  color: #FF486A;
}
a:visited {
  color:black;
}

#app {
  font-family: "DM Sans", sans-serif;
  letter-spacing: 0.25px;
  line-height: 1.8;
  text-align: center;
}
.t-title {
  font-family: "Josefin Sans", sans-serif;
}
.clearfix:before, .clearfix:after {
    display: table;
    content: "";
}
.clearfix:after {
    clear: both
}
</style>
