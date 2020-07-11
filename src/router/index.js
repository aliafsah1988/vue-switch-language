import Vue from "vue";
import Router from "vue-router";
import Root from "@/views/Root";

Vue.use(Router);

export default new Router({
  // For production it's better to change it to history mode
  mode: "hash", // For lunching in gh-pages, because I had no control on the server, I changed the mode to hash
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
