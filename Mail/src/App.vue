<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>

import GoodList from "./views/GoodList";
export default {
  name: 'App',
  components: {GoodList},
}
</script>

<style>

</style>
