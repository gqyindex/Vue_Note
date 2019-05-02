import Vue from 'vue'
import Router from 'vue-router'
import GoodList from '../views/GoodList'
var infiniteScroll =  require('vue-infinite-scroll')
Vue.use(Router);
Vue.use(infiniteScroll)

export default new Router({
  routes: [
    {
      path: '/',
      component:GoodList

    }
  ]
})
