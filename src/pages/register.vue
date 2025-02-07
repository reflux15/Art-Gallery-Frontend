<template>
  <div class="register-container">
    <h1>Register</h1>
    <v-form ref="registerForm" v-model="valid" lazy-validation>
      <v-text-field
        v-model="credentials.name"
        label="Full Name"
        :rules="[rules.required]"
        required
      ></v-text-field>

      <v-text-field
        v-model="credentials.email"
        label="Email"
        type="email"
        :rules="[rules.required, rules.email]"
        required
      ></v-text-field>

      <v-text-field
        v-model="credentials.password"
        label="Password"
        type="password"
        :rules="[rules.required, rules.password]"
        required
      ></v-text-field>

      <v-text-field
        v-model="credentials.confirmPassword"
        label="Confirm Password"
        type="password"
        :rules="[rules.required, rules.passwordMatch]"
        required
      ></v-text-field>
      <v-select
        v-model="credentials.role"
        label="Role"
        :items="roles"
        variant="outlined"
      ></v-select>
      <v-btn
        :disabled="!valid"
        color="#7657c3"
        @click="submitRegister"
      >
        Register
      </v-btn>
    </v-form>
    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Register",
  data() {
    return {
      roles: ['Buyer', 'Artist'],
      credentials: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        role: "Buyer",
      },
      valid: false,
      error: null,
      rules: {
        required: (value) => !!value || "Field is required.",
        email: (value) =>
          /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || "Invalid email format.",
        password: (value) =>
          value.length >= 6 || "Password must be at least 6 characters long.",
        passwordMatch: (value) =>
          value === this.credentials.password || "Passwords do not match.",
      },
    };
  },
  methods: {
    async submitRegister() {
      if (this.valid) {
        // Simulate a registration API call
        console.log("Registering with:", this.credentials);

        // Mock validation: Replace this with real API logic
        if (this.credentials.password !== this.credentials.confirmPassword) {
          this.error = "Passwords do not match.";
        } else {
          this.error = null;
          try {
            let response = await axios.post("http://localhost:8000/users/register", {
              "username": this.credentials.email,
              "password": this.credentials.password,
              "role": this.credentials.role.toLowerCase(),
              "full_name": this.credentials.name,
              "email": this.credentials.email
            })
            if (response.status === 201) {
              await this.$router.push('/login')
            } else {
              alert("Failed to register, please try again!");
            }
          } catch {
            alert("Failed to register, please try again!");
          }
        }
      }
    },
  },
};
</script>

<style scoped>
.register-container {
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
