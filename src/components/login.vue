<template lang="html">
  <div class="app">
    <div class="login">
      <loginimg></loginimg>
      <div class="log">
        <h4>LOGIN</h4>
        <p class="p1">LOGIN  WITH  YOUR  ACCOUNT</p>
        <div class="input">
          <input v-model="email" class="text" type="text" placeholder="email"><br/>
          <input v-model="password" class="password" type="password" placeholder="password"><br/>
          <i class="iconfont icon-mima"></i><i class="iconfont icon-yonghuming"></i>
        </div>
        <button @click="login" type="button">Login</button>
        <p class="p2">If you do not have an account
            <router-link class="sign" to="/reg">Sign Up</router-link>
        </p>
      </div>
    </div>
    <toast :show="isAmpty" :msg="msg" @closeoff="closeoff"></toast>
  </div>
</template>

<script>
import loginimg from "../vuefile/loginimg.vue"
import toast from "../vuefile/toast.vue"
import Server from "./../api/server.js"
import utils from './../utils/utils'
export default {
  name: 'login',
  components: {
    loginimg,
    toast
  },
  data () {
    return {
      email: '',
      password: '',
      name: '',


      msg: "",
      isAmpty: false
    }
  },
  methods: {
    closeoff() {
      this.isAmpty = false
    },
    login() {
      let self = this;
      Server.post({
        url: '/user/login',
        data: {
          email: self.email,
          password: self.password
        }
      })
      .then(data => {
        // data.msg
        if (data.ok) {
          if (data.results && data.results.name) {
            utils.sess.set('name', data.results.name);
            utils.sess.set('academy', data.results.academy);
            utils.sess.set('team', data.results.team);
            utils.sess.set('type', data.results.type);
          }
          self.$router.push('/');
        } else {
          self.isAmpty = true,
          self.msg = data.msg
        }
      })
      .catch(err => {
        console.log(err);
        this.msg = '登陆失败，请重试';
      })
    }
  }
}
</script>

<style lang="css" scoped>
  .login {
    overflow: hidden;
  }
  .login .log {
    float: right;
    padding-top: 77px;
  }
  .login h4 {
    width: 100%;
    text-align: center;
    font-size: 29px;
    text-decoration: underline;
  }
  .login .text, .login .password {
    width: 463px;
    height: 50px;
    border: 1px solid #a8a7a7;
    margin-bottom: 40px;
    color: #2a2a2a;
    text-indent: 60px;
  }
  .login .text {
    font-size: 19px;
  }
  .login .password {
    font-size: 18px;
  }
  .login button {
    width: 462px;
    height: 55px;
    border: 1px solid #818181;
    background-color: #fffcfc;
    font-size: 18px;
    cursor: pointer;
  }
  .login button:hover {
    background-color: #4a76f2;
    color: #fff;
  }
  .sign:hover {
    text-decoration: underline;
  }
  .p1 {
    font-size: 14px;
    padding-top: 74px;
    padding-bottom: 40px;
  }
  .p2 {
    font-size: 18px;
    padding-top: 40px;
  }
  .p2 a {
    display: inline-block;
    padding-left: 30px;
    color: #2a2a2a;
    font-weight: bold;
  }
  .input {
    position: relative;
  }
  .iconfont {
    position: absolute;
    left: 4%;
    font-size: 30px;
  }
  .icon-mima {
    top: 55%;
  }
  .icon-yonghuming {
    top: 6%;
  }
</style>
