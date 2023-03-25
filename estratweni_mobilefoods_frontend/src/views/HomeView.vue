<template>
  <div>
    <div class="row">
      <section id="home">
          <div class="py-7">
            <div class="col-md-6 col-sm-12 pt-5">
              <h1 class="animate__animated animate__backInLeft">Order in a flash, <br>satisfy your cravings fast!</h1>
            </div>
          </div>
      </section>
    </div>
    <div class="row">
      <OurServices/>
    </div>
  </div>
</template>
<script>
import OurServices from '@/components/OurServices.vue'

export default {
  components: {
    OurServices
  }
}
</script>

<style scoped>
/* ===================================Landing Page================================================= */
#home {
  background: url(https://i.postimg.cc/SNZ0gZVw/landing-CAPSTONE.jpg)no-repeat;
  background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
    /* position: relative; */
}
.btn1 {
    height: 45px;
    width: 35%;
    border: none;
    outline: none;
    background-color: white;
    color: white;
    font-weight: 700;
    border-radius: 60px;
}

h1 {
  font-size: 4.5rem;
  font-family: 'Fjalla One', sans-serif;
  padding-left: 120px;
  font-weight: 700;
  /* color: white; */
  /* color: linear-gradient(to right, #633980, #ffffff); */
  /* font-weight: 900; */
  text-transform: uppercase;
  background: -webkit-linear-gradient(lightgoldenrodyellow, rgb(255, 255, 255));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding-top: 50px;
}
/* ==============================================Our Services================================================================ */
#Product {
  background-color: #d3b4ea;
  position: relative; /* Add position relative to enable top spacing */
  top: 20vh; /* Add negative top spacing to push section up */
  padding-top: 150px;
}
/* .container1 h1 {
  color: #000000;
} */
@media screen and (max-width: 767px) {
  .col-md-6 {
    width: 100%;
  }
  .kreeD-Shape {
  height: 400px;
  margin-top: 200px;

  /* text-align: center; */
  /* margin-left: 150px; */

  /* margin: auto; */
  }

  h1 {
    padding-top: 0;
    font-size: 3rem;
    padding-left: 0;
    text-align: center;
  }
}
</style>
