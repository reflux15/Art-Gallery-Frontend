<template>
  <v-navigation-drawer
                       permanent
                       theme="light"
  >
    <v-list nav>
      <v-list-item prepend-icon="mdi-home" title="Home" to="/buyer"></v-list-item>
      <v-list-item prepend-icon="mdi-cart" title="My Orders" to="/buyer/cart"></v-list-item>
      <v-list-item prepend-icon="mdi-heart" title="Favourites" to="/buyer/favourites"></v-list-item>
      <v-list-item prepend-icon="mdi-palette" title="Art Styles" @click="openDialog"></v-list-item>
      <v-list-item prepend-icon="mdi-account-music" title="Artists" to="/buyer/artists"></v-list-item>
    </v-list>
  </v-navigation-drawer>
  <div class="text-center pa-4">
    <v-dialog
      v-model="dialog"
      max-width="50%"
    >
      <v-card
        prepend-icon="mdi-palette"
        text="Choose your art style and subjects"
        title="Art Styles & Subjects">

        <v-row>
          <v-col cols="6" class="text-center d-flex flex-column align-center justify-center">
            <h1>Art Styles</h1>
            <v-radio-group>
              <v-list>
                <v-list-item v-for="item in artStyles" :key="item">
                  <div class="d-flex flex-row align-center">
                    <v-radio v-model="item.selected" :label="item.name" :value="item.name" class="d-inline d-flex"></v-radio>
                  </div>
                </v-list-item>
              </v-list>
            </v-radio-group>

          </v-col>
          <v-col cols="6">
            <h1>Art Subjects</h1>
            <v-list>
              <v-list-item v-for="item in artSubjects" :key="item">
                <div class="d-flex flex-row align-center">
                  <v-checkbox v-model="item.selected" class="d-inline d-flex"></v-checkbox>
                  <v-label class="d-inline">{{item.name}}</v-label>
                </div>
              </v-list-item>
            </v-list>
          </v-col>
        </v-row>

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
      artSubjects: [
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
        {
          name: "Vintage",
          selected: false,
        },
        {
          name: "Architecture",
          selected: false,
        },
        {
          name: "Black & White",
          selected: false,
        },
      ],
      artStyles: [
        {
          name: "Paintings",
          selected: false,
        },
        {
          name: "Digital Art",
          selected: false,
        },
        {
          name: "Photography",
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
