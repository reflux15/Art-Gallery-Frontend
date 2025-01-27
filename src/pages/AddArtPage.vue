<template>
  <h1>Add Art Page</h1>
  <v-sheet class="mx-auto" width="300">
    <v-form @submit.prevent>
      <v-text-field
        v-model="title"
        :rules="rules"
        label="Piece Title"
      ></v-text-field>
      <v-textarea v-model="description" label="Description"></v-textarea>
      <v-btn class="mt-2" type="submit" block>Submit</v-btn>
    </v-form>
  </v-sheet>
</template>

<script>
export default {
  data: () => ({
    title: '',
    description: '',
    rules: [
      value => {
        if (value) return true

        return 'You must enter a title.'
      },
    ],
  }),
}
</script>

<style scoped>

</style>
