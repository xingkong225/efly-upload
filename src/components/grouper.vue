<template lang="html">
  <div class="grouper">
    <NavBar></NavBar>
    <ul class="homework">
      <li v-for="person in persons">{{ person }}<download></download></li>
    </ul>
  </div>

</template>

<script>
import NavBar from "./nav.vue"
import download from "../vuefile/button.vue"
export default {
  name: 'grouper',
  data () {
    return {
      persons: ['姓名1','姓名2','姓名3']
    }
  },
  components: {
    NavBar,
    download
  }
}
</script>

<style lang="css" scoped>
  .homework {
    float: right;
    width: 500px;
    height: 450px;
    margin-top: 72px;
    border: 1px solid #000;
    padding: 100px 76px 0;
  }
  .homework li {
    text-align: center;
    font-size: 22px;
    margin-bottom: 35px;
  }
</style>
