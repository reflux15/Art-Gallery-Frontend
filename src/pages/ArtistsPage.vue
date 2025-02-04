<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Artists</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <div class="d-flex flex-wrap">
          <artist-card  v-for="i in 10" :key="i"/>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ArtistCard from "@/components/artist/ArtistCard.vue";

export default {
  name: "ArtistsPage",
  components: {ArtistCard}
}
</script>

<style scoped>

</style>
