<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    >
    <div>
      {{ count }}
    </div>
    <q-btn @click="increment" color="white" text-color="black" label="Standard" />
  </q-page>
</template>

<script>
import { defineComponent, onMounted, onUnmounted, ref } from 'vue';
import { mapActions, mapState, useStore } from 'vuex'

export default defineComponent({
  name: 'PageIndex',
  setup () {
    const count = ref(0)
    const store = useStore({ /* options */ })
    onMounted(() => {
      // register a module `testModule`
      store.registerModule('test', {})
    })
    onUnmounted(() => {
      store.unregisterModule('test', {})
    })
    return {
      // access a state in computed function
      count: computed(() => store.state.count),
      increment: () => store.dispatch('test/increment')
    }
  }
  
})
</script>