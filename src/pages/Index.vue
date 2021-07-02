<template>
  <div class="q-pa-md row items-start q-gutter-md">
  </div>
</template>
<script>
import { defineComponent, computed, onMounted, onUnmounted, ref, Vue } from 'vue';
import { mapActions, mapState, useStore } from 'vuex'
import testModule from '../store/test'

export default defineComponent({
  name: 'PageIndex',
  setup () {
    const $store = useStore()
    // register a module `testModule`
    $store.registerModule('test', testModule)
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

<style lang="sass" scoped>
.my-card
  width: 100%
</style>