<template lang="html">
  <div class="app">
    <ihead></ihead>
    <div class="login">
      <loginimg></loginimg>
      <div class="log">
        <h4>LOGIN</h4>
        <p class="p1">LOGIN  WITH  YOUR  ACCOUNT</p>
        <input class="text iconfont" type="text" placeholder="user name"><br/>
        <input class="password" type="password" placeholder="password"><br/>
        <button type="button">Login</button>
        <p class="p2">If you do not have an account<a href="#">Sign Up</a></p>
        <i class="iconfont icon-mima"></i><i class="iconfont icon-yonghuming"></i>
      </div>
    </div>
  </div>
</template>

<script>
import ihead from "./head.vue"
import loginimg from "./loginimg.vue"
export default {
  components: {
    ihead,
    loginimg
  }
}
</script>

<style lang="css">
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
}
.login p {

}
.icon-mima, .icon-yonghuming {
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
</style>
