import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about-us",
    name: "About",
    component: About,
    alias: "/about"
  },
  {
    path: '/about',
    redirect: {name: 'About'}
  }
];

const router = new VueRouter({
  routes
});

export default router;
