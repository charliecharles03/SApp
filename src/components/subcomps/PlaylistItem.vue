<template>
  <div class="edit-form">
    <label>Title:</label>
    <input type="text" v-model="editedSong.title">
    <label>Artist:</label>
    <input type="text" v-model="editedSong.artist">
    <label>Album:</label>
    <input type="text" v-model="editedSong.album">
    <label>Duration:</label>
    <input type="text" v-model="editedSong.duration">
    <label>Genre:</label>
    <input type="text" v-model="editedSong.genre">
    <label>Year:</label>
    <input type="number" v-model="editedSong.year">
    <label>Cover:</label>
    <input type="text" v-model="editedSong.cover">
    <label>Audio:</label>
    <input type="text" v-model="editedSong.audio">
    <button @click="saveChanges">Save Changes</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      editedSong: {
        title: 'Song Title 1',
        artist: 'Artist Name 1',
        album: 'Album Name 1',
        duration: '3:45',
        genre: 'Pop',
        year: 2020,
        cover: 'https://img.freepik.com/free-psd/club-dj-party-post-social-media-template_505751-3256.jpg',
        audio: 'song_audio1.mp3'
      }
    };
  },
  methods: {
    saveChanges() {
      // Implement save changes functionality here
      console.log('Changes saved:', this.editedSong);
    }
  }
};
</script>

<style scoped>
.edit-form {
  max-width: 400px;
  margin: 0 auto;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
}

button {
  background-color: orange;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: darkorange;
}
</style>
