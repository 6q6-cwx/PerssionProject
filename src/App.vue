<template>
  <div id="app">
      <Header></Header>
      <Sider></Sider>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Sider from '@/components/Sider.vue'
export default {
  name: 'App',
  components:{
    Header,
    Sider
  }
}
</script>

<style>
#app {
  height: 100vh;
  background-color: pink;
}

</style>
