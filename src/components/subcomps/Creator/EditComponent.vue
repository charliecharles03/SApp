<template>
  <div class="creator-container">
    <div class="section">
      <h2>Edit Song</h2>
      <form @submit.prevent="submitSong" class="form">
        <div class="form-group">
          <label>Title:</label>
          <input type="text" v-model="songForm.title" placeholder="Enter song title" required>
        </div>
        <div class="form-group">
          <label>Artist:</label>
          <input type="text" v-model="songForm.artist" placeholder="Enter artist name" required>
        </div>
        <div class="form-group">
          <label>Album:</label>
          <input type="text" v-model="songForm.album" placeholder="Enter album name" required>
        </div>
        <div class="form-group">
          <label>Duration:</label>
          <input type="text" v-model="songForm.duration" placeholder="Enter duration" required>
        </div>
        <div class="form-group">
          <label>Song File:</label>
          <input type="file" @change="handleSongFileChange" accept="audio/*" required>
        </div>
        <div class="form-group">
          <label>Cover Image:</label>
          <input type="file" @change="handleCoverFileChange" accept="image/*" required>
        </div>
        <button type="submit" class="btn">Edit Song</button>
      </form>
    </div>
  </div>
  <div>

  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      songForm: {
        title: '',
        artist: '',
        album: '',
        duration: '',
        songFile: null,
        coverFile: null
      },
      album: {
        title: '',
        artist: ''
      }
    };
  },
  methods: {
    submitSong() {
      const formData = new FormData();
      formData.append('title', this.songForm.title);
      formData.append('artist', this.songForm.artist);
      formData.append('album', this.songForm.album);
      formData.append('duration', this.songForm.duration);
      formData.append('songFile', this.songForm.songFile);
      formData.append('coverFile', this.songForm.coverFile);

      axios.post('http://localhost:5000/api/auth/updatesong', formData, {
        params:{
          song_name: this.songForm.title
        }
      }).then(response => {
        console.log("song successfully updated")
      }).catch(error => {
        console.log(error);
      });
    },
    handleSongFileChange(event) {
      this.songForm.songFile = event.target.files[0];
    },
    handleCoverFileChange(event) {
      this.songForm.coverFile = event.target.files[0];
    },
     submitAlbum() {
      axios.post('/api/albums', this.album)
        .then(response => {
          console.log('Album added successfully:', response.data);
          // You can redirect or perform any other action upon successful addition
        })
        .catch(error => {
          console.error('Error adding album:', error);
        });
    }
  }
};
</script>

<style scoped>
.creator-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.section {
  flex: 1 1 45%;
  margin-bottom: 20px;
  padding:100px;
}

.form-group {
  margin-bottom: 15px;
}

input[type="text"],
input[type="file"] {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.btn {
  background-color: orange;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.btn:hover {
  background-color: darkorange;
}
      .form-group {
  margin-bottom: 15px;
}
input[type="text"] {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
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

