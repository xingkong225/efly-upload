<template lang="html">
  <div v-show="show" class="toast">
    <div class="alert">
      {{ msg }}
      <button @click="close" type="button">确认</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: {
       type: Boolean,
       default: false
    },
    msg: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
    }
  },
  methods: {
    close () {
      this.$emit('closeoff');
    }
  }
}
</script>

<style lang="css" scoped>
  .toast {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
    position: fixed;
    top: 0;
    left: 0;
  }
  .alert {
    width: 360px;
    height: 120px;
    text-align: center;
    line-height: 75px;
    font-size: 18px;
    border-radius: 6px;
    box-shadow: 0 0 2px 1px #000;
    background-color: rgba(255, 255, 255, 0.8);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50% ,-50%);
  }
  .alert button {
    width: 80px;
    height: 30px;
    font-family: '微软雅黑';
    border-radius: 5px;
    background-color: #4a76f2;
    color: #fff;
    cursor: pointer;
    position: absolute;
    right: 40.3%;
    bottom: 20%;
  }
</style>
