import { GlobalMenuList } from '../commit'
import httpServe from '@/server/api'
// menuKey  subMenuKey  对应组件名称
// code 菜单权限
// link 页面路径
const global = {
  namespaced: true,
  state: () => ({
    globalLoading: false,
    menuList: [
      {
        menuTitle: "个人信息",
        code: true,
        icon: "el-icon-user",
        menuKey: "baseInfo",
        link: "/baseInfo",
      },
      {
        menuTitle: "系统数据",
        code: true,
        icon: "el-icon-s-data",
        menuKey: "systemdata",
        subMenuList: [
          {
            subMenuTitle: "数据展示",
            code: true,
            subMenuKey: "dataShow",
            link: "/dataShow",
          },
        ],
      },
      // {
      //   menuTitle: "信息管理",
      //   code: true,
      //   menuKey: "2",
      //   icon: "el-icon-setting",
      //   subMenuList: [
      //     {
      //       subMenuTitle: "基本信息",
      //       code: true,
      //       subMenuKey: "baseinfo",
      //       link: "/baseinfo",
      //     },
      //   ],
      // },
      // {
      //   menuTitle: "数据展示",
      //   code: true,
      //   menuKey: "3",
      //   icon: "el-icon-s-data",
      //   subMenuList: [
      //     {
      //       subMenuTitle: "数据统计",
      //       code: true,
      //       subMenuKey: "dataShow",
      //       link: "/dataShow",
      //     },
      //   ],
      // },
      {
        menuTitle: "系统设置",
        code: true,
        menuKey: "newHome",
        icon: "el-icon-s-data",
        link: "/new",
      },
    ],
  }),
  actions: {
    login() {},
  //  async  getD({commit},params){
  //    const data = await httpServe.getMoke('user/baseInfo')
  //   //  .then((res)=>{
  //   //     console.log(res,'datttttt')
  //   //   })
  //    console.log(data,'data===')
  //     console.log(commit[GlobalMenuList],'commit')
  //     console.log(params,'params')
  //   }
  },
  mutations: {
    login() {
      console.log("login");
    },
    [GlobalMenuList](state) {
      // console.log('GlobalMenuListGlobalMenuListGlobalMenuListGlobalMenuListGlobalMenuListGlobalMenuList')
      // console.log(state, "state");
      state.globalLoading = true;
    },
   
  },
};

export default global;
