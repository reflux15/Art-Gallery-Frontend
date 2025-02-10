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
        :items="['Landscapes', 'Florals and Plants', 'Abstract', 'Animals', 'Portraits', 'Vintage', 'Architecture', 'Black & White']"
      ></v-select>
      <v-row>
        <v-col cols="8">
          <v-number-input v-model="price" label="Price"></v-number-input>
        </v-col>
        <v-col cols="4">
          <v-select
            :items="currencies"
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
      <v-btn class="mt-2" type="submit" block>Save</v-btn>
    </v-form>
  </v-sheet>
</template>

<script>
import { VNumberInput } from 'vuetify/labs/VNumberInput'

export default {
  components: {
    VNumberInput,
  },
  data: () => ({
    title: '',
    art_category: 'Paintings',
    art_subject: "Landscapes",
    price: 0,
    currencies: [ "USD", "EUR", "RON" ],
    previewImage: null,
    rules: [
      value => {
        if (value) return true
        return 'You must enter a title.'
      },
    ],
  }),
  methods: {
    uploadImage(e){
      const image = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = e =>{
        this.previewImage = e.target.result;
        console.log(this.previewImage);
      };
    }
  }
}
</script>

<style scoped>
.uploading-image{
  display:flex;
}
</style>
