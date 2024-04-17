<template>
  <div class="creator-container">
    <div class="section" >
      <h2>Albums</h2>
     <div>
    <h2>Add New Album</h2>
    <form @submit.prevent="submitAlbum">
      <div class="form-group">
        <label>Title:</label>
        <input type="text" v-model="album.title" required>
        <br/>
        <br/>
        <label>Song Name:</label>
        <input type="text" v-model="album.song_name" required>
      </div>
      <button type="submit">Add Album</button>
    </form>
  <div v-if="showSuccessAlert" class="success-alert">
      New album added successfully!
  </div>
  </div>
    </div>
    <div class="section">
      <h2>Add Song</h2>
      <form @submit.prevent="submitSong" class="form">
        <div class="form-group">
          <label>Title:</label>
          <input type="text" v-model="songForm.title" placeholder="Enter song title" required>
        </div>

        <div class="form-group">
          <label>Duration:</label>
          <input type="text" v-model="songForm.duration" placeholder="Enter duration" required>
        </div>
        <div class="form-group">
          <label>Song File:</label>
          <input type="file" @change="handleSongFileChange" accept="audio/*" required>
        </div>
               <button type="submit" class="btn">Add Song</button>
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
      },
      showSuccessAlert: false
    };
  },
  methods: {
    submitSong() {
      var art = localStorage.getItem('username');
      const formData = new FormData();
      formData.append('title', this.songForm.title);
      formData.append('artist', art);
      formData.append('album', this.songForm.album);
      formData.append('duration', this.songForm.duration);
      formData.append('songFile', this.songForm.songFile);
      formData.append('coverFile', "https://ca-times.brightspotcdn.com/dims4/default/302667d/2147483647/strip/true/crop/1918x1080+1+0/resize/840x473!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Faf%2F9a%2F9066819041738684fccba4d8984e%2Frecords-spin-0000000.jpg");
      formData.append('duration',10);
      formData.append('year',2021);
      console.log(formData);

      axios.post('http://localhost:5000/api/auth/addsong', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(response => {
        // Handle response
        console.log(response.data);
      }).catch(error => {
         console.log("not being able to add new song please ")
      });
    },
    handleSongFileChange(event) {
      this.songForm.songFile = event.target.files[0];
    },
    handleCoverFileChange(event) {
      this.songForm.coverFile = event.target.files[0].name;
      console.log(event.target.files[0].name);
    },

    submitAlbum() {
      console.log(this.album.title);
      console.log(this.album.song_name);
      const data = {
        user_id: localStorage.getItem('user_id'),
        song_name: this.album.song_name,
        album_name: this.album.title
      };
      axios.post('http://localhost:5000/api/auth/addalbum',data).
        then(response=>{
          this.showSuccessAlert = true;
          console.log('Album added successfully:', response.data);
        })
        .catch(error =>{
          console.log("not")
        })
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
        .success-alert {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  margin-top: 10px;
}
</style>

