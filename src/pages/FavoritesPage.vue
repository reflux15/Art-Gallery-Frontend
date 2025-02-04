<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Favourites</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        v-for="(item, _index) in favoritesStore.favouritedItems"
        :key="item.picture"
        cols="12"
        md="4"
        class="d-flex justify-center"
      >
        <art-card :img="item.picture"
                  :title="item.title"
                  :author="item.author"
                  :description="item.description"
        />

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ArtCard from "@/components/buyer/gallery/ArtCard.vue";
import {useFavoritesStore} from "@/stores/favorites.js";

export default {
  name: "FavoritesPage",
  components: {ArtCard},
  setup() {
    return {
      favoritesStore: useFavoritesStore()
    }
  }
}
</script>


<style scoped>

</style>
