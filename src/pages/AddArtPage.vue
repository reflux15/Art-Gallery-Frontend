<template>
  <h1>Add Art Page</h1>
  <v-sheet class="mx-auto" width="600">
    <v-form @submit.prevent>
      <v-text-field
        v-model="title"
        :rules="rules"
        label="Piece Title"
      ></v-text-field>
      <v-select
        v-model="art_category"
        label="Category"
        :items="['Paintings', 'Digital Art', 'Photography']"
      ></v-select>
      <v-select
        v-model="art_subject"
        label="Subject"
        :multiple="true"
        :items="['Landscapes', 'Florals and Plants', 'Abstract', 'Animals', 'Portraits', 'Vintage', 'Architecture', 'Black & White']"
      ></v-select>
      <v-row>
        <v-col cols="8">
          <v-number-input disabled v-model="price" label="Price"></v-number-input>
        </v-col>
        <v-col cols="4">
          <v-select
            disabled
            :items="currencies"
            model-value="EUR"
            density="compact"
            label="Currency"
          ></v-select>
        </v-col>
      </v-row>
      <v-img :src="previewImage" class="uploading-image mt-4 mb-4"></v-img>
      <v-file-input
        :rules="rules"
        accept="image/png, image/jpeg, image/bmp"
        label="Art Piece"
        placeholder="Upload Image"
        prepend-icon="mdi-camera"
        @change=uploadImage
      ></v-file-input>
      <v-btn class="mt-2" @click="finishUpload">Save</v-btn>
    </v-form>
  </v-sheet>
</template>

<script>
import { VNumberInput } from 'vuetify/labs/VNumberInput'
import axios from "axios";
import {useAccountStore} from "@/stores/account.js";

export default {
  components: {
    VNumberInput,
  },
  setup() {
    return {
      accountStore: useAccountStore()
    }
  },
  data: () => ({
    title: '',
    art_category: 'Paintings',
    art_subject: ["Landscapes"],
    price: 100,
    currencies: [ "USD", "EUR", "RON" ],
    uploadedFilename: "",
    previewImage: null,
    rules: [
      value => {
        if (value) return true
        return 'You must enter a title.'
      },
    ],
  }),
  methods: {
    async uploadImage(e){
      let formData = new FormData();

      const image = e.target.files[0];

      formData.append("file", image);

      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = e =>{
        this.previewImage = e.target.result;
      };

      try {
        let response = await axios.post("http://localhost:8000/art/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        this.uploadedFilename = response.data.filename;
      } catch (e) {
        alert("failed to upload image" + e)
        window.location.reload();
      }
    },
    async finishUpload() {
      try {
        await axios.post("http://localhost:8000/art/image", {
          name: this.title,
          category: this.art_category,
          subject: this.art_subject.join(","),
          file_name: this.uploadedFilename,
          artist_name: this.accountStore.username
        })
        alert("upload success")
        window.location.reload();
      } catch (e) {
        alert("save failed")
        console.error(e)
      }
    }
  }
}
</script>

<style scoped>
.uploading-image{
  display:flex;
}
</style>
