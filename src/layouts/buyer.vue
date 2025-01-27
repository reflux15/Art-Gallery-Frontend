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
import BuyerAppBar from "@/components/buyer/BuyerAppBar.vue";
import BuyerNavBar from "@/components/buyer/BuyerNavBar.vue";
</script>
