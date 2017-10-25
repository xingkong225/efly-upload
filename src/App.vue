<template>
  <div id="app">
    <ihead></ihead>
    <router-view></router-view>
    <!-- <upload></upload> -->
    <!-- <assign></assign> -->
    <!-- <login></login> -->
    <!-- <register></register> -->
  </div>
</template>

<script>
import ihead from "./vuefile/head.vue"
import assign from "./components/assignment.vue"
import upload from "./components/upload.vue"
import login from "./components/login.vue"
import register from "./components/register.vue"

export default {
  components: {
    ihead,
    assign,
    upload,
    login,
    register
  }
}
</script>

<style>
/* 默认样式 */
* {
  margin: 0;
  padding: 0;
  outline: none;
  text-decoration: none;
  list-style: none;
  border: none;
}
body {
  font-family:'微软雅黑';
}

#app {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}
</style>
