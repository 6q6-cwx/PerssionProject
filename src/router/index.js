import Vue from "vue";
import Router from "vue-router";
import NewHome from "@/views/NewHome.vue";
import Login from '@/views/Login.vue'
import store from '@/store'
import Layout from '@/layout/Layout.vue'

Vue.use(Router);

//嵌套路由
let menuRoterList=[
  {
    path:'/login',
    component: Login
  },
  {
    path: '/',
    component: Layout,
    children: [
      {path:'/',component: NewHome}
    ],
  },
]

const menu={'newHome':NewHome }

store.commit('global/GlobalMenuList')

const { menuList,globalLoading } =store.state.global
const getList=(arr)=>{
  arr.map(item=>{
    if(item.subMenuList&&item.subMenuList.length!==0){
      getList(item.subMenuList)
    }else{
      menuRoterList[1].children.push({
        path:item.link,
        component:menu[item.subMenuKey?item.subMenuKey:item.menuKey]
      })
    }
  })
}
getList(menuList)

const router = new Router({
  history: "history",
  routes:menuRoterList,
});

router.beforeEach((to, from, next) => {
  console.log('kkkkk',to, from, next)
  next()
  // if (to.meta.title) {
  //   document.title = to.meta.title;
  // }
  // next();
});

export default router;
