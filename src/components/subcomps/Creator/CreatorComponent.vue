<template>
  <div class="creator-container">
    <h1 class="title">Creator Component</h1>
    <ul class="song-list">
      <li v-for="(song, index) in songs" :key="index" class="song-item">
        <div class="song-details">
          <p class="song-info"><strong>{{ song.title }}</strong> - {{ song.artist }} ({{ song.album }})</p>
        </div>
        <div class="button-group">
          <button class="edit-btn" @click="editSong(index)">Edit</button>
          <button class="delete-btn" @click="deleteSong(index)">Delete</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      songs: []
    };
  },
  computed: {
    filteredSongs() {
      return this.songs.filter(song =>
        song.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  mounted () {
    const token = localStorage.getItem('token');
    if (token) {
      // Include JWT token in request headers
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      this.fetchSongs();
    } else {
      console.error('JWT token not found.');
    }
  },

  methods: {
    editSong(index) {
      console.log('Edit song:', this.songs[index]);
      // Implement edit logic here
    },
    deleteSong(index) {
      console.log('Delete song:', this.songs[index]);
      // Implement delete logic here
    }
    ,
    fetchSongs () {
      // Fetch songs from the server
       axios.get('http://localhost:5000/api/auth/recents')
        .then(response => {
          this.songs = response.data;
          console.log(response.data)
        })
        .catch(error => {
          console.error('Error fetching songs:', error);
        });
    },
  }
};
</script>

<style scoped>
.creator-container {
  padding: 20px;
}

.title {
  font-size: 2em;
  color: black; /* White title color */
  margin-bottom: 20px;
}

.song-list {
  list-style-type: none;
  padding: 0;
  width:20%;
  display:flex;
  flex-direction:column;
  background-color:orange;
  gap:5px;
  margin-bottom:10px;
}

.song-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
}

.song-details {
  flex-grow: 1;
}

.song-info {
  margin: 0;
  font-size: 1em;
  color: #fff; /* White song info color */
}

.button-group button {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1em;
  transition: background-color 0.3s ease;
}

.edit-btn {
  background-color: orange; /* Orange button color */
  color: #fff;
}

.delete-btn {
  background-color: #1f1f1f; /* Dark gray background */
  color: #fff;
}

.button-group button:hover {
  background-color: #ff8c00; /* Darker orange on hover */
}
</style>

