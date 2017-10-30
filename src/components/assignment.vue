<template lang="html">
  <div class="app">
    <NavBar></NavBar>
    <div class="wrap">
      <form class="content">
        <p class="homework">作业描述：</p><textarea class="desc" placeholder="组长要求的作业内容......"></textarea>
        <p>作业附件：</p>
        <a class="download" href="#">点击下载<i class="iconfont icon-xiazai-dianji"></i></a>
        <button>提交</button>
      </form>
    </div>
  </div>
</template>

<script>
import NavBar from "./nav"
export default {
  name: 'upload',
  data () {
    return {
      filename: ''
    }
  },
  components: {
    NavBar
  },
  methods: {
    filechange(e) {
      var fileObj = e.target.files[0];
      this.filename = fileObj.name;
    }
  }
}
</script>

<style lang="css" scoped>
  .wrap {
    float: right;
    margin-top: 72px;
    border: 1px solid #000;
  }
  .content {
    width: 314px;
    padding: 100px 150px;
    height: auto;
  }
  .content p {
    line-height: 30px;
    padding-bottom: 15px;
    font-size: 18px;
  }
  .content .desc {
    width: 306px;
    height: 120px;
    resize: none;
    line-height: 30px;
    font-size: 16px;
    font-family: '微软雅黑';
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
  .content .desc {
    text-indent: 12px;
    color: #888;
    border-radius: 4px;
    border: 2px solid #000;
    margin-bottom: 30px;
  }
  .download {
    display: inline-block;
    width: 100%;
    text-align: center;
    padding-bottom: 20px;
    color: grey;
  }
  .download:hover {
    text-decoration: underline;
  }
  .iconfont {
    color: grey;
    padding-left: 15px;
  }
</style>
