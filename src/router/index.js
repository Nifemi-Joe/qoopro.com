import Vue from 'vue'
import VueRouter from 'vue-router'
import base1Routes from "@/router/routes/base1-routes";
import authRoutes from "@/router/routes/auth-routes";
import dashboardRoutes from "@/router/routes/dashboard-routes";
import projectRoutes from "@/router/routes/project-routes";
import teamRoutes from "@/router/routes/team-routes";

Vue.use(VueRouter)

const baseRoutes = [
]

const routes = baseRoutes.concat(
    base1Routes,
    authRoutes,
    dashboardRoutes,
    projectRoutes,
    teamRoutes
)

const router = new VueRouter({
  routes,
  mode: "history",
  base: "/",
})

export default router
