<template>
  <q-layout view="lHh Lpr lFf">
    <q-header bordered class="bg-white text-black">
      <q-toolbar>
        <q-tabs shrink no-caps>
          <q-route-tab to="/" exact clickable class="text-black">
            Packager
          </q-route-tab>
        </q-tabs>

        <q-space/>
        <q-tabs shrink no-caps>
          <q-route-tab :to="{ name: 'products' }" exact clickable class="text-black">
            Products
          </q-route-tab>
          <q-route-tab :to="{ name: 'boxes' }" exact clickable class="text-black">
            Boxes
          </q-route-tab>
          <q-route-tab :to="{ name: 'packages' }" exact clickable class="text-black">
            Packages
          </q-route-tab>

      </q-tabs>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: {

  }

})
</script>
