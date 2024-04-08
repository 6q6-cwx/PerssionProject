import Vue from "vue";
import Router from "vue-router";
import newHome from "@/views/NewHome.vue";
import store from '@/store'


Vue.use(Router);

store.commit('global/MenuList')
const { globalLoading } =store.state.global

// const { data }=store
// console.log(store,'store==',data)
// // const { data }=store
// console.log( global,'-----')

const routes = [{ path: "/new", component: newHome }];
const router = new Router({
  history: "history",
  routes,
});

export default router;
