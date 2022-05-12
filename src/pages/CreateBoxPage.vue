<script>
import axios from 'axios'

export default {
  name: 'CreateBoxPage',
  data () {
    return {
      loading: false,
      formData: {
        name: '',
        volume: ''
      }
    }
  },

  methods: {
    async postBox () {
      this.loading = true
      const response = await axios
        .post('http://127.0.0.1:8000/boxes/', this.formData, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
      if (response.status === 201) {
        this.$router.push({
          name: 'boxes'
        })
        return
      }
      this.loading = false
    },
    onReset () {
      this.formData = {
        name: '',
        volume: ''
      }
    }
  }
}
</script>

<template>
  <div class="window-height window-width row justify-center items-center" >

    <q-form
      @submit="postBox"
      @reset="onReset"
      method="POST"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="formData.name"
        label="Box name"
        id="name"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

      <q-input
        filled
        type="number"
        step=".01"
        v-model="formData.volume"
        label="Volume"
        id="volume"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Please type box volume',
          val => val > 0 && val < 10000 || 'Please type a real volume'
        ]"
      />

      <div>
        <q-btn label="Create" type="submit" color="standart" text-color="black"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>

  </div>
</template>
