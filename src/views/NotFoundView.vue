<template>
  <div class="text-center mx-auto py-5 not-found">
    <h1 class="py-5 text-light">404</h1>
    <h2 class="pb-5 text-light">Not Found</h2>
  </div>
</template>

<script>
import Vue from "vue"
  export default Vue.extend({
    name: 'NotFoundView',
});
</script>

<style>
  .not-found {
    background: linear-gradient(to right,  #f38af5 0%,#a83aa3 100%);
    min-height: 100vh;
}
  .not-found h1 {
    font-size: 12rem;
  }
</style>