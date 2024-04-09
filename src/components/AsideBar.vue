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
      @select="handleSelect"
    >
      <template v-for="item in menu">
        <el-submenu
          v-if="item.subMenuList && item.code"
          :key="item.menuKey"
          :index="item.link ? item.link : item.menuKey"
        >
          <template slot="title">
            <i :class="item.icon"></i>
            <span>{{ item.menuTitle }}</span>
          </template>
          <template v-if="item.subMenuList && item.subMenuList.length !== 0">
            <template v-for="children in item.subMenuList">
              <template v-if="children.code">
                <el-menu-item
                  :index="children.link"
                  :key="children.subMenuKey"
                  >{{ children.subMenuTitle }}</el-menu-item
                >
              </template>
            </template>
          </template>
        </el-submenu>
        <el-menu-item
          v-if="!item.subMenuList && item.code"
          :index="item.link"
          :key="item.menuKey"
        >
          <i :class="item.icon"></i>
          <span slot="title">{{ item.menuTitle }}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "AsideBar",
  data() {
    return {
      menu: [],
    };
  },
  created() {
    this.getMenu();
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
      if (window.location.hash === `#${key}`) {
        return;
      } else {
        // console.log(this,'this.....')
        // console.log(this.$store.state,'$$$$$$')
        this.$router.push(`${key}`);
      }
    },
    getMenu() {
      const { menuList } = this.$store.state.global;
      this.menu = menuList;
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