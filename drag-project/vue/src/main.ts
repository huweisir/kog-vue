// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import util from './plugin/util'

Vue.config.productionTip = false;
Vue.prototype.ajax = axios;
Vue.use(util);

/* eslint-disable no-new */
var vue = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
