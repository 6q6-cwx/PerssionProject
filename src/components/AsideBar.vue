<template>
  <div class="menu">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
    <template v-for="(item) in menu ">
      <el-submenu :key="item.menuKey">
        <template slot="title">
          <i :class="item.icon"></i>
          <span>{{item.menuTitle}}</span>
        </template>
        <template v-for="(children) in item.subMenuList" >
          <el-menu-item :index="children.subMenuKey" :key="children.subMenuKey">{{ children.subMenuTitle }}</el-menu-item>
        </template>
      </el-submenu>
    </template>
   
    <!-- <el-submenu>
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>导航一</span>
      </template>
      <el-submenu index="1-4">
        <template slot="title">选项4</template>
        <el-menu-item index="1-4-1">选项1</el-menu-item>
      </el-submenu>
    </el-submenu> -->



      <!-- <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item> -->
    </el-menu>
  </div>
</template>

<script>
import moke from "@/store/modules/menu";
export default {
  name: "PerssionProjectAsideBar",

  data() {
    return {
      menu: [],
    };
  },
  created(){
    this.getMenu()
  },

  mounted() {},

  methods: {
    handleOpen() {
      console.log("handleOpen");
    },
    handleClose() {
      console.log("handleClose");
    },
    handleSelect(key) {
      console.log(key);
    },
    getMenu() {
      const { actions } = moke
      this.menu=actions.getMenus()
      console.log(this.menu,'this.menu===')
    },
  },
};
</script>
<style lang="less" scoped>
.menu {
  height: 93.6vh;
  background-color: #545c64;
}
/deep/ .el-menu {
  border-right: 0px;
}
</style>