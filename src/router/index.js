import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export const routeHelpers = {
  isValidRoutePath(path) {
    return path.match(/^[a-zA-z0-9-]{5,50}$/)
  },
  redirectToNewBoard() {
    let result = ''
    let characters = 'ABCEFGHJKMNPQRSTVWXYZ23456789-'
    let charactersLength = characters.length
    for (let i = 0; i < 8; i++) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }

    window.location.href = '/' + result
  }
}

const routes = [
  {
    path: '/',
    redirect: '/public-wall'
  },
  {
    path: '/404',
    component: function() {
      return import('../views/404.vue')
    }
  },
  {
    path: '/:id',
    component: function() {
      return import('../views/Home.vue')
    },
    beforeEnter: (to, from, next) => {
      const id = to.params.id.toUpperCase()
      if (routeHelpers.isValidRoutePath(id)) return next()

      next({ path: '/404' })
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
