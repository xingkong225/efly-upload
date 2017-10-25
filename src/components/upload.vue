<template lang="html">
  <div class="app">
    <NavBar></NavBar>
    <div class="wrap">
        <form class="content" method="post">
            作业描述：<input class="desc" type="text" placeholder="你对作业的描述..."><br/>
            作业附件：<a href="javascript:;" class="upload">
            请选择文件：<input type="file">
            <i class="iconfont icon-shangchuanziliao"></i>
            </a><br/>
            <button type="submit" value="">提交</button>
        </form>
    </div>
  </div>
</template>

<script>
import NavBar from "./nav"
export default {
  name: 'upload',
  components: {
    NavBar
  }
}
</script>

<style lang="css" scoped>
.wrap {
  float: right;
  width: 575px;
  height: 456px;;
  margin-top: 118px;
  margin-right: 114px;
  border: 1px solid #000;
}
.content {
  width: 314px;
  height: 254px;
  margin: 20% auto;
}
.content .desc {
  width: 216px;
  height: 30px;
  line-height: 30px;
  color: #888;
  font-size: 15px;
  font-family: '微软雅黑';
  border: 2px solid #000;
  border-radius: 4px;
}
.content button {
  width: 310px;
  height: 56px;
  background-color: #69b1ee;
  color: #fff;
  font-size: 25px;
  border-radius: 10px;
  cursor: pointer;
}
.content .desc, .content .upload {
  margin-bottom: 52px;
  text-indent: 12px;
}
.upload {
  display: inline-block;
  width: 216px;
  height: 30px;
  line-height: 30px;
  color: #888;
  border: 2px solid #000;
  border-radius: 4px;
  position: relative;
}
.upload .iconfont {
  display: inline-block;
  font-size: 20px;
  position: absolute;
  left: 48%;
  top: 5%;
}
.upload input {
  width: 216px;
  height: 30px;
  opacity: 0;
  font-size: 0;
  z-index: 2;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
