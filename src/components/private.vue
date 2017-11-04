<template lang="html">
  <div class="private">
    <NavBar></NavBar>
    <div class="change">
      <h1>欢迎你，{{name}}</h1>
      <ul>
        <li>级别：{{memType}}</li>
        <li>组别：{{team}}</li>
        <li>学院：{{academy}}</li>
      </ul>
      <input v-model="password" class="newpass" type="password" placeholder="原密码">
      <input v-model="newpass" type="password" placeholder="新密码">
      <i class="iconfont icon-mima old"></i>
      <i class="iconfont icon-mima new"></i>
      <button @click="change" type="button">确认</button>
    </div>
    <toast :show="isAmpty" :msg="msg" @closeoff="closeoff"></toast>
  </div>
</template>

<script>
import Server from "./../api/server"
import utils from './../utils/utils'
import type from './../utils/type'
import NavBar from './nav.vue'
import toast from './../vuefile/toast'
export default {
  name: 'private',
  components: {
    NavBar,
    toast
  },
  data () {
    return {
      name: '',
      team: '',
      academy: '',
      type: '',

      password: '',
      newpass: '',

      isAmpty: false,
      msg: ''
    }
  },
  created () {
      this.name = utils.sess.get('name');
      this.academy = utils.sess.get('academy');
      this.team = utils.sess.get('team');
      this.type = utils.sess.get('type');
  },
  computed: {
    memType(){
      return type[this.type];
    }
  },
  methods: {
    closeoff(){
      this.isAmpty = false
    },
    change() {
      let self = this;
      Server.post({
        url: '/user/editpass',
        data: {
          newpass: self.newpass,
          password: self.password
        }
      })
      .then(data => {
        if (data.ok) {
          alert('修改密码成功，请返回登录');
          utils.sess.clear();
          self.$router.push('/login');
        } else {
          self.isAmpty = true
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
    margin-bottom: 30px;
  }
  .newpass {
    margin-top: 30px;
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
    top: 54%;
  }
  .new {
    top: 64.7%;
  }
</style>
