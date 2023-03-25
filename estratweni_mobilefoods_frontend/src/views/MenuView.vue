<template>
  <div class="container-fluid">
    <h2 class="text-black">Fast Food Menu</h2>
  </div>
  <div class="wrapper">
    <div id="search-container">
      <div class="col-lg-5 m-auto text-center">
        <div class="buttons">
          <button
            :class="{ active: activeFilter === 'all' }"
            @click="filterProducts('all')"
          >
            All
          </button>
          <button
            :class="{ active: activeFilter === 'Burger' }"
            @click="filterProducts('Burger')"
          >
            BURGERS
          </button>
          <button
            :class="{ active: activeFilter === 'Roll' }"
            @click="filterProducts('Roll')"
          >
            ROLLS
          </button>
          <button
            :class="{ active: activeFilter === 'Grill' }"
            @click="filterProducts('Grill')"
          >
            GRILLS
          </button>
          <button
            :class="{ active: activeFilter === 'Platter' }"
            @click="filterProducts('Platter')"
          >
            PLATTERS
          </button>
          <button
            :class="{ active: activeFilter === 'Beverage' }"
            @click="filterProducts('Beverage')"
          >
            BEVERAGES
          </button>
        </div>
      </div>
    </div>
    <div class="card" v-for="prod in filteredProducts" :key="prod.menu_id" style="width: 18rem">
      <img :src="prod.img_url" class="card-img-top" :alt="prod.menu_name" />
      <div class="card-body">
        <h5 class="card-text text-black">{{ prod.menu_name }}</h5>
        <br />
        <!-- <p class="card-text">R{{ prod.price }}</p>
        <p class="card-text">{{ prod.menu_category }}</p>
        <p class="card-text">{{ prod.menu_description }}</p> -->
        <router-link :to="{ name: 'single', params: { id: prod.menu_id } }">
                            <a href="#" class="btn btn-warning">More Details</a>
                        </router-link>
      </div>
    </div>
      <!-- Single Product View -->
    <!-- <div v-if="showProduct">
      <h1>{{ selectedProduct.menu_name }}</h1>
      <img :src="selectedProduct.img_url" :alt="selectedProduct.menu_name"  style="width: 18rem"/>
      <p>Price: R{{ selectedProduct.price }}</p>
      <p>Category: {{ selectedProduct.menu_category }}</p>
      <p>Description: {{ selectedProduct.menu_description }}</p>
      <button @click="showProduct = false">Close</button>
    </div> -->
<SpinnerComponent/>
  </div>
  <br/>
</template>

<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import SpinnerComponent from '@/components/SpinnerComponent.vue'
export default {
  components: {
    SpinnerComponent
  },
  setup () {
    const store = useStore()
    store.dispatch('showProducts')
    const products = computed(() => store.state.products)
    const activeFilter = ref('all')
    const selectedProduct = ref(null)
    // const showProduct = ref(false)
    const filteredProducts = computed(() => {
      if (activeFilter.value === 'all') {
        return products.value
      } else {
        return products.value.filter(
          (product) => product.category === activeFilter.value
        )
      }
    })
    const filterProducts = (category) => {
      activeFilter.value = category
    }
    const viewProduct = (product) => {
      selectedProduct.value = product
      // showProduct.value = true
    }
    return {
      products,
      filteredProducts,
      filterProducts,
      activeFilter,
      selectedProduct,
      // showProduct,
      viewProduct
    }
  }
}
</script>

<style>
.wrapper {
  width: 95%;
  margin: 0 auto;
  background: lightgoldenrodyellow;
}
#search-container {
  margin: 1em 0;
  padding-top: 50px;
}
#search-container input:hover {
  border-bottom-color: gold;
}
.buttons button {
  padding: 1em 2.2em;
  background-color: transparent;
  border: 2px solid gold;
  border-radius: 50px;
  color: gold;
  cursor: pointer;
  font-size: large;
  text-align: center;
  align-items: center;
  align-self: center;
}
.buttons button:hover {
  border: none;
  background-color: #333;
  color: white;
}
.active {
  background-color: transparent;
  color: gold;
}
.card {
  margin-top: 2em;
  display: inline-flex;
  width: 18rem;
  margin: 1rem;
}
.card-img-top {
  width: 286px;
  height: 300px;
  object-fit: cover;
}
</style>
