<template>
  <v-navigation-drawer
    permanent
    theme="light"
  >
    <v-list nav>
      <v-list-item prepend-icon="mdi-palette" title="My Art" to="/artist/gallery"></v-list-item>
      <v-list-item prepend-icon="mdi-plus" title="Add" to="/artist/add"></v-list-item>
    </v-list>
  </v-navigation-drawer>

</template>

<script>
export default {
  name: "ArtistNavBar",
}

</script>

<style scoped>

</style>
