<template lang="html">
  <div class="register">
    <loginimg></loginimg>
    <div class="reg">
      <h4>register</h4>
      <div class="input-wrap">
        <input v-model="name" class="regInfo" type="text" placeholder="your name"><br/>
        <input v-model="email" class="regInfo" type="text" placeholder="email"><br/>
        <input v-model="password" :class="{regInfo: common, passActive: warning}" type="password" placeholder="password"><br/>
        <input v-model="confirm" class="regInfo" type="password" placeholder="confirm your password"><span v-show="warning" class="alert">长度必须为6-15个字符，且不能有标点符号</span>
        <i class="iconfont icon-youxiang"></i>
        <i class="iconfont icon-yonghuming"></i>
        <i class="iconfont icon-mima pass1"></i>
        <i class="iconfont icon-mima pass2"></i>
        <i v-show="warning" class="iconfont icon-zhifuyouwenti"></i>
      </div>
      <div class="info">
        <p class="select">Select your academy: </p>
        <select v-model="profession" class="profession">
          <option disabled value="-- 请选择学院 --">-- 请选择学院 --</option>
          <option v-for="profession in professions">{{ profession }}</option>
        </select>
        <p class="select">Select your group: </p>
        <label for="programmer"><input v-model="group" value="程序组" id="programmer" type="radio" class="radio" name="group">程序组</label>
        <label for="designer"><input v-model="group" value="平面组" id="designer" type="radio" class="radio" name="group">平面组</label>
        <label for="planner"><input v-model="group" value="策划组" id="planner" type="radio" class="radio" name="group">策划组</label>
      </div>
      <button type="button" @click="submit" class="sub">Submit</button>
      <p class="log">If you have an account<router-link to="/login">Sign In</router-link></p>
    </div>
    <toast :show="isAmpty" :msg="msg" @closeoff="closeoff"></toast>

  </div>
</template>

<script>
import loginimg from "../vuefile/loginimg.vue"
import toast from "../vuefile/toast.vue"
import Server from './../api/server'
export default {
  name: 'reg',
  data () {
    return {
      professions: ['数学与统计学院', '历史文化学院', '地理科学学院', '化学学院', '物理学院', '文学院', '体育学院', '生命科学学院', '马克思主义学部', '教育学部', '外国语学院', '心理学院'],
      groups: ['程序组','平面组','策划组'],

      name: '',
      email: '',
      password: '',
      confirm: '',
      profession: '',
      group: '',

      isAmpty: false,
      msg: '',

      common: true,
      warning: false
    }
  },
  components: {
    loginimg,
    toast
  },
  mounted() {
    this.profession = '-- 请选择学院 --';
  },
  computed: {

  },
  methods: {
    submit () {
      if (!this.name) {
        this.isAmpty = true,
        this.msg = '请输入你的名字！'
      } else if (!this.email) {
        this.isAmpty = true,
        this.msg = '请输入邮箱！'
      } else if (!this.password) {
        this.isAmpty = true,
        this.msg = '请输入密码！'
      } else if (!this.confirm) {
        this.isAmpty = true,
        this.msg = '请再输入一次密码！'
      } else if (this.password !== this.confirm) {
        this.isAmpty = true,
        this.msg = '两次输入的密码不一致！'
      } else if (!this.profession || this.profession == '-- 请选择学院 --') {
        this.isAmpty = true,
        this.msg = '请选择你的学院！'
      } else if (!this.group) {
        this.isAmpty = true,
        this.msg = '请选择你的组别！'
      } else {
        let self = this;
        Server.post({
          url: '/user/reg',
          data: {
            name: self.name, // (self.name是你自己data里的数据,self是this赋值过去的, 下同)
            team: self.group,
            password: self.password,
            email: self.email,
            academy: self.profession
          }
        })
        .then(data => {
          this.isAmpty = true,
          this.msg = data.msg
        })
        .catch(err => {
          this.isAmpty = true,
          this.msg = data.msg
        })
      }
      if (this.password.length < 6) {
        this.warning = true
      } else
        this.warning = false
    },
    closeoff () {
      this.isAmpty = false;
    }
  }
}
</script>

<style lang="css" scoped>
  *{
    font-family: '微软雅黑';
  }
  .reg {
    float: right;
    margin-right: 5%;
  }
  .reg h4 {
    width: 100%;
    margin: 30px 0 40px;
    text-align: center;
    font-size: 29px;
    text-decoration: underline;
  }
  .reg select {
    width: 300px;
    height: 40px;
    margin-bottom: 10px;
    font-size: 16px;
    text-indent: 15px;
    border: 1px solid #000;
    cursor: pointer;
  }
  p.select {
    font-weight: bold;
    margin-bottom: 10px;
  }
  .regInfo {
    width: 383px;
    height: 40px;
    border: 1px solid #a8a7a7;
    margin-bottom: 25px;
    border-radius: 2px;
    color: #2a2a2a;
    font-size: 18px;
    text-indent: 60px;
  }
  .radio {
    margin-right: 10px;
  }
  label {
    cursor: pointer;
    padding-left: 30px;
  }
  .sub {
    width: 383px;
    height: 55px;
    border: 1px solid #818181;
    background-color: #fffcfc;
    font-size: 18px;
    cursor: pointer;
    margin: 20px 0;
  }
  .sub:hover {
    background-color: #4a76f2;
    color: #fff;
    border: none;
  }
  .log a {
    padding-left: 30px;
    color: #2a2a2a;
    font-weight: bold;
  }
  .log a:hover {
    text-decoration: underline;
  }
  .input-wrap {
    position: relative;
  }
  .iconfont {
    position: absolute;
    font-size: 26px;
    left: 4%;
  }
  .icon-yonghuming {
    top: 1.9%;
  }
  .icon-youxiang {
    top: 27.5%;
  }
  .icon-zhifuyouwenti {
    left: 90%;
    top: 53%;
    color: #f00;
  }
  .pass1 {
    top: 52%;
  }
  .pass2 {
    top: 78%;
  }
  .passActive {
    border: 2px solid #f00;
    box-shadow: 0 0 2px #f00;
  }
  .alert {
    display: block;
    position: absolute;
    top: 67%;
    left: 0;
    color: #f00;
    font-size: 14px;
  }
  </style>
