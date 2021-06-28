<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    >
    <div>
      {{ count }} <br />
    </div>
    <q-btn @click="increment" color="white" text-color="black" label="Standard" />
  </q-page>
</template>

<script>
import { defineComponent, computed, onMounted, onUnmounted, ref, Vue } from 'vue';
import { mapActions, mapState, useStore } from 'vuex'
import testModule from '../store/test'

export default defineComponent({
  name: 'PageIndex',
  setup () {
    const $store = useStore()
    onMounted(() => {
    // register a module `testModule`
    $store.registerModule('test', testModule)
    }),
    onUnmounted(() => {
    $store.unregisterModule('test')
    })
    
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