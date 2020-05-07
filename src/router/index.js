import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from '@/firebaseinit.js'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    component: function () {
      return import('../views/Home.vue')
    },
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
