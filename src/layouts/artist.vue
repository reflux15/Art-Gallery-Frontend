<script>
import ArtistNavBar from "@/components/navbars/ArtistNavBar.vue";
import AppNavbar from "@/components/navbars/BuyerAppBar.vue";

export default {
  name: "artist",
  components: {AppNavbar, ArtistNavBar}
}
</script>

<template>
  <v-main>
    <app-navbar></app-navbar>
    <artist-nav-bar></artist-nav-bar>
    <router-view></router-view>
  </v-main>
</template>

<style scoped>

</style>
