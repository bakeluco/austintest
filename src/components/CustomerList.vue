<template>
  <div class="mt-75 layout-column justify-content-center align-items-center">
    <section class="layout-row align-items-center justify-content-center">
      <input type="text" class="large" placeholder="Name" v-model="customer" @keydown.enter="addCustomer"
             data-testid="app-input"/>
      <button type="submit"
              class="ml-30"
              @click.prevent="addCustomer"
              data-testid="submit-button">
        Add Customer
      </button>
    </section>
    <ul class="styled mt-50" data-testid="customer-list">
<!--      Use this section for rendering each customer as it contains the requisite test-id required for tests to pass-->
     <li class="slide-up-fade-in" v-for="(c, index) in customers" v-text="c" 
         :data-testid="`list-item${index}`" :key="`list-item${index}`">
     </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CustomerList",
  data(){
    return {
      customers : [],
      customer : undefined
    }
  },
  methods:{
    addCustomer(){
      if(!this.customer) return
      this.customers.push(this.customer)
      return this.customer = undefined
    }
  }
}
</script>

<style scoped>

</style>
