import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/Home";
import Page from "../pages/Page";
import List from "../pages/List";
import Biaodan from "../pages/Biaodan";
import Detail from "../pages/Detail";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/",
      component: Home,
      meta: {
        keepAlive: false,
      },
    },
    {
      path: "/page",
      component: Page,
      meta: {
        keepAlive: true,
      },
    },
    {
      path: "/list",
      component: List,
      meta: {
        keepAlive: true,
        isshowcache: false,
      },
    },
    {
      path: "/detail",
      name: "Detail",
      component: Detail,
      meta: {
        keepAlive: true,
      },
    },
    {
      path: "/biaodan",
      component: Biaodan,
      meta: {
        keepAlive: true,
      },
    },
  ],
});

export default router;
