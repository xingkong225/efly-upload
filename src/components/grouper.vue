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
      persons: ['xxx的第几次作业','xxx的第几次作业','xxx的第几次作业','xxx的第几次作业']
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
  width: 708px;
  height: 556px;
  margin-top: 118px;
  border: 1px solid #000;
  padding: 100px 76px 0;
}
.homework li {
  text-align: center;
  font-size: 20px;
  margin-bottom: 40px;
}
</style>
