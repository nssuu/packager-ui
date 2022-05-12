<script>
import axios from 'axios'

export default {
  name: 'CreatePackagePage',
  data () {
    return {
      loading: false,
      products: [],
      options: [],
      formData: {
        product_id: null
      },
      errors: {}
    }
  },
  methods: {
    async getProducts () {
      this.loading = true
      const response = await axios.get('http://127.0.0.1:8000/products/')
      this.products = response.data.results
      this.loading = false
    },

    async filterProducts (value, update, abort) {
      const res = await axios.get('http://127.0.0.1:8000/products?search=' + value)
      update(() => {
        this.options = res.data.results
      })
    },

    async postPackage () {
      this.loading = true
      const response = await axios.post(
        'http://127.0.0.1:8000/packages/',
        this.formData,
        {
          validateStatus: null,
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
      if (response.status === 201) {
        this.packages = response.data
        this.$router.push({
          name: 'packages'
        })
        this.loading = false
        this.errors = {}
      } else {
        this.errors = response.data
      }
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
  <div class="q-pa-md">
    <div
      class="row"
    >
      <div
        class="col-md-6"
      >
        <q-form
          @submit="postPackage"
          method="POST"
          class="q-gutter-md"
        >
          <q-select
            filled
            v-model="formData.product_id"
            use-input
            hide-selected
            fill-input
            emit-value
            map-options
            input-debounce="300"
            label="Choose a product"
            :options="options"
            option-value="id"
            option-label="name"
            :error="!!errors?.product_id"
            :error-message="errors?.product_id?.[0]"
            @filter="filterProducts"
          >
            <template v-slot:no-option>
              <q-item>
                <q-item-section class="text-grey">
                  No results
                </q-item-section>
              </q-item>
            </template>
          </q-select>
          <div>
            <q-btn label="Create" type="submit" color="standart" text-color="black"/>
          </div>
        </q-form>
      </div>
    </div>
  </div>
</template>
