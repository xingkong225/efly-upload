<template lang="html">
  <div class="private">
    <NavBar></NavBar>
    <div class="change">
      <input type="text" placeholder="username or email">
      <input type="password" placeholder="new password"><br/>
      <i class="iconfont icon-yonghuming"></i>
      <i class="iconfont icon-mima"></i>
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
  height: 327px;
  margin-top: 118px;
  margin-right: 114px;
  border: 1px solid #000;
  padding: 110px 150px 0;
  position: relative;
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
  margin-top: 20px;
  position: relative;
  left: 10%;
}
.iconfont {
  position: absolute;
  top: 0;
  left: 27.5%;
  font-size: 21px;
}
.icon-yonghuming {
  top: 26.1%;
}
.icon-mima {
  top: 42.6%;
}
</style>
