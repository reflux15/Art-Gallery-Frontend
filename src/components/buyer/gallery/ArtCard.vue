<template>
  <v-card
    class="mx-auto"
  >
    <v-img
      max-height="600px"
      max-width="600px"
      class="rounded display-image"
      :src="img"
      cover
    ></v-img>

    <v-card-title>
      {{title}}
    </v-card-title>

    <v-card-subtitle>
      {{author}}
    </v-card-subtitle>

    <v-card-actions>
      <v-btn variant="outlined"
        color="#7657c3"
        :text="isOrderClicked ? 'Ordered' : 'Order Now'"
        @click="toggleOrderClick"
       :disabled='isOrderClicked === true'
      ></v-btn>

      <v-btn
        color="red"
        :icon="isHeartClicked ? 'mdi-heart' : 'mdi-heart-outline'"
        @click="toggleHeartClick"
      ></v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>
        <v-card-text>
          {{description}}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
import {useFavoritesStore} from "@/stores/favorites.js";

export default {
  name: "ArtCard",
  props: {
    img: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    }
  },
  setup() {
    return {
      favoritesStore: useFavoritesStore()
    }
  },
  data: () => ({
    show: true,
    isHeartClicked: true,
    isOrderClicked: false,
  }),
  mounted() {
    this.isHeartClicked = this.favoritesStore.isItemFavorited({
      picture: this.img,
      title: this.title,
      author: this.author,
      description: this.description
    })
  },
  methods: {
    toggleHeartClick() {
      console.log("click favorite", this.img, this.isHeartClicked)
      this.isHeartClicked = !this.isHeartClicked;
      console.log("after click", this.img, this.isHeartClicked)
      if (this.isHeartClicked) {
        this.actionAddToFavorites({
          picture: this.img,
          title: this.title,
          author: this.author,
          description: this.description
        })
      } else {
        this.actionRemoveFromFavorites({
          picture: this.img,
          title: this.title,
          author: this.author,
          description: this.description
        })
      }
    },
    toggleOrderClick() {
      this.isOrderClicked = !this.isOrderClicked;
    },
    actionAddToFavorites(item) {
      this.favoritesStore.addFavorite(item)
    },
    actionRemoveFromFavorites(item) {
      this.favoritesStore.removeFavoritedItem(item)
    }

  },
}
</script>

<style scoped>

</style>
