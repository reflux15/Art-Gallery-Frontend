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
  data: () => ({
    show: true,
    isHeartClicked: false,
    isOrderClicked: false,
  }),
  methods: {
    toggleHeartClick() {
      this.isHeartClicked = !this.isHeartClicked;
    },
    toggleOrderClick() {
      this.isOrderClicked = !this.isOrderClicked;
    },
  },
}
</script>

<style scoped>

</style>
