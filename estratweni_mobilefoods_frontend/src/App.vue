<template>
   <navbar-component/>
  <router-view/>
  <footer-component/>
</template>
<script>
import FooterComponent from './components/FooterComponent.vue'
import NavbarComponent from './components/NavbarComponent.vue'
export default {
  components: {
    NavbarComponent,
    FooterComponent
  }
}
</script>
<style>
  @import url('https://fonts.googleapis.com/css2?family=ABeeZee&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=PT+Serif:ital@1&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;1,100&display=swap');
#app {
  font-family: Libre Baskerville, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav{
  font-weight: bold;
  color: white;
}

nav a.router-link-exact-active {
  color: gold;
}
</style>
