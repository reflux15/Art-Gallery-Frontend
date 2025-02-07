<template>
  <v-app-bar title="Art Gallery" app color="#7657c3">
    <!-- Horizontal navigation list -->
    <v-spacer></v-spacer>
    <div v-if="!accountStore.isLoggedIn">
      <v-btn
        to="/register"
        prepend-icon="mdi-account-plus"
      >
        Register
      </v-btn>
      <v-btn
        to="/login"
        prepend-icon="mdi-logout"
      >
        Login
      </v-btn>
    </div>
    <div v-else>
      <v-chip prepend-icon="mdi-account" class="mr-1"> {{ accountStore.username }}</v-chip>
      <v-btn prepend-icon="mdi-logout" @click="logout">
        Logout
      </v-btn>
    </div>
  </v-app-bar>
</template>

<script>
import {useAccountStore} from "@/stores/account.js";

export default {
  name: 'AppNavbar',
  setup() {
    return {
      accountStore: useAccountStore()
    }
  },
  data() {
    return {};
  },
  methods: {
    logout() {
      localStorage.removeItem("account")
      this.accountStore.isLoggedIn = false
    }
  }
};
</script>

<style scoped>
/* Custom styles for the navigation bar */
.v-app-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
}

.v-btn {
  margin: 0 15px;
}
</style>
