<template>
  <!-- <div>
    <div>sider</div>
  </div> -->
  <div class="contain">
    <el-container>
      <el-aside width="200px">
        <aside-bar></aside-bar>
        </el-aside>
      <el-main>
        <div class="main">
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import AsideBar from '@/components/AsideBar.vue'
export default {
  name: 'PermissionprojectSider',
  components:{
    AsideBar
  },
  data() {
    return {
      
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>
<style lang="less" scoped>
.contain{
  height: 87vh;
}
.side{
  background-color: green;
  height: '100%';
}
.main{
  background-color: yellow;
  height: '100%';
}
</style>