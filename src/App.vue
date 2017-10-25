<template>
  <div id="app">
    <!-- <nav class="button">
      <router-link class="btn" to="">查看</router-link>
      <router-link class="btn" to="">提交</router-link>
      <router-view></router-view>
    </nav> -->
    <!-- <upload></upload> -->
    <!-- <assign></assign> -->
    <!-- <login></login> -->
    <register></register>
  </div>
</template>

<script>
import ihead from "./components/head.vue"
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
/*.button {
  width: 185px;
  float: left;
  position: fixed;
  top: 246px;
}
.button .btn {
  display: inline-block;
  width: 185px;
  height: 52px;
  text-align: center;
  line-height: 52px;
  background-color: #bfbfbf;
  border-radius: 10px;
  font-size: 28px;
  color: #63656a;
  margin-bottom: 48px;
  cursor: pointer;
}
.button .active {
  background-color: #69b1ee;
  color: #fff;
}*/
</style>
