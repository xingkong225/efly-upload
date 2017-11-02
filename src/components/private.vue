<template lang="html">
  <div class="private">
    <NavBar></NavBar>
    <div class="change">
      <h1>欢迎你，李玉鑫</h1>
      <ul>
        <li>邮箱：1144821589@qq.com</li>
        <li>组别：程序组</li>
        <li>学院：数学与统计学院</li>
      </ul>
      <router-link to="/change">点此修改你的密码</router-link>
    </div>
  </div>
</template>

<script>
import NavBar from './nav.vue'
export default {
  name: 'private',
  components: {
    NavBar
  }
}
</script>

<style lang="css" scoped>
  .change {
    position: relative;
    float: right;
    width: 280px;
    margin-top: 72px;
    border: 1px solid #000;
    position: relative;
    padding: 30px 150px 100px;
  }
  .change h1 {
    line-height: 80px;
  }
  .change ul {

  }
  .change li {
    height: 60px;
    line-height: 60px;
    border-bottom: 1px dashed grey;
  }
  .change a {
    color: #000;
    position: absolute;
    right: 26%;
    bottom: 10%;
  }
  .change a:hover {
    color: grey;
    text-decoration: underline;
  }
</style>
