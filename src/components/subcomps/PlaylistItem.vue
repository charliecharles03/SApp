<template>
  <div class="playlist-item">
    <img :src="song.cover" alt="Song Cover" class="cover-image">
    <div class="song-details">
      <p><strong>Title:</strong> {{ song.title }}</p>
      <p><strong>Artist:</strong> {{ song.artist }}</p>
      <p><strong>Album:</strong> {{ song.album }}</p>
      <p><strong>Genre:</strong> {{ song.genre }}</p>
      <p><strong>Year:</strong> {{ song.year }}</p>
      <p><strong>Duration:</strong> {{ song.duration }}</p>
    </div>
    <audio controls :src="song.audio" class="audio-player">
      Your browser does not support the audio element.
    </audio>
  </div>
</template>

<script>
export default {
  props: {
    song: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.playlist-item {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.cover-image {
  width: 100px;
  height: 100px;
  margin-right: 20px;
}

.song-details {
  flex-grow: 1;
}

.audio-player {
  margin-left: 20px;
  width: 200px;
}
</style>

