<template>
  <div class="gallery">
    <div class="song-card" v-for="song in songs" :key="song.title" @click="playSong(song)">
      <img :src="song.cover" :alt="`${song.title} - ${song.artist}`">
      <div class="song-details">
        <h3>{{ song.title }}</h3>
        <p>{{ song.artist }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SongGallery',
  props: {
    songs: {
      type: Array,
      required: true
    }
  },
  methods: {
    playSong (song) {
      // Here you can implement the logic to play the selected song
      this.$emit('send-data', song.song_id);
    }
  }
}
</script>

<style scoped>
.gallery {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  margin-bottom: 20px;
}

.song-card {
  flex: 0 0 auto;
  width: 200px;
  margin-right: 10px;
  scroll-snap-align: start;
}

.song-card img {
  width: 100%;
  height: auto;
}

.song-details {
  text-align: center;
}

.song-details h3 {
  margin-top: 5px;
  margin-bottom: 0;
  font-size: 14px;
}

.song-details p {
  font-size: 12px;
  color: #666;
  margin-top: 0;
}
</style>

