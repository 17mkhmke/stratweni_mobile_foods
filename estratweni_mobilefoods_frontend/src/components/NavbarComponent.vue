<template>
  <nav class="navbar navbar-expand-lg bg-dark sticky-top">
      <div class="container-fluid">
        <img src="https://i.postimg.cc/FRCX0htk/Capstone-Logo.jpg" class="logo" alt="logo" loading="lazy">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-auto" style="margin-left: auto;">
                  <li class="nav-item">
                      <router-link to="/" class="nav-link text-white">Home</router-link>
                  </li>
                  <li class="nav-item">
                      <router-link to="/about" class="nav-link text-white">ABOUT</router-link>
                  </li>
                  <li class="nav-item">
                      <router-link to="/menu" class="nav-link text-white">MENU</router-link>
                  </li>
                  <li class="nav-item">
                      <router-link to="/cart" class="nav-link text-white">CART</router-link>
                  </li>
                  <li class="nav-item">
                      <router-link to="/admin" class="nav-link text-white">ADMIN</router-link>
                  </li>
                  <li class="nav-item">
                      <router-link to="/vacancies" class="nav-link text-white">Jobs</router-link>
                  </li>
                  <li class="nav-item">
                      <router-link to="/contact" class="nav-link text-white">Contact</router-link>
                  </li>
                  <li class="nav-item" id="user">
                      <router-link to="/login" class="nav-link text-white">Login</router-link>
                  </li>
                  <li class="nav-item" id="user">
                      <router-link to="/register" class="nav-link text-white">Register</router-link>
                  </li>
              </ul>
          </div>
      </div>
  </nav>
</template>

<script>
export default {
}
</script>

<style scoped>
.nav-link {
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  padding: 0.5rem 5rem 1rem 5rem;
  border-radius: 2rem;
  transition: all 0.3s ease;
  font-weight: lighter;
  font-size: larger;
  position: relative;
  padding-bottom: 10px;
}

.navbar-expand-lg .navbar-collapse {
    justify-content: center;
}

.nav-link::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: gold;
  transform: scaleX(0);
  transition: transform 0.3s ease;
  transform-origin: left;
}

.nav-link:hover::after {
  transform: scaleX(1);
  color: #000000;
}

.nav-link:hover{
  color: white;
}
.logo{
  width:8rem;
}
#user{
  float: right;
  background: gold;
  margin-left: 9%;
}

</style>
