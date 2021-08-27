import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from "../components/Login";
import Register from "../components/Register";
import JobMain from "../views/JobMain";
import Settings from "../views/Settings";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {auth: false}
  },
  {
    path: '/register',
    name:'register',
    component: Register,
    meta: {auth: false}
  },
  {
    path: '/jobMain',
    name:'jobMain',
    component: JobMain,
    meta: {layout: 'dashboard', auth: true}
  },
  {
    path: '/settings',
    name:'settings',
    component: Settings,
    meta: {layout: 'dashboard', auth: true}
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
