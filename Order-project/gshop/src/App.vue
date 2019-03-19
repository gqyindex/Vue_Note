<template>
  <div id="app">
    <router-view/>
    <FooterGuide></FooterGuide>
  </div>
</template>

<script>
  import FooterGuide from './components/FooterGuide/FooterGuide.vue'
  import {reqFoodTypes} from "./api";

  export default {
    async mounted(){
     const result = await reqFoodTypes()
      console.log(result)
    },
  components:{
    FooterGuide
  }
}
</script>

<style lang="stylus" rel="stylesheet">
  #app
    width 100%
    height 100%
    background #f5f5f5
</style>
