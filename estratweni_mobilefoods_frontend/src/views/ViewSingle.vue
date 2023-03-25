<template>
  <div class="table-responsive-sm">
    <table class="table table-striped table-hover table-bordered border-4">
      <thead class="text-black bg-warning">
        <tr>
          <th scope="col">Product Image</th>
          <th scope="col">Food Name</th>
          <th scope="col">Price</th>
          <th scope="col">Description</th>
          <th scope="col">Category</th>
          <th scope="col">Add to Cart</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="product">
          <td scope="row" class="col-md-2"><img :src="product.img_url" :alt="product.menu_name" style="height:16rem ;"/></td>
          <td class="col-md-2">{{ product.menu_name }}</td>
          <td class="col-md-2">R{{ product.price }}</td>
          <td class="col-md-3">{{ product.menu_description }}</td>
          <td class="col-md-2">{{ product.menu_category }}</td>
          <td class="col-md-1"><button class="btn bg-warning"><i class="fa-solid fa-cart-shopping"></i></button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  computed: {
    product: function () {
      return this.$store.state.product
    }
  },
  created () {
    this.$store.dispatch('showProduct', this.$route.params.id)
  }
}

</script>
