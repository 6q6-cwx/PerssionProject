import Vue from "vue";
import Router from "vue-router";
import newHome from "@/views/NewHome.vue";

Vue.use(Router);

const routes = [{ path: "/new", component: newHome }];

const router = new Router({
  history: "history",
  routes,
});

export default router;
