<template>
  <div>
    <h1 class="display-1 text-black"> ADMINISTRATION PAGE</h1>
    <UserTable :isLoading="isLoading" />
    <SpinnerComponent v-if="isLoading" />
    <ProductTable :isLoading="isLoading" />
    <SpinnerComponent v-if="isLoading" />
    <VacancyTable :isLoading="isLoading"/>
    <SpinnerComponent v-if="isLoading" />
  </div>
</template>

<script>
import ProductTable from '@/components/ProductTable.vue'
import SpinnerComponent from '@/components/SpinnerComponent.vue'
import UserTable from '@/components/UserTable.vue'
import VacancyTable from '@/components/VacancyTable.vue'

export default {
  components: {
    SpinnerComponent,
    UserTable,
    ProductTable,
    VacancyTable
  },
  data () {
    return {
      isLoading: true
    }
  },
  mounted () {
    // Simulate loading of tables from database
    setTimeout(() => {
      this.isLoading = false
    }, 2000)
  }
}
</script>
