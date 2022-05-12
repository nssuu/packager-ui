<script>
import axios from 'axios'

export default {
  name: 'CreateProductPage',
  data () {
    return {
      loading: false,
      formData: {
        name: '',
        length: '',
        height: '',
        width: ''
      }
    }
  },

  methods: {
    async postProduct () {
      this.loading = true
      const response = await axios
        .post('http://127.0.0.1:8000/products/', this.formData, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
      if (response.status === 201) {
        this.$router.push({
          name: 'products'
        })
        return
      }
      this.loading = false
    },
    onReset () {
      this.formData = {
        name: '',
        length: '',
        height: '',
        width: ''
      }
    }
  }
}
</script>

<template>
  <div class="window-height window-width row justify-center items-center" >

    <q-form
      @submit="postProduct"
      @reset="onReset"
      method="POST"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="formData.name"
        label="Product name"
        id="product-name"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

      <q-input
        filled
        type="number"
        step=".01"
        v-model="formData.length"
        label="Length"
        id="length"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Please type product length',
          val => val > 0 && val < 10000 || 'Please type a real length'
        ]"
      />

      <q-input
        filled
        type="number"
        step=".01"
        v-model="formData.height"
        label="Height"
        id="height"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Please type product height',
          val => val > 0 && val < 10000 || 'Please type a real height'
        ]"
      />

      <q-input
        filled
        type="number"
        step=".01"
        v-model="formData.width"
        label="Width"
        id="width"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Please type product width',
          val => val > 0 && val < 10000 || 'Please type a real width'
        ]"
      />

      <div>
        <q-btn label="Create" type="submit" color="standart" text-color="black"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>

  </div>
</template>
