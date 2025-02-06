<template>
  <v-container>
    <v-row>
      <v-col cols="auto">
        <v-chip v-for="(filter, index) in filters"
                :key="index"
                class="mr-3">
          {{ filter }}
        </v-chip>
      </v-col>
    </v-row>

    <v-row>
      <v-col
        v-for="(item, index) in cards"
        :key="index"
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
  components: {ArtCard},
  data() {
    return {
      filters: [
        "Landscape",
        "Portrait"
      ],
      cards: [
        {
          picture: "https://images.unsplash.com/photo-1605460375648-278bcbd579a6",
          title: "My Dummy Title",
          author: "Dummy Author",
          description: "dummy description eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
          style: "photography",
          subjects: ["animals"]
        },
        {
          picture: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
          title: "My Dummy Title",
          author: "Dummy Author",
          description: "dummy description eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
          style: "digital",
          subjects: ["abstract"]
        },
        {
          picture: "https://images.unsplash.com/photo-1736616980443-537d3af09915?q=80&w=2581&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          title: "My Dummy Title",
          author: "Dummy Author",
          description: "dummy description eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
          style: "photography",
          subjects: ["plants", "landscape"]
        },
        {
          picture: "https://images.unsplash.com/photo-1710436000845-bb707af976a6?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          title: "My Dummy Title",
          author: "Dummy Author",
          description: "dummy description eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
          style: "photography",
          subject: ["portrait", "vintage"]
        },
        {
          picture: "https://images.unsplash.com/photo-1540206395-68808572332f",
          title: "My Dummy Title",
          author: "Dummy Author",
          description: "dummy description eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
          style: "photography",
          subject: ["architecture"]
        },
        {
          picture: "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d",
          title: "My Dummy Title",
          author: "Dummy Author",
          description: "dummy description eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
          style: "painting",
          subject: ["bw"]
        }
      ],
    };
  },
  setup() {
    return {
      favoritesStore: useFavoritesStore()
    }
  },
};
</script>

<style>

</style>
