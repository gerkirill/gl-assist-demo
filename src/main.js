// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';

import App from './App';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.filter('two-decimal', num => num < 10 ? `0${num}` : num.toString());

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  store,
});
