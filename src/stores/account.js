// Utilities
import { defineStore } from 'pinia'

export const useAccountStore = defineStore('account', {
  state: () => ({
    isLoggedIn: false,
    username: "",
    role: ""
  }),
  actions: {}
})
