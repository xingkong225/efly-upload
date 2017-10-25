<template lang="html">
  <div class="register">
    <loginimg></loginimg>
    <div class="reg">
      <h4>register</h4>
      <input class="regInfo" type="text" placeholder="username"><br/>
      <input class="regInfo" type="password" placeholder="password"><br/>
      <input class="regInfo" type="password" placeholder="confirm your password">
      <div class="info">
        <p class="select">Select your academy: </p>
        <select class="profession">
          <option v-for="profession in professions">{{ profession }}</option>
        </select>
        <p class="select">Select your group: </p>
        <label for="programmer"><input id="programmer" type="radio" class="radio" name="group">程序组</label>
        <label for="designer"><input id="designer" type="radio" class="radio" name="group">平面组</label>
        <label for="planner"><input id="planner" type="radio" class="radio" name="group">策划组</label>
      </div>
      <button type="button" class="sub">Submit</button>
    </div>
  </div>
</template>

<script>
import loginimg from "../vuefile/loginimg.vue"
export default {
  name: 'reg',
  data () {
    return {
      professions: ['数学与统计学院', '历史文化学院', '地理科学学院', '化学学院', '物理学院', '文学院', '体育学院', '生命科学学院', '马克思主义学部', '教育学部', '外国语学院', '心理学院'],
      groups: ['程序组','平面组','策划组']
    }
  },
  components: {
    loginimg
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
  margin-bottom: 20px;
  font-size: 16px;
  text-indent: 15px;
  border: 1px solid #000;
  cursor: pointer;
}
p.select {
  font-weight: bold;
  margin-bottom: 20px;
}
.regInfo {
  width: 383px;
  height: 40px;
  border: 1px solid #a8a7a7;
  margin-bottom: 40px;
  color: #2a2a2a;
  font-size: 18px;
  text-indent: 60px;
}
.radio {
  margin-right: 20px;
}
label {
  cursor: pointer;
}
.sub {
  width: 383px;
  height: 55px;
  border: 1px solid #818181;
  background-color: #fffcfc;
  font-size: 18px;
  cursor: pointer;
  margin: 30px 0;
}
</style>
