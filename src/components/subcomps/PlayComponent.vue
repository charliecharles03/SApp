<template>
  <div class="song-playing">
    <img :src="song.cover" alt="Album Cover" class="cover-image">
    <div class="song-details">
      <h2>{{ song.title }}</h2>
      <p>{{ song.artist }} - {{ song.album }}</p>
      <p>Genre: {{ song.genre }}</p>
      <p>Year: {{ song.year }}</p>
      <p>Duration: {{ song.duration }}</p>
      <audio controls :src="song.audio" class="audio-player"></audio>
    </div>
    <button @click="addToPlaylist" class="add-to-playlist-btn">Add to Playlist</button>
  </div>
</template>

<script>
  import AddToPlaylistPopup from './AddToPlaylistPopup.vue';
export default {
  props: {
    song: {
      type: Object,
      required: true
    }
  },
  methods: {
    addToPlaylist() {
      // Implement the logic to add the song to a playlist
      var userId= localStorage.getItem('user_id');
      console.log('Added to playlist:', this.song.id);
      console.log('Added to userId:',userId);
      this.$emit('add-to',this.song.id);
    }
  }
};
</script>

<style scoped>
.song-playing {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.cover-image {
  width: 150px;
  height: 150px;
  border-radius: 8px;
  margin-right: 20px;
}

.song-details {
  flex-grow: 1;
}

.audio-player {
  width: 100%;
  margin-top: 10px;
}

.add-to-playlist-btn {
  background-color: orange;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.add-to-playlist-btn:hover {
  background-color: darkorange;
}
</style>
