import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import CreateQuote from "../views/CreateQuote.vue";
import Quotes from "../views/Quotes.vue";
import CreateUser from "../views/CreateUser.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/quotes",
    name: "Quotes",
    component: Quotes,
  },
  {
    path: "/create-quote",
    name: "CreateQuote",
    component: CreateQuote,
  },
  {
    path: "/create-user",
    name: "CreateUser",
    component: CreateUser
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
