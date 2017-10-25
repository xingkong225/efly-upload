<template lang="html">
  <div class="app">
    <ihead></ihead>
    <div class="assign">
      <span>作业描述: </span><input class="desc" type="text" value=""><br/>
      <span>作业附件: </span><br/><a href="#">点击下载</a>
      <i class="iconfont icon-xiazai-dianji"></i>
    </div>
  </div>
</template>

<script>
import ihead from "./head.vue"
export default {
  name: 'assignment',
  components: {
    ihead
  }
}
</script>

<style lang="css">
.assign {
  width: 421px;
  padding-top: 118px;
  padding-right: 305px;
  float: right;
}
.assign .desc {
  display: inline-block;
  margin-bottom: 30px;
  width: 654px;
  height: 35px;
  font-size: 20px;
  border: 1px solid #000;
  text-indent: 10px;
}
.assign span {
  display: inline-block;
  padding:0 0 25px;
  font-size: 20px;
}
.assign a {
  display: inline-block;
  padding-left: 65px;
  color: #000;
  text-decoration: underline;
}
.iconfont {
  font-size: 22px;
}
</style>
