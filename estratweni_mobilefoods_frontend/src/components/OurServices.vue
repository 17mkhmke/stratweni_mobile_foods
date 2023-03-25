<template>
  <section class="container" id="Services">
    <div class="position-relative d-flex align-items-center justify-content-center">
      <h3 class="display-2 text-uppercase text-black">Our Services</h3>
    </div>
    <!-- <h3 class="mb-4"></h3> -->
    <div class="container">
      <div class="row underCard">
        <div v-for="(item, index) in resume" :key="index" class="col-md-6 col-lg-3 mb-4">
          <img :src="item.image" class="card-img-top pb-3" alt="Crystal NFT">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title font-weight-bold text-black">{{ item.Header }}</h5>
              <p class="card-text text-black">{{ item.instruction }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'ServicesComponent',
  data () {
    return {
      resume: [
        {
          Header: 'Free Login & Register',
          instruction: 'Go into the Login on top of the navbar and login and start ordering, if you do not have an account please register and login to enjoy',
          image: 'https://i.postimg.cc/tJGg6nWR/DALL-E-2023-03-15-11-38-31-Login-and-signup-dark-grey-and-gold-colour-fastfood.png'
        },
        {
          Header: 'Eat In',
          instruction: 'We have an open and environmental friendly place away from home where the land lords kids will not ask you for food',
          image: 'https://i.postimg.cc/vHqcqTdh/eatIn.jpg'
        },
        {
          Header: 'Order',
          instruction: 'Enjoy your food at the comfort of your home we will bring it to you for free only within 15km raidus if it is more we will charge R20',
          image: 'https://i.postimg.cc/wxsz8BJF/Delivery.jpg'
        },
        {
          Header: 'Cannot afford it?',
          instruction: 'We have available vaccancies where you will be trained to work so you will be able to afford our delicous mouth watering menu',
          image: 'https://i.postimg.cc/NjX2KtWx/Hiring.jpg'
        }
      ]
    }
  }
}
</script>
<style scoped>
section {
  background-color: lightgoldenrodyellow;
}
.card {
  border: none;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
}
.card:hover {
 box-shadow: 0px 0px 30px 1px purple;
}

.underCard{
  padding-bottom: 150px;
}
.card-img-top {
  width: 13rem;
}

h3 {
  font-family: 'Fjalla One', sans-serif;
  color: white;
  padding-top: 50px;
  padding-bottom: 80px;
  text-decoration-line: underline;
}
.card-title {
  font-size: 1.2rem;
}
.card-text {
  font-size: 1rem;
}
</style>
