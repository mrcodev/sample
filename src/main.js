import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import iziToast from 'izitoast'

Vue.config.productionTip = false;

var eventBus = new Vue();

Vue.prototype.$eventBus = eventBus;

Vue.prototype.$axios = axios;

Vue.prototype.$iziToast = iziToast;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
