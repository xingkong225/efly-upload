<template lang="html">
  <div class="app">
    <NavBar></NavBar>
    <div class="wrap">
      <form class="content">
        <p class="homework">作业描述：</p><textarea class="desc" placeholder="请在这里写下你对作业的描述......"></textarea>
        <p>作业附件：</p>
        <a href="javascript:;" class="upload">
        <span v-if="!filename">请选择文件：文件的后缀名只能是rar或者zip</span><span v-else>{{ filename }}</span><input type="file" name="work" @change="filechange">
        <i class="iconfont icon-shangchuanziliao"></i>
        </a><br/>
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
  .content .desc, .content .upload {
    text-indent: 12px;
    color: #888;
    border-radius: 4px;
    border: 2px solid #000;
    margin-bottom: 30px;
  }
  .upload {
    display: inline-block;
    width: 306px;
    height: 30px;
    font-size: 13px;
    line-height: 30px;
    position: relative;
  }
  .upload input {
    width: 216px;
    height: 30px;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
  }
  .upload .iconfont {
    display: inline-block;
    font-size: 20px;
    position: absolute;
    right: 5%;
    top: 5%;
  }
</style>
