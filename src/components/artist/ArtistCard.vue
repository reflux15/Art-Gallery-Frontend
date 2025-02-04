<template>
  <v-card class="d-inline artist-card">
    <div class="d-flex pa-8">
      <div class="d-flex flex-column">
        <img class="artist-background" :src="artistBackground">
        <div class="d-flex flex-row align-center">
          <img class="artist-image" :src="artistImage">
          <div class="d-flex ma-4 flex-column artist-name">
            <h1>{{ name }}</h1>
            <p class="artist-description">{{description}}</p>
          </div>
        </div>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "ArtistCard",
  props: {
    name: {
      type: String,
      default: "Jean Bass"
    },
    description: {
      type: String,
      default: "Jean bass is an artist."
    },
    artistImage: {
      type: String,
      default: "https://images.unsplash.com/photo-1584661156681-540e80a161d3?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    artistBackground: {
      type: String,
      default: "https://plus.unsplash.com/premium_photo-1664438942574-e56510dc5ce5?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  }
}
</script>

<style scoped>
.artist-card {
  margin: 15px;
}

.artist-background {
  width: 400px;
  height: 90px;
  z-index: -10;
  opacity: 80%;
  transform: translate(-15px, -15px);
  border: 1px solid black;
  position: absolute;
  object-fit: cover;
}

.artist-image {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border: 3px solid rgba(233, 153, 96, 0.54);
}

.artist-name {
  background: rgba(255, 255, 255, 0.85);
  padding: 14px;
  border-radius: 25px;
}

.artist-description {
  max-width: 100px;
  max-height: 50px;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
