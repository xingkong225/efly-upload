<template lang="html">
  <div class="commit">
    <NavBar></NavBar>
    <div class="wrap">
      <p class="p1">作业描述：</p><input type="text" class="desc">
      <p class="p2">作业附件：</p><button type="button">上传 </button>
    </div>
  </div>
</template>

<script>
import NavBar from "./nav.vue"
export default {
  components: {
    NavBar
  }
}
</script>

<style lang="css" scoped>
.wrap {
  float: right;
  width: 750px;
  height: 456px;
  padding-left: 60px;
  margin-top: 118px;
  margin-right: 114px;
  border: 1px solid #000;
}
.wrap .desc {
  width: 672px;
  height: 48px;
  border: 1px solid #000;
}
p {
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 20px;
}
p.p1 {
  margin-top: 40px;
}
p.p2 {
  margin-top: 70px;
}
button {
  width: 288px;
  height: 49px;
  line-height: 49px;
  background-color: #69b1ee;
  color: #fff;
  font-size: 22px;
  text-align: center;
  cursor: pointer;
}
</style>
