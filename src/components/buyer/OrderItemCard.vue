<template>
  <v-card class="mx-auto" max-width="80%">
    <v-sheet>
      <v-row align="center" justify="center">
        <v-col cols="2">
          <v-img
            max-height="400px"
            max-width="400px"
            :src="img"
            class="rounded display-image pt-5"
          ></v-img>
        </v-col>

        <v-col cols="4">
          <v-card-title>{{itemName}}</v-card-title>
          <v-card-subtitle>{{price}} {{currency}}</v-card-subtitle>
          <v-card-text>{{authorName}}</v-card-text>
        </v-col>

        <v-col cols="3" >
          <h1>Status</h1>
        </v-col>

        <v-col cols="3">
          <h1>Estimated Delivery</h1>
        </v-col>

      </v-row>
    </v-sheet>

  </v-card>
</template>

<script>
export default {
  name: "OrderItemCardNew",
  props: {
    img: {
      type: String,
      required: true,
    },
    itemName: {
      type: String,
      required: true,
    },
    authorName: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    currency: {
      type: String,
      required: true,
    }
  }
}
</script>

<style scoped>

</style>
