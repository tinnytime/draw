import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export const routeHelpers = {
  isValidRoutePath(path) {
    return path.match(/^[A-Z0-9-]{5,50}$/)
  },
  createNewRoute() {
    let result = ''
    let characters = 'ABCEFGHJKMNPQRSTVWXYZ23456789-'
    let charactersLength = characters.length
    for (let i = 0; i < 8; i++) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }

    return result
  },
  redirectToNewBoard() {
    window.location.href = '/' + createNewRoute()
  }
}

const routes = [
  {
    path: '/',
    redirect: '/' + routeHelpers.createNewRoute()
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
      const id = to.params.id
      if (id.match(/[a-z]/)) return next({ path: id.toUpperCase() })

      const isValid = routeHelpers.isValidRoutePath(id)
      if (isValid) return next()

      next({ path: '/404', query: {error: 'invalid-id'} })
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
