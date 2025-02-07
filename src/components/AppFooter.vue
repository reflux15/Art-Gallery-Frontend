<template>
  <v-footer height="40" app>
    <div>
      <p>❤️ 🖼️</p>
    </div>
  </v-footer>
</template>

<script>
import {useAccountStore} from "@/stores/account.js";

export default {
  name: 'AppFooter',
  setup() {
    return {
      accountStore: useAccountStore()
    }
  },
  data() {
    return {};
  },
  created() {
    let accountData = localStorage.getItem("account")
    if (accountData != null) {
      let data = JSON.parse(accountData)
      this.accountStore.isLoggedIn = data.isLoggedIn
      this.accountStore.username = data.username
      this.accountStore.role = data.role
    }
  }
};
</script>

<style scoped lang="sass">
  .social-link :deep(.v-icon)
    color: rgba(var(--v-theme-on-background), var(--v-disabled-opacity))
    text-decoration: none
    transition: .2s ease-in-out

    &:hover
      color: rgba(25, 118, 210, 1)
</style>
