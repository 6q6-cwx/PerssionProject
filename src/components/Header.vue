<template>
  <!-- <div>
    <div>
      <el-row>
        <el-button>默认按钮</el-button>
        <el-button type="primary">主要按钮</el-button>
        <el-button type="success">成功按钮</el-button>
        <el-button type="info">信息按钮</el-button>
        <el-button type="warning">警告按钮</el-button>
        <el-button type="danger">危险按钮</el-button>
      </el-row>
    </div>
  </div> -->
  <el-header>
    <div class="header">
      <div>
        <img src="../assets/img/header-logo.png" width="200"/>
        <span>权限管理系统</span>
      </div>
      <div>
        <div></div>
      </div>
    </div>
    
  </el-header>
</template>

<script>
export default {
  name: 'PermissionprojectHeader',

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
.header{
  display: flex;
  justify-content: space-between;

}
</style>