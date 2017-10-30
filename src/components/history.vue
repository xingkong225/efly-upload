<template lang="html">
  <div class="app">
    <NavBar></NavBar>
    <div class="history">
      <span v-for="item in items">{{ item }}
        <a href="#">点击下载<i class="iconfont icon-xiazai-dianji"></i></a>
      </span>
    </div>
  </div>
</template>

<script>
import NavBar from "./nav.vue"
export default {
  name: 'history',
  components: {
    NavBar
  },
  data () {
    return {
      items: ['第x次作业','第x次作业','第x次作业','第x次作业','第x次作业']
    }
  }
}
</script>

<style lang="css" scoped>
  .history {
    float: right;
    padding: 100px 150px;
    margin-top: 72px;
    border: 1px solid #000;
  }
  .history a {
    color: grey;
    font-size: 16px;
    padding-left: 50px;
  }
  .history a:hover {
    text-decoration: underline;
  }
  .history span {
    display: block;
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 25px;
  }
  .iconfont {
    padding-left: 10px;
    font-size: 15px;
  }
</style>
