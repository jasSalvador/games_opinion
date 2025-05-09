<template>
    <b-navbar toggleable="lg" class="bg-dark py-2">
    <b-navbar-brand to="/" class="link ms-3">🎧 Games opinion</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    </b-navbar>
</template>

<script>
import Vue from "vue"
    export default Vue.extend({
        name:"NavbarComponent"
    })
</script>

<style scoped>
    .link {
        color: #fff;
        text-decoration: none;
    }
    .link:hover {
        color: #a1a1a1;
    }
</style>
