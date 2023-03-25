/* eslint-disable */
<template>
  <div class="container-fluid">
      <h1 class="text-black">USER CRUD</h1>
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#expenseModal">
ADD USER
</button>

<div class="modal fade" id="UserModal" tabindex="-1" aria-labelledby="UserModalLabel" aria-hidden="true">
<div class="modal-dialog">
  <div class="modal-content">
    <div class="modal-header">
      <h1 class="modal-title fs-5" id="userModalLabel">Add the User</h1>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
      <form  @submit.prevent="addUser">
      <div class="user-box">
      <input type="text" required v-model="payload.first_name">
      <label>First Name</label>
    </div>
    <div class="user-box">
      <input type="text" required v-model="payload.last_name">
      <label>Last Name</label>
    </div>
    <div class="user-box">
      <input type="password" required v-model="payload.password">
      <label>Password</label>
    </div>
    <div class="user-box">
      <input type="email" required v-model="payload.email">
      <label>Email</label>
    </div>
    <div class="user-box">
      <input type="text" required v-model="payload.user_role">
      <label>User Role</label>
    </div>
    <div class="user-box">
      <input type="text" required v-model="payload.user_image">
      <label>Image URL</label>
    </div>
    <div class="user-box">
      <input type="text" required v-model="payload.phone_number">
      <label>Phone Number</label>
    </div>
    <div class="user-box">
      <input type="date" required v-model="payload.created_at">
      <label>Created At</label>
    </div>
    <button type="submit" class="btn btn-outline-warning">Add Human</button>
  </form>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    </div>
  </div>
</div>
</div>
      <div class="search-bar">
          <input type="text" placeholder="Search User..." v-model="searchTerm"/>
          <button >Search</button>
        </div>
        <!-- <div class="card" v-for="prod in products" :key="prod.id" style="width: 18rem;"> -->
          <div class="table-responsive">
      <table class="table table-striped table-hover">
          <thead class="tableHead text-black">
              <tr>
                <th>UserID</th>
                  <th>Name</th>
                  <th>Surname</th>
                  <th>email</th>
                  <th>User Role</th>
                  <th>Image</th>
                  <th>Phone Number</th>
                  <th>Updated At</th>
                  <th>Edit & Del</th>
              </tr>
          </thead>
          <tbody>
            <tr v-for="user in filteredUsers" :key="user.user_id">
              <th scope="row">{{ user.user_id }}</th>
              <td>{{ user.first_name }}</td>
              <td>{{ user.last_name }}</td>
              <td>{{ user.email }}</td>
              <td>{{ user.user_role }}</td>
              <img :src="user.user_image" :alt="user.first_name" style="height:10rem ;">
              <td>{{ user.phone_number }}</td>
              <td>{{ user.updated_at }}</td>
              <td><button @click="deleteUser(user.user_id)" style="width: 3rem;" class="btn bg-danger">
                <i class="fa-solid fa-trash"></i>
              </button></td>
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

@media (max-width: px) {
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
    filteredUsers () {
      const searchTerm = this.searchTerm.trim().toLowerCase()
      if (!searchTerm) {
        return this.users
      }

      return this.users.filter(user =>
        user.first_name.toLowerCase().includes(searchTerm) ||
        user.last_name.toLowerCase().includes(searchTerm) ||
        user.user_role.toLowerCase().includes(searchTerm)
      )
    }
  },
  methods: {
    deleteUser (UserID) {
      this.$store.dispatch('deleteUser', UserID)
    }
  },
  setup () {
    const store = useStore()
    store.dispatch('showUser')
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
    const addUser = () => {
      store.dispatch('registration', payload)
      store.dispatch('showUser')
    }
    const users = computed(() => store.state.user)
    return {
      users,
      payload,
      addUser
    }
  }
}
</script>
