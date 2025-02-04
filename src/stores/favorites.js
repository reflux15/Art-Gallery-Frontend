// Utilities
import { defineStore } from 'pinia'
import _ from "lodash";

export const useFavoritesStore = defineStore('favorites', {
  state: () => ({
    favouritedItems: [],
  }),
  actions: {
    addFavorite(item) {
      this.favouritedItems.push(item)
    },
    removeFavoritedItem(item) {
      _.remove(this.favouritedItems, function (i) {
        return i.picture === item.picture;
      });
    },
    isItemFavorited(item) {
      return _.find(this.favouritedItems, function (i) {
        return i.picture === item.picture;
      }) !== undefined;
    }
  }
})
