import Vue from "vue";
import Router from "vue-router";
import newHome from "@/views/NewHome.vue";
// import store from '@/store'




Vue.use(Router);

console.log(this.$store,'action===')

const routes = [{ path: "/new", component: newHome }];
const router = new Router({
  history: "history",
  routes,
});

export default router;
