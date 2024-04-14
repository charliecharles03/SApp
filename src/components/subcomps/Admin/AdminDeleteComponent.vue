<template>
  <div class="admin-delete">
    <h3 class="right">Delete Song</h3>
   <div class="select-container">
      <select v-model="selectedSong" @change="onChange">
        <option value="" disabled selected>Select a song</option>
        <option v-for="song in songs" :key="song.id" :value="song.id">
          {{ song.title }}
        </option>
      </select>
      <button @click="deleteSong" class="delete-btn">Delete</button>
    </div>  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      songs: [],
      selectedSong: null
    };
  },
  mounted () {
    const token = localStorage.getItem('token');
    if (token) {
      // Include JWT token in request headers
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      this.getSongs();
    } else {
      console.error('JWT token not found.');
    }
  },
  methods: {
    getSongs() {
        axios.get('http://localhost:5000/api/auth/recents')
        .then(response => {
          this.songs = response.data;
          console.log(response.data[0]);
        })
        .catch(error => {
          console.error('Error fetching songs:', error);
        });

    },
    deleteSong() {
        const response = axios.delete(`http://localhost:5000/api/auth/deletesong`,{
          params:{
            song_id : this.selectedSong
          }
        }).then(response=>{
          alert('Song deleted successfully');
          this.getSongs(); // Refresh the song dropdown
        }).catch(error=>{
          alert('Error deleting song');
        })
      },
    onChange(event) {
      this.selectedSong = event.target.value;
      console.log(this.selectedSong);
    }
  }
};
</script>

<style>
.right{
  margin-right:30px;
}
.admin-delete {
  margin-top: 20px;
  display:flex;
  justify-content: center;
}

.select-container {
  display: flex;
  align-items: center;
}

.delete-btn {
  margin-left: 10px;
  padding: 8px 16px;
  background-color: #ff4500;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.delete-btn:hover {
  background-color: #e04134;
}
</style>
