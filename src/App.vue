<template>
  <div id="app">
    <ihead></ihead>
    <router-view></router-view>
  </div>
</template>

<script>
  import ihead from "./vuefile/head.vue"
  export default {
    components: {
      ihead
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
    font-family: "Microsoft YaHei";
  }

  #app {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
  }
</style>
