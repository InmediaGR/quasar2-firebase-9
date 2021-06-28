<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card">
      <q-card-section>
        <div class="text-h6">Dynamic registering and unregistering vuex module into component</div>
        <q-btn @click="increment" color="white" text-color="black" label="Click to increase state number value" />
      </q-card-section>
    </q-card>

    <q-card
      class="my-card text-white"
      style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
    >
      <q-card-section>
        <div class="text-h6">  {{ count }} </div>
        <div class="text-subtitle2">by Bang Nguyen</div>
      </q-card-section>

      <q-card-section class="q-pt-none">

      </q-card-section>
    </q-card>

  
  </div>
</template>
<script>
import { defineComponent, computed, onMounted, onUnmounted, ref, Vue } from 'vue';
import { mapActions, mapState, useStore } from 'vuex'
import testModule from '../store/test'
import lazyModule from '../utils/lazyModule'
export default defineComponent({
  name: 'PageIndex',
  setup () {
    const $store = useStore()
    lazyModule($store, 'test', testModule)
  },
  computed: {
    ...mapState('test', {
    count  : state => state.count
    })
  },
  methods: {
  ...mapActions('test', ['increment'])
  },
   

})

</script>

<style lang="sass" scoped>
.my-card
  width: 100%
</style>cript>

<style lang="sass" scoped>
.my-card
  width: 100%
</style>