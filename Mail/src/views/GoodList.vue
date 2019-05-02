<template>
  <div>
  <nav-header></nav-header>
    <nav-bread></nav-bread>
    <!--商品列表-->
    <div class="accessory-result-page accessory-page">
      <div class="container">
        <div class="filter-nav">
          <span class="sortby">Sort by:</span>
          <a href="javascript:void(0)" class="default cur">Default</a>
          <a href="javascript:void(0)" class="price" @click="sortPrice">Price <svg class="icon icon-arrow-short"><use xlink:href="#icon-arrow-short"></use></svg></a>
          <a href="javascript:void(0)" class="filterby stopPop">Filter by</a>
        </div>
        <div class="accessory-result">
          <!-- filter -->
          <div class="filter stopPop" id="filter">
            <dl class="filter-price">
              <dt>Price:</dt>
              <dd><a href="javascript:void(0)">All</a></dd>
              <dd>
                <a href="javascript:void(0)">0 - 100</a>
              </dd>
              <dd>
                <a href="javascript:void(0)">100 - 500</a>
              </dd>
              <dd>
                <a href="javascript:void(0)">500 - 1000</a>
              </dd>
              <dd>
                <a href="javascript:void(0)">1000 - 2000</a>
              </dd>
            </dl>
          </div>
          <!-- search result accessories list -->
          <div class="accessory-list-wrap">
            <div class="accessory-list col-4">
              <ul>
                <li v-for="(item,index) in goodList" :key="index">
                  <div class="pic">
                    <a href="#">
                      <img src="../../static/1.jpg" alt="">
                    </a>
                  </div>
                  <div class="main">
                    <div class="name">{{item.id}}</div>
                    <div class="name">{{item.Name}}</div>
                    <div class="price">{{item.Price}}</div>
                    <div class="btn-area">
                      <a href="javascript:;" class="btn btn--m" @click="addCart(item.id)">加入购物车</a>
                    </div>
                  </div>
                </li>
              </ul>
              <!--loading插件-->
              <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="400">
                loading...
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  <nav-footer></nav-footer>
  </div>
</template>

<script>
  import NavHeader from "../components/NavHeader";
  import NavBread from "../components/NavBreader";
  import NavFooter from "../components/NavFooter";
  import '../assets/css/base.css';
  import '../assets/css/product.css';
  import '../assets/css/login.css';
  import '../assets/css/checkout.css';
  import axios from 'axios';

    export default {
        name: "GoodList",
        components: { NavHeader, NavBread,NavFooter},
        data(){
          return {
            goodList:[],
            sortFlag :true,
            page:1,
            pagesize:4,
            busy:true
          }
        },
        mounted(){
          this.getGoods();
          this.sortPrice()
        },
      methods:{
         getGoods(flag){
           var params = {
             sort: this.sortFlag?1:-1,
             page: this.page,
             pagesize :this.pagesize,
           }
           axios.get('/goods',{
             params:params
           }).then(res =>{
             if (res.data.status == "0"){
               if (flag) {
                 this.goodList = this.goodList.concat(res.data.result.list);
                 if (res.data.result.count == 0){
                   this.busy = true
                 } else{
                   this.busy = false
                 }
               }else {
                 this.goodList = res.data.result.list
                 this.busy = false
               }
             }else {
               console.log('err')
             }
           })
         },
        sortPrice(){
           this.sortFlag = !this.sortFlag;
           this.page = 1;
           this.getGoods()
        },
        loadMore: function() {
          this.busy = true;
          setTimeout(() => {
            this.page++;
            this.getGoods(true);
          }, 2000);
        },
        addCart(id){
           axios.post('/goods/addcart', {
             productId: id
           }).then((res) =>{
              if (res.status === 0){
                alert('ok')
              } else {
                alert('add to cart error')
              }
           })
        }
      }
    }
</script>

