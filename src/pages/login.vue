<template>
  <div class="login-container">
    <h1>Welcome to Art Gallery</h1>
    <h4>Please log in to use app functionality</h4>
    <v-form
      ref="loginForm"
      v-model="valid"
      lazy-validation
    >
      <v-text-field
        v-model="credentials.email"
        label="Email"
        type="email"
        :rules="[rules.required, rules.email]"
        required
      />

      <v-text-field
        v-model="credentials.password"
        label="Password"
        type="password"
        :rules="[rules.required]"
        required
      />

      <v-btn
        :disabled="!valid"
        color="#7657c3"
        @click="submitLogin"
      >
        Login
      </v-btn>
    </v-form>
    <p
      v-if="error"
      class="error"
    >
      {{ error }}
    </p>
  </div>
</template>

<script>
import {useAccountStore} from "@/stores/account.js";
import axios from "axios";

export default {
  name: "Login",
  setup() {
    return {
      accountStore: useAccountStore()
    }
  },
  data() {
    return {
      credentials: {
        email: "",
        password: "",
      },
      valid: false,
      error: null,
      rules: {
        required: (value) => !!value || "Field is required.",
        email: (value) =>
          /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || "Invalid email format.",
      },
    };
  },
  methods: {
    async submitLogin() {
      if (this.valid) {
        // Simulate a login API call
        console.log("Logging in with:", this.credentials);

        try {
          let response = await axios.post("http://localhost:8000/users/login", {}, {
            auth: {
              username: this.credentials.email,
              password: this.credentials.password
            }
          })
          console.log("Login response", response)
          this.accountStore.isLoggedIn = true
          this.accountStore.username = response.data.username
          this.accountStore.role = response.data.role

          localStorage.setItem("account", JSON.stringify({
            "isLoggedIn": true,
            "username": response.data.username,
            "role": response.data.role
          }))

          if (this.accountStore.role.toLowerCase() === "buyer") {
            await this.$router.push('/buyer')
          } else {
            await this.$router.push('/artist/add')
          }
        } catch {
          alert("Failed to login, please try again.")
        }

      }
    },
  },
};
</script>

<style scoped>
.login-container {
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  text-align: center;
  border: 1px solid #7657c3;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

.error {
  color: red;
  margin-top: 10px;
}
</style>
