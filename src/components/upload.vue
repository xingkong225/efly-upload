<template lang="html">
  <div class="app">
    <NavBar></NavBar>
    <div class="wrap">
      <form class="content">
        <p class="homework">作业描述：</p><textarea v-model="description" class="desc" placeholder="请在这里写下你对作业的描述......"></textarea>
        <p>作业附件：</p>
        <a href="javascript:;" class="upload">
        <span v-if="!filename">请选择文件：文件的后缀名只能是rar或者zip</span><span v-else>{{ filename }}</span><input type="file" name="work" @change="filechange">
        <i class="iconfont icon-shangchuanziliao"></i>
        </a><br/>
        <button @click='submit' type="button">提交</button>
      </form>
    </div>
    <toast :show="isAmpty" :msg="msg" @closeoff="closeoff"></toast>
  </div>
</template>

<script>
import NavBar from "./nav"
import Server from "./../api/server.js"
import utils from './../utils/utils'
import toast from './../vuefile/toast'
export default {
  name: 'upload',
  data () {
    return {
      filename: '',
      fileObj: null,
      description: '',

      isAmpty: false,
      msg: ''
    }
  },
  components: {
    NavBar,
    toast
  },
  methods: {
    closeoff() {
      this.isAmpty = false
    },
    filechange(e) {
      var fileObj = e.target.files[0];
      this.fileObj = fileObj;
      this.filename = fileObj.name;
    },
    submit() {
        let self = this;
        let data = new FormData();
        data.append('description', self.description);
        data.append('work', self.fileObj);
        Server.post({
          url: '/file/add',
          data: data,
          config: {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
        })
        .then(data => {
          console.log(data);
          if(data.ok){
            self.isAmpty = true
            self.msg = data.msg
            console.log(data.msg)
          } else {
            self.isAmpty = true,
            self.msg = data.msg
          }
        })
        .catch(err => {
          console.log(err);
        })
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
