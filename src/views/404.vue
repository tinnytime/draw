<template><div>
  <h1>404</h1>

  <p>Page not found.</p>
  <p v-if="this.$route.query.error === 'invalid-id'">
    Invalid ID - the drawing ID must be between 5 and 50 characters in length and contain only letters, numbers and - (dash).
  </p>
  <p><a href="/public-wall">Go to the public wall</a> or <button @click="newBoard()">create a new drawing</button></p>
</div></template>

<script>

import { routeHelpers } from '@/router'

export default {
  methods: {
    newBoard() {
      routeHelpers.redirectToNewBoard()
    }
  }
}
</script>