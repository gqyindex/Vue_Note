
import Vue from 'vue'

import login from './login.vue'

var vm = new Vue({
    el:'#app',
    data:{
    },
    methods:{
    },
    render:c => c(login)
})

import test from './test'
console.log(test)