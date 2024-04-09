import Vue from "vue";
import Router from "vue-router";
import NewHome from "@/views/NewHome.vue";
import store from '@/store'

Vue.use(Router);

let menuRoterList=[{path:'/',component: NewHome}]

const menu={'newHome':NewHome }

store.commit('global/GlobalMenuList')

const { menuList,globalLoading } =store.state.global
console.log(globalLoading,'globalLoading')

const getList=(arr)=>{
  arr.map(item=>{
    if(item.subMenuList&&item.subMenuList.length!==0){
      getList(item.subMenuList)
    }else{
      menuRoterList.push({
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

export default router;
