<template>
  <div>
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
import HeaderBar from "@/components/HeaderBar.vue";
import AsideBar from "@/components/AsideBar.vue";

export default {
  name: "Layout",
  components: {
    HeaderBar,
    AsideBar,
  },
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="less" scoped>
/deep/ .el-header {
  background-color: #b6b6b6;
}
</style>