<template>
  <v-container>
    <v-row>
      <v-col cols="8">
        <h1>Artists</h1>
      </v-col>
      <v-col cols="4">
        <v-text-field
          v-model="searchBar"
          prepend-icon="mdi-magnify"
          label="Search"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <div class="d-flex flex-wrap">
          <artist-card :name="artist.name" v-for="artist in filteredArtists" :key="artist.name" />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ArtistCard from "@/components/artist/ArtistCard.vue";
import _ from "lodash";

export default {
  name: "ArtistsPage",
  components: {ArtistCard},
  data: () => {
    return {
      searchBar: "",
      artists: [
        {
          name: "Robin"
        },
        {
          name: "Mark"
        },
        {
          name: "Gother"
        },
        {
          name: "RVan"
        },
        {
          name: "Flavius"
        },
        {
          name: "Damian"
        },
      ]
    }
  },
  computed: {
    filteredArtists() {
      return this.artists.filter(artist => {
        return _.startsWith(artist.name.toLowerCase(), this.searchBar.toLowerCase())
      })
    }
  }
}
</script>

<style scoped>

</style>
