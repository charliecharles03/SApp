<template>
  <div class="new-playlist">
    <h1>Create New Playlist</h1>
    <input type="text" placeholder= "New Playlist" class="new-playlist-input" v-model="newPlaylistName"/>
    <br>
    <br>
    <button @click="createNewPlaylist" class="btn">Create Playlist</button>
  </div>
  <div class="playlist">
    <div class="header">
      <button @click="goToHome()" class="backButton">Back</button>
    <h2>{{ playlistName }}</h2>
    </div>
    <div class="playlist-tiles">
      <div v-for="(songs, playlistName) in playlists" :key="playlistName" class="playlist-tile" @click="showPlaylistSongs(songs)">
        <img :src="getPlaylistCover(songs)" alt="Playlist Cover" class="playlist-cover">
        <h3>{{ playlistName }}</h3>
      </div>
    </div>
    <div v-if="selectedPlaylist">
      <div class="playlist-display">
      <h3>{{ selectedPlaylistName }}</h3>
      <SongGallery :songs="selectedPlaylist" />
      </div>
    </div>
  </div>
  <div class="Album">
    <AlbumComponent/>
  </div>
</template>

<script>
import axios from 'axios';
import SongGallery from './SongGallery.vue'
import AlbumComponent from './AlbumComponent.vue'

export default {
 components: {
    SongGallery,
    AlbumComponent
  },
  data() {
    return {
      playlistName: 'Playlists',
      playlists: {},
      selectedPlaylist: null,
      selectedPlaylistName: null,
      newPlaylistName: ''
    };
  },
  created() {
    this.fetchPlaylists();
  },
  methods: {
    fetchPlaylists() {
      // Make Axios call to fetch playlists
      var userId = localStorage.getItem('user_id');
      axios.get('http://localhost:5000/api/auth/getplaylist',{
        params:{
          user_id: userId
        }
      })
        .then(response => {
          this.playlists = response.data.playlists;
        })
        .catch(error => {
          console.error('Error fetching playlists: no songs');
        });
    },
    showPlaylistSongs(songs) {
      this.selectedPlaylist = songs;
      // Get the playlist name from the clicked playlist
      this.selectedPlaylistName = Object.keys(this.playlists).find(playlistName => this.playlists[playlistName] === songs);
    },
    getPlaylistCover(songs) {
      // Return the cover image of the first song in the playlist
      if (songs.length > 0) {
        return songs[0].cover;
      } else {
        return 'placeholder.jpg'; // Provide a placeholder image if playlist has no songs
      }
    },
    goToHome(){
      this.$router.push('/home')
    },
    createNewPlaylist(){
      var userId = localStorage.getItem('user_id');
      axios.post('http://localhost:5000/api/auth/makeplaylist',null,{
        params:{
          user_id: userId,
          playlist_name: this.newPlaylistName
        }
      })
        .then(response => {
          console.log("done")
        })
        .catch(error => {
          console.error('Error fetching playlists: no songs');
        });

    }
  }
};
</script>

<style scoped>
.playlist {
  padding: 20px;
}

.playlist-tiles {
  display: flex;
  flex-wrap: wrap;
}

.playlist-tile {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  cursor: pointer;
}

.playlist-tile:hover {
  background-color: #f0f0f0;
}

.playlist-cover {
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-bottom: 10px;
}
.song {
  color: orange;
}

.playlist-display{
  background-color:orange;

}
.header{
  display:flex;
  gap:1000px;
}

        .backButton{
          background-color: #ff5500;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 5px;
          cursor: pointer;
          transition: transform 0.3s ease; /* Add a transition effect on transform property */
        }
        .backButton:hover{
          transform: scale(1.1);
        }
        .new-playlist-input{
          width:400px;
                  }
        .new-playlist{
          position:relative;
          left:10px;
          margin-bottom:100px;
        }

</style>

