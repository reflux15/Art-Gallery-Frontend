<template>
  <v-main>
    <buyer-app-bar></buyer-app-bar>
    <buyer-nav-bar></buyer-nav-bar>
    <router-view />
  </v-main>

  <AppFooter />
</template>

<script setup>
//
import BuyerAppBar from "@/components/navbars/BuyerAppBar.vue";
import BuyerNavBar from "@/components/navbars/BuyerNavBar.vue";
</script>
