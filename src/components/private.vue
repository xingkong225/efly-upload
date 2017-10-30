<template lang="html">
  <div class="private">
    <NavBar></NavBar>
    <div class="change">
      <input type="text" placeholder="email">
      <input type="password" placeholder="old password">
      <input type="password" placeholder="new password">
      <i class="iconfont icon-yonghuming"></i>
      <i class="iconfont icon-mima old"></i>
      <i class="iconfont icon-mima new"></i>
      <button type="button">确认</button>
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
  float: right;
  width: 280px;
  margin-top: 72px;
  border: 1px solid #000;
  position: relative;
  padding: 100px 150px 100px;
}
.change input {
  width: 230px;
  height: 30px;
  line-height: 30px;
  padding-left: 40px;
  color: #888;
  font-size: 15px;
  font-family: '微软雅黑';
  border: 2px solid #000;
  border-radius: 4px;
  margin-bottom: 40px;
}
button {
  width: 230px;
  height: 56px;
  background-color: #69b1ee;
  color: #fff;
  font-size: 25px;
  border-radius: 10px;
  cursor: pointer;
  margin-left: 8%;
}
.iconfont {
  position: absolute;
  left: 27.5%;
  font-size: 21px;
}
.icon-yonghuming {
  top: 22%;
}
.old {
  top: 37.8%;
}
.new {
  top: 53%;
}
</style>
