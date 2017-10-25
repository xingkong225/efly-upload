<template lang="html">
  <div class="register">
    <ihead></ihead>
    <loginimg></loginimg>
    <div class="reg">
      <h4>register</h4>
      <input type="text" placeholder="user name">
      <input type="password" placeholder="password">
      <input type="password" placeholder="confirm your password">
      <div class="info">
        <p>选择你的学院：</p>
        <select class="profession">
          <option v-for="profession in professions">{{ profession }}</option>
        </select>
        <p>选择你所在的组别：</p>
        <input type="radio" class="radio" name="group" v-for="group in groups">{{ group }}
        <input type="radio" class="radio" name="group">程序组
        <input type="radio" class="radio" name="group">平面组
        <input type="radio" class="radio" name="group">策划组
      </div>
      <button type="button" class="button">提交</button>
    </div>
  </div>
</template>

<script>
import ihead from "./head.vue"
import loginimg from "./loginimg.vue"
export default {
  data () {
    return {
      professions: ['数学与统计学院', '历史文化学院', '地理科学学院', '化学学院', '物理学院', '文学院', '体育学院', '生命科学学院', '马克思主义学部', '教育学部', '外国语学院', '心理学院'],
      groups: ['程序组','平面组','策划组']
    }
  },
  components: {
    ihead,
    loginimg
  }
}
</script>

<style lang="css">
.reg {
  float: right;
}
</style>
