<template>
  <section class="h-100 gradient-form" style="background-color: lightyellow;">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-60">
      <div class="col-xl-10">
        <div class="card rounded-3 text-black">
          <div class="row g-0">
            <div class="col-lg-6">
              <div class="card-body p-md-5 mx-md-4 bg-dark-subtle">

                <div class="text-center">
                  <img src="https://i.postimg.cc/FRCX0htk/Capstone-Logo.jpg"
                    style="width: 185px;" alt="logo">
                  <h4 class="mt-1 mb-5 pb-1">LOGIN</h4>
                </div>

                <form>
                  <div class="form-outline mb-4">
                    <input type="email" class="box" placeholder="enter your email" required v-model="email">
                  </div>
                  <div class="form-outline mb-4">
                    <input type="password" class="box" placeholder="enter your password" required v-model="password">
                  </div>
                  <button type="button" class="btn btn-outline-warning" @click="login">login</button>
                  <div class="d-flex align-items-center justify-content-center pb-4">
                    <p class="mb-0 me-2">Don't Have an account?</p>
                    <router-link :to="{ name: 'register' }">
                            <a href="#" class="btn btn-primary">Register</a>
                        </router-link>
                  </div>

                </form>

              </div>
            </div>
            <div class="col-lg-6 d-flex align-items-center gradient-custom-2">
              <div class="text-white px-3 py-4 p-md-5 mx-md-4">
                <h4 class="mb-4">Enjoy!</h4>
                <p class="small mb-0">If it is not lekker we are more then happy to take it back</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>
<script>
export default {
  computed: {
    message () {
      return this.$store.state.message
    }
  },
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async login () {
      const userData = {
        email: this.email,
        password: this.password
      }
      try {
        await this.$store.dispatch('login', userData)
        this.$router.push('/home')
      } catch (error) {
        console.log(error.message)
      }
    }
  }
}
</script>
<style>
.gradient-custom-2 {
background: #fccb90;
background: -webkit-linear-gradient(to right, gold, lightgoldenrodyellow, lightyellow, #333);
background: #333;
}

@media (min-width: 768px) {
.gradient-form {
height: 100vh !important;
}
}
@media (min-width: 769px) {
.gradient-custom-2 {
border-top-right-radius: .3rem;
border-bottom-right-radius: .3rem;
}
}
</style>
