<template lang="html">
  <nav class="button">
    <router-link class="btn" to="/grouper">查看</router-link>
    <router-link class="btn" to="/commit">提交</router-link>
    <router-link class="btn" to="/iprivate">个人中心</router-link>
  </nav>
</template>

<script>
export default {
  name: 'nav',
  data () {
    return {
    }
  }
}
</script>

<style lang="css" scoped>
.button {
  width: 185px;
  float: left;
  position: fixed;
  top: 246px;
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
</style>
