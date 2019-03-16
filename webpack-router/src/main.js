import Vue from 'vue'

//引入路由包
import VueRouter from 'vue-router'
//手动安装包
Vue.use(VueRouter)

//引入app组件
import app from './app.vue'
/* import account from "./main/Account.vue"
 import goodslist from "./main/Goodslist.vue"*/

//路由抽离
import router from "./router.js"
/*var router = new VueRouter({
     mode:'history',
     routes:[
         {path:'/account',component:account},
        {path:'/goodslist',component:goodslist},
    ]
 })*/

//挂载到vm中
var vm = new Vue({
      el:'#app',
      data:{},
      methods:{},
      render:c => c(app),
      router:router

})