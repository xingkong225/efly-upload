// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
require('./assets/iconfont/upload/iconfont.css')
require('./assets/iconfont/download/iconfont.css')
require('./assets/iconfont/user/iconfont.css')
require('./assets/iconfont/email/iconfont.css')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
