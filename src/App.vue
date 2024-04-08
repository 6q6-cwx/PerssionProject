<template>
  <div id="app">
    <el-container style="min-height: 100vh">
      <el-header height="50px">
        <header-bar></header-bar>
      </el-header>
      <el-container>
        <el-aside width="300px">
           <aside-bar></aside-bar>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import HeaderBar from '@/components/HeaderBar.vue';
import AsideBar from '@/components/AsideBar.vue';
// import Sider from '@/components/Sider.vue';
export default {
  name: 'App',
  components:{
    HeaderBar,
    // Sider,
    AsideBar
  }
}
</script>

<style>
#app {
  height: 100vh;
}

</style>
