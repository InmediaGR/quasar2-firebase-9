<template>
  <q-layout view="hHh lpR fFf">

    <q-header reveal bordered class="header" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          Tesior
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab to="/page1"><q-icon class="icon-tabs" :name="homeIcon"/></q-route-tab>
        <q-route-tab to="/page2" label="Page Two" />
        <q-route-tab to="/page3" label="Page Three" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>
<script>
import { defineComponent } from 'vue';
import { ionHomeOutline } from '@quasar/extras/ionicons-v5'
export default defineComponent({
  name: 'LayoutHome',
  setup () {
    const homeIcon = ionHomeOutline
    return {
      homeIcon
    }
  },
})

</script>
<style lang="sass">
  .header
    color: #444
    background-color: #fff
  .icon-tabs
    font-size: 1.7rem
</style>