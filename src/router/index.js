import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import projectOne from "@/views/projecOne.vue";
import projecTow from "@/views/projecTow.vue";
import ProjecTree from "@/views/ProjecTree.vue";
import porceFore from "@/views/porceFore.vue";
import porjceFive from "@/views/porjceFive.vue";
import porjceSecx from "@/views/porjceSecx.vue";
import porjceSaven from "@/views/porjceSaven.vue";
import porjceEat from "@/views/porjceEat.vue";
import porjceNigen from "@/views/porjceNigen.vue";
import porjceTan from "@/views/porjceTan.vue";
import porjceElventh from "@/views/porjceElventh.vue";
import porjceTowaf from "@/views/porjceTowaf.vue";
import porjceTharten from "@/views/porjceTharten.vue";
import porjceForeten from "@/views/porjceForeten.vue";
import porjceFivten from "@/views/porjceFivten.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/porject-1",
    name: "projectOne",
    component: projectOne,
  },
  {
    path: "/project-2",
    name: "projecTow",
    component: projecTow,
  },
  {
    path: "/Project-3",
    name: "ProjecTree",
    component: ProjecTree,
  },
  {
    path: "/project-4",
    name: "porceFore",
    component: porceFore,
  },
  {
    path: "/project-5",
    name: "porjceFive",
    component: porjceFive,
  },
  {
    path: "/project-6",
    name: "porjceSecx",
    component: porjceSecx,
  },
  {
    path: "/project-7",
    name: "porjceSaven",
    component: porjceSaven,
  },
  {
    path: "/project-8",
    name: "porjceEat",
    component: porjceEat,
  },
  {
    path: "/project-9",
    name: "porjceNigen",
    component: porjceNigen,
  },
  {
    path: "/project-10",
    name: "porjceTan",
    component: porjceTan,
  },
  {
    path: "/project-11",
    name: "porjceElventh",
    component: porjceElventh,
  },
  {
    path: "/project-12",
    name: "porjceTowaf",
    component: porjceTowaf,
  },
  {
    path: "/project-13",
    name: "porjceTharten",
    component: porjceTharten,
  },
  {
    path: "/project-14",
    name: "porjceForeten",
    component: porjceForeten,
  },
  {
    path: "/project-15",
    name: "porjceFivten",
    component: porjceFivten,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
