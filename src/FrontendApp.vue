<template>
  <div id="app">
    <Layout/>
  </div>
</template>

<script>
import Layout from '@/frontend/pages/Layout.vue'

export default {
  name: 'app',
  components: {
    Layout
  }
}
</script>
<style>
h1,h2,h3,h4,h5,h6{
  margin: 0;
  padding: 0;
}
body {
  font-size: 16px;
  font-family: "Josefin Sans", sans-serif;
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
