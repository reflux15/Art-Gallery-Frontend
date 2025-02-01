<script>

import OrderItemCardNew from "@/components/buyer/OrderItemCard.vue";

export default {
  name: "OrdersPage",
  components: {OrderItemCardNew},
  data() {
    return {
      orders: [
        {
          id: 1,
          img: "https://images.unsplash.com/photo-1605460375648-278bcbd579a6",
          itemName: "Item 1",
          authorName: "Author 1",
          price: 59.99,
          currency: "$"
        },
        {
          id: 2,
          img: "https://images.unsplash.com/photo-1605460375648-278bcbd579a6",
          itemName: "Item 2",
          authorName: "Author 2",
          price: 59.99,
          currency: "$"
        }
      ]
    }
  }
}
</script>

<template>
  <OrderItemCardNew
    v-for="order in orders"
    :key="order.id"
    :img="order.img"
    :item-name="order.itemName"
    :author-name="order.authorName"
    :price="order.price"
    :currency="order.currency"
    class="pb-5 pl-5"
  />
  <v-row></v-row>

</template>

<style scoped>

</style>
