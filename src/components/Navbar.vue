<template>

  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link class="navbar-item"  to="/">Vue Firebase Starter</router-link>
      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-end">
        <div class="navbar-item">
          <router-link linkActiveClass="is-active" class="navbar-item" v-if="user.loggedIn" to="/profile">Profile</router-link>
          <router-link linkActiveClass="is-active" v-if="!user.loggedIn" class="navbar-item" to="/signin">Signin</router-link> 
          <a @click="logout" v-if="user.loggedIn" class="navbar-item">Sign out</a> 
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
import { mapGetters } from "vuex";
export default {
  name: 'navbar',
  methods: {
    logout() {
      firebase
      .auth()
      .signOut()
      .then(() => {
        this.$router.go(0);
      });
    }
  },
  computed: {
    ...mapGetters({
      user: "user"
    })
  }
}
</script> 