<template>
  <div class="container-fluid">
      <h1 class="text-black">PRODUCT CRUD</h1>
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#expenseModal">
ADD Product
</button>
<div class="modal fade" id="expenseModal" tabindex="-1" aria-labelledby="expenseModalLabel" aria-hidden="true">
<div class="modal-dialog">
  <div class="modal-content">
    <div class="modal-header">
      <h1 class="modal-title fs-5" id="expenseModalLabel">Add a product</h1>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
      <form @submit.prevent="addProduct">
      <div class="user-box">
      <input type="text" required v-model="payload.menu_name">
      <label>Menu Name</label>
    </div>
    <div class="user-box">
      <input type="decimal" required v-model="payload.price">
      <label>Price</label>
    </div>
    <div class="user-box">
      <input type="text" required v-model="payload.img_url">
      <label>Image URL</label>
    </div>
    <div class="user-box">
      <input type="text" required v-model="payload.menu_category">
      <label>Menu Category</label>
    </div>
    <div class="user-box">
      <input type="text" required v-model="payload.menu_description">
      <label>Menu Description</label>
    </div>
    <div class="user-box">
      <input type="text" required v-model="payload.menu_type">
      <label>Menu Type</label>
    </div>
    <div class="user-box">
      <input type="date" required v-model="payload.created_at">
      <label>Created At</label>
    </div>
    <button type="submit" class="btn btn-outline-warning">Add Menu</button>
  </form>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    </div>
  </div>
</div>
</div>
      <div class="search-bar">
        <input type="text" placeholder="Search Product..." v-model="searchTerm" />
          <button>Search</button>
        </div>
        <!-- <div class="card" v-for="prod in products" :key="prod.id" style="width: 18rem;"> -->
          <div class="table-responsive">
      <table class="table table-striped table-hover">
          <thead class="tableHead text-black">
              <tr>
                <th>MenuID</th>
                  <th>Menu Name</th>
                  <th>Price</th>
                  <th>Image</th>
                  <th>Category</th>
                  <th>Description</th>
                  <th>Menu Type</th>
                  <th>Created At</th>
                  <th>Updated At</th>
                  <th>Edit & Del</th>
              </tr>
          </thead>
          <tbody>
            <tr v-for="product in filteredProducts" :key="product.menu_id">
              <th scope="row">{{ product.menu_id }}</th>
              <td>{{ product.menu_name }}</td>
              <td>{{ product.price }}</td>
              <img :src="product.img_url" :alt="product.menu_name" style="height:10rem ;">
              <td>{{ product.menu_category }}</td>
              <td>{{ product.menu_description }}</td>
              <td>{{ product.menu_type }}</td>
              <td>{{ product.created_at }}</td>
              <td>{{ product.updated_at }}</td>
              <td><button @click="deleteProduct(index)" style="width: 3rem;" class="btn bg-danger
                "><i class="fa-solid fa-trash"></i></button></td>
            </tr>
          </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.table-responsive {
  overflow-x: hidden;
}
  .container-fluid {
    /* margin-top: 3rem;
    margin-bottom: 3rem; */
    padding-bottom: 10rem;
    background: lightgoldenrodyellow;

  }

  .search-bar {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem;
    border-radius: 5px;
    border-radius: 1rem 0 0 1rem;
    background-color: #4c008225;
    color: gold;
  }

  .search-bar input[type="text"] {
    padding: 0.5rem;
  }
  .search-bar button {
    padding: 0.5rem;
    border-radius: 0 0.25rem 0.25rem 0;
    border: none;
    background-color: #000000;
    color: #ffffff;
  }

  .tableHead {
    background-color: rgb(255, 255, 255);
  }
  .user-box {
    position: relative;
    margin-bottom: 1.5rem;
  }
  .user-box label {
    position: absolute;
    top: 0;
    left: 0;
    font-size: 1rem;
    padding: 0.625rem 0.75rem;
    color: #333;
    background-color: #fff;
    transition: all 0.3s ease;
  }
  .modal-header {
    border: none;
  }
  label{
      color: black;
    }
    .registration-form {
      width: 500px;
      margin: 50px auto;
      background-color: #f9f9f9;
      padding: 30px;
      border-radius: 5px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      font-family: 'Fjalla One', sans-serif;
    }
    h1 {
      text-align: center;
      margin-top: 0;
    }
    .form-group {
      margin-bottom: 20px;
    }
    .btn {
      display: block;
      margin: auto;
      width: 10rem;
      padding: 10px;
      background-color: gold;
      color: #fff;
      border: none;
      border-radius: 5px;
      font-size: 16px;
      cursor: pointer;
    }

    .btn:hover {
      background-color: black;
    }
    .table {
  width: 100%;
  margin-bottom: 1rem;
  color: #212529;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  background-color: white;
  border-collapse: separate;
  border-spacing: 0;
  border-radius: 0.25rem;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.05);
}
.table th,
.table td {
  padding: 1rem;
  text-align: left;
  vertical-align: top;
  border-top: 1px solid #dee2e6;
}

.table th {
  font-weight: 600;
  background-color: #f5f5f5;
  border-bottom: 2px solid #dee2e6;
}

.table td {
  background-color: #fff;
  border-bottom: 1px solid #dee2e6;
}

@media (max-width: 767px) {
  .table-responsive {
    display: block;
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }

  .table th,
  .table td {
    white-space: nowrap;
  }
  .table td:before {
    display: block;
    font-weight: 600;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
  }
  .table td:last-child {
    border-bottom: 0;
  }
}
</style>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  data () {
    return {
      searchTerm: ''
    }
  },
  computed: {
    filteredProducts () {
      const searchTerm = this.searchTerm.trim().toLowerCase()
      if (!searchTerm) {
        return this.products
      }

      return this.products.filter(product =>
        product.menu_name.toLowerCase().includes(searchTerm) ||
        product.menu_category.toLowerCase().includes(searchTerm)
      )
    }
  },
  methods: {
    deleteProduct (index) {
      this.products.splice(index, 1)
    }
  },
  setup () {
    const store = useStore()
    store.dispatch('showProducts')
    const payload = {
      menu_name: '',
      price: '',
      img_url: '',
      menu_category: '',
      menu_description: '',
      menu_type: '',
      created_at: ''
    }
    const addProduct = () => {
      store.dispatch('addProduct', payload)
      store.dispatch('showProducts')
    }
    const products = computed(() => store.state.products)
    return {
      products,
      payload,
      addProduct
    }
  }
}
</script>
