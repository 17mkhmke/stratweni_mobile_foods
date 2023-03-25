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
                  <h4 class="mt-1 mb-5 pb-1">REGISTER HERE</h4>
                </div>

                <form @submit.prevent="signUp">
                  <div class="form-outline mb-4">
                    <input type="text" class="box" placeholder="enter your first Name" required v-model="payload.first_name">
                  </div>
                  <div class="form-outline mb-4">
                    <input type="text" class="box" placeholder="enter your Surname" required v-model="payload.last_name">
                  </div>
                  <div class="form-outline mb-4">
                    <input type="password" class="box" placeholder="enter your password" required v-model="payload.password">
                  </div>
                  <div class="form-outline mb-4">
                    <input type="email" class="box" placeholder="enter your email" required v-model="payload.email">
                  </div>
                  <!-- <div class="form-outline mb-4">
                    <input type="text" class="box" required v-model="payload.user_role">
                  </div> -->
                  <div class="form-outline mb-4">
                    <input type="text" class="box" placeholder="Image URL" required v-model="payload.user_image">
                  </div>
                  <div class="form-outline mb-4">
                    <input type="text" class="box" placeholder="Cellphone Number" required v-model="payload.phone_number">
                  </div>
                  <div class="form-outline mb-4">
                    <input type="date" class="box" required v-model="payload.created_at">
                  </div>
                  <div class="text-center pt-1 mb-5 pb-1">
                    <button type="submit" class="btn btn-outline-warning" @click="showAlert">Register</button>
                  </div>

                  <div class="d-flex align-items-center justify-content-center pb-4">
                    <p class="mb-0 me-2">Already Have an account</p>
                    <router-link :to="{ name: 'login' }">
                            <a href="#" class="btn btn-primary">Login</a>
                        </router-link>
                  </div>

                </form>

              </div>
            </div>
            <div class="col-lg-6 d-flex align-items-center gradient-custom-2">
              <div class="text-white px-3 py-4 p-md-5 mx-md-4">
                <h4 class="mb-4">We value your privacy</h4>
                <p class="small mb-0">We will never share your details with anyone. Your emails and passwords is safely secured with bcrypt technologies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
</template>
<script>
import { computed } from '@vue/runtime-core'
import { useStore } from 'vuex'
export default {
  setup () {
    const payload = {
      first_name: '',
      last_name: '',
      password: '',
      email: '',
      user_role: 'User',
      user_image: '',
      phone_number: '',
      created_at: ''
    }

    const store = useStore()
    const signUp = () => {
      store.dispatch('registration', payload)
      store.dispatch('showUser')
    }
    const userMsg =
    computed(() => store.state.message)
    return {
      payload,
      userMsg,
      signUp
    }
  }
}
</script>
<style scoped>
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
