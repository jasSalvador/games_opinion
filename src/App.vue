<template>
  <div id="app">
    <NavbarComponent/>

    <router-view/>
  </div>
</template>

<script>
  import NavbarComponent from './components/NavbarComponent.vue'
  import Vue from "vue"
  export default Vue.extend({
    name: 'App',
    components: {
      NavbarComponent,
    }
  })
</script>


<style>

</style>
