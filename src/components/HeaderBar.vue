<template>
    <div class="header">
      <div class="left">
        <img
          src="../assets/img/header-logo.png"
          width="100"
          style="margin-right: 15px"
        />
        <span class="autotitle">权限管理系统</span>
      </div>
      <div class="right">
        <div></div>
        <div style="text-align: center;">姓名</div>
        <el-button size="mini">退出</el-button>
      </div>
    </div>
</template>

<script>
export default {
  name: "HeaderBar",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>
<style lang="less" scoped>
.header {
  height: inherit;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #b6b6b6;
  .left {
    .autotitle {
      // color: white;
    }
  }

  .right {
    display: flex;
    gap: 5px;

  }
   .right > div:nth-child(2) {
    line-height: 27.6px;
  }
}

</style>