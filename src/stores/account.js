// Utilities
import { defineStore } from 'pinia'
import _ from "lodash";

export const useAccountStore = defineStore('account', {
  state: () => ({
    isLoggedIn: false
  }),
  actions: {}
})
