<template lang="html">
    <nav class="button">
      <router-link class="btn" to="/assignment">查看</router-link>
      <router-link class="btn" to="/history">历史作业</router-link>
      <router-link class="btn" to="/upload">提交</router-link>
      <router-link class="btn" to="/iprivate">个人中心</router-link>
      <a class="logout btn" @click="logout">退出登录</a>
      <toast :msg="msg" :show="isAmpty" @closeoff="closeoff"></toast>
    </nav>
</template>

<script>
import Server from "./../api/server"
import utils from "./../utils/utils"
import toast from "./../vuefile/toast"
export default {
  name: 'nav',
  data() {
    return {
      isAmpty: false,
      msg: ''
    }
  },
  components: {
    toast
  },
  created() {
    let self = this;
    Server.get({
      url: '/user/checklogin'
    })
    .then(data => {
      if (!data.ok) {
        self.isAmpty = true
        self.msg = data.msg
        setTimeout(() => {
          self.$router.push('/login')
        },2000)
      }
    })
    .catch(err => {
      console.log(err);
    })
  },
  methods: {
    closeoff(){
      this.isAmpty = false
    },
    logout() {
      let self = this;
      Server.get({
        url: '/user/logout'
      })
      .then(data => {
        utils.sess.clear()
        self.$router.push('/login')
      })
    }
  }
}
</script>

<style lang="css" scoped>
  .button {
    width: 185px;
    float: left;
    position: fixed;
    top: 200px;
  }
  .button .btn {
    display: inline-block;
    width: 185px;
    height: 52px;
    text-align: center;
    line-height: 52px;
    background-color: #bfbfbf;
    border-radius: 10px;
    font-size: 25px;
    color: #63656a;
    margin-bottom: 48px;
    cursor: pointer;
  }
  .button .active {
    background-color: #69b1ee;
    color: #fff;
  }
  .logout {
    background-color: red !important;
    color: #fff !important;
  }
</style>
