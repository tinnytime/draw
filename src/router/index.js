import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from "@/firebaseinit";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/zzz'
  },
  {
    path: '/:id',
    component: function () {
      return import('../views/Home.vue')
    },
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
