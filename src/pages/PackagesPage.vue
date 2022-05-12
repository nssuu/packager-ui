<script>
import axios from 'axios'

export default {
  name: 'PackagesPage',
  data () {
    return {
      loading: false,
      packages: []
    }
  },
  methods: {
    async getPackages () {
      this.loading = true
      const response = await axios.get('http://127.0.0.1:8000/packages/')
      this.packages = response.data.results

      this.loading = false
    }
  },
  async beforeRouteEnter (to, from, next) {
    next(async vm => {
      await vm.getPackages()
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
        {label: 'Box', field: 'box', name: 'box', align: 'left'},
        {label: 'Product', field: 'product', name: 'product', align: 'left'}
      ]"
      :rows="packages"
      :rows-per-page-options="[0]"
    >
      <template
        #body-cell-box="scope"
      >
        <q-td
          :props="scope"
        >
          {{ scope.value.name }} (Volume: {{ scope.value.volume }}&#13220;)
        </q-td>
      </template>

      <template
        #body-cell-product="scope"
      >
        <q-td
          :props="scope"
        >
          {{ scope.value.name }}
        </q-td>
      </template>
    </q-table>
    <div class="q-pa-md q-gutter-sm" align="right">
      <q-btn :to="{name: 'packages/create'}" color="white" text-color="black" label="Create Package" />
    </div>
  </div>
</template>
