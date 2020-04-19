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
  },
  {
    path: '/signin',
    name: 'signin',
    component: function () {
      return import('../views/SignIn.vue')
    }
  },
  {
    path: '/profile',
    name: 'profile',
    component: function () {
      return import('../views/Profile.vue')
    },
    meta: {
      requiresAuth: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (requiresAuth && !await firebase.getCurrentUser()) {
    next('signin');
  } else {
    next();
  }
})

export default router
 