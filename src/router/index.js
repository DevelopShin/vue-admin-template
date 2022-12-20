import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "@/views/Dashboard";
import GridSystem from "@/views/GridSystem";

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/grid-system",
    name: "GridSystem",
    component: GridSystem,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
