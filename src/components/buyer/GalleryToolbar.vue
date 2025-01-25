<template>
  <v-app-bar title="Art Gallery"  app color="#7657c3">
    <!-- Horizontal navigation list -->
    <v-spacer></v-spacer>
    <v-btn
      v-for="(item, index) in navItems"
      :key="index"
      :to="item.to"
      text
      :prepend-icon="item.icon"
    >
      {{ item.title }}
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: 'AppNavbar',
  data() {
    return {
      // Define the navigation items
      navItems: [
        { icon: 'mdi-account-box', title: 'My Profile', to: '/buyer/' },
        { icon: 'mdi-cart', title: 'My Cart', to: '/buyer/cart' },
        { icon: 'mdi-heart', title: 'My Favorites', to: '/buyer/favorites' }
      ]
    };
  }
};
</script>

<style scoped>
/* Custom styles for the navigation bar */
.v-app-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
}

.v-btn {
  margin: 0 15px;
}
</style>
