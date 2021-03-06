// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(VueLazyload, {
  loading: '/static/loading-svg/loading-bars.svg',
});

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
