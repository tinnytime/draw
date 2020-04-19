<template>
  <div class="hero is-light is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="container">
        <section class="card">
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img :src=img alt="Placeholder image">
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">{{name}}</p>
                <p class="subtitle is-6">{{email}}</p>
              </div>
            </div> 
          </div> 
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "@/firebaseinit";

export default {
  created(){
    this.name = firebase.auth().currentUser.displayName;
    this.img = firebase.auth().currentUser.photoURL;
    this.email = firebase.auth().currentUser.email;
  },
  data(){
    return{
      name: '',
      img: '',
      email: ''
    }
  }
}
</script>