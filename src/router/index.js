import Vue from "vue";
import Router from "vue-router";
import Root from "@/views/Root";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/en"
    },
    {
      path: "/:lang",
      component: Root,
      props: true,
      children: [
        {
          path: "",
          name: "home",
          component: () => import("@/views/Home/index.vue"),
          props: true
        }
      ]
    }
  ]
});
