<template>
  <v-navigation-drawer
                       permanent
                       theme="light"
  >
    <v-list nav>
      <v-list-item prepend-icon="mdi-cart" title="My Orders" to="/buyer/cart"></v-list-item>
      <v-list-item prepend-icon="mdi-heart" title="Favourites" to="/buyer/favourites"></v-list-item>
      <v-list-item prepend-icon="mdi-palette" title="Art Styles" @click="openDialog"></v-list-item>
      <v-list-item prepend-icon="mdi-account-music" title="Artists" to="/owner/artists"></v-list-item>
    </v-list>
  </v-navigation-drawer>
  <div class="text-center pa-4">
    <v-dialog
      v-model="dialog"

    >
      <v-card

        prepend-icon="mdi-palette"
        text="Choose your art style"
        title="Art Styles"
      >
        <v-list>
          <v-list-item v-for="item in artStyle" :key="item">
            <div class="d-flex flex-row align-center">
              <v-checkbox v-model="item.selected" class="d-inline d-flex"></v-checkbox>
              <v-label class="d-inline">{{item.name}}</v-label>
            </div>
          </v-list-item>
        </v-list>
        {{artStyle}}
        <template v-slot:actions>
          <v-btn
            class="ms-auto"
            text="Apply Filter"
            @click="dialog = false"
          ></v-btn>
        </template>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "BuyerNavBar",
  data() {
    return {
      dialog: false,
      artStyle: [
        {
          name: "Landscapes",
          selected: false,
        },
        {
          name: "Florals and Plants",
          selected: false,
        },
        {
          name: "Abstract",
          selected: false,
        },
        {
          name: "Animals",
          selected: false,
        },
        {
          name: "Portraits",
          selected: false,
        },
      ]
    }
  },
  methods: {
    openDialog() {
      this.dialog = true;
    }
  }
}

</script>

<style scoped>

</style>
