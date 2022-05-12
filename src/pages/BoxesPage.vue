<script>
import axios from 'axios'

export default {
  name: 'BoxesPage',
  data () {
    return {
      loading: false,
      boxes: []
    }
  },
  methods: {
    async getBoxes () {
      this.loading = true
      const response = await axios.get('http://127.0.0.1:8000/boxes/')
      this.boxes = response.data.results
      this.loading = false
    }
  },
  async beforeRouteEnter (to, from, next) {
    next(async vm => {
      await vm.getBoxes()
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
        {label: 'Volume', field: 'volume', name: 'volume', align: 'left'}
      ]"
      :rows="boxes"
      :rows-per-page-options="[0]"
    />
    <div class="q-pa-md q-gutter-sm" align="right">
      <q-btn :to="{name: 'box/create'}" color="white" text-color="black" label="Create Box" />
    </div>
  </div>
</template>
