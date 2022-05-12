<script>
import axios from 'axios'

export default {
  name: 'ProductsPage',
  data () {
    return {
      loading: false,
      products: []
    }
  },
  methods: {
    async getProducts () {
      this.loading = true
      const response = await axios.get('http://127.0.0.1:8000/products/')
      this.products = response.data.results
      this.loading = false
    }
  },
  async beforeRouteEnter (to, from, next) {
    next(async vm => {
      await vm.getProducts()
    })
  }
}
</script>

<template>
  <div
    class="columns is-multiline is-centered"
    style="margin-top: 3.25rem; margin-left: 3.75rem; margin-right: 2.75rem"
  >
    <q-table
      flat
      dense
      bordered
      separator="cell"
      row-key="id"
      :loading="loading"
      :columns="[
        {label: 'ID', field: 'id', name: 'id', align: 'left'},
        {label: 'Name', field: 'name', name: 'name', align: 'left'},
        {label: 'Length', field: 'length', name: 'length', align: 'left'},
        {label: 'Height', field: 'height', name: 'height', align: 'left'},
        {label: 'Width', field: 'width', name: 'width', align: 'left'}
      ]"
      :rows="products"
      :rows-per-page-options="[0]"
    />
    <div class="q-pa-md q-gutter-sm" align="right">
      <q-btn :to="{name: 'product/create'}" color="white" text-color="black" label="Create Product" />
    </div>
  </div>
</template>
