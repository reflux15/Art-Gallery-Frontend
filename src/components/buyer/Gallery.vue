<template>
  <v-container>
    <h1>hfbkasjhbfkshja</h1>
    <v-row>
      <!-- Loop through pictures array -->
      <v-col
        v-for="(picture, index) in pictures"
        :key="index"
        cols="12"
        md="4"
        class="d-flex justify-center"
      >
        <art-card :img="picture" title="My Title"></art-card>
<!--        <v-img-->
<!--          :src="picture"-->
<!--          max-height="600px"-->
<!--          max-width="600px"-->
<!--          class="rounded display-image"-->
<!--        ></v-img>-->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ArtCard from "@/components/buyer/ArtCard.vue";

export default {
  components: {ArtCard},
  data() {
    return {
      // Array of picture URLs
      pictures: [
        "https://images.unsplash.com/photo-1605460375648-278bcbd579a6",
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
        "https://images.unsplash.com/photo-1736616980443-537d3af09915?q=80&w=2581&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1710436000845-bb707af976a6?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1540206395-68808572332f",
        "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d",
      ],
    };
  },
};
</script>

<style>

</style>
